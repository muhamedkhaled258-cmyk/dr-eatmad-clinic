import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaDirections } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { LOCATIONS } from '../utils/constants';

export default function Location() {
  const { t } = useLanguage();

  const maps = [
    {
      name: t.clinic.branch1Name,
      link: LOCATIONS.nasrCity,
      embed: 'https://www.google.com/maps?q=Nasr+City+Cairo+Abbas+El+Akkad&output=embed'
    },
    {
      name: t.clinic.branch2Name,
      link: LOCATIONS.haram,
      embed: 'https://www.google.com/maps?q=Al+Haram+Street+Giza&output=embed'
    }
  ];

  return (
    <section id="contact" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3">
              {t.location.subtitle}
            </span>
            <h2 className="section-title">{t.location.title}</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {maps.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-pink-glow transition-all duration-500 border border-pink-100/50"
              >
                <div className="p-5 flex items-center justify-between border-b border-pink-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-pink flex items-center justify-center">
                      <FaMapMarkedAlt className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-black">{m.name}</h3>
                  </div>
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold hover:bg-pink-200 transition"
                  >
                    <FaDirections className="w-4 h-4" />
                    <span className="hidden sm:inline">{t.location.directions}</span>
                  </a>
                </div>

                <div className="relative aspect-[16/10]">
                  <iframe
                    src={m.embed}
                    title={m.name}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
