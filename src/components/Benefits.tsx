import { Check, LockKeyhole, MonitorSmartphone, PackageCheck } from "lucide-react";

const benefits = [
  "Obras digitais acessíveis",
  "Publicações organizadas para consulta",
  "Design editorial para leitura",
  "Temas profundos em linguagem clara",
  "Compra segura pela Kiwify",
  "Acesso imediato após confirmação",
  "Acervo em expansão constante",
];

const seals = [
  { title: "Obra digital", icon: PackageCheck },
  { title: "Acesso online", icon: MonitorSmartphone },
  { title: "Compra segura", icon: LockKeyhole },
  { title: "Acervo em expansão", icon: Check },
];

export function Benefits() {
  return (
    <section className="section-shell section-pad">
      <div className="benefit-panel">
        <div>
          <p className="eyebrow">Curadoria visual</p>
          <h2>Profundidade sem excesso. Mistério com clareza.</h2>
          <p>
            A Biblioteca dos Mistérios foi criada para quem busca conhecimento profundo, mas não quer se
            perder em excesso de informação. Cada obra é pensada como uma porta de entrada para um tema
            simbólico, espiritual ou filosófico.
          </p>
        </div>
        <ul className="benefit-list" aria-label="Benefícios">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <Check size={18} />
              {benefit}
            </li>
          ))}
        </ul>
        <div className="seal-row" aria-label="Selos de confiança">
          {seals.map(({ title, icon: Icon }) => (
            <span key={title}>
              <Icon size={17} />
              {title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
