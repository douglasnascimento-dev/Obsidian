---
Tipo: Atividade
Início: 2026-01-09
Final: 2026-01-09
Conclusão: 2026-01-09
Status: true
Disciplina:
  - JS & TS - Módulo 17
---

## 🍏 Desafio: Sistema de Processamento e Mesclagem de Produtos

**Objetivo:** Desenvolver uma arquitetura de tipagem e funções utilitárias para um sistema de e-commerce, focando na utilização de Generics com Callbacks, Intersecção, Predicados e os utilitários de Exclusão e Modificação de objetos.

### 🌿 Requisitos do Exercício

1. **Tipos de Domínio e Utilitários:**
    - Crie um tipo `ProdutoProtocol` com as propriedades: `nome` (string), `preco` (number), `categoria` (string opcional) e `emEstoque` (boolean opcional).
    - Utilizando os Tipos Utilitários, crie um tipo `ProdutoRigido` onde **todas** as propriedades de `ProdutoProtocol` se tornem obrigatórias e apenas de leitura (Readonly).
    - Crie um tipo união chamado `CategoriasGerais` com os valores: `'Eletrônicos' | 'Móveis' | 'Roupas' | 'Obsoleto'`. Em seguida, use o utilitário `Exclude` para criar um tipo `CategoriasAtivas` que não contenha a opção `'Obsoleto'`.
    
2. **Predicado (Type Predicate):**
    - Crie uma função chamada `isProdutoValido` que receba um valor `unknown`.
    - A função deve retornar um predicado garantindo que o valor testado seja um objeto que contenha obrigatoriamente as chaves `nome` (sendo string) e `preco` (sendo number).
    
3. **Generics e Callbacks:**
    - Crie uma função genérica chamada `filtrarEProcessar<T>`.
    - Esta função deve receber dois parâmetros: um array do tipo `T[]` e um callback de filtragem.
    - A função deve iterar sobre o array e utilizar o callback para decidir quais itens manter, retornando um novo array `T[]` (semelhante ao funcionamento demonstrado na anotação de Generics & Callbacks).
    
4. **Intersecção com Generics:**
    - Crie uma função chamada `adicionarMetadados`.
    - A função deve utilizar Generics (`<O1, O2>`) para receber um objeto de produto (`O1`) e um objeto de metadados (`O2` - ex: `{ dataAdicao: string, aprovado: boolean }`).
    - O retorno desta função deve ser obrigatoriamente a Intersecção dos dois tipos informados (`O1 & O2`).

**Regras estritas:**

- O uso de `any` ou `as type` (Type Assertion) é estritamente proibido.
- A implementação não deve conter bibliotecas externas.
- Respeite rigorosamente as assinaturas genéricas abordadas nas anotações.