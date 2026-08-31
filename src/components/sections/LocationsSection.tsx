import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

// Contorno del Perú proyectado desde geodatos (Natural Earth 10m, simplificado a 210 puntos).
// Las coordenadas de cada sede salen de la MISMA proyección, así que los pines caen exactos.
const MAP_W = 1000;
const MAP_H = 1460;
const PERU_PATH =
  "M934.7 1394.0 L907.9 1408.8 L913.2 1431.9 L898.4 1453.3 L864.8 1460.3 L786.6 1409.3 L785.4 1385.5 L776.3 1376.3 L728.6 1355.1 L703.2 1330.8 L676.2 1324.0 L625.7 1297.2 L603.5 1293.3 L576.2 1270.7 L497.0 1230.8 L460.8 1187.6 L427.3 1166.1 L410.0 1132.2 L398.9 1127.7 L398.7 1106.4 L390.7 1107.0 L393.2 1098.5 L401.8 1102.4 L407.5 1077.6 L404.4 1063.1 L358.7 995.4 L359.3 985.2 L329.0 960.5 L326.1 926.6 L291.6 898.4 L295.8 888.2 L289.8 869.3 L249.4 804.1 L245.6 778.8 L234.5 764.6 L231.0 744.4 L222.1 737.0 L224.5 730.6 L220.1 735.0 L215.5 729.6 L219.6 725.7 L203.4 697.6 L203.8 684.3 L189.5 670.5 L185.9 653.1 L147.9 613.1 L136.3 577.2 L105.3 535.3 L16.3 479.0 L14.8 466.9 L20.7 459.2 L31.4 464.3 L38.0 448.4 L32.1 433.5 L11.0 413.1 L13.8 402.3 L21.7 398.2 L0.0 370.8 L0.7 354.7 L5.8 336.8 L41.9 295.9 L63.3 277.3 L83.6 270.1 L92.6 307.9 L80.0 317.9 L66.8 317.9 L68.6 333.7 L78.4 332.5 L67.5 351.3 L75.4 354.7 L94.6 339.3 L118.9 354.9 L132.7 351.7 L144.7 359.1 L149.1 381.3 L160.8 393.4 L179.7 397.4 L192.6 384.0 L192.7 372.1 L210.6 360.7 L209.8 342.8 L230.6 300.1 L236.0 268.0 L245.9 277.4 L250.8 275.0 L248.2 266.0 L274.2 236.2 L372.4 200.1 L414.6 167.5 L455.6 120.3 L468.3 71.4 L482.9 74.5 L477.4 57.3 L480.3 41.0 L450.5 6.6 L473.7 9.6 L484.5 0.0 L506.1 14.4 L514.7 11.3 L517.4 22.6 L529.1 24.8 L546.9 41.0 L558.8 75.2 L573.8 76.7 L591.2 94.2 L608.6 97.8 L619.6 115.6 L617.0 131.2 L631.2 140.5 L643.7 140.3 L650.1 163.1 L643.3 174.2 L664.0 191.1 L680.0 186.5 L681.7 190.9 L687.0 183.8 L708.1 193.2 L724.0 189.9 L742.0 183.1 L758.0 167.8 L774.4 175.0 L777.6 182.3 L780.9 177.5 L783.7 187.2 L817.6 172.9 L840.2 183.4 L844.8 193.2 L850.3 189.5 L867.8 196.0 L867.2 201.7 L874.4 200.8 L884.1 210.6 L887.7 207.1 L892.0 214.2 L838.0 299.3 L857.2 307.0 L871.4 303.1 L896.6 331.1 L896.9 341.8 L885.0 337.5 L879.8 344.1 L869.9 328.1 L849.8 332.2 L844.9 325.9 L830.2 331.0 L819.5 347.5 L796.1 346.7 L788.3 353.3 L745.3 358.1 L707.4 380.0 L687.0 401.3 L665.4 407.0 L660.7 448.5 L640.4 482.4 L647.2 514.2 L598.9 547.0 L594.7 564.2 L602.6 580.3 L581.2 584.4 L584.3 591.8 L578.4 599.4 L602.6 618.9 L596.9 631.0 L606.1 636.9 L616.2 664.4 L630.8 674.0 L631.2 683.5 L660.8 714.4 L661.1 726.2 L641.9 748.1 L673.7 748.3 L713.2 758.0 L725.1 785.5 L722.5 795.7 L793.3 794.8 L854.5 749.9 L846.7 760.6 L853.2 772.0 L845.6 783.5 L845.3 875.9 L853.8 870.1 L873.1 880.2 L899.5 868.6 L929.4 871.2 L1000.0 994.9 L991.4 1004.3 L993.5 1011.5 L976.6 1024.0 L977.4 1074.6 L967.0 1087.7 L985.8 1129.6 L974.2 1133.9 L975.8 1144.6 L956.5 1160.1 L953.9 1174.2 L945.8 1178.2 L944.7 1192.6 L963.3 1212.7 L941.1 1244.0 L960.4 1289.4 L976.5 1290.6 L988.2 1300.1 L972.8 1310.1 L972.1 1327.3 L960.6 1332.0 L941.3 1360.5 L925.8 1368.4 L922.4 1376.6 L933.7 1383.0 L934.7 1394.0 Z";

