const catalogEntries = [
  {
    label: "Acervo em expansão",
    title: "Em catalogação",
    copy:
      "Novos arquivos seguem em preparo para entrar no Acervo, mantendo a sensação de biblioteca viva e expansão contínua.",
    image: "images/editorial/em-catalogacao.png",
    alt: "Painel editorial indicando conteúdos em catalogação na Biblioteca dos Mistérios",
  },
  {
    label: "Próximo ciclo",
    title: "Estudos do Invisível",
    copy:
      "Um próximo ciclo de grimórios já aparece no horizonte, com novas investigações simbólicas em desenvolvimento.",
    image: "images/editorial/estudos-invisivel.png",
    alt: "Banner editorial da coleção Estudos do Invisível com sete novos grimórios em breve",
  },
  {
    label: "Coleção de Grimórios",
    title: "Conheça os Grimórios",
    copy:
      "Uma apresentação mais ampla da coleção para sustentar a ideia de consulta profunda, arquivo especial e continuidade simbólica.",
    image: "images/editorial/conheca-os-grimorios.png",
    alt: "Banner editorial apresentando a coleção de grimórios da Biblioteca dos Mistérios",
  },
  {
    label: "Grimório 2",
    title: "A Arte de Unir Mundos",
    copy:
      "Esta peça funciona como janela para a linguagem visual da Geometria Sagrada e acrescenta densidade contemplativa ao conjunto.",
    image: "images/editorial/arte-de-unir-mundos.png",
    alt: "Banner editorial do Grimório 2 Geometria Sagrada com diagrama geométrico",
  },
  {
    label: "Grimório 1",
    title: "A Estranha Transição",
    copy:
      "A composição noturna e a cena de travessia ampliam o imaginário dos grimórios sem roubar protagonismo das capas vendáveis.",
    image: "images/editorial/estranha-transicao.png",
    alt: "Banner editorial do Grimório 1 Projeção Astral com cena noturna e atmosfera contemplativa",
  },
];

export function CatalogPreview() {
  return (
    <section className="section-shell section-pad catalog-preview-section" aria-labelledby="catalog-preview-title">
      <div className="section-heading narrow">
        <p className="eyebrow">Em preparo</p>
        <h2 id="catalog-preview-title">O Acervo continua crescendo com a mesma linguagem visual.</h2>
        <p>
          Em vez de prometer volume vazio, a Biblioteca expande por ciclos. Estas peças entram aqui como
          sinal de continuidade editorial, não como ruído.
        </p>
      </div>

      <div className="catalog-preview-grid">
        {catalogEntries.map(({ label, title, copy, image, alt }) => (
          <article className="catalog-preview-card" key={title}>
            <div className="catalog-preview-media">
              <img src={image} alt={alt} loading="lazy" />
            </div>
            <div className="catalog-preview-copy">
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
