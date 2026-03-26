---
cssclasses:
  - banner
  - banner-fade
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
---

![[Banco de Dados.png|banner]]
> [!banner-icon] 🌿SQL

### 🌿Divisão do SQL

- Linguagem de Definição de Dados (DDL)  
		DDL da SQL fornece comandos para definir esquemas de relação, excluir relações e modificar esquemas  
- Linguagem de Manipulação de Dados (DML)  
		DML da SQL oferece a capacidade de consultar informações do banco de dados e inserir, excluir e modificar tuplas
- Integridade  
		DDL da SQL permite especificar restrições de integridade às quais os dados precisam satisfazer  
- Definição de visão (view)  
		DDL da SQL inclui comandos para definir visões  
- Controle de Transação  
		DDL da SQL inclui comandos para especificar o início e o fim das transações  
- SQL embutida e SQL dinâmica  
		Definem como instruções SQL podem ser incorporadas dentro de linguagens de programação  
- Autorização  
		DDL da SQL inclui comandos para especificar direitos de acesso para relações e views

## 🌳Comandos DDL do SQL

#### 🌱**CREATE DATABASE** ou **CREATE SCHEMA**

Cria um banco de dados

```sql
CREATE DATABASE bd1 
CREATE SCHEMA bd1
```

#### 🌱**DROP DATABASE** 

Exclui um banco de dados

```sql
DROP DATABASE bd1
```

#### 🌱Restrições de Integridade

- São os conjuntos de regras que garantem a consistência dos dados do Banco de Dados
	- **Domínio**: Se refere ao Tipo de Dado do Atributo
	- **Vazio**: Se refere se o Atributo pode ser Vazio
	- **Chave:** Se refere se o Atributo é a pK da Tabela
	- **Unicidade**: Se refere se o Atributo deve ter um valor único
	- **Validade de Dados**: Se refere a checagem de dados
- Restrições de Integridade Referencial:
	- **Integridade Referencial**: Se refere a fK

#### 🌱**CREATE TABLE** 

Cria uma tabela em um banco de dados, pode ser acompanhada da criação de Atributos

```sql
CREATE TABLE departamento {
	dep_codigo INT NOT NULL,
	dep_nome VARCHAR(45) NOT NULL,
	dep_ramal INT NOT NULL UNIQUE CHECK(deo_ramal BETWEEN 1111 AND 9999), 
	PRIMARY KEY (dep_codigo)
	CONSTRAINT fk_curso_departamento
		FOREIGN KEY (dep_codigo)
		REFERENCES bd1.departamento (dep_codigo)
}
```


#### 🌱**DROP TABLE**

Exclui uma tabela em um banco de dados

```sql
DROP TABLE departamento
```

#### 🌱**ALTER TABLE** 

O **ALTER TABLE** permite executar diversos comandos com foco em alterar o banco de dados, como adicionar, modicar ou excluir dados de um banco de dados

##### 🌵 **ADD**

Adiciona um Atributo em uma Tabela. Também é possível adicionar múltipos atributos

```sql
ALTER TABLE curso
	ADD cur_email VARCHAR(50)

ALTER TABLE curso
	ADD (cur_coodenador VARCHAR(50),
		cur_vicecoodernador VARCHAR(50));
```

##### 🌵 **MODIFY**

Permite modificar um Atributo da Tabela. Também é possível modificar múltiplos atributos, assim como é possível adicionar restrição de vazio, como no terceiro exemplo 


```sql
ALTER TABLE curso
	MODIFY cur_email CHAR(50);

ALTER TABLE curso
	MODIFY cur_emailVerificacao CHAR(50),
	MODIFY cur_telefone INT NOT NULL;
```


##### 🌵 **DROP**

Permite excluir um Atributo da Tabela. Também é possível excluir múltiplos atributos

```sql
ALTER TABLE curso
	DROP cur_email;

ALTER TABLE curso
	DROP cur_email,
	DROP cur_fax;
```

##### 🌵 **ADD CONSTRAINT**

Permite adicionar restrição UNIQUE - *Valor único* - a um Atributo. 

