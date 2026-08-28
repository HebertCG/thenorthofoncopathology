import AnimatedSection from "@/components/common/AnimatedSection";
import { FileCheck, FlaskConical, Microscope, Scissors, Syringe, Users } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Análisis anatomopatológico integral",
    description: "Estudio microscópico de tejidos oncológicos y no oncológicos con alta precisión diagnóstica.",
    className: "lg:col-span-7 lg:row-span-2",
    image: "/diagnostico.jpg",
  },
  {
    icon: Syringe,
    title: "Biopsias",
    description: "Biopsia core, punch, incisional y citología de Papanicolaou con procesamiento oportuno.",
    className: "lg:col-span-5",
  },
  {
    icon: Scissors,
    title: "Piezas quirúrgicas",
    description: "Evaluación de márgenes, estadificación TNM y análisis completo de especímenes postoperatorios.",
    className: "lg:col-span-5",
  },
  {
    icon: FlaskConical,
    title: "Inmunohistoquímica",
    description: "Más de 50 marcadores para caracterizar tumores y orientar decisiones terapéuticas.",
    className: "lg:col-span-5",
    accent: true,
  },
  {
    icon: FileCheck,
    title: "Segunda opinión patológica",
    description: "Revisión experta de tacos, láminas e informes provenientes de otras instituciones.",
    className: "lg:col-span-7",
  },
  {
    icon: Users,
    title: "Consulta multidisciplinaria",
    description: "Discusión de casos complejos entre especialistas para alcanzar una decisión diagnóstica consensuada.",
    className: "lg:col-span-12",
    wide: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-[#f1f6f7] dark:bg-background">
      <div className="container-custom">
        <AnimatedSection className="max-w-3xl">
          <h2 className="section-title">Servicios que conectan precisión y oportunidad</h2>
          <p className="section-copy mt-5">
            Una ruta diagnóstica completa, desde la recepción de la muestra hasta la discusión especializada del resultado.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(230px,auto)]">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.055} className={service.className}>
              <article
                className={`group relative h-full min-h-[230px] overflow-hidden rounded-[20px] border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  service.accent
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/75 bg-card text-card-foreground shadow-[0_18px_48px_-36px_rgba(9,49,57,.42)] hover:shadow-[0_28px_58px_-34px_rgba(9,49,57,.5)]"
                } ${service.image ? "min-h-[500px] sm:min-h-[540px]" : ""}`}
              >
                {service.image && (
                  <>
                    <img src={service.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082f35] via-[#082f35]/66 to-transparent" />
                  </>
                )}

                <div className={`relative flex h-full ${service.image ? "flex-col justify-end text-white" : service.wide ? "flex-col justify-between gap-8 md:flex-row md:items-end" : "flex-col"}`}>
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-[14px] ${service.accent ? "bg-white/13" : service.image ? "bg-white/14 backdrop-blur" : "bg-primary/9 text-primary"}`}>
                    <service.icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <div className={`${service.image ? "mt-6" : service.wide ? "md:max-w-[68%]" : "mt-auto pt-10"}`}>
                    <h3 className={`${service.image ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"} text-balance font-extrabold tracking-[-0.025em]`}>
                      {service.title}
                    </h3>
                    <p className={`mt-3 max-w-[56ch] leading-6 ${service.accent || service.image ? "text-white/72" : "text-muted-foreground"}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
