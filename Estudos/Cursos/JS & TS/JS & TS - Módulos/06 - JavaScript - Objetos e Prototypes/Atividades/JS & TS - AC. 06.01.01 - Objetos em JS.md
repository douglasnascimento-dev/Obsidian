---
Tipo: Atividade
Início: 2025-01-07
Final: 2025-01-07
Conclusão: 2025-01-07
Status: true
Disciplina:
  - JS & TS
---
## 🌳Exercício sobre Factory Functions, Constructor Functions e Objetos em JavaScript

**Objetivo:** Praticar a criação e manipulação de objetos usando Factory Functions e Constructor Functions, bem como o uso de métodos, getters e o objeto 'Object.freeze()'.

### 🌿Parte 1: Criando e manipulando objetos com Factory Functions

1. Crie uma _factory function_ chamada criaProduto que receba os parâmetros nome, preco e desconto`.
2. A função deve retornar um objeto com os seguintes métodos e propriedades:
    - A propriedade nome contendo o nome do produto.
    - A propriedade preco contendo o preço original.
    - O método precoFinal, que calcula e retorna o preço com desconto.

### 🌿Parte 2: Criando e protegendo objetos com Constructor Functions

1. Crie uma _constructor function_ chamada 'ContaBancaria' que receba 'nomeTitular' e 'saldoInicial'`.
2. Adicione as seguintes funcionalidades:
    - A propriedade 'nomeTitular' armazenando o nome do titular da conta.
    - A propriedade saldo, iniciada com o valor de 'saldoInicial'.
    - Um método chamado depositar que recebe um valor e o adiciona ao saldo.
    - Um método chamado sacar que recebe um valor e subtrai do saldo, desde que o saldo seja suficiente.
    - Utilize 'Object.freeze()' para proteger o objeto criado de futuras alterações.

### 🌿Parte 3: Desafio Final

Combine os conceitos aprendidos: Crie uma _factory function_ chamada criaUsuario que receba os parâmetros nome, sobrenome e idade`.

- Essa função deve retornar um objeto que possui:
    - O nome completo do usuário (usando um _getter_ chamado nomeCompleto`).
    - Um método chamado 'criarContaBancaria()' que retorna um novo objeto 'ContaBancaria' (da Parte 2) para o usuário, já configurado com um saldo inicial de 100.

#### 🌱**Desafio extra** 

Implemente uma validação no método sacar da 'ContaBancaria', exibindo uma mensagem personalizada no console se o saldo for insuficiente para realizar a operação.


