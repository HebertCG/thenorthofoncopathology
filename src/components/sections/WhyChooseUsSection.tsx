import AnimatedSection from "@/components/common/AnimatedSection";
import { Award, Building2, CheckCircle, Clock3, ShieldCheck, Users } from "lucide-react";

const features = [
  { icon: CheckCircle, title: "Precisión diagnóstica", description: "Control de calidad y criterios técnicos aplicados a cada muestra." },
  { icon: Clock3, title: "Resultados oportunos", description: "Procesos organizados para reducir esperas sin comprometer el análisis." },
  { icon: ShieldCheck, title: "Disponibilidad total", description: "Recepción de muestras y atención de emergencias durante todo el día." },
  { icon: Users, title: "Equipo especializado", description: "Patólogos con experiencia en distintas áreas del diagnóstico oncológico." },
  { icon: Award, title: "Decisión compartida", description: "Los casos complejos se revisan y discuten de manera multidisciplinaria." },
  { icon: Building2, title: "Cobertura nacional", description: "Seis sedes conectadas para acercar el diagnóstico especializado." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-[#e5f0f1] dark:bg-card">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <AnimatedSection direction="left" className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="section-title">Confianza construida en cada etapa</h2>
            <p className="mt-5 max-w-[46ch] leading-7 text-muted-foreground">
              Tecnología, experiencia clínica y una red conectada para responder con claridad cuando el tiempo importa.
            </p>
          </AnimatedSection>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.055}>
                <article className="grid grid-cols-[44px_1fr] gap-4 border-t border-primary/15 py-6 sm:py-8">
                  <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-primary/9 text-primary">
                    <feature.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
