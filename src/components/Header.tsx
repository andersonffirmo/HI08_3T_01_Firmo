import React, { useState, useEffect } from 'react';
import { EscolaLogo } from './EscolaLogo';
import { SCHOOL_INFO, SECTIONS_25_DATA } from '../data/historyContent';
import { 
  Menu, 
  X, 
  Search, 
  UserCheck, 
  Printer, 
  ArrowUp, 
  GraduationCap, 
  Share2,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentSectionId: number;
  onSelectSection: (id: number) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSectionId,
  onSelectSection,
  searchTerm,
  onSearchChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / Math.max(totalScroll, 1)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Academic Ribbon with Official Brand Colors (#016E01 and #FD7600) */}
      <div id="header-academic-ribbon" className="bg-[#016E01] text-[#FBFBFB] border-b border-[#C9A84C]/50 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FD7600] animate-pulse"></span>
            <span className="font-bold text-[#FBFBFB]">Material Didático Digital</span>
            <span className="text-[#FBFBFB]/60">•</span>
            <span className="hidden sm:inline text-[#FBFBFB]/90 font-medium">8º Ano • Ensino Fundamental II</span>
            <span className="text-[#FBFBFB]/60">•</span>
            <span className="text-[#FD7600] font-bold bg-[#FBFBFB]/10 px-2 py-0.5 rounded">{SCHOOL_INFO.chapter}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 ml-auto font-medium">
            <div className="flex items-center gap-1.5 bg-[#FD7600] px-3 py-0.5 rounded-full text-white shadow-xs font-semibold">
              <UserCheck className="w-3.5 h-3.5 text-white" />
              <span className="tracking-wide text-xs">{SCHOOL_INFO.teacher}</span>
            </div>
            <button 
              onClick={handlePrint}
              id="header-print-btn"
              title="Versão para Impressão / PDF"
              className="hover:text-[#FD7600] text-[#FBFBFB] transition-colors flex items-center gap-1 cursor-pointer text-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Imprimir</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header 
        id="main-academic-header" 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FBFBFB]/95 backdrop-blur-md shadow-md border-b border-[#016E01]/15 py-2' 
            : 'bg-[#FBFBFB] border-b border-[#016E01]/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Official Attached Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#secao-01" 
              onClick={(e) => { e.preventDefault(); onSelectSection(1); }}
              className="flex items-center group cursor-pointer"
            >
              <EscolaLogo size={isScrolled ? 'sm' : 'md'} />
            </a>
          </div>

          {/* Center search input */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#016E01]/50" />
              <input
                id="header-search-input"
                type="text"
                placeholder="Buscar nas 25 seções (ex: mais-valia, Marx, Comuna, 1848)..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#016E01]/5 focus:bg-white text-[#1A202C] text-xs sm:text-sm pl-9 pr-4 py-2 rounded-full border border-[#016E01]/20 focus:border-[#FD7600] focus:ring-2 focus:ring-[#FD7600]/20 outline-none transition-all placeholder:text-[#1A202C]/50"
              />
              {searchTerm && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#1A202C]/40 hover:text-[#FD7600]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="header-drawer-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 bg-[#FD7600] hover:bg-[#e06800] text-white px-3.5 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              aria-label="Abrir Índice das 25 Seções"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">Índice das 25 Seções</span>
              <span className="bg-white text-[#FD7600] font-mono font-black text-[11px] px-1.5 py-0.2 rounded-md">25</span>
            </button>

            <button
              onClick={handleShare}
              id="header-share-btn"
              className="hidden sm:flex items-center gap-1.5 bg-[#016E01]/10 hover:bg-[#016E01]/20 text-[#016E01] px-3 py-2 rounded-xl font-semibold text-xs border border-[#016E01]/20 transition-colors cursor-pointer"
              title="Copiar link da aula"
            >
              <Share2 className="w-3.5 h-3.5 text-[#016E01]" />
              <span>{copiedLink ? 'Copiado!' : 'Compartilhar'}</span>
            </button>
          </div>
        </div>

        {/* Real-time reading progress bar */}
        <div className="w-full bg-[#016E01]/10 h-1 mt-2">
          <div 
            className="bg-gradient-to-r from-[#FD7600] via-[#016E01] to-[#C9A84C] h-1 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Slide-over Drawer with all 25 Sections */}
      {isMenuOpen && (
        <div 
          id="sections-drawer-overlay"
          className="fixed inset-0 z-50 bg-[#1A202C]/60 backdrop-blur-xs flex justify-end transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            id="sections-drawer-panel"
            className="w-full max-w-md bg-[#FBFBFB] h-full shadow-2xl flex flex-col border-l-4 border-[#FD7600] animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="bg-[#016E01] text-white p-4 border-b border-[#C9A84C]/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#FD7600]" />
                <div>
                  <h3 className="font-serif font-bold text-base text-white">Índice das 25 Seções</h3>
                  <p className="text-[11px] text-[#C9A84C]">{SCHOOL_INFO.teacher} • Cap. 07</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search in Drawer */}
            <div className="p-3 border-b border-[#016E01]/10 bg-white">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#016E01]/40" />
                <input
                  type="text"
                  placeholder="Filtrar seções por nome ou assunto..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 bg-[#FBFBFB] rounded-lg border border-[#016E01]/20 focus:border-[#FD7600] outline-none text-[#1A202C]"
                />
              </div>
            </div>

            {/* List of 25 Sections */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 divide-y divide-[#016E01]/5">
              {SECTIONS_25_DATA
                .filter(s => 
                  searchTerm === '' || 
                  s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  s.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  s.number.includes(searchTerm)
                )
                .map((sec) => (
                  <button
                    key={sec.id}
                    id={`drawer-item-sec-${sec.id}`}
                    onClick={() => {
                      onSelectSection(sec.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group cursor-pointer pt-2.5 ${
                      currentSectionId === sec.id
                        ? 'bg-[#016E01] text-white shadow-sm'
                        : 'hover:bg-[#FD7600]/10 text-[#1A202C]'
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                      currentSectionId === sec.id
                        ? 'bg-[#FD7600] text-white'
                        : 'bg-[#016E01]/10 text-[#016E01] group-hover:bg-[#FD7600] group-hover:text-white'
                    }`}>
                      {sec.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold leading-tight line-clamp-1">
                        {sec.title}
                      </div>
                      <div className={`text-[11px] line-clamp-1 mt-0.5 ${
                        currentSectionId === sec.id ? 'text-white/80' : 'text-[#1A202C]/60'
                      }`}>
                        {sec.summary}
                      </div>
                    </div>
                  </button>
                ))}
            </div>

            {/* Drawer Footer */}
            <div className="p-3 bg-[#016E01] text-white text-xs text-center border-t border-[#C9A84C]/30 flex items-center justify-between">
              <span className="text-[#FD7600] font-serif font-bold">{SCHOOL_INFO.name}</span>
              <button
                onClick={scrollToTop}
                className="hover:text-[#FD7600] transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
              >
                <ArrowUp className="w-3 h-3" /> Topo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
