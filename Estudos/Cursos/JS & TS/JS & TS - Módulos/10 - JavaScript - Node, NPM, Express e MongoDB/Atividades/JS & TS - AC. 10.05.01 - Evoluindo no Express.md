---
Tipo: Atividade
Início: 2025-03-28
Final: 2025-03-28
Conclusão: 2025-03-29
Conteúdo: " JS & TS - Node, Npm, Express e MongoDB"
Status: true
Disciplina:
  - JS & TS
---
## 🌳Exercício: Manipulação de Rotas e Parâmetros no Express

Você foi contratado para desenvolver um sistema de gerenciamento de usuários para um marketplace. Para isso, você precisa criar um servidor Express que lide com diferentes tipos de rotas e parâmetros. O sistema deve incluir:

1. **Criação de um servidor** que rode na porta '4000' e utilize 'express.urlencoded({ extended: true })' para processar dados do corpo de requisições.
	
2. **Definição de rotas** para:
	
    - Receber um _parâmetro de URL_ chamado 'userId' e um _parâmetro opcional_ chamado 'section'.
    - Receber _query strings_ que indicam filtros de pesquisa para os usuários ('status' e 'categoria').
    - Enviar uma resposta com os valores recebidos.
	
3. **Organização do código** em arquivos separados, seguindo a estrutura:

    - 'server.js' para configurar e iniciar o servidor.
    - 'routes.js' para definir as rotas.
    - 'controllers/userController.js' para processar os dados recebidos.
	
4. **Criação de um middleware** que registre no console todas as requisições que passam pelo servidor, mostrando o método HTTP e a URL acessada.
    

### 🌿Bônus 

Modifique seu código para que, caso um usuário envie um 'POST' para a rota '/usuario', seja possível capturar os dados enviados no corpo da requisição ('name' e 'email') e exibir uma mensagem personalizada.