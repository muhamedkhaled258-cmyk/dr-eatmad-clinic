import { motion } from 'framer-motion';
import { FaStethoscope, FaUserMd, FaHeart, FaCogs, FaChartLine, FaAward } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../utils/constants';

const ICONS = [FaStethoscope, FaUserMd, FaHeart, FaCogs, FaChartLine, FaAward];

export default function WhyUs() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="why-us" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3">
              {t.whyUs.subtitle}
            </span>
            <h2 className="section-title">{t.whyUs.title}</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-pink rounded-4xl blur-2xl opacity-20" />
              <div className="relative rounded-4xl overflow-hidden shadow-soft-lg border-4 border-white">
                <img
                  src={IMAGES.doctorWhy}
                  alt="Dr. Eatmad"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.whyUs.benefits.map((b, i) => {
                const Icon = ICONS[i] || FaHeart;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-white rounded-2xl p-5 shadow-soft hover:shadow-pink-glow transition-all duration-300 border border-pink-50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-pink flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5">{b.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
