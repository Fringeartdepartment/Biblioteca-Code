# Guia Interno: Obsidian + Biblioteca dos Mistérios

Este documento explica como usar o Obsidian como centro editorial da Biblioteca dos Mistérios.

O fluxo geral é:

```txt
Obsidian -> GitHub -> Codex -> Vercel
```

Em termos simples:

```txt
Obsidian guarda o pensamento.
GitHub guarda a história.
Codex transforma em site.
Vercel publica.
```

---

## 1. Pasta Principal Do Projeto

O projeto do site fica em:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite
```

A pasta editorial fica dentro dele:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content
```

No Obsidian, vocês podem abrir como vault esta pasta:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite
```

Ou, se quiserem trabalhar só com conteúdo editorial, podem abrir:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content
```

Recomendação: abrir o projeto inteiro como vault, porque assim o `WORKFLOW.md`, o `GUIA_OBSIDIAN.md` e a pasta `content/` ficam juntos.

---

## 2. Estrutura De Pastas

Dentro de `content/`, a estrutura é:

```txt
content/
  README.md
  biblioteca/
    produtos/
    paginas/
    campanhas/
  nichos/
  templates/
```

Caminho completo da pasta `content/`:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content
```

---

## 3. Onde Colocar Cada Tipo De Conteúdo

### Produtos

Use para obras, prateleiras, assinaturas, ofertas e fichas de produto.

```txt
content/biblioteca/produtos/
```

Caminho completo:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/biblioteca/produtos
```

Exemplo:

```txt
content/biblioteca/produtos/oraculo-de-bolso-dos-sonhos.md
```

### Páginas

Use para páginas de venda, páginas editoriais, páginas institucionais e páginas de apresentação.

```txt
content/biblioteca/paginas/
```

Caminho completo:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/biblioteca/paginas
```

Exemplo:

```txt
content/biblioteca/paginas/pagina-planos.md
```

### Campanhas

Use para lançamentos, promoções, argumentos comerciais, anúncios e sequências de venda.

```txt
content/biblioteca/campanhas/
```

Caminho completo:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/biblioteca/campanhas
```

Exemplo:

```txt
content/biblioteca/campanhas/lancamento-fases-da-lua.md
```

### Novos Nichos

Use para ideias de novos sites, novas marcas, novas páginas de venda ou novos organismos editoriais.

```txt
content/nichos/
```

Caminho completo:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/nichos
```

Exemplo:

```txt
content/nichos/nome-do-novo-nicho.md
```

---

## 4. Templates Para Copiar

Os modelos ficam aqui:

```txt
content/templates/
```

Caminho completo:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/templates
```

Templates disponíveis:

```txt
content/templates/produto.md
content/templates/pagina-venda.md
content/templates/pagina-editorial.md
content/templates/campanha.md
content/templates/novo-nicho.md
```

Caminhos completos:

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/templates/produto.md
```

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/templates/pagina-venda.md
```

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/templates/pagina-editorial.md
```

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/templates/campanha.md
```

```txt
/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite/content/templates/novo-nicho.md
```

---

## 5. Como Criar Uma Nova Obra

1. Copiar este template:

```txt
content/templates/produto.md
```

2. Colar nesta pasta:

```txt
content/biblioteca/produtos/
```

3. Renomear o arquivo usando letras minúsculas, sem acentos e com hífens:

```txt
nome-da-obra.md
```

Exemplo:

```txt
content/biblioteca/produtos/herbario-de-bolso.md
```

4. Preencher o topo do arquivo:

```md
---
tipo: produto
status: rascunho
projeto: biblioteca-dos-misterios
titulo: Herbário de Bolso
slug: herbario-de-bolso
categoria: Coleção de Bolso
preco: "R$14"
checkout: https://pay.kiwify.com.br/zBpK5oF
imagem_capa: images/produtos/herbario-bolso.png
imagem_banner:
selo: Obra Catalogada
simbolo: "✢"
prioridade: normal
---
```

5. Quando estiver pronto para ir para o site, mudar:

```md
status: rascunho
```

para:

```md
status: pronto-para-site
```

---

## 6. Como Criar Uma Nova Página

1. Copiar:

```txt
content/templates/pagina-venda.md
```

2. Colar em:

```txt
content/biblioteca/paginas/
```

3. Exemplo de nome:

```txt
content/biblioteca/paginas/pagina-herbario-de-bolso.md
```

4. Preencher:

```md
---
tipo: pagina-venda
status: rascunho
projeto: biblioteca-dos-misterios
titulo: Herbário de Bolso
slug: herbario-de-bolso
produto_principal: Herbário de Bolso
checkout_principal: https://pay.kiwify.com.br/zBpK5oF
rota: /herbario-de-bolso
prioridade: normal
---
```

