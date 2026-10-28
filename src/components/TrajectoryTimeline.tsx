import { motion } from 'framer-motion';
import { Compass, Calendar, MapPin, Award } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';
import badgesImg from '../assets/club_badges_real.png';

export const TrajectoryTimeline = () => {
  return (
    <section id="trayectoria" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with official badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Historial Formativo & Competitivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Trayectoria en Clubes
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mt-3 font-normal">
              Evolución progresiva desde canteras formativas de primer nivel (Newell's), desarrollo en ADIUR, una temporada de alta exigencia en AFA con Belgrano y retorno titular.
            </p>
          </div>

          {/* Clean club badges container */}
          <div className="bg-black/60 p-3 rounded-xl border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
            <img
              src={badgesImg}
              alt="Escudos de clubes: Newell's, ADIUR, Belgrano de Córdoba"
              className="h-10 sm:h-11 w-auto object-contain filter brightness-105"
            />
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="relative">
          {/* Vertical line behind */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-blue-700 to-white -translate-x-1/2 opacity-40" />

          <div className="space-y-8 lg:space-y-12">
            {PLAYER_DATA.trajectory.map((item, index) => {
              const isEven = index % 2 === 0;
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
                    <div className="p-7 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
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

                      {/* Club Name */}
                      <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide group-hover:text-blue-300 transition-colors">
                        {item.club}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-slate-300 my-2">
                        <span className="text-white font-medium">{item.role}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-400" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                        {item.description}
                      </p>

                    </div>
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
