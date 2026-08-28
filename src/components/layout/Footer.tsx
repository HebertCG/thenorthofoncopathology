import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-brand-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const locations = [
    "Lima", "Piura", "Chiclayo", "Cajamarca", "Ica", "Ayacucho"
  ];

  const services = [
    "Análisis Anatomopatológico",
    "Biopsias Oncológicas",
    "Piezas Quirúrgicas",
    "Inmunohistoquímica",
    "Segunda Opinión Patológica",
    "Consultas Multidisciplinarias"
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="The North of Oncopathology"
              className="h-14 w-auto object-contain"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empresa descentralizada multicéntrica especializada en estudio anatomopatológico oncológico y no oncológico.
              Comprometidos con la precisión diagnóstica y la atención oportuna.
            </p>
            {/* <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Disponible 24/7</span>
            </div> */}
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/#servicios"
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Sedes</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <Link
                    to="/#ubicaciones"
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/51938683949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  +51 938 683 949
                </a>
              </li>
              <li>
                <a
                  href="mailto:thenorthofoncopathology@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  thenorthofoncopathology@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Clock className="w-5 h-5" />
                Atención de 9:00 a.m. a 5:00 p.m., emergencias 24 hrs
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://facebook.com/thenorthoncopathology"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/thenorth.oncopathology"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} The North of Oncopathology. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacidad" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
