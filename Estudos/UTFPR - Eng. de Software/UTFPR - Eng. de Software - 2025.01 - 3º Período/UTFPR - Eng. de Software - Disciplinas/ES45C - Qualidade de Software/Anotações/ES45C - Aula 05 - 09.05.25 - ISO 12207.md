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
> [!banner-icon] 🌿Aula 09.04.25

### 🌿Modelos de Processo de Software

Existem vários modelos de processo de software, paradigmas da Eng. de Software, podem ser genéricos, abstrações do processo, usados para explicar diferentes abordagens para o desenvolvimento de software, é a tentativa de colocar ordem em uma atividade normalmente caótica. 

- **Modelo Cascata** → O Modelo tradicional, segue uma abordagem linear e sequencial. Ele são eficazes em projetos com requisitos bem definidos, mas podem ser inflexíveis em ambientes dinâmicos. 

- **Modelo de Prototipação** → Possibilita que o dev. crie o um modelo do software que deve ser construído. O objetivo é entender os requisitos de usuário e, assim, obter uma melhor definição dos requisitos do software. ==Apropriado para quando o cliente não definiu detalhadamente os requisitos==. 

- **Modelo Evolutivos** → São interativos, ou seja, possibilitam o desenvolvimento de versões cada vez mais completas do software
	- **Modelo Incremental** → Combina elementos do Modelo cascata com a prototipação. Tem como objetivo trabalhar junto ao cliente para descobrir requisitos, até que o produto final seja obtido. A Evolução acontece quando novas características são adicionadas à medida que são sugeridas pelo cliente. 
	- **Modelo Espiral** → Engloba as melhoras características do Modelo Cascata e da Prototipação, adicionando um novo elemento: a análise de riscos. Segue a abordagem de passos sistemáticos do Modelo cascata, incorporando uma estrutura interativa. Usa a prototipação em qualquer etapa da evolução do produto, como mecanismo de redução de riscos. 

- **Modelo Ágeis** → Como o Scrum, Kanban e o XP, enfatizam a flexibilidade e a colaboração. Permitem adaptações rápidas a mudanças nos requisitos e promovem a entrega contínua. Baseado no modelo incremental e iterativo

- **Modelo DevOps** → Não é um modelo de processo, mas combina as práticas de desenvolvimento e operações para promover um ciclo de desenvolvimento contínuo. Baseado em integração contínua, automação e colaboração. 

### 🌿Melhoria de Processo de Software

- **Melhoria de Referência** → Representa um conjunto de processos para um determinado domínio, cada processo é definido por um nome, um propósito e prática, utilizado para organizar, definir e estabelecer processos. Exemplo a ISO 12207

- Histórico da ISO 12207
	- 1987 | A ISO e a IEC definem o Comitê técnico em tecnologia da informação (JTC1)
	- 1989 | O JTC1 inicio o processo de desenvolvimento da ISO 12207, com o objetivo de suprir a necessidade critica nos Processos de Ciclo de Vida do Software.
	- ISO/IEC 12207:1995 | Primeira Versão. Definiu um conjunto inicial de processos e atividades para o ciclo de vida do software. 
	- ISO/IEC 12207:2008 | Versão revisada. Refinou os processo e atividades, com melhorias e atualizações com base em feedbacks de empresas e avanços na área de software. 
	- ISO/IEC 12207:2017 | Colaboração entre a ISO, IEC e o IEEE. Fez um junção com outras normas relacionadas como a ISO/IEC 15288 (Eng. de Sistemas) e a ISO/IEC 20000 (Gestão de Serviços de TI).
	- ISO/IEC 12207:2021 | Versão mais recente. Integração entre sistemas e software e acomodar metodologias ágeis. Refinou a integração com a ISO 15288, simplificou termos e processos para maior adaptabilidade a metodologias modernas, como o DevOps, com um maior enfoque em segurança e qualidade. 

### 🌿ISO 12207:2021

Buscar fornecer um conjunto definido de processos para facilitar a comunicação entre adquirentes, fornecedores e outros stakeholder no ciclo de vida de um sistema de software. Define um quadro de referência para os processos de software. Identifica um terminologia básica e Estabelece uma arquitetura de alto nível do ciclo de via do software.

> A Flexibilidade da ISO 12207 é uma característica importante, as atividades e tarefas do processo de ciclo de vida do software especificam o que fazer e não como fazer. Assim, a norma ISO/IEC 12207 pode ser utilizada com qualquer modelo de ciclo de vida. 

Ela é aplicável a todo o ciclo de vida de sistemas, produtos, serviços de software, incluindo a concepção, desenvolvimento, produção, utilização, suporte e desativação, e a sua aquisição e fornecimento. Podem ser aplicados de forma concorrente, iterativa e recursiva a um sistema de software e de forma incremental aos seu elementos. 

