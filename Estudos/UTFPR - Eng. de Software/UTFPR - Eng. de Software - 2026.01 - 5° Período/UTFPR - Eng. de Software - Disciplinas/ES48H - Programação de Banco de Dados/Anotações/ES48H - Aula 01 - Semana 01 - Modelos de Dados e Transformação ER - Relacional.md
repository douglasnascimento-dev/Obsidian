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


# 🌿Modelos de Dados

Os **Modelos Conceituais** representam a realidade em alto nível de abstração (como o modelo ER). Os **Modelos Lógicos** representam a forma como os dados serão processados (como o modelo Relacional). Já os **Modelos Físicos** descrevem como os dados são armazenados fisicamente em registro (como o SQL)

# 🌿Transformação ER > Relacional

1. Cada entidade é traduzida para uma tabela;
2. Cada atributo define uma coluna da tabela; e
3. Atributos identificados da entidade correspondem a chave primária da tabela.

4. Atributos multivalorados são traduzidos como tabelas (com chave estrangeira para a tabela original). Exemplo: `Telefones(1, n)`>`Telefone(Numero, RGPessoa) | RGPessoa > Pessoa`
5. Atributos Compostos são traduzidos como SubColunas. Exemplo:`Pessoa(RG, Nome, Endereco(Rua, Numero, Bairro))`

## 🎋 Relacionamentos 

* A Tradução de Relacionamentos depende da Cardinalidade da Relação.

1. Relacionamentos 1:N 
	1. É adicionado uma Coluna na Entidade do Lado N.
	
2. Relacionamento 1:1 
	1. (0,1) : (0,1) -  Opcional nos duas Tabelas
		1. É adicionada uma Coluna em qualquer uma das Tabelas envolvidas.
		
	2. (1,1) : (0,1) - Opcional em uma Tabela
		1. É Indicado preferencialmente que a Tabela com a Opcionalidade receba a Chave Estrangeira.
		
	3. (1,1) - Não opcionalidade
		1. É Indicado preferencialmente ocorrer a Fusão de Tabelas. Se caso não for possível, é então realizado uma Adição de Colunas em qualquer uma das Tabelas envolvidas.
	
3. Relacionamento N:N
	1. É criado uma nova Tabela, com Colunas acoplando as Chaves Primárias, essa colunas serão uma Chave Primária Composta e Estrangeira da Tabela

Uma vez que relacionamento pode possuir atributos, esses devem acompanhar as Colunas/Tabelas adicionadas 