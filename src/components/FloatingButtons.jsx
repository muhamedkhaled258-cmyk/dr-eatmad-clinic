import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsApp, PHONE_NUMBERS } from '../utils/constants';

export default function FloatingButtons() {
  const { isRTL } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sideClass = isRTL ? 'left-4 md:left-6' : 'right-4 md:right-6';
  const oppositeSide = isRTL ? 'right-4 md:right-6' : 'left-4 md:left-6';

  return (
    <>
      {/* WhatsApp – always visible */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => openWhatsApp('Hello, I would like to book an appointment')}
        aria-label="WhatsApp"
        className={`floating-btn bottom-20 md:bottom-6 ${sideClass}`}
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-400"
        />
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
      </motion.button>

      {/* Mobile Call Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${PHONE_NUMBERS.branch1}`}
        aria-label="Call Now"
        className={`floating-btn md:hidden bottom-20 ${oppositeSide}`}
        style={{ background: 'linear-gradient(135deg, #e91e63, #ad1457)' }}
      >
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-pink-400"
        />
        <FaPhoneAlt className="w-6 h-6 relative z-10" />
      </motion.a>

      {/* Back To Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className={`floating-btn !w-12 !h-12 md:!w-14 md:!h-14 bottom-40 md:bottom-28 ${sideClass}`}
            style={{ background: 'linear-gradient(135deg, #1a1a1a, #4a4a4a)' }}
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
