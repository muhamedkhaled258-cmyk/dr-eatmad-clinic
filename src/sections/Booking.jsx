import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaWhatsapp, FaUser, FaPhone, FaBirthdayCake, FaStethoscope, FaCity, FaCommentDots } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsApp } from '../utils/constants';

export default function Booking() {
  const { t, lang } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    const lines = lang === 'ar'
      ? [
          '🌸 طلب حجز جديد',
          `👤 الاسم: ${data.name}`,
          `📱 الهاتف: ${data.phone}`,
          `🎂 العمر: ${data.age}`,
          `🩺 الحالة: ${data.condition}`,
          `🏙️ المدينة: ${data.city}`,
          `💬 الرسالة: ${data.message || '-'}`
        ]
      : [
          '🌸 New Booking Request',
          `👤 Name: ${data.name}`,
          `📱 Phone: ${data.phone}`,
          `🎂 Age: ${data.age}`,
          `🩺 Condition: ${data.condition}`,
          `🏙️ City: ${data.city}`,
          `💬 Message: ${data.message || '-'}`
        ];

    const message = lines.join('\n');
    openWhatsApp(message);
    reset();
  };

  const inputBase = "w-full px-4 py-3 pl-11 bg-white border-2 border-pink-100 rounded-xl text-black placeholder-gray-400 focus:border-pink-500 focus:outline-none transition";
  const labelBase = "block text-sm font-bold text-black mb-1.5";
  const errClass = "text-red-500 text-xs mt-1 font-medium";

  return (
    <section id="booking" className="section-divider">
      <div className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3">
              {t.booking.subtitle}
            </span>
            <h2 className="section-title">{t.booking.title}</h2>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-4xl shadow-soft-lg p-6 md:p-10 border border-pink-100"
          >
            <div className="grid md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className={labelBase}>{t.booking.name}</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 w-4 h-4" />
                  <input
                    {...register('name', { required: true, minLength: 2 })}
                    className={inputBase}
                    placeholder={t.booking.name}
                  />
                </div>
                {errors.name && <p className={errClass}>{t.booking.errors.required}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className={labelBase}>{t.booking.phone}</label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 w-4 h-4" />
                  <input
                    type="tel"
                    {...register('phone', { required: true, pattern: /^[0-9+\s-]{8,15}$/ })}
                    className={inputBase}
                    placeholder="01xxxxxxxxx"
                  />
                </div>
                {errors.phone && <p className={errClass}>{t.booking.errors.invalidPhone}</p>}
              </div>

              {/* Age */}
              <div>
                <label className={labelBase}>{t.booking.age}</label>
                <div className="relative">
                  <FaBirthdayCake className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 w-4 h-4" />
                  <input
                    type="number"
                    min="1"
                    max="120"
                    {...register('age', { required: true, min: 1, max: 120 })}
                    className={inputBase}
                    placeholder="30"
                  />
                </div>
                {errors.age && <p className={errClass}>{t.booking.errors.invalidAge}</p>}
              </div>

              {/* City */}
              <div>
                <label className={labelBase}>{t.booking.city}</label>
                <div className="relative">
                  <FaCity className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 w-4 h-4" />
                  <input
                    {...register('city', { required: true })}
                    className={inputBase}
                    placeholder={t.booking.city}
                  />
                </div>
                {errors.city && <p className={errClass}>{t.booking.errors.required}</p>}
              </div>

              {/* Condition */}
              <div className="md:col-span-2">
                <label className={labelBase}>{t.booking.condition}</label>
                <div className="relative">
                  <FaStethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 w-4 h-4 z-10" />
                  <select
                    {...register('condition', { required: true })}
                    className={`${inputBase} appearance-none cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled>{t.booking.condition}</option>
                    {t.booking.conditions.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                {errors.condition && <p className={errClass}>{t.booking.errors.required}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className={labelBase}>{t.booking.message}</label>
                <div className="relative">
                  <FaCommentDots className="absolute left-4 top-4 text-pink-500 w-4 h-4" />
                  <textarea
                    {...register('message')}
                    rows="4"
                    className={`${inputBase} pl-11 pt-3 resize-none`}
                    placeholder={t.booking.message}
                  />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="btn-whatsapp w-full mt-7 text-lg disabled:opacity-60"
            >
              <FaWhatsapp className="w-6 h-6" />
              {t.booking.submit}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
