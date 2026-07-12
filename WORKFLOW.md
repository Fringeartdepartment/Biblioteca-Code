# Workflow Editorial

Este projeto pode funcionar como um fluxo simples:

```txt
Obsidian -> GitHub -> Codex -> Vercel
```

Por enquanto, o conteúdo em Markdown é uma fonte editorial. O Codex lê, organiza e transforma esse material em alterações reais no site. Depois podemos automatizar a leitura dos arquivos `content/`.

## 1. Criar uma nova nota no Obsidian

Copie um template de:

```txt
content/templates/
```

E salve em uma destas pastas:

```txt
content/biblioteca/produtos/
content/biblioteca/paginas/
content/biblioteca/campanhas/
content/nichos/
```

Exemplos:

```txt
content/biblioteca/produtos/oraculo-de-bolso-dos-sonhos.md
content/biblioteca/paginas/pagina-planos.md
content/nichos/nome-do-nicho.md
```

## 2. Preencher os campos principais

No topo da nota, preencha o frontmatter:

```md
---
tipo: produto
status: rascunho
titulo: Nome da obra
slug: nome-da-obra
preco: "R$14"
checkout: https://pay.kiwify.com.br/
imagem_capa: images/produtos/nome-da-obra.png
---
```

Campos importantes:

- `tipo`: produto, pagina-venda, pagina-editorial, campanha ou novo-nicho.
- `status`: rascunho, revisao, pronto-para-site, publicado ou arquivado.
- `slug`: endereço curto da página ou identificador da obra.
- `checkout`: link de compra, quando existir.
- `imagem_capa`: imagem que o site deve usar.

## 3. Marcar como pronto

Quando a nota estiver boa para virar site, altere:

```md
status: pronto-para-site
```

Então chame o Codex com algo como:

```txt
Leia content/biblioteca/produtos/nome-da-obra.md e transforme isso em produto/página no site.
Preserve a linguagem da Biblioteca dos Mistérios.
Rode lint, build e prepare para deploy.
```

## 4. O que o Codex deve fazer

Para produtos:

1. Ler a nota Markdown.
2. Atualizar `src/data/products.ts` ou a página correspondente.
3. Conferir preço, checkout e imagem.
4. Ajustar copy, CTA e hierarquia visual.
5. Rodar `npm run lint`.
6. Rodar `npm run build`.
7. Fazer commit e push quando você pedir.

Para páginas:

1. Criar ou atualizar a rota.
2. Aplicar a estrutura da nota.
3. Preservar identidade visual da Biblioteca.
4. Testar localmente.
5. Validar o deploy depois do push.

## 5. Publicar atualizações

Quando a alteração estiver pronta:

```bash
git status
git add .
git commit -m "Add editorial content for nome-da-obra"
git push
```

A Vercel detecta o push no GitHub e publica automaticamente.

Depois confira:

```txt
https://biblioteca-code.vercel.app/
```

## 6. Criar páginas de outros nichos

Use:

```txt
content/templates/novo-nicho.md
```

Salve em:

```txt
content/nichos/nome-do-nicho.md
```

Quando o nicho estiver claro, o Codex pode criar:

- nova rota dentro deste site;
- nova página de venda;
- novo conjunto de produtos;
- ou um novo projeto separado, se fizer sentido.

## 7. Regra de ouro

O Obsidian guarda o pensamento.
O GitHub guarda a história.
O Codex transforma em site.
A Vercel publica.

Comece manual. Automatize apenas quando o processo estiver estável.
