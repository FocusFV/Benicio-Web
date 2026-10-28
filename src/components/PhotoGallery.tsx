import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';

import photoAction from '../assets/benicio_action_orange.png';
import photoBack from '../assets/benicio_back_dorsal6.png';
import photoPitch from '../assets/tactical_pitch_real.png';
import screenshotStats from '../assets/screenshot_stats.png';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  caption: string;
  image: string;
  aspectClass: string;
}

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Conducción y Salida desde el Fondo",
      category: "Acción Oficial • A.D.I.U.R.",
      caption: "Salida estructurada con balón dominado y lectura de campo para romper líneas con pase filtrado.",
      image: photoAction,
      aspectClass: "object-contain object-bottom bg-gradient-to-t from-black via-slate-950 to-blue-950/30"
    },
    {
      id: 2,
      title: "Remate y Pase Vertical — Dorsal #6",
      category: "Perfil Técnico Zurdo",
      caption: "Impacto con pierna zurda en pase frontal teledirigido hacia la espalda de los centrales rivales.",
      image: photoBack,
      aspectClass: "object-contain object-bottom bg-gradient-to-t from-black via-slate-950 to-blue-950/30"
    },
    {
      id: 3,
      title: "Esquema Táctico en Zaga Central",
      category: "Ubicación en Cancha",
      caption: "Disposición en el campo de juego cubriendo ambos perfiles centrales (izquierdo y derecho).",
      image: photoPitch,
      aspectClass: "object-contain object-center bg-black"
    },
    {
      id: 4,
      title: "Planilla de Monitoreo & GPS",
      category: "Datos de Rendimiento",
      caption: "Ficha oficial de métricas: 8879 m de recorrido promedio, 33 km/h de velocidad máxima y 96.3% de titularidad.",
      image: screenshotStats,
      aspectClass: "object-cover object-left bg-black"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-[#070b16] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Registro Fotográfico & Cobertura</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display">
              Galería & Material de Análisis
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md mt-3 md:mt-0 font-normal">
            Capturas y material gráfico extraídos directamente del video de seguimiento oficial de partidos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl cursor-pointer hover:border-blue-400/40 transition-colors"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[3/4] relative overflow-hidden p-3 flex flex-col justify-between">
                
                {/* Background image container */}
                <div className="absolute inset-0 z-0 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full rounded-xl ${item.aspectClass} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 rounded-xl" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-sm border border-white/15 text-slate-200">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-blue-600/80 border border-white/20 flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:scale-110 transition-all shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="relative z-10 pt-3">
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5 font-normal">
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
              className="relative max-w-2xl w-full rounded-2xl bg-slate-950 border border-blue-500/40 p-6 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[60vh] rounded-xl bg-black border border-white/10 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[58vh] w-auto object-contain"
                />
              </div>

              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-blue-300">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Benicio Ocaña Zahler #6
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{selectedPhoto.title}</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
