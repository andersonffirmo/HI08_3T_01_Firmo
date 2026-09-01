import React, { useState } from 'react';
import { DASHBOARD_STATS } from '../data/historyContent';
import { Clock, Users, TrendingUp, AlertTriangle, ArrowRightLeft, Info, HelpCircle } from 'lucide-react';

export const DashboardStats: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(true);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#FD7600]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#FD7600]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#FD7600]" />;
      case 'AlertTriangle':
      default:
        return <AlertTriangle className="w-6 h-6 text-[#FD7600]" />;
    }
  };

  return (
    <div id="dashboard-stats-module" className="bg-[#016E01] text-[#FBFBFB] rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-[#FD7600] my-8">
      {/* Header of Dashboard */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/20 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FD7600] px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-xs mb-2">
            <Info className="w-3.5 h-3.5" />
            <span>Dados Históricos Oficiais (1780 – 1850)</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Dashboard da Realidade Operária
          </h3>
          <p className="text-sm text-[#FBFBFB]/90 mt-1 max-w-2xl font-sans">
            Quatro números estarrecedores que explicam o surgimento imediato das lutas sociais, sindicais e barricadas no século XIX.
          </p>
        </div>

        {/* Toggle Mode */}
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="self-start md:self-auto flex items-center gap-2 bg-[#FD7600] hover:bg-[#e06800] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>{showComparison ? 'Ocultar Comparativo CLT' : 'Comparar com CLT / Hoje'}</span>
        </button>
      </div>

      {/* 4 Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {DASHBOARD_STATS.map((stat, idx) => (
          <div
            key={idx}
            id={`stat-card-${idx}`}
            onClick={() => setActiveCard(activeCard === idx ? null : idx)}
            className={`bg-[#FBFBFB] text-[#1A202C] border-2 rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden group shadow-md ${
              activeCard === idx 
                ? 'border-[#FD7600] ring-4 ring-[#FD7600]/30 -translate-y-1' 
                : 'border-[#016E01]/20 hover:border-[#FD7600]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 bg-[#FD7600]/10 rounded-xl">
                  {getIcon(stat.icon)}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#016E01] font-bold bg-[#016E01]/10 px-2 py-0.5 rounded-md">
                  Indicador {idx + 1}
                </span>
              </div>

              {/* Huge Stat Display */}
              <div className="font-mono text-4xl sm:text-5xl font-black text-[#FD7600] tracking-tight mb-1">
                {stat.value}
              </div>

              <div className="text-base font-bold text-[#016E01] leading-snug font-serif">
                {stat.metric}
              </div>
              <div className="text-xs text-[#1A202C]/70 font-semibold mb-3">
                {stat.label}
              </div>

              <p className="text-xs text-[#1A202C]/90 leading-relaxed font-sans">
                {stat.description}
              </p>
            </div>

            {/* Contemporary Comparison Badge */}
            {showComparison && (
              <div className="mt-4 pt-3 border-t border-[#016E01]/10 bg-[#016E01]/5 -mx-5 -mb-5 p-4 rounded-b-2xl">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FD7600] uppercase mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#FD7600]" />
                  <span>Conquista / CLT Hoje:</span>
                </div>
                <p className="text-[11px] text-[#1A202C] leading-tight font-medium">
                  {stat.comparison}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pedagogical Note */}
      <div className="mt-6 bg-black/20 border border-[#C9A84C]/30 rounded-2xl p-4 flex items-start gap-3 text-xs text-[#FBFBFB]">
        <HelpCircle className="w-5 h-5 text-[#FD7600] shrink-0 mt-0.5" />
        <div className="font-sans">
          <span className="font-bold text-[#FD7600]">Reflexão do 8º Ano: </span>
          Observe como esses quatro indicadores interagem: as 16 horas de trabalho em condições de 70% de insalubridade, sustentadas por 50% de mulheres e crianças em cidades que cresciam 6 vezes sem saneamento, criaram a urgência imediata para as leis trabalhistas e teorias políticas.
        </div>
      </div>
    </div>
  );
};
