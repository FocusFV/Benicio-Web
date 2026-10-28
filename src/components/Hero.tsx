import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Download, Zap, RotateCw } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

import benicioAction from '../assets/benicio_action_orange.png';
import benicioBack from '../assets/benicio_back_dorsal6.png';
import escudoAdiur from '../assets/escudo_adiur.png';

interface HeroProps {
  onOpenDossier: () => void;
}

export const Hero = ({ onOpenDossier }: HeroProps) => {
  const [photoMode, setPhotoMode] = useState<'action' | 'back'>('action');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Dynamic ambient lights in Blue & White */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-blue-900/15 to-transparent blur-3xl pointer-events-none rounded-full"
      />
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
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-xs text-blue-200 font-mono tracking-wider mb-6 backdrop-blur-sm shadow-inner"
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

            {/* Badges row - Altura y peso aquí una sola vez */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm"
            >
              <span className="px-3.5 py-1.5 rounded-md bg-blue-600 text-white font-bold tracking-wide uppercase shadow-md shadow-blue-600/30">
                {PLAYER_DATA.personal.primaryPosition}
              </span>
              <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white font-semibold tracking-wide">
                Zurdo (Ambidiestro)
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 border border-white/10 text-slate-200 font-mono font-medium">
                18 Años (20/02/2008)
              </span>
              <span className="px-3 py-1.5 rounded-md bg-blue-950/90 border border-blue-400/40 text-blue-200 font-mono font-bold shadow-sm">
                1.88 m • 88 kg
              </span>
            </motion.div>

            {/* Bio description - Sin repetir altura y peso entre paréntesis */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Marcador central zurdo de porte imponente, salida estructurada desde el fondo, pase vertical rompiendo líneas y velocidad punta de 33 km/h. Formación base en Newell's Old Boys (8 años), paso formativo en AFA Juvenil con Belgrano de Córdoba y titular en A.D.I.U.R.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#video"
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-blue-500 transition-all duration-200 shadow-xl shadow-blue-600/35 cursor-pointer border border-blue-400/30"
              >
                <Play className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
                <span>Ver Jugadas en Video (00:12 — 06:16)</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenDossier}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer shadow-lg hover:border-blue-400/40"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Descargar Ficha PDF</span>
              </motion.button>
            </motion.div>

          </div>

          {/* Right Column: Real Action Photo Showcase with smooth float animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Animated floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0a1122] to-black border border-blue-500/40 p-4 sm:p-5 shadow-2xl backdrop-blur-md overflow-hidden group shadow-blue-900/20"
            >
              
              {/* Top Bar with Perspective Toggle */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <img src={escudoAdiur} alt="ADIUR" className="w-5 h-5 object-contain filter drop-shadow" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
                    A.D.I.U.R. • ZAGA CENTRAL
                  </span>
                </div>
                
                {/* Switch perspective button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPhotoMode(photoMode === 'action' ? 'back' : 'action')}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/90 hover:bg-blue-900 border border-blue-400/40 text-[11px] font-mono text-white transition-colors cursor-pointer shadow-sm"
                  title="Cambiar toma"
                >
                  <RotateCw className="w-3 h-3 text-blue-300" />
                  <span>{photoMode === 'action' ? 'Ver Dorsal #6' : 'Ver Acción'}</span>
                </motion.button>
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
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
                  />
                </AnimatePresence>

                {/* Floating GPS badge (100% en español: "Vel. Máxima") */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-blue-400/40 text-[11px] font-mono text-white shadow-xl flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span>33.0 km/h Vel. Máxima</span>
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

              {/* Bottom Caption - Sin repetir altura y peso */}
              <div className="pt-4 px-2 flex items-center justify-between text-xs text-slate-300 font-mono">
                <span>{photoMode === 'action' ? 'Salida con pelota dominada' : 'Pase vertical con pierna zurda'}</span>
                <span className="text-blue-200 font-bold bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-500/30 flex items-center gap-1.5 shadow-sm">
                  <img src={escudoAdiur} alt="ADIUR" className="w-3.5 h-3.5 object-contain" />
                  <span>A.D.I.U.R.</span>
                </span>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
