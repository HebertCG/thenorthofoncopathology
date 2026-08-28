import AnimatedSection from "@/components/common/AnimatedSection";
import { Check, FlaskConical, HeartHandshake, Network } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding overflow-hidden bg-background">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <AnimatedSection direction="left" className="relative min-h-[420px] sm:min-h-[540px]">
            <div className="absolute left-0 top-0 h-[76%] w-[78%] overflow-hidden rounded-[20px] bg-muted shadow-[0_30px_70px_-38px_rgba(9,49,57,.45)]">
              <img
                src="/diagnostico.jpg"
                alt="Especialistas revisando un diagnóstico de anatomía patológica"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[55%] w-[58%] overflow-hidden rounded-[20px] border-4 border-background bg-card shadow-[0_26px_58px_-30px_rgba(9,49,57,.5)]">
              <img
                src="/proposito-laboratorio.jpg"
                alt="Análisis de una lámina histológica en laboratorio"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-[12%] left-4 max-w-[190px] rounded-[16px] border border-border bg-card p-4 shadow-xl sm:left-8 sm:p-5">
              <p className="text-3xl font-extrabold tracking-tight text-primary">6 ciudades</p>
              <p className="mt-1 text-sm leading-5 text-muted-foreground">Un mismo criterio de excelencia diagnóstica.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <h2 className="section-title">La experiencia de un equipo, cerca de ti</h2>
              <p className="section-copy mt-6">
                The North of Oncopathology es una red multicéntrica especializada en análisis anatomopatológico oncológico y no oncológico, con presencia en Lima, Piura, Chiclayo, Cajamarca, Ica y Ayacucho.
              </p>
              <p className="mt-4 max-w-[65ch] leading-7 text-muted-foreground">
                Nuestros patólogos analizan en conjunto los casos complejos, siguiendo estándares nacionales e internacionales de control de calidad para entregar resultados precisos y oportunos.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Network, title: "Criterio multidisciplinario", copy: "Los casos complejos se debaten entre especialistas." },
                  { icon: FlaskConical, title: "Calidad en cada muestra", copy: "Protocolos rigurosos desde la recepción hasta el informe." },
                  { icon: HeartHandshake, title: "Respuesta cercana", copy: "Disponibilidad permanente para pacientes y médicos tratantes." },
                ].map((item) => (
                  <div key={item.title} className="grid grid-cols-[44px_1fr] items-start gap-4 border-t border-border/70 pt-4">
                    <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-primary/9 text-primary">
                      <item.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-sm font-semibold text-primary">
                <Check className="h-4 w-4" aria-hidden="true" />
                Atención de muestras las 24 horas
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
