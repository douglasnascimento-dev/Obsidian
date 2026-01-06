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

![[JSTS.png|banner]]
> [!banner-icon] 🌿Concatenação
## 🌳Usando o metódo .concat
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Método .concat deve ser usado no array inicial e deve receber como parâmetro, os elementos que vão ser adicionados a esse array. Esses parâmetros podem ser, outros arrays, arrays literais ou dados primitivos, como strings.

--- column-break ---

```javascript
let a1 = [01, 02, 03, 04, 05];
let a2 = [06, 07, 08, 09, 10];

let a3 = a1.concat(a2, [11, 12, 13, 14, 15], "Fim")
```

--- end-multi-column

### 🌿Usando o spread operator

--- start-multi-column: ID_4quk
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Spread operator, representado pelos 3 pontos consecutivos, age como um espalhador, pode receber em seu interior, arrays e arrays literais, que necessitam da declaração do operados ou dados primitivos, que não irá necessitar dessa declaração.

--- column-break ---

```javascript
let a1 = [01, 02, 03, 04, 05];
let a2 = [06, 07, 08, 09, 10];

let a3 = [...a1, ...a2, ...[11, 12, 13, 14, 15], "Fim"]
```

--- end-multi-column

