---
Tipo: Atividade
Início: 2025-01-22
Final: 2025-01-23
Conclusão: 2025-01-23
Conteúdo: JS & TS - Objetos em JS
Status: true
Disciplina:
  - JS & TS
---

## 🌳 Exercício Avançado: Sistema de Gestão de Produtos com Herança e Métodos Específicos

**Enunciado:**

Você está desenvolvendo um sistema de gestão de produtos para uma empresa que vende itens diversificados. O sistema deve gerenciar produtos genéricos e suas especializações, utilizando herança, encapsulamento e manipulação avançada de objetos.

**Objetivo:** Implementar três níveis de abstração: **Produto**, **Especialização de Produto** e **Gerenciamento de Produtos**.

### 🌿 1. Produto Base

Crie uma função construtora chamada 'Produto', com as seguintes propriedades:

- 'nome' (string), 'preco' (número).
- Métodos no protótipo:
    - 'aumento(quantia)': Aumenta o preço do produto.
    - 'desconto(quantia)': Reduz o preço do produto.

### 🌿 2. Especializações de Produto

Implemente as seguintes especializações, herdando de 'Produto':

#### 🌱 a) Livro

- Propriedades específicas: 'autor' (string), 'paginas' (número).
- Métodos:
    - 'descricao': Retorna uma string no formato:  
        _"O livro [nome] foi escrito por [autor] e contém [paginas] páginas."_
    - 'valorPorPagina': Retorna o valor médio por página.

#### 🌱 b) Eletrodoméstico

- Propriedades específicas: 'marca' (string), 'voltagem' (número), 'garantia' (em meses).
- Métodos:
    - 'calculaGarantia(dataCompra)': Retorna a data de vencimento da garantia com base na data da compra.
    - 'descricao': Retorna uma string no formato:  
        _"[marca] [nome], com voltagem de [voltagem]V e garantia de [garantia] meses."_

#### 🌱 c) Vestuario

- Propriedades específicas: 'tamanho' (string), 'material' (string), 'cor' (string).
- Métodos:
    - 'descricao': Retorna uma string no formato:  
        _"[nome], tamanho [tamanho], material [material], cor [cor]."_
    - 'aplicaDescontoPorMaterial': Reduz o preço em uma porcentagem específica com base no material (ex.: 10% para algodão, 5% para poliéster).

### 🌿 3. Sistema de Gerenciamento

Crie um objeto chamado 'GerenciadorDeProdutos' que implemente os seguintes métodos:

- 'adicionarProduto(produto)': Adiciona uma instância de qualquer tipo de produto ao sistema.
- 'removerProduto(nome)': Remove um produto pelo nome.
- 'listarProdutos': Exibe todos os produtos no sistema com suas descrições detalhadas.
- 'buscarPorPreco(min, max)': Retorna os produtos cujo preço esteja no intervalo especificado.

### 🌿 Regras do Exercício

1. Use 'Object.create' para implementar herança entre as funções construtoras.
2. Utilize 'Object.defineProperties' para proteger propriedades sensíveis, como o preço ou garantia, definindo getters e setters apropriados.
3. Crie pelo menos 3 instâncias de cada especialização (9 no total).
4. Teste o sistema de gerenciamento com os métodos listados acima.

### 🌿 Desafio Bônus

Implemente um método no 'GerenciadorDeProdutos' chamado 'aplicarAumentoEmLote(percentual)', que aumenta o preço de todos os produtos no sistema em uma determinada porcentagem. O método deve funcionar independentemente do tipo de produto.

Para dificultar, implemente um mecanismo de validação para que os aumentos sejam aplicados apenas em produtos que tenham sido adicionados ao sistema há mais de 30 dias (use o objeto 'Date' para calcular).