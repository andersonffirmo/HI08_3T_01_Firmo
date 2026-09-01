import { SectionData, TimelineEvent, StatItem, AnalogyItem, TheoryComparisonItem, QuizQuestion } from '../types';

export const SCHOOL_INFO = {
  name: "Escola Parque Ipiranga",
  grade: "8º Ano do Ensino Fundamental II",
  discipline: "História",
  chapter: "Capítulo 07",
  theme: "O Pensamento Político e Social no Século XIX",
  subtheme: "Da fábrica à barricada: as transformações radicais provocadas pela Revolução Industrial.",
  teacher: "Prof. Anderson Firmo",
  colors: {
    orange: "#FD7600", // Laranja Impacto (fundo logo, botões, destaques, hover)
    green: "#016E01",  // Verde Natureza (títulos, textos principais, bordas, rodapé)
    white: "#FBFBFB",  // Branco Neutro (fundos gerais, contraste)
    darkText: "#1A202C", // Texto Escuro (parágrafos e descrições)
    gold: "#C9A84C",   // Ouro Histórico (detalhes, data, linha do tempo, assinatura)
  }
};

export const DASHBOARD_STATS: StatItem[] = [
  {
    value: "16h",
    metric: "Jornada Diária de Trabalho",
    label: "Sem descanso remunerado",
    description: "Operários, incluindo crianças a partir de 6 anos, cumpriam turnos extenuantes de 14 a 16 horas diárias em galpões fechados, 6 dias por semana.",
    comparison: "Hoje a CLT brasileira estabelece o teto de 8 horas diárias e 44 semanais.",
    historicalContext: "O tempo era estritamente regulado pelo relógio da fábrica e apitos a vapor, suprimindo o ritmo natural da vida humana.",
    icon: "Clock"
  },
  {
    value: "50%",
    metric: "Trabalho Infantil e Feminino",
    label: "Nas tecelagens britânicas",
    description: "Metade da mão de obra têxtil do século XIX era composta por mulheres e crianças, contratadas por receberem até 1/3 do salário masculino.",
    comparison: "No Brasil contemporâneo, o trabalho infantil é expressamente proibido pela Constituição e ECA.",
    historicalContext: "Crianças eram chamadas de 'scavengers' ou 'piecers' para rastejar sob teares em movimento e desembaraçar fios de algodão.",
    icon: "Users"
  },
  {
    value: "×6",
    metric: "Explosão Urbana (Manchester)",
    label: "Crescimento populacional e produtivo",
    description: "Manchester saltou de cerca de 75.000 habitantes na virada do século para mais de 300.000 em poucas décadas com a atração fabril.",
    comparison: "A migração em massa criou a primeira metrópole industrial do planeta (apelidada de 'Cottonopolis').",
    historicalContext: "O êxodo rural acelerado pelos cercamentos das terras (enclosures) despejou milhões sem terras diretamente nas fábricas.",
    icon: "TrendingUp"
  },
  {
    value: "70%",
    metric: "Vulnerabilidade & Insalubridade",
    label: "Mortalidade e ausência de saneamento",
    description: "Nos bairros proletários ingleses (slums), até 70% das crianças faleciam antes dos 5 anos devido a epidemias de cólera, tifo e subnutrição.",
    comparison: "A expectativa média de vida de um trabalhador em Manchester nos anos 1840 era de apenas 17 a 19 anos.",
    historicalContext: "Famílias inteiras dividiam porões úmidos sem ventilação, esgoto a céu aberto ou água potável encanada.",
    icon: "AlertTriangle"
  }
];

export const MANDATORY_ANALOGIES: AnalogyItem[] = [
  {
    id: "engrenagem-descartavel",
    title: "1. O Trabalhador como 'Engrenagem Descartável'",
    analogyPhrase: "Engrenagem Descartável",
    historicalSubject: "A Mecanização e a Desumanização do Trabalho Fabril",
    explanation: "Antes da indústria, o artesão dominava todas as etapas do ofício e usava ferramentas como extensões do seu corpo. Com a máquina a vapor e a divisão do trabalho, inverteu-se a lógica: o operário tornou-se um mero anexo da máquina. Se a engrenagem quebrava ou adoecia por exaustão, era imediatamente descartada e substituída por outra no vasto exército de reserva.",
    pedagogicalTakeaway: "Compreender o conceito de alienação do trabalho e perda da autonomia produtiva no século XIX.",
    icon: "Cog",
    details: [
      "Perda do controle do tempo: o relógio fabril e o vapor ditavam os movimentos humanos.",
      "Fragmentação da tarefa: o trabalhador repetia um único gesto mecânico milhares de vezes ao dia.",
      "Ausência total de indenização por acidentes de trabalho com engrenagens sem proteção."
    ]
  },
  {
    id: "navio-leme",
    title: "2. A Luta de Classes como 'O Navio e o Leme'",
    analogyPhrase: "O Navio e o Leme",
    historicalSubject: "A Estrutura Social entre Proletariado e Burguesia",
    explanation: "Pense na sociedade do século XIX como um imenso navio a vapor transatlântico: centenas de trabalhadores operam no calor sufocante das caldeiras e conveses inferiores para manter os motores girando. No entanto, quem segura o leme e desfruta dos camarotes de luxo é uma minoria que decide o rumo e se apropria de toda a carga de riqueza.",
    pedagogicalTakeaway: "Entender a contradição central descrita por Marx e Engels: quem produz toda a riqueza material não é quem controla os meios de produção nem as decisões do Estado.",
    icon: "Ship",
    details: [
      "A casa de máquinas: o proletariado cuja energia vital impulsiona o progresso material.",
      "O leme e o convés superior: a burguesia industrial e o Estado liberal que determinam as regras.",
      "A proposta socialista: que a tripulação tome o leme e democratize a navegação para o bem comum."
    ]
  },
  {
    id: "laboratorio-democracia",
    title: "3. A Comuna de Paris como 'Laboratório de Democracia Relâmpago'",
    analogyPhrase: "Laboratório de Democracia Relâmpago",
    historicalSubject: "Os 72 Dias da Comuna de Paris (1871)",
    explanation: "Durante apenas 72 dias sob cerco militar em 1871, os trabalhadores parisienses criaram uma experiência relâmpago que antecipou direitos do século XX: separaram a Igreja do Estado, decretaram que nenhum governante ganharia mais que um operário qualificado, tornaram as escolas laicas e gratuitas, e entregaram fábricas abandonadas à autogestão dos próprios operários.",
    pedagogicalTakeaway: "Ver a Comuna não como um episódio isolado de violência, mas como a primeira tentativa prática da história ocidental de construir um governo gerido diretamente pelas classes trabalhadoras.",
    icon: "Flame",
    details: [
      "Democracia direta e cargos revogáveis a qualquer momento pelos cidadãos.",
      "Pioneirismo na igualdade salarial e na participação ativa das mulheres (lideradas por Louise Michel).",
      "Separação radical entre religião e poder público mais de 30 anos antes da lei francesa de 1905."
    ]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1776",
    title: "A Riqueza das Nações & O Liberalismo Clássico",
    thinkerOrEvent: "Adam Smith",
    category: "Liberalismo",
    description: "Publicação da obra fundadora do liberalismo econômico. Defesa da liberdade individual de comércio, da 'mão invisível' do mercado e da não intervenção estatal (laissez-faire) na economia.",
    impact: "Tornou-se a base ideológica da burguesia industrial durante a 1ª Revolução Industrial.",
    iconName: "BookOpen"
  },
  {
    year: "1848",
    title: "A Primavera dos Povos & O Manifesto Comunista",
    thinkerOrEvent: "Karl Marx e Friedrich Engels",
    category: "Socialismo Científico",
    description: "Onda revolucionária varre a Europa continental. Lançamento do Manifesto com a célebre frase: 'A história de todas as sociedades até hoje é a história da luta de classes'.",
    impact: "Transição definitiva do debate social da filantropia para a organização política revolucionária do proletariado.",
    iconName: "Flame"
  },
  {
    year: "1848",
    title: "As Experiências do Socialismo Utópico",
    thinkerOrEvent: "Robert Owen, Saint-Simon e Charles Fourier",
    category: "Socialismo Utópico",
    description: "Tentativas de reformar a sociedade através do exemplo moral: cooperativas de New Lanark (redução de jornada para 10h, escolas infantis) e os Falanstérios de Fourier.",
    impact: "Demonstrou que era possível produzir com dignidade humana, mas esbarrou na recusa da burguesia em abrir mão do lucro voluntariamente.",
    iconName: "HeartHandshake"
  },
  {
    year: "1864",
    title: "Fundação da 1ª Internacional (AIT)",
    thinkerOrEvent: "Associação Internacional dos Trabalhadores (Marx e Bakunin)",
    category: "Anarquismo",
    description: "Reunião em Londres de operários ingleses, franceses, alemães e italianos. Consolidação do anarquismo coletivista de Bakunin e seu embate teórico com o socialismo marxista.",
    impact: "Criação de redes sindicais transnacionais e internacionalização da solidariedade operária.",
    iconName: "Globe"
  },
  {
    year: "1871",
    title: "A Comuna de Paris (72 Dias de Autogestão)",
    thinkerOrEvent: "Povo e Guardas Nacionais de Paris",
    category: "Comuna de Paris",
    description: "Após a derrota na Guerra Franco-Prussiana, o povo parisiense recusa a rendição e estabelece o primeiro governo popular e operário da história contemporânea.",
    impact: "Inspirou movimentos sociais em escala global e culminou no massacre da 'Semana Sangrenta' com 20.000 mortos.",
    iconName: "ShieldAlert"
  }
];

