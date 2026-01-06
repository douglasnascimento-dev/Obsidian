---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Nota Final: "0.0"
---

![[Segurança da Informação.png|banner]]
> [!banner-icon] :LiBookMarked: Aula 18.08.2025
# :LiBookCopy: Anotações 

> por STALLINGS, William. Criptografia e segurança de redes: princípios e práticas - #Livro

Os algoritmos e protocolos de criptografia podem ser agrupados em quatro áreas principais: 
- **Encriptação simétrica**: utilizada para ocultar o conteúdo dos blocos ou fluxos contínuos de dados de qualquer tamanho, incluindo mensagens, arquivos, chaves de encriptação e senhas. 
- **Encriptação assimétrica**: usada para ocultar pequenos blocos de dados, como valores de função de hash e chaves de encriptação, que são usados em assinaturas digitais. 
- **Algoritmos de integridade de dados**: usados para proteger blocos de dados, como mensagens, de possíveis alterações. 
- **Protocolos de autenticação**: esses são esquemas baseados no uso de algoritmos criptográficos projetados para autenticar a identidade de entidades.

## :LiList: Pilares da Segurança da Informação

- **Tríade CIA**

	- **Confidencialidade**: preservar restrições autorizadas sobre acesso e divulgação de informação, incluindo meios para proteger a privacidade de indivíduos e informações privadas. Uma perda de confidencialidade seria a divulgação não autorizada de informação. 
	- **Integridade**: prevenir-se contra a modificação ou destruição imprópria de informação, incluindo a irretratabilidade e autenticidade dela. Uma perda de integridade seria a modificação ou destruição não autorizada de informação. 
	- **Disponibilidade**: assegurar acesso e uso rápido e confiável da informação. Uma perda de disponibilidade é a perda de acesso ou de uso da informação ou sistema de informação.

- **Demais pilares**

	- **Autenticidade**: garantir que a identidade de uma entidade (usuário, sistema ou a origem da informação) é genuína e pode ser verificada. Uma perda de autenticidade seria uma entidade maliciosa se passando por uma legítima com sucesso.
	- **Irretratabilidade (Não-repúdio)**: assegurar que uma parte em uma comunicação não possa negar a autoria de uma mensagem ou a realização de uma transação que tenha executado. Uma perda de irretratabilidade seria a incapacidade de provar que um determinado usuário realizou uma ação, permitindo que ele negue sua participação.
	- **Controle de Acesso**: A capacidade de limitar e dominar o acesso a sistemas e aplicações por meio de links de comunicação. Para que seja efetivo, cada entidade que tenta obter acesso precisa ser primeiramente identificada ou autenticada, de modo que os direitos de acesso possam ser ajustados ao indivíduo. Uma perda de controle de acesso significaria que uma entidade não autorizada obteve acesso a recursos restritos.

## :LiList: Arquitetura de Segurança OSI

- **Ataque à segurança**: qualquer ação que comprometa a segurança da informação pertencida a uma organização.
- **Mecanismo de segurança**: um processo (ou um dispositivo incorporando tal processo) que é projetado para detectar, impedir ou recuperar-se de um ataque à segurança. 
- **Serviço de segurança**: um serviço de processamento ou comunicação que aumenta a segurança dos sistemas de processamento de dados e das transferências de informação de uma organização. 

## :LiList: Ataques Passivos

- **Vazamento de Informações**: Uma conversa telefônica, uma mensagem de correio eletrônico e um arquivo transferido podem conter informações, sensíveis ou confidenciais. Desejamos impedir que um oponente descubra o conteúdo dessas transmissões.
- **Análise de Tráfego**: Se tivéssemos proteção por encriptação, um oponente ainda poderia conseguir observar o padrão dessas mensagens. Ele teria meios para determinar o local e a identidade dos interlocutores em comunicação e poderia observar a frequência e o tamanho das mensagens trocadas.

## :LiList: Ataques Ativos

- **Disfarce**: ocorre quando uma entidade finge ser outra diferente.
- **Repasse**: envolve a captura passiva de uma unidade de dados e sua subsequente retransmissão para produzir um efeito não autorizado.
- **Modificação de mensagens**: simplesmente significa que alguma parte de uma mensagem legítima é alterada, ou que as mensagens são adiadas ou reordenadas.
- **Negação de serviço**: impede ou inibe o uso ou gerenciamento normal das instalações de comunicação.

## :LiList: Serviços de Segurança

- **Autenticação**: O serviço de autenticação refere-se à garantia de que uma comunicação é autêntica.
- **Controle de acesso**: É a capacidade de limitar e dominar o acesso aos sistemas e aplicações por meio de links de comunicação.
- **Confidencialidade de dados**: é a proteção dos dados transmitidos contra ataques passivos. Com relação ao conteúdo de uma transmissão de dados, vários níveis de proteção podem ser elencados.
- **Integridade de dados**: Um serviço de integridade orientado à conexão, que lida com um fluxo de mensagens, garante que elas sejam recebidas conforme enviadas, sem duplicação, inserção, modificação, reordenação ou repasses. A destruição dos dados também está coberta sob esse serviço. Podemos fazer uma distinção entre o serviço com e o sem recuperação.
- **Irretratabilidade**: A irretratabilidade impede que o emissor ou o receptor neguem uma mensagem transmitida.
- **Serviço de disponibilidade**: Disponibilidade como a propriedade de um sistema ou de um recurso do sistema de ser acessível e utilizável sob demanda por uma entidade autorizada, de acordo com especificações de desempenho.