```sql
ALTER TABLE curso
	-- ADD CONSTRAINT nome_restricao UNIQUE(atributo)
	ADD CONSTRAINT uq_cur_fax UNIQUE(dep_fax)
	
```

##### 🌵**DROP CONSTRAINT**

Permite excluir a restrição de UNIQUE - *Valor único* - a um Atributo. **Observe que deve ser utilizado o nome da restrição** e não o nome do atributo que possui a restrição

```sql 
ALTER TABLE curso
	-- DROP CONSTRAINT nome_restricao
	DROP CONSTRAINT uq_dep_fax
```

##### 🌵**ADD PRIMARY KEY**

Permite adicionar uma pK, como um ou mais Atributos em uma Tabela

```sql
ALTER TABLE curso
	ADD PRIMARY KEY (cur_codigo)

ALTER TABLE departamento
	ADD PRIMARY KEY (dep_codigo, dep_nome)
```

##### 🌵**DROP PRIMARY KEY**

Permite remover a pK da Tabela. Ela excluirá a pK como uma só, não apenas um atributo

```sql
ALTER TABLE curso
	DROP PRIMARY KEY 
```

##### 🌵**ADD FOREGEIN KEY**

Permite adicionar uma fK a uma Tabela

```sql
ALTER TABLE curso
	-- ADD CONSTRAINT fk_to_td
	-- FOREGEIN KEY (atributo)
	-- REFERENCES tabela_referenciada (atributo_atributo_referenciada)
	ADD CONSTRAINT fk_curso_departamento
	FOREGEIN KEY (dep_codigo)
	REFERENCES departamento (dep_codigo)
```

##### 🌵**DROP FOREGEIN KEY**

Permite remover uma fK a uma Tablea

```sql
ALTER TABLE curso
	DROP FOREGEIN KEY fk_aluno_cidade
```

#### 🌱**INSERT**

O **INSERT** permite realizar a inserção de dados em uma tabela do Banco de Dados

```sql
INSERT INTO nome_da_tabela (atributo1, atributo2, atributo3)
	VALUES (valor, valor, valor)
```

A Declaração dos atributos **não é obrigatório**, mas caso ela não acontece, a declaração dos valores deve ocorrer na mesma ordem em que os atributos foram declarados na tabela. A Inserção de Valores devem seguir as regras já estabelecidas no bd

🌵Com Especificação

Nesse exemplo, os atributos e valores são especificados

```sql
INSERT INTO DEPARTAMENTO (DEP_CODIGO, DEP_NOME)
	VALUES (1, 'Departamento Acadêmica da Computação')
```

🌵Sem Especificação

Nesse exemplo, os atributos e valores não são especificados

```sql
INSERT INTO DEPARTAMENTO
	VALUES (1, 'Departamento Acadêmico da Computação')
```

#### 🌱**UPDATE**

O Comando **UPDATE** permite modificar valores já existentes em Atributos em uma Tabela

```sql
UPDATE nome_da_tabela
SET atributo = expressão 
	WHERE condição
```

Também é possível modificar um ou mais atributos. A Declaração do **WHERE** não é obrigatória

🌵Exemplo:

```sql
UPDATE aluno
SET alu_valor_bolsa = alu_valor_bolsa * 1.25
	WHERE alu_valor_bolsa < 1500
```

#### 🌱**DELETE**

O Comando **DELETE** permite excluir valores já preenchidos em Atributos em uma Tabela.

```sql
DELETE FROM nome_da_coluna
	WHERE condição
```

A Declaração do condicional **WHERE** não é obrigatória no delete.

🌵Exemplo:

```sql
DELETE FROM alunos
	WHERE cid_codigo != 1;
```

#### 🌱**SELECT**

O Comando **SELECT** permite realizar um consulta em SQL

```sql
SELECT atributo1, atributo2, atributo3
	FROM tabela, tabela2
	WHERE condição
```

No **SELECT** - *lista de atributos desejados no resultado* - não é obrigatório a declaração de mais de um elemento, assim como no **FROM** - *lista das tabelas a serem acessadas*. A Declaração do condicional **WHERE** não é obrigatória

