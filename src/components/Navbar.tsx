import { useState } from 'react';
import { Globe, ChevronDown, Flame, Sparkles, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === name ? null : name);
  };

  const slotProviders = [
    { name: "", type: "", isHot: true, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_lucky365.webp" },
    { name: "", type: "", isHot: true, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_pragmaticplay.webp" },
    { name: "", type: "", isHot: true, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_microslot.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_monkeyking.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_jili.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_jdb.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_cq9.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_fachai.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_nextspin.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_fatpanda.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_rsg.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_ygr.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_redtiger.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_askmeslot.webp" },
    { name: "", type: "", isHot: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_kingmidas.webp" },
  ];

  const sportsProviders = [
    { name: "", type: "", imageUrl: "https://illuminatelabs.space/asset/images/sport_maxbet.webp" },
    { name: "", type: "", imageUrl: "https://illuminatelabs.space/asset/images/sport_sbobet.webp" },
    { name: "", type: "", imageUrl: "https://illuminatelabs.space/asset/images/sport_insport.webp" },
    { name: "", type: "", imageUrl: "https://illuminatelabs.space/asset/images/sport_cmd368.webp" },
    { name: "", type: "", imageUrl: "https://illuminatelabs.space/asset/images/sport_rcb988.webp" },
    { name: "", type: "", imageUrl: "https://illuminatelabs.space/asset/images/sport_sv388.webp" },
    { name: "", type: "", imageUrl: "https://illuminatelabs.space/asset/images/sport_e1sport.webp" },
  ];

  const casinoProviders = [
    { name: "", type: "", isHot: true, isNew: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_evolution.webp" },
    { name: "", type: "", isHot: true, isNew: false, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_sexy.webp" },
    { name: "", type: "", isHot: false, isNew: true, imageUrl: "https://illuminatelabs.space/asset/images/casino_pragmaticplay.webp" },
    { name: "", type: "", isHot: false, isNew: false, imageUrl: "https://illuminatelabs.space/asset/images/casino_biggaming.webp" },
    { name: "", type: "", isHot: false, isNew: false, imageUrl: "https://illuminatelabs.space/asset/images/casino_hotroad.webp" },
  ];

  const lotteryProviders = [
    { name: "EKOR", type: "LOTTERY", isHot: true, imageUrl: "https://illuminatelabs.space/asset/images/hotgame_ekor.webp" },
  ];

  const aboutMenu = {
    "Partnership & Programs": [
      "Ambassador",
      "Brand Ambassador",
      "Winbox Partnership",
      "Agent",
      "Referrer"
    ],
    "Tutorials & Guides": [
      "Register Tutorial",
      "Top Up Methods",
      "Withdraw Tutorial",
      "Ekor (Lottery) Tutorial",
      "Horse Racing Tutorial",
      "Real Name Authentication",
      "USDT Deposit",
      "USDT Withdrawal"
    ],
    "Support & Info": [
      "Help",
      "Terms and Conditions",
      "Privacy",
      "Contact Us",
      "Blog"
    ]
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-full border border-white/20 pointer-events-auto relative">
        <div className="px-6 md:px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="https://illuminatelabs.space/asset/images/Winbox_MY_logo.avif" 
                  alt="Winbox 666" 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">
              <Link to="/" className="text-sky-500 border-b-2 border-sky-500 pb-1">Home</Link>
              <a href="#" className="hover:text-sky-500 transition-colors">Promo</a>
              
              {/* Slots Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('slots')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition-colors py-4">
                  Slots
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'slots' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'slots' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 overflow-hidden z-50"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

                      <div className="grid grid-cols-5 gap-4">
                        {slotProviders.map((provider, idx) => (
                          <motion.div
                            key={`slot-${idx}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.03 }}
                            className="relative aspect-[3/4] rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-sky-500/50 transition-colors"
                          >
                            <img 
                              src={provider.imageUrl} 
                              alt={provider.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                              <div className="text-white font-black text-xs uppercase tracking-wider mb-1 drop-shadow-lg">{provider.name}</div>
                              <div className="text-sky-300 text-[8px] font-bold uppercase tracking-widest opacity-80">- {provider.type} -</div>
                            </div>

                            {provider.isHot && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[9px] font-black px-2 py-1 rounded-bl-lg flex items-center gap-1 shadow-lg">
                                <Flame size={10} className="fill-white animate-pulse" /> HOT
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Live Casino Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('casino')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition-colors py-4">
                  Live Casino
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'casino' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'casino' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 overflow-hidden z-50"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-[100px] -z-10" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/20 rounded-full blur-[100px] -z-10" />

                      <div className="grid grid-cols-5 gap-4">
                        {casinoProviders.map((provider, idx) => (
                          <motion.div
                            key={`casino-${idx}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative aspect-[3/4] rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-red-500/50 transition-colors"
                          >
                            <img 
                              src={provider.imageUrl} 
                              alt={provider.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent opacity-90" />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                              <div className="text-white font-black text-xs uppercase tracking-wider mb-1 drop-shadow-lg">{provider.name}</div>
                              <div className="text-red-100 text-[8px] font-bold uppercase tracking-widest opacity-90">- {provider.type} -</div>
                            </div>

                            {provider.isHot && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[9px] font-black px-2 py-1 rounded-bl-lg flex items-center gap-1 shadow-lg">
                                <Flame size={10} className="fill-white animate-pulse" /> HOT
                              </div>
                            )}

                            {provider.isNew && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[9px] font-black px-2 py-1 rounded-bl-lg flex items-center gap-1 shadow-lg">
                                <Sparkles size={10} className="fill-white animate-pulse" /> NEW
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Sports Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('sports')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition-colors py-4">
                  Sport
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'sports' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'sports' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 overflow-hidden z-50"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] -z-10" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -z-10" />

                      <div className="grid grid-cols-4 gap-4">
                        {sportsProviders.map((provider, idx) => (
                          <motion.div
                            key={`sport-${idx}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative aspect-[3/4] rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-green-500/50 transition-colors"
                          >
                            <img 
                              src={provider.imageUrl} 
                              alt={provider.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 via-transparent to-transparent opacity-90" />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                              <div className="text-white font-black text-lg uppercase tracking-wider mb-1 drop-shadow-lg">{provider.name}</div>
                              <div className="text-green-100 text-[10px] font-bold uppercase tracking-widest opacity-90">- {provider.type} -</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* <a href="#" className="hover:text-sky-500 transition-colors">Game</a> */}
              
              {/* Lottery Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('lottery')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition-colors py-4">
                  Lottery
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'lottery' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'lottery' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 overflow-hidden z-50"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-[60px] -z-10" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-[60px] -z-10" />

                      <div className="grid grid-cols-1 gap-4">
                        {lotteryProviders.map((provider, idx) => (
                          <motion.div
                            key={`lottery-${idx}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative aspect-[3/4] rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-orange-500/50 transition-colors"
                          >
                            <img 
                              src={provider.imageUrl} 
                              alt={provider.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-transparent to-transparent opacity-90" />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                              <div className="text-white font-black text-2xl uppercase tracking-wider mb-1 drop-shadow-lg">{provider.name}</div>
                              <div className="text-orange-100 text-[10px] font-bold uppercase tracking-widest opacity-90">- {provider.type} -</div>
                            </div>

                            {provider.isHot && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[9px] font-black px-2 py-1 rounded-bl-lg flex items-center gap-1 shadow-lg">
                                <Flame size={10} className="fill-white animate-pulse" /> HOT
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* <a href="#" className="hover:text-sky-500 transition-colors">Download</a> */}
              
              {/* About Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition-colors py-4">
                  About
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-[-100px] w-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-3 gap-8 overflow-hidden"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-full blur-3xl -z-10" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -z-10" />

                      {Object.entries(aboutMenu).map(([category, items], idx) => (
                        <div key={category} className="space-y-4">
                          <h3 className="text-xs font-black text-sky-500 uppercase tracking-widest border-b border-gray-100 pb-2">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {items.map((item, itemIdx) => (
                              <motion.li 
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                              >
                                {item === "Winbox Partnership" ? (
                                  <Link to="/partnership" className="block text-gray-600 hover:text-sky-500 hover:translate-x-1 transition-all duration-200 text-[10px] font-bold">
                                    {item}
                                  </Link>
                                ) : item === "Terms and Conditions" ? (
                                  <Link to="/terms" className="block text-gray-600 hover:text-sky-500 hover:translate-x-1 transition-all duration-200 text-[10px] font-bold">
                                    {item}
                                  </Link>
                                ) : (
                                  <a href="#" className="block text-gray-600 hover:text-sky-500 hover:translate-x-1 transition-all duration-200 text-[10px] font-bold">
                                    {item}
                                  </a>
                                )}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* <div className="hidden sm:flex items-center gap-2 bg-gray-100/50 px-3 py-1.5 rounded-full text-[10px] font-black cursor-pointer hover:bg-gray-200 transition-colors">
                <Globe size={14} className="text-gray-400" />
                <span className="text-gray-600">EN</span>
                <ChevronDown size={12} className="text-gray-400" />
              </div> */}
              
              <div className="flex items-center gap-2">
                <Link to="/login" className="text-gray-600 px-4 py-2 rounded-full text-[10px] font-black hover:text-sky-500 transition-colors uppercase">
                  Login
                </Link>
                <Link to="/register" className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black hover:shadow-lg hover:shadow-sky-200 transition-all uppercase tracking-widest">
                  Register
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-gray-600 hover:text-sky-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden rounded-b-3xl"
            >
              <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
                <Link 
                  to="/" 
                  className="block text-sm font-black text-sky-500 uppercase tracking-widest py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <a 
                  href="#" 
                  className="block text-sm font-black text-gray-600 hover:text-sky-500 uppercase tracking-widest py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Promo
                </a>

                {/* Mobile Slots */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('slots')}
                    className="flex items-center justify-between w-full text-sm font-black text-gray-600 hover:text-sky-500 uppercase tracking-widest py-2"
                  >
                    Slots
                    <ChevronDown size={16} className={`transition-transform ${mobileActiveDropdown === 'slots' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'slots' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-xl mt-2"
                      >
                        <div className="p-4 grid grid-cols-2 gap-3">
                          {slotProviders.map((provider, idx) => (
                            <div key={`mobile-slot-${idx}`} className="text-xs text-gray-600 py-1 flex items-center gap-2">
                              <div className="w-1 h-1 bg-sky-500 rounded-full"></div>
                              {provider.name || "Provider"}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Live Casino */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('casino')}
                    className="flex items-center justify-between w-full text-sm font-black text-gray-600 hover:text-sky-500 uppercase tracking-widest py-2"
                  >
                    Live Casino
                    <ChevronDown size={16} className={`transition-transform ${mobileActiveDropdown === 'casino' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'casino' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-xl mt-2"
                      >
                        <div className="p-4 grid grid-cols-2 gap-3">
                          {casinoProviders.map((provider, idx) => (
                            <div key={`mobile-casino-${idx}`} className="text-xs text-gray-600 py-1 flex items-center gap-2">
                              <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                              {provider.name || "Provider"}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Sports */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('sports')}
                    className="flex items-center justify-between w-full text-sm font-black text-gray-600 hover:text-sky-500 uppercase tracking-widest py-2"
                  >
                    Sport
                    <ChevronDown size={16} className={`transition-transform ${mobileActiveDropdown === 'sports' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'sports' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-xl mt-2"
                      >
                        <div className="p-4 grid grid-cols-2 gap-3">
                          {sportsProviders.map((provider, idx) => (
                            <div key={`mobile-sport-${idx}`} className="text-xs text-gray-600 py-1 flex items-center gap-2">
                              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                              {provider.name || "Provider"}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Lottery */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('lottery')}
                    className="flex items-center justify-between w-full text-sm font-black text-gray-600 hover:text-sky-500 uppercase tracking-widest py-2"
                  >
                    Lottery
                    <ChevronDown size={16} className={`transition-transform ${mobileActiveDropdown === 'lottery' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'lottery' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-xl mt-2"
                      >
                        <div className="p-4 grid grid-cols-1 gap-3">
                          {lotteryProviders.map((provider, idx) => (
                            <div key={`mobile-lottery-${idx}`} className="text-xs text-gray-600 py-1 flex items-center gap-2">
                              <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                              {provider.name}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile About */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('about')}
                    className="flex items-center justify-between w-full text-sm font-black text-gray-600 hover:text-sky-500 uppercase tracking-widest py-2"
                  >
                    About
                    <ChevronDown size={16} className={`transition-transform ${mobileActiveDropdown === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'about' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-xl mt-2"
                      >
                        <div className="p-4 space-y-4">
                          {Object.entries(aboutMenu).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="text-xs font-bold text-sky-500 mb-2">{category}</h4>
                              <div className="space-y-2 pl-2 border-l-2 border-gray-200">
                                {items.map((item) => (
                                  <div key={item} className="text-xs text-gray-600">
                                    {item === "Winbox Partnership" ? (
                                      <Link to="/partnership" onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
                                    ) : item === "Terms and Conditions" ? (
                                      <Link to="/terms" onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
                                    ) : (
                                      <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{item}</a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
