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
> [!banner-icon] 🌿Av. em Curto Circuito
## 🌳Valores falso em JS

Em JavaScript, além do valor 'false', outros valores também podem ser entendidos como falso pelo motor do JS. São eles: 0, strings vazias, 'null', 'undefined' e o 'NaN'

```javascript
EXEMPLOS: false | 0 | " " | ' ' | ` ` | null | undefined | NaN
```

### 🌿Avaliação em Curto-circuito

A Avaliação em curto-circuito acontece porque o motor do JS para de analisar a partir do momento em que encontra um declaração falsa e não continua sua busca. Se não for encontrado um valor falso, ele retornará o último valor lido.

```javascript
console.log(true && true && false && true) // false
console.log(true && true && 0 && true) // 0

console.log(true && true && true && true) // true
console.log(true && true && true && 'Douglas' ) // 'Douglas'
```


#### 🌱Exemplo de Uso:


O Código ao lado exemplifica o uso do sistema de avaliação curto-circuito, se caso o usuário selecionar uma cor, a variável deixa de ser falsa e passar a ser utilizada, se não o sistema continuara a avaliar e chegará na cor padrão que sempre será verdadeira para o JS.


```javascript
corTemaUser = ' '
corPadrao = 'black'

corSite = corTemaUser || CorPadrao // Cor Padrão
```







