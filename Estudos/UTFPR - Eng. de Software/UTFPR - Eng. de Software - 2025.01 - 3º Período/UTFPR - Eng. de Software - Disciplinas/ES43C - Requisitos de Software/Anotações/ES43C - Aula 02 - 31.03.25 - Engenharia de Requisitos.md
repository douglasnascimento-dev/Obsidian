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
> [!banner-icon] 🌿Aula 31.03.25
## 🌳Engenharia de Requisitos

É o processo de descobrir, analisar, documentar e verificar as funções e/ou restrições. Pode ser definida como o processo sistemático de desenvolvimento de requisitos através de um processo interativo. Envolve criatividade, interação de diferentes pessoas, conhecimento e experiência. Possibilita estimar cursos e tempo de maneira mais precisa e melhor e gerencia mudanças em requisitos
--- start-multi-column: ID_3hlh
```column-settings
Number of Columns: 2
Largest Column: standard
```

### 🌿Produção de Requisitos

- Levantamento de Requisitos
- Análise
- Especificações
- Validação e Verificação

--- column-break ---

### 🌿Gerência de Requisitos

- Controle de Mudanças
- Rastreabilidade
- Gerência de Configuração - *não será abordada*
- Gerência de Qualidade - *não será abordada*

--- end-multi-column

### 🌿O Processo da Engenharia de Requisitos

01. Estudo de Viabilidade > *relatório de viabilidade*
02. Elicitação e Análise de Requisitos > *modelos do sistema*
03. Especificação de Requisitos > *Documento e Especificação de Requisitos*
04. Validação de Requisitos > *Documento e Especificação de Requisitos*

#### 🌱 Estudo de Viabilidade

Entrada →  Descrição geral do Sistema
Saída → Relatório que recomenda ou não fazer o processo de eng. de requisitos e o processo de desenvolvimento

#### 🌱Elicitação e Análise de Requisitos

Envolve as atividade de descoberta de requisitos. Busca entender a organização, seus processos e necessidades, com o objetivo final de comunicar essas necessidades para o desenvolvedor .

A Elicitação e a compreensão dos requisitos dos stakeholders pode ser difícil devido a: 
- Os especialistas de software, sem experiência do domínio de classe, devem entender esses requisitos;
- Diferentes stakeholders possuem diferentes requisitos, diferentes pontos de vista;
- O Ambiente de negócio está em constante mudança. Requisitos podem mudar ou surgir; e
- Clientes e Usuário frequentemente não o que realmente querem;

##### 🌵Níveis de Requisitos

🌲Domínio → Provem do conhecimento do domínio do problema que o sistema está sendo projetado, incluem informações como ==ambientes de negócios, as regras de negócios, políticas e práticas==. Os requisitos de domínio são frequentemente adquiridos por meio de entrevistas com as stakeholders. 

EX. - *biblioteca*

01. Um livro pode ser emprestado por no máximo 15 dias corridos.
02. O atraso na devolução gera uma multa diária de R$ 1,00 por exemplar.
03. Um usuário pode emprestar até 5 livros simultaneamente.
04. Alunos da pós-graduação podem renovar o empréstimo uma vez; alunos da graduação não podem.
05. *... continua*

🌲Requisitos de Usuário

Estes são os requisitos que descrevem as necessidades e expectativas dos usuários finais do sistema. Definem as funcionalidades e características que os usuário desejam ou precisam, geralmente são coletados por meio de entrevistas, questionários. ==Os requisitos de usuário estão altamente ligado a interfaces e são funcionais ==

EX. - *biblioteca*

01. O usuário deve poder buscar livros pelo título, autor ou assunto.
02. O usuário deve poder ver os detalhes de um livro, incluindo disponibilidade, número de exemplares e localização.
03. O usuário deve poder realizar o empréstimo de um livro, caso esteja disponível.
04. O usuário deve poder renovar um empréstimo, se as regras do sistema permitirem.
05. *... continua*

🌲Requisitos de Sistemas

Estes são os requisitos que descrevem as características e comportamentos que o sistema deve ter para satisfazer os requisitos de domínio e usuários. Eles detalham as funcionalidade específicas do sistema, restrições técnicas e ==requisitos não funcionais== do sistema. Estão descritos em diagramas, modelos de dados e protótipos. ==São os atributos de Qualidade==.

01. 1. O sistema deve estar disponível 24 horas por dia, 7 dias por semana.
02. O tempo de resposta para buscas deve ser inferior a 2 segundos.
03. O sistema deve suportar pelo menos 500 usuários simultâneos.
04. As informações de usuários e transações devem ser criptografadas e armazenadas com segurança.
05. O sistema deve ser compatível com navegadores modernos e dispositivos móveis.

##### 🌵Tipos de Requisitos

🌲Requisitos Funcionais

Os requisitos funcionais ==descrevem as funcionalidades especificas que o sistema deve conter==, ou seja, as ações que o sistema deve ser capaz de realizar em resposta a entradas específicas. Elas definem o comportamento do sistema sob diferentes condições e especificam as interações entre o sistema e seus usuários. 

01. O sistema deve permitir a renovação de empréstimos, respeitando as regras do domínio.
02. O sistema deve enviar e-mails de aviso quando a devolução estiver próxima do vencimento.
03. O sistema deve bloquear novos empréstimos para usuários com multas pendentes.
04. O sistema deve manter um histórico acessível de empréstimos e devoluções para cada usuário.
05. *... continua*

🌲Requisitos Não Funcionais

Os requisitos não funcionais ==descrevem as qualidades ou características do sistema== que não estão diretamente relacionadas às funcionalidades específicas, mas sim aos atributos de qualidade do sistema. Eles especificam restrições, limitações e critérios de desempenho que o sistema deve atender para ser considerado satisfatório.

01. O sistema deve estar disponível 24 horas por dia, 7 dias por semana.
02. O tempo de resposta para qualquer busca não deve ultrapassar 2 segundos.
03. O sistema deve suportar até 500 usuários simultâneos sem perda de desempenho.
04. Os dados dos usuários devem ser armazenados de forma criptografada.
05. A interface do sistema deve ser compatível com navegadores modernos e dispositivos móveis.
06. O sistema deve seguir os padrões de acessibilidade WCAG 2.1.
07. *... continua*

##### 🌵Técnicas para a Elicitação

🌲Interativas

- Entrevistas
- Workshops
- Prototipagem
- Observação do Usuário
- Questionários

🌲Obstrutivas

- Análise de Documentação existente
- Análise de Registros e Logs
- Estudos de Casos e Cenários
- Análise Competitiva

#### 🌱Especificação de Requisitos

Os diferentes tipos de requisitos são especificados em diferentes tipos tipos de documento

- Documentação de definição de requisitos → *requisitos funcionais, não funcionais e protótipos de tela*
- Documentação de Especificação de requisitos → *visão geral do produto, módulos do sistema, modelos de caso de uso e diagramas de atividade*

#### 🌱Validação de Requisitos

A validação dos requisitos dedica-se a mostrar que os requisitos realmente definem o sistema que o usuário deseja. Estão relacionadas com a descoberta de problemas com os requisitos. O custo de correção de um problema de requisitos é muito maior do que a correção de erros de projeto e de codificação.