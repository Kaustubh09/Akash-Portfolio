import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// Floating action button — bottom-right. The ONLY way to surface the contact
// modal on page load (the modal must NOT open automatically).
export default function FloatingContactButton({ onClick }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: 'easeOut' }}
      onClick={onClick}
      aria-label="Get in touch"
      className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-30 inline-flex items-center gap-2 rounded-full pl-3 pr-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] hover:from-blue-500 hover:to-blue-400 transition-all hover:-translate-y-0.5 animate-pulse-soft"
    >
      <span className="grid place-items-center h-7 w-7 rounded-full bg-white/15">
        <MessageCircle size={16} />
      </span>
      <span className="text-sm font-semibold pr-1 hidden sm:inline">Get in Touch</span>
    </motion.button>
  );
}