🌵Exemplo:

```sql
SELECT pro_nome, pro_sobrenome, pro_salario
	FROM professor;
```

##### 🌵Selecionando todos os elementos de uma Tabela:

Para selecionar todos os atributos de uma tabela, é possível utilizar o asterisco 

```sql
SELECT *
	FROM professor;
```

##### 🌵**DISTINCT**

Para eliminar linhas repetidas do resultado, pode-se utilizar a cláusula **DISTINCT**

```sql
SELECT DISTINCT pro_nome, pro_sobrenome, pro_codigo
	FROM professor;
```
##### 🌱**SELECT** com múltiplas tabelas

Ao envolver duas ou mais tabelas, diz-se que está sendo realizada uma junção de tabelas. Para evitar que aconteça um plano cartesiano, é necessário comparar a fK da tabela 1 e a fK da tabela 2.

```sql
SELECT pro_pnome, pro_snome, dep_sigla
FROM professor, departamento
WHERE professor.dep_codigo = departamento.dep_codigo
```

Observe que a cada tabela adicionada depois da primeira, deve ser obrigatoriamente adicionada uma condição para se evitar que seja criado um plano cartesiano. A comparação sempre deve ocorrer entre as fK's que possuem relação

##### 🌵 **SELECT** com renomeação

Ao selecionar um atributo, é possível renomear o nome que será exibido o nome da coluna.

```sql
SELECT 
	pro_nome AS Nome,
	pro_sobrenome AS 'Sobrenome do Professor'
	pro_tipo_contrato 'Tipo de Contrato'
	pro_salario * 1.25 AS Salário
FROM 
	professor AS p;
```

Observe que em caso de renomeações com mais de uma palavra, deve ser utilizado o 'underscore'  ( _ ), ou as aspas simples. Também observe que a utilização da cláusula **AS** é opcional.

#### 🌱Operações com **WHERE**

##### 🌵 **WHERE LIKE**

O Operado **LIKE** permite encontrar padrões em atributos de strings. E também permite a utilização de dois caracteres especiais

 - **Porcentagem** | % : Realiza a substituição de zero, um ou mais caracteres, seguinte ou precedentes, de uma string
- **Underline** | _ : Realiza a substituição de um único caractere

```sql
WHERE expressão [NOT] LIKE padrão
```

🌵Exemplos

- Selecionar as disciplinas que iniciam com 'B'

```sql
WHERE 
	dis_nome LIKE 'B%'
```

- Selecionar as disciplinas que terminar com 'ção'

```sql
WHERE 
	dis_nome LIKE '%ção'
```

- Selecionar as disciplinas que possuem 'soft'

```sql
WHERE 
	dis_nome LIKE '%soft%'
```

- Selecionar as disciplinas que não possuem 'soft'

```sql
WHERE 
	dis_nome NOT LIKE '%soft%'
```

- Selecionar os salários que tenham '0' no segundo e no terceiro dígito, respectivamente

```sql
WHERE 
	pro_salario NOT LIKE '_00%'
```

##### 🌵**WHERE BETWEEN**

O Operador **BETWEEN** permite comparar uma expressão com intervalos de valores

```sql
WHERE expressão [NOT] BETWEEN valor AND valor
```

##### 🌵**WHERE NULL**

O Operador **IS NULL** permite definir se um atributo é vazio ou não

```sql
WHERE atributo IS [NOT] NULL 
```

##### 🌵**WHERE IN**

O Operador **IN** permite verificar se o valor de um atributo é o mesmo que um valor de uma lista, ou seja se ele é membro daquele conjunto

```sql
WHERE atributo [NOT] IN (valor01, valor2, valor3)
```

#### 🌱**ORDER BY**

O Operador **ORDER BY** permite, quando necessário, ordenar o **SELECT** através de um ou mais atributos. Quando o tipo de ordenação for omitido, a ordem padrão será ascendente
- **ASC**: Ordena de forma ascendente
- **DESC**: Ordena de forma descendente

```sql
ORDER BY atributo01 [ASC | DESC], atributo02 [ASC | DESC]
```

