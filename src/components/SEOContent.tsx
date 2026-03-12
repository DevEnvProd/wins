export const SEOContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -z-10" />

      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gold-outline">
          Winbox 666 Official Platform Guide
        </h2>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Everything you need to know about Winbox Malaysia</p>
      </div>

      {/* Book Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* The Book Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 relative">
          
          {/* Central Spine Shadow (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none z-10" />
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 z-10" />

          {/* Left Page */}
          <div className="p-8 md:p-16 space-y-10 relative bg-gradient-to-br from-white to-gray-50/30">
            <div className="absolute top-8 left-8 opacity-10">
              <span className="text-8xl font-black text-sky-500">01</span>
            </div>
            
            <section className="space-y-6 relative">
              <h3 className="text-2xl font-black text-gray-800 uppercase leading-tight border-l-4 border-sky-500 pl-4">
                The Most Trusted Online Casino Malaysia
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Winbox Casino stands as a beacon of excellence in the 2026 Malaysia online gambling industry. Our commitment to providing a premium experience has earned us a spot as one of the top 10 trusted online casino Malaysia.
                </p>
                <p>
                  Members consistently praise our platform for its reliability and the high quality of our bonus promotions. Whether you are an Android user looking for the best mobile experience or a desktop enthusiast, Winbox Casino offers a seamless, legal, and safe environment for all your betting needs.
                </p>
              </div>
            </section>

            <section className="space-y-6 relative">
              <h3 className="text-2xl font-black text-gray-800 uppercase leading-tight border-l-4 border-sky-500 pl-4">
                Diverse Gaming Portfolio
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Say goodbye to boredom with our extensive list of casino game types. We bring together the best entertainment options from world-class developers, ensuring every visit to Winbox Official is unique and rewarding.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {['Live Casino', 'Slot Games', 'Sportsbook', '4D Lottery', '918Kiss', 'E-Sports'].map((item, i) => (
                    <li key={i} className="flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-white via-sky-50 to-sky-100 border border-sky-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <span className="text-xs md:text-sm font-black uppercase tracking-tight text-gold-outline">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Page */}
          <div className="p-8 md:p-16 space-y-10 relative bg-gradient-to-bl from-white to-gray-50/30">
            <div className="absolute top-8 right-8 opacity-10">
              <span className="text-8xl font-black text-sky-500">02</span>
            </div>

            <section className="space-y-6 relative">
              <h3 className="text-2xl font-black text-gray-800 uppercase leading-tight border-l-4 border-sky-500 pl-4">
                Premium Sports Betting Experience
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Our online sportsbook Malaysia offers bettors the chance to engage with a wide range of global sporting events. With real-time betting and competitive odds, you can turn your sports knowledge into significant rewards.
                </p>
                <p>
                  From football and basketball to tennis and badminton, we provide the best sportsbook Malaysia has to offer. Our platform is designed for quick bet placement, ensuring you never miss a moment of the action.
                </p>
              </div>
            </section>

            <section className="space-y-6 relative">
              <h3 className="text-2xl font-black text-gray-800 uppercase leading-tight border-l-4 border-sky-500 pl-4">
                Authentic Live Casino Atmosphere
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Experience the thrill of a physical casino from the comfort of your home. Our <span className="font-bold underline text-sky-600">online live casino Malaysia</span> features professional live dealers and authentic gaming tables.
                </p>
                <p>
                  Engage in high-stakes poker, blackjack, roulette, and baccarat. Our live streaming technology ensures a transparent and immersive experience, allowing you to compete against other real players in real-time for ultimate victory.
                </p>
              </div>
            </section>

            {/* Decorative "Page Corner" effect */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-200 to-transparent pointer-events-none opacity-50" />
          </div>
        </div>

        {/* Book "Thickness" Shadow */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/10 blur-xl -z-10 rounded-full" />
      </div>
    </div>
  );
};
