export interface SectionData {
  id: number;
  slug: string;
  number: string; // e.g. "01", "02", ... "25"
  title: string;
  category: 'Capa' | 'Contexto' | 'Estatísticas' | 'Cotidiano' | 'Analogias' | 'Movimentos' | 'Teorias' | 'Comuna' | 'Legado' | 'Atividades';
  summary: string;
  content: string[];
  keyHighlight?: string;
  quote?: {
    text: string;
    author: string;
    source: string;
  };
  keyPoints?: string[];
  didYouKnow?: string;
  pedagogicalPrompt?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  thinkerOrEvent: string;
  category: 'Liberalismo' | 'Socialismo Utópico' | 'Socialismo Científico' | 'Anarquismo' | 'Comuna de Paris';
  description: string;
  impact: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  metric: string;
  label: string;
  description: string;
  comparison: string;
  historicalContext: string;
  icon: string;
}

export interface AnalogyItem {
  id: string;
  title: string;
  analogyPhrase: string;
  historicalSubject: string;
  explanation: string;
  pedagogicalTakeaway: string;
  icon: string;
  details: string[];
}

export interface TheoryComparisonItem {
  name: string;
  authors: string;
  keyYear: string;
  corePrinciple: string;
  viewOnState: string;
  viewOnPrivateProperty: string;
  transformationMethod: string;
  badgeColor: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  skillEvaluated: string;
}
