import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../utils/constants';

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100"
        >
          <motion.img
            src={IMAGES.logo}
            alt="Logo"
            className="w-24 h-24 mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="loader-ring" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
