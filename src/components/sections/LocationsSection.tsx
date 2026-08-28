import AnimatedSection from "@/components/common/AnimatedSection";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Location {
  city: string;
  address: string;
  reference?: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
  mapEmbed: string;
}

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations: Location[] = [
    {
      city: "Piura",
      address: "Av. Guillermo Irazola D1 Lote 26, Urb. Miraflores",
      reference: "A media cuadra del Hospital Regional Cayetano Heredia",
      phone: "+51 938 683 949",
      email: "thenorthofoncopathology@gmail.com",
      hours: "9:00 a.m. a 5:00 p.m., emergencias 24 hrs",
      mapUrl: "https://maps.google.com/?q=Piura,Peru",
      mapEmbed: "https://maps.google.com/maps?q=Piura,Peru&output=embed&z=14"
    },
    {
      city: "Lima",
      address: "Jirón Gravilla Billón 671, Torre J, 1202, Lima",
      phone: "+51 937 164 019",
      email: "thenorthofoncopathology@gmail.com",
      hours: "9:00 a.m. a 5:00 p.m., emergencias 24 hrs",
      mapUrl: "https://maps.google.com/?q=Jir%C3%B3n+Gravilla+Bill%C3%B3n+671,Lima,Peru",
      mapEmbed: "https://maps.google.com/maps?q=Jir%C3%B3n+Gravilla+Bill%C3%B3n+671,Lima,Peru&output=embed&z=15"
    },
    {
      city: "Chiclayo",
      address: "Av. Salaverry 147, Chiclayo",
      phone: "+51 987 603 521",
      email: "thenorthofoncopathology@gmail.com",
      hours: "9:00 a.m. a 5:00 p.m., emergencias 24 hrs",
      mapUrl: "https://maps.google.com/?q=Av.+Salaverry+147,Chiclayo,Peru",
      mapEmbed: "https://maps.google.com/maps?q=Av.+Salaverry+147,Chiclayo,Peru&output=embed&z=15"
    },
    {
      city: "Cajamarca",
      address: "Amalia Puga 866, Cajamarca",
      phone: "+51 935 326 109",
      email: "thenorthofoncopathology@gmail.com",
      hours: "9:00 a.m. a 5:00 p.m., emergencias 24 hrs",
      mapUrl: "https://maps.google.com/?q=Amalia+Puga+866,Cajamarca,Peru",
      mapEmbed: "https://maps.google.com/maps?q=Amalia+Puga+866,Cajamarca,Peru&output=embed&z=15"
    },
    {
      city: "Ica",
      address: "Av. Cutervo 1137, Ica",
      phone: "+51 976 549 012",
      email: "thenorthofoncopathology@gmail.com",
      hours: "9:00 a.m. a 5:00 p.m., emergencias 24 hrs",
      mapUrl: "https://maps.google.com/?q=Av.+Cutervo+1137,Ica,Peru",
      mapEmbed: "https://maps.google.com/maps?q=Av.+Cutervo+1137,Ica,Peru&output=embed&z=15"
    },
    {
      city: "Ayacucho",
      address: "Jr. Asamblea 468, Ayacucho",
      phone: "+51 934 261 002",
      email: "thenorthofoncopathology@gmail.com",
      hours: "9:00 a.m. a 5:00 p.m., emergencias 24 hrs",
      mapUrl: "https://maps.google.com/?q=Jr.+Asamblea+468,Ayacucho,Peru",
      mapEmbed: "https://maps.google.com/maps?q=Jr.+Asamblea+468,Ayacucho,Peru&output=embed&z=15"
    },
  ];

  return (
    <section id="ubicaciones" className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Cobertura Nacional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Nuestras <span className="gradient-text">6 Sedes</span> en Perú
          </h2>
          <p className="text-muted-foreground mt-4">
            Presencia estratégica en las principales ciudades del país para brindarte
            atención cercana cuando más lo necesitas.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Tabs */}
          <AnimatedSection direction="left" className="lg:col-span-1">
            <div className="bg-card rounded-2xl border card-shadow p-2 space-y-2">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLocation(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeLocation === index
                    ? "gradient-bg text-primary-foreground"
                    : "hover:bg-muted"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${activeLocation === index ? "text-primary-foreground" : "text-primary"}`} />
                    <p className="font-semibold">{location.city}</p>
                  </div>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Location Details */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
            <div className="bg-card rounded-2xl border card-shadow p-8 space-y-6 h-full">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{locations[activeLocation].city}</h3>
                </div>
                <a
                  href={locations[activeLocation].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Ver en mapa
                  </Button>
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{locations[activeLocation].address}</p>
                    {locations[activeLocation].reference && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Ref: {locations[activeLocation].reference}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${locations[activeLocation].phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-medium text-foreground">{locations[activeLocation].phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${locations[activeLocation].email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground text-sm">{locations[activeLocation].email}</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horario de atención</p>
                    <p className="font-semibold text-primary">{locations[activeLocation].hours}</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  title={`Mapa ${locations[activeLocation].city}`}
                  src={locations[activeLocation].mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
