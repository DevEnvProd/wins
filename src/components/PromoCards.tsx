import React from 'react';

interface Stat {
  title: string;
  subtitle: string;
  image: string;
}

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-40 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
      {/* Background Image */}
      <img 
        src={stat.image} 
        alt={stat.subtitle} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 z-10">
        <h3 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-1">{stat.title}</h3>
        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-200/90 drop-shadow-md">{stat.subtitle}</p>
      </div>
    </div>
  );
};

export const PromoCards = () => {
  const stats = [
    { 
      title: "1M+", 
      subtitle: "Active Users",
      image: "https://illuminatelabs.space/asset/images/card_activeuser.png"
    },
    { 
      title: "99.9%", 
      subtitle: "Satisfied Rate",
      image: "https://illuminatelabs.space/asset/images/card_satisfiedrate.png"
    },
    { 
      title: "500+", 
      subtitle: "Live Games",
      image: "https://illuminatelabs.space/asset/images/card_livegame.png"
    },
    { 
      title: "100%", 
      subtitle: "Security Certification",
      image: "https://illuminatelabs.space/asset/images/card_securitycert.png"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gold-outline">Platform Highlights</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} stat={s} />
        ))}
      </div>
    </div>
  );
};
