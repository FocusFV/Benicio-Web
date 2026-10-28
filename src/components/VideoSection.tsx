import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Compass, Shield, Wind, Sparkles, Filter, ChevronRight, Video, Maximize2 } from 'lucide-react';
import { PLAYER_DATA, type PlayAction } from '../data/playerData';

type CategoryFilter = 'todos' | 'distribucion' | 'cobertura' | 'aereo' | 'anticipo';

export const VideoSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('todos');
  const [activeActionId, setActiveActionId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [youtubeId, setYoutubeId] = useState<string>('');
  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);

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

  const handleSelectAction = (action: PlayAction) => {
    setActiveActionId(action.id);
    setIsPlaying(true);
  };

  return (
    <section id="video" className="py-24 bg-[#070b16] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Desglose de Video Minuto a Minuto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Highlights de Rendimiento en Partido
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 flex items-center gap-3">
            <button
              onClick={() => setShowUrlInput(!showUrlInput)}
              className="text-xs font-mono text-blue-300 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              {youtubeId ? 'Cambiar video de YouTube' : '+ Vincular video de YouTube'}
            </button>
          </div>
        </div>

        {/* Optional YouTube Input Bar */}
        {showUrlInput && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center gap-3"
          >
            <span className="text-xs text-slate-200 font-mono">ID o URL de YouTube:</span>
            <input
              type="text"
              placeholder="Ej: dQw4w9WgXcQ o https://youtu.be/..."
              value={youtubeId}
              onChange={(e) => {
                const val = e.target.value;
                const match = val.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
                setYoutubeId(match ? match[1] : val);
              }}
              className="flex-1 w-full sm:w-auto px-3.5 py-2 rounded-lg bg-black border border-white/20 text-white text-xs font-mono focus:outline-none focus:border-blue-400"
            />
            <button
              onClick={() => setShowUrlInput(false)}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs cursor-pointer shadow-md shadow-blue-600/30"
            >
              Aplicar
            </button>
          </motion.div>
        )}

        {/* Categories Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
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
              </button>
            );
          })}
        </div>

        {/* Video Player + Action List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Player Display (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="relative aspect-video rounded-2xl bg-black border border-blue-500/30 overflow-hidden shadow-2xl flex flex-col justify-between">
              
              {youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?start=${currentAction.seconds}&autoplay=${isPlaying ? 1 : 0}&rel=0`}
                  title="Benicio Ocaña Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-t from-black via-slate-950 to-blue-950/40 overflow-hidden">
                  
                  {/* Background grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar inside Video Player */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
                      <span className="text-xs font-mono text-slate-200 uppercase tracking-widest">
                        SCOUTING ANALYTICS • ACCIÓN #{currentAction.id}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-black/70 border border-blue-400/30 text-xs font-mono text-white font-bold">
                      {currentAction.timecode} / 06:16
                    </span>
                  </div>

                  {/* Center Play Button & Active Action Announcement */}
                  <div className="relative z-10 my-auto text-center flex flex-col items-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="group relative w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 hover:bg-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer mb-4"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-white" />
                      ) : (
                        <Play className="w-6 h-6 fill-white ml-1" />
                      )}
                    </button>
                    <div className="inline-block px-3 py-1 rounded-md bg-black/80 border border-blue-500/40 text-xs font-mono text-blue-300 mb-1.5 font-semibold">
                      {currentAction.tag}
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-display max-w-lg">
                      {currentAction.title}
                    </h4>
                  </div>

                  {/* Bottom Player Controls */}
                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-white font-bold">{currentAction.timecode}</span>
                      <span>•</span>
                      <span className="truncate max-w-[280px] sm:max-w-md">{currentAction.description}</span>
                    </div>
                    <button className="p-1 hover:text-white" title="Pantalla completa">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Scrubbing timeline bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-300 transition-all duration-300"
                      style={{ width: `${(currentAction.seconds / 376) * 100}%` }}
                    />
                  </div>

                </div>
              )}

            </div>

            {/* Current Action Detail Card */}
            <div className="rounded-xl bg-slate-900/80 border border-blue-500/30 p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-300 uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Análisis Técnico de la Jugada
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Timecode: {currentAction.timecode}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {currentAction.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentAction.description}
              </p>
            </div>

          </div>

          {/* Action Timestamps List (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Línea de Tiempo ({filteredActions.length} Jugadas)
              </span>
              <span className="text-xs text-blue-300 font-mono">
                Click para ir al minuto
              </span>
            </div>

            {/* Scrollable list of actions */}
            <div className="flex flex-col gap-2 max-h-[560px] overflow-y-auto pr-1">
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
                      onClick={() => handleSelectAction(action)}
                      className={`group p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                        isCurrent
                          ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-600/15'
                          : 'bg-slate-900/50 hover:bg-slate-850 border-white/10 hover:border-blue-400/30'
                      }`}
                    >
                      {/* Timecode badge */}
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
