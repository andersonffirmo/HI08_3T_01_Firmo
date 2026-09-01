import React, { useState } from 'react';
import { MANDATORY_ANALOGIES } from '../data/historyContent';
import { Cog, Ship, Flame, CheckCircle2, Lightbulb, Sparkles, BookMarked } from 'lucide-react';

export const AnalogiesViewer: React.FC = () => {
  const [selectedAnalogy, setSelectedAnalogy] = useState<string>(MANDATORY_ANALOGIES[0].id);

  const getAnalogyIcon = (iconName: string, active: boolean) => {
    const colorClass = active ? 'text-white' : 'text-[#016E01]';
    switch (iconName) {
      case 'Cog':
        return <Cog className={`w-6 h-6 ${colorClass}`} />;
      case 'Ship':
        return <Ship className={`w-6 h-6 ${colorClass}`} />;
      case 'Flame':
      default:
        return <Flame className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  const current = MANDATORY_ANALOGIES.find(a => a.id === selectedAnalogy) || MANDATORY_ANALOGIES[0];

  return (
    <div id="analogies-viewer-module" className="my-10 bg-white rounded-3xl border-2 border-[#016E01]/20 shadow-lg overflow-hidden">
      {/* Module Title Banner */}
      <div className="bg-[#016E01] text-[#FBFBFB] p-6 border-b-4 border-[#FD7600]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FD7600]" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#FD7600] bg-white/10 px-3 py-1 rounded-full">
              Didática do 8º Ano • Analogias Obrigatórias
            </span>
          </div>
          <span className="text-xs bg-[#FD7600] font-bold px-3 py-1 rounded-full text-white shadow-xs">
            Prof. Anderson Firmo
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-white">
          As Três Grandes Metáforas do Pensamento Político
        </h3>
        <p className="text-sm text-[#FBFBFB]/90 mt-1 max-w-3xl font-sans">
          Como os pensadores e historiadores usam imagens visuais diretas para explicar as transformações radicais causadas pela industrialização: a alienação, a luta de classes e a autogestão popular.
        </p>
      </div>

      {/* 3 Analogy Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#016E01]/15 bg-[#FBFBFB]">
        {MANDATORY_ANALOGIES.map((analogy) => {
          const isActive = selectedAnalogy === analogy.id;
          return (
            <button
              key={analogy.id}
              id={`tab-${analogy.id}`}
              onClick={() => setSelectedAnalogy(analogy.id)}
              className={`p-4 sm:p-5 text-left transition-all flex items-center gap-3.5 cursor-pointer relative ${
                isActive
                  ? 'bg-white text-[#016E01] font-bold shadow-xs'
                  : 'hover:bg-[#FD7600]/10 text-[#1A202C]/70'
              }`}
            >
              <div className={`p-2.5 rounded-xl border transition-colors ${
                isActive 
                  ? 'bg-[#FD7600] border-[#FD7600] text-white' 
                  : 'bg-[#016E01]/10 border-[#016E01]/20'
              }`}>
                {getAnalogyIcon(analogy.icon, isActive)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#FD7600]">
                  Metáfora
                </div>
                <div className="text-sm font-serif font-bold text-[#016E01] truncate">
                  "{analogy.analogyPhrase}"
                </div>
              </div>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FD7600]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Analogy Visual Deep Dive */}
      <div className="p-6 sm:p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header of Active Tab */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#016E01]/15 pb-4 mb-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#016E01] bg-[#016E01]/10 px-3 py-1 rounded-md mb-2 font-mono">
                Conceito Histórico: {current.historicalSubject}
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#016E01]">
                {current.title}
              </h4>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white font-bold bg-[#FD7600] px-3.5 py-1.5 rounded-xl shrink-0 shadow-xs">
              <Lightbulb className="w-4 h-4" />
              <span>Fixação Conceitual</span>
            </div>
          </div>

          {/* Core Explanation Box */}
          <div className="bg-[#FBFBFB] border-l-4 border-[#FD7600] p-5 sm:p-6 rounded-r-2xl mb-6 shadow-xs border-y border-r border-[#016E01]/10">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#016E01] mb-2 flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-[#FD7600]" />
              Explicação Didática da Metáfora
            </h5>
            <p className="text-base text-[#1A202C] leading-relaxed font-sans">
              {current.explanation}
            </p>
          </div>

          {/* Details and Structural Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {current.details.map((detail, idx) => (
              <div 
                key={idx}
                className="bg-[#FBFBFB] border-2 border-[#016E01]/15 rounded-2xl p-4 shadow-xs hover:border-[#FD7600] transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#016E01] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1A202C] leading-normal font-sans">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pedagogical Takeaway Box */}
          <div className="bg-[#016E01]/10 border border-[#016E01]/30 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#016E01] flex items-center justify-center shrink-0 text-white font-bold">
              🎓
            </div>
            <div className="text-xs text-[#016E01] leading-tight font-sans">
              <span className="font-bold text-[#016E01]">Objetivo de Aprendizagem do 8º Ano: </span>
              <span className="text-[#1A202C]">{current.pedagogicalTakeaway}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
