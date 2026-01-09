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

![[Requisitos de Software.png|banner]]
> [!banner-icon] 🌿Aula 30.05.25
## 🌳Processo de Software 

O Processo de software genérico tem como atividades de apoio: 
- A Garantia de Qualidade;
- Medição;
- Gerenciamento de Configuração;
- Administração de Riscos;
- Revisões Técnicas;
- etc...

### 🌿Modelagem conceitual

É o processo de transferir a descrição da realidade para o um modelo em software, capturando uma visão de um sistema físico. É uma abstração do sistema com um certo propósito, como descrever aspectos estruturais ou comportamentos do software. 

A UML - Linguagem de Modelagem Unificada provê diversos diagramas que podem ser utilizados na modelagem de requisitos. A UML é uma linguagem gráfica padrão para ==especificar, visualizar, documentar e construir artefatos== de sistema de software. A UML é uma linguagem de modelagem. 

O Modelo conceitual de um sistema é tipicamente composto de vários modelos. Categoria de modelos conceituais
- **Modelos Estruturais** → procuram capturar os principais conceitos do domínio, suas relações e propriedades
- **Modelos Comportamentais** → especificam as ações que o sistema pode realizar e as mudanças no estado do domínio. 

### 🌿Caso de Uso

É o primeiro modelo a ser construído passível de compreensão pelos interessados. É maneira de usar o sistema por intermédio de uma perspectiva do usuário. O Propósito dos modelos de casos de uso é uma maneira de usar o sistema por intermédio de uma perspectiva do usuário. 

Um caso de uso conta uma história como o diferentes atores interagem com o sistema sob um conjunto de circunstâncias específicas. 

Um caso de uso deve descrever o que um sistema faz. Para sistemas mais complexos um diagrama de caso de uso é insuficiente para este propósito. Assim, deve-se especificar o comportamento do caso de uso pela descrição textual do seu fluxo de eventos. 

- **Atores** → papel desempenhado por entidades físicas que interagem com o sistemas. Representam os papéis desempenhados pelos usuários que poderão utilizar o sistema de software. Disparar algum tipo de ação no sistema.
- **Casos de Uso** → descreve um conjunto particular de funcionalidades do sistema, modelando o diálogo que uma entidade externa, chamada ator, realiza com o sistema. Corresponde a um conjunto de ações realizadas pelo sistema, que produz um resultado observável. 

#### 🌱Relacionamentos

- **Associação** → é o caminho de comunicação entre um ator e os casos de uso, entre atores ou entre casos de uso. Uma associação entre um ator e um caso de uso demonstra que o ator utiliza, de alguma maneira, a funcionalidade do sistema. As setas servem indicar que inicia a comunicação. 
	- **Inclusão** → indicam uma obrigatoriedade, ou seja, quando um caso de uso tem um relacionamento de inclusão com o outro. | DEVE - A Seta indica o resultado
	- **Extensão** → significa que uma caso de uso pode ser inserido dentro do comportamento definido no caso de uso base | PODE - A Seta indica o inicio
	- **Generalização**:
		- *Casos de Uso*  → existem dois ou mais casos de uso com características semelhantes. O Caso de uso filho herda o comportamento e o significado do caso de uso pai, acrescentando ou sobrescrevendo seu comportamento. 
		- *Com atores* → existem dois ou mais atores com características semelhantes. O Ator filho herda o tipo e o significado do ator pai. 

