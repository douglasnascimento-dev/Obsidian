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
> [!banner-icon] 🌿Normalização
## 🌳Anomalias

### 🌿Anomalia de Inserção

É Quando dados não podem ser inseridos a não ser que outros dados também sejam inseridos. EX: Ao inserir um novo projeto, se tem a necessidade de inserir o funcionário, que trabalhará no projeto

### 🌿Anomalia de Atualização

É Quando ao modificar o valor de um determinado campo de um atributo gera a necessidade de atualizar os mesmos atributos mas em outros registros. EX: Ao atualizar o valor base para um cargo, será necessário atualizar em todos os registros desse valor

### 🌿Anomalia de Exclusão

É Quando dados não podem ser excluídos, a não ser que outros dados também sejam excluídos. EX: Ao excluir um projeto, fará com que todos os funcionários designados a ele também sejam excluídos.


## 🌳 Determinação 

- **Determinação**: É Quando se é possível afirmar que 'A determina B', o que indica que só ao conhecer A é possível verificar B. EX: 
	- **Cod_produto** determina **Valor**
	- **RA** determina **Nome**

Nesse caso, RA será o atributo determinante e o Nome será o atributo dependente/determinado

## 🌳 Dependência Funcional

Se diz que o B é funcionalmente depende do A se cada valor da coluna A determina um e somente um valor de B. 
- **RA** determina funcionalmente **Nome** ↔ **Nome** é funcionalmente dependente de **RA** 

### 🌿 Dependência Parcial

É Quando o atributo é dependente apenas de parte de uma chave primária composta.

| **CursoID** (pk) | **RA** (pk) | **CursoNome**      | Situação |
| :--------------- | :---------- | :----------------- | :------- |
| 201              | a2648801    | Eng. de Software   | Cursando |
| 202              | a2648756    | Eng. da Computação | Cursando |
| 201              | a2648745    | Eng. de Software   | Aprovado |

No caso a cima, o atributo *CursoNome* depende funcionalmente do apenas de parte da pk, no caso o atributo *RA*, o que se caracteriza uma dependência parcial. Para resolver a situação é necessário a decomposição da tabela, gerando duas tabelas, como exemplificado abaixo:

| Curso (pk) | RA (pk)  | Situação |
| ---------- | -------- | -------- |
| 201        | a2648801 | Cursando |
| 202        | a2648756 | Cursando |
| 201        | a2648745 | Aprovado |

| CursoID (pk) (fk) | NomeCurso          |
| :---------------- | :----------------- |
| 201               | Eng. de Software   |
| 202               | Eng. da Computação |

### 🌿Dependência Transitiva

É Quando o atributo é dependente não de uma chave primária, mas sim de outro atributo normal.

| **ProfessorID (pk)** | **DepartamentoID** | **DepartamentoNome**                                  | **Salario** |
| -------------------- | ------------------ | ----------------------------------------------------- | ----------- |
| 728.657-96           | 002                | Departamento Acadêmico da Computação                  | 19.750      |
| 657.149-12           | 002                | Departamento Acadêmico da Computação                  | 21.290      |
| 359.156-54           | 003                | Departamento Acadêmico das Ciências Humanas e Sociais | 17.450      |

No caso a cima, o atributo *DepartamentoNome* depende funcionalmente do atributo *DepartamentoID*, que não é uma pk, dessa forma, essa relação se caracteriza como uma dependência transitiva. Para resolver essa situação é necessário a decomposição da tabela, gerando duas tabelas, como exemplificado abaixo:

| **ProfessorID (pk)** | **Salario** | **DepartamentoID (fk)** |
| -------------------- | ----------- | ----------------------- |
| 728.657-96           | 19.750      | 002                     |
| 657.149-12           | 21.290      | 002                     |
| 359.156-54           | 17.450      | 003                     |

