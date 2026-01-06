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

![[Capa - JS - Objetos e Prototypes.png|banner]]
> [!banner-icon] 🌹
## 🌹Notação de Ponto e de Colchetes
--- start-multi-column: ID_ydk5
```column-settings
Number of Columns: 2
Largest Column: standard
```

Além da notação padrão que se utiliza de ponto, como em "pessoa.nome", também é possível utilizar a notação de colchete, com isso é possível acessar dinamicamente um objeto, o que não é permitido na notação de ponto, como pode ser observado no exemplo ao lado:

--- column-break ---

```javascript
const pessoa = {
	nome: "Luiz"
	sobrenome: "Augusto"
}

let chave - "nome"
console.log(pessoa[chave])
```

--- end-multi-column
## 🌹Object.defineProperty 

--- start-multi-column: ID_d970
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Método Object.defineProperty, permite ao criar um objeto, definir suas características, como:
- **Enumerable:** Se o atributo estará visível ao percorrer o vetor no 'for in' ou .keys()
- **Value:** O Valor do atributo, podendo ser um valor literal ou uma função, o que resultará em um método
- **Writable:** Se o atributo será editável, semelhante ao uso de let e const para variáveis
- **Configurable:** Se o atributo poderá ser deletado

Todos os campos, serão preenchidos com true ou false, com exceção do valor. A Função receberá três parâmetros, o primeiro se refere a qual objeto será editado, no caso de ser o mesmo objeto em que ele está inserido, é possível usar 'this', o segundo parâmetro é qual atributo, podendo ser um já existente ou um que será criado e um objeto com as configurações. Como exemplificado abaixo

--- column-break ---

```javascript
function Produto(nome, preco, estoque) {
	this.nome = nome
	this.preco = preco
	Object.defineProperty(this, 'estoque', {
		enumerable: true,
		value: estoque,
		writable: false,
		configurable: true
	})
}
```

--- end-multi-column

## 🌹Object.definePropierties
--- start-multi-column: ID_b8a6
```column-settings
Number of Columns: 2
Largest Column: standard
```

É Semelhante ao Object.defineProperty, mas para múltiplos atributos, deve receber ao menos 2 parâmetros, o primeiro é objeto que irá ser modificado e a partir do segundo, os atributos que serão configurados, esse objeto terá um único atributo que deverá ser o nome do atributo que será editado e que terá como valor um novo objeto que conterá as configurações

--- column-break ---

```javascript
function Produto(nome, preco, estoque) {
	this.nome = nome
	this.preco = preco
	Object.defineProperty(this, {
		estoque: {
			enumerable: true,
			value: estoque,
			writable: false,
			configurable: true
		},
		valorEstoque: {
			enumerable: false,
			value: preco * estoque,
			writable: false,
			configurable: true
		}
	}
	})
}
```

--- end-multi-column
## 🌹Utilizando Set e Get com o Object.defineProperty
--- start-multi-column: ID_dp7s
```column-settings
Number of Columns: 2
Largest Column: standard
```

Quando utilizado os atributos .get e .set, logicamente não é necessária a declaração dos atributos value e writable, pois esses os substituem funcionalmente. O Atributo .get, indicará o valor que o atributo terá quando declarado, de maneira similar ao value. Já o atributo .set define regras para a atribuição do valor, o que impossibilita a declaração de writable como falso.

--- column-break ---

```javascript
function Produto(nome, preco, estoque) {
	this.nome = nome
	this.preco = preco

	let estoquePrivado = estoque
	Object.defineProperty(this, 'estoque', {
		enumerable: true,
		configurable: true,
		get: () => estoquePrivado,
		set: valor => {
			if (type of valor !== 'number'){
			trow new TypeError('Tipo Inválido')
			}
		}
	})
}
```

--- end-multi-column





