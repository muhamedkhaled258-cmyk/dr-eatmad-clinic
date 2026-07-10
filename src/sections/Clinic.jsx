import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { PHONE_NUMBERS, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, openWhatsApp } from '../utils/constants';

export default function Clinic() {
  const { t } = useLanguage();

  const branches = [
    {
      name: t.clinic.branch1Name,
      address: t.clinic.branch1Address,
      phone: PHONE_NUMBERS.branch1,
      hours: t.clinic.branch1Hours,
      time: t.clinic.branch1Time
    },
    {
      name: t.clinic.branch2Name,
      address: t.clinic.branch2Address,
      phone: PHONE_NUMBERS.branch2,
      hours: t.clinic.branch2Hours,
      time: t.clinic.branch2Time
    }
  ];

  return (
    <section id="locations" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-pink-50/30 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3">
              {t.clinic.subtitle}
            </span>
            <h2 className="section-title">{t.clinic.title}</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {branches.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-pink-glow transition-all duration-500 border border-pink-100/50"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-pink flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">{b.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.address}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${b.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-pink-50/60 hover:bg-pink-100 transition group/item"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <FaPhoneAlt className="w-4 h-4 text-pink-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">{t.clinic.phone}</div>
                      <div className="font-bold text-black">{b.phone}</div>
                    </div>
                  </a>

                  <button
                    onClick={() => openWhatsApp(`Hello, I want to book at ${b.name}`)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <FaWhatsapp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 text-start">
                      <div className="text-xs text-gray-500 font-semibold">{t.clinic.whatsapp}</div>
                      <div className="font-bold text-black">{WHATSAPP_DISPLAY}</div>
                    </div>
                  </button>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-pink-50/60">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <FaClock className="w-4 h-4 text-pink-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">{t.clinic.hours}</div>
                      <div className="font-bold text-black">{b.hours}</div>
                      <div className="text-sm text-pink-700 font-semibold">{b.time}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
