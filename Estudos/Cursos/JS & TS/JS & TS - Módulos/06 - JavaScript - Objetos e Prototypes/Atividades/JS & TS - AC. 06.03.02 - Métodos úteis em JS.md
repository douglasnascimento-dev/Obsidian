---
Tipo: Atividade
Início: 2025-01-08
Final: 2025-01-08
Conclusão: 2025-01-08
Status: true
Disciplina:
  - JS & TS
---
  

## 🌳Exercício: Trabalhando com 'Object.defineProperty', 'Constructor Functions' e Métodos de Objeto

Crie um sistema para gerenciar produtos de um estoque. Cada produto deve possuir as seguintes propriedades:

- **Nome**: string, não pode ser modificado após definido.
- **Preço**: número, pode ser alterado, mas deve aceitar apenas valores numéricos.
- **Quantidade em Estoque**: número, não pode ser listado diretamente, mas deve ser exibido em um método chamado 'verEstoque'.

### 🌿Requisitos:

1. Utilize uma 'constructor function' chamada 'Produto' para criar os objetos.
2. Implemente as propriedades utilizando 'Object.defineProperty' ou 'Object.defineProperties'.
3. Crie pelo menos um método dentro do objeto que permita visualizar informações sobre o produto ('verInfo').
4. Teste o comportamento dos métodos e propriedades:
    - Tente alterar o nome do produto após ele ser definido.
    - Congele o objeto após criá-lo e tente realizar alterações.
    - Liste as chaves, valores e entradas do objeto usando 'Object.keys', 'Object.values' e 'Object.entries'.

#### 🌱Exemplo de Saída Esperada:

```javascript
// Criando um produto
let produto1 = new Produto('Notebook', 3000, 10);

// Tentando modificar o nome do produto (não deve funcionar)
produto1.nome = 'Celular'; // Deve ignorar a modificação

// Exibindo informações do produto
console.log(produto1.verInfo()); // Saída esperada: 'Produto: Notebook, Preço: R$ 3000, Estoque: 10 unidades.' 

// Modificando o preço do produto
produto1.preco = 2800; // Deve permitir se for numérico
console.log(produto1.verInfo()); // Saída esperada: 'Produto: Notebook, Preço: R$ 2800, Estoque: 10 unidades.'  

// Congele o objeto e tente realizar alterações
Object.freeze(produto1);
produto1.preco = 2500; // Deve ignorar a modificação
console.log(produto1.preco); // Saída esperada: 2800

// Listando as chaves, valores e entradas
console.log(Object.keys(produto1)); // ["nome", "preco"]
console.log(Object.values(produto1)); // ["Notebook", 2800]
console.log(Object.entries(produto1)); // [["nome", "Notebook"], ["preco", 2800]]
```

> **Dica**: Garanta que os conceitos de 'Object.defineProperty', métodos como 'Object.keys', e a utilização de 'constructor functions' estejam presentes na implementação.