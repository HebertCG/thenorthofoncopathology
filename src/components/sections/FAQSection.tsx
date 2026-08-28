import AnimatedSection from "@/components/common/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo tarda un resultado?",
      answer: "Nuestros tiempos de entrega varían según el tipo de estudio. Para biopsias simples, los resultados pueden estar listos en 24-48 horas. Estudios más complejos como inmunohistoquímica pueden tomar 3-5 días hábiles. Nos comprometemos a entregar resultados en tiempo récord sin comprometer la calidad."
    },
    {
      question: "¿Necesito cita previa para dejar una muestra?",
      answer: "No es necesario agendar cita previa. Puede traer sus muestras en cualquier momento, ya que estamos disponibles las 24 horas del día, los 7 días de la semana. Sin embargo, recomendamos llamar antes para confirmar los requisitos específicos de cada tipo de muestra."
    },
    {
      question: "¿Atienden a pacientes particulares?",
      answer: "Sí, atendemos tanto a pacientes particulares como a aquellos referidos por médicos, clínicas y hospitales. Nuestro objetivo es brindar acceso a diagnóstico oncológico de calidad a todos quienes lo necesiten."
    },
    {
      question: "¿Trabajan con seguros médicos?",
      answer: "Trabajamos con las principales aseguradoras del país. Le recomendamos consultar directamente con su seguro para verificar la cobertura específica, o contactarnos para más información sobre convenios vigentes."
    },
    {
      question: "¿Ofrecen servicio de recojo de muestras?",
      answer: "Sí, ofrecemos servicio de recojo de muestras para clínicas, hospitales y consultorios médicos. Contamos con personal capacitado y condiciones de transporte que garantizan la integridad de las muestras. Contáctenos para coordinar el servicio."
    },
    {
      question: "¿Puedo solicitar una segunda opinión patológica?",
      answer: "Absolutamente. Ofrecemos el servicio de segunda opinión patológica donde nuestro equipo multidisciplinario revisa diagnósticos previos. Este servicio es muy valioso para confirmar diagnósticos y explorar opciones de tratamiento adicionales."
    },
    {
      question: "¿Cómo accedo a mis resultados?",
      answer: "Los resultados se entregan de manera confidencial al paciente o al médico tratante. Puede recogerlos en cualquiera de nuestras sedes o solicitar envío digital seguro. También puede autorizar a un familiar para recoger los resultados presentando la documentación correspondiente."
    },
    {
      question: "¿Qué documentos necesito llevar?",
      answer: "Para dejar una muestra, necesita: documento de identidad, orden médica (si la tiene), y la muestra debidamente identificada y preservada. Si es paciente particular, nuestro personal le indicará los requisitos adicionales según el tipo de estudio solicitado."
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="section-title">Resolvemos tus dudas</h2>
          <p className="section-copy mx-auto mt-5">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="overflow-hidden rounded-[20px] border border-border/75 bg-card px-4 shadow-[0_24px_60px_-42px_rgba(9,49,57,.5)] sm:px-7">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/70 px-1 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left font-bold text-foreground hover:text-primary sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
