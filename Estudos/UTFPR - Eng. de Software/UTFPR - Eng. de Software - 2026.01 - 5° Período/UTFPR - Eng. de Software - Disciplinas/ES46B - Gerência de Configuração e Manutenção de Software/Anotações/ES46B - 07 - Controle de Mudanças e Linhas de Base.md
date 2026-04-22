---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
Anotações: []
Nota Final: "0.0"
Avaliações: []
---

> [!banner-icon] :LiBookMarked: Aula 18.03.2026


## 🌿 Controle de Mudança

É o processo responsável por garantir que toda alteração em um sistema seja feito de forma **planejada, analisada e documentada.**

Isso significa que nenhuma mudança deve acontecer 'do nada' ou 'direto no código'. Antes de qualquer modificação, é necessário entender: 'Por que essa mudança é necessária?', 'Qual o impacto ela pode causar?' e 'Quem deve aprovar essa alteração?'

Deve sempre seguir um fluxo estruturado. Primeiro, surge uma necessidade de alteração, chamada de **solicitação de mudança**. Depois disso, essa mudança é analisada. Em seguida, ocorre a decisão: de **aprovar**, **rejeitar** ou **adiar**. 

Se aprovada, a mudança é implementada, testada e documentada. Por fim, o sistema é atualizada de forma controlada. Esse processo garante que nenhuma alteração seja feita sem conhecimento e sem avaliação. 

## 🌿Linha de Base - Baseline

A Linha de base representada um ponto específico do sistema que foi: revisado, aprovado ou considerado estável. Ela funciona como uma referência confiável. Sem uma baseline, não é possível: saber qual versão está correta, conseguir voltar para versões estáveis ou controlar a evolução. 

Com a baseline, é possível ter controle das versões, comparar as mudanças e manter a estabilidade durante um projeto. Então, existem diferentes tipos de baseline ao longo do desenvolvimento e cada uma delas marca um momento crítico de estabilidade e validação. 

### 🎋Baseline de Requisitos

É a fundação. É o momento em que o cliente (ou o PO) e a equipe técnica concordam com o que será construído. Os requisitos são documentados, revisados e formalmente aprovados. 

### 🎋Baseline de Desenvolvimento 

Ocorre durante a fase de construção. É o momento que os desenvolvedores juntam seus códigos individuais e geram uma versão do sistema que compila sem erros críticos. É o código considerado estável o suficiente para ir para a equipe de testes (QA).

### 🎋Baseline de Release

É o pacote de entrega, a linha de chegada de um ciclo. É a versão final, polida, testada e homologada que será entregue o usuário final (produção). Uma baseline de release não contém apenas código.

Ela é um pacote fechado que inclui o código executável, os manuais do usuário, as notas de atualização (release notes), scripts de banco de dados e arquivos de configuração. **Ela é imutável**. 

## 🌿Controle e Baseline

A baseline define um estado estável do sistema. Já o controle de mudanças define como sair desse estado para um novo estado, sem perder o controle. 

Sempre haverá um baseline (versão confiável), surge a necessidade de mudança, a mudança é analisada e aprovada, o sistema é modificado e uma nova baseline é criada. Ou seja, o sistema evolui de forma controlada, sempre mantendo pontos seguros. 