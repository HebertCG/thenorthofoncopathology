import AnimatedSection from "@/components/common/AnimatedSection";
import {
  CheckCircle,
  Clock,
  Shield,
  Users,
  Building2,
  Award
} from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Precisión Diagnóstica",
      description: "Seguimos estándares nacionales e internacionales de control de calidad para garantizar resultados precisos."
    },
    {
      icon: Clock,
      title: "Rapidez en Resultados",
      description: "Entregamos resultados en tiempo récord para que puedas tomar decisiones oportunas sobre tu tratamiento."
    },
    {
      icon: Shield,
      title: "Disponibilidad Total",
      description: "Estamos disponibles 24 horas al día, 7 días a la semana, todos los días del año."
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Patólogos oncólogos con amplia experiencia y formación en las mejores instituciones."
    },
    {
      icon: Award,
      title: "Enfoque Multidisciplinario",
      description: "Debate de casos clínicos entre expertos para diagnósticos más precisos y completos."
    },
    {
      icon: Building2,
      title: "Cobertura Nacional",
      description: "6 sedes estratégicamente ubicadas en las principales ciudades del Perú."
    },
  ];

  return (
    <section className="section-padding gradient-subtle">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Confía en <span className="gradient-text">Nuestra Experiencia</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Combinamos tecnología de vanguardia, experiencia clínica y compromiso humano
            para brindarte el mejor servicio en diagnóstico oncológico y no oncológico.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-card border card-shadow hover:card-shadow-hover transition-all duration-300">
                <div className="w-14 h-14 shrink-0 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