Observe que é possível ordenar por mais de um atributo, de forma que primeiramente será ordenada pelo atributo01 e então ordenará os grupos formados em seu interior pela segunda clausula.

#### 🌱Funções Agregadas 

Retornam resumos matemáticos (contagem, mínimos,  
máximos, somas e médias) sobre um conjunto de valores  
de um determinado atributo

- **COUNT**: Devolve o número de linhas  
- **MAX**: Devolve o maior valor da coluna  
- **MIN**: Devolve o menor valor da coluna  
- **SUM**: Devolve a soma de todos os valores da coluna  
- **AVG**: Devolve a média de todos os valores da coluna


##### 🌵**COUNT**

- **COUNT** ( \* ) 
	- Devolve o número de linhas totais de um **SELECT**
- **COUNT** (atributo)
	- Devolve o número de ocorrências do atributo na coluna, onde for diferente de **NULL**
- **COUNT** (**DISTINCT** atributo)
	- Devolve o número de ocorrências do atributo na coluna, sem repetição

```sql
SELECT COUNT(*)
SELECT COUNT(atributo)
SELECT COUNT(DISTINCT atributo)
```

##### 🌵**MIN** 

Devolve o menor valor de uma determinada coluna

```sql
SELECT MIN(atributo)
```

##### 🌵**MAX**

Devolve o maior valor de uma determinada coluna

```sql
SELECT MAX(atributo)
```

##### 🌵**SUM**

Devolve a soma de uma determinada coluna

```sql
SELECT SUM(atributo)
```

##### 🌵**AVG**

Devolve a média de uma determinada coluna

```sql
SELECT AVG(atributo)
```


#### 🌱**HAVING** 

Permite indicar uma condição que se aplica apenas a grupos específicos

```sql
HAVING AVG(atributo) > 100
```

- Exemplo

Nesse caso, o **SELECT** só se aplicará para professores que possuem o salário maior que R$ 70.000

```sql
HAVING AVG(pro_salario) > 70000
```

#### 🌱Subconsultas Aninhadas

- Características das subconsultas  
	- É uma consulta no interior de outra consulta  
	- A primeira consulta é conhecida como consulta externa  
	- A consulta no interior é conhecida como consulta interna  
	- A consulta interna é executada primeiro  
	- A saída de uma consulta interna é utilizada como entrada da  
consulta externa  

- Exemplo:
	-  Qual é o nome do professor com o menor salário? Solução manual em 2 passos
	
1. Qual é o valor do menor salário?
```sql
SELECT 
	MIN(pro_salario) 'Menor Sálario'
FROM
	professor
-- Saída: 55000
```

2. Qual é o nome do professor que possui esse salário?
```sql
SELECT 
	pro_nome Nome, pro_unome Sobrenome
FROM 
	professor
WHERE 
	pro_salario = 55000
```

- Mas é o possível unir essa duas consultas em uma única, utilizando subconsultas aninhadas

```sql
SELECT 
	pro_nome Nome, pro_unome Sobrenome
FROM 
	professor
WHERE 
	pro_salario = (SELECT MIN(pro_salario) '
				FROM professor);
```

Além de executar subconsultas no **WHERE**, também é possível realizar subconsultas no **SELECT**

- Exemplo:
	- Encontre e mostre os nomes e os salários de todos os  
professores, cujo salário esteja acima da média salarial dos  
professores, mostrando, também, a média salarial

```sql
SELECT pro_nome, pro_unome, pro_salario, (SELECT AVG(pro_salario) AS 'Média Salarial')
FROM professor
WHERE pro_salario = (SELECT AVG(pro_salario) FROM professor)
ORDER BY pro_salario
```

Além do **WHERE** e do **SELECT**, também é possível executar subconsultas aninhadas na clausula **FROM**

- Exemplo:
	-  Encontro e mostre os nomes dos professores sem telefone cadastrado

```sql
SELECT pro_nome Nome, pro_unome Sobrenome
FROM (SELECT *
	FROM professor
	WHERE pro_fone_nro IS NULL) AS professor_fones
```

