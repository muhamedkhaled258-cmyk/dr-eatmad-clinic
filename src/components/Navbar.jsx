import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES, scrollToSection } from '../utils/constants';

const NAV_ITEMS = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'why-us', key: 'whyUs' },
  { id: 'results', key: 'results' },
  { id: 'videos', key: 'videos' },
  { id: 'locations', key: 'locations' },
  { id: 'contact', key: 'contact' },
  { id: 'booking', key: 'book' }
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-pink-glow' : 'py-3'
      }`}
      style={{
        background: scrolled
          ? 'linear-gradient(135deg, rgba(233,30,99,0.95), rgba(173,20,87,0.95))'
          : 'linear-gradient(135deg, #e91e63, #ad1457)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="px-3 py-2 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-200"
              >
                {t.nav[item.key]}
              </button>
            ))}
          </div>

          {/* Language + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              aria-label="Switch language"
              className="flex items-center gap-1.5 bg-white/95 text-pink-700 px-3 py-2 rounded-full font-semibold text-sm shadow-md"
            >
              <FaGlobe className="w-4 h-4" />
              {lang === 'en' ? 'العربية' : 'English'}
            </motion.button>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2"
              aria-label="Menu"
            >
              {open ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-3"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 grid grid-cols-2 gap-1 shadow-lg">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className="px-3 py-2.5 text-pink-700 text-sm font-medium rounded-xl hover:bg-pink-50 transition text-start"
                  >
                    {t.nav[item.key]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
