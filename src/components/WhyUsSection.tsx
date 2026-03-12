import { motion } from 'motion/react';

export const WhyUsSection = () => {
  const features = [
    { 
      title: "WINBOX TRUSTED CASINO", 
      desc: "Solid and Secure Betting System. The privacy of your info is important to us and we adhere to strict confidentiality and privacy policies.", 
      image: "https://illuminatelabs.space/asset/images/winbox_trusted_casino.png",
      size: "lg:col-span-2"
    },
    { 
      title: "FAST SIGN UP", 
      desc: "Open an account in seconds to enjoy premium entertainment.", 
      image: "https://illuminatelabs.space/asset/images/winbox_signup.png",
      size: "lg:col-span-1"
    },
    { 
      title: "24/7 SUPPORT", 
      desc: "Professional help via Live Chat, WhatsApp and Telegram.", 
      image: "https://illuminatelabs.space/asset/images/winbox_24_7.png",
      size: "lg:col-span-1"
    },
    { 
      title: "SECURE PAYMENTS", 
      desc: "Instant deposits and withdrawals via FPX and Crypto.", 
      image: "https://illuminatelabs.space/asset/images/winbox_securepayment.png",
      size: "lg:col-span-1"
    },
    { 
      title: "VIP REWARDS", 
      desc: "Exclusive bonuses and turnover rewards for our loyal members.", 
      image: "https://illuminatelabs.space/asset/images/winbox_vip_rewards.png",
      size: "lg:col-span-1"
    }
  ];

  return (
    <div className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gold-outline">
            Why Winbox 666 is Better
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">The ultimate gaming experience in Malaysia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${f.size} group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-sky-400 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-200/50`}
            >
              {/* Background Image */}
              <img 
                src={f.image} 
                alt={f.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="relative z-10 h-full p-10 flex flex-col justify-end space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white uppercase leading-tight group-hover:text-sky-400 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base font-medium">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="w-12 h-1.5 bg-sky-500 rounded-full group-hover:w-24 group-hover:bg-sky-400 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
