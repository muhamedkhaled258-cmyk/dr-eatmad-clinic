import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES, openWhatsApp, scrollToSection } from '../utils/constants';

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Dr. Eatmad Allam"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 via-transparent to-pink-900/30" />
      </div>

      {/* Floating Decorative Elements removed */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          //className="inline-block px-4 py-2 mb-6 rounded-full glass-pink text-white text-xs md:text-sm font-semibold tracking-wider uppercase"
        >
          {t.hero.tagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className={`font-bold mb-4 ${
            lang === 'ar' ? 'text-4xl md:text-6xl lg:text-7xl font-arabic' : 'text-3xl md:text-5xl lg:text-6xl font-display'
          }`}
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg md:text-2xl lg:text-3xl mb-10 font-light max-w-3xl mx-auto"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('booking')}
            className="btn-primary text-base md:text-lg w-full sm:w-auto"
          >
            <FaCalendarCheck className="w-5 h-5" />
            {t.hero.bookNow}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp(lang === 'ar' ? 'مرحباً، أود حجز موعد' : 'Hello, I would like to book an appointment')}
            className="btn-whatsapp text-base md:text-lg w-full sm:w-auto"
          >
            <FaWhatsapp className="w-6 h-6" />
            {t.hero.whatsapp}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
