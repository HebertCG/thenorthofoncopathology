import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Microscope,
} from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

interface TeamMember {
  name: string;
  shortName: string;
  role: string;
  credential: string;
  summary: string;
  expertise: string[];
  image: string;
  link?: string;
  sourceLabel?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Luis Manuel Taxa",
    shortName: "Luis Manuel Taxa",
    role: "Patología clínica oncológica",
    credential: "PhD · Dirección e investigación en patología",
    summary:
      "Médico patólogo dedicado al diagnóstico oncológico y a la investigación del cáncer. Su trayectoria integra liderazgo clínico, tejidos tumorales y tecnologías para el análisis de precisión.",
    expertise: ["Patología oncológica", "Investigación en cáncer", "Tejidos tumorales"],
    image: "/Luis-Manuel-Taxa.webp",
    link: "https://www.gob.pe/institucion/prociencia/noticias/507266-inen-presenta-el-primer-microscopio-laser-altamente-especializado-en-el-peru-para-investigar-el-cancer",
    sourceLabel: "Ver referencia profesional",
  },
  {
    name: "Dr. Henry Guerra",
    shortName: "Henry Guerra",
    role: "Patología mamaria y de cabeza y cuello",
    credential: "Anátomo patólogo · Formación en INEN y Torino",
    summary:
      "Especialista con amplia experiencia en patología oncológica, particularmente en mama, cabeza y cuello. Combina práctica diagnóstica, consultoría especializada y formación médica.",
    expertise: ["Patología mamaria", "Cabeza y cuello", "Docencia médica"],
    image: "/Henry-Guerra.webp",
    link: "https://patologosespecializados.com.pe/?team=dr-henry-guerra",
    sourceLabel: "Ver perfil profesional",
  },
  {
    name: "Dr. Sandro Casavilca",
    shortName: "Sandro Casavilca",
    role: "Neuropatología y patología oncológica",
    credential: "Doctor en Neurociencias · Magíster en Patología",
    summary:
      "Especialista en neuropatología con actividad clínica y científica vinculada a tumores del sistema nervioso central, biomarcadores y diagnóstico anatomopatológico especializado.",
    expertise: ["Neuropatología", "Tumores cerebrales", "Investigación biomédica"],
    image: "/Sandro-Casavilca.webp",
    link: "https://pe.linkedin.com/in/sandro-casavilca-zambrano-174023a5",
    sourceLabel: "Ver perfil en LinkedIn",
  },
  {
    name: "Dr. Carlos Barrionuevo",
    shortName: "Carlos Barrionuevo",
    role: "Hematopatología y oncología molecular",
    credential: "Doctor en Medicina · Maestría en Oncología Molecular",
    summary:
      "Patólogo especializado en enfermedades hematológicas y oncología molecular. Su formación combina hematopatología, bioquímica y diagnóstico avanzado de neoplasias.",
    expertise: ["Hematopatología", "Oncología molecular", "Patología diagnóstica"],
    image: "/Carlos-Barrionuevo.webp",
    link: "https://pe.linkedin.com/in/carlos-barrionuevo-cornejo-4350b035",
    sourceLabel: "Ver perfil en LinkedIn",
  },
  {
    name: "Dr. Jaime Montes",
    shortName: "Jaime Montes",
    role: "Anatomía patológica oncológica",
    credential: "Médico especialista en anatomía patológica",
    summary:
      "Participa en la evaluación anatomopatológica de casos oncológicos y en la revisión multidisciplinaria que permite integrar los hallazgos microscópicos con la información clínica.",
    expertise: ["Anatomía patológica", "Evaluación oncológica", "Revisión de casos"],
    image: "/Jaime-Montes.webp",
  },
  {
    name: "Dr. Franco Doimi",
    shortName: "Franco Doimi",
    role: "Patología molecular y oncogenómica",
    credential: "Anátomo patólogo · Patólogo oncólogo",
    summary:
      "Especialista en patología quirúrgica, molecular y digital. Su trabajo incorpora secuenciación, biomarcadores y nuevas herramientas para el diagnóstico de precisión en cáncer.",
    expertise: ["Patología molecular", "Oncogenómica", "Patología digital"],
    image: "/Franco-Doimi.webp",
    link: "https://pe.linkedin.com/in/franco-doimi-5991156b/",
    sourceLabel: "Ver perfil en LinkedIn",
  },
];