- Nomenclaturas
	- **Processo** é um conjunto de atividades interrelacionadas ou interagindo que transformar entradas em saídas. O Processo deve ter objetivo, importância do valor da saída para a organização. Um processo tem um cliente e pode cruzar fronteiras organizacionais. 
	- Estágio/fase: Período de tempo em que as atividades são realizadas. 
	- Disciplina: Conjunto de atividades relacionadas. 
	- Atividades: Conjunto de tarefas coesas de um processo. 
	- Passos: quais sãos os passos para executar uma tarefa e quais os procedimentos/tecnologias utilizadas. 
	- Papel: Responsáveis e participantes. 
	- Recurso: Algo necessário para executar o processo. 
	- Artefato: Algo gerado pelo processo.

Ela define para cada processo um propósito, um resultado e atividades e tarefas. 

 A ISO 12207:2021 pode ser usada por uma organização, um projeto, um adquirente e um fornecedor e por um avaliador de processo. É necessário adaptar o padrão para usá-la. Adicionando e removendo atividades e tarefas, alteração da ordem definida, com análise da necessidade dos processos. 
 
### 🌿Grupos de Processos

 - **Processos de Acordo** 
	 - Os acordos permitem que adquirentes e fornecedores percebam valor e apoiem as estratégias de negócios para suas organizações. 
	 - Os processos de acordo são processos organizacionais que se aplicam fora do período de vida de um projeto, bem como pela vida útil do projeto. 
	 - Os processos de acordo são: **Processo de Aquisição** (Usado pelas organizações para adquirir produtos ou serviços) e **Processo de Fornecimento** (Usados pelas organizações para fornecer produtos e serviços).
- **Processos Organizacionais Habilitadores de Projeto**
	- Estabelece o ambiente em que os projetos são conduzidos. Se encarregam de fornecer os recursos para permitir que o projeto atenda às necessidades e expectativas dos stakeholders da organização. 
	- Os Processos Organizacionais Habilitadores de Projeto são: **Processo de Gerenciamento de Modelo de Ciclo de Vida** (Estabelece políticas, processos e procedimentos de ciclo de vida que são consistentes com os objetivos da organização), **Processo de Gerenciamento de Infraestrutura**: (Fornece infraestrutura e serviços para os projetos),  **Processo de Gerenciamento de Portfólio** (Gerenciamento de uma linha de produto), **Processo de Gerenciamento de Recursos Humanos** (Fornecimento de recursos humanos necessários e manter suas habilidades consistentes), **Processo de Gestão de Qualidade** (Assegurar que os produtos, serviços e as implementações dos processos tenham qualidade) e o **Processo de Gerenciamento de Conhecimento** (explorar ativos que permitam à organização explorar oportunidades para reaplicar o conhecimento existente. )
- **Processos de Gerenciamento Técnico**
	- Estão relacionados ao esforço técnico nos projetos, em particular ao planejamento em termos de custos, prazos e compromissos.
	- Verificação das ações que contribuem para garantir que sejam cumpridos os planos e as metas de desempenho. 
	- Identificação e seleção de ações corretivas para recuperar desvios no progresso e nos compromissos do projeto.
		- **Processo de Planejamento de Projeto**: produzir e coordenar planos efetivos e viáveis. 
		- **Processo de Avaliação e Controle de Projeto**: avalia periodicamente e em eventos importantes, o progresso e as realizações em relação aos requisitos, planos e objetivos gerais de negócio. 
		- **Processo de Gerenciamento de Decisão**: Fornece uma estrutura para identificar, caracterizar e avaliar um conjunto de alternativas para tomada de decisão
		- **Processo de Gestão de Riscos**: identificar, analisar, tratar e monitorar continuamente os riscos. 
		- **Processo de Gerenciamento de Configuração**: gerenciar e controlar elementos e configurações do Sistema durante o ciclo de vida.
		- **Processo de Gerenciamento da Informação**: gerar, obter, confirmer, transformer, reter, recuperar, disseminar e descartar informações para stakeholders identificados. 
		- **Processo de Medição**: coletar, analisar e relatar dados e informações para apoiar o gerenciamento. 
		- **Processo de Garantia de Qualidade**: garante a aplicação eficaz do Processo de Gestão da Qualidade da organização
- **Processos Técnicos**
	- Transformam as necessidades dos stakeholders em produtos ou serviços. São usados para criar ou usar um sistema de software, seja na forma de um protótipo ou de um produto operacional.
	- Os Processos Técnicos são: 
		- Processo de Análise de Negócio
		- Processo de Definição de Necessidades e Requisitos dos stakeholders
		- Processo de Definição de Requisitos de Sistema/Software
		- Processo de Definição de Arquitetura
		- Processo de Definição de Design
		- Processo de Análise de Sistema.
		- Processo de Implementação
		- Processo de Integração
		- Processo de Verificação
		- Processo de Transição
		- Processo de Validação
		- Processo de Operação
		- Processo de Manutenção
		- Processo de Desativação.