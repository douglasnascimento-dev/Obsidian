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
> [!banner-icon] 🌿Aula 12.05.25

### 🌳Dependência de Requisitos

Busca identificar e registrar quais requisitos estão relacionados entre si de forma que um depende do outro para existir, funcionar ou fazer sentido.

- Tipos de Dependência
	- Funcional
	- Dados
	- Temporal
	- Técnica ou de Infraestrutura 
	- Interface ou Navegação
	- Lógica ou Condicional

#### 🌱Dependência Funcional

Depende de outro requisito para funcionar.

> RF01 - O Sistema deve permitir que o usuário consiga recuperar a senha para uso do sistema
> RF02 - O Sistema deve enviar um email com um link de redefinição de senha para o endereço cadastrado pelo usuário.

> RF02 depende de RF01 para existir e RF01 depende de RF02 para funcionar completamente.

#### 🌱Dependência de Dados

Um requisito depende da existência, entrada ou processamento de dados proveniente de outro.

> RF03 - O sistema deve calcular o imposto com base nos dados do faturamento mensal. 
> RF04 - O sistema deve permitir o cadastro do faturamento mensal. 

>○ RF03 depende de RF04, pois sem os dados de faturamento, o cálculo não é possível.

#### 🌱Dependência Temporal

Um requisito só pode ser executado após o outro, em termos de tempo ou sequência. 

> RF05 - O Sistema deve permitir a emissão de nota fiscal
> RF06 - O Sistema deve permitir o cadastro de uma venda

> Emitir uma nota só é possível depois que a venda foi registrada. 

#### 🌱Dependência Técnica ou de Infraestrutura

A Execução de um requisito depende da existência de uma tecnologia, API, integração externa, ou infraestrutura técnica. 

> RF07 - O Sistema deve permitir login com a Conta do Google
> RF08 - O Sistema deve integrar com a API OAuth do Google

> RF07 depende tecnicamente da implementação de RF08

#### 🌱Dependência de Interface ou Navegação

Relaciona-se ao fluxo de navegação. Um requisito depende da existência de uma tela, botão, ou link de acesso.

> RF09 - O Sistema deve exibir o histórico de pedidos
> RF10 - A Interface de perfil do usuário deve conter um link para o histórico de pedidos

> O Acesso funcional só é possível se a navegação estiver prevista na interface

#### 🌱Dependência Lógica ou Condicional

Um requisito só será ativado ou aplicado sob certas condições definidas por outro requisito ou regra

> RF11 - O Sistema deve permitir o acesso à área administrativa
> RF12 - O Sistema só deve mostra a área administrativa para usuários com perfil de administrador

> RF12 condiciona logicamente o funcionamento de RF11.

### 🌿Técnicas de Levantamento de Requisitos

- **Interativas** → envolvem a interação com os membros da organização
- **Obstrutivas** → procuram não interferir no trabalho dos membros da organização 

#### 🌱Entrevista

As entrevista fazem parte dos processos de eng. de requisitos. São úteis para obter um entendimento geral sobre o que os stakeho0lder querem. É **interativo**.

O Formato é de pergunta e respostas. Os requisitos são derivados das respostas. As perguntas podem ser abertas ou fechadas. A entrevista precisa ser planejada. O planejamento deve definir de que forma a entrevista será registrada: gravação, filmagem e/ou anotações.

#### 🌱Coleta colaborativa

É a coleta colaborativa de requisitos diretamente com os interessados por meio de cooperação. Método **interativo**. Exemplos: Workshops, JAD ou Brainstorming. 

São reuniões de diferentes grupos de interessados. Um facilitador que controla a reunião. É usado mecanismos de anotações e a meta é indicar ou debater o problema, propor soluções. 

- **Workshops** → O Foco é a descoberta de requisitos. Tem caráter de treinamento. Apresenta casos práticos. O Público participa intensamente. É uma reunião com propósito definido e atividades planejadas. 
- **Seminário** → Reunião planejada com pessoa chaves, dinâmica de grupo, vários oradores debatem o tema na mesa, muitas vezes a participação do auditório.
	- Vantagens → Visão integradas dos problemas e a possibilidade de dispor de múltiplas visões sobre um mesmo assunto. 
	- Desvantagens → Mobiliza um grupo de pessoas ao mesmo tempo.
- **Brainstorming** → reunião rápida entre os interessados. Discussão informal para a geração de ideias. O Objetivo não é resolver maiores questões ou tomar decisões. É uma técnica utilizada para gerar uma declaração preliminar do sistema. 
- **JAD - Joint Application Development** → As metas do sistema já estão definidas. São sessões estruturadas realizadas como todos os interessados para produzir um documento de alta qualidade em um curto período de tempo. É feito em três etapas: preparação, sessão e revisão. 
- **Questionários** → Permite a analista capturar, de várias pessoas afetadas pelo sistema, atitudes, crenças, comportamento e características. Metódo **obstrutivo**. Pode conter:
	- Múltipla escolha com escolha única
	- Múltipla escolha com escolha múltipla
	- Likert - Dispersão de gostos.
	- Diferencial Semântico
	- Aberta  
- **Observação** → Busca observar o comportamento e o ambiente do indivíduo, sobretudo aquele que toma decisões, pode ser uma forma bastante eficaz de levantar informações.
	- Vantagens: Baixo custo, não exige disponibilidade de tempo.
	- Desvantagens: Depende do observador, superficial, causa mal-estar na área levantada. 
- **Técnicas Mistas** → integração das técnicas anteriores, é a que mais funciona na prática são envolvidas e usadas.

