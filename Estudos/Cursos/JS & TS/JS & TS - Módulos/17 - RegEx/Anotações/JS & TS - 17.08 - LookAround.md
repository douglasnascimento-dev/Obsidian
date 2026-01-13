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

JavaScript

```
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

```
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

Um uso comum é validação de senhas, onde você quer garantir que algo exista (Positive) ou que algo proibido não exista (Negative).

JavaScript

```
// Validar "input" que não seja do type="hidden"
const html = '<input type="text"> <input type="hidden"> <input type="submit">';

// Procure por '<input' que NÃO seja seguido por ' type="hidden"'
const regExpInput = /<input (?!type="hidden")/g;

console.log(html.match(regExpInput));
// Saída: ['<input ', '<in
```