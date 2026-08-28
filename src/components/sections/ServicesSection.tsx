import AnimatedSection from "@/components/common/AnimatedSection";
import {
  Microscope,
  Syringe,
  Scissors,
  FlaskConical,
  FileCheck,
  Users
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Microscope,
      title: "Análisis Anatomopatológico Integral",
      description: "Estudio microscópico detallado de tejidos para identificar patologías oncológicas y no oncológicas con la más alta precisión diagnóstica.",
      features: ["Microscopía avanzada", "Análisis celular", "Diagnóstico preciso"]
    },
    {
      icon: Syringe,
      title: "Biopsias",
      description: "Análisis exhaustivo de muestras de tejido obtenidas mediante biopsia para determinar la naturaleza de las lesiones: biopsia core, biopsia punch, biopsia incisional y Papanicolaou.",
      features: ["Procesamiento rápido", "Técnicas especializadas", "Resultados confiables"]
    },
    {
      icon: Scissors,
      title: "Piezas Quirúrgicas",
      description: "Evaluación completa de especímenes quirúrgicos post-operatorios para determinar márgenes y estadificación tumoral: estadiaje de cáncer, apendicectomía, colecistectomías, amputaciones, etc.",
      features: ["Evaluación completa", "Estadificación TNM", "Márgenes quirúrgicos"]
    },
    {
      icon: FlaskConical,
      title: "Inmunohistoquímica",
      description: "Técnicas avanzadas de marcadores moleculares para identificación precisa del tipo tumoral y opciones terapéuticas: inmunohistoquímica, cáncer de mama, neoplasias hemáticas, lesiones epiteliales y contamos con más de 50 marcadores.",
      features: ["Marcadores específicos", "Perfiles moleculares", "Terapia dirigida"]
    },
    {
      icon: FileCheck,
      title: "Segunda Opinión Patológica",
      description: "Revisión experta de diagnósticos previos por nuestro equipo multidisciplinario para confirmar o ajustar el diagnóstico. Revisión de tacos y láminas provenientes de otras instituciones.",
      features: ["Revisión exhaustiva", "Panel de expertos", "Mayor certeza"]
    },
    {
      icon: Users,
      title: "Consultas Multidisciplinarias",
      description: "Sesiones de debate clínico donde nuestro equipo analiza casos complejos para ofrecer el mejor diagnóstico posible.",
      features: ["Equipo integrado", "Casos complejos", "Decisión consensuada"]
    },
  ];


  return (
    <section id="servicios" className="section-padding gradient-subtle">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Servicios Especializados en{" "}
            <span className="gradient-text">Oncopatología</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Ofrecemos una gama completa de servicios de diagnóstico anatomopatológico
            con los más altos estándares de calidad y precisión.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group h-full bg-card p-8 rounded-2xl border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
