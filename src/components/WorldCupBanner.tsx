import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Calendar, MapPin, ArrowLeft, ArrowRight, Play, ExternalLink, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Match {
  id: number;
  homeTeam: string;
  homeFlag: string;
  homeOdds: string;
  awayTeam: string;
  awayFlag: string;
  awayOdds: string;
  drawOdds: string;
  stage: string;
  venue: string;
  dateStr: string;
  // Offset in hours from "now" to keep countdown active and realistic
  hoursOffset: number;
}

export const WorldCupBanner = () => {
  const [currentMatchIdx, setCurrentMatchIdx] = useState(0);
  const [timeLeftList, setTimeLeftList] = useState<{ [key: number]: { hours: number; minutes: number; seconds: number; isLive: boolean } }>({});

  const matches: Match[] = [
    {
      id: 1,
      homeTeam: "Spain",
      homeFlag: "🇪🇸",
      homeOdds: "1.95",
      awayTeam: "Croatia",
      awayFlag: "🇭🇷",
      awayOdds: "3.75",
      drawOdds: "3.20",
      stage: "World Cup 2026 - Round of 32",
      venue: "Estadio Azteca, Mexico City",
      dateStr: "Live Match Tonight",
      hoursOffset: 1.75, // starts in 1h 45m
    },
    {
      id: 2,
      homeTeam: "Brazil",
      homeFlag: "🇧🇷",
      homeOdds: "1.65",
      awayTeam: "Germany",
      awayFlag: "🇩🇪",
      awayOdds: "4.80",
      drawOdds: "3.90",
      stage: "World Cup 2026 - Round of 32",
      venue: "MetLife Stadium, New York",
      dateStr: "Live Match Tonight",
      hoursOffset: 4.25, // starts in 4h 15m
    },
    {
      id: 3,
      homeTeam: "Argentina",
      homeFlag: "🇦🇷",
      homeOdds: "1.80",
      awayTeam: "France",
      awayFlag: "🇫🇷",
      awayOdds: "4.20",
      drawOdds: "3.40",
      stage: "World Cup 2026 - Round of 32",
      venue: "Hard Rock Stadium, Miami",
      dateStr: "Match Tomorrow",
      hoursOffset: 9.5, // starts in 9h 30m
    },
    {
      id: 4,
      homeTeam: "England",
      homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      homeOdds: "2.10",
      awayTeam: "Portugal",
      awayFlag: "🇵🇹",
      awayOdds: "3.40",
      drawOdds: "3.10",
      stage: "World Cup 2026 - Round of 32",
      venue: "SoFi Stadium, Los Angeles",
      dateStr: "Match Tomorrow",
      hoursOffset: 14.8, // starts in 14h 48m
    },
    {
      id: 5,
      homeTeam: "Japan",
      homeFlag: "🇯🇵",
      homeOdds: "3.10",
      awayTeam: "Belgium",
      awayFlag: "🇧🇪",
      awayOdds: "2.25",
      drawOdds: "3.25",
      stage: "World Cup 2026 - Round of 32",
      venue: "Mercedes-Benz Stadium, Atlanta",
      dateStr: "Upcoming Knockout Match",
      hoursOffset: 23.0, // starts in 23h
    }
  ];

  // Initialize and tick countdowns
  useEffect(() => {
    // We anchor target times once so they don't jump around on re-renders, but count down smoothly.
    const startTimestamps = matches.map(m => Date.now() + m.hoursOffset * 3600000);

    const updateCountdowns = () => {
      const now = Date.now();
      const newTimeLefts: { [key: number]: { hours: number; minutes: number; seconds: number; isLive: boolean } } = {};

      matches.forEach((match, index) => {
        const diff = startTimestamps[index] - now;
        if (diff <= 0) {
          newTimeLefts[match.id] = { hours: 0, minutes: 0, seconds: 0, isLive: true };
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          newTimeLefts[match.id] = { hours, minutes, seconds, isLive: false };
        }
      });

      setTimeLeftList(newTimeLefts);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto rotate matches every 8 seconds
  useEffect(() => {
    const autoRotate = setInterval(() => {
      setCurrentMatchIdx((prev) => (prev + 1) % matches.length);
    }, 8000);

    return () => clearInterval(autoRotate);
  }, [matches.length]);

  const handleNext = () => {
    setCurrentMatchIdx((prev) => (prev + 1) % matches.length);
  };

  const handlePrev = () => {
    setCurrentMatchIdx((prev) => (prev === 0 ? matches.length - 1 : prev - 1));
  };

  const currentMatch = matches[currentMatchIdx];
  const currentTimer = timeLeftList[currentMatch.id] || { hours: 0, minutes: 0, seconds: 0, isLive: false };

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="max-w-7xl mx-auto px-4 mb-5">
      <div id="world-cup-live-banner" className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden p-4 md:p-5">
        
        {/* Decorative Glowing backgrounds & laser lines */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-[80px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full blur-[80px] -z-10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 border-b border-white/5 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg shadow-amber-500/10 text-slate-950 animate-pulse shrink-0">
              <Trophy size={14} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[9px] font-black tracking-[0.15em] uppercase bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20">
                  FIFA World Cup 2026
                </span>
                <span className="flex items-center gap-1 text-[8px] font-black uppercase text-rose-500 animate-pulse">
                  <Activity size={8} /> Live Betting
                </span>
              </div>
              <h2 className="text-white font-extrabold text-xs md:text-sm uppercase tracking-wide mt-0.5">
                Upcoming Knockout Fixtures & Live Odds
              </h2>
            </div>
          </div>
          
          {/* Sportsbook shortcuts */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
            <span className="text-slate-500 text-[8px] font-black uppercase tracking-wider hidden lg:inline mr-1">Bet Partners:</span>
            {["SBOBET", "MAXBET", "CMD368"].map((partner) => (
              <Link 
                key={partner} 
                to="/login"
                className="bg-white/5 border border-white/10 hover:border-amber-500 hover:text-amber-400 text-slate-300 text-[8px] font-bold px-2 py-1 rounded-md transition-all whitespace-nowrap"
              >
                {partner}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center relative">
          
          {/* Match Info & Teams (Lg cols 7) */}
          <div className="lg:col-span-7 flex flex-row items-center justify-between gap-2 relative px-1">
            
            {/* Team A */}
            <div className="flex flex-col items-center text-center w-5/12">
              <span className="text-3xl md:text-4xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] mb-1 select-none transform hover:scale-110 transition-transform duration-300">
                {currentMatch.homeFlag}
              </span>
              <h3 className="text-white font-black text-xs md:text-sm uppercase tracking-wide truncate max-w-full">
                {currentMatch.homeTeam}
              </h3>
              <div className="mt-1 bg-white/5 border border-white/10 rounded px-1.5 py-0.5 flex items-center justify-center">
                <span className="text-slate-500 text-[8px] font-bold uppercase mr-1">Odds</span>
                <span className="text-amber-400 font-extrabold text-[10px]">{currentMatch.homeOdds}</span>
              </div>
            </div>

            {/* VS Divider / Odds */}
            <div className="flex flex-col items-center justify-center shrink-0 w-2/12">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 flex items-center justify-center shadow-md">
                <span className="text-amber-500 font-black text-[9px] uppercase tracking-tighter">VS</span>
              </div>
              <div className="mt-1.5 bg-white/5 border border-white/10 rounded px-1.5 py-0.5 text-center whitespace-nowrap">
                <span className="text-slate-500 text-[8px] font-bold uppercase mr-1">Draw</span>
                <span className="text-slate-300 font-extrabold text-[9px]">{currentMatch.drawOdds}</span>
              </div>
            </div>

            {/* Team B */}
            <div className="flex flex-col items-center text-center w-5/12">
              <span className="text-3xl md:text-4xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] mb-1 select-none transform hover:scale-110 transition-transform duration-300">
                {currentMatch.awayFlag}
              </span>
              <h3 className="text-white font-black text-xs md:text-sm uppercase tracking-wide truncate max-w-full">
                {currentMatch.awayTeam}
              </h3>
              <div className="mt-1 bg-white/5 border border-white/10 rounded px-1.5 py-0.5 flex items-center justify-center">
                <span className="text-slate-500 text-[8px] font-bold uppercase mr-1">Odds</span>
                <span className="text-amber-400 font-extrabold text-[10px]">{currentMatch.awayOdds}</span>
              </div>
            </div>

          </div>

          {/* Live Countdown Clock & Call to Action (Lg cols 5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6">
            <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1.5 block">
              {currentMatch.stage}
            </span>

            {/* Timer Output */}
            <div className="mb-2.5">
              {currentTimer.isLive ? (
                <div className="flex items-center gap-1.5 bg-rose-600/10 border border-rose-600/20 px-3 py-1 rounded-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                  <span className="text-rose-500 font-black tracking-wider text-[10px] uppercase">LIVE IN PROGRESS</span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="flex flex-col items-center">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-white font-black text-sm tracking-tight w-10">
                      {formatNum(currentTimer.hours)}
                    </div>
                    <span className="text-slate-500 text-[8px] uppercase font-bold mt-0.5">Hrs</span>
                  </div>
                  <span className="text-slate-700 font-black text-xs pb-3">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-white font-black text-sm tracking-tight w-10">
                      {formatNum(currentTimer.minutes)}
                    </div>
                    <span className="text-slate-500 text-[8px] uppercase font-bold mt-0.5">Min</span>
                  </div>
                  <span className="text-slate-700 font-black text-xs pb-3">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-white font-black text-sm tracking-tight w-10">
                      {formatNum(currentTimer.seconds)}
                    </div>
                    <span className="text-slate-500 text-[8px] uppercase font-bold mt-0.5">Sec</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button & Meta Info */}
            <div className="w-full sm:w-auto flex flex-col gap-1 items-center lg:items-end">
              <Link 
                to="/login"
                className="group relative flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 font-black text-[10px] uppercase tracking-wider px-5 py-2 rounded-lg shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all w-full md:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Play size={10} className="fill-slate-950 stroke-none" />
                <span>Bet Now & Get 100% Bonus</span>
                <ExternalLink size={10} className="opacity-60" />
              </Link>
              
              <div className="flex items-center gap-2.5 text-slate-600 text-[8px] font-bold mt-0.5">
                <span className="flex items-center gap-0.5">
                  <Calendar size={10} /> {currentMatch.dateStr}
                </span>
                <span className="flex items-center gap-0.5">
                  <MapPin size={10} /> {currentMatch.venue}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Carousel controls & dots */}
        <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-white/5">
          {/* Prev/Next buttons */}
          <div className="flex items-center gap-1.5">
            <button 
              onClick={handlePrev} 
              className="w-6 h-6 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Previous Match"
            >
              <ArrowLeft size={11} />
            </button>
            <button 
              onClick={handleNext} 
              className="w-6 h-6 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Next Match"
            >
              <ArrowRight size={11} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1">
            {matches.map((match, idx) => (
              <button
                key={match.id}
                onClick={() => setCurrentMatchIdx(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentMatchIdx === idx ? "w-4 bg-amber-500" : "w-1 bg-slate-800 hover:bg-slate-700"
                }`}
                aria-label={`Go to match ${idx + 1}`}
              />
            ))}
          </div>

          {/* Quick mini ticker or prompt */}
          <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest hidden sm:inline">
            Match {currentMatchIdx + 1} of {matches.length}
          </span>
        </div>

      </div>
    </div>
  );
};