SELECT 
##### 🌵Operadores **ALL** e **ANY** 

Esses operadores permitem consultar a comparação de um conjunto de valores
- **ALL** - Se a expressão é verdadeira fronte a todo conjunto apresentado
- **ANY** - Se a expressão é verdadeira fonte a ao menos um elemento do conjunto apresentado. Pode ser substituido pelo **SOME**

- Exemplos: 
	- Encontre um professor cujo salário é maior que todos os professores do DACOM
	
```sql
	SELECT pro_pnome, pro_unome, pro_salario
	FROM professor
	WHERE pro_salario > ALL ( SELECT pro_salario
						   FROM departamento d, professor p
						   WHERE p.dep_codigo = d.dep_codigo AND dep_sigal = 'DACOM')
```

- Exemplos:
	-   Encontre um professor cujo salário é maior que ao menos um professor do DACOM

```SQL
	SELECT pro_pnome, pro_unome, pro_salario
	FROM professor
	WHERE pro_salario > ALL ( SELECT pro_salario
						   FROM departamento d, professor p
						   WHERE p.dep_codigo = d.dep_codigo AND dep_sigal = 'DACOM')
```

##### 🌵 **EXISTS**

O Operador permite testa se existe, ou não, alguma tupla no resultado de uma subconsulta

```sql
SELECT dep_sigla
FROM departamento d
WHERE NOT EXISTS (SELECT *
				FROM professor p
				WHERE p.dep_codigo = d.dep_codigo)
```

##### 🌵 **CREAT TABLE** e **SELECT**

O SQL permite criar uma nova tabela com base em linha e colunas selecionadas de uma ou mais tabelas

```sql
CREATE TABLE nova_tabela
	AS ( SELECT atributo01
		FROM tabela_existente
		WHERE p > p
);
```

- Exemplo: Copiando todo o conteúdo de uma tabela
```sql
CREATE TABLE turma
	AS ( SELECT *
		FROM turma)
```

- Exemplo: Copiando parte do conteúdo de múltiplas tabelas
```sql
CREATE TABLE turma2024
	AS (SELECT t.turma_nome AS NOME,
			   d.disciplina_nome
			   p.professor_nome
		FROM turma t, disciplina d, professor p, 
		WHERE t.ano = 2024)
```
##### 🌵 **INSERT** e **SELECT**

O SQL permite adicionar linhas a uma tabela, utilizando outra tabela como fonte de dados

```sql
INSERT INTO nome_da_tabela
	(SELECT atributo01
	 FROM tabela_existente
	 WHERE p > p)
```

- Exemplo: Inserindo dados de 3 tabelas em uma nova tabela
```sql
INSERT INTO turma2025
	(SELECT  t.turma_nome,
			d.disciplina_nome,
			p.professor_nome
	FROM turma t, disciplina d, professor p
	WHERE t.ano = 2025)
```

Os nomes das colunas, bem como a quantidade de colunas não  
precisam ser iguais aos das tabelas das quais os dados serão  
selecionados. A listagem das colunas no **INSERT** é opcional, desde que os  valores devolvidos pelo **SELECT** estejam na mesma ordem em que os atributos estão listados na tabela. Características dos dados (domínio) devolvidos pelo **SELECT** devem coincidir com o domínio das colunas da tabela.
##### 🌵 **UPDATE** e **SELECT**

O SQL permite modificar/alterar valores de tabelas, utilizando o **SELECT**

```sql
UPDATE nome_da_tabela
	(SELECT CONDIÇÃO(atributo01)
	 FROM tabela_existente);
```

- Exemplo: Modificar o salário dos professores, cujo o nome termine com 'z', de forma que a seja atribuído o menor salário entre os professores

```sql
UPDATE professores
SET salario = ( SELECT MIN(salario) 
			FROM professores)
WHERE pro_nome LIKE '%z'
```
##### 🌵 **DELETE** e **SELECT**

O SQL também permite excluir valores com base em condições de subconsultas

```sql
UPDATE nome_da_tabela
WHERE ( SELECT atributo
		FROM tabela
		WHERE x = y)
```

