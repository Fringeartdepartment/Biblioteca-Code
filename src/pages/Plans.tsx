import {
  Check,
  DoorOpen,
  KeyRound,
  LibraryBig,
  LockKeyhole,
  ScrollText,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { ProductCard } from "../components/ProductCard";
import {
  accessLogic,
  checkoutLinks,
  comparisonRows,
  fullAccessPlan,
  planHero,
  plansFaq,
  shelfPlans,
  standaloneShelves,
} from "../data/plans";
import { products } from "../data/products";
import { buildRoute } from "../utils/routes";

const comparisonColumns = [
  { key: "bolso", label: "Prateleira de Bolso" },
  { key: "dossies", label: "Dossiês" },
  { key: "grimorios", label: "Grimórios" },
  { key: "acervo", label: "Acervo Completo" },
] as const;

const accessCardMeta = [
  { id: "ID: FA-001", type: "TIPO: OBRA UNICA", stamp: "FICHA" },
  { id: "ID: CP-108", type: "TIPO: CATEGORIA", stamp: "CARTAO" },
  { id: "ID: AC-297", type: "TIPO: BIBLIOTECA INTEIRA", stamp: "CHAVE" },
] as const;

const shelfProductGroups = [
  {
    key: "bolso",
    title: "Coleção de Bolso",
    description: "Obras breves, visuais e colecionáveis para entrar por um tema específico.",
    catalogId: "PRATELEIRA: BOLSO",
    contextNote: "Capas breves para consulta recorrente no celular.",
    products: products.filter((product) => product.category === "Coleção de Bolso"),
  },
  {
    key: "dossie",
    title: "Dossiês",
    description: "Investigações editoriais para quem quer aprofundar um assunto com mais contexto.",
    catalogId: "PRATELEIRA: DOSSIÊS",
    contextNote: "Arquivos investigativos, temas raros e fichas de aprofundamento.",
    products: products.filter((product) => product.category === "Dossiê"),
  },
  {
    key: "grimorio",
    title: "Grimórios",
    description: "Obras mais densas, práticas e contemplativas da Biblioteca.",
    catalogId: "PRATELEIRA: GRIMÓRIOS",
    contextNote: "Estudos densos, simbólicos e feitos para consulta recorrente.",
    products: products.filter((product) => product.category === "Grimório"),
  },
] as const;

export function Plans() {
  const [openProductGroups, setOpenProductGroups] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const openTargetGroup = () => {
      const targetKey = window.location.hash.replace("#group-", "");

      if (shelfProductGroups.some((group) => group.key === targetKey)) {
        setOpenProductGroups((current) => new Set(current).add(targetKey));
      }
    };

    openTargetGroup();
    window.addEventListener("hashchange", openTargetGroup);

    return () => window.removeEventListener("hashchange", openTargetGroup);
  }, []);

  return (
    <main className="plans-page">
      <header className="plans-hero">
        <div className="cosmic-pixel-field" aria-hidden="true" />
        <div className="plans-hero-archive-layer" aria-hidden="true">
          <span className="plans-archive-chip plans-archive-chip-one">ACERVO SECRETO POP-MISTICO</span>
          <span className="plans-archive-chip plans-archive-chip-two">STATUS: MEMBRO ATIVO</span>
          <span className="plans-archive-chip plans-archive-chip-three">PERGUNTAR E O NOSSO SUPERPODER</span>
        </div>
        <nav className="topbar section-shell" aria-label="Navegação da página de planos">
          <a className="brand-mark" href={buildRoute("/")} aria-label="Voltar ao acervo principal">
            <LibraryBig size={22} />
            <span>Biblioteca dos Mistérios</span>
          </a>
          <div className="topbar-links">
            <a className="topbar-link" href={buildRoute("/")}>
              Ver acervo
            </a>
            <a className="topbar-link" href="#comparativo">
              Ver registro
            </a>
          </div>
        </nav>

        <div className="plans-hero-grid section-shell section-pad" id="inicio">
          <div className="plans-hero-copy fade-in">
            <p className="eyebrow">
              <Sparkles size={16} />
              {planHero.eyebrow}
            </p>
            <h1>{planHero.title}</h1>
            <div className="plans-hero-copy-block">
              <p className="hero-subtitle">{planHero.subtitle}</p>
              <p className="plans-hero-microcopy">{planHero.microcopy}</p>
            </div>
            <div className="plans-hero-ladder" aria-label="Diferença entre formatos de acesso">
              <span>Obra avulsa = 1 obra</span>
              <span>Prateleira = 1 categoria</span>
              <span>Acervo Completo = Biblioteca inteira</span>
            </div>
            <div className="plans-hero-action-row">
              <div className="hero-actions">
                <ButtonLink href="#acervo-completo">
                  Ver a chave principal
                </ButtonLink>
                <ButtonLink href="#obras-avulsas" variant="secondary">
                  Abrir uma ficha avulsa
                </ButtonLink>
              </div>
              <div className="plans-hero-note">
                <strong>Nota de acesso:</strong>
                <span>uma ficha abre uma obra, uma prateleira abre uma categoria, a chave principal abre a Biblioteca inteira.</span>
              </div>
            </div>
          </div>

          <div className="plans-hero-collage fade-in" aria-label="Mapa visual das portas de entrada da Biblioteca">
            <div className="plans-hero-paper-stack" aria-hidden="true" />
            <div className="plans-hero-book-spine" aria-hidden="true">
              <span>A Biblioteca</span>
              <strong>dos Mistérios</strong>
              <small>Acervo 2.0</small>
            </div>
            <div className="plans-hero-reader-card" aria-hidden="true">
              <span>CARTAO DE LEITOR</span>
              <strong>MENTES CURIOSAS</strong>
              <small>CHAVE 0427</small>
            </div>
            <img src="images/editorial/assinatura-anual-panorama.jpg" alt="Banner editorial da assinatura anual da Biblioteca dos Mistérios" />
            <div className="plans-hero-manifest-note" aria-hidden="true">
              <span>Menos obvio.</span>
              <span>Mais significado.</span>
            </div>
            <div className="plans-hero-ticket plans-hero-ticket-left">
              <span>Obra avulsa</span>
              <strong>uma entrada</strong>
            </div>
            <div className="plans-hero-ticket plans-hero-ticket-right">
              <span>Acervo Completo</span>
              <strong>todas as prateleiras</strong>
            </div>
            <div className="plans-hero-seal">
              <KeyRound size={18} />
              <span>Escolha a chave de acesso</span>
            </div>
            <div className="plans-hero-stamp" aria-hidden="true">ACERVO COMPLETO</div>
          </div>
        </div>
      </header>

      <section className="section-shell section-pad" id="como-funciona">
        <div className="section-heading narrow">
          <p className="eyebrow">
            <DoorOpen size={16} />
            Sistema do Acervo
          </p>
          <h2>Como entrar no Acervo</h2>
          <p>
            Três entradas resolvem a escolha: uma obra, uma prateleira ou a Biblioteca inteira.
          </p>
        </div>

        <div className="plans-clarity-band">
          <strong>Registro rápido:</strong>
          <span>ficha: uma obra</span>
          <span>cartão: uma prateleira</span>
          <span>chave: Biblioteca inteira</span>
        </div>

        <div className="plans-logic-grid">
          {accessLogic.map((item, index) => (
            <article key={item.title} className={`plans-logic-card plans-logic-card-${index + 1}`}>
              <span className="plans-card-index">0{index + 1}</span>
              <div className="plans-card-meta">
                <span>{accessCardMeta[index].id}</span>
                <span>{accessCardMeta[index].type}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="plans-card-stamp">{accessCardMeta[index].stamp}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad plans-acervo-priority" id="acervo-completo">
        <article className="plans-featured-card">
          <div className="plans-featured-stamp" aria-hidden="true">MEMBRO ATIVO</div>
          <div className="plans-featured-media">
            <img src="images/editorial/assinatura-anual.jpg" alt="Arte editorial do Acesso Completo ao Acervo" />
            <div className="plans-featured-badge">Mais escolhido</div>
          </div>

          <div className="plans-featured-copy">
            <p className="eyebrow">
              <LibraryBig size={16} />
              Chave principal
            </p>
            <h2>A chave principal do Acervo.</h2>
            <p className="plans-featured-name">{fullAccessPlan.title}</p>
            <strong className="plans-featured-price">{fullAccessPlan.price}</strong>
            <p className="plans-featured-kicker">
              Uma entrada para circular por Coleção de Bolso, Dossiês, Grimórios e a gaveta reservada.
            </p>
            <div className="plans-seal-row">
              {fullAccessPlan.seals.slice(0, 3).map((seal) => (
                <span key={seal}>{seal}</span>
              ))}
            </div>
            <ButtonLink href={fullAccessPlan.href}>{fullAccessPlan.cta}</ButtonLink>
          </div>
        </article>
      </section>

      <section className="section-shell section-pad" id="obras-avulsas">
        <div className="section-heading">
          <p className="eyebrow">
            <ScrollText size={16} />
            Entrada pontual
          </p>
          <h2>Fichas avulsas do Acervo</h2>
          <p>
            Três entradas pontuais para consultar uma obra sem abrir uma prateleira inteira.
          </p>
        </div>

        <div className="plans-standalone-grid">
          {standaloneShelves.map((item, index) => {
            const visualGroup = shelfProductGroups[index];

            return (
              <article key={item.title} className="plans-shelf-card">
                <div className="plans-category-seal">{item.title.split(" ")[0]}</div>
                <div className="plans-shelf-mockup" aria-hidden="true">
                  {visualGroup.products.slice(0, 3).map((product) => (
                    <img key={`${item.title}-${product.title}`} src={product.image} alt="" loading="lazy" />
                  ))}
                  <span className="plans-shelf-mockup-ticket">{visualGroup.catalogId}</span>
                </div>
                <div className="plans-shelf-card-head">
                  <p className="tag">{item.title}</p>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.description}</p>
                <div className="plans-shelf-meta">
                  <span>{visualGroup.products.length} obras catalogadas</span>
                  <span>STATUS: DISPONIVEL</span>
                </div>
                <ButtonLink href={item.href} variant="ghost">
                  {item.cta}
                </ButtonLink>
              </article>
            );
          })}
        </div>

        <div className="plans-product-groups">
          {shelfProductGroups.map((group) => (
            <details
              key={group.key}
              className="plans-product-group"
              id={`group-${group.key}`}
              open={openProductGroups.has(group.key)}
              onToggle={(event) => {
                const isOpen = event.currentTarget.open;

                setOpenProductGroups((current) => {
                  const next = new Set(current);

                  if (isOpen) {
                    next.add(group.key);
                  } else {
                    next.delete(group.key);
                  }

                  return next;
                });
              }}
            >
              <summary className="plans-product-group-head">
                <div>
                  <p className="eyebrow">{group.title}</p>
                  <h3>Gaveta: {group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <span className="plans-product-count">{group.products.length} obras</span>
              </summary>
              <div className="plans-product-context">
                <div className="plans-product-context-copy">
                  <span>{group.catalogId}</span>
                  <strong>{group.title}</strong>
                  <p>{group.contextNote}</p>
                </div>
                <div className="plans-product-context-media">
                  {group.products.slice(0, 5).map((product) => (
                    <img
                      key={`${group.key}-${product.title}`}
                      src={product.image}
                      alt=""
                      loading="lazy"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="plans-product-context-stamp">OBRAS CATALOGADAS</div>
              </div>
              <div className="plans-product-grid">
                {group.products.map((product) => (
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad" id="planos">
        <div className="section-heading">
          <p className="eyebrow">
            <KeyRound size={16} />
            Cartões de leitor
          </p>
          <h2>Cartões anuais de prateleira</h2>
          <p>
            Uma chave anual para permanecer em uma categoria do Acervo.
          </p>
        </div>

        <div className="plans-strategic-note">
          Se a curiosidade passa de uma prateleira para outra, a chave principal continua sendo o
          caminho mais completo.
        </div>

        <div className="plans-grid">
          {shelfPlans.map((plan, index) => {
            const visualGroup = shelfProductGroups[index];

            return (
              <article key={plan.title} className="plans-card">
                <div className="plans-access-strip">CARTAO DE ACESSO ANUAL</div>
                <div className="plans-card-mockup" aria-hidden="true">
                  {visualGroup.products.slice(0, 3).map((product) => (
                    <img key={`${plan.title}-${product.title}`} src={product.image} alt="" loading="lazy" />
                  ))}
                  <span>{visualGroup.catalogId}</span>
                </div>
                <div className="plans-card-head">
                  <p className="tag">{plan.title}</p>
                  <strong>{plan.price}</strong>
                </div>
                <p>{plan.description}</p>
                <div className="plans-card-opens">
                  <span>Esta chave abre</span>
                  <ul className="plans-check-list">
                    {plan.includes.slice(0, 3).map((item) => (
                      <li key={item}>
                        <Check size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ButtonLink href={plan.href}>{plan.cta}</ButtonLink>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell section-pad" id="prateleira-secreta">
        <div className="plans-secret-panel">
          <div className="plans-secret-copy">
            <p className="eyebrow">
              <LockKeyhole size={16} />
              Gaveta reservada
            </p>
            <h2>A gaveta que não aparece no catálogo público.</h2>
            <p>
              A Prateleira Secreta reúne notas, arquivos, fichas e obras em desenvolvimento que não são
              vendidas separadamente.
            </p>
            <p className="plans-secret-emphasis">
              Ela existe apenas para assinantes do Acervo Completo. Não é uma quarta assinatura: é a
              parte reservada da Biblioteca inteira.
            </p>
            <ButtonLink href={checkoutLinks.acervoCompleto} variant="secondary">
              Desbloquear o Acervo Completo
            </ButtonLink>
          </div>

          <div className="plans-secret-archive" aria-label="Composição visual da Prateleira Secreta">
            <div className="plans-secret-folder" aria-hidden="true">
              <span>ARQUIVO RESERVADO</span>
              <strong>PS-0427</strong>
              <small>somente Acervo Completo</small>
            </div>
            <div className="plans-secret-drawer" aria-hidden="true">
              <img src="images/editorial/em-catalogacao.jpg" alt="" loading="lazy" />
              <img src="images/editorial/estudos-invisivel.jpg" alt="" loading="lazy" />
              <img src="images/editorial/estranha-transicao.jpg" alt="" loading="lazy" />
              <div className="plans-secret-ticket">
                <span>CONTEM</span>
                <strong>notas, fichas, bastidores e obras em preparo</strong>
              </div>
            </div>
            <div className="plans-secret-cards" aria-hidden="true">
              <span>Notas de curadoria</span>
              <span>Fragmentos de investigação</span>
              <span>Prévias futuras</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad plans-catalog-compare" id="comparativo">
        <div className="section-heading">
          <p className="eyebrow">
            <Sparkles size={16} />
            Registro comparativo
          </p>
          <h2>O que cada chave abre</h2>
          <p>
            O registro abaixo confirma quais prateleiras, fichas e áreas reservadas cada chave
            permite consultar.
          </p>
        </div>

        <div className="plans-strategic-note">
          Registro da curadoria: ficha avulsa resolve uma pergunta, cartão de prateleira abre uma
          categoria, chave principal abre a Biblioteca inteira.
        </div>

        <div className="plans-comparison-table" role="table" aria-label="Registro comparativo entre prateleiras e acesso completo">
          <div className="plans-comparison-header" role="rowgroup">
            <div className="plans-comparison-row" role="row">
              <div className="plans-comparison-feature" role="columnheader">
                Chave
              </div>
              {comparisonColumns.map((column) => (
                <div key={column.key} className="plans-comparison-cell plans-comparison-plan" role="columnheader">
                  {column.label}
                </div>
              ))}
            </div>
          </div>

          <div className="plans-comparison-body" role="rowgroup">
            {comparisonRows.map((row) => (
              <div key={row.label} className="plans-comparison-row" role="row">
                <div className="plans-comparison-feature" role="rowheader">
                  {row.label}
                </div>
                {comparisonColumns.map((column) => (
                  <div key={column.key} className="plans-comparison-cell" role="cell">
                    {row[column.key] ? <Check size={16} /> : <X size={16} />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="plans-comparison-cards">
          {comparisonColumns.map((column) => (
            <article key={column.key} className="plans-mobile-compare-card">
              <h3>{column.label}</h3>
              <ul className="plans-check-list">
                {comparisonRows.map((row) => (
                  <li key={`${column.key}-${row.label}`}>
                    {row[column.key] ? <Check size={16} /> : <X size={16} />}
                    <span>{row.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad curator-notes">
        <div className="section-heading">
          <p className="eyebrow">
            <ScrollText size={16} />
            Notas da Curadoria
          </p>
          <h2>Antes de escolher sua porta</h2>
        </div>
        <div className="faq-list">
          {plansFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell">
        <p className="eyebrow">Último cartão de acesso</p>
        <h2>Toda Biblioteca começa por uma chave.</h2>
        <p>
          Você pode abrir uma ficha, escolher uma prateleira ou circular pelo Acervo Completo. A
          curiosidade indica a primeira porta.
        </p>
        <div className="final-cta-actions">
          <ButtonLink href={checkoutLinks.acervoCompleto}>
            Ativar a chave principal
          </ButtonLink>
          <ButtonLink href="#obras-avulsas" variant="secondary">
            Abrir gavetas avulsas
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
