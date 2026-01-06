---
Tipo: Atividade
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Status: true
Link do Arquivo:
---



### 🥥01 - Exercício de Atribuição por Desestruturação

Você tem uma lista de usuários, onde cada usuário possui um nome, idade e uma lista de endereços. Cada endereço possui a cidade, estado e um código postal. Seu objetivo é usar a desestruturação para extrair algumas informações específicas de cada usuário.

### 🥬 Código Base

```javascript
const usuarios = [
  {
    nome: "Alice",
    idade: 28,
    enderecos: [
      { cidade: "São Paulo", estado: "SP", cep: "01000-000" },
      { cidade: "Rio de Janeiro", estado: "RJ", cep: "20000-000" }
    ]
  },
  {
    nome: "Bruno",
    idade: 34,
    enderecos: [
      { cidade: "Belo Horizonte", estado: "MG", cep: "30000-000" },
      { cidade: "Curitiba", estado: "PR", cep: "80000-000" }
    ]
  },
  {
    nome: "Carla",
    idade: 22,
    enderecos: [
      { cidade: "Salvador", estado: "BA", cep: "40000-000" }
    ]
  }
];

```
### 🥬Tarefas

1. Extraia o nome e a idade do primeiro usuário da lista `usuarios` e atribua-os a variáveis `primeiroNome` e `primeiraIdade`.
    
2. Extraia o segundo endereço do segundo usuário e atribua as variáveis `cidadeBruno`, `estadoBruno`, e `cepBruno`.
    
3. Extraia o estado e o CEP do único endereço do terceiro usuário e atribua às variáveis `estadoCarla` e `cepCarla`.
    
4. Crie uma função que, utilizando desestruturação, receba um objeto usuário e retorne uma string no formato:
    
```javascript
 console.log("Nome: [NOME], Idade: [IDADE], Cidade Principal: [CIDADE], Estado Principal: [ESTADO]")
```

### 🥬Resultado esperado:

1. Extração do nome e idade do primeiro usuário:

 ```javascript
console.log(primeiroNome);  // "Alice"
console.log(primeiraIdade); // 28
```

2. Extração do segundo endereço do segundo usuário:

```javascript
console.log(cidadeBruno);   // "Curitiba"
console.log(estadoBruno);   // "PR"
console.log(cepBruno);      // "80000-000"
```
  
3. Extração do estado e CEP do endereço do terceiro usuário:

```javascript
console.log(estadoCarla);   // "BA"
console.log(cepCarla);      // "40000-000"
```

4. Uso da função para retornar a string formatada:

```javascript 
console.log(infoUsuario(usuarios[0])); // "Nome: Alice, Idade: 28, Cidade Principal: São Paulo, Estado Principal: SP"
console.log(infoUsuario(usuarios[1])); // "Nome: Bruno, Idade: 34, Cidade Principal: Belo Horizonte, Estado Principal: MG"
console.log(infoUsuario(usuarios[2])); // "Nome: Carla, Idade: 22, Cidade Principal: Salvador, Estado Principal: BA"
```