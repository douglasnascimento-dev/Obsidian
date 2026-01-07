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
> [!banner-icon] 🌿Dados Primitivos
## 🌳Tipos de Variáveis em JS

### 🌿 String
--- start-multi-column: ID_wnh3
```column-settings
Number of Columns: 2
Largest Column: standard
```

Ao definir textos em JavaScript, se utiliza o tipo **String**. Observe que ao utilizar aspas em números, estes também passam a utilizar a essa tipagem.

--- column-break ---

```javascript
const nome = "Luiz";
const data = "10.50"
```

--- end-multi-column
### 🌿Number 
--- start-multi-column: ID_vktm
```column-settings
Number of Columns: 2
Largest Column: standard
```

Já aqueles número que não possuem aspas, utilizam-se do tipo **Number**.

--- column-break ---

```javascript
const real = 17.85;
const valor = 10.50;
```

--- end-multi-column
### 🌿  Undefined e Null
--- start-multi-column: ID_4afq
```column-settings
Number of Columns: 2
Largest Column: standard
```

 Ainda há os tipos **Undefined**, esse tipo deve ser utilizado apenas automaticamente pela motor do JS, quando não houver valor definido. Já o tipo **Null** é utilizador pelo desenvolvedor quando quer demonstrar que a variável não possui valor. Os dois tipos não possuem valor definido na memória

--- column-break ---

```Javascript
let nome; //Undefined
let escolhaUsuario = null; //Null
```

--- end-multi-column
### 🌿 Boolean
--- start-multi-column: ID_k9o4
```column-settings
Number of Columns: 2
Largest Column: standard
```

As variáveis do tipo **Boolean** possuem um valor lógico, isto é o seu valor pode ser apenas **true** ou **false**. É utilizado principalmente em bifurcações no código

--- column-break ---

```javascript
const aprovacao7A = true;
const aprovacao7B = false;
```

--- end-multi-column

