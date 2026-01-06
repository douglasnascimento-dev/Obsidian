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

![[JS - Objetos e Prototypes.JPG|banner]]
> [!banner-icon] 🌿Prototypes

## 🌳Função Construtora

A função construtora é uma espécie de "molde" que permite criar instâncias de objetos com propriedades e métodos definidos. Para criar um objeto com ela, utiliza-se a palavra-chave new.  

Exemplo no código:
```javascript
function Pessoa(nome, sobrenome) {
    this.nome = nome; 
    this.sobrenome = sobrenome;
}
const pessoa1 = new Pessoa("Douglas", "Nascimento");
const pessoa2 = new Pessoa("Fernanda", "Torres");
console.log(pessoa1); // Saída: Pessoa { nome: "Douglas", sobrenome: "Nascimento" }

```

## 🌳Prototypes e Herança
--- start-multi-column: ID_fkd2
```column-settings
Number of Columns: 2
Largest Column: standard
```

Em JavaScript, cada função construtora tem uma propriedade chamada prototype. O prototype é uma referência a um objeto que contém métodos e propriedades compartilhados por todas as instâncias criadas a partir da função construtora. No exemplo ao lado, o método nomeCompleto foi adicionado ao prototype da função `Pessoa`. Isso significa que todas as instâncias de Pessoa podem acessar esse método sem que ele precise ser recriado para cada objeto.

--- column-break ---

```javascript
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};
console.log(pessoa2.nomeCompleto()); // Saída: "Fernanda Torres"
```

--- end-multi-column
### 🌿Acessando o `__proto__
--- start-multi-column: ID_1ygz
```column-settings
Number of Columns: 2
Largest Column: standard
```


Cada objeto em JavaScript tem uma propriedade especial chamada `__proto__`, que aponta para o prototype da função construtora que o criou. Como no exemplo ao lado. Isso demonstra como os objetos estão "linkados" ao protótipo de sua função construtora. O `__proto__` não termina no protótipo da função construtora. Ele continua apontando para o protótipo superior até chegar no protótipo raiz, chamado `Object.prototype`.

--- column-break ---


```javascript
console.log(pessoa1.__proto__ === Pessoa.prototype); // Saída: true
```


--- end-multi-column

### 🌿Métodos Compartilhados vs. Individuais

Se um método for definido dentro da função construtora, ele será recriado para cada nova instância, aumentando o consumo de memória. Por outro lado, definir o método no `prototype` permite que ele seja compartilhado entre todas as instâncias. Esse é o comportamento mais eficiente, especialmente quando há muitas instâncias sendo criadas.

## 🌳Herança entre Objetos com *setPrototypeOf*
--- start-multi-column: ID_ldpg
```column-settings
Number of Columns: 2
Largest Column: standard
````

O método Object.setPrototypeOf permite definir explicitamente o protótipo de um objeto, criando uma relação de herança. Isso significa que o objeto "filho" terá acesso às propriedades e métodos do protótipo "pai". Essa abordagem é útil para criar relações entre objetos quando a herança por função construtora não é desejada. 

--- column-break ---

```javascript
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA); // `objA` é o protótipo de `objB`
console.log(objB.chaveA); // Saída: "A"
```

--- end-multi-column

## 🌳 Funções Construtoras e Métodos Compartilhados
--- start-multi-column: ID_fxn1

```column-settings
Number of Columns: 2
Largest Column: standard
```

Funções construtoras, como Produto, são frequentemente utilizadas para criar objetos com propriedades específicas. Os métodos podem ser definidos no protótipo para serem compartilhados entre todas as instâncias criadas. Definir métodos diretamente no protótipo é eficiente porque evita a recriação dos mesmos métodos para cada instância. Isso economiza memória e melhora o desempenho do código.

--- column-break ---

```javascript
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco -= (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco += (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 50);
p1.aumento(80); // Aumenta o preço em 80%
p1.desconto(80); // Reduz o preço em 80%
console.log(p1); // Saída: Produto { nome: 'Camisa', preco: 50 }
```

--- end-multi-column


## 🌳Criando Objetos sem Construtor e Utilizando Protótipos
--- start-multi-column: ID_poi2

```column-settings
Number of Columns: 2
Largest Column: standard
```

Objetos podem herdar de protótipos sem serem criados diretamente por uma função construtora, utilizando Object.setPrototypeOf(). Essa técnica é útil para estender objetos existentes com funcionalidades adicionais sem a necessidade de criar novas classes ou construtores.

--- column-break ---

```javascript
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); // Define `Produto.prototype` como protótipo de `p2`
p2.aumento(50); // Aumenta o preço em 50%
console.log(p2.preco); // Saída: 22.5
```

--- end-multi-column

