---
Tipo: Atividade
Início: 2025-03-28
Final: 2025-03-28
Conclusão: 2025-03-28
Status: true
Disciplina:
  - JS & TS
---
## 🌳**Exercício - Consulta de CEP com Requisição Assíncrona**

Você foi contratado para desenvolver a funcionalidade de um sistema de busca de endereços baseado no CEP. O objetivo é que, ao digitar um CEP e clicar no botão de busca, as informações do endereço sejam carregadas automaticamente na tela, sem recarregar a página.

### 🌿 **Requisitos:**

1. Implemente uma função que faça uma requisição assíncrona utilizando 'XMLHttpRequest' dentro de uma _Promise_.
2. O método HTTP utilizado deve ser 'GET', pois os dados serão apenas consultados e não enviados ao servidor.
3. A URL da requisição deve ser construída dinamicamente com base no CEP digitado pelo usuário.
4. A resposta da requisição deve ser exibida na tela, mostrando o endereço correspondente ao CEP informado (rua, bairro, cidade e estado).
5. Caso a requisição falhe (exemplo: CEP inválido ou erro no servidor), uma mensagem apropriada deve ser exibida para o usuário.
6. O comportamento padrão do formulário deve ser interrompido para evitar o recarregamento da página.

#### 🌱 **Bônus:**

Modifique o código para que o endereço seja atualizado automaticamente conforme o usuário digita o CEP, sem a necessidade de clicar no botão.
