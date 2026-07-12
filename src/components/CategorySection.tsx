import { BookMarked, Files, KeyRound, ScrollText } from "lucide-react";

const categories = [
  {
    title: "Coleções de Bolso",
    copy: "Obras leves, acessíveis, práticas e colecionáveis para começar uma investigação.",
    microcopy: "Primeiras chaves do Acervo.",
    icon: BookMarked,
  },
  {
    title: "Dossiês",
    copy: "Investigações mais profundas, com diferentes perspectivas sobre um tema simbólico.",
    microcopy: "Fichas densas de pesquisa.",
    icon: Files,
  },
  {
    title: "Grimórios",
    copy: "Obras de consulta permanente, com sistemas, símbolos, práticas e referências.",
    microcopy: "Cadernos de uso recorrente.",
    icon: ScrollText,
  },
  {
    title: "Acesso Completo ao Acervo",
    copy: "A entrada mais ampla para acompanhar a evolução da Biblioteca durante 12 meses.",
    microcopy: "Acesso principal.",
    icon: KeyRound,
  },
];

export function CategorySection() {
  return (
    <section className="section-shell section-pad">
      <div className="section-heading">
        <p className="eyebrow">Selos editoriais</p>
        <h2>O Acervo é organizado por tipos de investigação.</h2>
      </div>
      <div className="category-grid">
        {categories.map(({ title, copy, microcopy, icon: Icon }) => (
          <article className="category-card" key={title}>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{copy}</p>
            <span>{microcopy}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
