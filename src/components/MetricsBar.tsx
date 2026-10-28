import { motion } from 'framer-motion';
import { Gauge, Activity, Clock, ShieldCheck, Flame, Award } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

const iconMap = [
  Gauge,
  Award,
  Clock,
  Activity,
  Flame,
  ShieldCheck
];

export const MetricsBar = () => {
  return (
    <section id="metricas" className="py-20 bg-[#070b16] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>Rendimiento Físico & Monitoreo GPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Métricas Oficiales de Partido
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md mt-3 md:mt-0 font-normal">
            Parámetros registrados en competencia oficial durante la temporada. Valores de alta intensidad correspondientes a zaga central de primera categoría.
          </p>
        </div>

        {/* Metrics Grid with richer hover animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PLAYER_DATA.metrics.map((metric, idx) => {
            const Icon = iconMap[idx] || Activity;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-xl p-5 border transition-all duration-300 group ${
                  metric.highlight
                    ? 'bg-gradient-to-b from-blue-950/70 via-slate-900 to-slate-950 border-blue-500/50 shadow-lg shadow-blue-600/15'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-white/10 hover:border-blue-400/40 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">
                    {metric.label}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-blue-950/50 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:border-white transition-all">
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        metric.highlight ? 'text-blue-400' : 'text-slate-400'
                      } group-hover:text-white transition-colors`}
                    />
                  </div>
                </div>

                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight group-hover:text-blue-200 transition-colors">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="text-xs font-mono font-medium text-blue-300">
                      {metric.unit}
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-slate-300 font-sans mt-2 leading-tight">
                  {metric.subtitle}
                </p>

                {/* Subtle bottom indicator */}
                <div
                  className={`mt-4 h-0.5 w-full rounded-full ${
                    metric.highlight ? 'bg-blue-500' : 'bg-white/10 group-hover:bg-blue-400/60'
                  } transition-colors`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Tactical note badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 rounded-lg bg-blue-950/40 border border-blue-500/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300 font-mono shadow-inner"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-white font-medium">Muestreo: 12 Partidos Oficiales • 1040 Minutos de Competición</span>
          </div>
          <span className="text-blue-200 font-semibold">
            Pico de 33.0 km/h: En el 5% superior de velocidad para centrales de 1.88 m
          </span>
        </motion.div>

      </div>
    </section>
  );
};
