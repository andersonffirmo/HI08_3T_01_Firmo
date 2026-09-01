import React, { useState, useEffect } from 'react';
import { 
  SCHOOL_INFO, 
  SECTIONS_25_DATA 
} from './data/historyContent';
import { EscolaLogo } from './components/EscolaLogo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SectionItem } from './components/SectionItem';
import { DashboardStats } from './components/DashboardStats';
import { AnalogiesViewer } from './components/AnalogiesViewer';
import { HistoricalImageSection } from './components/HistoricalImageSection';
import { TimelineSection } from './components/TimelineSection';
import { TheoriesComparison } from './components/TheoriesComparison';
import { QuizSimulator } from './components/QuizSimulator';
import { GlossaryViewer } from './components/GlossaryViewer';

import { 
  Sparkles, 
  Filter, 
  Bookmark, 
  Compass,
  Flame,
  CheckCircle2,
  Trophy,
  RotateCcw,
  CheckCheck
} from 'lucide-react';

const STORAGE_KEY_COMPLETED = 'ep_history_completed_sections_cap07';
const STORAGE_KEY_BOOKMARKS = 'ep_history_bookmarked_sections_cap07';

export default function App() {
  const [currentSectionId, setCurrentSectionId] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [completedSectionIds, setCompletedSectionIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      return saved ? JSON.parse(saved) : [1]; // Start with section 1 completed on first load
    } catch {
      return [1];
    }
  });
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedSectionIds));
    } catch (e) {
      console.error(e);
    }

    if (completedSectionIds.length === 25) {
      setShowCelebration(true);
    }
  }, [completedSectionIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Automatic reading engagement observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            const secId = Number(entry.target.getAttribute('data-sec-id'));
            if (secId && !isNaN(secId)) {
              setCurrentSectionId(secId);
              // Auto mark as completed upon deep viewing
              setCompletedSectionIds((prev) => 
                prev.includes(secId) ? prev : [...prev, secId]
              );
            }
          }
        });
      },
      { threshold: [0.4], rootMargin: '-80px 0px -20% 0px' }
    );

    SECTIONS_25_DATA.forEach((sec) => {
      const el = document.getElementById(`secao-${sec.number}`);
      if (el) {
        el.setAttribute('data-sec-id', String(sec.id));
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const categories = ['Todas', 'Contexto', 'Estatísticas', 'Cotidiano', 'Analogias', 'Movimentos', 'Teorias', 'Comuna', 'Legado', 'Atividades'];

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSectionComplete = (id: number) => {
    setCompletedSectionIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const markAllCompleted = () => {
    setCompletedSectionIds(SECTIONS_25_DATA.map(s => s.id));
    setShowCelebration(true);
  };

  const resetProgress = () => {
    setCompletedSectionIds([1]);
    setShowCelebration(false);
  };

  const handleSelectSection = (id: number) => {
    setCurrentSectionId(id);
    const sec = SECTIONS_25_DATA.find(s => s.id === id);
    if (sec) {
      const element = document.getElementById(`secao-${sec.number}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNextSection = (currentId: number) => {
    const nextId = currentId + 1;
    if (nextId <= 25) {
      handleSelectSection(nextId);
    }
  };

  const filteredSections = SECTIONS_25_DATA.filter(sec => {
    const matchesCategory = selectedCategory === 'Todas' || sec.category === selectedCategory;
    const matchesSearch = 
      searchTerm === '' ||
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.content.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      sec.number.includes(searchTerm);
    const matchesBookmark = !onlyBookmarks || bookmarkedIds.includes(sec.id);
    return matchesCategory && matchesSearch && matchesBookmark;
  });

  const completionRate = Math.round((completedSectionIds.length / 25) * 100);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#1A202C] font-sans antialiased flex flex-col selection:bg-[#FD7600]/30 selection:text-[#016E01]">
      {/* Top Academic Header with Real-time Study Progress Bar */}
      <Header
        currentSectionId={currentSectionId}
        onSelectSection={handleSelectSection}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        completedSectionIds={completedSectionIds}
        totalSections={25}
        onMarkAllCompleted={markAllCompleted}
        onResetProgress={resetProgress}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* ========================================================================= */}
        {/* CAPA MONUMENTAL & IDENTIFICAÇÃO INSTITUCIONAL (SEÇÃO 01 HERO) */}
        {/* ========================================================================= */}
        <section 
          id="capa-monumental-hero" 
          className="relative bg-[#016E01] text-[#FBFBFB] rounded-3xl p-6 sm:p-10 lg:p-12 border-4 border-[#FD7600] shadow-2xl overflow-hidden mb-12"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FD7600]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Crest and School Title with Official Attached Logo */}
            <div className="inline-flex flex-col items-center gap-3">
              <div className="bg-white p-3 rounded-2xl shadow-md inline-block">
                <EscolaLogo size="lg" />
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#FBFBFB]/90 font-bold">
                  {SCHOOL_INFO.grade} • Disciplina de {SCHOOL_INFO.discipline}
                </p>
              </div>
            </div>

            {/* Academic Chapter Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FD7600] px-4 py-1.5 rounded-full text-xs font-mono font-bold text-white shadow-md">
              <Sparkles className="w-4 h-4 text-white" />
              <span>{SCHOOL_INFO.chapter} • Material Didático Estruturado (25 Seções)</span>
            </div>

            {/* Main Theme & Subtheme Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {SCHOOL_INFO.theme}
              </h1>
              <div className="w-24 h-1.5 bg-[#FD7600] mx-auto rounded-full" />
              <p className="font-serif italic text-lg sm:text-xl text-[#FBFBFB] max-w-3xl leading-relaxed">
                "{SCHOOL_INFO.subtheme}"
              </p>
            </div>

            {/* Teacher Badge (Prof. Anderson Firmo) */}
            <div className="bg-white/10 backdrop-blur-xs border-2 border-[#FD7600] px-6 py-3 rounded-2xl flex items-center gap-3.5 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#FD7600] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                👨‍🏫
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FD7600] block font-bold">
                  Docente Responsável
                </span>
                <span className="font-serif font-bold text-base sm:text-lg text-white">
                  {SCHOOL_INFO.teacher}
                </span>
              </div>
            </div>

            {/* Student Study Progress Summary Card in Hero */}
            <div className="w-full bg-black/25 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FD7600]" />
                  <span className="font-serif font-bold text-sm sm:text-base text-white">
                    Seu Progresso de Leitura do Material:
                  </span>
                  <span className="font-mono font-black text-xs bg-[#FD7600] text-white px-2 py-0.5 rounded-full">
                    {completedSectionIds.length} / 25 Seções ({completionRate}%)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={markAllCompleted}
                    className="hover:text-[#FD7600] transition-colors flex items-center gap-1 text-white/80 cursor-pointer underline"
                  >
                    <CheckCheck className="w-3.5 h-3.5" /> Marcar Todas
                  </button>
                  <span className="text-white/40">|</span>
                  <button
                    onClick={resetProgress}
                    className="hover:text-[#FD7600] transition-colors flex items-center gap-1 text-white/80 cursor-pointer underline"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Zerar
                  </button>
                </div>
              </div>

              {/* Progress bar fill */}
              <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FD7600] to-amber-300 transition-all duration-500 rounded-full"
                  style={{ width: `${Math.max(completionRate, 3)}%` }}
                />
              </div>
            </div>

            {/* Quick Hero Indicator Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2 text-xs font-mono">
              <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 shadow-xs">
                <span className="text-[#FD7600] font-black text-xl block font-mono">16h</span>
                <span className="text-[#FBFBFB]/90 text-[11px] font-sans">Jornada Máxima</span>
              </div>
              <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 shadow-xs">
                <span className="text-[#FD7600] font-black text-xl block font-mono">50%</span>
                <span className="text-[#FBFBFB]/90 text-[11px] font-sans">Mulheres/Crianças</span>
              </div>
              <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 shadow-xs">
                <span className="text-[#FD7600] font-black text-xl block font-mono">×6</span>
                <span className="text-[#FBFBFB]/90 text-[11px] font-sans">Explosão Manchester</span>
              </div>
              <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 shadow-xs">
                <span className="text-[#FD7600] font-black text-xl block font-mono">70%</span>
                <span className="text-[#FBFBFB]/90 text-[11px] font-sans">Insalubridade/Óbitos</span>
              </div>
            </div>
          </div>
        </section>

        {/* 100% COMPLETION CONGRATULATIONS BANNER */}
        {showCelebration && completedSectionIds.length === 25 && (
          <div 
            id="completion-celebration-banner"
            className="mb-8 bg-gradient-to-r from-[#016E01] via-[#015501] to-[#016E01] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#FD7600] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#FD7600] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Trophy className="w-8 h-8 text-white animate-bounce" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block">
                  Conquista Pedagógica • 100% do Material Lido
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Parabéns! Você completou todas as 25 seções!
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
                  Você concluiu todo o estudo do Capítulo 07 com o Prof. Anderson Firmo. Agora teste seus conhecimentos e emita seu Certificado Oficial de História.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleSelectSection(24)}
              className="px-6 py-3.5 rounded-2xl bg-[#FD7600] hover:bg-[#e06800] text-white font-bold text-sm shadow-md transition-all cursor-pointer shrink-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Fazer o Quiz & Gerar Certificado</span>
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* INTERACTIVE 25-SECTION SELECTOR GRID (NAVIGATION BAR) */}
        {/* ========================================================================= */}
        <div id="section-quick-selector" className="bg-white rounded-3xl border-2 border-[#016E01]/15 p-5 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#016E01]/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#FD7600]" />
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#016E01]">
                  Mapa Rápido das 25 Seções Didáticas
                </h3>
                <p className="text-xs text-[#1A202C]/70">
                  {completedSectionIds.length} de 25 concluídas ({completionRate}%)
                </p>
              </div>
            </div>

            {/* Bookmarks & Quick Actions Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOnlyBookmarks(!onlyBookmarks)}
                className={`text-xs px-3.5 py-1.5 rounded-xl border font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  onlyBookmarks
                    ? 'bg-[#FD7600] text-white border-[#FD7600] shadow-xs'
                    : 'bg-white text-[#016E01] border-[#016E01]/20 hover:bg-[#FD7600]/10 hover:border-[#FD7600]'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarks ? 'fill-white text-white' : 'text-[#016E01]'}`} />
                <span>Salvas ({bookmarkedIds.length})</span>
              </button>
            </div>
          </div>

          {/* 25 Numbered Quick Jump Buttons with Real-time Completion Checkmarks */}
          <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-25 gap-1.5">
            {SECTIONS_25_DATA.map((sec) => {
              const isSelected = currentSectionId === sec.id;
              const isBookmarked = bookmarkedIds.includes(sec.id);
              const isCompleted = completedSectionIds.includes(sec.id);

              return (
                <button
                  key={sec.id}
                  id={`jump-btn-sec-${sec.id}`}
                  onClick={() => handleSelectSection(sec.id)}
                  title={`${sec.number}. ${sec.title} ${isCompleted ? '(Concluída ✓)' : ''}`}
                  className={`p-2 rounded-xl text-xs font-mono font-bold transition-all flex flex-col items-center justify-center relative cursor-pointer ${
                    isSelected
                      ? 'bg-[#FD7600] text-white ring-2 ring-[#FD7600] shadow-sm font-black'
                      : isCompleted
                      ? 'bg-emerald-50 text-[#016E01] border border-emerald-300 hover:bg-[#016E01] hover:text-white'
                      : 'bg-[#FBFBFB] text-[#016E01] hover:bg-[#016E01] hover:text-white border border-[#016E01]/15'
                  }`}
                >
                  <span className="flex items-center gap-0.5">
                    {sec.number}
                    {isCompleted && !isSelected && <span className="text-[9px] text-[#016E01] font-black">✓</span>}
                  </span>
                  {isBookmarked && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD7600] absolute top-1 right-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-[#016E01]/10">
            <span className="text-[11px] font-mono uppercase font-bold text-[#016E01] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#FD7600]" /> Filtro:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#016E01] text-white shadow-xs'
                    : 'bg-[#016E01]/5 text-[#016E01] hover:bg-[#FD7600]/20 hover:text-[#FD7600]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RENDER THE 25 FULL SECTIONS WITH SPECIALIZED INTEGRATED MODULES */}
        {/* ========================================================================= */}
        <div id="full-25-sections-container" className="space-y-12">
          {filteredSections.map((sec) => (
            <SectionItem
              key={sec.id}
              section={sec}
              isBookmarked={bookmarkedIds.includes(sec.id)}
              onToggleBookmark={toggleBookmark}
              isCompleted={completedSectionIds.includes(sec.id)}
              onToggleComplete={toggleSectionComplete}
              onNextSection={sec.id < 25 ? () => handleNextSection(sec.id) : undefined}
            >
              {/* Embedded Specialized Interactive Modules at exact corresponding section numbers */}
              
              {/* Section 03: Dashboard Stats 16h, 50%, ×6, 70% */}
              {sec.id === 3 && <DashboardStats />}

              {/* Section 04: Historical Image Realist Painting with Hotspots */}
              {sec.id === 4 && <HistoricalImageSection />}

              {/* Section 09: Analogia 1 (Engrenagem Descartável) & Triad Overview */}
              {sec.id === 9 && <AnalogiesViewer />}

              {/* Section 13-18: Comparative Matrix of 4 Theories */}
              {sec.id === 15 && <TheoriesComparison />}

              {/* Section 19: Interactive Timeline 1776, 1848, 1848, 1864, 1871 */}
              {sec.id === 19 && <TimelineSection />}

              {/* Section 24: Interactive 8th Grade Quiz & Certificate */}
              {sec.id === 24 && <QuizSimulator />}

              {/* Section 25: Comprehensive History Glossary */}
              {sec.id === 25 && <GlossaryViewer />}
            </SectionItem>
          ))}
        </div>

      </main>

      {/* Institutional Academic Footer */}
      <Footer />
    </div>
  );
}
