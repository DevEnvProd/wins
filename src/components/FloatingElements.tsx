import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingElements = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 z-50 bg-sky-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={32} />
      </button>

      {/* iPhone Promo */}
      <motion.div 
        drag={isMobile}
        dragMomentum={false}
        whileDrag={{ scale: 1.1 }}
        className="fixed bottom-24 md:bottom-10 left-6 z-50 w-32 md:w-48 group cursor-pointer touch-none"
      >
        <div className="relative">
          <img src="https://illuminatelabs.space/asset/images/winbox_freeiphonepromax.png" alt="iPhone Promo" className="w-full drop-shadow-2xl group-hover:-translate-y-2 transition-transform" referrerPolicy="no-referrer" />
        </div>
      </motion.div>
    </>
  );
};
