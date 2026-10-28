import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, Send, Check } from 'lucide-react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const emailContact = "contacto@benicioocana.com";
  // WhatsApp personal oficial de Benicio
  const whatsappNumber = "5493416804168";
  const whatsappDisplay = "+54 9 3416 80-4168";

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
            Canal directo para directores deportivos, agencias de representación, clubes y visores interesados en seguimiento deportivo.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* WhatsApp Card con número personal */}
            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${whatsappNumber}?text=Hola%20Benicio,%20me%20comunico%20desde%20tu%20web`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-blue-500/40 hover:border-blue-400 transition-all duration-300 shadow-xl group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-blue-600/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300 font-semibold block mb-1">
                  WhatsApp Personal
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                  {whatsappDisplay}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Contacto directo vía mensajería rápida.
                </p>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
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
            </motion.div>

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
                    placeholder="+54 9 341 ..."
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
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-500 transition-all cursor-pointer shadow-lg shadow-blue-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Mensaje</span>
                </motion.button>
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

        {/* Clean Centered FocusFV Footer */}
        <div className="mt-24 pt-12 pb-6 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400 mb-4 block font-medium">
            DESARROLLADO Y OPTIMIZADO POR
          </span>
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="https://focusfv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300"
            title="FocusFV — Desarrollado y optimizado por FocusFV"
          >
            <img
              src="/FocusFVLogo.png"
              alt="FocusFV"
              className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:brightness-110 transition-all"
            />
          </motion.a>
        </div>

      </div>
    </section>
  );
};
