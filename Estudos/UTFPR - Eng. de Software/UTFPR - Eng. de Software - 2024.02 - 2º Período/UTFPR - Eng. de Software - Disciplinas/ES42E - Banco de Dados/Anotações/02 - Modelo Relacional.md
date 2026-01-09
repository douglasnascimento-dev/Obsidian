---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
---

![[Banco de Dados.png|banner]]
> [!banner-icon] 🌿Modelo Relacional

Foi proposto por E. F. "Ted" Codd em 1970. E amplamente utilizado em sistemas comercias a partir dos anos de 1980

## 🌳Chave Primária e Estrangeira

- Também chamada de **PK (Primary Key)**, a chave primária é aquela que é capaz de identificar exclusivamente cada linha da tabela, por padrão os SGBD's, as definem como NN (Not Null). **Só se existe uma PK**, podendo ser simples, com um único atributo, ou composta, quando mais de um atributo a compõe.
- Já as **FK (Foregein Key)**, são as chaves primárias de outras tabelas, que se encontram naquela tabela como estrangeira.

## 🌳Restrições de Integridade

### 🌿 Integridade de Domínio

Faz referência ao tipo de dado que pode ser usado para preencher um atributo. Podem ser divididos em 3 grandes grupos: 'Strings', 'Numéricos' e 'Tempo/Data'

### 🌿 Integridade de Vazio

Faz referência se um atributo pode ou não possuir o valor vazio. Esta presente na tabela na forma de NN (Not Null)

### 🌿 Integridade de Chave

Faz referência que o valor da PK (Primary Key) deve ser único

### 🌿Integridade Referencial

Faz referência que os valores das chaves estrangeiras das referênciadoras devem aparecer na PK da tabela referenciada.

### 🌿Integridade de Unicidade

Faz referência que o valor de um atributo deve ser único. Similar as PK's, mão não obtém esse poder de identificação

### 🌿Integridade de Entidade

Faz referência que nenhum valor de PK pode ser nulo. Essa restrição já é automática em muitos SGBD's

## 🌳Restrições Semânticas 

Além das restrições de Integridade, também há as restrições de semântica. Elas precisam ser desenvolvidas pelos programadores, através do back-end e/ou front-end. Não é implementada em banco de dados.

## 🌳Redundância de Dados

Ocorre quando os mesmos dados estão presentes em dois locais de forma desnecessária. EX: Ao realizar o preenchimento de Professor se é necessário preencher o campo Departamento na mão, sem ser uma FK. Isso pode levar á diversos erros como:

### 🌿Inconsistência de dados

É Quando versões diferentes e conflitantes dos mesmos dados aparecem em locais diferentes. EX: 

| Professor      | Departamento                         |
| -------------- | ------------------------------------ |
| Lucas da Silva | DACOM                                |
| Rodrigo Alves  | Departamento Acadêmica da Computação |
| Mariana Alves  | Dep. da Comp.                        |

### 🌿Anomalia de Dados 

É Quando nem todas as alterações nos dados redundantes são realizadas com sucesso. Podendo ser de Atualização, Inserção e/ou Exclusão. EX: Quando um aluno muda de curso, é atualizado na Tabela Aluno, mas não na tabela Curso

### 🌿Controle de Redundância

É possível minimizar e/ou acabar com esse tipo de erro utilizando-se de chaves estrangeiras e relacionamentos.

### 🌿Redundância Controlada

Costumam ser projetadas como parte do sistema para garantir maior velocidade de processamento e atender exigências de informações. O própio SGBD tem conhecimento da múltipla representação e garante a atualização dos dados

### 🌿Redundância Não Controlada

Podem ser projetadas como parte do sistema para garantir melhor desempenho e disponibilidade ou como consequência de uma mal modelagem. É o usuário o responsável pela atualização, por meio de triggers e/ou linguagens de programação

## 🌳Regras de Codd

Em 1985, E. F. Ted Codd publicou uma lista de 12 regras que definem um SGBDR. Ele queria evitar que muitos fornecedores comercializem seus produtos como relacionais, sem um padrão. Mesmo hoje, os fornecedores dominantes de SGBDR não total suporte a essas regras

## 🌳 Fases do Modelo Relacional

| Fases              | SGBD         | Descrição                     |              |
| ------------------ | ------------ | ----------------------------- | ------------ |
| Regras de Negócio  | Independente | Regras que são estabelecidas  | X            |
| Projeto Conceitual | Independente | Visão geral de Negócio        | Diagrama EER |
| Projeto Lógico     | Dependente   | Tradução do Modelo Conceitual | Diagrama EER |
| Projeto Físioc     | Dependente   | Execuções DDL                 | Intr         |
