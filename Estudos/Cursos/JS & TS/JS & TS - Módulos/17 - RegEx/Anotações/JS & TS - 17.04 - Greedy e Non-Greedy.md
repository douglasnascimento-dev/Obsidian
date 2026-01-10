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
## 🌳O que é Greedy?

É o comportamento padrão dos Quantificadores no RegEx, que irão tentar encontrar o máximo possível de conteúdo. Enquanto isso, a versão non-Greedy é quando o comportamento é de realizar o mínimo de esforço possível. 

## 🌿Exemplos

Texto de Entrada:

```js
const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>';
```

```js
const regExp03 = /<.*>.*<\/.*>/g
console.log(html.match(regExp03))
```

- Saída Greedy: [ '\<p>Olá mundo\</p> \<p>Olá de novo\</p> \<div>Sou a div\</div>' ]

```js
const regExp04 = /<.*?>.*?<\/.*?>/g
console.log(html.match(regExp04))
```

- Saída non-Greedy: [ '\<p>Olá mundo\</p>', '\<p>Olá de novo\</p>', '\<div>Sou a div\</div>' ]

Observe que na versão non-Greedy é utilizado o caractere '?' para indicar o comportamento não guloso. E no Resultado final cada tag é encontrada de modo separado, pois ele encerra a busca assim que encontrar o padrão esperado, diferentemente, do padrão guloso, que só encerrará a busca quando encontrar a última ocorrência do padrão esperado de fechamento. 

## 🌿O Caractere '.'

O Caractere '.' (Ponto) irá representar qualquer caractere, exceto uma nova linha. 