import AnimatedSection from "@/components/common/AnimatedSection";
import { User } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Luis Manuel Taxa",
      role: "Médico Anátomo Patólogo",
      image: "/Luis-Manuel-Taxa.png",
      link: "https://share.google/gQQtTRlYWoODEzba5",
    },
    {
      name: "Dr. Henry Guerra",
      role: "Médico Anátomo Patólogo",
      image: "/Henry-Guerra.png",
      link: "https://share.google/01jO7my3JF7I7Awy9",
    },
    {
      name: "Dr. Sandro Casavilca",
      role: "Médico Anátomo Patólogo",
      image: "/Sandro-Casavilca.png",
      link: "https://share.google/YD72P36wUgMpgA2aN",
    },
    {
      name: "Dr. Carlos Barrionuevo",
      role: "Médico Anátomo Patólogo",
      image: "/Carlos-Barrionuevo.png",
      link: "https://patologosespecializados.com.pe/our-team/dr-carlos-barrionuevo/",
    },
    {
      name: "Dr. Jaime Montes",
      role: "Médico Anátomo Patólogo",
      image: "/Jaime-Montes.png",
      link: "https://share.google/7NatOZ43eYdag5GrX",
    },
    {
      name: "Dr. Franco Doimi",
      role: "Médico Anátomo Patólogo",
      image: "/Franco-Doimi.png",
      link: "https://www.linkedin.com/in/franco-doimi-5991156b/",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Equipo <span className="gradient-text">Multidisciplinario</span> de Expertos
          </h2>
          <p className="text-muted-foreground mt-4">
            Contamos con un equipo de patólogos oncólogos altamente capacitados,
            comprometidos con la excelencia diagnóstica y el bienestar del paciente.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-card rounded-2xl border card-shadow hover:card-shadow-hover hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Photo */}
                <div className="aspect-[3/4] bg-white relative overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      style={{ mixBlendMode: "multiply", filter: "brightness(1.15)" }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center">
                        <User className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 space-y-1">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
