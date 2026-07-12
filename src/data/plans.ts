export const checkoutLinks = {
  prateleiraBolso: "https://pay.kiwify.com.br/kachkFo",
  prateleiraDossies: "https://pay.kiwify.com.br/hUjNqQg",
  prateleiraGrimorios: "https://pay.kiwify.com.br/PGkCVS6",
  acervoCompleto: "https://pay.kiwify.com.br/tVXNQff",
} as const;

export const planHero = {
  eyebrow: "Mapa de Acesso ao Acervo",
  title: "Escolha por qual porta você quer entrar na Biblioteca.",
  subtitle:
    "Abra uma ficha avulsa, acompanhe uma prateleira específica ou use a chave principal para circular pelo Acervo Completo.",
  microcopy:
    "Você pode começar pequeno. Mas, se a intenção é continuar explorando, o Acervo Completo já abre a Biblioteca inteira de uma vez.",
};

export const accessLogic = [
  {
    title: "Ficha avulsa",
    description: "Para consultar uma única obra do Acervo.",
  },
  {
    title: "Cartão de prateleira",
    description: "Para acompanhar uma categoria durante o ano.",
  },
  {
    title: "Chave principal",
    description: "Para abrir a Biblioteca inteira em um único acesso.",
  },
] as const;

export const standaloneShelves = [
  {
    title: "Coleção de Bolso",
    price: "R$14 por obra",
    description: "Fichas breves, visuais e colecionáveis para começar por um tema.",
    examples: [
      "Oráculo de Bolso dos Sonhos",
      "Oráculo de Bolso do Tarot",
      "Herbário de Bolso",
      "Manual de Bolso da Yoga",
      "Enciclopédia de Bolso das Fases da Lua",
    ],
    cta: "Abrir gaveta de bolso",
    href: "#group-bolso",
  },
  {
    title: "Dossiês",
    price: "R$27 por obra",
    description: "Arquivos investigativos sobre símbolos, cultura, história e pensamento.",
    examples: ["O Duplo", "Sincronicidades", "O Átomo", "Helena Blavatsky", "Anatomia do Mapa Astral"],
    cta: "Abrir gaveta dos dossiês",
    href: "#group-dossie",
  },
  {
    title: "Grimórios",
    price: "R$64 por obra",
    description: "Obras de consulta para investigar sistemas simbólicos com mais estrutura.",
    examples: ["Viagem Astral", "Geometria Sagrada"],
    cta: "Abrir gaveta dos grimórios",
    href: "#group-grimorio",
  },
] as const;

export const shelfPlans = [
  {
    title: "Prateleira de Bolso",
    price: "R$97/ano",
    description: "Um cartão anual para acompanhar as obras disponíveis da Coleção de Bolso.",
    includes: [
      "todas as obras da Coleção de Bolso disponíveis",
      "novas obras de bolso catalogadas durante a assinatura, se essa regra for mantida",
      "entrada pela área de membros",
      "experiência editorial da Biblioteca",
    ],
    excludes: ["Dossiês", "Grimórios", "Prateleira Secreta"],
    cta: "Ativar cartão de bolso",
    href: checkoutLinks.prateleiraBolso,
  },
  {
    title: "Prateleira dos Dossiês",
    price: "R$147/ano",
    description: "Um cartão anual para acompanhar os Dossiês catalogados na Biblioteca.",
    includes: [
      "todos os Dossiês disponíveis",
      "novas investigações catalogadas durante a assinatura, se essa regra for mantida",
      "entrada pela área de membros",
      "arquivos de investigação editorial",
    ],
    excludes: ["Coleção de Bolso", "Grimórios", "Prateleira Secreta"],
    cta: "Ativar cartão dos dossiês",
    href: checkoutLinks.prateleiraDossies,
  },
  {
    title: "Prateleira dos Grimórios",
    price: "R$197/ano",
    description: "Um cartão anual para acompanhar os Grimórios disponíveis no Acervo.",
    includes: [
      "todos os Grimórios disponíveis",
      "obras de aprofundamento",
      "entrada pela área de membros",
      "materiais mais densos do Acervo",
    ],
    excludes: ["Coleção de Bolso", "Dossiês", "Prateleira Secreta completa"],
    cta: "Ativar cartão dos grimórios",
    href: checkoutLinks.prateleiraGrimorios,
  },
] as const;

