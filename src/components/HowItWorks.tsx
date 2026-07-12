import { CreditCard, Download, MousePointerClick } from "lucide-react";

const steps = [
  { title: "Escolha sua obra", icon: MousePointerClick },
  { title: "Finalize a compra pela Kiwify", icon: CreditCard },
  { title: "Receba o acesso digital", icon: Download },
];

export function HowItWorks() {
  return (
    <section className="section-shell section-pad split-section">
      <div className="section-heading compact">
        <p className="eyebrow">Como funciona</p>
        <h2>Da ficha do Acervo ao acesso digital.</h2>
        <p>
          Todas as obras são digitais. Após a escolha, o acesso é entregue pela Kiwify de forma simples
          e segura.
        </p>
      </div>
      <div className="step-grid">
        {steps.map(({ title, icon: Icon }, index) => (
          <article className="step-card" key={title}>
            <span>0{index + 1}</span>
            <Icon size={25} />
            <h3>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