export const THEORIES_COMPARISON: TheoryComparisonItem[] = [
  {
    name: "Liberalismo Clássico",
    authors: "Adam Smith, David Ricardo, Thomas Malthus",
    keyYear: "1776 em diante",
    corePrinciple: "A busca pelo interesse próprio individual gera riqueza coletiva. Mercado autorregulado pela oferta e procura.",
    viewOnState: "Estado mínimo (Laissez-faire): atua apenas na segurança, justiça e defesa da propriedade privada.",
    viewOnPrivateProperty: "Sagrada, inviolável e motor indiscutível do progresso humano.",
    transformationMethod: "Livre concorrência, acumulação de capital e contratos individuais entre patrão e empregado.",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300"
  },
  {
    name: "Socialismo Utópico",
    authors: "Robert Owen, Saint-Simon, Charles Fourier",
    keyYear: "Início do Séc. XIX (1820-1848)",
    corePrinciple: "Harmonia social através da cooperação voluntária, filantropia empresarial e comunidades modelo.",
    viewOnState: "O Estado deve ser reformado pacificamente ou gerido por conselhos de industriais, cientistas e operários.",
    viewOnPrivateProperty: "Crítica aos excessos do lucro; defesa do cooperativismo e partilha comunitária.",
    transformationMethod: "Criação de vilas operárias modelo (New Lanark), falanstérios e apelo à boa vontade dos ricos.",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
  },
  {
    name: "Socialismo Científico (Marxismo)",
    authors: "Karl Marx e Friedrich Engels",
    keyYear: "1848 (Manifesto Comunista) / 1867 (O Capital)",
    corePrinciple: "Materialismo histórico: a economia molda a história. Luta de classes entre burguesia e proletariado pela mais-valia.",
    viewOnState: "O Estado burguês é comitê da classe dominante. O proletariado deve tomá-lo temporariamente para construir o socialismo.",
    viewOnPrivateProperty: "Abolição da propriedade privada dos meios de produção (fábricas, terras, máquinas).",
    transformationMethod: "Revolução armada do proletariado, transição socialista e eliminação final das classes (Comunismo).",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300"
  },
  {
    name: "Anarquismo",
    authors: "Mikhail Bakunin, Pierre-Joseph Proudhon, Piotr Kropotkin",
    keyYear: "1840 (Proudhon) / 1864 (AIT / Bakunin)",
    corePrinciple: "'A propriedade é um roubo'. Toda autoridade imposta, seja estatal, religiosa ou econômica, gera opressão.",
    viewOnState: "Abolição imediata e total do Estado. Nenhuma ditadura do proletariado é aceita, pois todo poder corrompe.",
    viewOnPrivateProperty: "Substituição por posse cooperativa, livre associação de produtores e apoio mútuo.",
    transformationMethod: "Ação direta, greve geral insurrecional e autogestão comunitária sem governantes.",
    badgeColor: "bg-slate-200 text-slate-900 border-slate-400"
  }
];

