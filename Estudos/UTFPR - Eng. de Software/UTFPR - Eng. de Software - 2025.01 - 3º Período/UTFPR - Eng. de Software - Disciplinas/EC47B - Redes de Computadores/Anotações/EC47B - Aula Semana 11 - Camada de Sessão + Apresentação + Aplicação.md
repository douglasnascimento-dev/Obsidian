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


![[Redes de Computadores.png|banner]]
> [!banner-icon] 🌿Semana 10

## 🌳Camada de Sessão

Cuida dos processos que controlam a transferência dos dados cuidando dos erros e administrando registros das transmissões
- Serviços como:
	- Controle de Diálogo
	- Gerenciamento de Tokens
	- Sincronização

## 🌳Camada de Apresentação

Serve como o tradutor de dados para a rede: está ligada à semântica e à sintaxe das informações transmitidas
- Gerencia estruturas de dados abstratas
- É represável pela compreensão e criptografia dos dados

## 🌳Camada de Aplicação

Engloba protocolos que realizam a comunicação fim-a-fim entre aplicações/processos de diferentes computadores

Contém muitos protocolos comumente necessários pelos usuários. Frequentemente nos referíamos às camadas de Sessão, Apresentação e Aplicação simplesmente como Camada de Aplicação

Programas que executam em diferentes sistemas finais e comunicam-se através da rede. Programas não relacionados ao núcleo da rede. 

### 🌿Arquiteturas

- Cliente-Servidor
- P2P
- Híbridos

#### 🌱Arquitetura Cliente-Servidor

- Servidor → oferece um serviço, sempre ligado, escalabilidade, IP permanente, 
- Cliente → se comunica com o servidor, pode estar comunicando intermitentemente, pode ter IP dinâmicos, não se comunica diretamente com outro clientes. 

#### 🌱P2P

Não há um servidor sempre ligado. Sistemas finais arbitrários se comunicam diretamente. Pares estão conectados intermitente e IPs dinâmicos. Altamente escalável. Difícil gerenciamento. 

#### 🌱Híbridos

Um hibrido de cliente-servidor e P2P. Como o Napster e Instant messaging

### 🌿Processos

Programas que executam num hospedeiro. Processam se comunica usando comunicação entre processos definida pelo SO. Processos em hospedeiros distinto se comunicam trocando mensagens através da rede. 

- Processo cliente → processo que inicia a comunicação
- Processo servidor → processo que espera para ser contatado

Um Socket é análogo a uma porta. Cada host possui um endereço IP único de 32 bits. Cada processo possui uma porta com 16 bits. 

Assim como os protocolos de redes, as aplicações também precisam definir como as mensagem precisam ser trocadas.
- Protocolos de domínio público → HTTP, HTTPS e SMTP
- Protocolos proprietários → KaZaA e Skype

É necessário proteção contra a perda de dados, temporização baixa ou constante e largura de banda necessária. 

## 🌳RTP - Real time Transport Protocolo

Fornece serviços de transporte de streamings para aplicações multimídias. 
- Identificação do payload.
- Numeração de sequência.
- Timbre de hora.
- Monitoramento da rede e gerenciamento de QoS

Utiliza o UDP para a transmissão de seus pacotes.  Uso de perfis para codificar e decodificar diferentes formatos de áudio e vídeo. Por meio do timestap é possível detectar a diferença de tempo entre os pacotes, além da sincronização de vários fluxos. Além do TRP, também é usado o RTCP que monitora a rede