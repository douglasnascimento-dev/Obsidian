---
Tipo: Atividade
Início: 2025-01-08
Final: 2025-01-08
Conclusão: 2025-01-08
Status: true
Disciplina:
  - JS & TS
---

## 🌳Exercício: Manipulando Objetos em JavaScript

**Objetivo:** Praticar a manipulação de objetos utilizando os métodos 'Object.keys', 'Object.values', 'Object.entries', o operador _spread_, e o método 'Object.freeze'.

### 🌿Cenário

Você e responsável por gerenciar um sistema de produtos em uma loja virtual. Cada produto tem as seguintes propriedades:

- 'nome': Nome do produto.
- 'preco': Preco do produto.
- 'categoria': Categoria a qual o produto pertence.

Sua tarefa e manipular os objetos e obter informações utilizando os conceitos aprendidos.

### 🌿Código Inicial

```javascript
const produto1 = {
    nome: 'Teclado Mecanico',
    preco: 250,
    categoria: 'Informatica'
};

const produto2 = {
    nome: 'Monitor 24\'\'',
    preco: 900,
    categoria: 'Informatica'
};
```

---

### 🌿Tarefas

1. **Copiar e adicionar propriedades**  
    Use o operador _spread_ para criar uma copia do 'produto1' e adicione uma nova propriedade chamada 'desconto' com o valor de 10%.
    
2. **Listar chaves, valores e entradas**  
    Utilizando 'Object.keys', 'Object.values' e 'Object.entries':
    
    - Liste todas as chaves de 'produto2'.
    - Liste todos os valores de 'produto1'.
    - Liste as entradas (chave/valor) de 'produto2'.
3. **Congelar um objeto**  
    Congele o objeto 'produto1' usando 'Object.freeze' e tente alterar o valor da propriedade 'preco'. Observe o que acontece.
    
4. **Inspecionar propriedades**  
    Use 'Object.getOwnPropertyDescriptor' para inspecionar a propriedade 'nome' de 'produto1' e exiba as configuracoes dessa propriedade no console.
    

---

#### 🌱Resultado Esperado

Ao executar corretamente cada tarefa, você devera ver saídas similares a estas:

1. Copia com a propriedade 'desconto':

```javascript
{
    nome: 'Teclado Mecanico',
    preco: 250,
    categoria: 'Informatica',
    desconto: 0.1
}
```

1. Chaves, valores e entradas:

```javascript
// Chaves de produto2
['nome', 'preco', 'categoria']

// Valores de produto1
['Teclado Mecanico', 250, 'Informatica']

// Entradas de produto2
[['nome', 'Monitor 24\'\''], ['preco', 900], ['categoria', 'Informatica']]
```

1. Apos congelar 'produto1', nenhuma alteracao sera possivel:

```javascript
produto1.preco = 300;
console.log(produto1.preco);   // Saida: 250
```

1. Configuracoes da propriedade 'nome':

```javascript
{
    value: 'Teclado Mecanico',
    writable: true,
    enumerable: true,
    configurable: true
}
```

---

#### 🌱Desafio Extra

Crie uma funcao chamada 'listarProdutos' que receba um array de produtos e retorne um array com as chaves, valores e entradas de cada produto no formato:

```javascript
[
    { chaves: [...], valores: [...], entradas: [...] },
]
```

Agora todas as suas notas seguem o padrão correto! Se precisar de mais ajustes, é só avisar.