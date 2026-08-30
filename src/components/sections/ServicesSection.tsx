import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

type ServiceCategory = "diagnostico" | "avanzados";

const services = [
  {
    category: "diagnostico" as const,
    title: "Análisis anatomopatológico integral",
    description: "Estudio microscópico de tejidos oncológicos y no oncológicos con alta precisión diagnóstica.",
    image: "/diagnostico.jpg",
  },
  {
    category: "diagnostico" as const,
    title: "Biopsias",
    description: "Biopsia core, punch, incisional y citología de Papanicolaou con procesamiento oportuno.",
    image: "/proposito-laboratorio.jpg",
  },
  {
    category: "diagnostico" as const,
    title: "Piezas quirúrgicas",
    description: "Evaluación de márgenes, estadificación TNM y análisis completo de especímenes postoperatorios.",
    image: "/futuro-de-oncologia.jpg",
  },
  {
    category: "avanzados" as const,
    title: "Inmunohistoquímica",
    description: "Más de 50 marcadores para caracterizar tumores y orientar decisiones terapéuticas.",
    image: "/futuro-oncologico-esta-aqui.jpg",
  },
  {
    category: "avanzados" as const,
    title: "Segunda opinión patológica",
    description: "Revisión experta de tacos, láminas e informes provenientes de otras instituciones.",
    image: "/diagnostico.jpg",
  },
  {
    category: "avanzados" as const,
    title: "Consulta multidisciplinaria",
    description: "Discusión de casos complejos entre especialistas para alcanzar una decisión diagnóstica consensuada.",
    image: "/proposito-laboratorio.jpg",
  },
];

const categoryTabs: { id: ServiceCategory; label: string }[] = [
  { id: "diagnostico", label: "Diagnóstico esencial" },
  { id: "avanzados", label: "Patología avanzada" },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("diagnostico");
  const [selectedService, setSelectedService] = useState(0);
  const [serviceSnaps, setServiceSnaps] = useState<number[]>([]);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const reduceMotion = useReducedMotion();
  const visibleServices = useMemo(
    () => services.filter((service) => service.category === activeCategory),
    [activeCategory],
  );
  const [servicesRef, servicesApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 1024px)": { active: false },
    },
  });

  const syncCarouselState = useCallback((api: EmblaCarouselType) => {
    setSelectedService(api.selectedScrollSnap());
    setServiceSnaps(api.scrollSnapList());
    setCanScrollPrevious(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    const handleCategorySelect = (event: Event) => {
      const category = (event as CustomEvent<ServiceCategory>).detail;
      if (category === "diagnostico" || category === "avanzados") setActiveCategory(category);
    };

    window.addEventListener("select-service-category", handleCategorySelect);
    return () => window.removeEventListener("select-service-category", handleCategorySelect);
  }, []);

  useEffect(() => {
    if (!servicesApi) return;

    const sync = () => syncCarouselState(servicesApi);
    sync();
    servicesApi.on("select", sync).on("reInit", sync);

    return () => {
      servicesApi.off("select", sync).off("reInit", sync);
    };
  }, [servicesApi, syncCarouselState]);

  useEffect(() => {
    if (!servicesApi) return;

    const frame = window.requestAnimationFrame(() => {
      servicesApi.reInit();
      servicesApi.scrollTo(0, true);
      syncCarouselState(servicesApi);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeCategory, servicesApi, syncCarouselState]);

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section id="servicios" className="overflow-hidden bg-[#f1f6f7] py-20 dark:bg-background sm:py-24">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-title text-balance">Servicios Especializados en Oncopatología</h2>
          <p className="section-copy mt-5">
            Ofrecemos una gama completa de servicios de diagnóstico anatomopatológico con los más altos estándares de calidad y precisión.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.06}>
          <div className="mt-9 flex gap-7 overflow-x-auto border-b border-foreground/20 scrollbar-hide" role="tablist" aria-label="Categorías de servicios">
            {categoryTabs.map((tab) => {
              const active = tab.id === activeCategory;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="services-panel"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative shrink-0 pb-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {tab.label}
                  {active && (
                    <motion.span
                      layoutId="service-tab-line"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              id="services-panel"
              key={activeCategory}
              role="tabpanel"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div ref={servicesRef} data-testid="services-carousel" className="cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing lg:cursor-default">
                <div className="flex -ml-4 lg:ml-0 lg:grid lg:grid-cols-[repeat(3,minmax(0,1fr))_.94fr] lg:gap-4">
                  {visibleServices.map((service) => (
                    <div key={service.title} className="min-w-0 shrink-0 grow-0 basis-[86%] pl-4 sm:basis-1/2 lg:block lg:basis-auto lg:pl-0">
                      <article className="group flex h-full min-h-[475px] flex-col overflow-hidden rounded-[18px] border border-border/80 bg-card shadow-[0_22px_55px_-42px_rgba(9,49,57,.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_64px_-38px_rgba(9,49,57,.6)]">
                        <div className="h-48 overflow-hidden sm:h-52">
                          <img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="text-balance text-xl font-extrabold tracking-[-0.025em] text-foreground sm:text-2xl">{service.title}</h3>
                          <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                          <button
                            type="button"
                            onClick={scrollToContact}
                            className="mt-auto inline-flex w-fit items-center gap-2 border-b border-primary/35 pt-7 pb-1 text-sm font-bold text-primary transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            Consultar servicio
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </article>
                    </div>
                  ))}

                  <div className="min-w-0 shrink-0 grow-0 basis-[86%] pl-4 sm:basis-1/2 lg:block lg:basis-auto lg:pl-0">
                    <aside className="flex h-full min-h-[475px] flex-col overflow-hidden rounded-[18px] bg-[#0b535b] text-white shadow-[0_24px_56px_-38px_rgba(9,49,57,.8)]">
                      <div className="h-52 overflow-hidden">
                        <img
                          src="/futuro-oncologico-esta-aqui.jpg"
                          alt="Tecnología aplicada al diagnóstico oncológico"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9cdddd]">Red especializada</p>
                        <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em]">Más conocimiento detrás de cada resultado</h3>
                        <p className="mt-3 text-sm leading-6 text-white/72">
                          Casos complejos revisados por un equipo conectado en seis sedes.
                        </p>
                        <button
                          type="button"
                          onClick={scrollToContact}
                          className="mt-auto inline-flex h-11 w-11 items-center justify-center self-end rounded-full border border-white/35 text-white transition hover:bg-white hover:text-[#0b535b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          aria-label="Solicitar orientación profesional"
                        >
                          <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 lg:hidden">
                <div className="flex gap-2" aria-label="Paginación de servicios">
                  {serviceSnaps.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => servicesApi?.scrollTo(index)}
                      aria-label={`Ir al servicio ${index + 1}`}
                      aria-current={selectedService === index ? "true" : undefined}
                      className={`h-2.5 rounded-full transition-all ${
                        selectedService === index ? "w-7 bg-primary" : "w-2.5 bg-foreground/20"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => servicesApi?.scrollPrev()}
                    disabled={!canScrollPrevious}
                    aria-label="Ver servicio anterior"
                    className="grid h-11 w-11 place-items-center rounded-full border border-foreground/20 bg-card text-foreground transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => servicesApi?.scrollNext()}
                    disabled={!canScrollNext}
                    aria-label="Ver servicio siguiente"
                    className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
