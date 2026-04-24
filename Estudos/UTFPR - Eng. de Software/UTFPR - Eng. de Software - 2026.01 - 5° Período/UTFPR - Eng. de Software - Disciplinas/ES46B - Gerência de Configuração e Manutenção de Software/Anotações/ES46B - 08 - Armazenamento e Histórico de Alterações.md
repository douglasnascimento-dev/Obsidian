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


## 🌿 Armazenamento de Configuração

Um artefato não é apenas código, mas sim qualquer elemento que impacta o sistema. Na GCS, o armazenamento não trata-se de apenas salvar arquivos em uma pasta na nuvem, mas sim, de ter um sistema estruturado para armazenar, catalogar e proteger todos os **Itens de Configuração** do projeto ao longo de todo o seu ciclo de vida. 

### 🎋Repositório de Controle de Versão

Armazena os arquivos de texto, os códigos-fonte e os scripts estruturados. Ele foca na evolução linha a linha. Ao mudar uma palavra no código-fonte, ele armazenas apenas a diferença, otimizando espaço e permitindo rastreabilidade extra. Usando em Plataformas como o Git com o GitHub. 

### 🎋 Repositório de Configuração

Armazena os binários pesados, bibliotecas compiladas, pacotes e imagens de contêineres. É separado, pois ferramentas como o Git são péssimas, não há sentindo em versionar um .exe de 500mb a cada mudança de linha. O Repositório de artefatos armazena a versão final gerada após o processo de Build. 

### 🎋CMDB - Banco de Dados de Gerenciamento de Configuração

Armazena os metadados sobre a infraestrutura e como os softwares se conectam a ela. Mias usado em operações de TI

## 🌿Critérios para Segurança de Requisitos

- **Imutabilidade do Histórico** 
	- Uma vez que uma versão foi consolidada, ela não pode ser secretamente alterada ou apagada. 

- **Rastreabilidade e Auditoria**
	- O Sistema registra automaticamente os metadados da configuração, contendo informações de quem alterou, o que foi alterado, quando ocorreu e o porque ocorreu.

- **Controle de Acesso e Segurança**
- 
