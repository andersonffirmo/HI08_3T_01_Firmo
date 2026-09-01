import React, { useState } from 'react';
import { THEORIES_COMPARISON } from '../data/historyContent';
import { Scale } from 'lucide-react';

export const TheoriesComparison: React.FC = () => {
  const [activeTheory, setActiveTheory] = useState<number>(0);

  return (
    <div id="theories-comparison-matrix" className="my-10 bg-white rounded-3xl border-2 border-[#016E01]/20 shadow-lg overflow-hidden">
      {/* Banner */}
      <div className="bg-[#016E01] text-[#FBFBFB] p-6 border-b-4 border-[#FD7600] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FD7600] bg-white/10 px-3 py-1 rounded-full mb-1">
            <Scale className="w-4 h-4 text-[#FD7600]" />
            <span>Matriz Comparativa do 8º Ano</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            As Quatro Grandes Correntes do Século XIX
          </h3>
          <p className="text-xs sm:text-sm text-[#FBFBFB]/90 mt-1 font-sans">
            Liberalismo, Socialismo Utópico, Socialismo Científico e Anarquismo: respostas diretas às transformações da industrialização.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {THEORIES_COMPARISON.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTheory(idx)}
              className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                activeTheory === idx
                  ? 'bg-[#FD7600] text-white shadow-md ring-2 ring-white'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Content */}
      <div className="p-6 sm:p-8 bg-[#FBFBFB]">
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border-2 border-[#016E01]/15">
            <thead>
              <tr className="bg-[#016E01] text-white text-xs uppercase font-mono tracking-wider">
                <th className="p-4 border-b border-white/20">Corrente Política</th>
                <th className="p-4 border-b border-white/20">Principais Autores</th>
                <th className="p-4 border-b border-white/20">Princípio Central</th>
                <th className="p-4 border-b border-white/20">Papel do Estado</th>
                <th className="p-4 border-b border-white/20">Propriedade Privada</th>
                <th className="p-4 border-b border-white/20">Método de Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#016E01]/10 text-xs text-[#1A202C] font-sans">
              {THEORIES_COMPARISON.map((theory, idx) => {
                const isSelected = activeTheory === idx;
                return (
                  <tr 
                    key={idx} 
                    onClick={() => setActiveTheory(idx)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#FD7600]/10 font-medium' : 'hover:bg-[#016E01]/5'
                    }`}
                  >
                    <td className="p-4 font-serif font-bold text-sm text-[#016E01]">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#016E01]/10 text-[#016E01] border border-[#016E01]/20 mb-1 block">
                        {theory.keyYear}
                      </span>
                      {theory.name}
                    </td>
                    <td className="p-4 font-bold text-[#FD7600]">{theory.authors}</td>
                    <td className="p-4 text-[#1A202C] leading-relaxed">{theory.corePrinciple}</td>
                    <td className="p-4 text-[#1A202C] leading-relaxed">{theory.viewOnState}</td>
                    <td className="p-4 text-[#1A202C] leading-relaxed">{theory.viewOnPrivateProperty}</td>
                    <td className="p-4 text-[#1A202C] leading-relaxed">{theory.transformationMethod}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile / Active Theory Highlight Card */}
        <div className="lg:hidden bg-white rounded-2xl p-5 border-2 border-[#016E01]/15 shadow-sm">
          {(() => {
            const current = THEORIES_COMPARISON[activeTheory];
            return (
              <div className="space-y-4 font-sans">
                <div className="border-b border-[#016E01]/10 pb-3">
                  <span className="inline-block text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#FD7600] text-white mb-1">
                    {current.keyYear}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#016E01]">
                    {current.name}
                  </h4>
                  <p className="text-xs font-bold text-[#FD7600]">
                    Autores: {current.authors}
                  </p>
                </div>

                <div>
                  <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#016E01]">
                    Princípio Central
                  </h5>
                  <p className="text-xs text-[#1A202C] mt-0.5 leading-relaxed">
                    {current.corePrinciple}
                  </p>
                </div>

                <div>
                  <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#016E01]">
                    Papel do Estado
                  </h5>
                  <p className="text-xs text-[#1A202C] mt-0.5 leading-relaxed">
                    {current.viewOnState}
                  </p>
                </div>

                <div>
                  <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#016E01]">
                    Propriedade Privada
                  </h5>
                  <p className="text-xs text-[#1A202C] mt-0.5 leading-relaxed">
                    {current.viewOnPrivateProperty}
                  </p>
                </div>

                <div>
                  <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#016E01]">
                    Método de Ação
                  </h5>
                  <p className="text-xs text-[#1A202C] mt-0.5 leading-relaxed">
                    {current.transformationMethod}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
