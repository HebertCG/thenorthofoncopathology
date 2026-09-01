import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logoRojo from "@/assets/logo-tnm-red.png";
import logoBlanco from "@/assets/logo-tnm-white.png";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#equipo", label: "Equipo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicaciones", label: "Sedes" },
];

const Header = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 36;
    setIsCompact((current) => (current === next ? current : next));
  });

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }, 30);
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          top: isCompact ? 12 : 0,
          paddingLeft: isCompact ? 12 : 0,
          paddingRight: isCompact ? 12 : 0,
          backgroundColor: isCompact ? "rgba(248, 251, 252, 0)" : "rgba(248, 251, 252, 1)",
        }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 270, damping: 28 }}
        className="fixed inset-x-0 z-50"
      >
        <motion.div
          initial={false}
          animate={{
            borderRadius: isCompact ? 20 : 0,
            maxWidth: isCompact ? 1240 : 1600,
            backgroundColor: isCompact ? "rgba(178, 21, 16, 0.96)" : "rgba(248, 251, 252, 0)",
            borderColor: isCompact ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0)",
            boxShadow: isCompact ? "0 18px 48px rgba(120, 14, 11, 0.34)" : "0 0 0 rgba(9, 49, 57, 0)",
          }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 250, damping: 30 }}
          className="mx-auto border backdrop-blur-xl"
        >
          <div className="flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <Link to="/" aria-label="The North of Oncopathology, inicio" className="ml-2 shrink-0 sm:ml-3 lg:ml-5">
              <img
                src={isCompact ? logoBlanco : logoRojo}
                width={613}
                height={220}
                alt="TNM · The North Medical"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>

            <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                    isCompact
                      ? "text-white/85 hover:bg-white/16 hover:text-white focus-visible:ring-white"
                      : "text-foreground/72 hover:bg-primary/8 hover:text-primary focus-visible:ring-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <a
              href="https://wa.me/51938683949?text=Hola%2C%20quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold shadow-[0_10px_28px_rgba(120,14,11,0.24)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px lg:flex ${
                isCompact
                  ? "bg-white text-[#b21510] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#b21510]"
                  : "bg-primary text-primary-foreground hover:bg-primary/92 focus-visible:ring-primary"
              }`}
            >
              Solicitar consulta
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              className={`grid h-11 w-11 place-items-center rounded-full border shadow-sm transition focus-visible:outline-none focus-visible:ring-2 lg:hidden ${
                isCompact
                  ? "border-white/30 bg-white/12 text-white hover:bg-white/22 focus-visible:ring-white"
                  : "border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary"
              }`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-foreground/35 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Menú principal"
              initial={reduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
              className="ml-auto flex h-full w-[min(88vw,360px)] flex-col bg-background p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border/70 pb-5">
                <img src={logoRojo} width={613} height={220} alt="" className="h-9 w-auto" />
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-muted text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Navegación móvil">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045 }}
                    onClick={() => scrollToSection(link.href)}
                    className="rounded-2xl px-5 py-4 text-left text-xl font-bold text-foreground transition hover:bg-primary/8 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <a
                href="https://wa.me/51938683949?text=Hola%2C%20quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-4 font-bold text-primary-foreground"
              >
                Solicitar consulta
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
