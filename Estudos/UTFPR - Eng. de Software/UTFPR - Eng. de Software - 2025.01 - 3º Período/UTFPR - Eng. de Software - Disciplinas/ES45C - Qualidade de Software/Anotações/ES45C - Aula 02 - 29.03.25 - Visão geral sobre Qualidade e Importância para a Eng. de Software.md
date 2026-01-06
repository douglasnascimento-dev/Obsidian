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

![[Qualidade de Software.png|banner]]
> [!banner-icon] 🌿Aula 29.03.25

> “Qualidade de software é a ==conformidade a requisitos funcionais e de desempenho que foram explicitamente declarados==, a padrões de desenvolvimento claramente documentados, e a características implícitas que são esperadas de todo software desenvolvido profissionalmente.”
> **Pressman, 2006**


### 🌿Aspectos Importantes

01. Os **Requisitos de Software** são a base a partir do qual a qualidade é media. A falta de conformidade aos requisitos significa falta de qualidade.
02. Padrões especificados definem um conjunto de critérios de desenvolvimento que orientam a maneira segundo a qual o software passa pelo trabalho de engenharia.
03. Existe um conjunto de requisitos implícitos que frequentemente não são mencionados na especificação. Por exemplo, o desejo de uma boa manutenibilidade. Se o software atende aos requisitos explícitos, mas falha nos requisitos implícitos, a qualidade é suspeita

Os diferentes membros que fazem parte do desenvolvimento pode ver o software de diferentes maneiras. O Usuário final, o Desenvolvedor e a Organização Final enxergam e necessitam de diferentes requisitos de software.

### 🌿Incorporação de Qualidade

Dificilmente, a qualidade pode ser incorporada a um produto final. Dos ==requisito do usuário à entrega do produto final, existe um processo de desenvolvimento== que é complexo. 

## 🌿Benefícios da Qualidade

- Maior produtividade
- Maior precisão nas estimativas
- Redução de defeitos no produto
- Menos esforço de retrabalho
- Menos horas de trabalho
- Maior produtividade e
- Maior competitividade

### 🌿Qualidade do Produto

A Qualidade do produto é um ==objetivo do processo de desenvolvimento==. Assim, ao desenvolver-se um produto, deve-se ter previamente estabelecidas, como perspectivas, as características de qualidade que desejamos alcançar.

A Garantia de Qualidade do Produto, é estabelecida pelo Modelo McCall / Norma ISO/IEC 9126 ou ISO/IEC 25010 | *SQUARE - Systems and Software Quality Requirements and Evaluation* 

## 🌳Processo

> O Processo é uma ==Sequência de Passos== realizados para um determinado proposito
> **IEEE 610.12, 1690**

> O Processo de Software é um ==Conjunto de Atividades, métodos, práticas e tecnologias== que as pessoas utilizam para desenvolver e manter software e  produtos relacionados
> **Capability Maturity Model - CMM**

Uma das maiores dificuldades encontradas pelas empresas de software é o gerenciamento de seus processos de software. Para isso, um modelo de processo procura descrever formalmente e de maneira organizadas todas as atividades que devem ser seguidas.

### 🌿 Atividades

As atividades são as principais etapas do ciclo de vida do software.

- Levantamento de Requisitos → Identificação das necessidades do usuário e do sistema.

-  Análise e Modelagem → Definição da estrutura e do comportamento do software.

-  Projeto de Software → Arquitetura, design de interfaces e estrutura de dados.

-  Implementação → Escrita do código-fonte e testes unitários.

-  Testes → Verificação e validação do software (testes manuais, automatizados, integração, etc.).

-  Implantação → Entrega do software para os usuários finais.

-  Manutenção → Correção de erros, melhorias e atualizações do sistema.

### 🌿 Métodos

Os métodos são abordagens sistemáticas para guiar o desenvolvimento de software.

