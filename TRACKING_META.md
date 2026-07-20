# Meta Conversions API

O site da Biblioteca dos Mistérios envia eventos da página de vendas para a Meta Conversions API por uma função server-side da Vercel.

## Página configurada

```txt
/oraculo-de-bolso-dos-sonhos
```

## Produto

```txt
Produto: Oráculo de Bolso dos Sonhos
Valor: 14.00
Moeda: BRL
Pixel ID: 1500019611899588
Checkout: https://pay.kiwify.com.br/ULoagjR
```

## Eventos enviados pelo site

```txt
PageView
ViewContent
InitiateCheckout
```

O evento de checkout tambem e disparado pelo site quando o visitante clica em um botao que leva ao checkout da Kiwify.

O evento de compra aprovada fica na Kiwify:

```txt
Purchase
```

## Variáveis necessárias na Vercel

Adicionar em:

```txt
Vercel -> Project -> Settings -> Environment Variables
```

Obrigatória:

```txt
META_CONVERSIONS_ACCESS_TOKEN=token_da_api_de_conversoes
```

Opcional, porque o site já usa o pixel correto por padrão:

```txt
META_PIXEL_ID=1500019611899588
```

Opcional para teste no Gerenciador de Eventos:

```txt
META_TEST_EVENT_CODE=TEST12345
```

Opcional para fixar uma versão da Graph API:

```txt
META_GRAPH_API_VERSION=v23.0
```

Se essa variável não for preenchida, o site usa:

```txt
META_GRAPH_API_VERSION=v25.0
```

## Importante

O token da API de Conversões nunca deve ser colocado no código público, no HTML ou no JavaScript do navegador.

Ele deve existir apenas como variável de ambiente na Vercel.

## Jornada rastreada pelo site

```txt
Anúncio -> página de vendas -> checkout Kiwify -> compra aprovada
```

O site também preserva os parâmetros da URL e repassa para o checkout:

```txt
utm_source
utm_medium
utm_campaign
utm_content
utm_term
src
fbclid
```

Se `src` não vier na URL, o site adiciona:

```txt
src=pagina_vendas
```
