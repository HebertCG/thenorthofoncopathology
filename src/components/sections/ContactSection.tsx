import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!acceptedPrivacy) {
      toast({
        title: "Error",
        description: "Debe aceptar la política de privacidad para continuar.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Consulta desde la web");
    const body = encodeURIComponent([
      `Nombre: ${formData.get("name") ?? ""}`,
      `Correo: ${formData.get("email") ?? ""}`,
      `Teléfono: ${formData.get("phone") ?? ""}`,
      `Sede: ${formData.get("sede") ?? "No especificada"}`,
      `Tipo de consulta: ${formData.get("tipo") ?? "No especificado"}`,
      "",
      `Mensaje: ${formData.get("message") ?? ""}`,
    ].join("\n"));

    toast({
      title: "Consulta preparada",
      description: "Abrimos tu aplicación de correo para que confirmes el envío.",
    });

    window.location.href = `mailto:thenorthofoncopathology@gmail.com?subject=${subject}&body=${body}`;
    (e.target as HTMLFormElement).reset();
    setAcceptedPrivacy(false);
  };

  return (
    <section id="contacto" className="section-padding bg-[#f8f8f1] dark:bg-background">
      <div className="container-custom">

        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="section-title">Estamos aquí para ayudarte</h2>
          <p className="section-copy mx-auto mt-5">
            Escríbenos por este formulario y te respondemos a la brevedad.
            ¿Prefieres algo más rápido?{" "}
            <span className="font-medium text-foreground">
              Usa el botón de WhatsApp
            </span>{" "}
            en la esquina inferior derecha.
          </p>
        </AnimatedSection>

        {/* Centered form */}
        <AnimatedSection className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[20px] border border-border/75 bg-card p-5 shadow-[0_28px_72px_-46px_rgba(9,49,57,.52)] sm:p-8 md:p-10"
          >
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nombre completo <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre completo"
                  required
                  className="h-12 rounded-[12px] border-border bg-background focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium">
                  Correo electrónico <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  required
                  className="h-12 rounded-[12px] border-border bg-background focus:border-primary"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Teléfono <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+51 900 000 000"
                  required
                  className="h-12 rounded-[12px] border-border bg-background focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="sede" className="text-sm font-medium">
                  Sede de preferencia <span className="text-primary">*</span>
                </Label>
                <Select name="sede" required>
                  <SelectTrigger className="h-12 rounded-[12px] border-border bg-background">
                    <SelectValue placeholder="Selecciona una sede" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lima">Lima</SelectItem>
                    <SelectItem value="piura">Piura</SelectItem>
                    <SelectItem value="chiclayo">Chiclayo</SelectItem>
                    <SelectItem value="cajamarca">Cajamarca</SelectItem>
                    <SelectItem value="ica">Ica</SelectItem>
                    <SelectItem value="ayacucho">Ayacucho</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tipo consulta */}
            <div className="space-y-1.5">
              <Label htmlFor="tipo" className="text-sm font-medium">
                Tipo de consulta
              </Label>
              <Select name="tipo">
                <SelectTrigger className="h-12 rounded-[12px] border-border bg-background">
                  <SelectValue placeholder="¿Cómo podemos ayudarte?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paciente">Soy paciente</SelectItem>
                  <SelectItem value="medico">Soy médico referente</SelectItem>
                  <SelectItem value="institucion">Represento una institución</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-sm font-medium">
                Mensaje <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Cuéntanos en qué podemos ayudarte..."
                rows={4}
                required
                className="resize-none rounded-[12px] border-border bg-background focus:border-primary"
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-3 pt-1">
              <Checkbox
                id="privacy"
                checked={acceptedPrivacy}
                onCheckedChange={(checked) =>
                  setAcceptedPrivacy(checked as boolean)
                }
                className="mt-0.5"
              />
              <Label
                htmlFor="privacy"
                className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
              >
                Acepto la{" "}
                <a href="/privacidad" className="text-primary underline underline-offset-2">
                  política de privacidad
                </a>{" "}
                y el tratamiento de mis datos personales para la gestión de mi consulta.
              </Label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="h-14 w-full rounded-full bg-primary text-base font-bold text-primary-foreground button-shadow hover:bg-primary/92"
            >
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Preparar consulta por correo
              </span>
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              ¿Quieres una respuesta inmediata?{" "}
              <a
                href="https://wa.me/51938683949?text=Hola%2C%20quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-medium hover:underline"
              >
                Escríbenos por WhatsApp →
              </a>
            </p>
          </form>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ContactSection;
