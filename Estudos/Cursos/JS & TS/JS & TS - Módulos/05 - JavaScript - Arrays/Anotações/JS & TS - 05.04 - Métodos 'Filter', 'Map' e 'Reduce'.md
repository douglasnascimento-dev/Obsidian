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
> [!banner-icon] 🌿Filter, Map e Reduce
## 🌳Filter( )
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O método .filter permite filtrar um array. Ele recebe uma função de callback, que pode ser anônima ou não. Essa função pode receber até três parâmetros: o valor do array, o índice do array a cada iteração e o array inteiro. A função pode ser uma arrow function, como no exemplo ao lado:

--- column-break ---

```javascript
let nums = [01, 04, 07, 12, 15, 18, 23, 26, 29, 30, 35, 37];

let numsFiltrados = nums.filter((valor, indice, array) => valor > 20); // [23, 26, 29, 30, 35, 37]
```

--- end-multi-column
### 🌿 Exemplo utilizando um Array com Objetos:

```javascript
let pessoas = [
	{nome: "Lucas", idade: 21},
	{nome: "Gabriela", idade: 32},
	{nome: "Luiz", idade: 43},
	{nome: "Laís", idade: 34}
];

let nomeTerminadoComS = pessoas.filter(obj => obj.nome.endsWith('s')); 

/* [
	{nome: "Lucas", idade: 21},
	{nome: "Laís", idade: 34}
] */
```

Nesse exemplo, filtramos os nomes que terminam com 's'. A filtragem acontece de maneira semelhante a verificações numéricas e utiliza o método `.endsWith('')`.

## 🌳Map( )
--- start-multi-column: ID_d95y
```column-settings
Number of Columns: 2
Largest Column: standard
```

O método `.map` permite mapear o array e provocar alterações. Ele também recebe uma função de callback com até três parâmetros. Diferente do .filter, ele sempre retornará um array de mesmo tamanho, já que apenas executa alterações, como exemplificado ao lado:

--- column-break ---

```javascript
let nums = [01, 04, 07, 12, 15, 18, 23, 26, 29, 30, 35, 37];

let numsDobro = nums.map((valor, indice, array) => valor * 2); // [02, 08, 14, 24, 30, 36, 46, 52, 58, 60, 70, 74]
```

--- end-multi-column
### 🌿Exemplo utilizando um Array com Objetos:

```javascript
let pessoas = [
	{nome: "Lucas", idade: 21},
	{nome: "Gabriela", idade: 29},
	{nome: "Luiz", idade: 43},
	{nome: "Laís", idade: 31}
];

let pessoasComId = pessoas.map(obj => ({ ...obj, id: obj.idade / 2 }));

/* [
	{nome: "Lucas", idade: 21, id: 10.5},
	{nome: "Gabriela", idade: 29, id: 14.5},
	{nome: "Luiz", idade: 43, id: 21.5},
	{nome: "Laís", idade: 31, id: 15.5}
] */
```

Nesse exemplo, criamos um novo array com um atributo `id` calculado a partir da idade.

## 🌳Reduce( )
--- start-multi-column: ID_d95y
```column-settings
Number of Columns: 2
Largest Column: standard
```

O método `.reduce` reduz o array a um único valor, como a soma total dos elementos. Ele recebe uma função de callback com **quatro parâmetros**: o acumulador, o valor atual, o índice e o array. O acumulador pode receber um valor inicial, declarado ao fim da função.

--- column-break ---

```javascript
let nums = [01, 04, 07, 12, 15, 18, 23, 26, 29, 30, 35, 37];

let soma = nums.reduce((acumulador, valor) => acumulador + valor, 0); // 242
```

--- end-multi-column
### 🌿Exemplo utilizando um Array com Objetos:

```javascript
let pessoas = [
	{nome: "Lucas", idade: 21},
	{nome: "Gabriela", idade: 29},
	{nome: "Luiz", idade: 43},
	{nome: "Laís", idade: 31}
];

let maisVelho = pessoas.reduce((maisVelha, obj) => maisVelha < obj.idade ? obj.idade : maisVelha, 0); // 43
```

Nesse exemplo, encontramos a idade da pessoa mais velha.

## 🌳Utilizando Filter, Map e Reduce
--- start-multi-column: ID_k777
```column-settings
Number of Columns: 2
Largest Column: standard
```

É possível combinar .filter, .map e .reduce em uma única expressão. No exemplo ao lado, filtramos os números pares, multiplicamos por 2 e somamos os resultados.

--- column-break ---

```javascript
let nums = [01, 04, 07, 12, 15, 18, 23, 26, 29, 30, 35, 37];

let resultado = nums
	.filter(valor => valor % 2 === 0)
	.map(valor => valor * 2)
	.reduce((ac, valor) => ac + valor, 0); // 240
```

--- end-multi-column

### 🌿 forEach
--- start-multi-column: ID_esn8
```column-settings
Number of Columns: 2
Largest Column: standard
```

O .forEach executa uma função para cada elemento do array, mas não retorna um novo array. É útil para efeitos colaterais, como imprimir valores ou modificar variáveis externas.

--- column-break ---

```javascript
let nums = [01, 04, 07, 12, 15, 18, 23, 26, 29, 30, 35, 37];

nums.forEach(valor => console.log(valor));
```

--- end-multi-column


