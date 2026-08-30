import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-brand-removebg-preview.png";

const locations = ["Lima", "Piura", "Chiclayo", "Cajamarca", "Ica", "Ayacucho"];

const services = [
  { label: "Análisis anatomopatológico", category: "diagnostico" },
  { label: "Biopsias oncológicas", category: "diagnostico" },
  { label: "Piezas quirúrgicas", category: "diagnostico" },
  { label: "Inmunohistoquímica", category: "avanzados" },
  { label: "Segunda opinión patológica", category: "avanzados" },
  { label: "Consultas multidisciplinarias", category: "avanzados" },
] as const;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const selectLocation = (city: string) => {
    window.dispatchEvent(new CustomEvent("select-location", { detail: city }));
  };

  const selectServiceCategory = (category: "diagnostico" | "avanzados") => {
    window.dispatchEvent(new CustomEvent("select-service-category", { detail: category }));
  };

  return (
    <footer className="bg-[#062d32] text-white">
      <div className="container-custom py-14 sm:py-16">
        <div className="grid gap-10 border-b border-white/12 pb-12 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_.78fr_1.15fr] lg:gap-12">
          <div>
            <a href="#inicio" aria-label="Volver al inicio" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <img src={logo} alt="The North of Oncopathology" className="h-16 w-auto object-contain" />
            </a>
            <p className="mt-5 max-w-[34ch] text-sm leading-6 text-white/62">
              Red multicéntrica especializada en estudio anatomopatológico oncológico y no oncológico, con atención oportuna en seis ciudades del Perú.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://facebook.com/thenorthoncopathology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The North of Oncopathology en Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/18 text-white/72 transition hover:border-[#8fd6d8] hover:bg-[#8fd6d8] hover:text-[#062d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/thenorth.oncopathology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The North of Oncopathology en Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/18 text-white/72 transition hover:border-[#8fd6d8] hover:bg-[#8fd6d8] hover:text-[#062d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Servicios en el pie de página">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#94d9da]">Servicios</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href="#servicios"
                    onClick={() => selectServiceCategory(service.category)}
                    className="text-sm text-white/62 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Sedes en el pie de página">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#94d9da]">Sedes</h2>
            <ul className="mt-5 space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <a
                    href="#ubicaciones"
                    onClick={() => selectLocation(location)}
                    className="inline-flex items-center gap-2 text-sm text-white/62 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#94d9da]" aria-hidden="true" />
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#94d9da]">Contacto</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="https://wa.me/51938683949?text=Hola%2C%20quiero%20hacer%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-[20px_1fr] gap-3 text-sm text-white/68 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Phone className="h-4 w-4 text-[#94d9da]" aria-hidden="true" />
                  +51 938 683 949
                </a>
              </li>
              <li>
                <a
                  href="mailto:thenorthofoncopathology@gmail.com"
                  className="grid min-w-0 grid-cols-[20px_1fr] gap-3 text-sm text-white/68 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Mail className="h-4 w-4 text-[#94d9da]" aria-hidden="true" />
                  <span className="break-all">thenorthofoncopathology@gmail.com</span>
                </a>
              </li>
              <li className="grid grid-cols-[20px_1fr] gap-3 text-sm leading-6 text-white/62">
                <Clock className="mt-0.5 h-4 w-4 text-[#94d9da]" aria-hidden="true" />
                9:00 a.m. a 5:00 p.m. Emergencias 24 horas.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} The North of Oncopathology. Todos los derechos reservados.</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Enlaces finales">
            <a href="#proposito" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Nuestro propósito</a>
            <a href="#contacto" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Contacto</a>
            <a href="#inicio" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Volver al inicio</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
