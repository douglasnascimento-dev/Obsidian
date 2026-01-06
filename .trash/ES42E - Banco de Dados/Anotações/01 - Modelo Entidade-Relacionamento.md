---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
---

![[Banco de Dados.png|banner]]
> [!banner-icon] 🌿M.E.R.
## 🌳Regras de Negócio 

São utilizadas para definir entidades, atributos, relacionamentos e restrições. **É uma descrição breve, precisa e sem ambiguidades de uma política, procedimento ou princípio de uma determinada organização**. Exemplo:
- Um professor está vinculado a somente um departamento  
- Um departamento possui vários professores vinculados  
- Um aluno pertence somente a um curso  
- Um curso possui vários alunos  

## 🌳Componentes de um BD

- **Entidades**: objetos da realidade a ser modelada, sobre os quais deseja-se manter dados no banco de dados;
- **Atributos**: propriedades descritivas das entidades;
- **Relacionamentos**: associações entre entidades;
- **Restrições**: conjunto de regras que garantem a consistência dos dados;

Normalmente, o nome de entidades são representadas utilizando letras maiúsculas

## 🌳Tipos de Atributos

### 🌿Simples e Composto:

- **Simples**: Não pode ser subdividido
- **Composto**: Pode ser subdividido de modo a obter mais atributos. EX: Endereço
No 'Worckbench', os atributos compostos, são representados em nome **singular** acompanhados por um asterisco.

### 🌿Monovalorados e Multivalorados

- **Monovalorados**: Possui apenas um valor por atributo
- **Multivalorados:**: Possui diversos valores por atributo. EX: Múltiplos endereços ou telefones
No 'Worckbench', os atributos multivalorados, são representados em nome no **plural** acompanhados por um asterisco.

### 🌿Derivados

Seu valor é calculado a partir de outro(s) atributo(s), não sendo necessário defini-lo como propriedade da entidade. EX: a idade através da data de nascimento.

## 🌳Relacionamentos

É a associação entre atributos. É normalmente, escrito na voz passiva/ativa. EX: um professor **chefia** um departamento ou um aluno **frequenta** uma turma.

## 🌳Tipos de Cardinalidade de Mapeamento

O tipo de cardinalidade de mapeamento é defina pelas duas máximas da reação

- **0 - 1**: Um, inclusive nenhum
- **0 - N**: Muitos, inclusive nenhum
- **1 - 1**: Um, e somente um
- **1 - N**: Muitos, ao menos um

### 🌿Tipos de Participação no Relacionamento

- **Opcional**: Não exige que uma ocorrência da entidade A esteja associada à uma ocorrência da entidade B em um determinado relacionamento. Indicada pela cardinalidade mínima “0” 
- **Obrigatória**: Exige que uma ocorrência da entidade A esteja associada à uma ocorrência da entidade B em um determinado relacionamento. Indicada pela cardinalidade mínima “1” 

## 🌳Grau de Relacionamento

- **Unário**: Ocorre quando uma associação é mantida em uma única entidade. Também conhecido como relacionamento recursivo ou auto-relacionamento. 
- **Binário**: Se dá quando duas entidades estão associadas
- **Ternário**: Quando três entidades estão associadas

## 🌳Entidades Associativas

Também conhecida como entidade composta ou ponte. É utilizada para implementar um relacionamento N : N  entre duas ou mais entidades. Compõe-se das chaves primárias de cada entidade participante do relacionamento . Pode conter atributos adicionais que não executem nenhum papel no processo do relacionamento  

## 🌳Força de um Relacionamento

Baseia-se na forma como é definida a chave primária da entidade referenciadora.

- **Relacionamento Fraco**: Ocorre quando a chave primária da entidade referenciadora não é composta pela chave primária da entidade referenciada.
- **Relacionamento Forte**: Ocorre quando a chave primária da entidade referenciadora é  composta pela chave primária da entidade referenciada

## 🌳Atributo de um Relacionamento

Relacionamentos também podem possuir atributos. Para um determinado médico e um determinado paciente, podem haver diversas consultas. Neste caso, é necessário algo que distinga uma consulta entre um médico e seu paciente das demais consultas entre o mesmo médico e o mesmo paciente, como a data e a hora da consulta.  


