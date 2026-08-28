import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const phoneNumber = "51938683949";
  const message = "Hola, me gustaría solicitar información sobre sus servicios de oncopatología.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="absolute bottom-full right-0 mb-3 w-64 bg-white rounded-xl shadow-lg p-4 border z-[60]"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm font-medium text-foreground mb-2">
              ¿Necesitas ayuda?
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Estamos disponibles 24/7 para atender tus consultas por WhatsApp.
            </p>

          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Ring - Simplified for better performance */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping" />

        <img src="/iconwhatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
