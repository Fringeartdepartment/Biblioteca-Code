import { ButtonLink } from "./ButtonLink";
import { featuredCheckoutUrl } from "../data/products";
import { buildRoute } from "../utils/routes";

export function FinalCta() {
  return (
    <section className="final-cta section-shell">
      <p className="eyebrow">A Biblioteca está aberta</p>
      <h2>Entre no Acervo e escolha sua primeira obra.</h2>
      <p>
        Comece por um guia, um dossiê ou um grimório. A Biblioteca dos Mistérios está em expansão.
      </p>
      <div className="final-cta-actions">
        <ButtonLink href={featuredCheckoutUrl} target="_blank" rel="noopener noreferrer">
          Entrar no Acervo Completo
        </ButtonLink>
        <ButtonLink href={buildRoute("/planos")} variant="secondary">
          Ver Planos e Prateleiras
        </ButtonLink>
      </div>
    </section>
  );
}
