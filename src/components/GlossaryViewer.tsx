import React, { useState } from 'react';
import { GLOSSARY_ITEMS } from '../data/historyContent';
import { BookMarked, Search } from 'lucide-react';

export const GlossaryViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = GLOSSARY_ITEMS.filter(g =>
    g.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="glossary-module" className="my-8 bg-white rounded-3xl border-2 border-[#016E01]/20 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#016E01]/15 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#FD7600] rounded-xl text-white shadow-xs">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#016E01]">
              Glossário de Termos Históricos & Conceitos
            </h4>
            <p className="text-xs text-[#1A202C]/70 font-sans">
              Vocabulário fundamental do Capítulo 07 para consulta rápida e fixação
            </p>
          </div>
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#016E01]/50" />
          <input
            type="text"
            placeholder="Pesquisar termo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 bg-[#FBFBFB] rounded-xl border border-[#016E01]/20 outline-none focus:border-[#FD7600] text-[#1A202C]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FBFBFB] border-2 border-[#016E01]/10 rounded-2xl p-4 hover:border-[#FD7600] hover:bg-white transition-all shadow-xs"
          >
            <h5 className="font-serif font-bold text-sm text-[#016E01] flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FD7600]" />
              {item.term}
            </h5>
            <p className="text-xs text-[#1A202C]/90 leading-relaxed">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
