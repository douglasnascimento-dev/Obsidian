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

![[JS - Funções.png|banner]]
> [!banner-icon] 🌿Funções
## 🌳Função de Callback
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Método de utilização de função de callback, é utilizado para quando se precisa que funções, com tempo de execução distintos entre si, sigam uma determinada ordem de execução. Observe que fosse chamada as funções *f1* e *f2*, elas já seriam executadas em ordem, mas na web isso nem sempre acontece, principalmente quando envolve requisições externas. Para isso, é passado como argumento da função *f1* uma função callback que será responsável de chamar a função *f2*

--- column-break ---

```javascript
function f1 (callback){
	console.log("Execução 01")
	if (callback) callback()
}

function f2 (){
	console.log("Execução 02")
}

f1 (f1callback)

function f1callback () {
	 f2()
}
```

--- end-multi-column
## 🌳IIEF - Função de Invocação Imediata
--- start-multi-column: ID_ulma
```column-settings
Number of Columns: 2
Largest Column: standard
```

Essa método de invocação imediata permite a criação e a imediata invocação de uma determinada função, sua utilização é comum em casos em que se busca evitar o contanto direto do código com o escopo global. Observe que sua declaração acontece entre parênteses, e seus parâmetros são passados logo em seguida.

--- column-break ---

```javascript
(function (varQualquer) {
	console.log("Execução do Código")
}) (argQualquer)
```

--- end-multi-column
## 🌳Factory Function
--- start-multi-column: ID_b50u
```column-settings
Number of Columns: 2
Largest Column: standard
```

Uma factory function, também chamada de função fábrica, é aquela função que tem como retorno um objeto, podendo ou não conter métodos (*funções dentro de objetos*) em si. Observe que no exemplo ao lado, é criado dois objetos e requiridos um atributo e um metódo de cada objeto.

--- column-break ---

``` javascript
function pessoas(nome, sobrenome, idade) {
	return {
		nome,
		sobrenome,
		nomeCompleto(){
			return `${nome} ${sobrenome}`
		},
		idade
	}
}
let p1 = pessoas("Douglas", "Nascimento", 18);
let p2 = pessoas("Igor", "Oliveira", 21)

console.log(p1.nome) //Chamando o atriuto de p1
console.log(p2.nomeCompleto()) //Chamando um metódo de p2
```

--- end-multi-column
### 🌿Getter
--- start-multi-column: ID_3r7m
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Uso de getter permite a um método ser tratado como um atributo de um objeto. Observe que diferentemente do exemplo anterior aqui o método *nomeCompleto* não é declarado com o uso de parênteses, semelhante a uma função. Para sua utilização deve ser declarado a palavra *get* antes da declaração do método no objeto de origem.

--- column-break ---

``` javascript
function pessoas(nome, sobrenome, idade) {
	return {
		nome,
		sobrenome,
		get nomeCompleto(){
			return `${nome} ${sobrenome}`
		},
		idade
	}
}
let p1 = pessoas("Douglas", "Nascimento", 18);
let p2 = pessoas("Igor", "Oliveira", 21)

console.log(p1.nome) //Chamando o atriuto de p1
console.log(p2.nomeCompleto //Chamando um metódo, escondido de atributo, de p2
```

--- end-multi-column
### 🌿Setter
--- start-multi-column: ID_oa6g
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Setter permite através de um método atribuir valores a partir de um atribuição de atributos. Observe que a atribuição do metódo é passado de forma semelhante a de um parâmetro. Se caso a palavra *set* não for usada isso não gerará um erro, mas a atribuição não funcionará.

--- column-break ---

``` javascript
function pessoas(nome, sobrenome, idade) {
	return {
		nome,
		sobrenome,
		set nomeRegistro(valor1){
			this.nome = valor1;
		},
		idade
	}
}
let p1 = pessoas("Douglas", "Nascimento", 18)
p1.nomeRegistro = "André"

console.log(p1) // nome: André, sobrenome: Nascimento,  idade: 18
```

--- end-multi-column
#### 🌱**Diferenças** entre Função Fábrica e Função Construtora

 **Função Fábrica VS Função Construtora:** A Função Fábrica é uma função comum que apenas tem como valor de retorno um objeto. Já as Funções Construtoras são especificadas para essa função

## 🌳Função Construtora 
--- start-multi-column: ID_dszt
```column-settings
Number of Columns: 2
Largest Column: standard
```

Diferente das Funções comuns seu padrão de notação se utiliza do Camel Case, mas como a inicial Maiúscula, e ao ser declarada é necessário estar acompanhada da palavra 'new'. Não possui valor de retorno, já que a função inteira é considerada um retorno. Se o metódo ou atributo estiver acompanhado por 'this', ele será público, já quando não houver essa declaração ele será privado, não podendo ser acessado

--- column-break ---

``` javascript
function Pessoa(nome, sobrenome, idade) {
	// Atributos e Metódos Públicos
	this.nome,
	this.sobrenome,
	this.nomeCompleto = () =>return `${nome} ${sobrenome}`
	// Atributos e Metódos Privados
	let idadePessoa = idade
	let anoDeNasciemnto = () => return `${idade - 2024}`
}
let p1 = new Pessoa("Douglas", "Nascimento", 18);
let p2 = new Pessoa("Igor", "Oliveira", 21)

console.log(p1.nome) //Chamando o atriuto de p1
console.log(p2.nomeCompleto()) //Chamando um metódo de p2
```

--- end-multi-column
## 🌳Funções Recursivas 
--- start-multi-column: ID_6t42
```column-settings
Number of Columns: 2
Largest Column: standard
```

Essas funções possuem comportamento semelhante aos laços de repetição. Dever receber um parâmetro que será comparado até atingir um determinado limite estabelecido. Também se é necessário incrementar essa variável a cada execução, para que não seja gerada um loop infinito e ao final da função ela se auto declara novamente. A Engine do JS, impõe limites de execuções, que podem variar, mas devem ser observados 

--- column-break ---

```javascript
let recursiva = max => {
	if (max > 10) return;
	console.log(max)
	max++
	recursiva(max)
}

recursiva(0)
```

--- end-multi-column
## 🌳Funções Geradoras
--- start-multi-column: ID_1t0s
```column-settings
Number of Columns: 2
Largest Column: standard
```

Essas funções possibilitam o retorno de valores diferentes a cada execução. Deve ser declarado um asterisco junto da palavra 'function' e retornar utilizando 'yield'. Já para obter o seu retorno é necessário a declaração de '.next().value', o que permitirá a obtenção do valor a cada execução. Se for utilizado 'return' na função, isso causará que a partir da declaração, mas nenhum yield será executado

--- column-break ---

```javascript
function* generator() {
	// Código 
	yield 'Valor 01'
	// Código
	yield 'Valor 02'
	//Código
	yield 'Valor 03'
}

let g1 = geradora1()
console.log(g1.next().value) // Valor 01
console.log(g1.next().value) // Valor 02
console.log(g1.next().value) // Valor 03
```

--- end-multi-column










