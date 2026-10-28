import { motion } from 'framer-motion';
import { Compass, Calendar, MapPin, Award } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

// High-definition transparent club shields
import escudoNewells from '../assets/escudo_newells.png';
import escudoAdiur from '../assets/escudo_adiur.png';
import escudoBelgrano from '../assets/escudo_belgrano.png';

export const TrajectoryTimeline = () => {
  const getClubShield = (clubName: string) => {
    if (clubName.includes("Newell")) return escudoNewells;
    if (clubName.includes("Belgrano")) return escudoBelgrano;
    return escudoAdiur;
  };

  const officialClubs = [
    { name: "Newell's Old Boys", shield: escudoNewells, years: "2012 — 2020", role: "Cantera Formativa" },
    { name: "A.D.I.U.R.", shield: escudoAdiur, years: "2020 — 24 / 2025 — Act.", role: "Titular Actual #6" },
    { name: "Belgrano de Córdoba", shield: escudoBelgrano, years: "2024 — 2025", role: "AFA Juvenil" },
  ];

  return (
    <section id="trayectoria" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with high-definition club shields */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Historial Formativo & Competitivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Trayectoria en Clubes
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mt-3 font-normal leading-relaxed">
              Evolución progresiva desde canteras formativas de primer nivel (Newell's), desarrollo en ADIUR, una temporada de alta exigencia en AFA con Belgrano y retorno como titular de zaga.
            </p>
          </div>

          {/* High-definition club shields showcases */}
          <div className="flex items-center gap-4 sm:gap-6 bg-slate-950/90 p-3 sm:p-4 rounded-2xl border border-blue-500/30 shadow-xl shrink-0">
            {officialClubs.map((c) => (
              <motion.div
                key={c.name}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
                title={`${c.name} (${c.years})`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/70 border border-white/10 flex items-center justify-center p-1.5 shadow-md group-hover:border-blue-400/60 transition-colors">
                  <img
                    src={c.shield}
                    alt={c.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] group-hover:brightness-110 transition-all"
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-blue-300 transition-colors text-center truncate max-w-[80px]">
                  {c.name.split(' ')[0]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Cards with official shields */}
        <div className="relative">
          {/* Vertical line behind */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-blue-700 to-white -translate-x-1/2 opacity-40" />

          <div className="space-y-8 lg:space-y-12">
            {PLAYER_DATA.trajectory.map((item, index) => {
              const isEven = index % 2 === 0;
              const shield = getClubShield(item.club);

              return (
                <motion.div
                  key={`${item.club}-${item.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full lg:w-[46%]">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-7 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-xl group"
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-600/20 text-blue-300 border border-blue-500/30">
                            {item.badgeText}
                          </span>
                          <span className="text-[11px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded">
                            {item.yearsCount}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Club Header with Shield */}
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center p-1.5 shrink-0 shadow-inner group-hover:border-blue-400/40 transition-colors">
                          <img
                            src={shield}
                            alt={item.club}
                            className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide group-hover:text-blue-300 transition-colors leading-tight">
                            {item.club}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
                            <span className="text-white font-medium">{item.role}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-slate-400">
                              <MapPin className="w-3 h-3 text-blue-400" />
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                        {item.description}
                      </p>

                    </motion.div>
                  </div>

                  {/* Center Node Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                    <Award className="w-4 h-4 text-blue-400" />
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden lg:block w-[46%]" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
