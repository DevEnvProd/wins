import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    {
      image: "https://illuminatelabs.space/asset/images/HomeBanner_00.png",
      alt: "Winbox Daily Live Lucky Draw"
    },
    {
      image: "https://illuminatelabs.space/asset/images/HomeBanner_01.jpg",
      alt: "Winbox Trusted Partnership with Ez8"
    },
    {
      image: "https://illuminatelabs.space/asset/images/HomeBanner_02.webp",
      alt: "Winbox Free Turnover Bonus"
    },
    {
      image: "https://illuminatelabs.space/asset/images/HomeBanner_03.webp",
      alt: "Winbox Turnover Ranking Championship"
    },
    {
      image: "https://illuminatelabs.space/asset/images/HomeBanner_04.webp",
      alt: "Winbox Ambassador"
    }
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden group bg-black">
      {/* Slides */}
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative flex items-center justify-center">
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-contain md:object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

