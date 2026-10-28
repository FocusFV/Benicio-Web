import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PLAYER_DATA } from '../data/playerData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed 'Contacto' from middle links so it only appears once on the prominent button
  const navLinks = [
    { label: 'Perfil', href: '#perfil' },
    { label: 'Rendimiento GPS', href: '#metricas' },
    { label: 'Pilares Tácticos', href: '#tactica' },
    { label: 'Jugadas en Video', href: '#video' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Galería', href: '#galeria' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-[#060911]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-blue-900/60 border border-blue-400/40 flex items-center justify-center font-bold tracking-wider text-white text-base group-hover:bg-blue-600 group-hover:border-white transition-all duration-300 shadow-md shadow-blue-900/30"
          >
            {PLAYER_DATA.personal.initials}
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white uppercase group-hover:text-blue-200 transition-colors">
              {PLAYER_DATA.personal.fullName}
            </span>
            <span className="text-xs text-blue-300 font-mono flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              {PLAYER_DATA.personal.primaryPosition} • Dorsal #6
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Single Contact Action */}
        <div className="hidden lg:flex items-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#contacto"
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-blue-600 text-white font-semibold text-xs tracking-wide hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 border border-blue-400/40"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070b16] border-b border-white/10 px-6 py-5 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-slate-200 hover:text-blue-400 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-2.5 rounded-md bg-blue-600 text-white font-semibold text-xs shadow-md shadow-blue-600/30"
              >
                Contacto Directo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
