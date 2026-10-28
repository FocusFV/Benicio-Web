import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Compass, Shield } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal = ({ isOpen, onClose }: DossierModalProps) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-4xl bg-zinc-950 text-white border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Action Header (No print) */}
          <div className="no-print bg-zinc-900 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#45f3ff]"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Ficha Técnica de Scouting • Documento Oficial
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#45f3ff] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#32d8e4] transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir / Guardar PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Document Sheet */}
          <div className="p-8 sm:p-10 bg-white text-zinc-900 print:p-0">
            
            {/* Document Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-6 border-b-2 border-zinc-900 gap-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                  DOSSIER DE RENDIMIENTO DEPORTIVO • TEMPORADA 2025/2026
                </span>
                <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 font-display mt-1">
                  {PLAYER_DATA.personal.fullName}
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-700 mt-1 uppercase">
                  <span>{PLAYER_DATA.personal.primaryPosition}</span>
                  <span>•</span>
                  <span>{PLAYER_DATA.personal.preferredFoot}</span>
                  <span>•</span>
                  <span>{PLAYER_DATA.personal.height} / {PLAYER_DATA.personal.weight}</span>
                </div>
              </div>
              <div className="text-right sm:text-right font-mono text-xs text-zinc-500">
                <div className="font-bold text-zinc-900 text-sm">CLUB ACTUAL: {PLAYER_DATA.personal.currentClub}</div>
                <div>{PLAYER_DATA.personal.originCity}</div>
                <div>Nacimiento: {PLAYER_DATA.personal.birthDate} (18 años)</div>
              </div>
            </div>

            {/* GPS & Match Performance Row */}
            <div className="my-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
                Parámetros Físicos & Métricas de Partido (12 Encuentros Oficiales)
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center">
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Velocidad Punta</div>
                  <div className="text-xl font-black text-zinc-900 mt-0.5">33.0 <span className="text-xs font-normal">km/h</span></div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Titularidad</div>
                  <div className="text-xl font-black text-zinc-900 mt-0.5">96.3%</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Minutos</div>
                  <div className="text-xl font-black text-zinc-900 mt-0.5">1,040</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Distancia Media</div>
                  <div className="text-xl font-black text-zinc-900 mt-0.5">8,879 <span className="text-xs font-normal">m</span></div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Sprints / P.</div>
                  <div className="text-xl font-black text-zinc-900 mt-0.5">23</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-100 border border-zinc-200">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Tarjetas</div>
                  <div className="text-xl font-black text-emerald-700 mt-0.5">1A / 0R</div>
                </div>
              </div>
            </div>

            {/* Tactical Evaluation Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 text-xs leading-relaxed">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-bold text-zinc-900 uppercase text-xs mb-2 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Aptitudes Técnicas & Salida de Balón</span>
                </h3>
                <ul className="space-y-1.5 text-zinc-700">
                  <li>• Cambio de frente de más de 40 metros con pie zurdo con alta precisión.</li>
                  <li>• Capacidad para romper líneas de presión con pases rasos verticales.</li>
                  <li>• Sangre fría en salida bajo presión: amague y descarga limpia hacia bandas.</li>
                  <li>• Envíos pinchados en profundidad a la espalda de la zaga contraria.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-bold text-zinc-900 uppercase text-xs mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Solidez Defensiva & Duelo Individual</span>
                </h3>
                <ul className="space-y-1.5 text-zinc-700">
                  <li>• Dominio por elevación en mitad de cancha y área propia gracias a su 1.88 m.</li>
                  <li>• Cierres en velocidad (33 km/h) a espaldas de laterales desbordados.</li>
                  <li>• Temporización en mano a mano y barridas al piso con extirpación limpia de balón.</li>
                  <li>• 1 sola tarjeta amarilla en 1040 minutos de alta fricción competitiva.</li>
                </ul>
              </div>
            </div>

            {/* Trajectory Table */}
            <div className="my-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
                Historial Formativo y Trayectoria en Clubes
              </h2>
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-300 font-mono text-zinc-500">
                    <th className="py-1.5">Periodo</th>
                    <th className="py-1.5">Club / Institución</th>
                    <th className="py-1.5">Categoría / Rol</th>
                    <th className="py-1.5 text-right">Ubicación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-800">
                  {PLAYER_DATA.trajectory.map((t) => (
                    <tr key={`${t.club}-${t.period}`}>
                      <td className="py-2 font-mono font-semibold">{t.period}</td>
                      <td className="py-2 font-bold text-zinc-950">{t.club}</td>
                      <td className="py-2">{t.role}</td>
                      <td className="py-2 text-right text-zinc-500">{t.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer with Contact info */}
            <div className="pt-4 border-t-2 border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div>BENICIO OCAÑA ZAHLER • MARCADOR CENTRAL #6</div>
              <div>ROSARIO, SANTA FE • ARGENTINA</div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
