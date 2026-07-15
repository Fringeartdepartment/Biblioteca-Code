import {
  BookOpen,
  Check,
  DoorOpen,
  Droplets,
  Eye,
  Home,
  KeyRound,
  Moon,
  Sparkles,
} from "lucide-react";
import { useEffect } from "react";
import { trackMetaConversion } from "../utils/metaConversions";
import { buildCheckoutUrlWithTracking } from "../utils/tracking";
import "./oraculo-sonhos.css";

const CHECKOUT_URL = "https://pay.kiwify.com.br/ULoagjR";
const ASSET_PATH = "/images/oraculo-sonhos";
const ORACULO_PRODUCT = {
  content_name: "Oráculo de Bolso dos Sonhos",
  content_ids: ["oraculo-de-bolso-dos-sonhos"],
  content_type: "product",
  value: 14.0,
  currency: "BRL",
};

function CtaLink({ children, variant = "primary" }: { children: string; variant?: "primary" | "secondary" }) {
  return (
    <a
      className={`oraculo-cta oraculo-cta--${variant}`}
      href={buildCheckoutUrlWithTracking(CHECKOUT_URL)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {variant === "primary" ? <KeyRound aria-hidden="true" /> : <Eye aria-hidden="true" />}
      <span>{children}</span>
    </a>
  );
}

function Label({ children }: { children: string }) {
  return <span className="oraculo-label">{children}</span>;
}

const previewPages = [
  {
    title: "Registro Onírico",
    copy: "Para anotar o sonho antes que ele seja engolido pelo dia.",
    image: `${ASSET_PATH}/tiragem-onirica.png`,
  },
  {
    title: "Consulte pela Sensação",
    copy: "Porque às vezes o corpo lembra antes da cabeça explicar.",
    image: `${ASSET_PATH}/metodo-5-sinais.png`,
  },
  {
    title: "Tipos de Sonho",
    copy: "Memória, medo, desejo, símbolo, repetição: nem todo sonho vem do mesmo lugar.",
    image: `${ASSET_PATH}/page-extra-1.png`,
  },
  {
    title: "Lugares Estranhos",
    copy: "Casa, escola, quarto, rua desconhecida. O cenário também fala. Discretamente.",
    image: `${ASSET_PATH}/page-extra-2.png`,
  },
  {
    title: "Antes de Fechar o Arquivo",
    copy: "Para encerrar sem transformar tudo em profecia.",
    image: `${ASSET_PATH}/agua.png`,
  },
];

const archiveItems = [
  "Pequeno Dicionário dos Mistérios",
  "Guia de Campo para Mentes Curiosas",
  "Dossiê Aberto: Breve História dos Mistérios",
  "Grimório do Pensamento Crítico",
];

export function OraculoSonhos() {
  useEffect(() => {
    trackMetaConversion({
      eventName: "PageView",
      dedupeKey: window.location.pathname,
    });
    trackMetaConversion({
      eventName: "ViewContent",
      customData: ORACULO_PRODUCT,
      dedupeKey: `${window.location.pathname}:oraculo-de-bolso-dos-sonhos`,
    });
  }, []);

  return (
    <main className="oraculo-page">
      <section className="oraculo-hero" aria-labelledby="oraculo-hero-title">
        <div className="oraculo-stars" aria-hidden="true" />
        <div className="oraculo-shell oraculo-hero__grid">
          <div className="oraculo-hero__copy">
            <Label>Oráculo de Bolso dos Sonhos</Label>
            <div className="paper-title">
              <h1 id="oraculo-hero-title">Alguns sonhos não terminam quando acordamos.</h1>
            </div>
            <p className="oraculo-lead">
              Uma obra visual da Biblioteca dos Mistérios para <mark>observar melhor</mark> imagens,
              símbolos e perguntas que aparecem durante a noite.
            </p>
            <p className="oraculo-wake">
              Para quando você acorda pensando: <strong>“que sonho foi esse?”</strong>
            </p>
            <div className="oraculo-price-row" aria-label="Preço">
              <span>Entrada digital</span>
              <strong>R$ 14</strong>
            </div>
            <div className="oraculo-actions">
              <CtaLink>Acessar meu Oráculo</CtaLink>
              <a className="oraculo-inline-link" href="#folheio">
                Ver o que tem dentro
              </a>
            </div>
            <p className="oraculo-fineprint">
              Acesso digital pela área de membros. Sem promessa de interpretação definitiva. Com bastante
              coisa bonita para observar.
            </p>
          </div>

          <div className="oraculo-hero__visual" aria-label="Mockup da capa do Oráculo de Bolso dos Sonhos">
            <img
              src={`${ASSET_PATH}/cover.png`}
              alt="Capa do Oráculo de Bolso dos Sonhos"
              width="1024"
              height="1536"
            />
            <span className="stamp stamp--price">R$ 14</span>
            <span className="ticket">Coleção de Bolso</span>
          </div>
        </div>
      </section>

      <section className="oraculo-section oraculo-shell dream-file" aria-labelledby="dor-title">
        <div className="symbol-card symbol-card--home">
          <Home aria-hidden="true" />
          <span>casa</span>
        </div>
        <div className="symbol-card symbol-card--water">
          <Droplets aria-hidden="true" />
          <span>água</span>
        </div>
        <div className="symbol-card symbol-card--door">
          <DoorOpen aria-hidden="true" />
          <span>porta</span>
        </div>
        <div className="paper-card paper-card--wide">
          <Label>Arquivo da noite</Label>
          <h2 id="dor-title">Você percebe coisas, mas deixa tudo escapar.</h2>
          <p>
            Você acorda lembrando de uma casa estranha. Uma rua desconhecida. Uma porta fechada.
            Uma água escura. Um animal que apareceu do nada.
          </p>
          <p>Pensa: “depois eu vejo isso”.</p>
          <p>
            Aí vêm as notificações, o café, a lista de coisas para fazer, e o sonho evapora.
          </p>
          <p className="paper-card__closing">
            Algumas imagens não precisam virar grandes revelações. Mas talvez mereçam uma segunda olhada.
          </p>
        </div>
      </section>

      <section className="oraculo-section oraculo-shell presentation" aria-labelledby="obra-title">
        <div className="presentation__image">
          <img
            src={`${ASSET_PATH}/hero-banner.png`}
            alt="Banner editorial do Oráculo de Bolso dos Sonhos"
            width="1672"
            height="941"
            loading="lazy"
          />
        </div>
        <div className="paper-card">
          <Label>Coleção de Bolso</Label>
          <h2 id="obra-title">Uma pequena obra para quem acorda com perguntas.</h2>
          <p>
            O <strong>Oráculo de Bolso dos Sonhos</strong> é uma obra digital breve, visual e simbólica
            criada para ajudar você a observar sonhos sem cair em respostas prontas.
          </p>
          <p>Ele não foi feito para dizer “isso significa exatamente aquilo”.</p>
          <p>Foi feito para ajudar você a registrar, comparar, perceber padrões e fazer perguntas melhores.</p>
          <div className="catalog-card" aria-label="Ficha catalográfica">
            <span>Obra: Oráculo de Bolso dos Sonhos</span>
            <span>Selo: Coleção de Bolso</span>
            <span>Formato: Digital</span>
            <span>Acesso: Área de membros</span>
            <strong>Entrada: R$ 14</strong>
          </div>
          <p className="oraculo-pull">Não é sobre decifrar tudo. É sobre olhar melhor.</p>
        </div>
      </section>

      <section className="oraculo-section oraculo-shell preview" id="folheio" aria-labelledby="folheio-title">
        <div className="oraculo-section__intro">
          <Label>Prévia editorial</Label>
          <h2 id="folheio-title">Folheie um pouco antes de entrar.</h2>
          <p>
            Dentro do Oráculo, você encontra páginas para observar o sonho por diferentes portas:
            sensação, cenário, tipo de sonho, símbolo, registro e pergunta final.
          </p>
        </div>
        <div className="preview-grid">
          {previewPages.map((page, index) => (
            <article className={index === 0 ? "preview-card preview-card--large" : "preview-card"} key={page.title}>
              <img src={page.image} alt={`Página interna: ${page.title}`} loading="lazy" />
              <div>
                <h3>{page.title}</h3>
                <p>{page.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="oraculo-centered-action">
          <CtaLink>Acessar o Oráculo por R$ 14</CtaLink>
        </div>
      </section>

      <section className="oraculo-section oraculo-shell difference" aria-labelledby="diferenca-title">
        <span className="stamp stamp--yes">Mistério, sim</span>
        <div className="paper-card paper-card--center">
          <Label>Pensamento crítico ligado</Label>
          <h2 id="diferenca-title">Mistério, sim. Resposta pronta, não.</h2>
          <p>
            O Oráculo não promete prever seu futuro, revelar mensagens secretas do universo ou explicar
            sua vida inteira por causa de um elevador suspeito no sonho.
          </p>
          <p>Ele propõe algo mais honesto: <strong>observar melhor.</strong></p>
          <p>
            Porque algumas imagens não precisam de uma sentença. Precisam de contexto, atenção e uma
            pergunta menos preguiçosa.
          </p>
          <p className="paper-card__closing">
            A Biblioteca gosta de mistérios. Só não precisa desligar o pensamento crítico para isso.
          </p>
        </div>
        <span className="stamp stamp--no">Resposta pronta, não</span>
      </section>

      <section className="oraculo-section oraculo-shell delivery" aria-labelledby="recebe-title">
        <div className="paper-card">
          <Label>Inclui entrada na área de membros</Label>
          <h2 id="recebe-title">Ao entrar, você recebe:</h2>
          <ul className="receive-list">
            {[
              "acesso ao Oráculo de Bolso dos Sonhos",
              "obra digital da Coleção de Bolso",
              "páginas de observação, consulta e registro",
              "linguagem visual editorial da Biblioteca",
              "acesso pela área de membros",
              "entrada no universo da Biblioteca dos Mistérios",
            ].map((item) => (
              <li key={item}>
                <Check aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="open-files">
          <Label>Arquivos Abertos</Label>
          <h2>Você também libera acesso aos Arquivos Abertos.</h2>
          <p>
            Ao adquirir o Oráculo, você entra na área de membros da Biblioteca e também libera acesso
            aos <strong>Arquivos Abertos</strong>, a primeira prateleira pública do Acervo.
          </p>
          <div className="archive-shelf" aria-label="Obras nos Arquivos Abertos">
            {archiveItems.map((item) => (
              <article key={item}>
                <BookOpen aria-hidden="true" />
                <span>{item}</span>
              </article>
            ))}
          </div>
          <p className="oraculo-pull">Gratuito, sim. Genérico, jamais.</p>
        </div>
      </section>

      <section className="oraculo-section oraculo-shell final-offer" aria-labelledby="oferta-title">
        <div className="final-offer__paper">
          <div>
            <Label>Comece observando. Continue explorando.</Label>
            <h2 id="oferta-title">Comece pelos sonhos. Continue pela Biblioteca.</h2>
            <p>
              Acesse o <strong>Oráculo de Bolso dos Sonhos</strong> por <strong>R$ 14</strong> e entre
              na área de membros da Biblioteca dos Mistérios.
            </p>
            <p>
              Você começa por uma obra pequena, visual e simbólica. Depois, pode explorar os Arquivos
              Abertos e descobrir o restante do Acervo.
            </p>
            <div className="final-price">R$ 14</div>
            <CtaLink>Acessar meu Oráculo</CtaLink>
            <p className="oraculo-fineprint oraculo-fineprint--dark">
              Acesso digital. Obra da Coleção de Bolso. Sem promessa de interpretação definitiva.
            </p>
          </div>
          <img
            src={`${ASSET_PATH}/cover.png`}
            alt="Capa do Oráculo de Bolso dos Sonhos"
            width="1024"
            height="1536"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="oraculo-footer">
        <div className="oraculo-shell">
          <div>
            <Moon aria-hidden="true" />
            <strong>A Biblioteca dos Mistérios</strong>
            <span>Um acervo para mentes curiosas.</span>
          </div>
          <nav aria-label="Links institucionais">
            <a href="#">Termos de uso</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Suporte</a>
            <a href="#">Acesso à área de membros</a>
          </nav>
          <Sparkles aria-hidden="true" />
        </div>
      </footer>
    </main>
  );
}
