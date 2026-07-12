import { ButtonLink } from "./ButtonLink";
import { featuredCheckoutUrl } from "../data/products";

export function SignaturePanorama() {
  return (
    <section className="section-shell section-pad signature-panorama-section" aria-labelledby="signature-panorama-title">
      <div className="signature-panorama-card">
        <div className="signature-panorama-media">
          <img
            src="images/editorial/assinatura-anual-panorama.png"
            alt="Banner editorial da assinatura anual da Biblioteca dos Mistérios"
            loading="lazy"
          />
        </div>
        <div className="signature-panorama-copy">
          <p className="eyebrow">Acesso principal</p>
          <h2 id="signature-panorama-title">Uma entrada ampla para quem quer viver a Biblioteca como coleção.</h2>
          <p>
            Esta peça funciona como abertura editorial da assinatura: menos oferta isolada, mais sensação de
            universo completo, continuidade e descoberta ao longo do ano.
          </p>
          <ButtonLink href={featuredCheckoutUrl} target="_blank" rel="noopener noreferrer">
            Ver Acesso Completo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
