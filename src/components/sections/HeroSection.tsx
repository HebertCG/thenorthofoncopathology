import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock3, MapPin, Microscope, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const entrance = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <>
      <section id="inicio" className="relative isolate min-h-[100dvh] overflow-hidden bg-foreground pt-[72px]">
        <img
          src="/equipo-oncopatologia-hero.jpg"
          alt="Equipo multidisciplinario de The North of Oncopathology en laboratorio"
          className="absolute inset-0 h-full w-full object-cover object-[66%_center] sm:object-[62%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,34,39,.97)_0%,rgba(8,34,39,.9)_36%,rgba(8,34,39,.42)_64%,rgba(8,34,39,.08)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(8,34,39,.5)_0%,rgba(8,34,39,.74)_45%,rgba(8,34,39,.97)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,transparent_0%,rgba(8,34,39,.12)_48%,rgba(8,34,39,.48)_100%)]" />

        <div className="container-custom relative flex min-h-[calc(100dvh-72px)] items-end pb-12 pt-16 sm:items-center sm:pb-16 lg:py-20">
          <motion.div
            {...entrance}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-primary-foreground lg:max-w-[610px]"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8fd6d8] sm:text-sm">
              Diagnóstico anatomopatológico especializado
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
              Precisión que guía cada decisión
            </h1>
            <p className="mt-6 max-w-[50ch] text-base leading-7 text-primary-foreground/82 sm:text-lg">
              Seis sedes, especialistas conectados y resultados oportunos para acompañar cada diagnóstico oncológico.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row sm:mt-10">
              <button
                type="button"
                onClick={() => scrollToSection("#contacto")}
                className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#d8f2f1] px-6 py-3 font-bold text-[#0a4148] shadow-[0_14px_36px_rgba(0,0,0,.22)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:translate-y-px"
              >
                Solicitar consulta
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("#ubicaciones")}
                className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/35 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:translate-y-px"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Ver sedes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section aria-label="Indicadores principales" className="relative z-10 border-b border-border/70 bg-background">
        <div className="container-custom grid grid-cols-2 divide-x divide-border/70 py-6 lg:grid-cols-4 lg:py-0">
          {[
            { icon: MapPin, value: "6", label: "sedes en Perú" },
            { icon: Clock3, value: "24/7", label: "recepción de muestras" },
            { icon: Microscope, value: "15+", label: "especialistas" },
            { icon: ShieldCheck, value: "24-48 h", label: "biopsias simples" },
          ].map((item, index) => (
            <div key={item.label} className={`flex items-center gap-3 px-3 py-4 sm:px-6 lg:py-7 ${index === 2 ? "max-lg:border-l-0" : ""}`}>
              <item.icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
              <div>
                <p className="text-lg font-extrabold leading-none text-foreground sm:text-xl">{item.value}</p>
                <p className="mt-1 text-xs leading-4 text-muted-foreground sm:text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
