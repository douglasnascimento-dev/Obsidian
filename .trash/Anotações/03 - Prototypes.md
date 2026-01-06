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

![[Capa - JS Básico.png|banner]]
> [!banner-icon] 🥥


## 🌹Prototype em Funções Construtoras
--- start-multi-column: ID_4vjy
```column-settings
Number of Columns: 2
Largest Column: standard
```

Sempre que um objeto é criado em JS, ele possuirá um ''método'' invisível, que é chamado de prototype e/ou proto, essa área será compartilhado por todos os objetos criados pela função automaticamente. Por padrão, é armazenado nesse local variáveis que necessitam de estar presentes em vários objetos, o que substitui a declaração interna na função

--- column-break ---

```javascript
function Produto(valor, estoque) {
    this.valor = valor;  
    this.estoque = estoque;
}

Produto.prototype.valorEmEstoque = function() {
    return this.valor * this.estoque;
};

let camiseta = new Produto(20, 5);
console.log(camiseta.valorEmEstoque());
```

--- end-multi-column
## 🌹Setando um Prototype 

--- start-multi-column: ID_pn26
```column-settings
Number of Columns: 2
Largest Column: standard
```

Além de criar um prototype para uma função construtora, também é possível que um objeto obtenha esse prototype, mesmo que não tenha sido criado pela função. No exemplo ao lado, o 'objetoAleatorio' recebe o prototype de Produto, o que permite que ele execute os mesmo métodos de um objeto criado pela função construtora

--- column-break ---

```javascript
function Produto(valor, estoque) {
    this.valor = valor;  
    this.estoque = estoque;
}

Produto.prototype.valorEmEstoque = function() {
    return this.valor * this.estoque;
};

let objetoAleatorio = {
    valor: 20
    estoque: 7
}

Object.setPrototypeOf(objetoAleatorio, Produto.prototype)
console.log(objetoAleatorio.valorEmEstoque());
```

--- end-multi-column

## 🌹Setando um Objeto como Prototype
--- start-multi-column: ID_691l
```column-settings
Number of Columns: 2
Largest Column: standard
```

Além de reutilizar um prototype, também é possível setar um objeto como prototype de um outro objeto, sem limitação de possibilidade. No caso ao lado, é possível observar que o produto recebe como prototype um objeto aleatório, dessa forma partir desse momento todo objeto que se derive desse objeto terá acesso aos métodos desse objeto

--- column-break ---

```javascript
function Produto(valor, estoque) {
    this.valor = valor;  
    this.estoque = estoque;
}

let objetoAleatorio = {
    ConsoleAleatorio: "Lorem Ipsum"
};

Object.setPrototypeOf(Produto.prototype, objetoAleatorio);
let Camiseta = new Produto(50, 7);
console.log(Camiseta.ConsoleAleatorio)
```


--- end-multi-column



