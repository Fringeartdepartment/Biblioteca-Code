import { ArrowDown, LibraryBig, Sparkles } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { featuredCheckoutUrl, products } from "../data/products";
import { buildRoute } from "../utils/routes";

const heroCovers = [
  products.find((product) => product.title === "Acesso Completo ao Acervo"),
  products.find((product) => product.title === "Grimório 1 - Viagem Astral"),
  products.find((product) => product.title === "Dossiê nº5 - A Anatomia do Mapa Astral"),
].filter(Boolean);

export function Hero() {
  return (
    <header className="hero">
      <div className="cosmic-pixel-field" aria-hidden="true" />
      <nav className="topbar section-shell" aria-label="Navegação principal">
        <a className="brand-mark" href={buildRoute("/")} aria-label="Biblioteca dos Mistérios">
          <LibraryBig size={22} />
          <span>Biblioteca dos Mistérios</span>
        </a>
        <div className="topbar-links">
          <a className="topbar-link" href="#acervo">
            Ver acervo
          </a>
          <a className="topbar-link" href={buildRoute("/planos")}>
            Ver planos
          </a>
        </div>
      </nav>

      <div className="hero-grid section-shell" id="inicio">
        <div className="hero-copy fade-in">
          <p className="eyebrow">
            <Sparkles size={16} />
            Acervo secreto pop-místico
          </p>
          <h1>Biblioteca dos Mistérios</h1>
          <p className="hero-statement">Um acervo para mentes curiosas.</p>
          <p className="hero-subtitle">
            Obras digitais sobre simbolismo, desenvolvimento humano, espiritualidade, imaginação e
            mistérios da experiência humana, criadas com profundidade, beleza e curadoria editorial.
          </p>
          <div className="hero-value-row" aria-label="Destaques do acervo">
            <span>12 meses de acesso</span>
            <span>Obras digitais</span>
            <span>Compra segura Kiwify</span>
          </div>
          <div className="hero-actions">
            <ButtonLink href={featuredCheckoutUrl} target="_blank" rel="noopener noreferrer">
              Explorar o Acervo
            </ButtonLink>
            <ButtonLink href="#acervo" variant="secondary">
              Ver Obras Disponíveis
            </ButtonLink>
          </div>
        </div>

        <div className="hero-visual fade-in" aria-label="Portal editorial da Biblioteca dos Mistérios">
          <img src="images/brand/hero-biblioteca.png" alt="Biblioteca mística com livros e atmosfera noturna" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-cover-rail" aria-hidden="true">
            {heroCovers.map((product) => (
              <img key={product!.title} src={product!.image} alt="" />
            ))}
          </div>
          <div className="hero-inscription">
            <span>Guias</span>
            <span>Dossiês</span>
            <span>Grimórios</span>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#posicionamento" aria-label="Ir para a próxima seção">
        <ArrowDown size={18} />
      </a>
    </header>
  );
}
