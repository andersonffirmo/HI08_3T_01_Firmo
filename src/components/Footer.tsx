import React from 'react';
import { EscolaLogo } from './EscolaLogo';
import { SCHOOL_INFO } from '../data/historyContent';
import { 
  GraduationCap, 
  UserCheck, 
  MapPin,
  ArrowUp,
  Award,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-academic-footer" className="bg-[#016E01] text-[#FBFBFB] border-t-4 border-[#FD7600] mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/20">
          {/* Col 1: Institutional Brand & Logo */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-sm">
              <EscolaLogo size="sm" />
            </div>
            <p className="text-xs text-[#FBFBFB]/90 leading-relaxed font-sans">
              Instituição de ensino comprometida com o pensamento crítico, a formação cidadã e a excelência pedagógica.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C9A84C] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#FD7600]" />
              <span>Campus Ipiranga • São Paulo - SP</span>
            </div>
          </div>

          {/* Col 2: Academic Program & Curricular Info */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FD7600] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#FD7600]" />
              <span>Dados Curriculares</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FBFBFB]/90 font-sans">
              <li><strong>Disciplina:</strong> {SCHOOL_INFO.discipline}</li>
              <li><strong>Segmento:</strong> {SCHOOL_INFO.grade}</li>
              <li><strong>Unidade:</strong> {SCHOOL_INFO.chapter}</li>
              <li><strong>Competências:</strong> BNCC EF08HI01 a EF08HI04</li>
              <li><strong>Tema:</strong> O Pensamento Político e Social no Século XIX</li>
            </ul>
          </div>

          {/* Col 3: Teacher / Docência */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FD7600] uppercase tracking-wider flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[#FD7600]" />
              <span>Docência & Autoria</span>
            </h4>
            <div className="bg-black/20 p-4 rounded-xl border border-[#C9A84C]/40 space-y-1">
              <div className="font-serif font-bold text-base text-white flex items-center gap-2">
                <span>{SCHOOL_INFO.teacher}</span>
                <span className="text-xs font-mono text-[#C9A84C]">✍️</span>
              </div>
              <div className="text-xs text-[#FD7600] font-semibold">
                Professor Titular de História
              </div>
              <p className="text-[11px] text-[#FBFBFB]/80 pt-1 leading-tight font-sans">
                Especialista no Ensino de História Contemporânea e Formação Cidadã no Ensino Fundamental II.
              </p>
            </div>
          </div>

          {/* Col 4: Quick Actions & Back to Top */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FD7600] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#FD7600]" />
              <span>Recursos Pedagógicos</span>
            </h4>
            <p className="text-xs text-[#FBFBFB]/90 leading-relaxed font-sans">
              Material completo com 25 seções didáticas, 4 indicadores históricos (16h, 50%, ×6, 70%), 3 analogias obrigatórias e cronologia de 1776 a 1871.
            </p>
            <button
              onClick={scrollToTop}
              className="w-full bg-[#FD7600] hover:bg-[#e06800] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Voltar ao Topo da Página</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBFBFB]/80 font-sans">
          <div>
            © {new Date().getFullYear()} <strong>{SCHOOL_INFO.name}</strong> • Material Didático do <strong>{SCHOOL_INFO.teacher}</strong>.
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FD7600]" />
            <span className="text-[#FBFBFB]">Laranja (#FD7600) • Verde (#016E01) • Ouro (#C9A84C)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
