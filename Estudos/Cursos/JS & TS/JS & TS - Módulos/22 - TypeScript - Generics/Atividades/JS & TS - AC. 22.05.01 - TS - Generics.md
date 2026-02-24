---
Tipo: Atividade
Início: 2026-01-09
Final: 2026-01-09
Conclusão: 2026-01-09
Status: true
Disciplina:
  - JS & TS - Módulo 17
---

## 🍏 Desafio: Sistema de Mesclagem e Validação de Dados

**Objetivo:** Desenvolver uma função utilitária de atualização e validação de dados de um sistema, aplicando simultaneamente os conceitos de Generics, Constraints, Predicados, Intersecções e Tipos Utilitários vistos nas anotações.

### 🌿 Requisitos do Exercício

1. **Tipagem Base e Utilitários:**
    - Defina um tipo base chamado `UsuarioProtocol` com as seguintes propriedades: `id` (número), `nome` (string), `email` (string), `nivelAcesso` (string) e `tags` (array de strings).
    - Utilizando os Tipos Utilitários (`Utility Types`), crie um novo tipo chamado `UsuarioUpdate` derivado de `UsuarioProtocol` onde: a propriedade `id` seja removida da tipagem e todas as outras propriedades restantes se tornem estritamente opcionais.
        
2. **Predicado (Type Predicate):**
    - Crie uma função de validação (Type Predicate) chamada `isStringArray` que receba um valor `unknown` e garanta, através do seu retorno, que o valor avaliado é estritamente um array de strings (`string[]`).
        
3. **Função Genérica Principal:**
    - Crie uma função chamada `atualizarRegistro`.
    - A função deve utilizar **Generics** e **Constraints** (`extends keyof`) para receber três argumentos de forma segura:
        1. Um objeto original.
        2. A chave (`key`) específica que será atualizada.
        3. O novo valor que será atribuído a essa chave.
    - Dentro da função, adicione uma lógica condicional: se a chave que está sendo atualizada for correspondente a um array de strings (como a propriedade `tags`), você deve obrigatoriamente utilizar o predicado `isStringArray` para validar o novo valor antes de efetuar a atualização.
    - O tipo de retorno desta função deve ser uma **Intersecção** (`&`) entre o objeto original modificado e um tipo utilitário `Record`, o qual deve adicionar um metadado de log obrigatório (exemplo: uma chave `ultimaModificacao` do tipo `string`).

**Regras estritas:**
- O uso de `any` ou `as type` (Type Assertion) é estritamente proibido.
- A inferência de tipos dinâmica (`O[K]`) deve ser mantida ao repassar os valores.