export const fullAccessPlan = {
  title: "Acesso Completo ao Acervo",
  price: "R$297/ano em até 12x",
  seals: ["Mais escolhido", "Melhor custo-benefício", "Biblioteca inteira"],
  description:
    "Para quem não quer parar em uma única prateleira. Com o Acesso Completo ao Acervo, a chave principal abre a Biblioteca inteira durante o período da assinatura.",
  includes: [
    "Coleção de Bolso",
    "Dossiês",
    "Grimórios",
    "Prateleira Secreta",
    "novas obras catalogadas no Acervo durante o período da assinatura, se essa regra for mantida",
    "entrada pela área de membros",
    "experiência completa da Biblioteca dos Mistérios",
  ],
  supportCopy: "Se uma única prateleira já resolve bastante, o Acervo Completo resolve a Biblioteca inteira.",
  cta: "Ativar a chave principal",
  href: checkoutLinks.acervoCompleto,
} as const;

export const secretShelfItems = [
  "Arquivos Mensais",
  "Fichas Secretas",
  "Bastidores do Acervo",
  "Obras em desenvolvimento",
  "Drops semanais",
  "Notas de curadoria",
  "Fragmentos de investigação",
  "Prévias de futuras obras",
] as const;

export const comparisonRows = [
  {
    label: "Coleção de Bolso",
    bolso: true,
    dossies: false,
    grimorios: false,
    acervo: true,
  },
  {
    label: "Dossiês",
    bolso: false,
    dossies: true,
    grimorios: false,
    acervo: true,
  },
  {
    label: "Grimórios",
    bolso: false,
    dossies: false,
    grimorios: true,
    acervo: true,
  },
  {
    label: "Prateleira Secreta",
    bolso: false,
    dossies: false,
    grimorios: false,
    acervo: true,
  },
  {
    label: "Área de membros",
    bolso: true,
    dossies: true,
    grimorios: true,
    acervo: true,
  },
  {
    label: "Novas obras da prateleira",
    bolso: true,
    dossies: true,
    grimorios: true,
    acervo: true,
  },
  {
    label: "Biblioteca inteira",
    bolso: false,
    dossies: false,
    grimorios: false,
    acervo: true,
  },
  {
    label: "Melhor custo-benefício",
    bolso: false,
    dossies: false,
    grimorios: false,
    acervo: true,
  },
] as const;

export const plansFaq = [
  {
    question: "Posso comprar apenas uma obra?",
    answer:
      "Sim. As obras avulsas continuam disponíveis. Você pode comprar uma obra específica da Coleção de Bolso, dos Dossiês ou dos Grimórios.",
  },
  {
    question: "Qual a diferença entre ficha avulsa e chave anual?",
    answer:
      "Na ficha avulsa, você consulta apenas aquela obra. No cartão de prateleira, você acompanha as obras daquela categoria durante o período da assinatura. No Acervo Completo, a chave principal abre a Biblioteca inteira.",
  },
  {
    question: "O que é a Prateleira Secreta?",
    answer:
      "É uma área reservada para assinantes do Acervo Completo, com notas, fichas, arquivos, bastidores e obras em desenvolvimento que não são vendidas separadamente.",
  },
  {
    question: "O Acervo Completo inclui tudo?",
    answer:
      "Sim. O Acervo Completo inclui Coleção de Bolso, Dossiês, Grimórios e a Prateleira Secreta durante o período da assinatura.",
  },
  {
    question: "A chave é mensal?",
    answer:
      "A comunicação principal é de acesso anual. A chave anual pode ser paga em até 12x, dependendo da configuração final do checkout.",
  },
  {
    question: "Novas obras entram no Acervo?",
    answer:
      "As novas obras adicionadas ao Acervo durante o período da assinatura podem ser incluídas conforme a política editorial vigente da Biblioteca.",
  },
  {
    question: "Onde acesso os materiais?",
    answer:
      "A consulta às obras acontece pela área de membros da Biblioteca/Kiwify, conforme a configuração final do checkout.",
  },
] as const;

export const editorialBanners = [
  {
    label: "Assinatura anual",
    title: "A porta principal do Acervo",
    copy:
      "A Biblioteca inteira organizada como acesso contínuo, com linguagem editorial e entrada clara para quem quer permanecer no Acervo.",
    image: "images/editorial/assinatura-anual-panorama.png",
    alt: "Banner editorial da assinatura anual da Biblioteca dos Mistérios",
  },
  {
    label: "Coleção de Grimórios",
    title: "Conheça os Grimórios",
    copy:
      "Uma apresentação ampla da prateleira mais densa da Biblioteca, para quem busca obras de consulta e aprofundamento.",
    image: "images/editorial/conheca-os-grimorios.png",
    alt: "Banner editorial apresentando a coleção de grimórios da Biblioteca dos Mistérios",
  },
  {
    label: "Acervo em expansão",
    title: "Estudos do Invisível",
    copy:
      "Um sinal de continuidade editorial: novas peças e próximos ciclos já aparecem como horizonte do Acervo.",
    image: "images/editorial/estudos-invisivel.png",
    alt: "Banner editorial da coleção Estudos do Invisível com sete novos grimórios em breve",
  },
] as const;
