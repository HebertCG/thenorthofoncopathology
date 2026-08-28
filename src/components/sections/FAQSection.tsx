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
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Resolvemos tus <span className="gradient-text">Dudas</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-xl px-6 card-shadow data-[state=open]:card-shadow-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
