import { motion } from 'framer-motion';
import { FaCheckCircle, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../utils/constants';

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-1">
              {t.about.subtitle}
            </span>
            <h2 className="section-title">{t.about.title}</h2>
          </motion.div>

          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:[direction:rtl]' : ''}`}>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-pink rounded-4xl blur-2xl opacity-30" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-4xl overflow-hidden shadow-soft-lg border-4 border-white"
                >
                  <img
                    src={IMAGES.doctorAbout}
                    alt={t.about.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>

              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={isRTL ? 'lg:order-2 text-right' : 'lg:order-1'}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.about.name}</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t.about.intro}</p>

              {/* Specialties */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {t.about.specialties.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-2 bg-pink-50/60 rounded-xl p-3 hover:bg-pink-100 transition"
                  >
                    <FaCheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-black font-medium">{s}</span>
                  </motion.div>
                ))}
              </div>

              {/* Qualifications */}
              <div className="glass-pink rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className="w-6 h-6 text-pink-700" />
                  <h4 className="text-xl font-bold text-black">{t.about.qualificationsTitle}</h4>
                </div>
                <ul className="space-y-2.5">
                  {t.about.qualifications.map((q, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-2 text-sm md:text-base text-black"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2.5 flex-shrink-0" />
                      <span>{q}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
