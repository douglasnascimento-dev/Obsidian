---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌿Av. em Curto Circuito
## 🌳Valores falso em JS
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

Em JavaScript, além do valor 'false', outros valores também podem ser entendidos como falso pelo motor do JS. São eles: 0, strings vazias, 'null', 'undefined' e o 'NaN'

--- column-break ---

```javascript
EXEMPLOS: false | 0 | " " | ' ' | ` ` | null | undefined | NaN
```

--- end-multi-column
### 🌿Avaliação em Curto-circuito
--- start-multi-column: ID_rcye
```column-settings
Number of Columns: 2
Largest Column: standard
```

A Avaliação em curto-circuito acontece porque o motor do JS para de analisar a partir do momento em que encontra um declaração falsa e não continua sua busca. Se não for encontrado um valor falso, ele retornará o último valor lido.

--- column-break ---

```javascript
console.log(true && true && false && true) // false
console.log(true && true && 0 && true) // 0

console.log(true && true && true && true) // true
console.log(true && true && true && 'Douglas' ) // 'Douglas'
```

--- end-multi-column
#### 🌱Exemplo de Uso:
--- start-multi-column: ID_jr90
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Código ao lado exemplifica o uso do sistema de avaliação curto-circuito, se caso o usuário selecionar uma cor, a variável deixa de ser falsa e passar a ser utilizada, se não o sistema continuara a avaliar e chegará na cor padrão que sempre será verdadeira para o JS.

--- column-break ---

```javascript
corTemaUser = ' '
corPadrao = 'black'

corSite = corTemaUser || CorPadrao // Cor Padrão
```

--- end-multi-column





