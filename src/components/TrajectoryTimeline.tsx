import { motion } from 'framer-motion';
import { Compass, Calendar, MapPin, Shield } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

// High-definition transparent club shields
import escudoNewells from '../assets/escudo_newells.png';
import escudoAdiur from '../assets/escudo_adiur.png';
import escudoBelgrano from '../assets/escudo_belgrano.png';

interface ClubTheme {
  shield: string;
  glow: string;
  borderHover: string;
  accentBg: string;
  accentText: string;
  badgeBorder: string;
  gradientOverlay: string;
}

export const TrajectoryTimeline = () => {
  const getClubMeta = (clubName: string): ClubTheme => {
    if (clubName.includes("Newell")) {
      return {
        shield: escudoNewells,
        glow: "rgba(225, 29, 72, 0.15)",
        borderHover: "hover:border-red-500/50",
        accentBg: "bg-red-950/40",
        accentText: "text-red-400",
        badgeBorder: "border-red-500/30",
        gradientOverlay: "from-red-950/20 via-transparent to-transparent"
      };
    }
    if (clubName.includes("Belgrano")) {
      return {
        shield: escudoBelgrano,
        glow: "rgba(56, 189, 248, 0.15)",
        borderHover: "hover:border-sky-400/50",
        accentBg: "bg-sky-950/40",
        accentText: "text-sky-300",
        badgeBorder: "border-sky-400/30",
        gradientOverlay: "from-sky-950/20 via-transparent to-transparent"
      };
    }
    return {
      shield: escudoAdiur,
      glow: "rgba(249, 115, 22, 0.15)",
      borderHover: "hover:border-orange-500/50",
      accentBg: "bg-orange-950/40",
      accentText: "text-orange-400",
      badgeBorder: "border-orange-500/30",
      gradientOverlay: "from-orange-950/20 via-transparent to-transparent"
    };
  };

  const officialClubs = [
    {
      name: "Newell's Old Boys",
      short: "Newell's",
      shield: escudoNewells,
      years: "2012 — 2020",
      role: "8 Años Cantera Formativa",
      accent: "border-red-500/30 hover:border-red-400/60"
    },
    {
      name: "A.D.I.U.R.",
      short: "A.D.I.U.R.",
      shield: escudoAdiur,
      years: "2020 — 24 / 2025 — Act.",
      role: "Titular Actual • Dorsal #6",
      accent: "border-orange-500/30 hover:border-orange-400/60"
    },
    {
      name: "Belgrano de Córdoba",
      short: "Belgrano",
      shield: escudoBelgrano,
      years: "2024 — 2025",
      role: "1 Temp. AFA Juvenil",
      accent: "border-sky-400/30 hover:border-sky-300/60"
    },
  ];

  return (
    <section id="trayectoria" className="py-20 sm:py-28 bg-[#050811] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Historial Formativo & Competitivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display tracking-tight">
              Trayectoria en Clubes
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mt-3 font-normal leading-relaxed">
              Evolución progresiva desde canteras formativas de primer nivel (Newell's Old Boys), desarrollo en A.D.I.U.R., una temporada de alta exigencia en AFA con Belgrano y retorno como titular consolidado de zaga.
            </p>
          </div>

          {/* High-definition club shields showcases */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 bg-slate-950/80 p-2.5 sm:p-4 rounded-2xl border border-white/10 shadow-2xl shrink-0">
            {officialClubs.map((c) => (
              <motion.div
                key={c.name}
                whileHover={{ y: -3, scale: 1.03 }}
                className={`flex flex-col items-center text-center p-2 sm:p-3 rounded-xl bg-black/50 border transition-all duration-300 group ${c.accent}`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center p-1 mb-1.5 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={c.shield}
                    alt={c.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                  {c.short}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5">
                  {c.years}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Cards with prominent diagonal shields */}
        <div className="relative">
          {/* Vertical central spine line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-blue-700 to-white -translate-x-1/2 opacity-30" />

          <div className="space-y-8 sm:space-y-12">
            {PLAYER_DATA.trajectory.map((item, index) => {
              const isEven = index % 2 === 0;
              const meta = getClubMeta(item.club);

              return (
                <motion.div
                  key={`${item.club}-${item.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Container */}
                  <div className="w-full lg:w-[47%]">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`relative p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-white/10 ${meta.borderHover} transition-all duration-300 shadow-2xl overflow-hidden group`}
                      style={{
                        boxShadow: `0 10px 30px -10px ${meta.glow}`
                      }}
                    >
                      {/* HUGE DIAGONAL WATERMARK SHIELD IN BACKGROUND */}
                      <div
                        className="absolute -right-8 -bottom-10 sm:-right-6 sm:-bottom-8 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none select-none opacity-15 sm:opacity-20 rotate-12 filter contrast-125 group-hover:scale-110 group-hover:opacity-30 group-hover:rotate-6 transition-all duration-700 ease-out z-0"
                        aria-hidden="true"
                      >
                        <img
                          src={meta.shield}
                          alt=""
                          className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
                        />
                      </div>

                      {/* Subtle club colored corner ambient gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradientOverlay} pointer-events-none z-0`} />

                      {/* Card Content (z-10 over the diagonal shield) */}
                      <div className="relative z-10 flex flex-col">
                        
                        {/* Top Badges Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2">
                            <span className={`text-[11px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded ${meta.accentBg} ${meta.accentText} border ${meta.badgeBorder}`}>
                              {item.badgeText}
                            </span>
                            <span className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                              {item.yearsCount}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-blue-400" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Club Header with Large Crisp Shield */}
                        <div className="flex items-center gap-4 sm:gap-5 mb-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/70 border border-white/15 p-2 sm:p-2.5 shrink-0 shadow-xl group-hover:border-white/30 transition-all flex items-center justify-center">
                            <img
                              src={meta.shield}
                              alt={item.club}
                              className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-display uppercase tracking-tight group-hover:text-blue-300 transition-colors leading-tight">
                              {item.club}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mt-1">
                              <span className="text-white font-semibold">{item.role}</span>
                              <span className="text-slate-500">•</span>
                              <span className="flex items-center gap-1 text-slate-400">
                                <MapPin className="w-3 h-3 text-blue-400" />
                                {item.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {item.description}
                        </p>

                      </div>

                    </motion.div>
                  </div>

                  {/* Center Node Dot on Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/40 z-10">
                    <Shield className="w-4 h-4 text-blue-400" />
                  </div>

                  {/* Empty spacer for alternating column grid */}
                  <div className="hidden lg:block w-[47%]" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
