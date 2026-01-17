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
> [!banner-icon] 🌿Factory + Prototypes
## 🌳Prototypes em Factory Functions

```column-settings
Number of Columns: 2
Largest Column: standard
```

Além de usar os prototypes em funções construtora, também é possível os utilizar em Factory Functions. Para isso se deve retornar um objeto criado através do método 'Object.creat()'. Esse método deve receber como primeiro parâmetro um outro objeto que será utilizado com o prototype, além de um outro objeto que contenham as chaves e mais um objeto para cada chave, que será responsável pela definição das propriedades do atributo. Para manter um código mais flexível, é preferível utilizar o método 'Object.assign()', que no primeiro parâmetro deve receber o alvo, no caso um objeto vazio, e nos demais pode receber métodos definidos através de 'const' ou 'let'. 



```javascript
// Objeto com método falar
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

// Objeto com método beber
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// Criação de um protótipo de pessoa combinando os métodos falar e beber
const pessoaPrototype = Object.assign({}, falar, beber);

// Função fábrica para criar objetos pessoa
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome, enumerable: true, configurable: true, writable: true },
    sobrenome: { value: sobrenome, enumerable: true, configurable: true, writable: true }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1); // 
```


## 🌳'new Map'

```column-settings
Number of Columns: 2
Largest Column: standard
```

O _Map_ é uma estrutura de dados que armazena pares e chave-valor, semelhante a um objeto. Mas, diferente de um objeto, um _Map_ permite chaves de qualquer tipo, incluindo objetos e funções, além de preservar a ordem de inserção dos elementos. Para criar um _Map_, usa-se o construtor 'new Map()', e os elementos podem ser adicionados com '.set(chave, valor)'



```javascript
const pessoas = [
    {id: 3, nome: 'Douglas'},
    {id: 2, nome: 'Luiz'},
    {id: 1, nome: 'Felipe'}
]

// Criando um novo Map para armazenar as pessoas
const novasPessoas = new Map;

// Iterando sobre o array de pessoas
for (const pessoa of pessoas) {
    const {id} = pessoa; // Extraindo o id da pessoa
    // Adicionando a pessoa no Map, usando o id como chave
    novasPessoas.set(id, {...pessoa});
}

// Exibindo a pessoa com id 2 no console
console.log(novasPessoas.get(2));
```




