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


## 🌿 Relatório de Status

É o Painel de Controle do seu projeto de software. Se o controle de mudanças decidir o que vai mudar, o Relatório de Status registra o que aconteceu, quando aconteceu e com quem está a responsabilidade agora. 

Um bom sistema de **Status de Configuração** deve ser capaz de responder, em tempo real. O **Relatório de Status** responde perguntas, como:
- 'Qual é a versão atual do sistema em produção?'
- 'Quantos bugs de severidade alta foram abertos na última Sprint? e quantos já foram corrigidos?'
- 'Quais mudanças foram aprovadas pelo comitê, mas ainda não foram codificadas?'
- 'O Código da Feature X já foi integrado na branch principal?'

Na Engenharia de Software moderna, não fazemos relatórios de status preenchendo planilhas do Excel manualmente. Para isso, pode ser usadas ferramentas, como:
- Jira/Azure DevOps;
- GitLab/GitHub; e
- SonarQube.

Deve conter:
- **Itens de Configuração**
	- A Lista de ICs;
	- Versões Atuais; e
	- Localização.
- **Mudanças**
	- Solicitação de Mudanças;
	- Status; e
	- Responsáveis.
- **Releases**
	- Versões Liberadas;
	- Histórico de Builds; e
	- Ambientes.

## 🌿Auditoria de Configuração

É o último selo de garantia de qualidade antes de fazer o deploy do sistema para o cliente. A Auditoria garante que está sendo entregado a coisa certa e que nada foi esquecido fora do pacote. 

### 🎋Funcional 

A FCA foca no **Comportamento**. Ela serve para provar que o software faz exatamente aquilo que os requisitos originais exigiram. Deve verificar se todas as especificações de requisitos e desempenho foram atingidos, ao cruzar a Matriz de Rastreabilidade com os resultados dos Testes. 

### 🎋Física

A PCA foca na **Estrutura**. Ela não se importa mais se o software funciona, mas sim se todos os itens necessários para rodar e manter o software estão presentes na entrega. Deve verificar a completude e a exatidão do pacote que será entregue, ao verificar se o código-fonte corresponde à versão compilada, se os manuais estão atualizados, e se os scripts de banco de dados estão inclusos. 

## 🌿Ciclo

O Cliente pede uma mudança > O Desenvolvedor escreve o código e o liga á solicitação