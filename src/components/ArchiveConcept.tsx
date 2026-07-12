import { Archive, BookMarked, KeyRound } from "lucide-react";

const notes = [
  {
    title: "Obras, não itens soltos",
    copy: "Guias, dossiês e grimórios entram como publicações catalogadas dentro de um universo maior.",
    icon: BookMarked,
  },
  {
    title: "Curadoria antes de volume",
    copy: "Cada tema é tratado como porta de entrada para investigação, imaginação e pensamento simbólico.",
    icon: Archive,
  },
  {
    title: "Acesso como coleção",
    copy: "A assinatura acompanha a expansão do Acervo e reúne as obras em uma experiência contínua.",
    icon: KeyRound,
  },
];

export function ArchiveConcept() {
  return (
    <section className="section-shell section-pad archive-concept" id="conceito-acervo">
      <div className="section-heading">
        <p className="eyebrow">O Acervo</p>
        <h2>A obra principal é a Biblioteca inteira.</h2>
        <p>
          Cada publicação funciona como uma ficha catalogada, uma chave de entrada ou um dossiê dentro de
          uma coleção viva. A experiência foi pensada para descoberta, consulta e retorno.
        </p>
      </div>
      <div className="archive-note-grid">
        {notes.map(({ title, copy, icon: Icon }) => (
          <article className="archive-note" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