-  Cascata (Waterfall) → Desenvolvimento sequencial, onde cada fase depende da conclusão da anterior.

-  Iterativo e Incremental → Desenvolvimento em ciclos curtos, entregando partes do software progressivamente.

-  Ágil (Scrum, Kanban, XP, etc.) → Foco na colaboração, flexibilidade e entregas contínuas.

-  DevOps → Integra desenvolvimento e operações para automação e entrega contínua.

### 🌿Práticas

As práticas são técnicas que auxiliam na qualidade e produtividade do processo de software.

-  Revisões de Código → Análise do código por outros desenvolvedores para garantir qualidade.

-  Integração Contínua (CI) → Testes e builds automáticos a cada alteração no código.

-  Entrega Contínua (CD) → Automação da implantação para agilizar releases.

-  TDD (Test-Driven Development) → Desenvolvimento baseado em testes escritos antes do código.

-  Pair Programming → Programação em dupla para aumentar colaboração e qualidade.

-  Gerenciamento de Configuração → Controle de versões e rastreamento de mudanças.

### 🌿Tecnologias

As tecnologias envolvem ferramentas e frameworks que suportam o desenvolvimento de software:

-  Linguagens de Programação → Java, Python, JavaScript, C#, etc.

-  Frameworks e Bibliotecas → React, Spring, Django, Angular, etc.

-  Ferramentas de Versionamento → Git, GitHub, GitLab, Bitbucket.

-  Plataformas de CI/CD → Jenkins, GitHub Actions, GitLab CI/CD.

-  Ambientes de Desenvolvimento → VSCode, IntelliJ IDEA, Eclipse.

-  Testes Automatizados → Selenium, JUnit, Jest, PyTest.

-  Monitoramento e Observabilidade → Prometheus, Grafana, Datadog.

-  Gerenciamento de Projetos → Jira, Trello, Asana.


### 🌿Tipos de Processos 

#### 🌱Processo Imaturo

- Gasta 90% do seu tempo corrigindo sintomas em vez das causas
- Improvisionado;
- Fortemente dependente dos profissionais;
- Indisciplinado
	- Causa pouca produtividade, qualidade de difícil previsão, alto custo de manutenção e risco na adoção de novas tecnologias

#### 🌱Processo Maduro 

- Gasta 80% do seu esforço na prevenção de problemas;
- Processo amplamente conhecido;
- Apoio visível da administração;
- Auditagem da fidelidade ao processo;
- Medidas do produto e do processo;
- Adoção disciplinada de tecnologias;

### 🌿Ciclo de Processo 

Definir o processo > Uso do processo > Medição do processo > Controle do processo  > Melhoria do processo

#### 🌱Definir o processo

[^1]Busca facilitar o processo e a comunicação entre as pessoas, apoiar a melhoria do processo, podem ser mapeados para os diferentes modelos de ciclo de vida do processo

[^1]: ISO/IEC 12207, ISO/IEC 15504

#### 🌱Medição do processo

[^2]Informações quantitativas sobre o processo são coletadas, analisadas e interpretadas. Medições são utilizadas para identificar desvios com relação ao desempenho aceitável para o processo. Paradigmas para a medição do processo:

01. Paradigma analítico → Baseia-se em evidências quantitativas 
02. Benchmarking → Envolve medir a maturidade de uma organização ou a capacidade de seus processos 

[^2]: CMM, CMMI, ISO 155504, MR MPS.BR

#### 🌱Controle do processo

Busca manter o processo dentro de seus limites normais de desempenho. Envolve detectar variações no processo, decorrentes de causas atribuíveis e corrigir variações no processo através da remoção de causas atribuíveis

#### 🌱Melhoria do Processo

[^3]Processos podem e devem ser melhorados continuamente, para isso, normas e modelos de maturidade de processos de software podem ser utilizados

[^3]: ISO/IEC 12207, ISO/IEC 15504, CMMI, Modelo de Referência MR - MPS 
