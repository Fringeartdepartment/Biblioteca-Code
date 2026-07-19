import { ArrowDown, KeyRound, LibraryBig, Sparkles } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { featuredCheckoutUrl, products } from "../data/products";
import { buildRoute } from "../utils/routes";

const shelfGroups = [
  {
    title: "Guias de Bolso",
    catalog: "PRAT. 01 / CONSULTA",
    note: "Consultas breves para perguntas que acompanham o cotidiano.",
    seal: "5 obras",
    covers: ["Oráculo de Bolso dos Sonhos", "Enciclopédia de Bolso das Fases da Lua", "Herbário de Bolso"],
  },
  {
    title: "Dossiês",
    catalog: "PRAT. 02 / INVESTIGAÇÃO",
    note: "Investigações editoriais sobre símbolos, ideias e personagens.",
    seal: "5 obras",
    covers: ["Dossiê nº1 - O Duplo", "Dossiê nº2 - Sincronicidades", "Dossiê nº5 - A Anatomia do Mapa Astral"],
  },
  {
    title: "Grimórios",
    catalog: "PRAT. 03 / ESTUDO",
    note: "Estudos densos para atravessar sistemas e práticas simbólicas.",
    seal: "2 obras",
    covers: ["Grimório 1 - Viagem Astral", "Grimório 2 - Geometria Sagrada"],
  },
].map((group) => ({
  ...group,
  products: group.covers
    .map((title) => products.find((product) => product.title === title))
    .filter((product) => product !== undefined),
}));

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

        <div className="archive-shelf fade-in" aria-label="Prateleiras catalogadas da Biblioteca dos Mistérios">
          <div className="archive-shelf-heading">
            <div>
              <span>ACERVO CATALOGADO</span>
              <strong>Escolha uma prateleira para explorar</strong>
            </div>
            <div className="archive-shelf-key" aria-hidden="true">
              <KeyRound size={22} />
              <span>CHAVE GERAL · 0427</span>
            </div>
          </div>

          <div className="archive-shelf-cabinet">
            {shelfGroups.map((group, groupIndex) => (
              <a className="archive-shelf-bay" href="#acervo" key={group.title}>
                <div className="archive-shelf-catalog">
                  <span>{group.catalog}</span>
                  <b>{String(groupIndex + 1).padStart(2, "0")}</b>
                </div>
                <div className="archive-shelf-books" aria-hidden="true">
                  {group.products.map((product) => (
                    <img key={product.title} src={product.image} alt="" />
                  ))}
                </div>
                <div className="archive-shelf-label">
                  <span>{group.seal}</span>
                  <strong>{group.title}</strong>
                  <p>{group.note}</p>
                  <small>Explorar prateleira →</small>
                </div>
              </a>
            ))}
          </div>

          <div className="archive-shelf-ledger" aria-hidden="true">
            <span>COMPRA AVULSA DISPONÍVEL</span>
            <i />
            <span>ACESSOS ANUAIS</span>
            <i />
            <span>TODAS INCLUÍDAS NO ACERVO COMPLETO</span>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#posicionamento" aria-label="Ir para a próxima seção">
        <ArrowDown size={18} />
      </a>
    </header>
  );
}
