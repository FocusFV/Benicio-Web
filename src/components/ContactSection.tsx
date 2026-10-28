import { useState } from 'react';
import { MessageSquare, Mail, MapPin, Send, Check } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const emailContact = "contacto@benicioocana.com";
  const whatsappNumber = "+5493410000000";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailContact);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#050810] border-t border-blue-500/20 relative no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contacto Profesional & Representación</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white font-display">
            Contacto & Ojeadores
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-normal">
            Canal directo para directores deportivos, agencias de representación, clubes y scouts interesados en seguimiento y coordinación de pruebas.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hola,%20me%20comunico%20por%20el%20perfil%20de%20Benicio%20Ocaña`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 shadow-xl group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-blue-600/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300 font-semibold block mb-1">
                  Contacto Inmediato
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                  WhatsApp Directo
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Consultas de clubes, visores y cuerpo técnico vía mensajería rápida.
                </p>
              </div>
            </a>

            {/* Email Card */}
            <div
              onClick={handleCopyEmail}
              className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-xl group flex items-start gap-4 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-200 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Correo Electrónico
                </span>
                <h4 className="text-base font-bold text-white truncate">
                  {emailContact}
                </h4>
                <span className="text-xs text-blue-300 mt-1 inline-flex items-center gap-1">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">Copiado al portapapeles</span>
                    </>
                  ) : (
                    'Hacer clic para copiar correo'
                  )}
                </span>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-blue-500/20 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-blue-400 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Residencia & Disponibilidad
                </span>
                <h4 className="text-sm font-bold text-white">
                  Rosario, Santa Fe — Argentina
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Disponibilidad de traslado nacional e internacional.
                </p>
              </div>
            </div>

          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/70 border border-blue-500/30 p-7 sm:p-8 shadow-xl">
            <h3 className="text-xl font-black text-white font-display uppercase tracking-wide mb-2">
              Enviar Solicitud de Seguimiento
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Complete los datos de la institución o agencia para coordinar material audiovisual extendido o informes físicos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Nombre o Representante
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Martín Gómez"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/70 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Club / Agencia / Medio
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Scouting Europa / Club AFA"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/70 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Email de Contacto
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="scouting@club.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/70 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+54 9 11 ..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/70 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Mensaje o Interés Específico
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detalles sobre el interés deportivo, seguimiento en vivo o solicitud de partidos completos..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/70 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-blue-400 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-400 font-mono">
                  Respuesta dentro de las 24 hs hábiles
                </span>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-500 transition-all cursor-pointer shadow-lg shadow-blue-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Mensaje</span>
                </button>
              </div>

              {formSent && (
                <div className="p-3 rounded-lg bg-blue-950/80 border border-blue-400/50 text-white text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Mensaje registrado exitosamente. Nos pondremos en contacto a la brevedad.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold uppercase">{PLAYER_DATA.personal.fullName}</span>
            <span>•</span>
            <span className="text-blue-300">Marcador Central #6</span>
          </div>
          <span>Rosario, Santa Fe — {new Date().getFullYear()}</span>
        </div>

      </div>
    </section>
  );
};
