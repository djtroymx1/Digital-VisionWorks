import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Atom, Wind, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm"
          aria-label="Digital VisionWorks - Home"
        >
          <img
            src="/images/DVW%20Transparent%20Horizontal.png"
            alt="Digital VisionWorks"
            className="h-14 sm:h-16 md:h-24 lg:h-28 w-auto max-w-[60vw]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all rounded-sm text-sm font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            Start Project
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-8 h-8" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col justify-center items-center p-8"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>
            <nav className="flex flex-col gap-8 text-center" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Huge Watermark Text */}
      <div aria-hidden="true" className="absolute -bottom-20 -left-10 select-none pointer-events-none opacity-[0.03] text-[15vw] font-black leading-none whitespace-nowrap text-white">
        DIGITAL VISIONWORKS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <img
              src="/images/DVW%20Transparent%20Horizontal.png"
              alt="Digital VisionWorks"
              className="h-10 md:h-12 w-auto mb-4"
            />
            <p className="text-gray-400 max-w-sm">
              Building the future of digital experiences with AI-first development and premium design.
            </p>
          </div>
          <div className="flex gap-8 mt-8 md:mt-0">
            <a
              href="https://clockworkvenue.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050505] rounded-sm"
            >
              Clockwork Venue <ArrowRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <a
              href="https://dogmora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050505] rounded-sm"
            >
              Dogmora <ArrowRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
          <p>&copy; 2025 Digital VisionWorks LLC. All rights reserved.</p>

          {/* Tech Stack Indicator - Professional Style */}
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm" role="list" aria-label="Technologies used">
            <span className="text-[10px] uppercase tracking-widest opacity-60">Built With</span>
            <div className="h-3 w-px bg-white/10" aria-hidden="true"></div>
            <div className="flex gap-4">
              <div className="group relative flex items-center justify-center" role="listitem">
                <Atom className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
                <span className="sr-only">React 19</span>
                <span aria-hidden="true" className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">React 19</span>
              </div>
              <div className="group relative flex items-center justify-center" role="listitem">
                <Wind className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
                <span className="sr-only">Tailwind CSS</span>
                <span aria-hidden="true" className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">Tailwind CSS</span>
              </div>
              <div className="group relative flex items-center justify-center" role="listitem">
                <Zap className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
                <span className="sr-only">Framer Motion</span>
                <span aria-hidden="true" className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">Framer Motion</span>
              </div>
              <div className="group relative flex items-center justify-center" role="listitem">
                <Sparkles className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
                <span className="sr-only">Gemini AI</span>
                <span aria-hidden="true" className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">Gemini AI</span>
              </div>
            </div>
          </div>

          <nav className="flex gap-6" aria-label="Legal">
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050505] rounded-sm">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050505] rounded-sm">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
