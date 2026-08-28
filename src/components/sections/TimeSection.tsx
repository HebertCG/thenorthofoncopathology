import AnimatedSection from "@/components/common/AnimatedSection";
import { Timer, Clock, Zap } from "lucide-react";

const TimeSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6 text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Tiempo Crucial</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                El Tiempo en el Cáncer es Determinante
              </h2>
              
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Cada minuto cuenta cuando se trata de un diagnóstico oncológico. Por eso, en 
                The North of Oncopathology nos comprometemos a entregar resultados en tiempo 
                récord sin comprometer la calidad ni la precisión de nuestros análisis.
              </p>
              
              <p className="text-primary-foreground/90 leading-relaxed">
                Nuestro objetivo es que tanto el paciente como su médico tratante cuenten con 
                la información necesaria para tomar decisiones oportunas sobre el tratamiento, 
                maximizando las posibilidades de éxito terapéutico.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">24/7</p>
                  <p className="text-primary-foreground/80 text-sm mt-1">Disponibilidad total</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">24-48h</p>
                  <p className="text-primary-foreground/80 text-sm mt-1">Biopsias simples</p>
                </div>
              </div>

              <div className="col-span-2 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Timer className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary-foreground">Resultados Prioritarios</p>
                    <p className="text-primary-foreground/80 text-sm mt-1">
                      Para casos urgentes, contamos con procesamiento prioritario 
                      que permite entregar resultados en el menor tiempo posible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
