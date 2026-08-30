import AnimatedSection from "@/components/common/AnimatedSection";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { Building2, Clock, Users, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Building2, value: 6, label: "Sedes en Perú", suffix: "", staticValue: "6" },
    { icon: Clock, value: 0, label: "Resultados", suffix: "", staticValue: "24 - 48 h" },
    { icon: Users, value: 15, label: "Especialistas", suffix: "+", staticValue: "15+" },
    { icon: Award, value: 10, label: "Años de Experiencia", suffix: "+" },
  ];

  return (
    <section id="nosotros" className="section-padding gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Sobre Nosotros
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                  Líderes en{" "}
                  <span className="gradient-text">patología oncológica</span>
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">THE NORTH OF ONCOPATHOLOGY</span> es una empresa
                descentralizada multicéntrica con presencia en 6 ciudades del Perú (Lima, Piura, Chiclayo,
                Cajamarca, Ica y Ayacucho). Nos especializamos en el análisis anatomopatológico (oncológico y no oncológico) de pacientes
                con cáncer.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Nuestra empresa aglomera un equipo multidisciplinario de patólogos oncólogos, quienes,
                mediante debate, analizan y resuelven los casos más complejos en oncopatología.
                Contamos con disponibilidad las 24 horas del día, los 7 días de la semana para recibir
                sus muestras de biopsias o piezas quirúrgicas.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Estamos comprometidos con la precisión diagnóstica de sus muestras, siguiendo las normas
                técnicas nacionales e internacionales de control de calidad y en ofrecer resultados en tiempo récord (24/7).
              </p>


            </div>
          </AnimatedSection>

          {/* Stats Grid */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card p-4 sm:p-6 rounded-2xl border card-shadow hover:card-shadow-hover transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        {stat.staticValue ? stat.staticValue : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
