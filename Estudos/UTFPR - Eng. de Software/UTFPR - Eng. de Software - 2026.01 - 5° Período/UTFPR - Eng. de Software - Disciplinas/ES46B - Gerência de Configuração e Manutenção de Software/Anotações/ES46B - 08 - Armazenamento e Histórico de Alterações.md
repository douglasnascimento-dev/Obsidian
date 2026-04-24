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

- **Imutabilidade do Hiestórico** 
	- Uma vez que uma versão foi consolidada, ela não pode ser secretamente alterada ou apagada. 

- **Rastreabilidade e Auditoria**
	- O Sistema registra automaticamente os metadados da configuração, contendo informações de quem alterou, o que foi alterado, quando ocorreu e o porque ocorreu.

- **Controle de Acesso e Segurança**
	- Nem todos os desenvolvedores devem ter permissão para alterar tudo. Deve permitir que lideres consigam proteger a branch principal do código, exigindo revisões antes de serem aceitas. 

- **Recuperação de Desastres** 
	- O Armazenamento deve ser descentralizado ou possuir rotinas de backup robustas. 

- **Gestão de Concorrência**
	- O Armazenamento deve fornecer mecanismos para lidar com a situação onde dois desenvolvedores tentam eviar configurações para o mesmo arquivo ao mesmo tempo. 

## 🌿Workspace Vs. Repositório

O **Repositório** é local oficial, imutável e centralizado onde as configurações homologadas residem. Já o **Workspace** é um espelho do repositório na máquina do desenvolvedor. 

## 🌿Histórico de Alterações

É uma funcionalidade fundamental em sistemas digitais que registra cronologicamente todas as manifestações feitas em um arquivo, documento, código ou banco de dados. Deve possuir:

- Identificador de Versão;
- Data e Hora;
- Autor;
- Descrição; e 
- Alteração em si.

Permite que reverter um documento em caso de erro, auditar quem e o que foi modificado, os membros vejam a evolução um do outro, ajuda a manter os dados íntegros e ajuda a analisar a evolução de um projeto ao longo do tempo. 

## 🌿 RollBack e Recuperação

Esses elementos foram os mecanismos de segurança que garantem que os dados permanecem consistentes, íntegros e disponíveis, mesmo diante de erros humanos, falhas de software ou desastres de hardware

- **Rollback** é a operação que reverte todas as modificações feitas por uma transação que ainda não foi confirmada
	- **Explícito** - Acontece quando o próprio programador ou o usuário percebe um erro na lógica ou decide não prosseguir e emite o comando de Rollback.
	- **Implícito** - Acontece quando o próprio SGBD cancela a transação devido a uma transação devido a um erro fatal. 

- **Recuperação** é o processo de restaurar um BD para um estado consistente e íntegro após uma falha no sistema. Quando o sistema cai, ele perde tudo o que estava na memória RAM. Então, dados confirmados que estavam apenas na memória RAM podem ser perdidos. 

Ou seja, o **Rollback é uma técnica** e a **Recuperação é o objetivo**. 

## 🌿Rastreabilidade

É a capacidade de seguir o rastro de um item, serviço ou dado ao longo de toda a sua vida útil. É a capacidade de criar e acompanhar elos de ligação entre diferentes artefatos gerados ao longo de todo o Ciclo de Vida do Desenvolvimento de Software. 

### 🎋Rastreabilidade para a Frente - Forward

É a capacidade de seguir um requisito do início (a necessidade) até o fim (o código e o teste que o valida). Garante que tudo que foi solicitado foi implementado e busca prevenir o esquecimento de funcionalidades. 

### 🎋Rastreabilidade para Trás - Backward

É a capacidade de olhar para um artefato final e rastrear sua origem até o requisito que o justificou. Busca entender o propósito e a justificativa de cada ação e combater códigos sem propósitos claros, além de facilitar a manutenção. 