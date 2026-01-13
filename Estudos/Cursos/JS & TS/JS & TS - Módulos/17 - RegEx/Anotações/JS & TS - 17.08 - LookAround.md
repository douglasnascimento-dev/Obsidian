---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
---


![[JS & TS.png|banner]]
> [!banner-icon] Módulo 17
> 
## 🌿Positive Lookahead

O Positive Lookahead (`?=`) é uma **asserção** (validação). Ele diz ao motor do RegEx: "Encontre o padrão X, **apenas se** ele for seguido imediatamente pelo padrão Y".

O detalhe mais importante é que o conteúdo dentro do Lookahead **não faz parte do resultado retornado** (ele não é "consumido"). Ele serve apenas como critério de validação.

### 🌿Exemplo Prático

Imagine que queremos pegar o valor de um preço, mas apenas se ele estiver em reais (`R$`).

```js
const texto = "O preço é 50.00R$ e o dólar está 5.00USD";

// \d+\.\d+  -> Pega o número (ex: 50.00)
// (?=R\$)   -> Confirma se o que vem a seguir é 'R$'
const regExp = /\d+\.\d+(?=R\$)/g;

console.log(texto.match(regExp));
// Saída: ['50.00'] 
// Note que o '5.00' do USD foi ignorado, e o 'R$' não veio no resultado.
```

---

## 🌿Negative Lookahead

O Negative Lookahead (`?!`) funciona com a lógica oposta. Ele verificará uma ocorrência **apenas se** o padrão esperado **NÃO** estiver presente logo à frente.

Assim como o positivo, ele valida a condição, mas não retorna o conteúdo verificado no resultado final.

### 🌿Utilizando o Negative Lookahead

JavaScript

```js
const texto = "batata frita, batata doce, batata assada";

// Quero todas as batatas que NÃO sejam doces.
const regExpNegative = /batata (?!doce)/g;

console.log(texto.match(regExpNegative));
```

A expressão acima procura pela palavra "batata " e olha para frente. Se o que vier a seguir for "doce", ela descarta (dá false). Se for qualquer outra coisa (frita, assada), ela captura o "batata ".

### 🌿Comparativo Visual

|**Tipo**|**Sintaxe**|**Lógica**|
|---|---|---|
|**Positive**|`(?=...)`|Encontra A apenas se seguido por B|
|**Negative**|`(?!...)`|Encontra A apenas se **NÃO** seguido por B|

### 🌿Exemplo Combinado (Input e Senha)

Um uso comum é validação de senhas, onde você quer garantir que algo exista (Positive) ou que algo proibido não exista (Negative)

```js
// Validar "input" que não seja do type="hidden"
const html = '<input type="text"> <input type="hidden"> <input type="submit">';

// Procure por '<input' que NÃO seja seguido por ' type="hidden"'
const regExpInput = /<input (?!type="hidden")/g;

console.log(html.match(regExpInput));
// Saída: ['<input ', '<input '] (Ignorou o hidden)
```

## 🌿Positive Lookbehind

O Positive Lookbehind (`?<=`) verifica se o padrão desejado é **precedido** por uma determinada expressão. Assim como no Lookahead, o conteúdo dentro do grupo de verificação **não é retornado** no match final.

**Sintaxe:** `(?<=PadrãoAntes)Busca`

### Exemplo Prático

Imagine que você quer extrair apenas o valor numérico de preços, mas apenas daqueles que estão marcados em Dólar (`$`), ignorando os que estão em Reais ou sem símbolo.

JavaScript

```js
const texto = "Custa $50.00, mas com desconto fica R$ 45.00 ou apenas 40.00 sem taxa.";

// Tradução da RegEx: 
// 1. (?<=\$) -> Olhe para trás e garanta que existe um '$'
// 2. \d+\.\d+ -> Se sim, capture os números com ponto
const regExp = /(?<=\$)\d+\.\d+/g;

console.log(texto.match(regExp));
// Saída: ['50.00']
// O '45.00' foi ignorado pois tem 'R$ ' antes (e espaço), e o '40.00' não tem nada.
```

Observe que o `$` não sai no resultado (`['50.00']`), ele serviu apenas como "gatilho" para a captura.

## 🌿Negative Lookbehind

O Negative Lookbehind (`?<!`) verifica se o padrão desejado **NÃO é precedido** por uma determinada expressão.

**Sintaxe:** `(?<!PadrãoAntes)Busca`

### Exemplo Prático

Você tem uma lista de nomes de arquivos e quer capturar os nomes, mas quer excluir aqueles que são arquivos de configuração (que começam com `config_`).

```js
const arquivos = "foto.png, config_dados.json, config_rede.xml, relatorio.pdf";

// Tradução da RegEx:
// 1. (?<!config_) -> Olhe para trás. Se tiver "config_", CANCELE.
// 2. \w+\.\w+     -> Se não tiver, capture a palavra.extensão
const regExpNeg = /(?<!config_)\w+\.\w+/g;

// Nota: Essa regex é simplificada para fins didáticos. 
// Ela pegaria partes de palavras se não houver âncoras (\b), 
// mas ilustra a lógica do lookbehind.

console.log(arquivos.match(regExpNeg));
// Saída: ['foto.png', 'relatorio.pdf']
// Ignorou 'config_dados.json' e 'config_rede.xml'
```

## 🌿Resumo Visual dos Looks

Para não confundir a sintaxe (que é cheia de símbolos), use esta tabela de referência:

|**Nome**|**Direção**|**Símbolo**|**Lógica**|
|---|---|---|---|
|**Lookahead**|Direita `>>>`|`(?=...)`|Deve ter depois|
|**Negative Lookahead**|Direita `>>>`|`(?!...)`|**NÃO** deve ter depois|
|**Lookbehind**|Esquerda `<<<`|`(?<=...)`|Deve ter antes|
|**Negative Lookbehind**|Esquerda `<<<`|`(?<!...)`|**NÃO** deve ter antes|

>