import AnimatedSection from "@/components/common/AnimatedSection";
import { Eye, Target } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="mx-auto max-w-[1120px]">
          <div className="relative overflow-hidden rounded-[20px] bg-[#092f35] text-white shadow-[0_34px_80px_-44px_rgba(9,49,57,.68)]">
            <div className="grid min-h-[520px] lg:grid-cols-[.92fr_1.08fr]">
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
                <img
                  src="/proposito-laboratorio.jpg"
                  alt="Especialista analizando una lámina histológica en laboratorio"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092f35]/76 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#092f35]" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9 xl:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8fd6d8]">Nuestro propósito</p>
                <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-[2.7rem] lg:leading-[1.02]">
                  Ciencia rigurosa con impacto humano
                </h2>
                <p className="mt-4 max-w-[52ch] leading-7 text-white/72">
                  Cada muestra representa una decisión importante. Nuestro propósito es convertir evidencia microscópica en información clara y confiable.
                </p>

                <div className="mt-6 grid gap-5 xl:grid-cols-2">
                  <div>
                    <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-white/10 text-[#9ddddd]">
                      <Target className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-lg font-bold">Nuestra misión</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      Brindar diagnósticos precisos mediante anatomía patológica, integrando un enfoque multidisciplinario y de vanguardia para mejorar el manejo del cáncer.
                    </p>
                  </div>

                  <div className="border-t border-white/14 pt-5 xl:border-l xl:border-t-0 xl:pl-5 xl:pt-0">
                    <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-white/10 text-[#9ddddd]">
                      <Eye className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-lg font-bold">Nuestra visión</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      Ser una red descentralizada de referencia internacional, integrando inteligencia artificial y estándares globales para un diagnóstico oncológico preciso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MissionVisionSection;
