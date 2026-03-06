import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingElements = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Floating Promos Container */}
      <div className="fixed bottom-12 md:bottom-10 left-6 z-50 flex flex-col-reverse gap-4 pointer-events-none items-center md:items-start">
        {/* Gift Box Toggle */}
        <motion.div 
          layout
          drag={!isOpen && isMobile}
          dragMomentum={false}
          whileDrag={{ scale: 1.1 }}
          animate={isOpen ? { x: 0, y: 0 } : {}}
          onClick={() => setIsOpen(!isOpen)}
          className="w-28 md:w-48 cursor-pointer pointer-events-auto relative z-20 touch-none"
        >
          <div className="relative">
            <img 
              src={isOpen ? "https://illuminatelabs.space/asset/images/FreeGiftOpen.png" : "https://illuminatelabs.space/asset/images/FreeGiftClosed.png"} 
              alt="Free Gift" 
              className="w-full drop-shadow-2xl transition-transform hover:scale-105" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {isOpen && (
            <>
              {/* iPhone Promo */}
              <motion.div 
                key="iphone"
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="w-28 md:w-48 pointer-events-auto relative z-10"
              >
                <div className="relative">
                  <img src="https://illuminatelabs.space/asset/images/winbox_freeiphonepromax.png" alt="iPhone Promo" className="w-full drop-shadow-2xl hover:-translate-y-2 transition-transform" referrerPolicy="no-referrer" />
                </div>
              </motion.div>

              {/* Gold Bar Promo */}
              <motion.div 
                key="goldbar"
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="w-28 md:w-48 pointer-events-auto relative z-10"
              >
                <div className="relative">
                  <img src="https://illuminatelabs.space/asset/images/winbox_floatingfreegoldbar.png" alt="Free Gold Bar" className="w-full drop-shadow-2xl hover:-translate-y-2 transition-transform" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
