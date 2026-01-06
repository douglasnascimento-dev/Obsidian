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
> [!banner-icon] 🌿Aula 19.05.25

### 🌳Validação de Requisitos

 Dedica-se a mostra que os requisitos realmente definem o sistema que o usuário deseja. Está relacionada com a descoberta de problemas com os requisitos. O Custo de correção de um problema de requisitos é muito maior que a correção de erros de projeto e de codificação. 

 - Verificações de consistências → conflitos
 - Verificações de completeza → definição de todas as funções e restrições
 - Verificação de realismo → realmente podem ser implementados
 - Facilidade de verificação → geração de testes. 

### 🌿Técnicas de Validação

#### 🌱Prototipação

É uma versão inicial do sistema usado para demostrar conceitos, experimentar opções, e conhecer mais possíveis soluções. É uma maneira de ajudar os evolvidos a passar dos enunciados de objetivos gerais e histórias de usuário para o nível de detalhamento. 

- Baixa fidelidade → são esboços ou protótipos muitas vezes em papel que não agregam custos mas possuem retorno. 
- Alta fidelidade → vão além da demonstração de ideias. Preocupam-se em representar de forma fidedigna atributos do produto para que possa representar o produto em teste e para que os resultados dos testes sejam concretos. 

#### 🌱Geração de casos de teste

Os requisitos devem ser testáveis. Se um teste for difícil ou impossível de ser projetado. Isso significa geralmente que os requisitos serão difíceis de ser implementados e devem ser reconsiderados. O Propósito de gerar casos de teste é validar o requisito e não o sistema. 

- **Testes Funcionais** → Verificam se o sistema está atendendo aos requisitos funcionais definidos pelos clientes ou pelo projeto.
	- Teste de Unidade → garante que os requisitos individuais e específicos de cada funcionalidade estejam implementados corretamente. Foco em requisitos funcionais básicos, isolados em cada componente. 
	- Teste de Integração → garante que os requisitos relacionados à interação entre componentes sejam atendidos. Valida requisitos que dependem da colaboração entre módulo
	- Teste de Sistema → valida que o sistema como um todo cumpre todos os requisitos funcionais e não funcionais descritos. Foca em validar que o produto final está alinhado com todos os requisitos do cliente e pode ser entregue.

- **Testes não funcionais** → Estes testes focam em aspectos do sistema que não estão relacionados diretamente à funcionalidade, mas a características como desempenho, segurança, usabilidade, etc. 
	- Testes de desempenho, teste de segurança, teste de usabilidade e teste de compatibilidade. 

### 🌿Revisão de Requisitos

É o processo manual em busca de anomalias ou omissões. Podem ser formais ou informais. 

- **Informais** → discutem os requisitos com o maior número possível de stakeholder. Muitos problemas podem ser detectados apenas conversando com os stakeholder
- **Formal** → Revisão Técnica Formal
	- Inspeção em Requisitos Funcionais e não Funcionais

#### 🌱Inspeção de Requisitos

A Inspeção é um método de análise estática para verificar as propriedades de qualidade dos artefatos de requisitos de software. A inspeção consiste na verificação visual de um artefato de software com o objetivo de detectar anomalias e erros através de testes estáticos.

#### 🌱Classes de Defeito

- **Omissão** → Ocorre quando informações necessárias do sistema são omitidas, quando algo está faltando. 
- **Fato Incorreto** → É caracterizado quando informações do sistema são incorretas com a realizada que se aplica. 
- **Inconsistência** → Está relacionado as informações que aparecem mais de uma vez no artefato, só que de forma diferente em cada ocorrência. 
- **Ambiguidade** → Ocorre quando a informação fornecida leva a diversas interpretações. 
- **Informação Estranha** → Ocorre quando é encontrada uma informação, entretanto ela não é necessária para o sistema em questão.  