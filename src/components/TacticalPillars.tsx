import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Shield, Wind, Sparkles } from 'lucide-react';
import tacticalPitchImg from '../assets/tactical_pitch_real.png';

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
        "Manejo de amagues para zafar de la presión del delantero rival y descargar limpio.",
        "Lanzamientos frontales milimétricos al espacio para extremos y delanteros."
      ]
    },
    {
      title: "Dominio Aéreo Bivalente (1.88 m)",
      role: "Impacto en ambas áreas",
      icon: Sparkles,
      level: 91,
      points: [
        "Gana duelos por elevación en mitad de cancha orientando el despeje.",
        "Peligro constante de gol en tiros de esquina y faltas laterales.",
        "Despejes limpios en centros laterales al área chica.",
        "Envergadura corporal de 88 kg para trabar por arriba sin conceder faltas."
      ]
    },
    {
      title: "Velocidad de Cobertura (33 km/h)",
      role: "Defensa en bloque alto",
      icon: Wind,
      level: 90,
      points: [
        "Habilidad para defender con la línea adelantada lejos de su propio arco.",
        "Cierres en sprint cruzado a espaldas de los laterales zurdo y derecho.",
        "Recuperación ante atacantes rápidos en duelos mano a mano.",
        "Promedio de 23 sprints de alta intensidad sostenidos por encuentro."
      ]
    },
    {
      title: "Lectura & Duelos 1v1 al Piso",
      role: "Solidez y contención",
      icon: Shield,
      level: 89,
      points: [
        "Temporización ante el atacante sin regalar espacios ni apresurarse.",
        "Barridas a ras de piso limpias extirpando el balón de costado.",
        "Uso del cuerpo para ganar la cuerda lateral sin cometer infracción.",
        "Registro de disciplina ejemplar: 1 sola amarilla en 1040 minutos."
      ]
    }
  ];

  return (
    <section id="tactica" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 block">
              Evaluación Táctica & Perfil Deportivo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Pilares de Rendimiento en Cancha
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Análisis de fundamentos tácticos demostrados en video y situaciones de partido de alta exigencia competitiva.
          </p>
        </div>

        {/* Tactical Grid & Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Official Tactical Field Graphic (Left 5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-950/90 border border-blue-500/30 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Ubicación Táctica Oficial
              </span>
              <span className="text-xs font-mono text-white bg-blue-600 px-2.5 py-1 rounded font-semibold">
                Doble Perfil en Zaga
              </span>
            </div>

            {/* Official Pitch Visualizer Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-square bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-3 shadow-inner">
              <img
                src={tacticalPitchImg}
                alt="Esquema táctico marcador central zaga doble perfil"
                className="w-full h-full object-contain filter contrast-125"
              />
              <div className="absolute bottom-2 left-3 right-3 py-1 px-2.5 rounded bg-black/85 backdrop-blur-sm border border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Camisetas rojas: Posición en zaga central
                </span>
                <span className="text-blue-300 font-bold">Zurdo / Diestro</span>
              </div>
            </div>

            {/* Technical explanation below pitch */}
            <div className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-300 leading-relaxed space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>Posición Primaria:</span>
                <span className="text-white font-bold">Segundo Central (Zurdo)</span>
              </div>
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>Posición Secundaria:</span>
                <span className="text-white font-bold">Primer Central (Derecho)</span>
              </div>
              <p className="text-[11px] text-slate-300 pt-1">
                La capacidad de golpear y orientar el juego con ambas piernas le permite desempeñarse con solvencia en cualquier puesto de la zaga central.
              </p>
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
                      ? 'bg-slate-900 border-blue-500/50 shadow-xl shadow-blue-600/10'
                      : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10 hover:border-blue-400/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                            : 'bg-slate-800 text-slate-300 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {area.title}
                        </h3>
                        <span className="text-xs font-mono text-blue-300 uppercase tracking-wider">
                          {area.role}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold font-mono text-white">
                        {area.level}%
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'rotate-45 text-blue-400' : 'text-slate-500'
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
                            className="text-xs text-slate-200 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
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
