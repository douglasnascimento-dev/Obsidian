---
Tipo: Atividade
Início: 2025-03-31
Final: 2025-04-01
Conclusão: ""
Status: true
Disciplina:
  - JS & TS
---


## 🌳 Objetivo

Criar uma aplicação simples de gerenciamento de tarefas utilizando Node.js, Express, MongoDB e EJS. O sistema deve permitir que os usuários adicionem, visualizem e excluam tarefas.

### 🌿Requisitos

1. **Configuração do Projeto**
    - Instale os módulos necessários: 'express', 'mongoose', 'dotenv', 'express-session', 'connect-mongo', 'connect-flash', 'ejs'.
    - Configure o 'dotenv' para proteger a string de conexão do MongoDB.
2. **Conexão com o Banco de Dados**
    - Utilize o 'mongoose.connect(process.env.CONNECTIONSTRING)' para estabelecer a conexão.
3. **Configuração de Sessão**
    - Implemente 'express-session' e 'connect-mongo' para armazenar as sessões no banco de dados.
4. **Criação do Model**
    - Crie um schema 'TaskSchema' contendo os campos 'titulo' (obrigatório) e 'descricao'.
    - Exporte o model 'Task' para ser utilizado nos controllers.
5. **Controllers e Rotas**
    - Implemente um controlador para:
        - Renderizar uma página inicial com a lista de tarefas.
        - Criar uma nova tarefa e armazená-la no banco de dados.
        - Excluir uma tarefa existente.
    - Utilize 'req.flash()' para exibir mensagens temporárias ao usuário.
6. **Views com EJS**
    - Crie uma pasta 'views/' e dentro dela um arquivo 'index.ejs'.
    - Liste todas as tarefas armazenadas no banco.
    - Crie um formulário para adicionar novas tarefas.
    - Adicione um botão para excluir tarefas.
	
### 🌿 Desafio Extra

Adapte o sistema para incluir uma funcionalidade de edição de tarefas. Adicione um botão de "Editar" ao lado de cada tarefa, que ao ser clicado permita modificar o título e a descrição da tarefa existente.