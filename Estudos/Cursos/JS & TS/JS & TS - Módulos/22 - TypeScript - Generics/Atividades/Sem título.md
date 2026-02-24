Aqui está uma proposta de exercício de nível médio para testar a integração dos conceitos presentes nas suas anotações.

**Objetivo:** Criar uma função de filtragem e transformação de dados que exija a combinação de Generics, Constraints, Predicados de Tipo e Utility Types.

**Descrição do Exercício:**

Crie um sistema de processamento de entidades genéricas respeitando as seguintes regras de tipagem e arquitetura:

1. **A Função Principal:** Crie uma função chamada `filtrarETransformar` que deve aceitar três argumentos:
    
    - Uma lista (array) de objetos de um tipo genérico.
    - Uma chave específica que obrigatoriamente pertença a esse tipo genérico.
    - Uma função de _callback_ de validação.
        
2. **Constraints e Segurança de Tipagem:** - O segundo parâmetro (a chave) deve utilizar Generic Constraints para garantir que o desenvolvedor só possa passar o nome de uma propriedade que realmente exista nos objetos da lista. O Typescript deve acusar erro caso uma chave inexistente seja informada.
    
3. **Predicados de Tipo:**
    
    - A função de _callback_ (terceiro parâmetro) não deve retornar apenas um `boolean` comum. Ela deve obrigatoriamente ser construída como um Predicado de Tipo (`Type Predicate`), verificando se o valor da propriedade avaliada é estritamente do tipo `string`.
        
4. **Transformação de Retorno (Utility Types):**
    
    - A função principal deve iterar sobre a lista original e utilizar o _callback_ para testar o valor da chave informada em cada objeto.
        
    - O retorno de `filtrarETransformar` deve ser um novo array apenas com os objetos que passaram na validação do predicado.
        
    - **Regra de ouro do retorno:** Os objetos retornados nesse novo array não podem ter a tipagem original exata. Você deve utilizar uma combinação de _Utility Types_ para que o tipo retornado garanta que todas as propriedades do objeto se tornem **opcionais** e, simultaneamente, **apenas para leitura**.