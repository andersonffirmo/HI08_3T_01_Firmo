import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/historyContent';
import { BookOpen, Flame, HeartHandshake, Globe, ShieldAlert, Calendar, ArrowRight, Check } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(0);

  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-white" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-white" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-white" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-white" />;
      case 'ShieldAlert':
      default:
        return <ShieldAlert className="w-5 h-5 text-white" />;
    }
  };

  const activeEvent = TIMELINE_EVENTS[selectedYearIndex];

  return (
    <div id="timeline-interactive-module" className="my-10 bg-white rounded-3xl border-2 border-[#016E01]/20 shadow-lg p-6 sm:p-8">
      {/* Module Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#016E01]/15 pb-5 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#016E01] bg-[#016E01]/10 px-3 py-1 rounded-full mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#FD7600]" />
            <span>Cronologia Obrigatória (1776 – 1871)</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#016E01]">
            Linha do Tempo das Ideias Políticas
          </h3>
          <p className="text-sm text-[#1A202C]/70 mt-1 font-sans">
            As cinco datas cruciais que marcaram a evolução das respostas políticas às mudanças industriais.
          </p>
        </div>

        <div className="text-xs font-mono font-bold text-white bg-[#FD7600] px-3.5 py-1.5 rounded-full self-start sm:self-auto shadow-xs">
          Capítulo 07 • 8º Ano
        </div>
      </div>

      {/* Horizontal Interactive Timeline Axis */}
      <div className="relative mb-10 px-2">
        {/* Connecting Line */}
        <div className="absolute top-6 left-6 right-6 h-1.5 bg-[#016E01]/15 -translate-y-1/2 z-0 hidden sm:block" />

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative z-10">
          {TIMELINE_EVENTS.map((item, idx) => {
            const isSelected = selectedYearIndex === idx;
            return (
              <button
                key={idx}
                id={`timeline-btn-${idx}`}
                onClick={() => setSelectedYearIndex(idx)}
                className={`p-3.5 rounded-2xl border-2 text-left sm:text-center transition-all cursor-pointer flex sm:flex-col items-center gap-3 relative ${
                  isSelected
                    ? 'bg-[#016E01] text-white border-[#FD7600] shadow-lg ring-4 ring-[#FD7600]/30'
                    : 'bg-[#FBFBFB] text-[#1A202C] border-[#016E01]/20 hover:border-[#FD7600] hover:bg-[#FD7600]/5'
                }`}
              >
                {/* Year Badge */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-sm shrink-0 border-2 transition-all ${
                  isSelected
                    ? 'bg-[#FD7600] text-white border-white shadow-md'
                    : 'bg-white text-[#016E01] border-[#016E01]/30'
                }`}>
                  {item.year}
                </div>

                <div className="min-w-0 flex-1 sm:w-full">
                  <div className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                    isSelected ? 'text-[#FD7600]' : 'text-[#016E01]'
                  }`}>
                    {item.category}
                  </div>
                  <div className="text-xs font-bold font-serif line-clamp-2 mt-0.5">
                    {item.thinkerOrEvent}
                  </div>
                </div>

                {isSelected && (
                  <span className="hidden sm:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-[#016E01]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Event Highlight Card */}
      <div className="bg-[#FBFBFB] border-2 border-[#016E01]/20 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#016E01]/10 pb-5 mb-5">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-[#FD7600] rounded-2xl shadow-md">
              {getEventIcon(activeEvent.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-black text-[#FD7600]">
                  {activeEvent.year}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider bg-[#016E01] text-white px-2.5 py-0.5 rounded-md font-mono">
                  {activeEvent.category}
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#016E01] mt-1">
                {activeEvent.title}
              </h4>
              <p className="text-xs font-semibold text-[#1A202C]/80">
                Protagonistas: <span className="font-bold text-[#016E01]">{activeEvent.thinkerOrEvent}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedYearIndex(prev => (prev > 0 ? prev - 1 : TIMELINE_EVENTS.length - 1))}
              className="px-3.5 py-2 bg-white border border-[#016E01]/20 rounded-xl text-xs font-bold text-[#016E01] hover:bg-[#016E01] hover:text-white transition-colors cursor-pointer"
            >
              ← Anterior
            </button>
            <button
              onClick={() => setSelectedYearIndex(prev => (prev < TIMELINE_EVENTS.length - 1 ? prev + 1 : 0))}
              className="px-3.5 py-2 bg-[#FD7600] text-white rounded-xl text-xs font-bold hover:bg-[#e06800] transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
            >
              <span>Próximo</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          <div className="bg-white p-5 rounded-2xl border-2 border-[#016E01]/10 shadow-xs">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#016E01] mb-2">
              Contexto & Conteúdo Histórico
            </h5>
            <p className="text-sm text-[#1A202C] leading-relaxed">
              {activeEvent.description}
            </p>
          </div>

          <div className="bg-[#016E01] text-white p-5 rounded-2xl border border-[#C9A84C]/30 shadow-xs">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FD7600] mb-2 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#FD7600]" />
              Impacto no Pensamento Social
            </h5>
            <p className="text-sm text-[#FBFBFB]/90 leading-relaxed">
              {activeEvent.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
