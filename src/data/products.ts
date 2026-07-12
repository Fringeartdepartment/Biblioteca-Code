export type Product = {
  title: string;
  category: "Assinatura" | "Coleção de Bolso" | "Dossiê" | "Grimório";
  description: string;
  price: string;
  image: string;
  symbol: string;
  checkoutUrl: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    title: "Acesso Completo ao Acervo",
    category: "Assinatura",
    description:
      "A entrada principal para acompanhar a Biblioteca por 12 meses e acessar as publicações disponíveis do Acervo.",
    price: "R$ 297",
    image: "images/editorial/assinatura-anual.png",
    symbol: "✦",
    checkoutUrl: "https://pay.kiwify.com.br/tVXNQff",
    featured: true,
  },
  {
    title: "Oráculo de Bolso do Tarot",
    category: "Coleção de Bolso",
    description:
      "Uma publicação de bolso para observar os arquétipos do Tarot como linguagem simbólica e ferramenta de leitura.",
    price: "R$ 14",
    image: "images/produtos/oraculo-tarot.png",
    symbol: "☉",
    checkoutUrl: "https://pay.kiwify.com.br/fOCgPyc",
  },
  {
    title: "Oráculo de Bolso dos Sonhos",
    category: "Coleção de Bolso",
    description:
      "Uma obra breve para registrar imagens do inconsciente, perceber recorrências e investigar sonhos com delicadeza.",
    price: "R$ 14",
    image: "images/produtos/oraculo-dos-sonhos.png",
    symbol: "☾",
    checkoutUrl: "https://pay.kiwify.com.br/ULoagjR",
  },
  {
    title: "Herbário de Bolso",
    category: "Coleção de Bolso",
    description:
      "Uma ficha de entrada para o universo das ervas, seus usos simbólicos e sua presença em rituais cotidianos.",
    price: "R$ 14",
    image: "images/produtos/herbario-bolso.png",
    symbol: "✢",
    checkoutUrl: "https://pay.kiwify.com.br/zBpK5oF",
  },
  {
    title: "Enciclopédia de Bolso das Fases da Lua",
    category: "Coleção de Bolso",
    description:
      "Uma publicação para acompanhar fases lunares, ciclos emocionais e pequenos rituais de organização interior.",
    price: "R$ 14",
    image: "images/produtos/fases-da-lua.png",
    symbol: "☽",
    checkoutUrl: "https://pay.kiwify.com.br/bJc0cy2",
  },
  {
    title: "Manual de Bolso da Yoga",
    category: "Coleção de Bolso",
    description:
      "Um guia visual para compreender fundamentos, posturas e princípios da yoga como prática de presença.",
    price: "R$ 14",
    image: "images/produtos/manual-yoga.png",
    symbol: "◇",
    checkoutUrl: "https://pay.kiwify.com.br/8YfOveR",
  },
  {
    title: "Dossiê nº1 - O Duplo",
    category: "Dossiê",
    description:
      "Um dossiê sobre espelhamento, identidade, sombra e as imagens duplicadas que atravessam a consciência.",
    price: "R$ 27",
    image: "images/produtos/dossie-o-duplo.png",
    symbol: "Ⅱ",
    checkoutUrl: "https://pay.kiwify.com.br/Lag2bDv",
  },
  {
    title: "Dossiê nº2 - Sincronicidades",
    category: "Dossiê",
    description:
      "Uma investigação sobre coincidências significativas, padrões invisíveis e formas de perceber sentido.",
    price: "R$ 27",
    image: "images/produtos/dossie-sincronicidades.png",
    symbol: "✶",
    checkoutUrl: "https://pay.kiwify.com.br/s0ZQ816",
  },
  {
    title: "Dossiê nº3 - O Átomo",
    category: "Dossiê",
    description:
      "Uma travessia entre matéria, símbolo e imaginação para observar o átomo como imagem de ordem.",
    price: "R$ 27",
    image: "images/produtos/dossie-atomo.png",
    symbol: "⊙",
    checkoutUrl: "https://pay.kiwify.com.br/Lff32At",
  },
  {
    title: "Dossiê nº4 - Helena Blavatsky",
    category: "Dossiê",
    description:
      "Um retrato editorial de Helena Blavatsky, sua influência esotérica e os imaginários que ajudou a organizar.",
    price: "R$ 27",
    image: "images/produtos/dossie-blavatsky.png",
    symbol: "✧",
    checkoutUrl: "https://pay.kiwify.com.br/V4OXLMp",
  },
  {
    title: "Dossiê nº5 - A Anatomia do Mapa Astral",
    category: "Dossiê",
    description:
      "Um dossiê para observar casas, planetas, signos e relações internas do mapa astral como arquitetura simbólica.",
    price: "R$ 27",
    image: "images/produtos/dossie-mapa-astral.png",
    symbol: "♁",
    checkoutUrl: "https://pay.kiwify.com.br/mKi9yqO",
  },
  {
    title: "Grimório 1 - Viagem Astral",
    category: "Grimório",
    description:
      "Um grimório visual para estudar projeção astral, preparar registros e criar rituais de observação.",
    price: "R$ 64",
    image: "images/produtos/grimorio-viagem-astral.png",
    symbol: "⌁",
    checkoutUrl: "https://pay.kiwify.com.br/4nLypnS",
  },
  {
    title: "Grimório 2 - Geometria Sagrada",
    category: "Grimório",
    description:
      "Um atlas de formas, símbolos e exercícios para perceber a geometria como linguagem de ordem e contemplação.",
    price: "R$ 64",
    image: "images/produtos/grimorio-geometria-sagrada.png",
    symbol: "⬡",
    checkoutUrl: "https://pay.kiwify.com.br/JU5StbH",
  },
];

export const featuredCheckoutUrl = products[0].checkoutUrl;
