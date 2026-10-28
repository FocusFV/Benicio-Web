import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Download, Zap, RotateCw } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

import benicioAction from '../assets/benicio_action_orange.png';
import benicioBack from '../assets/benicio_back_dorsal6.png';

interface HeroProps {
  onOpenDossier: () => void;
}

export const Hero = ({ onOpenDossier }: HeroProps) => {
  const [photoMode, setPhotoMode] = useState<'action' | 'back'>('action');

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Dynamic ambient lights in Blue & White */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-blue-900/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-16 right-10 w-96 h-96 bg-blue-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Content (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Scouting badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs text-blue-200 font-mono tracking-wider mb-6 backdrop-blur-sm shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>INFORME DE SCOUTING & SEGUIMIENTO • 2025/2026</span>
            </motion.div>

            {/* Player Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="w-full"
            >
              <div className="text-blue-300 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1.5 flex items-center gap-2">
                <span>{PLAYER_DATA.personal.currentClub}</span>
                <span>•</span>
                <span>{PLAYER_DATA.personal.originCity}</span>
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88] font-display">
                BENICIO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  OCAÑA ZAHLER
                </span>
              </h1>
            </motion.div>

            {/* Badges row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm"
            >
              <span className="px-3.5 py-1.5 rounded-md bg-blue-600 text-white font-bold tracking-wide uppercase shadow-md shadow-blue-600/20">
                {PLAYER_DATA.personal.primaryPosition}
              </span>
              <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white font-semibold tracking-wide">
                Zurdo (Ambidiestro)
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 border border-white/10 text-slate-200 font-mono font-medium">
                18 Años (20/02/2008)
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 border border-white/10 text-slate-200 font-mono font-medium">
                1.88 m • 88 kg
              </span>
            </motion.div>

            {/* Bio description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Marcador central zurdo de envergadura imponente (1.88 m / 88 kg), salida estructurada desde el fondo, pase vertical rompiendo líneas y velocidad punta de 33 km/h. Formación base en Newell's Old Boys (8 años), paso formativo en AFA Juvenil con Belgrano de Córdoba y titular en A.D.I.U.R.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#video"
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-blue-500 transition-all duration-200 shadow-xl shadow-blue-600/30 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
                <span>Ver Jugadas en Video (00:12 — 06:16)</span>
              </a>

              <button
                onClick={onOpenDossier}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Descargar Ficha PDF</span>
              </button>
            </motion.div>

            {/* Quick metrics ticker under buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-4"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Velocidad Punta</span>
                <span className="text-2xl font-black text-white font-display">33.0 <span className="text-xs text-blue-300 font-sans">km/h</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Distancia Media</span>
                <span className="text-2xl font-black text-white font-display">8,879 <span className="text-xs text-blue-300 font-sans">m</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Titularidad</span>
                <span className="text-2xl font-black text-blue-400 font-display">96.3%</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Real Action Photo Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Card Frame */}
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0a1122] to-black border border-blue-500/30 p-4 sm:p-5 shadow-2xl backdrop-blur-md overflow-hidden group">
              
              {/* Top Bar with Perspective Toggle */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-200">
                    A.D.I.U.R. • ZAGA CENTRAL
                  </span>
                </div>
                
                {/* Switch perspective button */}
                <button
                  onClick={() => setPhotoMode(photoMode === 'action' ? 'back' : 'action')}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 hover:bg-blue-900 border border-blue-400/30 text-[11px] font-mono text-white transition-colors cursor-pointer"
                  title="Cambiar toma"
                >
                  <RotateCw className="w-3 h-3 text-blue-300" />
                  <span>{photoMode === 'action' ? 'Ver Dorsal #6' : 'Ver Acción'}</span>
                </button>
              </div>

              {/* Photo Container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-slate-950 to-blue-950/30 flex items-center justify-center border border-white/5">
                
                {/* Watermark text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-white/[0.03] font-display pointer-events-none select-none tracking-widest">
                  BENI
                </div>

                {/* Animated real image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={photoMode}
                    src={photoMode === 'action' ? benicioAction : benicioBack}
                    alt="Benicio Ocaña Zahler en acción"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
                  />
                </AnimatePresence>

                {/* Floating GPS badge on top-left of photo */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-blue-400/40 text-[11px] font-mono text-white shadow-xl flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span>33.0 km/h Peak</span>
                </motion.div>

                {/* Floating #6 squad badge */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-blue-600/90 backdrop-blur-md border border-white/40 text-xs font-mono text-white shadow-xl font-bold"
                >
                  Dorsal #6 • Zurdo
                </motion.div>

              </div>

              {/* Bottom Caption */}
              <div className="pt-4 px-2 flex items-center justify-between text-xs text-slate-300 font-mono">
                <span>{photoMode === 'action' ? 'Salida con balón dominado' : 'Impacto y pase vertical con zurda'}</span>
                <span className="text-white font-bold bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/30">1.88 m | 88 kg</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
