import { UserCheck, FileText, CheckCircle2, Shield, Download } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

interface FullProfileDetailsProps {
  onOpenDossier: () => void;
}

export const FullProfileDetails = ({ onOpenDossier }: FullProfileDetailsProps) => {
  const specs = [
    { label: 'Nombre Completo', value: PLAYER_DATA.personal.fullName },
    { label: 'Fecha de Nacimiento', value: `${PLAYER_DATA.personal.birthDate} (${PLAYER_DATA.personal.age} años)` },
    { label: 'Nacionalidad', value: `${PLAYER_DATA.personal.nationality} (Rosario, Santa Fe)` },
    { label: 'Altura & Peso', value: `${PLAYER_DATA.personal.height} • ${PLAYER_DATA.personal.weight}` },
    { label: 'Posición Principal', value: PLAYER_DATA.personal.primaryPosition },
    { label: 'Posición Secundaria', value: PLAYER_DATA.personal.secondaryPosition },
    { label: 'Pierna Hábil', value: PLAYER_DATA.personal.preferredFoot },
    { label: 'Club Actual', value: `${PLAYER_DATA.personal.currentClub} (Rosario)` },
    { label: 'Historial Canteras', value: "Newell's Old Boys (9 años) • C.A. Belgrano" },
    { label: 'Registro de Disciplina', value: "1 Tarjeta Amarilla • 0 Tarjetas Rojas (1040 min)" },
    { label: 'Pico de Velocidad GPS', value: "33.0 km/h (Rango de élite para zaguero central)" },
    { label: 'Titularidad Registrada', value: "96.3% (12 partidos disputados)" }
  ];

  return (
    <section id="perfil" className="py-24 bg-[#08090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Ficha Técnica Oficial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Perfil Integral del Jugador
            </h2>
          </div>
          
          <button
            onClick={onOpenDossier}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-xs text-white tracking-wide transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#45f3ff]" />
            <span>Descargar Ficha en PDF</span>
          </button>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Table (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-black text-white font-display uppercase tracking-wide mb-6 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#45f3ff]" />
              <span>Especificaciones Biométricas & Deportivas</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 border-b border-white/5 flex flex-col justify-center"
                >
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-zinc-100">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Scout evaluation summary box */}
            <div className="mt-8 p-5 rounded-xl bg-black/50 border border-white/10">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                Conclusión del Reporte de Seguimiento
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                "Zaguero central moderno que reúne las condiciones físicas indispensables para el fútbol de alto ritmo (1.88 m, 86 kg y 33 km/h de velocidad máxima) combinadas con una lectura pulcra de juego, solvencia técnica para iniciar ataques con pie zurdo y una notable sobriedad defensiva demostrada en su bajo índice de faltas sancionadas."
              </p>
            </div>
          </div>

          {/* Highlights Checklist (Right 4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-[#45f3ff]" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider">
                  Factores Diferenciales
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Perfil Zurdo Natural</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Condición muy codiciada en el mercado para armar la línea de 4 o líbero en línea de 3.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Formación de Cantera AFA</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      9 años ininterrumpidos en Newell's Old Boys incorporando conceptos de presión, salida y orden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Capacidad de Pase Largo</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Cambios de frente y pelotas profundas que transforman recuperaciones en peligro de gol.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Juego Aéreo Integral</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Ganador constante en balones divididos y salto ofensivo en córners a favor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 text-center">
              <span className="text-[11px] font-mono text-zinc-400">
                A.D.I.U.R. • Temporada Oficial
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
