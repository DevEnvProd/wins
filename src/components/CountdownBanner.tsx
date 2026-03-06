import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [currentTheme, setCurrentTheme] = useState(0);

  const themes = [
    {
      gradient: "from-orange-500 to-red-600",
      image: "https://illuminatelabs.space/asset/images/Iphone17_orange.png",
      colorName: "Orange"
    },
    {
      gradient: "from-yellow-400 to-yellow-600",
      image: "https://illuminatelabs.space/asset/images/winbox_freegoldbar.png",
      colorName: "Gold"
    }
  ];

  useEffect(() => {
    const themeInterval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length);
    }, 7000);

    const calculateTimeLeft = () => {
      const now = new Date();
      const nowUtc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const nowGmt8 = new Date(nowUtc + (3600000 * 8));
      
      let targetGmt8 = new Date(nowGmt8);
      targetGmt8.setHours(21, 0, 0, 0);
      
      if (nowGmt8 >= targetGmt8) {
        targetGmt8.setDate(targetGmt8.getDate() + 1);
      }
      
      const diff = targetGmt8.getTime() - nowGmt8.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(themeInterval);
    };
  }, [themes.length]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');
  const h = formatNumber(timeLeft.hours);
  const m = formatNumber(timeLeft.minutes);
  const s = formatNumber(timeLeft.seconds);
  
  const timerChars = [h[0], h[1], ':', m[0], m[1], ':', s[0], s[1]];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div 
        animate={{ backgroundColor: 'transparent' }} // We use the gradient class instead
        className={`relative rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between text-white overflow-hidden transition-all duration-1000 bg-gradient-to-br ${themes[currentTheme].gradient} shadow-2xl shadow-black/20`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 z-10 text-center md:text-left">
          <div className="w-32 h-48 md:w-48 md:h-80 relative shrink-0">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentTheme}
                initial={{ opacity: 0, x: -20, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                exit={{ opacity: 0, x: 20, rotate: 0 }}
                transition={{ duration: 0.8 }}
                src={themes[currentTheme].image} 
                alt={`Prize ${themes[currentTheme].colorName}`} 
                className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                referrerPolicy="no-referrer" 
              />
            </AnimatePresence>
          </div>
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] opacity-80"
            >
              Daily Live Luckydraw Countdown
            </motion.p>
            <h2 className={`${themes[currentTheme].colorName === 'Gold' ? 'text-3xl md:text-6xl' : 'text-4xl md:text-8xl'} font-black tracking-tighter leading-none`}>
              {themes[currentTheme].colorName === 'Gold' ? (
                <>100 GRAMS <br className="hidden md:block" /> GOLD PER DAY</>
              ) : (
                <>1 DAY <br className="hidden md:block" /> 1 IPHONE</>
              )}
            </h2>
            <p className="text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest pt-2">
              Live Start At Every Night 9pm (GMT+8)
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-8 z-10 mt-8 lg:mt-0 w-full lg:w-auto">
          <div className="flex gap-2 md:gap-3 justify-center w-full">
            {timerChars.map((char, i) => (
              <div key={i} className={char === ':' ? "text-2xl md:text-5xl font-black flex items-center animate-pulse" : "bg-white/10 backdrop-blur-xl w-8 h-12 md:w-14 md:h-20 rounded-lg md:rounded-2xl flex items-center justify-center text-xl md:text-4xl font-black shadow-2xl border border-white/20"}>
                {char}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 px-6 py-3 rounded-2xl font-black text-[10px] md:text-xs transition-all uppercase tracking-widest shadow-xl w-full sm:w-auto">
              Previous Winner Record
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-black text-[10px] md:text-xs hover:bg-gray-100 transition-all uppercase tracking-widest shadow-xl w-full sm:w-auto">
              How to get iPhone?
            </button>
          </div>
        </div>

        {/* Decorative background elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" 
        />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
};
