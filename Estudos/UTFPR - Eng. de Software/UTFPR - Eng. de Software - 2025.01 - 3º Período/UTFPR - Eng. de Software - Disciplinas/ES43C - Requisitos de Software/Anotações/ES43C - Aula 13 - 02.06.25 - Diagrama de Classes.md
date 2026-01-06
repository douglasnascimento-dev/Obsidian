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

![[Requisitos de Software.png|banner]]
> [!banner-icon] 🌿Aula 02.06.25
## 🌳Diagrama de Classes

Um diagrama de classes é utilizado para descrever a estrutura estática de classes no sistema, permitindo definir os atributos, operações (métodos) e os relacionamento entre as classes no sistema. 

Uma classe representa um item do mundo real, um grupo de objetos semelhantes. Uma instância de classe é chamada de objeto e descreve objetos por meio de:
- **Atributos** → o que objeto conhece - os dados
- **Operações** → o que o objeto sabe fazer - as ações, funções, procedimentos

### 🌿Relacionamentos

Os objetos de um sistema podem ser relacionar uns com os outros, permitindo a troca de mensagens. 

#### 🌱Dependência

Também chamada de dependência fraca. Uma classe usa informações e serviços de outra classe em algum momento, dependendo dela. Do tipo 'Classe A depende de Classe B'.

#### 🌱Associações

Indica que uma classe tem uma referência a outra classe. Representada através de um segmento de reta ligando as classes cujos objetos se relacionam. 

#### 🌱Multiplicidades

Representam os limites de uma associação, ou seja, indicam a quantidade de objetos aos quais um outro pode estar associado

#### 🌱Associação Ternária

Associação conecta objetos de três classes. Um losango indica o ponto de conexão das classes envolvidas. Na prática, podemos ter associações n-árias, conectando quaisquer número de objetos de classes. 

#### 🌱Agregação

É um tipo especial de associação, sendo utilizada para representar relacionamento "todo-parte". Indica que uma classe é contêiner e possui uma coleção de outras classe. As classes contidas não dependem do contêiner, assim, quando o contêiner é destruído, as classes continuam. 

#### 🌱Composição

A Composição é um tipo de agregação mais forte, ou seja, a parte dependo do todo. Quando um contêiner é extinto, as partes também desaparecem

#### 🌱Generalização / Herança

Representa herança entre classes. Relacionamento entre itens gerais e tipos mais específicos desses itens. 

