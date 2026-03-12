import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserPlus, Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { 
      id: "01", 
      title: "Register For Free", 
      desc: "Getting started is effortless. Simply click the 'Register' button at the top, fill in your basic details, and verify your mobile number. You'll be part of the Winbox community in less than a minute.",
      image: "https://illuminatelabs.space/asset/images/step_freetosignup.png",
      color: "from-sky-400 to-blue-600",
      action: "Join Now"
    },
    { 
      id: "02", 
      title: "Download Official App", 
      desc: "For the best experience, download our high-performance mobile app. Scan the QR code on our site or use the direct download links for iOS and Android to enjoy seamless gaming on the go.",
      image: "https://illuminatelabs.space/asset/images/step_download.png",
      color: "from-indigo-400 to-purple-600",
      action: "Download App"
    },
    { 
      id: "03", 
      title: "Login & Start Winning", 
      desc: "Once you have the app, log in with your new credentials. Explore our massive library of slots, live casino, and sports betting. Make your first deposit and claim your welcome bonus to start your winning streak!",
      image: "https://illuminatelabs.space/asset/images/step_starttoplay.png",
      color: "from-emerald-400 to-teal-600",
      action: "Start Playing"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="bg-white py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gold-outline"
          >
            How to Start Your Journey
          </motion.h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Follow this simple 3-step procedure</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Step Navigation */}
          <div className="lg:col-span-5 space-y-6">
            {steps.map((s, i) => (
              <Link to="/register" key={i} className="block">
                <motion.div 
                  className={`group cursor-pointer p-6 rounded-[2rem] border-2 transition-all duration-500 relative overflow-hidden ${
                    activeStep === i 
                      ? `border-transparent bg-gradient-to-r ${s.color} text-white shadow-2xl` 
                      : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-colors ${
                      activeStep === i ? 'bg-white/20' : 'bg-white shadow-sm text-gray-800'
                    }`}>
                      {s.id}
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-xl font-black uppercase tracking-tight transition-colors ${
                        activeStep === i ? 'text-white' : 'text-gray-800 group-hover:text-sky-500'
                      }`}>
                        {s.title}
                      </h3>
                    </div>
                    {activeStep === i && (
                      <motion.div 
                        layoutId="arrow"
                        className="hidden md:block"
                      >
                        <ChevronRight size={24} />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Progress Bar (Active Step Only) */}
                  {activeStep === i && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1 bg-white/30"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Side: Visual Content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-inner border border-gray-100 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-3xl font-black text-gray-800 uppercase tracking-tighter leading-none">
                        {steps[activeStep].title}
                      </h4>
                      <p className="text-gray-500 leading-relaxed font-medium">
                        {steps[activeStep].desc}
                      </p>
                    </div>
                    <Link to="/register">
                      <button className={`bg-gradient-to-r ${steps[activeStep].color} text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform`}>
                        {steps[activeStep].action}
                      </button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                      <img 
                        src={steps[activeStep].image} 
                        alt={steps[activeStep].title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${steps[activeStep].color} rounded-full blur-2xl opacity-40`} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
