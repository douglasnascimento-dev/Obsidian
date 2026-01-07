---
Tipo: Atividade
Início: 2025-01-29
Final: 2025-02-01
Conclusão: 2025-02-01
Status: true
Disciplina:
  - JS & TS
---
## 🌳 Exercício Avançado: Sistema de Gerenciamento de Usuários

#### 🌱 Descrição

Crie um sistema para gerenciar usuários utilizando _Factory Functions_ com _Prototype_ e a estrutura de dados _Map_. O sistema deve permitir a criação, busca, listagem e remoção de usuários. Além disso, deve incluir um sistema de permissões, garantindo que apenas usuários administradores possam excluir outros usuários.

### 🌿 Requisitos

1. **Criação de Prototypes:**
    
    - Defina um prototype que contenha os métodos 'falar()', 'andar()', 'exibirInfo()'.
    - Cada método deve imprimir no console uma informação relevante sobre o usuário.
2. **Factory Function 'criaUsuario(nome, idade, tipo)'**
    
    - Deve retornar um objeto usuário baseado no prototype criado.
    - O 'tipo' do usuário pode ser 'admin' ou 'comum'.
3. **Gerenciamento com 'Map'**
    
    - Utilize um 'Map' para armazenar os usuários, onde a chave será um 'id' único gerado automaticamente.
    - Os valores devem ser os objetos representando os usuários.
4. **Funcionalidades obrigatórias:**
    
    - Criar um usuário e adicioná-lo ao 'Map'.
    - Buscar um usuário pelo 'id' e exibir suas informações.
    - Listar todos os usuários cadastrados.
    - Remover um usuário **apenas se o usuário solicitante for um administrador**.
5. **Regras e Restrições:**
    
    - A criação de usuários deve ser encapsulada dentro de uma função de gerenciamento.
    - Ao excluir um usuário, verificar se quem está executando a ação tem permissão ('tipo === 'admin'').
    - O 'id' de cada usuário deve ser gerado automaticamente e único.

### 🌿 Bônus Avançado:

- Implemente um método 'atualizarUsuario(id, novosDados)', que permita modificar os dados de um usuário específico.
- Ao listar os usuários, ordene-os por idade de forma decrescente.
- Utilize 'Object.freeze()' para garantir que os dados de um usuário não sejam alterados fora do sistema de gerenciamento.