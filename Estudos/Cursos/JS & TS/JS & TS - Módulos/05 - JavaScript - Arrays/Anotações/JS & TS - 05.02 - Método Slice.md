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
> [!banner-icon] 🌿Slice( )
## 🌳Método Slice
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Método .slice pode receber infinitos parâmetros, o **primeiro será o índice do inicio da alteração**, o **segundo índice representa o número de elementos a serem deletados**, podendo variar de 0 ao número máximo de elementos do array, e a **partir de então, os parâmetros representam os elementos á serem adicionados** no array, a inclusão de elementos no array não é obrigatório e dessa forma pode ser suprimida.

--- column-break ---

```javascript
const palavras ['Drink', 'Sleep', 'Code', 'Repeat']
palavras.slice(1, 1, "Coffe") // ['Drink', 'Coffe', 'Code', 'Repeat']
```

--- end-multi-column
### 🌿Substituição de .pop, .push, .shift, .unshift

#### 🌱.pop: 

```javascript
const palavras ['Drink', 'Sleep', 'Code', 'Repeat']
palavras.slice(3, 1)  // ['Drink', 'Sleep', 'Code']
palavras.slcie(-1, 1) // ['Drink', 'Sleep', 'Code']
```

Os dois índice apresentarão os mesmos resultados, os índice positivos contão da esquerda para a direta, já o índice negativo, conta da direita para a esquerda.

#### 🌱.push

```javascript
const palavras ['Drink', 'Sleep', 'Code', 'Repeat']
palavras.slice(3, 0, "Coffe")  // ['Drink', 'Sleep', 'Code', "Repeat", "Coffe"]
palavras.slcie(-1, 0, "Coffe") // ['Drink', 'Sleep', 'Code', "Repeat", "Coffe"]
```

#### 🌱.shift

```javascript
const palavras ['Drink', 'Sleep', 'Code', 'Repeat']
palavras.slice(0, 1,)  // ['Sleep', 'Code', "Repeat"]
```

#### 🌱.unshift 

```javascript
const palavras ['Drink', 'Sleep', 'Code', 'Repeat']
palavras.slice(0, 0, "Coffe",)  // ['Coffe', 'Drink', 'Sleep', 'Code', "Repeat"]
```