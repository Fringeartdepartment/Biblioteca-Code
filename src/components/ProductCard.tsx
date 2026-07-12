import { Check, ExternalLink, Sparkles } from "lucide-react";
import type { Product } from "../data/products";

export function ProductCard({ product }: { product: Product }) {
  const displayPrice = product.featured ? product.price : product.price.replace(/^R\$\s*/, "");

  return (
    <article className={`product-card ${product.featured ? "product-card-featured" : ""}`}>
      <div className="product-media">
        <img src={product.image} alt={`Capa da obra ${product.title}`} loading="lazy" />
      </div>
      <div className="product-body">
        <span className="tag">
          {product.featured ? <Sparkles size={14} /> : null}
          {product.featured ? "Oferta principal" : product.category}
        </span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        {product.featured ? (
          <ul className="product-feature-list" aria-label="Benefícios do acesso completo">
            <li>
              <Check size={16} />
              12 meses de acesso ao acervo
            </li>
            <li>
              <Check size={16} />
              Coleção de Bolso, Dossiês e Grimórios
            </li>
            <li>
              <Check size={16} />
              Melhor custo-benefício da Biblioteca
            </li>
          </ul>
        ) : null}
        <div className="product-footer">
          <strong>{displayPrice}</strong>
          <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" aria-label={`Explorar ${product.title}`}>
            {product.featured ? "Entrar no Acervo" : "Abrir ficha da obra"}
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
