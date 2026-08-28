import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Clock, Zap } from "lucide-react";

const HeroSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  // ─── SLIDES ─────────────────────────────────────────────────────────────────
  // To add a new slide, add a new object to this array following the same shape.
  const slides = [
    { id: "slide-1" },
    { id: "slide-2" },
    { id: "slide-3" },
    { id: "slide-4" },
    // { id: "slide-5" }, // ← añadir más aquí
  ];

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">

          {/* ── SLIDE 1 ── */}
          <div className="flex-none w-full min-h-[90vh] flex items-start pt-24 pb-20 sm:items-center sm:pt-0 sm:pb-0 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            {/* Right half — full-bleed image with CSS mask fade */}
            <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
              <img
                src="/diagnostico.jpg"
                alt="Diagnóstico Oncológico"
                className="w-full h-full object-cover"
                style={{ maskImage: "linear-gradient(to right, transparent 0%, black 35%)" }}
              />
            </div>

            <div className="container-custom relative z-10 w-full">
              <div className="lg:w-1/2 pr-4 sm:pr-8">
                <div className="space-y-6 sm:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                      Diagnóstico{" "}
                      <span className="gradient-text">Preciso y Oportuno</span>{" "}
                      en Oncopatología
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
                      Estamos contigo cuando más lo necesitas. Equipo
                      multidisciplinario de expertos comprometidos con la
                      precisión diagnóstica y tu tranquilidad.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-3 sm:gap-4"
                  >
                    <Button
                      size="lg"
                      className="gradient-bg text-primary-foreground button-shadow hover:opacity-90 text-sm sm:text-base px-5 sm:px-8 h-11 sm:h-14"
                      onClick={() => scrollToSection("#contacto")}
                    >
                      Solicitar Consulta
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-foreground/20 hover:bg-gray-100 hover:border-gray-300 hover:text-foreground text-sm sm:text-base px-5 sm:px-8 h-11 sm:h-14"
                      onClick={() => scrollToSection("#ubicaciones")}
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Ver Nuestras Sedes
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SLIDE 2 ── */}
          <div className="flex-none w-full min-h-[90vh] flex items-start pt-24 pb-20 sm:items-center sm:pt-0 sm:pb-0 relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a9b8a] via-[#15a899] to-[#0e9faa]" />
            <div className="absolute top-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10 w-full">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Text */}
                <div className="space-y-5 sm:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-xs sm:text-sm font-medium text-white">Tiempo Crucial</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                      El Tiempo en el Cáncer{" "}
                      <span className="text-white/90">es Determinante</span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/80 max-w-xl">
                      Cada minuto cuenta cuando se trata de un diagnóstico
                      oncológico. Por eso, en The North of Oncopathology nos
                      comprometemos a entregar resultados en tiempo récord sin
                      comprometer la calidad ni la precisión de nuestros análisis.
                    </p>
                    <p className="hidden sm:block text-base text-white/70 max-w-xl">
                      Nuestro objetivo es que tanto el paciente como su médico
                      tratante cuenten con la información necesaria para tomar
                      decisiones oportunas sobre el tratamiento, maximizando las
                      posibilidades de éxito terapéutico.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-3 sm:gap-4"
                  >
                    <Button
                      size="lg"
                      className="bg-white text-[#1a9b8a] hover:bg-white/90 font-semibold text-sm sm:text-base px-5 sm:px-8 h-11 sm:h-14 shadow-lg"
                      onClick={() => scrollToSection("#contacto")}
                    >
                      Solicitar Consulta
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* Stat cards */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="hidden lg:grid grid-cols-2 gap-4"
                >
                  {/* 24/7 */}
                  <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-white">24/7</p>
                    <p className="text-white/70 text-sm">Disponibilidad total</p>
                  </div>

                  {/* 24-48h */}
                  <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-white">24-48h</p>
                    <p className="text-white/70 text-sm">Biopsias simples</p>
                  </div>

                  {/* Resultados Prioritarios */}
                  <div className="col-span-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Resultados Prioritarios</p>
                      <p className="text-white/70 text-sm">
                        Para casos urgentes, contamos con procesamiento prioritario
                        que permite entregar resultados en el menor tiempo posible.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── SLIDE 3 ── */}
          <div className="flex-none w-full min-h-[90vh] flex items-start pt-24 pb-20 sm:items-center sm:pt-0 sm:pb-0 relative overflow-hidden">
            {/* Background — subtle gradient matching slide 1 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            {/* Right half — full-bleed image, fades on the left via CSS mask */}
            <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
              <img
                src="/futuro-de-oncologia.jpg"
                alt="Futuro de la Oncología"
                className="w-full h-full object-cover"
                style={{ maskImage: "linear-gradient(to right, transparent 0%, black 35%)" }}
              />
            </div>

            {/* Left content */}
            <div className="container-custom relative z-10 w-full">
              <div className="lg:w-1/2 pr-4 sm:pr-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-5 sm:space-y-6"
                >
                  <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                    <span className="gradient-text">
                      Somos el futuro de la oncología.
                    </span>{" "}
                    <span className="text-foreground">
                      Nos encuentras en Piura y en otros 6 departamentos del Perú
                    </span>
                  </blockquote>

                  <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <Button
                      size="lg"
                      className="gradient-bg text-primary-foreground button-shadow hover:opacity-90 text-sm sm:text-base px-5 sm:px-8 h-11 sm:h-14"
                      onClick={() => scrollToSection("#nosotros")}
                    >
                      Conoce Más
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-foreground/20 hover:bg-gray-100 hover:border-gray-300 hover:text-foreground text-sm sm:text-base px-5 sm:px-8 h-11 sm:h-14"
                      onClick={() => scrollToSection("#ubicaciones")}
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Ver Nuestras Sedes
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── SLIDE 4: Full-background image ── */}
          <div className="flex-none w-full min-h-[90vh] flex items-end relative">
            {/* Background image */}
            <img
              src="/futuro-oncologico-esta-aqui.jpg"
              alt="El futuro oncológico está aquí"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text — bottom left */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute bottom-16 left-6 sm:left-10 z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              El futuro<br />
              oncológico<br />
              está aquí
            </motion.h1>
          </div>

        </div>
      </div>

      {/* ── Dot navigation ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === selectedIndex
              ? "w-8 h-3 bg-primary"
              : "w-3 h-3 bg-foreground/30 hover:bg-foreground/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
