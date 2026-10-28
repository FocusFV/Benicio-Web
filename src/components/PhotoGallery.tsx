import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';

interface PhotoItem {
  id: number;
  title: string;
  category: string;
  caption: string;
  placeholderBg: string;
}

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Gallery items with athletic styled aesthetic cards
  // User can easily swap the background with their actual photos of Benicio
  const photos: PhotoItem[] = [
    {
      id: 1,
      title: "Salida desde el Fondo",
      category: "Acción en Partido",
      caption: "Conducción con pierna zurda y visión de juego para ruptura vertical de líneas.",
      placeholderBg: "from-zinc-900 via-zinc-800 to-zinc-950"
    },
    {
      id: 2,
      title: "Elevación & Juego Aéreo",
      category: "Duelo Aéreo",
      caption: "Imponiendo 1.88 m de altura en el centro del campo en partido oficial.",
      placeholderBg: "from-zinc-950 via-zinc-900 to-zinc-800"
    },
    {
      id: 3,
      title: "Cierre & Barrida al Piso",
      category: "Cobertura Defensiva",
      caption: "Quite limpio al piso sobre el costado neutralizando el contraataque rival.",
      placeholderBg: "from-zinc-900 via-zinc-950 to-zinc-900"
    },
    {
      id: 4,
      title: "Zaga Central en A.D.I.U.R.",
      category: "Competencia",
      caption: "Liderazgo en la zaga con 96.3% de titularidad en el torneo actual.",
      placeholderBg: "from-zinc-800 via-zinc-900 to-zinc-950"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-[#090a0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#45f3ff] mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Registro Fotográfico & Cobertura</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Galería en Acción
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md mt-3 md:mt-0 font-normal">
            Imágenes de competencia oficial, duelos individuales y secuencias de partido.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl cursor-pointer"
            >
              {/* Aspect Ratio Box with Stylized Athletic Graphic */}
              <div
                className={`w-full aspect-[4/5] bg-gradient-to-br ${item.placeholderBg} p-6 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 group-hover:scale-105`}
              >
                {/* Athletic backdrop lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-[#45f3ff]/10 rounded-full blur-2xl group-hover:bg-[#45f3ff]/20 transition-colors pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-zinc-300">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Visual Centerpiece Number / Emblem */}
                <div className="relative z-10 text-center my-auto">
                  <div className="text-6xl font-black text-white/10 font-display tracking-widest group-hover:text-white/20 transition-colors">
                    #06
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    BENICIO OCAÑA
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="relative z-10 pt-3 border-t border-white/10">
                  <h4 className="text-base font-bold text-white group-hover:text-[#45f3ff] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl bg-zinc-950 border border-white/15 p-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="text-center p-6">
                  <div className="text-7xl font-black text-white/10 font-display tracking-widest">
                    #06 • BOZ
                  </div>
                  <p className="text-sm font-mono text-[#45f3ff] mt-2">
                    {selectedPhoto.category} • Marcador Central
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">{selectedPhoto.title}</h3>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                {selectedPhoto.caption}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Benicio Ocaña Zahler</span>
                <span>Rosario, Argentina</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