5. Quando estiver pronta:

```md
status: pronto-para-site
```

---

## 7. Como Criar Uma Campanha

1. Copiar:

```txt
content/templates/campanha.md
```

2. Colar em:

```txt
content/biblioteca/campanhas/
```

3. Exemplo:

```txt
content/biblioteca/campanhas/lancamento-oraculo-dos-sonhos.md
```

4. Preencher:

```md
---
tipo: campanha
status: rascunho
projeto: biblioteca-dos-misterios
titulo: Lançamento Oráculo dos Sonhos
slug: lancamento-oraculo-dos-sonhos
oferta: Oráculo de Bolso dos Sonhos
checkout: https://pay.kiwify.com.br/ULoagjR
periodo:
canal: site
---
```

---

## 8. Como Criar Um Novo Nicho

1. Copiar:

```txt
content/templates/novo-nicho.md
```

2. Colar em:

```txt
content/nichos/
```

3. Exemplo:

```txt
content/nichos/nome-do-novo-nicho.md
```

4. Preencher:

```md
---
tipo: novo-nicho
status: rascunho
projeto: nome-do-nicho
titulo: Nome do novo site ou organismo
slug: nome-do-nicho
modelo: pagina-venda
prioridade: exploracao
---
```

---

## 9. Status Editorial

Usem apenas estes status:

```txt
rascunho
revisao
pronto-para-site
publicado
arquivado
```

Significado:

```txt
rascunho           = ideia ainda aberta
revisao            = precisa melhorar texto, oferta, imagem ou estrutura
pronto-para-site   = pode pedir para o Codex implementar
publicado          = já entrou no site
arquivado          = guardar, mas não usar por enquanto
```

Regra:

```txt
Só chamar o Codex para implementar quando o status estiver como pronto-para-site.
```

---

## 10. Pedido Padrão Para O Codex

Quando uma nota estiver pronta, mande para o Codex:

```txt
Leia o arquivo content/biblioteca/produtos/nome-da-obra.md e transforme isso em produto/página no site.

Preserve a linguagem da Biblioteca dos Mistérios.
Confira preço, checkout e imagem.
Rode npm run lint.
Rode npm run build.
Prepare para deploy.
```

Para página:

```txt
Leia o arquivo content/biblioteca/paginas/nome-da-pagina.md e crie ou atualize a página correspondente no site.

Preserve a identidade visual da Biblioteca dos Mistérios.
Confira links, imagens, CTA e mobile.
Rode npm run lint.
Rode npm run build.
Prepare para deploy.
```

Para campanha:

```txt
Leia o arquivo content/biblioteca/campanhas/nome-da-campanha.md e transforme isso em seção, copy ou página de campanha.

Preserve a linguagem da Biblioteca dos Mistérios.
Confira oferta, preço, checkout e CTA.
Rode npm run lint.
Rode npm run build.
Prepare para deploy.
```

---

## 11. Checklist Antes De Pedir Implementação

Antes de chamar o Codex, conferir:

```txt
O título está claro?
O preço está correto?
O checkout está correto?
A imagem está definida?
A promessa está compreensível?
O texto parece Biblioteca dos Mistérios?
O status está como pronto-para-site?
```

---

## 12. Checklist Depois Do Deploy

Depois que o Codex publicar:

```txt
A página abre?
As imagens carregam?
O texto está correto?
O botão leva para o checkout certo?
O mobile está legível?
A página parece parte da Biblioteca?
```

URL pública atual:

```txt
https://biblioteca-code.vercel.app/
```

Página de planos:

```txt
https://biblioteca-code.vercel.app/planos
```

Página do Oráculo dos Sonhos:

```txt
https://biblioteca-code.vercel.app/oraculo-de-bolso-dos-sonhos
```

---

## 13. Comandos Úteis

Entrar na pasta do projeto:

```bash
cd "/Users/thiagocosta/Fringe/Fringe Art Department /Low Ticket Organism/Biblioteca dos Misterios OS/Bibliotecadosmisteriossite"
```

Ver alterações:

```bash
git status
```

Testar código:

```bash
npm run lint
```

Gerar build:

```bash
npm run build
```

Enviar alterações:

```bash
git add .
git commit -m "Update editorial content"
git push
```

---

## 14. Regra De Ouro Da Dupla

Uma pessoa pode cuidar de:

```txt
ideia
oferta
preço
checkout
prioridade
```

A outra pode cuidar de:

```txt
copy
clareza
imagem
tom de voz
revisão editorial
```

Mas nenhuma nota deve ir para o Codex sem:

```txt
status: pronto-para-site
```

