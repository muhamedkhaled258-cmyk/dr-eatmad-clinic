import { motion } from 'framer-motion';
import { FaPlay, FaFacebookF, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { VIDEOS } from '../utils/constants';

export default function Videos() {
  const { t } = useLanguage();

  return (
    <section id="videos" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3">
              {t.videos.subtitle}
            </span>
            <h2 className="section-title">{t.videos.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {VIDEOS.map((url, i) => {
              const embedUrl = `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(url)}&show_text=false&width=267&t=0`;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-pink-glow transition-all duration-500 border border-pink-100/50"
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <iframe
                      src={embedUrl}
                      title={`Video ${i + 1}`}
                      className="w-full h-full"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-gradient-pink flex items-center justify-center">
                        <FaPlay className="w-3.5 h-3.5 text-white ml-0.5" />
                      </div>
                      <span className="font-semibold text-black text-sm">Reel #{i + 1}</span>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-pink-700 hover:text-pink-900 text-xs font-semibold"
                    >
                      <FaFacebookF className="w-3.5 h-3.5" />
                      {t.videos.watch}
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
