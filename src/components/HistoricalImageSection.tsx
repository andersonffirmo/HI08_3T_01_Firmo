import React, { useState } from 'react';
import factoryImg from '../assets/images/fabrica_textil_1850_1788300910868.jpg';
import { Eye, Info, Sparkles } from 'lucide-react';

interface Hotspot {
  id: number;
  top: string;
  left: string;
  title: string;
  description: string;
  tag: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    top: '55%',
    left: '32%',
    title: 'Crianças Operárias e Roupas Rasgadas',
    description: 'Meninos e meninas de 6 a 12 anos trabalhavam descalços em pisos escorregadios de óleo, amarrando fios partidos e respirando poeira de algodão tóxica.',
    tag: 'Trabalho Infantil (50%)'
  },
  {
    id: 2,
    top: '25%',
    left: '60%',
    title: 'Teares Mecânicos de Ferro Fundido & Eixos a Vapor',
    description: 'Centenas de correias girando a altíssima velocidade sem qualquer proteção ou grade metálica, provocando amputações e mortes frequentes.',
    tag: 'Insegurança Industrial'
  },
  {
    id: 3,
    top: '18%',
    left: '20%',
    title: 'Atmosfera Densa de Fumaça, Fuligem e Calor',
    description: 'Janelas mantidas fechadas para preservar a umidade dos fios de algodão, gerando calor asfixiante e propagação acelerada de tuberculose.',
    tag: 'Insalubridade Urbana'
  },
  {
    id: 4,
    top: '42%',
    left: '80%',
    title: 'Vigilância Rígida & O Relógio Fabril',
    description: 'Capatazes armados com varas de couro aplicavam multas e castigos físicos por atrasos de minutos ou conversas entre operários.',
    tag: 'Disciplina Tirânica'
  }
];

export const HistoricalImageSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);
  const [showHotspots, setShowHotspots] = useState(true);

  return (
    <div id="historical-painting-viewer" className="my-10 bg-[#016E01] text-[#FBFBFB] rounded-3xl border-4 border-[#FD7600] shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-[#016E01] border-b border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FD7600] bg-white/10 px-3 py-1 rounded-full mb-1">
            <Sparkles className="w-4 h-4 text-[#FD7600]" />
            <span>Iconografia Realista do Século XIX</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            A Fábrica Têxtil Inglesa (c. 1850)
          </h3>
          <p className="text-xs sm:text-sm text-[#FBFBFB]/90 mt-1 font-sans">
            "Cena dramática em uma fábrica têxtil inglesa de 1850, com crianças operárias de rostos sujos de carvão, iluminação de fumaça e faíscas, estilo pintura histórica realista."
          </p>
        </div>

        <button
          onClick={() => setShowHotspots(!showHotspots)}
          className="self-start md:self-auto flex items-center gap-2 bg-[#FD7600] hover:bg-[#e06800] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md"
        >
          <Eye className="w-4 h-4" />
          <span>{showHotspots ? 'Ocultar Marcadores' : 'Exibir Pontos de Análise'}</span>
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative bg-black group overflow-hidden">
        <img
          src={factoryImg}
          alt="Pintura histórica realista de uma fábrica têxtil inglesa de 1850 com crianças operárias"
          className="w-full h-auto max-h-[580px] object-cover mx-auto select-none brightness-95 contrast-105"
          referrerPolicy="no-referrer"
        />

        {/* Interactive Hotspots */}
        {showHotspots && (
          <div className="absolute inset-0 pointer-events-none">
            {HOTSPOTS.map((h) => {
              const isSelected = activeHotspot?.id === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(h)}
                  style={{ top: h.top, left: h.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer p-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#FD7600] text-white scale-125 ring-4 ring-white shadow-xl'
                      : 'bg-[#016E01]/90 text-white hover:scale-110 ring-2 ring-[#FD7600] shadow-md'
                  }`}
                  aria-label={`Ver detalhe: ${h.title}`}
                >
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold font-mono">
                    {h.id}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Legend Overlay at Bottom */}
        <div className="absolute bottom-3 left-3 bg-[#016E01]/90 backdrop-blur-xs border border-white/30 text-[11px] text-white px-3.5 py-2 rounded-xl flex items-center gap-2 pointer-events-none shadow-md">
          <Info className="w-4 h-4 text-[#FD7600]" />
          <span>Clique nos marcadores numerados sobre a imagem para examinar os detalhes históricos</span>
        </div>
      </div>

      {/* Active Hotspot Detail Card */}
      {activeHotspot && (
        <div className="p-6 bg-[#016E01] border-t border-white/20">
          <div className="bg-[#FBFBFB] text-[#1A202C] border-2 border-[#FD7600] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md font-sans">
            <div className="flex items-start gap-3.5">
              <span className="w-9 h-9 rounded-xl bg-[#FD7600] text-white font-black font-mono flex items-center justify-center shrink-0 text-sm shadow-xs">
                {activeHotspot.id}
              </span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#016E01] font-bold bg-[#016E01]/10 px-2 py-0.5 rounded-md">
                  {activeHotspot.tag}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#016E01] mt-1">
                  {activeHotspot.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#1A202C] mt-1 max-w-2xl leading-relaxed">
                  {activeHotspot.description}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 shrink-0">
              {HOTSPOTS.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(h)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl border-2 font-mono font-bold transition-all cursor-pointer ${
                    activeHotspot.id === h.id
                      ? 'bg-[#FD7600] text-white border-[#FD7600]'
                      : 'bg-white text-[#016E01] border-[#016E01]/20 hover:border-[#FD7600]'
                  }`}
                >
                  Ponto {h.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
