import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Shield, Wind, Sparkles } from 'lucide-react';

export const TacticalPillars = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tacticalAreas = [
    {
      title: "Salida Limpia & Construcción",
      role: "Distribución desde el fondo",
      icon: Compass,
      level: 92,
      points: [
        "Pase vertical rompiendo 1ra y 2da línea de presión rival.",
        "Cambios de frente de más de 40 metros con pie zurdo.",
        "Manejo de amagues para zafar de la presión del 9 y descargar limpio.",
        "Lanzamientos frontales milimétricos al espacio para extremos y delanteros."
      ]
    },
    {
      title: "Dominio Aéreo Bivalente (1.88 m)",
      role: "Impacto en ambas áreas",
      icon: Sparkles,
      level: 90,
      points: [
        "Gana duelos por elevación en mitad de cancha orientando el despeje.",
        "Peligro constante de gol en tiros de esquina y faltas laterales.",
        "Despejes limpios en centros laterales al área chica.",
        "Envergadura corporal de 86 kg para trabar por arriba sin conceder faltas."
      ]
    },
    {
      title: "Velocidad de Cobertura (33 km/h)",
      role: "Defensa en bloque alto",
      icon: Wind,
      level: 89,
      points: [
        "Habilidad para defender con la línea adelantada lejos de su propio arco.",
        "Cierres en sprint cruzado a espaldas de los laterales zurdo y derecho.",
        "Recuperación ante delanteros punzantes en duelos mano a mano.",
        "Promedio de 23 sprints de alta intensidad sostenidos por encuentro."
      ]
    },
    {
      title: "Lectura & Duelos 1v1 al Piso",
      role: "Solidez y contención",
      icon: Shield,
      level: 91,
      points: [
        "Temporización ante el atacante sin regalar espacios ni apresurarse.",
        "Barridas a ras de piso limpias extirpando el balón de costado.",
        "Uso del cuerpo para ganar la cuerda lateral sin cometer infracción.",
        "Registro de disciplina ejemplar: 1 sola amarilla en 1040 minutos."
      ]
    }
  ];

  return (
    <section id="tactica" className="py-24 bg-[#08090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              Evaluación Táctica & Perfil Deportivo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Pilares de Rendimiento en Cancha
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Análisis de fundamentos tácticos demostrados en video y situaciones de partido de alta exigencia competitiva.
          </p>
        </div>

        {/* Tactical Grid & Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tactical Field Visualizer (Left 5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-950/80 border border-white/10 p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Zona de Influencia Táctica
              </span>
              <span className="text-xs font-mono text-[#45f3ff] bg-[#45f3ff]/10 px-2.5 py-1 rounded">
                Doble Perfil Zaguero
              </span>
            </div>

            {/* Simulated Pitch Graphic */}
            <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-emerald-950/40 via-zinc-900 to-zinc-950 rounded-xl border border-emerald-500/20 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Pitch markings */}
              <div className="absolute inset-x-8 top-0 h-24 border-b border-x border-white/15 rounded-b-xl pointer-events-none" />
              <div className="absolute inset-x-16 top-0 h-10 border-b border-x border-white/15 rounded-b-lg pointer-events-none" />
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/15 pointer-events-none" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/15 pointer-events-none" />
              <div className="absolute inset-x-8 bottom-0 h-24 border-t border-x border-white/15 rounded-t-xl pointer-events-none" />
              <div className="absolute inset-x-16 bottom-0 h-10 border-t border-x border-white/15 rounded-t-lg pointer-events-none" />

              {/* Heatmap overlay (Defensive 3rd & Midfield coverage) */}
              <div className="absolute inset-x-10 bottom-6 h-48 bg-gradient-to-t from-emerald-500/20 via-[#45f3ff]/15 to-transparent rounded-full blur-xl pointer-events-none" />

              {/* Opposition goal label */}
              <div className="text-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-1">
                Campo Contrario (Ataque aéreo en pelota parada)
              </div>

              {/* Interactive Player Positions */}
              <div className="relative h-full flex flex-col justify-end pb-8">
                
                {/* Secondary: Central Derecho */}
                <div className="absolute left-2/3 bottom-16 -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-xs font-bold text-zinc-300 shadow-md">
                    #6
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 mt-1 whitespace-nowrap bg-black/70 px-1.5 py-0.5 rounded">
                    Central Derecho
                  </span>
                </div>

                {/* Primary Position: Central Zurdo (Main) */}
                <div className="absolute left-1/3 bottom-16 -translate-x-1/2 flex flex-col items-center group cursor-pointer z-10">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-[#45f3ff]/40 rounded-full blur-sm animate-pulse" />
                    <div className="relative w-11 h-11 rounded-full bg-[#45f3ff] text-black border-2 border-white flex items-center justify-center text-sm font-black shadow-xl">
                      #6
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#45f3ff] mt-1.5 whitespace-nowrap bg-black/90 px-2 py-0.5 rounded border border-[#45f3ff]/30">
                    Posición Principal (Zurdo)
                  </span>
                </div>

                {/* Anticipation / Defensive Midfield coverage */}
                <div className="absolute left-1/2 bottom-36 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                  <div className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg">
                    <span>Zona de Anticipo Aéreo (8.08 km recorrido)</span>
                  </div>
                </div>

              </div>

              {/* Own Goal label */}
              <div className="text-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest pb-1 border-t border-white/10 pt-2">
                Arco Propio • Salida Estructurada
              </div>
            </div>

            {/* Technical note below pitch */}
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-400 flex items-center justify-between">
              <span>Manejo de ambos perfiles</span>
              <span className="text-white font-medium font-mono">Diestro en pase • Zurdo en marca</span>
            </div>
          </div>

          {/* Pillars List (Right 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {tacticalAreas.map((area, idx) => {
              const Icon = area.icon;
              const isSelected = activeTab === idx;
              return (
                <motion.div
                  key={area.title}
                  onClick={() => setActiveTab(idx)}
                  className={`rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-900 border-[#45f3ff]/40 shadow-xl shadow-[#45f3ff]/5'
                      : 'bg-zinc-900/40 hover:bg-zinc-900/70 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#45f3ff] text-black'
                            : 'bg-zinc-800 text-zinc-400 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {area.title}
                        </h3>
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          {area.role}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold font-mono text-zinc-300">
                        {area.level}%
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'rotate-45 text-[#45f3ff]' : 'text-zinc-600'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-5 pt-4 border-t border-white/10"
                    >
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {area.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#45f3ff] mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
