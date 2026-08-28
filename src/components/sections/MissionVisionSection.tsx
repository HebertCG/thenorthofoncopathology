import AnimatedSection from "@/components/common/AnimatedSection";
import { Target, Eye } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestro Propósito
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Guiados por la <span className="gradient-text">Excelencia</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="group relative h-full">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.10)] blur-lg bg-gray-200" />
              <div className="relative h-full bg-card p-8 md:p-10 rounded-3xl border card-shadow group-hover:card-shadow-hover transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold gradient-text">Nuestra Misión</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Brindar diagnósticos precisos, certeros y confiables mediante la anatomía
                      patológica, integrando un enfoque multidisciplinario y de vanguardia para
                      mejorar el manejo del cáncer.
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Vision Card */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="group relative h-full">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.10)] blur-lg bg-gray-200" />
              <div className="relative h-full bg-card p-8 md:p-10 rounded-3xl border card-shadow group-hover:card-shadow-hover transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold gradient-text">Nuestra Visión</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser una red líder, descentralizada y de referencia internacional, que integre
                      inteligencia artificial y estándares globales para un diagnóstico oncológico preciso.
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

export default MissionVisionSection;
