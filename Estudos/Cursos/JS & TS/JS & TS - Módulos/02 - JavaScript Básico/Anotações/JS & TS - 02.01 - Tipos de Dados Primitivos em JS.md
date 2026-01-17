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
> [!banner-icon] 🌿Dados Primitivos
## 🌳Tipos de Variáveis em JS

### 🌿 String

Ao definir textos em JavaScript, se utiliza o tipo **String**. Observe que ao utilizar aspas em números, estes também passam a utilizar a essa tipagem.

```javascript
const nome = "Luiz";
const data = "10.50"
```

### 🌿Number 

Já aqueles número que não possuem aspas, utilizam-se do tipo **Number**.

```javascript
const real = 17.85;
const valor = 10.50;
```

### 🌿  Undefined e Null

 Ainda há os tipos **Undefined**, esse tipo deve ser utilizado apenas automaticamente pela motor do JS, quando não houver valor definido. Já o tipo **Null** é utilizador pelo desenvolvedor quando quer demonstrar que a variável não possui valor. Os dois tipos não possuem valor definido na memória

```Javascript
let nome; //Undefined
let escolhaUsuario = null; //Null
```

### 🌿 Boolean

As variáveis do tipo **Boolean** possuem um valor lógico, isto é o seu valor pode ser apenas **true** ou **false**. É utilizado principalmente em bifurcações no código

```javascript
const aprovacao7A = true;
const aprovacao7B = false;
```