export const SECTIONS_25_DATA: SectionData[] = [
  {
    id: 1,
    slug: "capa-identificacao",
    number: "01",
    category: "Capa",
    title: "Capa Oficial & Identificação Acadêmica",
    summary: "Abertura oficial do material didático estruturado para o 8º Ano do Ensino Fundamental II sob a regência do Prof. Anderson Firmo na Escola Parque Ipiranga.",
    content: [
      "Bem-vindo ao Capítulo 07 de História do 8º Ano. Neste módulo interativo, investigaremos um dos períodos mais transformadores da humanidade: o Século XIX, quando o surgimento das fábricas a vapor remodelou cidades, famílias, leis e ideologias.",
      "Analise com atenção os dados, as fontes históricas e os esquemas visuais para compreender como a luta por dignidade operária moldou os direitos humanos e trabalhistas que possuímos até os dias de hoje."
    ],
    keyHighlight: "Escola Parque Ipiranga • 8º Ano • Capítulo 07 • História • Prof. Anderson Firmo",
    quote: {
      text: "A história da humanidade não é feita apenas de datas e reis, mas das mãos anônimas que ergueram as cidades e giraram os motores do mundo.",
      author: "Prof. Anderson Firmo",
      source: "Orientação Didática - Escola Parque Ipiranga"
    },
    keyPoints: [
      "Tema: O Pensamento Político e Social no Século XIX",
      "Subtema: Da fábrica à barricada: como a Revolução Industrial transformou a política do mundo",
      "Metodologia: Análise de fontes primárias, estatísticas históricas, matrizes conceituais e analogias pedagógicas"
    ]
  },
  {
    id: 2,
    slug: "introducao-pedagogica",
    number: "02",
    category: "Contexto",
    title: "Uma Breve Pincelada: A Máquina e as Mudanças Radicais",
    summary: "Uma rápida pincelada sobre a máquina a vapor para ir direto ao que interessa: o impacto humano, social e político sem precedentes que ela desencadeou.",
    content: [
      "A Revolução Industrial inglesa (século XVIII-XIX) pode ser resumida tecnologicamente em uma breve pincelada: a substituição da força humana e animal pela energia a vapor e pelos teares mecânicos de ferro fundido.",
      "Contudo, o ponto crucial não foram as máquinas em si, mas as mudanças devastadoras e imediatas que elas provocaram na sociedade: o surgimento de duas novas classes sociais antagônicas (a burguesia industrial e o proletariado), a migração em massa para cidades sem saneamento, a destruição do ritmo familiar e o nascimento das lutas políticas por direitos trabalhistas."
    ],
    keyHighlight: "Mais que uma mudança tecnológica, a industrialização provocou uma revolução total na vida social, política e jurídica da humanidade.",
    quote: {
      text: "Nas oficinas antigas, os homens utilizavam ferramentas; na grande fábrica moderna, os operários servem às máquinas.",
      author: "Friedrich Engels",
      source: "A Situação da Classe Trabalhadora na Inglaterra (1845)"
    },
    keyPoints: [
      "A tecnologia em resumo: carvão mineral, vapor e teares mecânicos multiplicando a produção.",
      "As mudanças diretas: nascimento do proletariado fabril e perda do controle sobre o próprio tempo de vida.",
      "A nova divisão social: donos das fábricas (burguesia) versus assalariados que vendem sua força de trabalho (proletariado)."
    ],
    didYouKnow: "A transformação foi tão veloz que, em menos de 50 anos, uma população majoritariamente rural e artesanal foi convertida em milhões de operários fabris urbanos subordinados à disciplina do relógio."
  },
  {
    id: 3,
    slug: "painel-indicadores",
    number: "03",
    category: "Estatísticas",
    title: "Painel de Indicadores Históricos (1850)",
    summary: "As quatro métricas fundamentais que revelam o custo humano por trás da prosperidade industrial britânica.",
    content: [
      "Para compreender a urgência das teorias políticas que nasceram no século XIX, é indispensável examinar a frieza dos números reais da Inglaterra vitoriana.",
      "Os dados a seguir demonstram por que intelectuais, médicos, clérigos e os próprios operários perceberam que a livre concorrência sem limites estava dizimando a população que produzia as riquezas do império."
    ],
    keyHighlight: "16h diárias • 50% de mão de obra infantil/feminina • População de Manchester multiplicada por 6 • 70% de óbitos infantis nos bairros operários.",
    keyPoints: [
      "16 Horas: Limite biológico ultrapassado diariamente por crianças e adultos.",
      "50% Mulheres e Crianças: Mão de obra barata, ágil e dócil aos castigos físicos.",
      "×6 Explosão Urbana: Manchester saltou de vila rural a metrópole fumegante.",
      "70% Vulnerabilidade: Sobrevivência infantil comprometida pela cólera e esgoto a céu aberto."
    ],
    pedagogicalPrompt: "Compare a jornada de 16 horas daquela época com a sua rotina escolar e de descanso atual. Quanto tempo restaria para estudar, brincar ou conviver com a família?"
  },
  {
    id: 4,
    slug: "galeria-impacto-visual",
    number: "04",
    category: "Contexto",
    title: "Galeria de Impacto Visual: A Fábrica Têxtil de 1850",
    summary: "Análise iconográfica realista da cena industrial: fuligem, teares gigantes e a fragilidade dos jovens operários.",
    content: [
      "A pintura histórica realista recria com precisão a atmosfera sufocante de uma fiação inglesa em meados de 1850. Observe os rostos marcados pela fuligem de carvão mineral e a densa névoa de partículas de algodão suspensas no ar.",
      "O ambiente das fábricas era propositalmente mantido úmido e quente para que os fios de algodão não se partissem, provocando doenças respiratórias crônicas como a bissinose em quase todos os tecelões."
    ],
    keyHighlight: "Pintura Histórica Realista • Fumaça, engrenagens expostas e trabalho infantil em 1850.",
    quote: {
      text: "Entrar em uma sala de fiação era como entrar em um forno infernal: o ruído ensurdecedor de 500 teares mecânicos impedia qualquer palavra, enquanto o pó de algodão sufocava os pulmões.",
      author: "Relatório da Comissão Parlamentar Britânica (Sadler Committee)",
      source: "Documentos Parlamentares Britânicos (1832)"
    },
    keyPoints: [
      "Engrenagens e correias de couro sem qualquer tipo de grade de proteção contra mutilações.",
      "Iluminação precária a gás ou lamparinas a óleo gerando constante risco de incêndios catastróficos.",
      "Presença de crianças pequenas encarregadas de limpar detritos debaixo dos eixos giratórios."
    ]
  },
  {
    id: 5,
    slug: "revolucao-manchester",
    number: "05",
    category: "Contexto",
    title: "A Primeira Revolução Industrial & O Fenômeno de Manchester",
    summary: "De pacata vila a 'Capital Mundial do Algodão' (Cottonopolis): como os cercamentos rurais inflaram as cidades industriais.",
    content: [
      "Entre 1780 e 1850, o norte da Inglaterra tornou-se o epicentro da transformação econômica global. Manchester passou de uma vila pacata de aproximadamente 75 mil habitantes para uma metrópole com mais de 300 mil pessoas.",
      "Esse crescimento explosivo só foi possível graças às Leis de Cercamento dos Campos (Enclosure Acts), que privatizaram as terras comunais na zona rural, forçando milhões de camponeses sem terra a migrarem para as cidades em busca de qualquer salário para não morrerem de fome."
    ],
    keyHighlight: "Os cercamentos de terras expulsaram os camponeses para os centros fabris, formando o primeiro proletariado urbano em massa.",
    keyPoints: [
      "Inovação tecnológica: o tear mecânico de Cartwright e a lançadeira volante de John Kay.",
      "Abundância de matérias-primas: ferro das montanhas inglesas, carvão mineral abundante e algodão colonial.",
      "Ferrovias pioneiras: a linha Liverpool-Manchester (1830) conectou o porto às chaminés de fiação."
    ]
  },
  {
    id: 6,
    slug: "cotidiano-fabril",
    number: "06",
    category: "Cotidiano",
    title: "O Cotidiano Fabril: Disciplina, Ruído e Perigo Extremo",
    summary: "A tirania do apito, as multas abusivas e a rotina sufocante de quem trocou o ar livre pelos galpões.",
    content: [
      "A vida do operário era rigidamente cronometrada. Os portões da fábrica fechavam pontualmente às 5h30 da manhã; qualquer atraso de dois minutos resultava na perda da metade da diária através de multas draconianas.",
      "Dentro dos galpões, não havia ventilação adequada. O barulho de centenas de martelos a vapor e lançadeiras automáticas deixava a maioria dos trabalhadores parcialmente surda antes dos 30 anos de idade."
    ],
    keyHighlight: "A disciplina fabril punia com multas salariais desde uma janela aberta até uma conversa entre companheiros de banco.",
    quote: {
      text: "Se um operário chegar atrasado 2 minutos: multa de meio xelim. Se falar com o colega ao lado: multa de um xelim. Se sentar para descansar: demissão sumária.",
      author: "Regulamento da Fábrica de Fiação Tyldesley",
      source: "Manchester (1823)"
    },
    keyPoints: [
      "Ambiente tóxico: inalação constante de monóxido de carbono das fornalhas e poeira têxtil.",
      "Fadiga extrema: operários adormeciam em pé e eram puxados pelas correias em alta velocidade.",
      "Ausência total de fins de semana, férias ou auxílio em caso de doença."
    ]
  },
  {
    id: 7,
    slug: "trabalho-infantil-feminino",
    number: "07",
    category: "Cotidiano",
    title: "O Trabalho Infantil e Feminino: A Exploração Sem Limites",
    summary: "Por que as fábricas preferiam crianças e mulheres e como orfanatos inteiros foram alugados aos industriais.",
    content: [
      "Nas tecelagens e nas minas de carvão, mais de 50% dos contratados eram crianças e mulheres. Havia dois motivos cruciais para os patrões: os salários pagos eram inferiores (mulheres ganhavam cerca de 40% e crianças 20% do salário masculino) e sua capacidade de protestar era menor.",
      "Crianças a partir dos 6 anos eram alugadas de orfanatos públicos paroquiais sob o pretexto de 'aprendizes'. Elas passavam o dia amarrando fios partidos debaixo de maquinários pesados ou puxando vagonetes de carvão em galerias subterrâneas de menos de 1 metro de altura."
    ],
    keyHighlight: "A agilidade dos dedos infantis era explorada ao custo de deformações ósseas, amputações e perda total da infância.",
    quote: {
      text: "Trabalhei nas minas desde os 8 anos. Puxava os carrinhos de carvão amarrada por uma corrente na cintura, de quatro no chão escuro e molhado, durante 14 horas por dia.",
      author: "Patience Kershaw (17 anos)",
      source: "Depoimento à Comissão Real sobre o Trabalho nas Minas (1842)"
    },
    keyPoints: [
      "Castigos corporais com tiras de couro (strapping) aplicados pelos feitores para manter crianças acordadas.",
      "Deformações na coluna (raquitismo) e pernas tortas causadas por carregar pesos excessivos em fase de crescimento.",
      "Início da pressão popular que levou ao Factory Act de 1833 (proibindo trabalho de menores de 9 anos na Inglaterra)."
    ]
  },
  {
    id: 8,
    slug: "moradias-crise-sanitaria",
    number: "08",
    category: "Cotidiano",
    title: "Moradias Insalubres e a Crise Sanitária Urbana",
    summary: "Os 'cortiços da revolução' (slums), a água contaminada e a taxa estarrecedora de 70% de mortalidade infantil.",
    content: [
      "O crescimento caótico das cidades gerou bairros operários desprovidos de qualquer infraestrutura básica. Ruas estreitas e sem calçamento eram repletas de lixo orgânico e dejetos humanos despejados diretamente pelas janelas.",
      "Casas conhecidas como 'back-to-backs' abrigavam até dez famílias em quartos subterrâneos escuros e úmidos. Nessas condições, as epidemias de cólera e tuberculose dizimavam comunidades inteiras; em bairros como Little Ireland em Manchester, 70% das crianças morriam antes de completar 5 anos."
    ],
    keyHighlight: "A falta de esgoto e água potável fazia a expectativa de vida de um operário cair para menos da metade da de um nobre rural.",
    keyPoints: [
      "Ausência de coleta de lixo, água tratada ou ventilação natural nos cortiços urbanos.",
      "Epidemias recorrentes de cólera nos anos 1831, 1848 e 1853 que forçaram as primeiras reformas de saúde pública.",
      "Contrastes brutais: palacetes burgueses iluminados a poucas centenas de metros da miséria extrema."
    ]
  },
  {
    id: 9,
    slug: "analogia-engrenagem",
    number: "09",
    category: "Analogias",
    title: "Analogia Obrigatória 1: O Trabalhador como 'Engrenagem Descartável'",
    summary: "O operário despojado de sua humanidade, reduzido a uma peça facilmente substituível na grande máquina do capital.",
    content: [
      "Para compreender a desumanização gerada pela industrialização desregulada, pense no trabalhador como uma pequena engrenagem de ferro fundido.",
      "Se um parafuso enferruja, desgasta-se ou quebra sob a pressão contínua do vapor, o dono da fábrica não interrompe o funcionamento para cuidar da peça: ele simplesmente joga a engrenagem gasta no ferro-velho e parafusa uma nova peça idêntica retirada de uma caixa cheia."
    ],
    keyHighlight: "O operário não era visto como um ser humano com sonhos e família, mas como um custo mecânico de manutenção.",
    quote: {
      text: "O operário tornou-se um simples apêndice da máquina, do qual só se exige a operação mais simples, mais monótona e mais fácil de aprender.",
      author: "Karl Marx e Friedrich Engels",
      source: "Manifesto do Partido Comunista (1848)"
    },
    keyPoints: [
      "Alienação do trabalho: o operário não se reconhece no produto que suas mãos fabricaram.",
      "Exército industrial de reserva: a fila de desempregados na porta garantia salários miseráveis e demissões sem aviso.",
      "Substituibilidade total: o ofício artesanal que levava anos para ser aprendido foi reduzido a apertar uma alavanca."
    ]
  },
  {
    id: 10,
    slug: "ludismo-quebradores",
    number: "10",
    category: "Movimentos",
    title: "Primeiras Reações: O Ludismo e os Quebradores de Máquinas",
    summary: "O protesto desesperado dos artesãos que viam nos teares mecânicos os assassinos do seu sustento familiar.",
    content: [
      "Entre 1811 e 1816, o desespero tomou conta das oficinas britânicas. Guiados pela figura mítica do 'General Ned Ludd', grupos noturnos de artesãos invadiam fábricas com martelos pesados para destruir teares mecânicos.",
      "Longe de ser uma revolta cega contra o progresso tecnológico, o Ludismo foi uma ação política desesperada contra o desemprego em massa, a queda brutal dos salários e a ruína das famílias artesãs que não conseguiam competir com os preços industriais."
    ],
    keyHighlight: "O parlamento inglês reagiu com a Lei contra a Destruição de Máquinas (1812), punindo o ludismo com a pena de morte.",
    keyPoints: [
      "Ataques noturnos secretos e cartas anônimas de advertência assinadas por 'Ned Ludd'.",
      "Mobilização militar do governo britânico: mais soldados no norte da Inglaterra do que em combate contra Napoleão.",
      "Enforcamento de dezenas de líderes ludistas e deportação de outros para colônias penais na Austrália."
    ]
  },
  {
    id: 11,
    slug: "cartismo-carta-povo",
    number: "11",
    category: "Movimentos",
    title: "O Movimento Cartista e a 'Carta do Povo' (1838)",
    summary: "A primeira grande ação política pacífica e parlamentar dos trabalhadores exigindo direitos democráticos reais.",
    content: [
      "Percebendo que quebrar máquinas não mudava as leis do país, a classe trabalhadora inglesa organizou em 1838 o Movimento Cartista. Liderados por Feargus O'Connor e William Lovett, redigiram a 'Carta do Povo' (People's Charter).",
      "O documento, entregue ao Parlamento britânico com mais de 3 milhões de assinaturas populares, exigia a democratização do poder político como único meio de aprovar leis que protegessem os trabalhadores."
    ],
    keyHighlight: "As 6 reivindicações da Carta do Povo moldaram a democracia moderna britânica ao longo das décadas seguintes.",
    keyPoints: [
      "1. Sufrágio universal masculino (voto para todos os homens, ricos ou pobres).",
      "2. Voto secreto (para impedir que os patrões coagissem seus empregados no momento da votação).",
      "3. Fim da exigência de propriedades para ser deputado (permitindo a eleição de operários).",
      "4. Pagamento de salário aos parlamentares (para que trabalhadores pudessem se dedicar à política).",
      "5. Distritos eleitorais de tamanho igual e parlamentos anuais."
    ]
  },
  {
    id: 12,
    slug: "trade-unions-sindicatos",
    number: "12",
    category: "Movimentos",
    title: "O Nascimento dos Sindicatos: As Trade-Unions",
    summary: "Da clandestinidade criminosa à conquista do direito de associação, fundos mútuos e greves organizadas.",
    content: [
      "Inicialmente, qualquer reunião de operários para reivindicar salários era considerada crime de conspiração pelas Leis de Combinação (Combination Acts de 1799). Mesmo sob risco de prisão, criavam-se caixas de auxílio mútuo clandestinas.",
      "Com a revogação parcial dessas leis em 1824, nasceram oficialmente as Trade-Unions — os primeiros sindicatos de trabalhadores do mundo. Elas passaram a negociar acordos coletivos e utilizar a greve geral como ferramenta de pressão econômica."
    ],
    keyHighlight: "As Trade-Unions demonstraram que a união solidária era a única defesa do operário individual contra o poder dos industriais.",
    keyPoints: [
      "Fundos de greve: arrecadação mensal para sustentar famílias de operários durante paralisações.",
      "Solidariedade entre categorias: tecelões, mineiros e metalúrgicos unificando pautas nacionais.",
      "Criação das primeiras federações trabalhistas internacionais."
    ]
  },
  {
    id: 13,
    slug: "liberalismo-adam-smith",
    number: "13",
    category: "Teorias",
    title: "O Liberalismo Econômico: Adam Smith e o Laissez-Faire (1776)",
    summary: "A doutrina que justificou a liberdade total de mercado e a não intervenção do Estado nas relações produtivas.",
    content: [
      "Em 1776, o filósofo escocês Adam Smith publicou 'A Riqueza das Nações'. Smith defendia que a economia é guiada por uma 'mão invisível': ao buscar o seu próprio lucro individual, cada comerciante acaba gerando empregos e riqueza para toda a sociedade.",
      "Para os liberais clássicos, o Estado não deveria regular salários, fixar preços ou limitar jornadas de trabalho (Laissez-faire, laissez-passer). O contrato entre patrão e operário deveria ser um acordo livre entre dois indivíduos."
    ],
    keyHighlight: "O liberalismo burguês via a pobreza como consequência natural das leis de mercado e da falta de esforço individual.",
    quote: {
      text: "Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos nosso jantar, mas da consideração que eles têm pelo seu próprio interesse.",
      author: "Adam Smith",
      source: "A Riqueza das Nações (1776)"
    },
    keyPoints: [
      "Livre concorrência e autorregulação da economia através da lei da oferta e da procura.",
      "Defesa intransigente da propriedade privada e da livre iniciativa empresarial.",
      "Crítica aos defensores dos direitos sociais: David Ricardo e Malthus afirmavam que aumentar salários causaria superpopulação e mais miséria."
    ]
  },
  {
    id: 14,
    slug: "socialismo-utopico",
    number: "14",
    category: "Teorias",
    title: "O Socialismo Utópico: Robert Owen, Saint-Simon e Fourier",
    summary: "A crença de que a sociedade ideal poderia ser construída pelo convencimento moral, harmonia e vilas cooperativas.",
    content: [
      "Chocados com os horrores da Revolução Industrial, pensadores como Robert Owen (Inglaterra), Saint-Simon e Charles Fourier (França) propuseram modelos alternativos de sociedade baseados na cooperação pacífica.",
      "Owen implementou na sua fábrica de tecidos em New Lanark (Escócia) a redução da jornada para 10 horas, creches para as crianças e armazéns a preço de custo, comprovando que era possível lucrar sem destruir a vida humana. Já Fourier idealizou os 'Falanstérios', comunidades autossuficientes onde trabalho e prazer se combinavam."
    ],
    keyHighlight: "Foram chamados de 'utópicos' por Marx e Engels porque acreditavam que a burguesia abriria mão de seus privilégios apenas por generosidade moral.",
    keyPoints: [
      "Robert Owen: pioneiro das cooperativas de consumo e defensor do ensino primário universal.",
      "Charles Fourier: idealizador dos Falanstérios e defensor precoce da emancipação feminina total.",
      "Conde de Saint-Simon: defesa de uma sociedade administrada por cientistas e produtores dedicados ao bem público."
    ]
  },
  {
    id: 15,
    slug: "socialismo-cientifico-marx",
    number: "15",
    category: "Teorias",
    title: "O Socialismo Científico: Karl Marx e Friedrich Engels (1848)",
    summary: "O Manifesto Comunista e a análise rigorosa da história a partir das contradições materiais e econômicas.",
    content: [
      "Em fevereiro de 1848, no calor das revoluções da 'Primavera dos Povos', Karl Marx e Friedrich Engels publicaram o 'Manifesto do Partido Comunista'. Eles romperam com o socialismo utópico, propondo uma abordagem 'científica' da sociedade.",
      "Marx e Engels não apelavam à bondade dos patrões: eles analisaram as engrenagens econômicas do capitalismo em obras como 'O Capital' (1867), concluindo que a exploração do trabalhador é a base inevitável do lucro capitalista e que somente a organização política da classe operária poderia transformar o mundo."
    ],
    keyHighlight: "A famosa convocação final do Manifesto ecoou por todo o planeta: 'Proletários de todos os países, uni-vos!'",
    quote: {
      text: "Os filósofos têm apenas interpretado o mundo de diferentes maneiras; a questão, porém, é transformá-lo.",
      author: "Karl Marx",
      source: "Teses sobre Feuerbach (1845)"
    },
    keyPoints: [
      "Substituição das ilusões morais pela análise econômica e histórica rigorosa.",
      "A classe operária como agente histórico consciente da transformação revolucionária.",
      "Objetivo final: eliminação da propriedade privada dos meios de produção e construção de uma sociedade sem classes (Comunismo)."
    ]
  },
  {
    id: 16,
    slug: "conceitos-chave-marxismo",
    number: "16",
    category: "Teorias",
    title: "Conceitos-Chave do Marxismo: Mais-Valia e Materialismo Histórico",
    summary: "Entenda com clareza os dois pilares que explicam a origem do lucro capitalista e a evolução da história humana.",
    content: [
      "Para o 8º ano, compreender o marxismo exige dominar dois conceitos fundamentais: o Materialismo Histórico e a Mais-Valia.",
      "O Materialismo Histórico ensina que a base econômica (como as pessoas produzem comida, roupas e casas) determina as leis, a política e a cultura de uma época. Já a Mais-Valia explica de onde vem a riqueza dos proprietários das fábricas."
    ],
    keyHighlight: "A Mais-Valia é a diferença entre o valor real produzido pelo trabalho do operário e o salário miserável que ele recebe.",
    keyPoints: [
      "Mais-Valia Absoluta: aumento do lucro obtido pela extensão da jornada de trabalho (ex: de 12h para 16h sem aumento de salário).",
      "Mais-Valia Relativa: aumento do lucro obtido pela introdução de máquinas que aceleram a produção no mesmo período de tempo.",
      "Infraestrutura vs Superestrutura: a economia material sustenta o aparelho jurídico, estatal e ideológico de cada sociedade."
    ],
    didYouKnow: "Se um operário têxtil produzia em 3 horas o valor equivalente ao seu salário diário, as outras 11 horas de trabalho nas tecelagens eram apropriadas integralmente pelo dono da fábrica como mais-valia não remunerada."
  },
  {
    id: 17,
    slug: "analogia-navio-leme",
    number: "17",
    category: "Analogias",
    title: "Analogia Obrigatória 2: A Luta de Classes como 'O Navio e o Leme'",
    summary: "Quem alimenta as caldeiras de carvão no porão versus quem segura o leme de ouro e decide o rumo no convés.",
    content: [
      "Imagine um colossal navio transatlântico a vapor cortando um mar revolto no século XIX. No fundo dos porões escuros, centenas de marinheiros e foguistas trabalham sem parar, jogando pás de carvão em fornalhas incandescentes para manter as hélices girando.",
      "No convés superior ensolarado, um punhado de passageiros de elite desfruta de banquetes de luxo e comanda o leme com exclusividade. Eles decidem para onde o navio viaja, quais portos visitar e quem tem direito a coletes salva-vidas em caso de tempestade."
    ],
    keyHighlight: "A luta de classes é o momento em que a tripulação das fornalhas sobe ao convés para assumir o controle do leme e navegar com igualdade.",
    quote: {
      text: "A história de todas as sociedades que existiram até nossos dias tem sido a história da luta de classes: homem livre e escravo, patrício e plebeu, senhor feudal e servo, burguês e proletário.",
      author: "Karl Marx e Friedrich Engels",
      source: "Manifesto Comunista (1848)"
    },
    keyPoints: [
      "A caldeira representa a força de trabalho que gera toda a energia e riqueza material.",
      "O leme representa o Estado, as leis e o poder político que protegem a classe dominante.",
      "O conflito inevitável: a recusa dos trabalhadores em continuar morrendo nos porões para enriquecer quem nunca tocou no carvão."
    ]
  },
  {
    id: 18,
    slug: "anarquismo-bakunin",
    number: "18",
    category: "Teorias",
    title: "O Anarquismo: Mikhail Bakunin, Pierre-Joseph Proudhon e a AIT (1864)",
    summary: "'Nem Deus, Nem Patrão, Nem Estado': a recusa absoluta a qualquer tipo de poder coercitivo imposto sobre os indivíduos.",
    content: [
      "O Anarquismo surgiu como uma das correntes mais radicais do século XIX. O filósofo francês Pierre-Joseph Proudhon provocou escândalo ao publicar em 1840 a famosa frase: 'A propriedade privada é um roubo!'.",
      "Mais tarde, o russo Mikhail Bakunin liderou a ala libertária na Associação Internacional dos Trabalhadores (AIT / 1ª Internacional, fundada em 1864). Ao contrário dos marxistas, os anarquistas defendiam que a revolução deveria destruir o Estado imediatamente, sem passar por nenhuma fase de transição (ditadura do proletariado), pois 'todo Estado gera opressores'."
    ],
    keyHighlight: "O anarquismo propõe uma sociedade sem governantes, baseada na livre federação de comunidades, autogestão e apoio mútuo.",
    quote: {
      text: "A liberdade sem o socialismo é privilégio e injustiça; o socialismo sem a liberdade é escravidão e brutalidade.",
      author: "Mikhail Bakunin",
      source: "Federalismo, Socialismo e Antiteologismo (1867)"
    },
    keyPoints: [
      "Ação direta: recusa em participar de eleições burguesas ou criar partidos políticos formais.",
      "Autogestão: fábricas administradas por assembleias de operários e terras geridas por camponeses.",
      "Cisura histórica de 1872 em Haia: o rompimento definitivo entre os seguidores de Marx e os de Bakunin na 1ª Internacional."
    ]
  },
  {
    id: 19,
    slug: "linha-do-tempo-interativa",
    number: "19",
    category: "Teorias",
    title: "A Linha do Tempo Interativa das Ideias Políticas (1776 – 1871)",
    summary: "O panorama cronológico das 5 grandes etapas que mudaram a história do pensamento político ocidental.",
    content: [
      "Acompanhe passo a passo a sucessão cronológica das principais obras, insurreições e organizações sindicais do século XIX.",
      "Observe como cada teoria surgiu como uma resposta direta às contradições econômicas e aos conflitos sociais do seu tempo."
    ],
    keyHighlight: "1776 (Smith) ➔ 1848 (Primavera dos Povos e Manifesto) ➔ 1848 (Owen e Utópicos) ➔ 1864 (1ª Internacional) ➔ 1871 (Comuna de Paris).",
    keyPoints: [
      "1776: Nascimento da doutrina do Livre Mercado com Adam Smith.",
      "1848: O ano que abalou a Europa com a Primavera dos Povos e o Manifesto Comunista.",
      "1848: Testes práticos do cooperativismo utópico e das vilas industriais.",
      "1864: A união internacional dos sindicatos na AIT em Londres.",
      "1871: O clímax revolucionário com a proclamação da Comuna de Paris."
    ]
  },
  {
    id: 20,
    slug: "comuna-de-paris-72-dias",
    number: "20",
    category: "Comuna",
    title: "A Comuna de Paris (1871): Os 72 Dias de Autogestão",
    summary: "A derrota na Guerra Franco-Prussiana, o cerco da fome e o primeiro governo operário da história moderna.",
    content: [
      "Em março de 1871, após a humilhante derrota da França na Guerra Franco-Prussiana e o cerco militar a Paris, o governo provisório francês tentou desarmar a Guarda Nacional da cidade e retirar os canhões pagos pelos próprios parisienses em Montmartre.",
      "A população pobre de Paris revoltou-se, expulsou o governo burguês para Versalhes e declarou a Comuna de Paris em 18 de março de 1871. Pela primeira vez na história ocidental, trabalhadores, artesãos e intelectuais assumiram a administração de uma grande capital mundial."
    ],
    keyHighlight: "A Comuna de Paris durou exatamente 72 dias (18 de março a 28 de maio de 1871) e tornou-se o maior símbolo revolucionário operário.",
    quote: {
      text: "A Comuna foi a forma política finalmente descoberta sob a qual se podia realizar a emancipação econômica do trabalho.",
      author: "Karl Marx",
      source: "A Guerra Civil na França (1871)"
    },
    keyPoints: [
      "Contexto: Cerco prussiano, fome severa e revolta contra o armistício com a Prússia.",
      "Participação heroica das mulheres nas barricadas, com destaque para a professora anarquista Louise Michel.",
      "Destruição simbólica da Coluna Vendôme (símbolo do imperialismo e do militarismo monárquico)."
    ]
  },
  {
    id: 21,
    slug: "analogia-laboratorio-comuna",
    number: "21",
    category: "Analogias",
    title: "Analogia Obrigatória 3: A Comuna como 'Laboratório de Democracia Relâmpago'",
    summary: "72 dias de experimentação frenética que anteciparam os direitos sociais, laicos e trabalhistas do século XX.",
    content: [
      "Pense na Comuna de Paris como um 'laboratório de ciências sociais relâmpago'. Em um intervalo de menos de dez semanas sob bombardeio constante, os operários-cientistas testaram e aprovaram na prática reformas que a Europa levou mais de 50 anos para assimilar.",
      "Neste laboratório, foram criadas medidas que hoje consideramos fundamentais para qualquer democracia republicana saudável: a separação total entre Estado e Igreja, o ensino laico e universal, a igualdade de remuneração para funções públicas e a entrega de oficinas desativadas para a cooperativa dos próprios trabalhadores."
    ],
    keyHighlight: "A Comuna provou que a classe trabalhadora era plenamente capaz de administrar uma metrópole complexa com competência e justiça.",
    keyPoints: [
      "Separação radical entre Igreja e Estado: secularização dos hospitais e escolas públicas.",
      "Teto salarial cívico: nenhum membro do governo da Comuna recebia mais que o salário de um operário especializado.",
      "Cargos com mandatos revogáveis a qualquer instante pela vontade direta das assembleias de bairro.",
      "Cancelamento do pagamento de aluguéis atrasados durante o período de guerra e cerco militar."
    ]
  },
  {
    id: 22,
    slug: "semana-sangrenta-repressao",
    number: "22",
    category: "Comuna",
    title: "A Semana Sangrenta e a Repressão Brutal (Maio de 1871)",
    summary: "As tropas de Versalhes invadem Paris: 20 mil mortos nas barricadas e fuzilamentos no Muro dos Federados.",
    content: [
      "Assustadas com o exemplo da Comuna, as elites francesas em Versalhes aliaram-se ao exército prussiano (que libertou prisioneiros de guerra franceses para esmagar a insurreição). Entre 21 e 28 de maio de 1871, ocorreu a terrível 'Semana Sangrenta' (La Semaine Sanglante).",
      "Paris foi incendiada e combatida rua por rua, barricada por barricada. Cerca de 20.000 comunardos foram fuzilados sumariamente sem julgamento, milhares foram deportados para colônias penais na Nova Caledônia e centenas foram sepultados em valas comuns no cemitério Père-Lachaise (Muro dos Federados)."
    ],
    keyHighlight: "A violência implacável da repressão de Versalhes buscava apagar para sempre a memória da insurreição operária.",
    quote: {
      text: "Se vocês querem saber quem matou mais de vinte mil trabalhadores de Paris, olhem para as ordens do general Galliffet e do governo de Thiers.",
      author: "Prosper-Olivier Lissagaray",
      source: "História da Comuna de 1871 (1876)"
    },
    keyPoints: [
      "20.000 execuções sumárias em apenas 7 dias nas ruas e praças de Paris.",
      "O Muro dos Federados no cemitério Père-Lachaise: o último reduto onde 147 resistentes foram alinhados e fuzilados.",
      "A canção 'A Internacional' (L'Internationale), escrita pelo poeta comunardo Eugène Pottier durante a repressão clandestina."
    ]
  },
  {
    id: 23,
    slug: "legado-direitos-clt",
    number: "23",
    category: "Legado",
    title: "O Legado Histórico: Conquistas Operárias, 1º de Maio e a CLT no Brasil",
    summary: "Da greve de Haymarket em Chicago (1886) à Consolidação das Leis do Trabalho de 1943 no Brasil contemporâneo.",
    content: [
      "Nenhum dos direitos trabalhistas existentes hoje foi concedido gratuitamente: todos foram conquistados após décadas de greves, passeatas, prisões e sacrifícios da classe operária mundial.",
      "Em 1º de maio de 1886, operários de Chicago entraram em greve pela jornada de 8 horas, episódio que culminou no massacre da praça Haymarket e na criação do Dia Internacional dos Trabalhadores. No Brasil, essas lutas inspiraram a Greve Geral de 1917 e desaguaram na Consolidação das Leis do Trabalho (CLT), sancionada em 1943."
    ],
    keyHighlight: "A jornada de 8 horas diárias, as férias remuneradas, o 13º salário e a proteção contra o trabalho infantil são filhos diretos do século XIX.",
    keyPoints: [
      "Jornada de 8 horas: o lema histórico '8 horas de trabalho, 8 horas de lazer, 8 horas de repouso'.",
      "Origem do 1º de Maio: homenagem aos mártires de Chicago enforcados pela luta das 8 horas.",
      "A CLT de 1943 no Brasil: carteira assinada, salário mínimo nacional, licença-maternidade e descanso semanal remunerado."
    ]
  },
  {
    id: 24,
    slug: "quiz-simulador-8ano",
    number: "24",
    category: "Atividades",
    title: "Simulador / Laboratório de Decisão Histórica & Quiz do 8º Ano",
    summary: "Atividade formativa interativa para testar conhecimentos e refletir criticamente sobre as correntes de pensamento do século XIX.",
    content: [
      "Agora é a sua vez de demonstrar o domínio sobre o Capítulo 07! Responda às questões conceituais formuladas pelo Prof. Anderson Firmo com foco nas habilidades da BNCC para o 8º Ano de História.",
      "Após concluir, analise as explicações pedagógicas de cada alternativa e imprima ou salve seu certificado de participação para os registros da Escola Parque Ipiranga."
    ],
    keyHighlight: "Fixação ativa de conceitos • Habilidades BNCC (EF08HI01, EF08HI03, EF08HI04) • Feedback imediato.",
    keyPoints: [
      "Identificação dos pensadores clássicos e suas teses centrais.",
      "Diferenciação clara entre Socialismo Utópico, Socialismo Científico e Anarquismo.",
      "Compreensão das 3 analogias pedagógicas fundamentais trabalhadas no módulo."
    ]
  },
  {
    id: 25,
    slug: "sintese-glossario-rodape",
    number: "25",
    category: "Atividades",
    title: "Síntese de Aprendizagem, Glossário Conceitual & Rodapé Oficial",
    summary: "Resumo executivo do capítulo, glossário de termos históricos e chancela institucional da Escola Parque Ipiranga.",
    content: [
      "Chegamos ao fim da nossa jornada pelo Século XIX. Vimos como as máquinas a vapor aceleraram o mundo e como as vozes dos trabalhadores ecoaram das oficinas aos parlamentos e barricadas, transformando para sempre o conceito de cidadania.",
      "Consulte o glossário de apoio sempre que precisar revisar termos como Mais-Valia, Laissez-Faire, Trade-Unions e Autogestão. Bom estudo e até o próximo capítulo!"
    ],
    keyHighlight: "Escola Parque Ipiranga • Formando cidadãos conscientes e preparados para o futuro • Prof. Anderson Firmo",
    quote: {
      text: "Conhecer a história do trabalho no século XIX é entender por que a dignidade humana não pode ser negociada como mercadoria.",
      author: "Prof. Anderson Firmo",
      source: "Escola Parque Ipiranga - 2026"
    },
    keyPoints: [
      "Mais-valia: valor do trabalho apropriado pelo capitalista sem remuneração equivalente.",
      "Laissez-faire: princípio liberal de não intervenção do Estado no mercado econômico.",
      "Trade-unions: organizações sindicais pioneiras fundadas na Inglaterra.",
      "Autogestão: modelo de administração democrática de fábricas e comunidades pelos próprios trabalhadores."
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Por que as indústrias têxteis inglesas do século XIX contratavam massivamente mulheres e crianças (que chegaram a representar mais de 50% dos operários)?",
    options: [
      "Porque as leis britânicas da época proibiam terminantemente o trabalho de homens adultos nas cidades.",
      "Porque recebiam salários muito inferiores aos dos homens adultos e eram mais fáceis de disciplinar e submeter a tarefas em espaços exíguos.",
      "Porque apenas as crianças sabiam operar a máquina a vapor aperfeiçoada por James Watt.",
      "Porque os sindicatos operários exigiam que as fábricas contratassem exclusivamente famílias inteiras."
    ],
    correctIndex: 1,
    explanation: "Mulheres e crianças recebiam frações do salário pago a homens adultos (geralmente entre 1/3 e 1/5) e suas mãos pequenas facilitavam tarefas perigosas de desembaraçar fios nos teares em movimento.",
    skillEvaluated: "EF08HI03 - Analisar as condições de trabalho e a exploração de mão de obra infantil e feminina na Revolução Industrial."
  },
  {
    id: 2,
    question: "Na analogia pedagógica obrigatória do 'Navio e o Leme', o que representam, respectivamente, a 'casa de máquinas/caldeiras' e 'quem segura o leme'?",
    options: [
      "A Igreja que orienta moralmente a sociedade e o Rei absolutista que comanda as guerras.",
      "O campesinato feudal que planta alimentos e os nobres donos de feudos medievais.",
      "O proletariado que gera a energia e a riqueza material versus a burguesia e o Estado que controlam os meios de produção e o rumo político.",
      "Os cientistas inventores de máquinas a vapor e os marinheiros comerciantes do porto de Liverpool."
    ],
    correctIndex: 2,
    explanation: "A analogia ilustra a contradição marxista: a imensa maioria trabalhadora gera toda a força e riqueza no calor dos motores, enquanto a minoria burguesa desfruta do luxo e dita as regras com o controle do leme estatal.",
    skillEvaluated: "EF08HI04 - Compreender as analogias estruturais sobre luta de classes e divisão social do trabalho no século XIX."
  },
  {
    id: 3,
    question: "Qual foi a principal diferença entre o Socialismo Utópico (Robert Owen, Fourier) e o Socialismo Científico (Karl Marx, Friedrich Engels)?",
    options: [
      "O Socialismo Utópico defendia a revolução violenta armada imediata, enquanto o Socialismo Científico defendia que nada deveria ser mudado.",
      "O Socialismo Científico confiava na caridade e bondade dos ricos industriais para doarem suas fábricas pacificamente aos pobres.",
      "O Socialismo Utópico baseava-se em modelos ideais e apelo moral à generosidade dos patrões, enquanto o Socialismo Científico analisava as leis econômicas do capitalismo e a luta de classes como motor histórico.",
      "Não havia qualquer diferença entre eles, sendo ambos fundados por Adam Smith na obra 'A Riqueza das Nações'."
    ],
    correctIndex: 2,
    explanation: "Marx e Engels qualificaram os primeiros socialistas de 'utópicos' justamente por acreditarem que a transformação viria da boa vontade moral dos industriais, enquanto o socialismo marxista baseou-se na análise econômica rigorosa (materialismo histórico e mais-valia).",
    skillEvaluated: "EF08HI01 - Identificar e diferenciar as correntes de pensamento político e social do século XIX."
  },
  {
    id: 4,
    question: "Por que a Comuna de Paris de 1871 é caracterizada como um 'Laboratório de Democracia Relâmpago' durante seus 72 dias de existência?",
    options: [
      "Porque realizou experimentos químicos militares com eletricidade para vencer a Guerra Franco-Prussiana.",
      "Porque aprovou e colocou em prática em pouquíssimas semanas medidas pioneiras como a separação Igreja-Estado, teto salarial operário para governantes, ensino laico e autogestão fabril.",
      "Porque restaurou a monarquia absolutista e coroou Napoleão III como imperador definitivo da Europa.",
      "Porque expulsou todos os trabalhadores de Paris e transformou a cidade num centro exclusivo para bancos privados."
    ],
    correctIndex: 1,
    explanation: "Durante seus breves 72 dias sob cerco, a Comuna testou de forma concentrada e corajosa medidas democráticas, laicas e sociais que a maioria dos países só adotou décadas depois no século XX.",
    skillEvaluated: "EF08HI04 - Reconhecer as inovações políticas e o significado histórico da Comuna de Paris de 1871."
  },
  {
    id: 5,
    question: "Qual das seguintes conquistas trabalhistas brasileiras atuais possui raiz histórica direta nas lutas operárias e no legado do século XIX?",
    options: [
      "A autorização legal para o trabalho infantil de menores de 8 anos em minas de carvão.",
      "A jornada de 16 horas de trabalho diário sem direito a descanso semanal.",
      "A Consolidação das Leis do Trabalho (CLT de 1943), com jornada de 8 horas, férias remuneradas, 13º salário e proibição do trabalho infantil perigoso.",
      "A proibição do sufrágio universal e a exigência de ser dono de terras para votar no Brasil."
    ],
    correctIndex: 2,
    explanation: "A CLT de 1943 e a Constituição Cidadã de 1988 consagraram no Brasil direitos originados nas lutas do século XIX: limitação de jornada, proteção à infância, salário mínimo e descanso semanal remunerado.",
    skillEvaluated: "EF08HI03 - Relacionar os movimentos sindicais e operários do século XIX com a conquista da legislação trabalhista contemporânea."
  }
];

export const GLOSSARY_ITEMS = [
  {
    term: "Alienação",
    definition: "Processo pelo qual o trabalhador perde o controle e a consciência sobre o produto final do seu trabalho, tornando-se mero apêndice da máquina."
  },
  {
    term: "Autogestão",
    definition: "Sistema democrático no qual uma fábrica, empresa ou comunidade é administrada diretamente por seus próprios trabalhadores reunidos em assembleia, sem chefes externos."
  },
  {
    term: "Cartismo",
    definition: "Movimento político operário inglês dos anos 1830-1840 que redigiu a 'Carta do Povo', reivindicando o sufrágio universal masculino e o voto secreto."
  },
  {
    term: "Cercamento dos Campos (Enclosures)",
    definition: "Leis britânicas que privatizaram terras comunitárias rurais, forçando os camponeses a migrarem para as cidades e formarem o proletariado fabril."
  },
  {
    term: "Comunardos",
    definition: "Os homens, mulheres e combatentes da Guarda Nacional que proclamaram e defenderam a Comuna de Paris em 1871."
  },
  {
    term: "Laissez-Faire",
    definition: "Expressão em francês que significa 'deixai fazer, deixai passar', princípio fundamental do Liberalismo Econômico que prega a não interferência do Estado na economia."
  },
  {
    term: "Ludismo",
    definition: "Primeiro movimento de protesto de artesãos ingleses (1811-1816) que invadia oficinas à noite para destruir máquinas a vapor, acusadas de roubar seus empregos."
  },
  {
    term: "Mais-Valia",
    definition: "Conceito marxista que define o valor extra gerado pelo trabalhador durante a jornada que não lhe é pago como salário, transformando-se no lucro do burguês."
  },
  {
    term: "Materialismo Histórico",
    definition: "Método de análise de Marx e Engels que demonstra que a evolução da história humana é impulsionada pelas condições materiais e econômicas de cada época."
  },
  {
    term: "Proletariado",
    definition: "Classe social de homens e mulheres que não possuem fábricas nem terras e, por isso, dependem exclusivamente da venda de sua força de trabalho em troca de um salário."
  },
  {
    term: "Trade-Unions",
    definition: "Primeiras organizações sindicais de trabalhadores criadas na Grã-Bretanha para lutar coletivamente por melhores salários e redução de jornada."
  }
];
