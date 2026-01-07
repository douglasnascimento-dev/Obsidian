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
> [!banner-icon] 🌿Herança
##  🌳 Funções Construtoras e Herança com `Object.create`

As funções construtoras permitem criar objetos com propriedades e métodos específicos. Com a herança via Object.create, é possível criar especializações, permitindo que diferentes tipos de objetos compartilhem funcionalidades.

### 🌿Função Base

A função Produto atua como uma base genérica, contendo propriedades essenciais como `nome` e `preco`, além de métodos reutilizáveis, como aumento e desconto.

```javascript
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
```

### 🌿 Especializações com Funções Construtoras
--- start-multi-column: ID_e32w
```column-settings
Number of Columns: 2
Largest Column: standard
```


A função Camiseta herda de Produto e adiciona propriedades específicas, como cor, material e estampa. O método call é usado para chamar o construtor da classe base.

--- column-break ---

```javascript
function Camiseta(nome, preco, cor, material, estampa) {
    Produto.call(this, nome, preco); // Chamando o construtor de Produto
    this.cor = cor;
    this.material = material;
    this.estampa = estampa;
}

Camiseta.prototype = Object.create(Produto.prototype); // Herança
Camiseta.prototype.constructor = Camiseta; // Corrigindo o construtor
```

--- end-multi-column
#### 🌱Utilizando Getters e Setters
--- start-multi-column: ID_w3ek
```column-settings
Number of Columns: 2
Largest Column: standard
```

A função Caneca também herda de Produto, mas adiciona um controle refinado de estoque usando _getters_ e _setters_ via Object.defineProperty.

--- column-break ---

```javascript
function Caneca(nome, preco, material, cor, estoque) {
    Produto.call(this, nome, preco); // Chamando o construtor de Produto
    this.material = material;
    this.cor = cor;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype); // Herança
Caneca.prototype.constructor = Caneca; // Corrigindo o construtor
```

--- end-multi-column

#### 🌱Comparação entre Especializações
--- start-multi-column: ID_6hz8

```column-settings
Number of Columns: 2
Largest Column: standard
```

**Camiseta**

- Herda de Produto.
- Adiciona propriedades como cor, material e estampa.
- Uso direto das propriedades herdadas e métodos do protótipo.

**Caneca**

- Herda de Produto.
- Adiciona controle refinado de estoque com _getters_ e _setters_.
- Permite validação e encapsulamento do valor do estoque.

--- column-break ---

```javascript
const camiseta = new Camiseta(
    'Camiseta Esportiva', 
    49.99, 
    'Azul', 
    'Poliéster', 
    'Estampa Digital'
);

const caneca = new Caneca(
    'Caneca Personalizada', 
    29.99, 
    'Cerâmica', 
    'Branca', 
    100
);

camiseta.aumento(10); // Aumenta o preço em 10
caneca.desconto(5);   // Reduz o preço em 5

console.log(camiseta); 
console.log(caneca);
```

--- end-multi-column