// Ritmo del carrusel de especialistas y umbrales del gesto de arrastre.
const AUTOPLAY_DELAY = 3500;
const SWIPE_DISTANCE = 70;
const SWIPE_VELOCITY = 380;

const TeamSection = () => {
  const reduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const selectMember = useCallback(
    (index: number) => {
      const normalizedIndex = (index + teamMembers.length) % teamMembers.length;
      setSelectedIndex(normalizedIndex);
      emblaApi?.scrollTo(normalizedIndex);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (reduceMotion || isDesktopHovered) return;
    const autoplayTimer = window.setTimeout(() => {
      selectMember(selectedIndex + 1);
    }, AUTOPLAY_DELAY);
    return () => window.clearTimeout(autoplayTimer);
  }, [isDesktopHovered, reduceMotion, selectMember, selectedIndex]);

  const selectedMember = teamMembers[selectedIndex];

  // Arrastrar la ficha cambia de especialista, igual que el carrusel de portada.
  const handleDragEnd = useCallback(
    (_event: unknown, info: PanInfo) => {
      const { offset, velocity } = info;

      if (offset.x < -SWIPE_DISTANCE || velocity.x < -SWIPE_VELOCITY) {
        selectMember(selectedIndex + 1);
        return;
      }

      if (offset.x > SWIPE_DISTANCE || velocity.x > SWIPE_VELOCITY) {
        selectMember(selectedIndex - 1);
      }
    },
    [selectMember, selectedIndex],
  );

  const controls = (compact = false) => (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Especialista anterior"
        onClick={() => selectMember(selectedIndex - 1)}
        className={`${compact ? "h-10 w-10" : "h-11 w-11"} grid place-items-center rounded-full border border-primary/20 bg-background text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:translate-y-px`}
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Siguiente especialista"
        onClick={() => selectMember(selectedIndex + 1)}
        className={`${compact ? "h-10 w-10" : "h-11 w-11"} grid place-items-center rounded-full border border-primary/20 bg-background text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:translate-y-px`}
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <section id="equipo" className="section-padding overflow-hidden bg-[#f8f8f1] dark:bg-card">
      <div className="container-custom">
        <AnimatedSection className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Nuestro equipo
          </span>

          <h2 className="section-title mt-6">
            Equipo <span className="gradient-text">Multidisciplinario</span> de Expertos
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Contamos con un equipo de patólogos oncólogos altamente capacitados, comprometidos con la excelencia
            diagnóstica y el bienestar del paciente.
          </p>
        </AnimatedSection>

        <div className="mt-12 lg:hidden sm:mt-16">
          <div ref={emblaRef} className="overflow-visible">
            <div className="flex touch-pan-y items-stretch">
              {teamMembers.map((member, index) => {
                const active = index === selectedIndex;
                return (
                  <div key={member.name} className="min-w-0 flex-[0_0_82%] px-2 sm:flex-[0_0_48%]">
                    <motion.article
                      animate={reduceMotion ? {} : { scale: active ? 1 : 0.91, y: active ? 0 : 22, opacity: active ? 1 : 0.58 }}
                      transition={{ type: "spring", stiffness: 210, damping: 25 }}
                      className={`relative h-full overflow-hidden rounded-[20px] border bg-[#ececdd] shadow-[0_24px_60px_-34px_rgba(9,49,57,.58)] transition-colors ${active ? "border-primary/35" : "border-white/70"}`}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.98),rgba(238,240,224,.85)_56%,rgba(132,27,26,.10))]" />
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="relative h-full w-full object-cover object-top mix-blend-multiply"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#142129] via-[#142129]/78 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                          <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">{member.name}</h3>
                          <p className="mt-1 text-sm leading-5 text-[#fab085]">{member.role}</p>
                        </div>
                      </div>
                      {member.link && (
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver perfil de ${member.name}`}
                          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/88 text-primary shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Especialista anterior"
              onClick={() => selectMember(selectedIndex - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-background text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:translate-y-px"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" aria-label={`Especialista ${selectedIndex + 1} de ${teamMembers.length}`}>
              {teamMembers.map((member, index) => (
                <button
                  type="button"
                  key={member.name}
                  aria-label={`Mostrar a ${member.name}`}
                  aria-current={index === selectedIndex ? "true" : undefined}
                  onClick={() => selectMember(index)}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${index === selectedIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/25 hover:bg-primary/45"}`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Siguiente especialista"
              onClick={() => selectMember(selectedIndex + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-background text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:translate-y-px"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <AnimatedSection className="mt-12 hidden lg:block">
          <div
            onMouseEnter={() => setIsDesktopHovered(true)}
            onMouseLeave={() => setIsDesktopHovered(false)}
          >
            <div className="mb-5 grid grid-cols-3 gap-3 xl:grid-cols-6">
              {teamMembers.map((member, index) => {
                const active = index === selectedIndex;
                return (
                  <button
                    type="button"
                    key={member.name}
                    aria-label={`Mostrar información de ${member.name}`}
                    aria-current={active ? "true" : undefined}
                    onClick={() => selectMember(index)}
                    className={`group grid min-h-[78px] grid-cols-[44px_1fr] items-center gap-3 rounded-[16px] border p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:translate-y-px ${
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-[0_14px_32px_-20px_rgba(9,94,103,.72)]"
                        : "border-white/80 bg-background/80 text-foreground hover:border-primary/35 hover:bg-background"
                    }`}
                  >
                    <span className={`h-11 w-11 overflow-hidden rounded-[12px] ${active ? "bg-white/18" : "bg-[#e9e9d8]"}`}>
                      <img src={member.image} alt="" loading="lazy" className="h-full w-full object-cover object-top mix-blend-multiply" />
                    </span>
                    <span className="min-w-0 text-sm font-extrabold leading-[1.15]">{member.shortName}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[20px] border border-white/80 bg-card shadow-[0_34px_90px_-48px_rgba(9,49,57,.55)] xl:min-h-[530px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={selectedMember.name}
                  initial={reduceMotion ? false : { opacity: 0, x: 26 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -22 }}
                  transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.16}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 grid cursor-grab grid-cols-[minmax(390px,.88fr)_minmax(0,1.12fr)] active:cursor-grabbing"
                >
                  <div className="relative isolate overflow-hidden bg-[#e9e9d8] [perspective:1400px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.98),rgba(238,240,224,.85)_56%,rgba(132,27,26,.10))]" />
                    <motion.img
                      key={selectedMember.image}
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      loading="lazy"
                      draggable={false}
                      initial={reduceMotion ? false : { opacity: 0, x: -38, rotateY: 8, scale: 1.025 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-full w-full object-cover object-top mix-blend-multiply [transform-origin:center_left]"
                    />
                  </div>

                  <div className="flex min-w-0 flex-col justify-center p-7 xl:p-9 2xl:p-10">
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-sm font-bold text-primary">
                        Especialista {String(selectedIndex + 1).padStart(2, "0")} de {String(teamMembers.length).padStart(2, "0")}
                      </p>
                      {controls(true)}
                    </div>

                    <div className="mt-6 max-w-2xl">
                      <h3 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-foreground xl:text-5xl">
                        {selectedMember.name}
                      </h3>
                      <p className="mt-3 text-xl font-bold leading-7 text-primary xl:text-2xl">
                        {selectedMember.role}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-foreground/62 xl:text-base">
                        {selectedMember.credential}
                      </p>
                      <p className="mt-4 max-w-[60ch] text-base leading-7 text-muted-foreground xl:text-lg xl:leading-8">
                        {selectedMember.summary}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-border/80 pt-4">
                      <div className="grid grid-cols-3 gap-4">
                        {selectedMember.expertise.map((item) => (
                          <div key={item} className="min-w-0">
                            <Microscope className="h-5 w-5 text-primary" strokeWidth={1.8} aria-hidden="true" />
                            <p className="mt-2 text-sm font-bold leading-5 text-foreground xl:text-base">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedMember.link && (
                      <a
                        href={selectedMember.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_28px_-14px_rgba(9,94,103,.58)] transition hover:-translate-y-0.5 hover:bg-primary/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px"
                      >
                        {selectedMember.sourceLabel}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TeamSection;
