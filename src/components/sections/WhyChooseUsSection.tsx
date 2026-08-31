import { Award, Building2, CheckCircle, Clock, Shield, Users } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { spotlightBackground, trackPointer } from "@/lib/pointerSpotlight";

// Se alternan dos degradados de marca para que la cuadrícula no quede plana.
const TEAL = "gradient-bg";
const BLUE = "bg-[linear-gradient(135deg,hsl(254_80%_9%),hsl(0_92%_40%))]";

const features = [
  {
    icon: CheckCircle,
    title: "Precisión Diagnóstica",
    description:
      "Seguimos estándares nacionales e internacionales de control de calidad para garantizar resultados precisos.",
    iconClass: TEAL,
  },
  {
    icon: Clock,
    title: "Rapidez en Resultados",
    description:
      "Entregamos resultados en tiempo récord para que puedas tomar decisiones oportunas sobre tu tratamiento.",
    iconClass: BLUE,
  },
  {
    icon: Shield,
    title: "Disponibilidad Total",
    description: "Estamos disponibles 24 horas al día, 7 días a la semana, todos los días del año.",
    iconClass: TEAL,
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Patólogos oncólogos con amplia experiencia y formación en las mejores instituciones.",
    iconClass: BLUE,
  },
  {
    icon: Award,
    title: "Enfoque Multidisciplinario",
    description: "Debate de casos clínicos entre expertos para diagnósticos más precisos y completos.",
    iconClass: TEAL,
  },
  {
    icon: Building2,
    title: "Cobertura Nacional",
    description: "6 sedes estratégicamente ubicadas en las principales ciudades del Perú.",
    iconClass: BLUE,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden gradient-subtle">
      {/* Atmósfera: dos halos suaves, sin peso visual */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute -right-28 bottom-8 h-96 w-96 rounded-full bg-[hsl(37_93%_56%)]/14 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            ¿Por qué elegirnos?
          </span>

          <h2 className="section-title mt-6">
            Confía en <span className="gradient-text">Nuestra Experiencia</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Combinamos tecnología de vanguardia, experiencia clínica y compromiso humano para brindarte el mejor
            servicio en diagnóstico oncológico y no oncológico.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={0.05 + (index % 3) * 0.07} className="h-full">
              <article
                onPointerMove={trackPointer}
                className="group relative flex h-full items-start gap-5 overflow-hidden rounded-[22px] border border-border bg-card p-6 card-shadow transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/25 hover:card-shadow-hover"
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

                <div
                  className={`${feature.iconClass} relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-500 ease-out group-hover:scale-110`}
                >
                  <feature.icon className="h-6 w-6" strokeWidth={1.9} aria-hidden="true" />
                </div>

                <div className="relative">
                  <h3 className="text-lg font-bold tracking-[-0.015em] text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
