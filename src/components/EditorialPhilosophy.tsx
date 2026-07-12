const principles = [
  "Curiosidade antes da certeza.",
  "Investigação com imaginação e pensamento crítico.",
  "Mistério sem terror, espiritualidade sem exagero.",
  "Beleza editorial a serviço da clareza.",
];

export function EditorialPhilosophy() {
  return (
    <section className="section-shell section-pad philosophy-section">
      <div className="philosophy-panel">
        <p className="eyebrow">Filosofia editorial</p>
        <h2>Um acervo secreto pop-místico, feito para observar melhor.</h2>
        <p>
          A Biblioteca trata símbolos, práticas e histórias como matéria de estudo sensível. O objetivo não
          é prometer revelações fáceis, mas criar publicações bonitas, acessíveis e bem organizadas para
          quem gosta de investigar o invisível com os pés no chão.
        </p>
        <div className="philosophy-list" aria-label="Princípios editoriais">
          {principles.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
