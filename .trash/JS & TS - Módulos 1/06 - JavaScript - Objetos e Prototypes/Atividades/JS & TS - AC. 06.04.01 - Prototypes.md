---
Tipo: Atividade
Início: 2025-01-14
Final: 2025-01-14
Conclusão: 2025-01-14
Conteúdo: Objetos e Prototypes
Status: true
Disciplina:
  - JS & TS - Módulo 06
---
## 🌳 Desafio: Prototipagem e Herança em JavaScript

### 🌿 Cenário

Você está desenvolvendo uma aplicação de e-commerce e precisa criar uma estrutura para gerenciar produtos, categorias e descontos. Para isso, utilize funções construtoras, protótipos e o conceito de herança em JavaScript.

### 🌿 Instruções

1. Crie uma função construtora chamada `Produto` com as seguintes propriedades:
    
    - `nome` (string)
    - `preco` (number)
    - `estoque` (number)
2. Adicione métodos ao protótipo de `Produto`:
    
    - `desconto(percentual)`: diminui o preço do produto pelo percentual indicado.
    - `aumento(percentual)`: aumenta o preço do produto pelo percentual indicado.
3. Crie uma função construtora chamada `Categoria`, que contenha:
    
    - `nomeCategoria` (string)
    - Um array chamado `produtos` para armazenar objetos do tipo `Produto`.
4. Adicione um método no protótipo de `Categoria`:
    
    - `adicionarProduto(produto)`: adiciona um produto ao array de produtos.
5. Crie duas categorias (`Categoria`) e adicione pelo menos dois produtos (`Produto`) em cada uma.
    

#### 🌱 Perguntas:

1. Implemente uma funcionalidade que liste todos os produtos de uma categoria, exibindo o nome e o preço com desconto de 10%.
2. Como você evitaria que o método `desconto` seja sobrescrito diretamente nas instâncias de `Produto`? Explique ou demonstre no código.
3. Explique como o conceito de herança prototipal é aplicado ao definir o protótipo da função construtora.

---

#### 🌱 Pergunta Bônus

Como você implementaria uma funcionalidade em `Categoria` que permita aplicar um desconto global a todos os produtos pertencentes a ela, mas somente se todos os produtos tiverem estoque maior que 10?