import { Link } from 'react-router-dom';
import { Trophy, Gift } from 'lucide-react';
import { motion } from 'motion/react';

export const WorldCupWinnerBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-6">
      <div className="relative rounded-2xl bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 border-2 border-yellow-400 shadow-2xl overflow-hidden p-6 md:p-8 text-center">
        
        {/* Confetti effect background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
          <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-200 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-red-200 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute bottom-10 left-30 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-100 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-red-300 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="text-yellow-100 fill-yellow-200 animate-pulse" size={32} />
            <Trophy className="text-yellow-100 fill-yellow-200 animate-pulse" size={48} />
            <Trophy className="text-yellow-100 fill-yellow-200 animate-pulse" size={32} />
          </div>
          
          <h2 className="text-white font-black text-3xl md:text-5xl uppercase tracking-widest mb-3 drop-shadow-md">
            Congratulations Spain!
          </h2>
          <p className="text-yellow-50 font-extrabold text-sm md:text-lg uppercase tracking-wider mb-6 drop-shadow-sm max-w-2xl">
            2026 FIFA World Cup Champions
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <div className="bg-black/20 rounded-xl px-4 py-2 border border-yellow-300/30 backdrop-blur-sm">
              <p className="text-white text-xs md:text-sm font-bold uppercase">
                Celebrate with our Exclusive World Cup Winner Promo!
              </p>
            </div>
            
            <Link 
              to="/login"
              className="flex items-center gap-2 bg-white text-red-600 hover:bg-yellow-100 font-black text-[12px] md:text-[14px] uppercase tracking-widest px-6 py-3 rounded-lg shadow-xl shadow-black/20 hover:scale-105 transition-transform"
            >
              <Gift size={16} />
              Claim 200% Bonus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
