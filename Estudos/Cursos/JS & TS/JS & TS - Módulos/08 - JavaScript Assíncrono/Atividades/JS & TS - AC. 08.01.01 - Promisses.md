---
Tipo: Atividade
Início: 2025-02-26
Final: 2025-02-26
Conclusão: 2025-02-26
Status: true
Disciplina:
  - JS & TS
---
## 🌳 **Atividade: Gerenciando Pedidos em um Restaurante com POO e 'Promises'**

Você foi contratado para desenvolver um sistema que gerencia os pedidos de um restaurante. Para tornar o código mais organizado e reutilizável, o sistema será baseado em **Programação Orientada a Objetos (POO)**.

### 🌿 **Regras do Sistema:**

1. **Crie uma classe 'Pedido'**:
    
    - Cada pedido tem um **nome do prato** e um **tempo de preparo aleatório** (entre 1 e 5 segundos).
    - O método 'preparar()' deve retornar uma **Promise**, que resolve quando o pedido estiver pronto ou rejeita caso o nome do pedido seja inválido.
2. **Crie uma classe 'Restaurante'**:
    
    - Deve ter um método 'realizarPedido()', que recebe um nome de prato e cria uma instância de 'Pedido'.
    - Esse método deve lidar com o retorno da Promise usando '.then()' e '.catch()'.
    - Outra versão desse método deve ser criada utilizando 'async/await'.
3. **Simule a realização de múltiplos pedidos**:
    
    - Faça pelo menos **três pedidos** e exiba no console o andamento da preparação.
    - Use um tratamento de erro para lidar com pedidos inválidos.

---

### 🌿 **Desafio Extra:**

1. Adicione uma classe 'Cliente', que pode fazer pedidos ao restaurante e receber as respostas.
2. Modifique a classe 'Pedido' para incluir um **10% de chance de falha aleatória**, simulando problemas na cozinha.
3. Faça com que os pedidos possam ser cancelados antes de serem entregues.