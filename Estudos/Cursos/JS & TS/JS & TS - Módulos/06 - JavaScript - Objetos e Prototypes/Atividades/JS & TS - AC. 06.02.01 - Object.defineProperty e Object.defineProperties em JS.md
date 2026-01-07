---
Tipo: Atividade
Início: 2025-01-08
Final: 2025-01-08
Conclusão: 2025-01-08
Status: true
Disciplina:
  - JS & TS
---
### 🌳Exercício: Trabalhando com 'Object.defineProperty' e 'Object.defineProperties`

Implemente um sistema de gerenciamento de produtos em um estoque utilizando os conceitos de 'Object.defineProperty' e 'Object.defineProperties'.

### 🌿Descrição do Problema

Você deve criar uma função construtora chamada 'Produto', que será usada para criar objetos representando produtos no estoque. Cada produto devera ter as seguintes propriedades e comportamentos:

### 🌿Requisitos

1. **Propriedades:**
    - 'nome' (string): O nome do produto.
    - 'preco' (number): O preco do produto, que:
        - Deve ser acessivel, mas nao pode ser configurado diretamente por fora da funcao.
        - Deve lancar um erro caso tentem atribuir um valor que nao seja numerico.
    - 'estoque' (number): A quantidade disponivel, que:
        - Nao pode ser alterada fora da funcao.
        - Nao pode ser reconfigurada ou deletada.
    - 'categoria' (string): Categoria do produto. Deve ser uma propriedade editável.
2. **Métodos:**
    - 'desconto(percentual)': Um método que aplica um desconto percentual ao preço do produto.
    - 'reporEstoque(quantidade)': Um metodo para aumentar a quantidade do estoque, mas que so deve aceitar valores numericos positivos.

- Utilize 'Object.defineProperty' para definir as propriedades 'preco' e 'estoque'.
- Utilize 'Object.defineProperties' para configurar as propriedades 'nome' e 'categoria'.
- Os metodos 'desconto' e 'reporEstoque' devem ser adicionados diretamente no prototipo da funcao construtora 'Produto'.

---

#### 🌱Exemplo de Entrada e Saida

##### Entrada:

```javascript
let livro = new Produto('Livro de JavaScript', 50, 10, 'Educacao');

console.log(livro.preco); // 50
livro.desconto(10); 
console.log(livro.preco); // 45
livro.reporEstoque(5);
console.log(livro.estoque); // 15
livro.preco = 'gratis'; // Deve lancar erro: 'O preco deve ser numerico.'
livro.estoque = 100; // Nao deve alterar o estoque.
```

##### Saida Esperada:

```plaintext
50
45
15
Uncaught TypeError: O preco deve ser numerico.
```

---

#### 🌱Desafio Adicional

Implemente uma validacao na propriedade 'nome' para garantir que:

- O nome deve ter pelo menos 3 caracteres.
- Caso contrario, um erro deve ser lancado ao tentar definir um nome invalido.