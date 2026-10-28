import { motion } from 'framer-motion';
import { Play, Shield, Compass, Zap, Download } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

interface HeroProps {
  onOpenDossier: () => void;
}

export const Hero = ({ onOpenDossier }: HeroProps) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#45f3ff]/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content (Left 8 cols) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Scouting badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 font-mono tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#45f3ff] animate-pulse"></span>
              <span>INFORME DE SCOUTING & SEGUIMIENTO • TEMPORADA 2024/25</span>
            </motion.div>

            {/* Player Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="w-full"
            >
              <div className="text-zinc-400 font-mono text-sm tracking-widest uppercase mb-1">
                {PLAYER_DATA.personal.currentClub} • {PLAYER_DATA.personal.originCity}
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.9] font-display">
                BENICIO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                  OCAÑA ZAHLER
                </span>
              </h1>
            </motion.div>

            {/* Position and physical tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap items-center gap-3 text-sm"
            >
              <span className="px-3 py-1.5 rounded bg-zinc-900 border border-white/15 text-white font-semibold tracking-wide uppercase">
                {PLAYER_DATA.personal.primaryPosition}
              </span>
              <span className="px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-medium tracking-wide">
                Zurdo (Ambidiestro)
              </span>
              <span className="px-3 py-1.5 rounded bg-zinc-900/80 border border-white/10 text-zinc-300 font-mono">
                18 Años (2006)
              </span>
              <span className="px-3 py-1.5 rounded bg-zinc-900/80 border border-white/10 text-zinc-300 font-mono">
                1.88 m • 86 kg
              </span>
            </motion.div>

            {/* Brief description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed"
            >
              Zaguero central de perfil zurdo con porte físico de élite, solvencia en salida desde el fondo, pase vertical rompiendo líneas y gran alcance de cobertura (33 km/h). 9 años de base formativa en las juveniles de Newell's Old Boys y paso por Belgrano de Córdoba.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#video"
                className="group flex items-center gap-3 px-6 py-3.5 rounded-lg bg-[#45f3ff] text-black font-bold text-sm tracking-wide uppercase hover:bg-[#32d8e4] transition-all duration-200 shadow-xl shadow-[#45f3ff]/15 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black transition-transform group-hover:scale-110" />
                <span>Ver 30 Jugadas Analizadas</span>
              </a>

              <button
                onClick={onOpenDossier}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-200 font-medium text-sm tracking-wide transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#45f3ff]" />
                <span>Descargar Ficha Deportiva</span>
              </button>
            </motion.div>

          </div>

          {/* Player Identity Card / Right Column (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
              
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-[#45f3ff] to-blue-500" />
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#45f3ff]" />
                  <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">Dorsal & Posición</span>
                </div>
                <span className="text-4xl font-black text-white/30 font-display">#06</span>
              </div>

              {/* Main Attributes Preview */}
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Estatura</span>
                  <span className="text-base font-bold text-white font-mono">{PLAYER_DATA.personal.height}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Peso de Competencia</span>
                  <span className="text-base font-bold text-white font-mono">{PLAYER_DATA.personal.weight}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Pierna Hábil</span>
                  <span className="text-base font-semibold text-emerald-400">Zurda (Ambidiestro)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Velocidad Máxima GPS</span>
                  <span className="text-base font-bold text-[#45f3ff] font-mono">33.0 km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Minutos Jugados</span>
                  <span className="text-base font-bold text-white font-mono">1,040 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Tarjetas (12 partidos)</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-200">
                    1 Amarilla • 0 Rojas
                  </span>
                </div>
              </div>

              {/* Trajectory pills preview */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Historial de Clubes</span>
                </div>
                <div className="flex flex-col gap-1.5 text-xs">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="font-medium">Newell's Old Boys</span>
                    <span className="text-zinc-500 font-mono text-[11px]">2012 — 2021</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="font-medium">C.A. Belgrano</span>
                    <span className="text-zinc-500 font-mono text-[11px]">2021 — 2023</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-200">
                    <span className="font-medium text-[#45f3ff]">A.D.I.U.R.</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Actualidad</span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  96.3% Titular
                </span>
                <span>Zaga Central</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
