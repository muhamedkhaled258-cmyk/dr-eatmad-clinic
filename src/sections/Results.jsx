import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../utils/constants';

export default function Results() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="results" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-pink-50/40 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3">
              {t.results.subtitle}
            </span>
            <h2 className="section-title">{t.results.title}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative px-2 md:px-12"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              rtl={isRTL}
              key={isRTL ? "rtl" : "ltr"}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="!pb-14"
            >
              {IMAGES.beforeAfter.map((img, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-white"
                  >
                    <img
                      src={img}
                      alt={`Before & After ${i + 1}`}
                      loading="lazy"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
