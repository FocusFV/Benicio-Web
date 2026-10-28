import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Compass, Shield, Wind, Sparkles, Filter, ChevronRight, Video, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { PLAYER_DATA, type PlayAction } from '../data/playerData';

type CategoryFilter = 'todos' | 'distribucion' | 'cobertura' | 'aereo' | 'anticipo';

export const VideoSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('todos');
  const [activeActionId, setActiveActionId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(12);
  const [duration, setDuration] = useState<number>(376);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Active action
  const currentAction = useMemo(() => {
    return PLAYER_DATA.videoActions.find((a) => a.id === activeActionId) || PLAYER_DATA.videoActions[0];
  }, [activeActionId]);

  // Filter actions
  const filteredActions = useMemo(() => {
    if (selectedCategory === 'todos') return PLAYER_DATA.videoActions;
    return PLAYER_DATA.videoActions.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { id: 'todos', label: 'Todas las Jugadas', count: PLAYER_DATA.videoActions.length, icon: Filter },
    {
      id: 'distribucion',
      label: 'Salida & Distribución',
      count: PLAYER_DATA.videoActions.filter((a) => a.category === 'distribucion').length,
      icon: Compass
    },
    {
      id: 'cobertura',
      label: 'Coberturas & Quites',
      count: PLAYER_DATA.videoActions.filter((a) => a.category === 'cobertura').length,
      icon: Shield
    },
    {
      id: 'aereo',
      label: 'Juego Aéreo (1.88 m)',
      count: PLAYER_DATA.videoActions.filter((a) => a.category === 'aereo').length,
      icon: Sparkles
    },
    {
      id: 'anticipo',
      label: 'Anticipos & Presión',
      count: PLAYER_DATA.videoActions.filter((a) => a.category === 'anticipo').length,
      icon: Wind
    },
  ];

  // Jump video to action second
  const handleSelectAction = (action: PlayAction) => {
    setActiveActionId(action.id);
    if (videoRef.current) {
      videoRef.current.currentTime = action.seconds;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    setCurrentTime(cur);

    // Sync active action card with video time
    const matchingAction = PLAYER_DATA.videoActions
      .slice()
      .reverse()
      .find((a) => cur >= a.seconds);

    if (matchingAction && matchingAction.id !== activeActionId) {
      setActiveActionId(matchingAction.id);
    }
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="video" className="py-24 bg-[#070b16] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Desglose de Video Minuto a Minuto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Jugadas Destacadas en Partido
            </h2>
          </div>
          <div className="mt-3 lg:mt-0 text-xs font-mono text-slate-400">
            benicio.mp4 • 29 Acciones Sincronizadas
          </div>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 border border-white/10 hover:border-blue-400/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                    isSelected ? 'bg-white/25 text-white font-bold' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Video Player + Action List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Player Display (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative aspect-video rounded-2xl bg-black border border-blue-500/30 overflow-hidden shadow-2xl flex flex-col justify-between group">
              
              {/* HTML5 Real Video Element linked to public/benicio.mp4 */}
              <video
                ref={videoRef}
                src="/benicio.mp4"
                playsInline
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    setDuration(videoRef.current.duration || 376);
                    videoRef.current.currentTime = 12;
                  }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Top Bar inside Video Player */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none z-10">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'}`}></span>
                  <span className="text-xs font-mono text-white uppercase tracking-widest font-semibold drop-shadow">
                    ACCIÓN #{currentAction.id}: {currentAction.title}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-black/75 border border-white/20 text-xs font-mono text-white font-bold drop-shadow">
                  {formatSeconds(currentTime)} / {formatSeconds(duration)}
                </span>
              </div>

              {/* Play Overlay Button if paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10 transition-opacity"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-18 h-18 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/60 border border-white/30"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </motion.div>
                </div>
              )}

              {/* Bottom Custom Player Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2 z-10 transition-opacity duration-200">
                
                {/* Scrubbing timeline bar */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    if (videoRef.current) {
                      videoRef.current.currentTime = pos * duration;
                    }
                  }}
                  className="relative w-full h-2 bg-slate-800 rounded-full cursor-pointer overflow-hidden group/bar"
                >
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-100"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-200">
                  <div className="flex items-center gap-3">
                    <button onClick={togglePlay} className="p-1 hover:text-white cursor-pointer">
                      {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button onClick={toggleMute} className="p-1 hover:text-white cursor-pointer">
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-white text-xs">
                      {formatSeconds(currentTime)} • {currentAction.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (videoRef.current) videoRef.current.currentTime = currentAction.seconds;
                      }}
                      className="p-1 hover:text-white cursor-pointer"
                      title="Reiniciar jugada actual"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          if (document.fullscreenElement) {
                            document.exitFullscreen();
                          } else {
                            videoRef.current.requestFullscreen();
                          }
                        }
                      }}
                      className="p-1 hover:text-white cursor-pointer"
                      title="Pantalla completa"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Action Timestamps List (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Línea de Tiempo ({filteredActions.length} Jugadas)
              </span>
              <span className="text-xs text-blue-300 font-mono">
                Click para saltar al minuto
              </span>
            </div>

            {/* Scrollable list of actions */}
            <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {filteredActions.map((action) => {
                  const isCurrent = action.id === activeActionId;
                  return (
                    <motion.div
                      layout
                      key={action.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ x: 4 }}
                      onClick={() => handleSelectAction(action)}
                      className={`group p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                        isCurrent
                          ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-600/20'
                          : 'bg-slate-900/50 hover:bg-slate-850 border-white/10 hover:border-blue-400/30'
                      }`}
                    >
                      {/* Time badge */}
                      <div
                        className={`px-2.5 py-1 rounded font-mono text-xs font-bold shrink-0 transition-colors ${
                          isCurrent
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 text-slate-300 group-hover:bg-blue-950 group-hover:text-blue-300'
                        }`}
                      >
                        {action.timecode}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4
                            className={`text-xs font-bold truncate transition-colors ${
                              isCurrent ? 'text-white' : 'text-slate-200 group-hover:text-white'
                            }`}
                          >
                            {action.title}
                          </h4>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-500/20 text-blue-300 shrink-0">
                            {action.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {action.description}
                        </p>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 mt-1 transition-transform shrink-0 ${
                          isCurrent
                            ? 'translate-x-0.5 text-blue-400'
                            : 'text-slate-600 group-hover:text-slate-400'
                        }`}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
