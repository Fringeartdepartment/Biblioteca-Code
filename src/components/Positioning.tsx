import { BookOpenText, Gem, Telescope } from "lucide-react";

const pillars = [
  {
    title: "Editora digital",
    copy: "Publicações criadas com pesquisa, forma editorial e cuidado visual para leitura recorrente.",
    icon: Telescope,
  },
  {
    title: "Estúdio criativo",
    copy: "Símbolos, imagens, fichas e coleções organizados para transformar curiosidade em descoberta.",
    icon: BookOpenText,
  },
  {
    title: "Acervo vivo",
    copy: "Cada obra entra como parte de uma biblioteca maior, em expansão contínua e curadoria permanente.",
    icon: Gem,
  },
];

export function Positioning() {
  return (
    <section className="section-shell section-pad" id="posicionamento">
      <div className="positioning-intro">
        <div className="section-heading positioning-heading">
          <p className="eyebrow">O que é a Biblioteca</p>
          <h2>Uma editora digital, um estúdio criativo e um acervo vivo de conhecimento simbólico.</h2>
          <p>
            A Biblioteca dos Mistérios organiza obras digitais sobre simbolismo, espiritualidade,
            imaginação, cultura e mistérios da experiência humana. Não é uma prateleira de itens soltos: é
            uma coleção editorial para mentes curiosas.
          </p>
        </div>
        <div className="positioning-image">
          <img
            src="images/brand/hero-biblioteca.png"
            alt="Biblioteca mística com livros e atmosfera noturna"
            loading="lazy"
          />
        </div>
      </div>

      <div className="pillar-grid">
        {pillars.map(({ title, copy, icon: Icon }, index) => (
          <article className="symbol-card" key={title}>
            <span className="symbol-card-index">0{index + 1}</span>
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
