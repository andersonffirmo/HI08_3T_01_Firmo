import React, { useState } from 'react';
import { SectionData } from '../types';
import { 
  Quote, 
  Sparkles, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  Copy, 
  Check, 
  Lightbulb, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface SectionItemProps {
  section: SectionData;
  isBookmarked: boolean;
  onToggleBookmark: (id: number) => void;
  children?: React.ReactNode;
}

export const SectionItem: React.FC<SectionItemProps> = ({
  section,
  isBookmarked,
  onToggleBookmark,
  children
}) => {
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleCopyQuote = () => {
    if (section.quote) {
      navigator.clipboard?.writeText(`"${section.quote.text}" — ${section.quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Síntese de voz não suportada neste navegador.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = `${section.title}. ${section.summary}. ${section.content.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  return (
    <article
      id={`secao-${section.number}`}
      className="scroll-mt-24 my-8 bg-white rounded-2xl border-2 border-[#016E01]/20 shadow-sm overflow-hidden transition-all hover:border-[#FD7600]/60 hover:shadow-md"
    >
      {/* Section Header Banner with Brand Palette (#FBFBFB background, #FD7600 badges, #016E01 titles) */}
      <div className="bg-[#FBFBFB] border-b border-[#016E01]/15 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#FD7600] text-white font-mono font-black text-lg flex items-center justify-center shrink-0 shadow-sm">
            {section.number}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase font-mono tracking-wider font-bold text-[#016E01] bg-[#016E01]/10 px-2.5 py-0.5 rounded-md">
                Seção {section.number} de 25 • {section.category}
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#016E01] leading-tight">
              {section.title}
            </h2>
          </div>
        </div>

        {/* Section Utility Actions */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            onClick={handleToggleSpeech}
            id={`speech-btn-sec-${section.id}`}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
              isPlayingAudio
                ? 'bg-[#FD7600] text-white border-[#FD7600] shadow-sm animate-pulse'
                : 'bg-white text-[#016E01] border-[#016E01]/20 hover:bg-[#FD7600]/10 hover:border-[#FD7600]'
            }`}
            title="Ouvir leitura em voz alta"
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-[#FD7600]" />}
            <span>{isPlayingAudio ? 'Parar Áudio' : 'Ouvir'}</span>
          </button>

          <button
            onClick={() => onToggleBookmark(section.id)}
            id={`bookmark-btn-sec-${section.id}`}
            className={`p-2 rounded-xl text-xs border transition-all cursor-pointer ${
              isBookmarked
                ? 'bg-[#FD7600] text-white border-[#FD7600]'
                : 'bg-white text-[#016E01] border-[#016E01]/20 hover:bg-[#FD7600]/10 hover:border-[#FD7600]'
            }`}
            title={isBookmarked ? 'Remover dos favoritos' : 'Salvar seção'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white text-white' : 'text-[#016E01]'}`} />
          </button>
        </div>
      </div>

      {/* Section Summary Sub-headline */}
      <div className="px-6 sm:px-8 pt-5 pb-3 text-sm sm:text-base font-serif italic text-[#016E01] border-b border-[#016E01]/10 bg-gradient-to-r from-[#016E01]/5 to-transparent">
        "{section.summary}"
      </div>

      {/* Main Paragraphs (Inter font, #1A202C text) */}
      <div className="p-6 sm:p-8 space-y-4 text-sm sm:text-base text-[#1A202C] leading-relaxed font-sans">
        {section.content.map((paragraph, pIdx) => (
          <p key={pIdx} className="text-justify leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Embedded Children interactive component if present */}
        {children}

        {/* Key Highlight Banner with #FD7600 Accent */}
        {section.keyHighlight && (
          <div className="mt-6 bg-[#FD7600]/10 border-l-4 border-[#FD7600] p-4 rounded-r-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FD7600] mb-1">
              <Sparkles className="w-4 h-4 text-[#FD7600]" />
              <span>Destaque Pedagógico</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#1A202C]">
              {section.keyHighlight}
            </p>
          </div>
        )}

        {/* Primary Source Quote Box (#016E01 background, #C9A84C accents) */}
        {section.quote && (
          <div className="mt-6 bg-[#016E01] text-[#FBFBFB] rounded-2xl p-5 sm:p-6 border border-[#C9A84C]/40 relative shadow-sm">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C9A84C]/25 pointer-events-none" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#C9A84C] block mb-2">
              Fonte Histórica Primária / Documento de Época
            </span>
            <blockquote className="font-serif italic text-sm sm:text-base text-white mb-3 leading-relaxed">
              "{section.quote.text}"
            </blockquote>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-white/20 text-xs">
              <div>
                <span className="font-bold text-[#FD7600]">{section.quote.author}</span>
                <span className="text-[#FBFBFB]/80 ml-2">• {section.quote.source}</span>
              </div>
              <button
                onClick={handleCopyQuote}
                className="hover:text-[#FD7600] text-[11px] flex items-center gap-1 text-[#FBFBFB]/80 transition-colors cursor-pointer bg-white/10 px-2.5 py-1 rounded-md"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#FD7600]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar Citação'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Bullet Key Points */}
        {section.keyPoints && section.keyPoints.length > 0 && (
          <div className="mt-6 bg-[#FBFBFB] border-2 border-[#016E01]/15 rounded-xl p-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#016E01] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FD7600]" />
              Pontos-Chave para o Caderno do 8º Ano
            </h4>
            <ul className="space-y-2">
              {section.keyPoints.map((point, ptIdx) => (
                <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A202C]">
                  <ChevronRight className="w-4 h-4 text-[#FD7600] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* "Você Sabia?" Curiosidade Box */}
        {section.didYouKnow && (
          <div className="mt-6 bg-[#FD7600]/10 border border-[#FD7600]/30 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-[#1A202C]">
            <Lightbulb className="w-5 h-5 text-[#FD7600] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#FD7600]">Você sabia? </span>
              {section.didYouKnow}
            </div>
          </div>
        )}

        {/* Pedagogical Question Prompt */}
        {section.pedagogicalPrompt && (
          <div className="mt-6 bg-[#016E01]/10 border border-[#016E01]/30 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-[#016E01]">
            <HelpCircle className="w-5 h-5 text-[#016E01] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#016E01]">Pergunta para Debate em Sala: </span>
              <span className="text-[#1A202C]">{section.pedagogicalPrompt}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