| **DepartamentoID (pk)** | **DepartamentoNome**                                  |
| ----------------------- | ----------------------------------------------------- |
| 002                     | Departamento Acadêmico da Computação                  |
| 002                     | Departamento Acadêmico da Computação                  |
| 003                     | Departamento Acadêmico das Ciências Humanas e Sociais |


## 🌳Processo de Normalização

Se baseia no conceito de Forma normal, que são as regras a serem consideradas por uma tabela para que possa ser considerada uma tabela bem projetada. A Quantidade de FN são infinitas, mas comumente se utilizam 3, como descrito abaixo:

### 🌿1FN

Uma relação estará na primeira forma normal, se e somente se, todos os seus atributos forem *valores atômicos e monovalorados* (simples e indivisíveis)

- Passos: 

01. Eliminar grupos de repetição, eventualmente existentes, como elementos multivalorados; e
02. Identificar as chaves primárias das tabelas.

- Exemplo:

| Proj_Num | Proj_Nome |          |           | Funcionário |        |       |
| :------: | :-------: | :------: | :-------: | :---------: | :----: | :---: |
|          |           | Func_Num | Func_Nome |    Cargo    | Tarifa | Horas |

Como descrito no passo 01 e 02, se é necessário eliminar os grupos de repetição, para isso se deve criar uma segunda tabela e definir as PK's de cada tabela

| Proj_Num (PK) | Proj_Nome |
| ------------- | --------- |
|               |           |

| Proj_Num (PK, FK) | Func_Num (PK) | Func_Nome | Cargo | Tarifa | Horas |
| :---------------: | :-----------: | :-------: | :---: | :----: | :---: |
|                   |               |           |       |        |       |

### 🌿2FN

Uma relação estará na segunda forma normal se, e somente se, estivar passado pela 1FN e não possuir *dependência funcional parcial*

- Passos:

01. Toda tabela que possuir PK simples, já se enquadrará na 2FN, pois a dependência parcial é caracterizada pela existência de uma PK composta;
02. Caso a tabela com PK composta, tiver uma dependência parcial, se deve criar uma nova tabela, que terá como PK, parte da PK composta da tabela original, que estará na tabela como PK e FK; e 
03. Mover todos os atributos dependentes da tabela original para a nova tabela criada.

- Exemplo: 

| Proj_Num (PK) | Proj_Nome |
| ------------- | --------- |
|               |           |

| Proj_Num (PK, FK) | Func_Num (PK) | Horas |
| :---------------: | :-----------: | :---: |
|                   |               |       |

| Func_Num (PK, FK) | Func_Nome | Cargo | Tarifa |
| :---------------: | :-------: | :---: | :----: |
|                   |           |       |        |

### 🌿3FN

Uma relação estará na segunda forma normal se, e somente se, estivar passado pela 1FN e não possuir *dependência funcional transitiva*

- Passos: 

01. Toda tabela que possuir menos de 2 atributos não chaves, já se enquadrará na 3FN, pois a dependência transitiva é caracterizada pela existência de dependência entre dois ou mais elementos não chaves;
02. Caso a tabela com mais de 2 atributos não chaves, tiver uma dependência transitiva, se deve criar uma nova tabela, que terá como PK, o atributo determinante da tabela original, que permanecerá na tabela original; e
03. Mover todos os atributos dependentes da tabela original para a nova tabela criada.

| Proj_Num (PK) | Proj_Nome |     |
| ------------- | --------- | --- |
|               |           |     |

| Proj_Num (PK, FK) | Func_Num (PK) | Horas |
| :---------------: | :-----------: | :---: |
|                   |               |       |

| Proj_Num (PK, FK) | Func_Num (PK) | Horas |
| :---------------: | :-----------: | :---: |
|                   |               |       |

| Func_Num (PK, FK) | Func_Nome | Cargo (FK) |
| :---------------: | :-------: | :--------: |
|                   |           |            |

| Cargo (PK) | Tarifa |
| ---------- | ------ |
|            |        |
