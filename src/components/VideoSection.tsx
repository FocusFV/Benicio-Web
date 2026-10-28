import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Compass, Shield, Wind, Sparkles, Filter, ChevronRight, Video, Volume2, VolumeX, Maximize2, RotateCcw, AlertCircle } from 'lucide-react';
import { PLAYER_DATA, type PlayAction } from '../data/playerData';

type CategoryFilter = 'todos' | 'distribucion' | 'cobertura' | 'aereo' | 'anticipo';

export const VideoSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('todos');
  const [activeActionId, setActiveActionId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(12);
  const [duration, setDuration] = useState<number>(376);
  const [hasError, setHasError] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

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

  // Jump video to action second and play
  const handleSelectAction = async (action: PlayAction) => {
    setActiveActionId(action.id);
    const video = videoRef.current;
    if (video) {
      video.currentTime = action.seconds;
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        // Autoplay policy fallback: mute and play
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
          setIsPlaying(true);
        } catch (e) {
          console.error("No se pudo iniciar reproducción:", e);
        }
      }
    }

    // On mobile devices, smoothly scroll to video player
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && videoContainerRef.current) {
      videoContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) {
      video.pause();
      setIsPlaying(false);
    } else {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        // Autoplay policy fallback: mute and play
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
          setIsPlaying(true);
        } catch (err) {
          console.error("Error al reproducir:", err);
        }
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const cur = video.currentTime;
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

  const handleSeek = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const targetTime = pos * duration;
    video.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {});
      } else if ((video as unknown as { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen) {
        // iOS Safari full screen fallback
        (video as unknown as { webkitEnterFullscreen: () => void }).webkitEnterFullscreen();
      }
    }
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Activity timer to fade controls during playback
  const handleUserActivity = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3500);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="video" className="py-20 sm:py-28 bg-[#070b16] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Análisis de Video Minuto a Minuto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display tracking-tight">
              Jugadas Destacadas en Partido
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mt-2 font-normal leading-relaxed">
              Selección de 29 acciones reales de partido organizadas cronológicamente y por categoría táctica.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-blue-300 bg-blue-950/40 border border-blue-500/20 px-3 py-1.5 rounded-lg self-start lg:self-auto">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>29 Acciones Sincronizadas • HD 1080p</span>
          </div>
        </div>

        {/* Categories Filter Tabs (Smooth horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 border border-blue-400/50'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/10 hover:border-blue-400/30'
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Player Display (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div
              ref={videoContainerRef}
              onMouseMove={handleUserActivity}
              onTouchStart={handleUserActivity}
              className="relative aspect-video rounded-2xl bg-black border border-blue-500/30 overflow-hidden shadow-2xl flex flex-col justify-between group select-none"
            >
              
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src="/benicio.mp4"
                poster="/video_poster.jpg"
                preload="metadata"
                playsInline
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    setDuration(videoRef.current.duration || 376);
                    setHasError(false);
                  }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onError={() => setHasError(true)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Error fallback state if file cannot be loaded */}
              {hasError && (
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-6 text-center z-30">
                  <AlertCircle className="w-12 h-12 text-blue-400 mb-3" />
                  <h4 className="text-white font-bold text-base mb-1">Cargando video de jugadas...</h4>
                  <p className="text-slate-400 text-xs max-w-sm mb-4">
                    Optimizando la conexión con el servidor. Si tarda en reproducir, presione reintentar.
                  </p>
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.load();
                        setHasError(false);
                      }
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer shadow-lg"
                  >
                    Reintentar Carga
                  </button>
                </div>
              )}

              {/* Top Bar inside Video Player */}
              <div
                className={`absolute top-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between pointer-events-none z-10 transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-2 max-w-[70%]">
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'}`} />
                  <span className="text-[11px] sm:text-xs font-mono text-white uppercase tracking-wider font-semibold truncate drop-shadow">
                    #{currentAction.id}: {currentAction.title}
                  </span>
                </div>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/80 border border-white/20 text-[11px] sm:text-xs font-mono text-white font-bold drop-shadow shrink-0">
                  {formatSeconds(currentTime)} / {formatSeconds(duration)}
                </span>
              </div>

              {/* Play Overlay Button if paused */}
              {!isPlaying && !hasError && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10 transition-opacity"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/60 border-2 border-white/40 cursor-pointer"
                  >
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
                  </motion.div>
                </div>
              )}

              {/* Bottom Custom Player Controls Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col gap-2 z-10 transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                
                {/* Scrubbing timeline bar with large touch hit area */}
                <div
                  onClick={handleSeek}
                  onTouchStart={handleSeek}
                  className="relative w-full py-2 -my-2 cursor-pointer group/bar"
                >
                  <div className="w-full h-1.5 sm:h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 transition-all duration-75"
                      style={{ width: `${Math.min(100, (currentTime / (duration || 376)) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Control buttons row */}
                <div className="flex items-center justify-between text-xs text-slate-200 mt-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                      title={isPlaying ? "Pausar" : "Reproducir"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1.5 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                      title={isMuted ? "Activar sonido" : "Silenciar"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>

                    <span className="font-mono text-white text-[11px] sm:text-xs">
                      {formatSeconds(currentTime)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.currentTime = currentAction.seconds;
                        }
                      }}
                      className="p-1.5 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                      title="Reiniciar jugada actual"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={handleFullscreen}
                      className="p-1.5 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                      title="Pantalla completa"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick helper tip under video */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
              <span>Seleccione cualquier acción en la lista para reproducirla al instante.</span>
              <span className="text-blue-300 font-semibold">{currentAction.timecode}</span>
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
            <div className="flex flex-col gap-2 max-h-[460px] sm:max-h-[520px] overflow-y-auto pr-1">
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
                      transition={{ duration: 0.15 }}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelectAction(action)}
                      className={`group p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 ${
                        isCurrent
                          ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-600/25'
                          : 'bg-slate-900/60 hover:bg-slate-850 border-white/10 hover:border-blue-400/40'
                      }`}
                    >
                      {/* Time badge */}
                      <div
                        className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold shrink-0 transition-colors ${
                          isCurrent
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
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