- Exemplo: Excluir todos os professores aos quais nenhuma turma tenha sido atribuída

```sql
DELETE FROM professor
WHERE NOT EXISTS (SELECT * 
				FROM turmas
				WHERE turmas.pro_siape = professor.pro_siape)
```

#### 🌱Junção Relacional

É uma operação que recupera e funde linhas de duas ou mais  
tabelas com base no tipo de junção empregada (interna ou  
externa) e na condição definida pela junção. Basicamente, substitui a necessidade do **WHERE** para evitar planos cartesianos

##### 🌵**INNER JOIN** - Interno

Retorna as linhas que atenderem a determinados critérios estabelecidos. Possui 4 formas de acontecer, mas que retornam o mesmo resultado

- **JOIN** - Manual, estilo 'antigo'

```sql
SELECT *  
FROM T1, T2  
WHERE T1.C1 = T2.C1
```

Retorna apenas as linhas que atendam à condição de junção  
na cláusula **WHERE**

- **NATURAL JOIN**

```SQL
SELECT *  
FROM T1 natural JOIN T2
```

Retorna apenas as linhas com valores coincidentes nos atributos comuns (que devem ter mesmo nome e tipo)

- **JOIN USING**

```SQL
SELECT *  
FROM T1 JOIN T2  
USING (C1)
```

Retorna apenas as linhas com Valores coincidentes no  
atributo indicado na cláusula **USING** (o atributo deve ter o mesmo nome nas duas tabelas)

- **JOIN ON**

```SQL
SELECT *  
FROM T1 JOIN T2  
ON T1.C1 = T2.C1
```

Retorna apenas as linhas que atendam à condição de junção  
na cláusula **ON**

##### 🌵**OUTER JOIN** - Externo

- **LEFT JOIN**

```SQL
SELECT *  
FROM T1 LEFT OUTER JOIN T2  
ON T1.C1 = T2.C1
```

Retorna todas as linhas da tabela a esquerda (T1),  mesmo não havendo linhas com valores coincidentes na tabela da direita (T2)

- **RIGTH JOIN**

```SQL
SELECT *  
FROM T1 RIGTH OUTER JOIN T2  
ON T1.C1 = T2.C1
```

Retorna todas as linhas da tabela a direita (T2), mesmo não havendo linhas com valores coincidentes na tabela da esquerda (T1)

- **FULL JOIN**

O SQL Sever não possui nomenclatura para o **FULL OUTER JOIN**, dessa forma, utilizamos uma união entre o **LEFT OUTER JOIN** e **RIGTH OUTER JOIN**

```SQL
SELECT *  
FROM T1 LEFT OUTER JOIN T2  
ON T1.C1 = T2.C1

UNION

SELECT *  
FROM T1 RIGTH OUTER JOIN T2  
ON T1.C1 = T2.C1
```

Retorna todas as linhas de ambas as tabelas (T1 e T2), mesmo havendo linhas sem valores coincidentes

#### 🌵Função com Datas

- **EXTRACT

Extrai unidade (ano, mês, dia) a partir de uma data

```SQL
EXTRACT(UNIDADE FROM data)
```

- Exemplo:

```sql
EXTRACT(DAY FROM pro_nascimento)
```

#### 🌱Função de Concatenação

Concatena duas ou mais expressões

```SQL
CONCAT(expressão1, expressão2, expressão3,...)
```

- Exemplo:

```sql
CONCAT(tudi_ano, '/', tudi_semestre)
```

#### 🌱Arredondamento

Arredonda um valor por determinada precisão

```sql
ROUND(valor numérico, precisão)
```

- Exemplo:

```sql
ROUND((SELECT AVG(pro_salario) FROM professor), 2)
```

#### 🌱Funções de string

##### 🌵 **UCASE**

Converte o valor de um campo string para maiúsculo

```SQL
UCASE(atributo)
```

##### 🌵 **LCASE**

Converte o valor de um campo string para minúsculo

```SQL
LCASE(atributo)
```

##### 🌵 LENGTH

Retorna a quantidade de caracteres de um valor de string

```SQL
LENGTH(atributo)
```
