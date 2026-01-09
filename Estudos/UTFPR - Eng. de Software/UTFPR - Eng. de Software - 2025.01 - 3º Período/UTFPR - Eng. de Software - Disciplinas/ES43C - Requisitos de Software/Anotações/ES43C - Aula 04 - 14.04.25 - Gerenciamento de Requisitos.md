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
> [!banner-icon] 🌿Aula 14.04.25

## 🌳Gerenciamento de Requisitos

Durante o processo de desenvolvimento de um software é natural o surgimento de novos requisitos e a necessidade de mudanças nos requisitos. Para isso, o gerenciamento é o processo de compreensão e controle das mudanças nos requisitos do sistema. É um conjunto de atividades que auxiliam na identificação, controle, rastreabilidade e organização dos requisitos de um sistema. 

### 🌿Causas das Mudanças

- Erros não percebidos;
- Os clientes passam a entender melhor suas necessidades;
- Modificação na Legislação;
- Novas tecnologias;
- Requisitos incompletos;
- Mudança no ambiente em que o sistema está instalado;
- Mudanças Organizacionais;

### 🌿Impactos das Mudanças

- Alterações em requisitos podem implicar em mudanças de artefatos de sistema, de código, casos de testes.
- Alterações com baixa prioridade podem ser realizadas antes de alterações com prioridades mais altas.
- Muitas modificações sem necessidade podem ser aprovadas.
- Alteração no cronograma e custo.

### 🌿Requisitos Estáveis e Voláteis

- *Estáveis* → são relacionados com a essência do sistema, com o domínio e consequentemente mudam mais devagar
- *Voláteis* → vão ser alterados conforme a produção do sistema, podem ser impactados por políticas governamentais, por exemplo.
	- *Mutáveis* → mudam devido a mudanças no ambiente no qual o sistema opera, como leis tributárias.
	- *Emergentes* → surgem a medida que a compreensão do cliente se desenvolve. Ao longo do ciclo, pode-se surgir novos requisitos.
	- *Consequência* → resultam da introdução no ambiente do usuário, o que faz com que o cliente perceba a necessidade de novos requisitos.
	- *Compatibilidade* → são os requisitos que dependem de outros equipamentos, sistemas ou elementos.

### 🌿Planejamento 
 
1. Identificação de requisitos
2. Processo de Gerenciamento de Mudanças
3. Políticas de Rastreabilidade
4. Ferramentas de Apoio ao Gerenciamento de Requisitos

#### 🌱Identificação de Requisitos

Um pré-requisito para a gestão de requisitos é que todo requisito deve ter uma identificação única. Cada requisito deve ser identificado unicamente para poder ser comparado com outros requisitos e usado em avaliações de rastreabilidade.

- 🌵*Remuneração dinâmica* → Alguns sistemas de processamento de texto permitem a renumeração automática de parágrafos e a inclusão de referências cruzadas
- 🌵*Identificação Simbólica* →  Os requisitos podem ser identificados através de um nome simbólico que está associado ao próprio requisito
- 🌵*Identificação do Registro do Banco de Dados* → Quando um requisito é identificado, ele é registrado em um banco de dados, sendo atribuído um identificador.

#### 🌱Gerenciamento de Mudanças

Está relacionado com os procedimentos, processos e padrões que serão usado para gerenciar as mudanças aos requisitos do sistema. As políticas de gerenciamento de mudanças poderão incluir:
- O Processo de solicitação de mudanças e a informação necessária para processar cada solicitação de mudança.
+ O Processo usado para analisar o impacto e o custo da mudança e informações associadas ao rastreamento.
- O Suporte de software necessário para o processo de controle de Mudança.

#### 🌱Rastreabilidade de Requisitos 

É a possibilidade de rastrear os requisitos ao longo de todo o ciclo de vida do sistema. É o processo de identificar o ele que envolve um determinado requisito para que seja possível rastrear a sua origem. Suas vantagens:
- Compreender a evolução dos artistas
- Resolver conflitos entre requisitos
- Verifique os requisitos nos processos de testes
- Corrigir defeitos através da identificação do componente de origem do erro 
- Analisar o impacto das mudanças nos requisitos
- Gerenciar riscos e reutilização de componentes
- Compreender os aspectos do projeto 
- Estimar variações em cronogramas e em custos do projeto

#### 🌱Ferramentas 

O gerenciamento de requisitos envolve a coleta, armazenamento e manutenção de grande quantidade de informação. 