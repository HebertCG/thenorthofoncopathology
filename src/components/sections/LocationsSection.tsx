import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

interface Location {
  city: string;
  address: string;
  reference?: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
  marker: { left: string; top: string };
}

const locations: Location[] = [
  {
    city: "Piura",
    address: "Av. Guillermo Irazola D1 Lote 26, Urb. Miraflores",
    reference: "A media cuadra del Hospital Regional Cayetano Heredia",
    phone: "+51 938 683 949",
    email: "thenorthofoncopathology@gmail.com",
    hours: "9:00 a.m. a 5:00 p.m. Emergencias 24 horas.",
    mapUrl: "https://maps.google.com/?q=Av.+Guillermo+Irazola+D1+Lote+26,Piura,Peru",
    marker: { left: "24%", top: "27%" },
  },
  {
    city: "Chiclayo",
    address: "Av. Salaverry 147, Chiclayo",
    phone: "+51 987 603 521",
    email: "thenorthofoncopathology@gmail.com",
    hours: "9:00 a.m. a 5:00 p.m. Emergencias 24 horas.",
    mapUrl: "https://maps.google.com/?q=Av.+Salaverry+147,Chiclayo,Peru",
    marker: { left: "28%", top: "35%" },
  },
  {
    city: "Cajamarca",
    address: "Amalia Puga 866, Cajamarca",
    phone: "+51 935 326 109",
    email: "thenorthofoncopathology@gmail.com",
    hours: "9:00 a.m. a 5:00 p.m. Emergencias 24 horas.",
    mapUrl: "https://maps.google.com/?q=Amalia+Puga+866,Cajamarca,Peru",
    marker: { left: "36%", top: "34%" },
  },
  {
    city: "Lima",
    address: "Jirón Gravilla Billón 671, Torre J, 1202, Lima",
    phone: "+51 937 164 019",
    email: "thenorthofoncopathology@gmail.com",
    hours: "9:00 a.m. a 5:00 p.m. Emergencias 24 horas.",
    mapUrl: "https://maps.google.com/?q=Jir%C3%B3n+Gravilla+Bill%C3%B3n+671,Lima,Peru",
    marker: { left: "37%", top: "56%" },
  },
  {
    city: "Ayacucho",
    address: "Jr. Asamblea 468, Ayacucho",
    phone: "+51 934 261 002",
    email: "thenorthofoncopathology@gmail.com",
    hours: "9:00 a.m. a 5:00 p.m. Emergencias 24 horas.",
    mapUrl: "https://maps.google.com/?q=Jr.+Asamblea+468,Ayacucho,Peru",
    marker: { left: "47%", top: "62%" },
  },
  {
    city: "Ica",
    address: "Av. Cutervo 1137, Ica",
    phone: "+51 976 549 012",
    email: "thenorthofoncopathology@gmail.com",
    hours: "9:00 a.m. a 5:00 p.m. Emergencias 24 horas.",
    mapUrl: "https://maps.google.com/?q=Av.+Cutervo+1137,Ica,Peru",
    marker: { left: "39%", top: "67%" },
  },
];

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const reduceMotion = useReducedMotion();
  const selected = locations[activeLocation];

  return (
    <section id="ubicaciones" className="section-padding overflow-hidden bg-background">
      <div className="container-custom">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">Cobertura nacional</p>
          <h2 className="section-title">Seis sedes, una red conectada</h2>
          <p className="section-copy mx-auto mt-5">
            Selecciona una ciudad en el mapa y encuentra los datos de atención de la sede más cercana.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-12 sm:mt-16">
          <div className="overflow-hidden rounded-[20px] border border-border/75 bg-[#edf5f6] shadow-[0_28px_72px_-46px_rgba(9,49,57,.52)] dark:bg-card">
            <div className="grid lg:grid-cols-[.94fr_1.06fr]">
              <div className="relative min-h-[490px] overflow-hidden border-b border-border/70 sm:min-h-[620px] lg:border-b-0 lg:border-r">
                <img
                  src="/mapa-peru-sedes.jpg"
                  alt="Mapa del Perú con las seis sedes de The North of Oncopathology"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-2 sm:p-6"
                />

                {locations.map((location, index) => {
                  const active = index === activeLocation;
                  return (
                    <button
                      key={location.city}
                      type="button"
                      aria-label={`Seleccionar sede ${location.city}`}
                      aria-pressed={active}
                      onClick={() => setActiveLocation(index)}
                      style={{ left: location.marker.left, top: location.marker.top }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <motion.span
                        animate={reduceMotion ? {} : { scale: active ? 1.12 : 1 }}
                        className={`flex items-center justify-center gap-1.5 rounded-full border text-xs font-bold shadow-lg transition ${
                          active
                            ? "min-h-9 px-3 py-2 border-primary bg-primary text-primary-foreground"
                            : "h-7 w-7 border-white/80 bg-background/94 text-primary hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                        }`}
                      >
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {active && <span>{location.city}</span>}
                      </motion.span>
                    </button>
                  );
                })}

                <div className="absolute inset-x-3 bottom-3 flex gap-2 overflow-x-auto rounded-[16px] border border-white/70 bg-background/94 p-2 shadow-xl backdrop-blur-md scrollbar-hide sm:inset-x-6 sm:bottom-5">
                  {locations.map((location, index) => (
                    <button
                      key={location.city}
                      type="button"
                      onClick={() => setActiveLocation(index)}
                      className={`shrink-0 rounded-full px-3 py-2 text-xs font-bold ${index === activeLocation ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
                    >
                      {location.city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex min-h-[520px] flex-col justify-center bg-card p-5 sm:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.city}
                    initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -18 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-sm font-bold text-primary">Sede seleccionada</p>
                    <h3 className="mt-2 text-4xl font-extrabold tracking-[-0.04em] text-foreground sm:text-5xl">{selected.city}</h3>

                    <div className="mt-8 space-y-5">
                      <div className="grid grid-cols-[42px_1fr] gap-4">
                        <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-primary/9 text-primary">
                          <MapPin className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Dirección</p>
                          <p className="mt-1 font-semibold leading-6 text-foreground">{selected.address}</p>
                          {selected.reference && <p className="mt-1 text-sm leading-5 text-muted-foreground">{selected.reference}</p>}
                        </div>
                      </div>

                      <a href={`tel:${selected.phone.replace(/\s/g, "")}`} className="grid grid-cols-[42px_1fr] gap-4 rounded-[16px] transition hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-primary/9 text-primary">
                          <Phone className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Teléfono</p>
                          <p className="mt-1 font-semibold text-foreground">{selected.phone}</p>
                        </div>
                      </a>

                      <div className="grid grid-cols-[42px_1fr] gap-4">
                        <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-primary/9 text-primary">
                          <Clock3 className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Horario</p>
                          <p className="mt-1 font-semibold leading-6 text-foreground">{selected.hours}</p>
                        </div>
                      </div>

                      <a href={`mailto:${selected.email}`} className="grid min-w-0 grid-cols-[42px_1fr] gap-4 rounded-[16px] transition hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-primary/9 text-primary">
                          <Mail className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Correo</p>
                          <p className="mt-1 break-all text-sm font-semibold text-foreground sm:text-base">{selected.email}</p>
                        </div>
                      </a>
                    </div>

                    <a
                      href={selected.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-9 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground shadow-[0_12px_28px_-14px_rgba(9,94,103,.58)] transition hover:-translate-y-0.5 hover:bg-primary/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px"
                    >
                      Abrir en Google Maps
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationsSection;
