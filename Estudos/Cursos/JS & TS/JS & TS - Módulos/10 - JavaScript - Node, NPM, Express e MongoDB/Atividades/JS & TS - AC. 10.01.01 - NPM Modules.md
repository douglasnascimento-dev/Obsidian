---
Tipo: Atividade
Início: 2025-03-19
Final: 2025-03-19
Conclusão: 2025-03-19
Conteúdo: " JS & TS - Node, Npm, Express e MongoDB"
Status: true
Disciplina:
  - JS & TS
---
## 🌳 Exercício - Módulos no Node.js

Você está desenvolvendo um sistema para gerenciar uma biblioteca. O sistema precisa ser modularizado para facilitar a reutilização e organização do código.

### 🌿Parte 1: Criando um módulo

Crie um módulo chamado 'livro.js' que exporta:

1. Uma classe 'Livro' com os atributos 'titulo', 'autor' e 'anoPublicacao'.
2. Um método 'detalhes()' que retorna uma string formatada com as informações do livro.
3. Uma função 'livrosAntigos(livros, ano)' que recebe um array de livros e um ano e retorna apenas os livros publicados antes desse ano.

### 🌿 Parte 2: Utilizando o módulo

Crie um arquivo 'app.js' que:

1. Importa o módulo 'livro.js'.
2. Cria três instâncias da classe 'Livro'.
3. Exibe os detalhes de cada livro.
4. Usa a função 'livrosAntigos()' para filtrar os livros publicados antes de 2000.

#### 🌱Bônus:

Modifique 'module.exports' para exportar a classe e a função de uma maneira diferente da convencional, garantindo que a importação no 'app.js' continue funcionando sem erros.
