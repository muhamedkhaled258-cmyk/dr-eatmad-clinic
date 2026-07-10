import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES, SOCIAL_LINKS, EMAIL, PHONE_NUMBERS, scrollToSection } from '../utils/constants';

const NAV_LINKS = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'why-us', key: 'whyUs' },
  { id: 'results', key: 'results' },
  { id: 'videos', key: 'videos' },
  { id: 'locations', key: 'locations' },
  { id: 'booking', key: 'book' }
];

const SOCIALS = [
  { icon: FaFacebookF, url: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: FaFacebookF, url: SOCIAL_LINKS.facebookCenter, label: 'Facebook Center' },
  { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: FaTiktok, url: SOCIAL_LINKS.tiktok, label: 'TikTok' },
  { icon: FaYoutube, url: SOCIAL_LINKS.youtube, label: 'YouTube' }
];

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative text-white pt-16 pb-8 px-4 md:px-8 mt-6 mx-6 rounded-t-5xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 50%, #7f1140 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 bg-white/95 rounded-2xl p-3 w-fit">
              <img src={IMAGES.logo} alt="Logo" className="w-14 h-14 rounded-xl object-contain" />
              <div>
                <div className="text-pink-700 font-bold text-sm leading-tight">
                  {lang === 'ar' ? 'د. اعتماد علام' : 'Dr. Eatmad Allam'}
                </div>
                <div className="text-pink-500 text-xs">Lymphatic Clinic</div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">{t.footer.tagline}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-white/85 text-sm hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block"
                  >
                    → {t.nav[l.key]}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${PHONE_NUMBERS.footer}`} className="flex items-center gap-2 text-white/90 hover:text-white">
                  <FaPhone className="w-4 h-4" />
                  {PHONE_NUMBERS.footer}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-white/90 hover:text-white break-all">
                  <FaEnvelope className="w-4 h-4 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/90">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-xs">Nasr City · Al Haram · Cairo, Egypt</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">{t.footer.follow}</h3>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur hover:bg-white hover:text-pink-700 flex items-center justify-center transition"
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a
              href="https://wa.me/201145719580"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-2.5 rounded-full text-sm font-semibold transition"
            >
              <FaWhatsapp className="w-5 h-5" />
              01145719580
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-white/80 text-sm">
          <p>© {year} Dr. Eatmad Ashraf Allam. {t.footer.rights}</p>
          <p className="text-xs">{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
}
