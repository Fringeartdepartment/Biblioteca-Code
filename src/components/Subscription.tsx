import { Check, KeyRound, Sparkles } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { featuredCheckoutUrl } from "../data/products";

const subscriptionBenefits = [
  "Acesso aos materiais da Coleção de Bolso",
  "Acesso aos Dossiês disponíveis",
  "Acesso aos Grimórios disponíveis",
  "Novos materiais adicionados durante o período",
  "Mais econômico do que comprar separadamente",
];

export function Subscription() {
  return (
    <section className="section-shell section-pad" id="assinatura">
      <div className="subscription-panel">
        <div className="subscription-media" aria-hidden="true">
          <div className="subscription-art">
            <img src="images/editorial/assinatura-anual.png" alt="" loading="lazy" />
            <div className="subscription-price-card">
              <span>12 meses</span>
              <strong>R$ 297</strong>
              <small>Acesso completo</small>
            </div>
          </div>
        </div>
        <div className="subscription-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            Oferta principal
          </p>
          <h2>Acesso Completo ao Acervo</h2>
          <p>
            O Acesso Completo ao Acervo é a forma mais ampla de entrar na Biblioteca dos Mistérios. Em vez
            de escolher uma única obra, você acompanha a expansão contínua do Acervo e acessa as publicações
            disponíveis em uma experiência única.
          </p>
          <ul className="subscription-benefits" aria-label="Benefícios da assinatura">
            {subscriptionBenefits.map((benefit) => (
              <li key={benefit}>
                <Check size={18} />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="subscription-comparison">
            Comprando separadamente, o acervo pode ultrapassar centenas de reais. No acesso completo, você
            entra por <strong>R$ 297</strong>.
          </div>
          <div className="subscription-actions">
            <ButtonLink href={featuredCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <KeyRound size={18} />
              Entrar no Acervo Completo
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
