import { motion } from 'framer-motion';
import { Compass, Calendar, MapPin, Award } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';
import badgesImg from '../assets/club_badges_real.png';

export const TrajectoryTimeline = () => {
  return (
    <section id="trayectoria" className="py-24 bg-[#08090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#45f3ff] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Historial Formativo & Competitivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Trayectoria en Clubes
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Evolución progresiva desde canteras formativas de primer nivel (Newell's), desarrollo en ADIUR, una temporada de alta exigencia en AFA con Belgrano y retorno titular.
          </p>
        </div>

        {/* Real Club Badges Strip from the Video */}
        <div className="mb-14 p-5 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                Instituciones Oficiales
              </span>
              <span className="text-sm font-bold text-white">
                Newell's Old Boys • A.D.I.U.R. • Belgrano de Córdoba
              </span>
            </div>
          </div>
          <div className="bg-black/60 p-2.5 rounded-xl border border-white/10 flex items-center justify-center">
            <img
              src={badgesImg}
              alt="Escudos de clubes: Newell's, ADIUR, Belgrano de Córdoba"
              className="h-10 sm:h-12 w-auto object-contain filter brightness-105"
            />
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="relative">
          {/* Vertical line behind */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#45f3ff] via-zinc-700 to-emerald-400 -translate-x-1/2 opacity-30" />

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
                  {/* Content Box (takes half width on desktop) */}
                  <div className="w-full lg:w-[46%]">
                    <div className="p-7 rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#45f3ff]/10 text-[#45f3ff] border border-[#45f3ff]/20">
                            {item.badgeText}
                          </span>
                          <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                            {item.yearsCount}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Club Name */}
                      <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide group-hover:text-[#45f3ff] transition-colors">
                        {item.club}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-zinc-400 my-2">
                        <span className="text-zinc-200 font-medium">{item.role}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-3">
                        {item.description}
                      </p>

                    </div>
                  </div>

                  {/* Center Node Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-950 border-2 border-[#45f3ff] items-center justify-center shadow-lg shadow-[#45f3ff]/20 z-10">
                    <Award className="w-4 h-4 text-[#45f3ff]" />
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
