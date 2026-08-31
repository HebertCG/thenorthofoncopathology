import { Eye, Target } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { spotlightBackground, trackPointer } from "@/lib/pointerSpotlight";

const pillars = [
  {
    id: "mision",
    index: "01",
    label: "Misión",
    title: "Nuestra Misión",
    lead: "Precisión para actuar.",
    copy: "Brindar diagnósticos precisos, certeros y confiables mediante la anatomía patológica, integrando un enfoque multidisciplinario y de vanguardia para mejorar el manejo del cáncer.",
    tags: ["Anatomía patológica", "Equipo multidisciplinario", "Diagnóstico de vanguardia"],
    icon: Target,
    iconClass: "gradient-bg",
  },
  {
    id: "vision",
    index: "02",
    label: "Visión",
    title: "Nuestra Visión",
    lead: "Una red sin distancias.",
    copy: "Ser una red líder, descentralizada y de referencia internacional, que integre inteligencia artificial y estándares globales para un diagnóstico oncológico preciso.",
    tags: ["Red descentralizada", "Estándares globales"],
    icon: Eye,
    iconClass: "bg-[linear-gradient(135deg,hsl(72_48%_26%),hsl(19_92%_48%))]",
  },
];

const MissionVisionSection = () => {
  return (
    <section id="proposito" className="section-padding relative overflow-hidden bg-background">
      {/* Atmósfera: dos halos suaves, sin peso visual */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-4 h-72 w-72 rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[hsl(17_88%_45%)]/12 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Nuestro propósito
          </span>

          <h2 className="section-title mt-6">
            Guiados por la <span className="gradient-text">Excelencia</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Dos compromisos que ordenan cada decisión del laboratorio.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedSection
              key={pillar.id}
              direction={index === 0 ? "left" : "right"}
              delay={0.08 + index * 0.08}
              className="h-full"
            >
              <article
                onPointerMove={trackPointer}
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-border bg-card p-8 card-shadow transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/25 hover:card-shadow-hover md:p-10"
              >
                {/* Foco que sigue al cursor */}
                <span
                  aria-hidden="true"
                  style={{ background: spotlightBackground }}
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Filo superior que se dibuja al pasar el mouse */}
                <span
                  aria-hidden="true"
                  className="gradient-bg absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Número fantasma: da profundidad sin añadir ruido */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 right-3 select-none text-[7.5rem] font-black leading-none tracking-tighter text-foreground/[0.04] transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:text-[9rem]"
                >
                  {pillar.index}
                </span>

                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-center gap-4">
                    <div
                      className={`${pillar.iconClass} grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-500 ease-out group-hover:scale-105`}
                    >
                      <pillar.icon className="h-7 w-7" strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {pillar.index} — {pillar.label}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold gradient-text">{pillar.title}</h3>

                  <p className="mt-3 text-lg font-semibold leading-7 tracking-[-0.01em] text-foreground">
                    {pillar.lead}
                  </p>

                  <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.copy}</p>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                    {pillar.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors duration-300 group-hover:border-primary/25 group-hover:text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
