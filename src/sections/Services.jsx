import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES, scrollToSection } from '../utils/constants';

export default function Services() {
  const { t, isRTL } = useLanguage();
  const images = [IMAGES.service1, IMAGES.service2, IMAGES.service3];

  return (
    <section id="services" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8 relative bg-gradient-to-b from-white via-pink-50/30 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3">
              {t.services.subtitle}
            </span>
            <h2 className="section-title">{t.services.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.services.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-pink-glow transition-all duration-500 border border-pink-100/50"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={images[i]}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-pink-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="inline-flex items-center gap-2 text-pink-700 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    {t.nav.book}
                    <FaArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
