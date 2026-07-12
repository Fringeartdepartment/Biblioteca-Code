import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const catalogProducts = products.filter((product) => !product.featured);

  return (
    <section className="section-shell section-pad" id="acervo">
      <div className="section-heading">
        <p className="eyebrow">Obras disponíveis</p>
        <h2>Escolha sua primeira publicação catalogada.</h2>
        <p>
          Guias, dossiês e grimórios podem ser explorados individualmente. Cada obra é uma entrada para o
          Acervo: uma chave, uma ficha, uma pequena investigação.
        </p>
      </div>

      <div className="product-showcase">
        <div className="product-grid" aria-label="Obras avulsas">
          {catalogProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