// Ruta norte -> sur que enlaza las seis sedes.
const ROUTE_PATH = "M55.7 412 L118.3 537.8 L223.3 569.1 L339.4 958.5 L443.3 1119.7 L562.2 1047.2";
const ROTATION_MS = 5500;

const mapsSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const mapsEmbedUrl = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=15`;

interface Location {
  city: string;
  address: string;
  reference?: string;
  phone: string;
  email: string;
  hours: string;
  query: string;
  point: { x: number; y: number };
}

const EMAIL = "thenorthofoncopathology@gmail.com";
const HOURS = "9:00 a.m. a 5:00 p.m. Emergencias 24 horas.";

const locations: Location[] = [
  {
    city: "Piura",
    address: "Av. Guillermo Irazola D1 Lote 26, Urb. Miraflores",
    reference: "A media cuadra del Hospital Regional Cayetano Heredia",
    phone: "+51 938 683 949",
    email: EMAIL,
    hours: HOURS,
    query: "Av. Guillermo Irazola D1 Lote 26, Urb. Miraflores, Piura, Perú",
    point: { x: 55.7, y: 412 },
  },
  {
    city: "Chiclayo",
    address: "Av. Salaverry 147, Chiclayo",
    phone: "+51 987 603 521",
    email: EMAIL,
    hours: HOURS,
    query: "Av. Salaverry 147, Chiclayo, Perú",
    point: { x: 118.3, y: 537.8 },
  },
  {
    city: "Cajamarca",
    address: "Amalia Puga 866, Cajamarca",
    phone: "+51 935 326 109",
    email: EMAIL,
    hours: HOURS,
    query: "Amalia Puga 866, Cajamarca, Perú",
    point: { x: 223.3, y: 569.1 },
  },
  {
    city: "Lima",
    address: "Jirón Gravilla Billón 671, Torre J, 1202, Lima",
    phone: "+51 937 164 019",
    email: EMAIL,
    hours: HOURS,
    query: "Jirón Gravilla Billón 671, Lima, Perú",
    point: { x: 339.4, y: 958.5 },
  },
  {
    city: "Ayacucho",
    address: "Jr. Asamblea 468, Ayacucho",
    phone: "+51 934 261 002",
    email: EMAIL,
    hours: HOURS,
    query: "Jr. Asamblea 468, Ayacucho, Perú",
    point: { x: 562.2, y: 1047.2 },
  },
  {
    city: "Ica",
    address: "Av. Cutervo 1137, Ica",
    phone: "+51 976 549 012",
    email: EMAIL,
    hours: HOURS,
    query: "Av. Cutervo 1137, Ica, Perú",
    point: { x: 443.3, y: 1119.7 },
  },
];

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : false,
  );
  const reduceMotion = useReducedMotion();
  const selected = locations[activeLocation];

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    setIsDesktop(media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || reduceMotion || isPaused) return;
    const interval = window.setInterval(() => {
      setActiveLocation((current) => (current + 1) % locations.length);
    }, ROTATION_MS);
    return () => window.clearInterval(interval);
  }, [isDesktop, isPaused, reduceMotion]);

  useEffect(() => {
    const handleLocationSelect = (event: Event) => {
      const city = (event as CustomEvent<string>).detail;
      const nextIndex = locations.findIndex((location) => location.city === city);
      if (nextIndex >= 0) setActiveLocation(nextIndex);
    };

    window.addEventListener("select-location", handleLocationSelect);
    return () => window.removeEventListener("select-location", handleLocationSelect);
  }, []);

  const selectPrevious = () => setActiveLocation((current) => (current - 1 + locations.length) % locations.length);
  const selectNext = () => setActiveLocation((current) => (current + 1) % locations.length);

  return (
    <section id="ubicaciones" className="overflow-hidden bg-[#f9f9f3] py-20 sm:py-24 lg:bg-background">
      <div className="container-custom">
        <AnimatedSection className="grid items-end gap-7 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Cobertura nacional</p>
            <h2 className="section-title mt-4">Nuestras 6 Sedes en Perú</h2>
          </div>
          <p className="section-copy max-w-[60ch] lg:pb-1">
            Presencia estratégica en las principales ciudades del país para brindarte atención cercana cuando más lo necesitas.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-10 sm:mt-12">
          <div className="space-y-6 lg:hidden" data-testid="mobile-locations">
            <div className="rounded-[18px] border border-border/80 bg-card p-2 shadow-[0_18px_48px_-38px_rgba(9,49,57,.5)]">
              <div className="grid gap-1" role="group" aria-label="Seleccionar sede">
                {locations.map((location, index) => {
                  const active = index === activeLocation;
                  return (
                    <button
                      key={location.city}
                      type="button"
                      onClick={() => setActiveLocation(index)}
                      aria-pressed={active}
                      className={`flex min-h-12 w-full items-center gap-3 rounded-[11px] px-3 py-3 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        active
                          ? "gradient-bg text-primary-foreground shadow-sm"
                          : "text-foreground hover:bg-primary/6"
                      }`}
                    >
                      <MapPin className={`h-4 w-4 shrink-0 ${active ? "text-primary-foreground" : "text-primary"}`} aria-hidden="true" />
                      {location.city}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[18px] border border-border/80 bg-card p-5 shadow-[0_18px_48px_-38px_rgba(9,49,57,.5)] sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-${selected.city}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-foreground">{selected.city}</h3>
                    <a
                      href={mapsSearchUrl(selected.query)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      Ver en mapa
                    </a>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="grid grid-cols-[28px_1fr] gap-3 rounded-xl bg-muted/55 p-4">
                      <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">Dirección</p>
                        <p className="mt-1 text-sm font-medium leading-6 text-foreground">{selected.address}</p>
                        {selected.reference && <p className="mt-1 text-xs leading-5 text-muted-foreground">{selected.reference}</p>}
                      </div>
                    </div>

                    <a
                      href={`tel:${selected.phone.replace(/\s/g, "")}`}
                      className="grid grid-cols-[28px_1fr] gap-3 rounded-xl bg-muted/55 p-4 transition hover:bg-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">Teléfono</p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{selected.phone}</p>
                      </div>
                    </a>

                    <div className="grid grid-cols-[28px_1fr] gap-3 rounded-xl bg-muted/55 p-4">
                      <Clock3 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">Horario</p>
                        <p className="mt-1 text-sm font-medium leading-6 text-foreground">{selected.hours}</p>
                      </div>
                    </div>

                    <a
                      href={`mailto:${selected.email}`}
                      className="grid min-w-0 grid-cols-[28px_1fr] gap-3 rounded-xl bg-muted/55 p-4 transition hover:bg-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">Correo</p>
                        <p className="mt-1 break-all text-sm font-medium text-foreground">{selected.email}</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-muted/40 shadow-[0_12px_28px_-24px_rgba(9,49,57,.6)]">
                    <iframe
                      data-testid="mobile-location-map"
                      title={`Mapa de Google de la sede de ${selected.city}`}
                      src={mapsEmbedUrl(selected.query)}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block h-[220px] w-full border-0 saturate-[.92]"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div
            className="hidden gap-10 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-14"
            data-testid="desktop-locations"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) setIsPaused(false);
            }}
          >
            {/* ── Mapa vectorial del Perú ── */}
            <div className="relative isolate flex min-h-[610px] flex-col">
              <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-1/3 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#b33b0b]/16 blur-3xl"
                animate={reduceMotion ? {} : { x: [0, 80, 0], y: [0, 45, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="flex items-center justify-between gap-4">
                <p className="gradient-text text-xs font-bold uppercase tracking-[0.16em]">Red de atención en Perú</p>
                <p className="font-mono text-xs font-bold text-muted-foreground">
                  {String(activeLocation + 1).padStart(2, "0")} / {String(locations.length).padStart(2, "0")}
                </p>
              </div>

              <div className="relative z-20 mt-5 border-b border-primary/15 pb-2">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide" aria-label="Seleccionar ciudad">
                  {locations.map((location, index) => (
                    <button
                      key={location.city}
                      type="button"
                      onClick={() => setActiveLocation(index)}
                      aria-pressed={index === activeLocation}
                      className={`shrink-0 border-b-2 px-3 py-2 text-xs font-bold transition ${
                        index === activeLocation ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {location.city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 flex min-h-0 flex-1 justify-center">
                <div className="relative aspect-[1000/1460] h-full max-w-full">
                  <svg
                    data-testid="peru-map"
                    viewBox={`0 0 ${MAP_W} ${MAP_H}`}
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <defs>
                      <clipPath id="peru-clip">
                        <path d={PERU_PATH} />
                      </clipPath>
                    </defs>

                    {/* Sombra proyectada: despega el país del fondo */}
                    <path d={PERU_PATH} fill="#223644" opacity="0.16" transform="translate(16 22)" />

                    {/* Relieve real del Perú. Va recortado al trazado propio (IoU .97 con
                        la silueta de la imagen), de modo que el borde queda limpio y los
                        marcadores siguen cayendo en sus coordenadas proyectadas. */}
                    <motion.g
                      clipPath="url(#peru-clip)"
                      initial={reduceMotion ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                    >
                      <image
                        href="/mapa-peru.webp"
                        x="0"
                        y="0"
                        width={MAP_W}
                        height={MAP_H}
                        preserveAspectRatio="none"
                      />
                    </motion.g>

                    {/* El contorno se dibuja solo al entrar en pantalla */}
                    <motion.path
                      d={PERU_PATH}
                      fill="none"
                      stroke="#0f3049"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                      initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.95 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 2.1, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Ruta que enlaza las seis sedes */}
                    <motion.path
                      d={ROUTE_PATH}
                      fill="none"
                      stroke="#841b1a"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="10 16"
                      initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Destello que recorre la ruta en bucle */}
                    {!reduceMotion && (
                      <path
                        d={ROUTE_PATH}
                        className="route-flow"
                        fill="none"
                        stroke="#b33b0b"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    )}
                  </svg>

                  {/* Marcadores: botones accesibles alineados al mismo viewBox */}
                  {locations.map((location, index) => {
                    const active = index === activeLocation;
                    return (
                      <button
                        key={location.city}
                        type="button"
                        aria-label={`Seleccionar sede ${location.city}`}
                        aria-pressed={active}
                        onClick={() => setActiveLocation(index)}
                        style={{
                          left: `${(location.point.x / MAP_W) * 100}%`,
                          top: `${(location.point.y / MAP_H) * 100}%`,
                        }}
                        // El area de clic mide siempre 28px: si creciera con la etiqueta,
                        // taparia los marcadores vecinos y les robaria el clic.
                        className={`absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                          active ? "z-30" : "z-10"
                        }`}
                      >
                        {active && !reduceMotion && (
                          <>
                            <motion.span
                              aria-hidden="true"
                              className="absolute inset-0 m-auto h-5 w-5 rounded-full border-2 border-[#b33b0b]"
                              animate={{ scale: [1, 2.6], opacity: [0.85, 0] }}
                              transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
                            />
                            <motion.span
                              aria-hidden="true"
                              className="absolute inset-0 m-auto h-5 w-5 rounded-full border border-[#841b1a]"
                              animate={{ scale: [1, 3.4], opacity: [0.55, 0] }}
                              transition={{ duration: 1.9, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
                            />
                          </>
                        )}

                        <span
                          className={`relative grid h-5 w-5 place-items-center rounded-full border shadow-[0_8px_20px_rgba(9,49,57,.35)] transition-transform duration-300 ${
                            active
                              ? "scale-110 border-[#f7f7f2] bg-white text-[#223644]"
                              : "border-white/90 bg-[#294354] text-white hover:scale-125"
                          }`}
                        >
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                        </span>

                        {/* La etiqueta va fuera del area de clic y no captura puntero,
                            asi nunca bloquea al marcador que tenga detras. */}
                        {active && (
                          <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2">
                            <motion.span
                              initial={reduceMotion ? false : { opacity: 0, y: 6, scale: 0.92 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                              className="block whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#223644] shadow-[0_8px_22px_rgba(9,49,57,.3)]"
                            >
                              {location.city}
                            </motion.span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Ficha de la sede ── */}
            <div className="flex min-h-[610px] flex-col rounded-[22px] bg-[#17252f] p-6 text-white shadow-[0_34px_76px_-46px_rgba(9,49,57,.7)] sm:p-9 lg:p-10">
              <div className="flex items-center justify-between gap-5 border-b border-white/15 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#efac80]">Sede seleccionada</p>
                  <p className="mt-2 text-sm text-white/55">Atención local, respaldo nacional</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={selectPrevious}
                    aria-label="Ver sede anterior"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#17252f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={selectNext}
                    aria-label="Ver sede siguiente"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#17252f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.city}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-1 flex-col"
                >
                  <h3 className="mt-6 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">{selected.city}</h3>

                  <div className="mt-6 divide-y divide-white/15 border-y border-white/15">
                    <div className="grid grid-cols-[26px_1fr] gap-4 py-4">
                      <MapPin className="mt-0.5 h-5 w-5 text-[#efac80]" strokeWidth={1.7} aria-hidden="true" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/48">Dirección</p>
                        <p className="mt-1.5 font-semibold leading-6 text-white/92">{selected.address}</p>
                        {selected.reference && <p className="mt-1 text-sm leading-5 text-white/55">{selected.reference}</p>}
                      </div>
                    </div>

                    <a
                      href={`tel:${selected.phone.replace(/\s/g, "")}`}
                      className="grid grid-cols-[26px_1fr] gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Phone className="mt-0.5 h-5 w-5 text-[#efac80]" strokeWidth={1.7} aria-hidden="true" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/48">Teléfono</p>
                        <p className="mt-1.5 font-semibold text-white/92">{selected.phone}</p>
                      </div>
                    </a>

                    <div className="grid grid-cols-[26px_1fr] gap-4 py-4">
                      <Clock3 className="mt-0.5 h-5 w-5 text-[#efac80]" strokeWidth={1.7} aria-hidden="true" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/48">Horario</p>
                        <p className="mt-1.5 font-semibold leading-6 text-white/92">{selected.hours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mapa real de la sede seleccionada */}
                  <div className="mt-6 overflow-hidden rounded-[14px] border border-white/15 bg-[#1d2f3b]">
                    <iframe
                      title={`Mapa de la sede de ${selected.city}`}
                      src={mapsEmbedUrl(selected.query)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block h-[200px] w-full border-0 saturate-[.92]"
                    />
                  </div>

                  <a
                    href={`mailto:${selected.email}`}
                    className="mt-5 inline-flex min-w-0 items-center gap-3 text-sm font-semibold text-white/68 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#efac80]" aria-hidden="true" />
                    <span className="min-w-0 break-all">{selected.email}</span>
                  </a>

                  <a
                    href={mapsSearchUrl(selected.query)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#ebebdd] px-6 py-3 font-bold text-[#17252f] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:translate-y-px"
                  >
                    Cómo llegar
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 grid grid-cols-6 gap-1.5" aria-hidden="true">
                {locations.map((location, index) => (
                  <span key={location.city} className="h-1 overflow-hidden rounded-full bg-white/14">
                    {index === activeLocation && (
                      <motion.span
                        key={`${activeLocation}-${isPaused}`}
                        className="block h-full origin-left bg-[#efa97b]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isPaused || reduceMotion ? 0 : 1 }}
                        transition={{ duration: isPaused || reduceMotion ? 0 : ROTATION_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationsSection;
