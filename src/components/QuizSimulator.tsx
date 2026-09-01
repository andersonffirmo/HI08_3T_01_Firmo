import React, { useState } from 'react';
import { QUIZ_QUESTIONS, SCHOOL_INFO } from '../data/historyContent';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  Sparkles, 
  GraduationCap, 
  FileCheck,
  Printer
} from 'lucide-react';
import { EscolaLogo } from './EscolaLogo';

export const QuizSimulator: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    if (score >= 4) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setShowCertificate(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isComplete = answeredCount === QUIZ_QUESTIONS.length;
  const score = calculateScore();

  return (
    <div id="interactive-quiz-module" className="my-10 bg-white rounded-3xl border-2 border-[#016E01]/20 shadow-xl overflow-hidden">
      {/* Quiz Header */}
      <div className="bg-[#016E01] text-[#FBFBFB] p-6 border-b-4 border-[#FD7600]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FD7600] bg-white/10 px-3 py-1 rounded-full mb-1">
              <GraduationCap className="w-4 h-4 text-[#FD7600]" />
              <span>Avaliação Formativa Interativa • 8º Ano</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Laboratório de Fixação Conceitual
            </h3>
            <p className="text-xs sm:text-sm text-[#FBFBFB]/90 mt-1 font-sans">
              Capítulo 07 • Avalie seu aprendizado sobre as consequências da industrialização, teorias políticas e a Comuna de Paris.
            </p>
          </div>

          <div className="bg-[#FD7600] px-4 py-2 rounded-2xl text-center self-start sm:self-auto shadow-md">
            <span className="text-[10px] uppercase tracking-wider text-white font-bold block">Progresso</span>
            <span className="font-mono font-black text-sm text-white">{answeredCount} / {QUIZ_QUESTIONS.length} respondidas</span>
          </div>
        </div>
      </div>

      {/* Quiz Questions List */}
      <div className="p-6 sm:p-8 bg-[#FBFBFB] space-y-6">
        {QUIZ_QUESTIONS.map((q, qIdx) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isCorrect = submitted && selectedAnswers[q.id] === q.correctIndex;

          return (
            <div
              key={q.id}
              id={`quiz-question-card-${q.id}`}
              className={`bg-white rounded-2xl p-5 sm:p-6 border-2 transition-all shadow-xs ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border-rose-400 ring-2 ring-rose-400/20'
                  : 'border-[#016E01]/15 hover:border-[#FD7600]'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#FD7600] text-white font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {qIdx + 1}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#016E01] leading-snug">
                      {q.question}
                    </h4>
                    <span className="inline-block text-[11px] text-[#1A202C]/70 font-semibold mt-1 bg-[#016E01]/5 px-2.5 py-0.5 rounded-md">
                      Habilidade: {q.skillEvaluated}
                    </span>
                  </div>
                </div>

                {submitted && (
                  <span className="shrink-0">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correto
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                        <XCircle className="w-3.5 h-3.5" /> Incorreto
                      </span>
                    )}
                  </span>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2.5 pl-0 sm:pl-11">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[q.id] === optIdx;
                  const isThisOptionCorrect = optIdx === q.correctIndex;

                  let optionStyle = 'bg-[#FBFBFB] border-[#016E01]/15 hover:bg-[#FD7600]/10 text-[#1A202C]';
                  if (isSelected) {
                    optionStyle = 'bg-[#016E01] text-white border-[#016E01] font-semibold';
                  }

                  if (submitted) {
                    if (isThisOptionCorrect) {
                      optionStyle = 'bg-emerald-100 text-emerald-900 border-emerald-500 font-bold';
                    } else if (isSelected && !isThisOptionCorrect) {
                      optionStyle = 'bg-rose-100 text-rose-900 border-rose-400 line-through';
                    } else {
                      optionStyle = 'bg-gray-50 text-gray-500 border-gray-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      disabled={submitted}
                      className={`w-full text-left p-3.5 rounded-xl border-2 text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                    >
                      <span className={`w-5 h-5 rounded-lg border font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'border-white bg-[#FD7600] text-white' : 'border-[#016E01]/30 bg-white text-[#016E01]'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-relaxed font-sans">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {submitted && (
                <div className="mt-4 pt-3 border-t border-[#016E01]/10 pl-0 sm:pl-11">
                  <div className="bg-[#016E01]/10 border-l-4 border-[#016E01] p-3.5 rounded-r-xl text-xs text-[#1A202C]">
                    <span className="font-bold text-[#016E01] block mb-1">
                      💡 Comentário Pedagógico do Prof. Anderson Firmo:
                    </span>
                    {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="p-6 bg-white border-t border-[#016E01]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {!submitted ? (
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleSubmit}
              disabled={!isComplete}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isComplete
                  ? 'bg-[#FD7600] hover:bg-[#e06800] text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>Concluir e Corrigir Avaliação</span>
            </button>
            {!isComplete && (
              <span className="text-xs text-[#1A202C]/60 font-sans">
                Responda a todas as 5 questões para ver o resultado.
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FD7600] text-white font-mono font-black text-xl flex items-center justify-center shadow-md">
                {score}/{QUIZ_QUESTIONS.length}
              </div>
              <div>
                <h5 className="font-serif font-bold text-base text-[#016E01]">
                  {score >= 4 ? 'Excelente Desempenho!' : score >= 3 ? 'Bom Desempenho!' : 'Revisão Recomendada'}
                </h5>
                <p className="text-xs text-[#1A202C]/70 font-sans">
                  Você acertou {Math.round((score / QUIZ_QUESTIONS.length) * 100)}% das questões do Capítulo 07.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowCertificate(true)}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-[#FD7600] hover:bg-[#e06800] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Gerar Certificado</span>
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2.5 bg-white border border-[#016E01]/30 text-[#016E01] hover:bg-[#016E01]/5 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div 
          id="certificate-modal-overlay"
          className="fixed inset-0 z-50 bg-[#1A202C]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowCertificate(false)}
        >
          <div 
            id="certificate-paper"
            className="bg-[#FBFBFB] border-8 border-[#016E01] max-w-2xl w-full p-6 sm:p-10 rounded-3xl shadow-2xl relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Inner Golden Border */}
            <div className="border-2 border-[#FD7600] p-6 sm:p-8 rounded-2xl bg-white">
              <EscolaLogo size="md" className="justify-center mb-4" />

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FD7600] font-bold block mb-1">
                Certificado de Aproveitamento Acadêmico
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#016E01] mb-4">
                História • 8º Ano
              </h3>

              <p className="text-xs sm:text-sm text-[#1A202C] mb-6 max-w-md mx-auto font-sans">
                Certificamos que o(a) estudante concluiu com êxito os estudos e atividades do <strong>Capítulo 07: O Pensamento Político e Social no Século XIX</strong> sob a orientação do <strong>Prof. Anderson Firmo</strong>.
              </p>

              {/* Student Name Input */}
              <div className="max-w-xs mx-auto mb-6">
                <label className="text-[11px] font-semibold text-[#016E01] block mb-1">
                  Nome do(a) Aluno(a):
                </label>
                <input
                  type="text"
                  placeholder="Digite seu nome completo..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full text-center text-sm font-serif font-bold text-[#016E01] border-b-2 border-[#FD7600] bg-transparent outline-none py-1 focus:border-[#016E01]"
                />
              </div>

              {/* Final Score Badge */}
              <div className="inline-flex items-center gap-2 bg-[#016E01] text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#FD7600]" />
                <span>Pontuação Obtida: {score} de {QUIZ_QUESTIONS.length} acertos ({Math.round((score / QUIZ_QUESTIONS.length) * 100)}%)</span>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#016E01]/15 text-xs text-[#1A202C]">
                <div>
                  <div className="font-serif font-bold text-[#016E01] border-b border-[#016E01]/30 pb-1 max-w-[160px] mx-auto">
                    {SCHOOL_INFO.teacher}
                  </div>
                  <span className="text-[10px] text-[#1A202C]/70">Docente de História</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-[#016E01] border-b border-[#016E01]/30 pb-1 max-w-[160px] mx-auto">
                    {SCHOOL_INFO.name}
                  </div>
                  <span className="text-[10px] text-[#1A202C]/70">Coordenação Pedagógica</span>
                </div>
              </div>

              {/* Close & Print Buttons */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-[#FD7600] hover:bg-[#e06800] text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir Certificado</span>
                </button>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="px-4 py-2 bg-gray-200 text-[#1A202C] text-xs font-bold rounded-xl hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
