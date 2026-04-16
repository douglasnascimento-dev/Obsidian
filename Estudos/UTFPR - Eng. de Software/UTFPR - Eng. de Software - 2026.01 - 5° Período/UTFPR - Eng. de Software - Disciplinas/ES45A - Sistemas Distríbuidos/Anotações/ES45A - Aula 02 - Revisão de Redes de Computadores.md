---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
banner: Imagens/Redes de Computadores.png
---



# :LiAlbum: Redes de Computadores

Os Sistemas Distribuídos dependem diretamente da Infraestrutura de rede para comunicação entre processos e serviços. Diversos aspectos impactam os Sistemas Distribuídos, como:
- **Latência:** O Tempo necessário para que mensagens trafeguem entre nós do sistema;
- **Throughput:** A Quantidade de Dados que podem ser transmitidos em um Intervalo de Tempo;
- **Confiabilidade:** A Possibilidade de perdas de pacotes ou falhas de comunicação;
- **Escalabilidade:** Impacto do Aumento do número de nós e do volume de mensagens; e
- **Partições de Rede:** Situações em que subconjuntos de nós deixam de se comunicar.

## 🌿Conceitos 

**RTT (Round Trip Time):** É o tempo necessário para uma mensagem ir de um nó a outro e retornar ao emissor; 
**Throughput:** A Quantidade de Dados que podem ser transmitidos em um Intervalo de Tempo;
**Clock Skew:** A Diferença entre os relógios de máquinas distintas em um sistema distribuído; e 
**Network Partiton:** É a Situação em que um subconjunto de nós perde competitividade com outro subconjunto de rede. 

## 🌿Topologia

É o padrão no qual os equipamentos de uma rede estão conectados entre si e a outros componentes. É o Projeto da Estrutura da Rede de Computadores de uma Empresa ou Instituição.
- **Topologia Física:** Refere-se á forma como os cabos e dispositivos estão conectados na rede, incluindo a distância, localização e o tipo de conexão
- **Topologia Lógica:** Descreve como os dispositivos acessam o meio de comunicação e como os dados circulam na rede. Esse comportamento é determinado pelo mecanismo de acesso ao meio (MAC).

## 🌿Tecnologias de Rede

Tecnologia de Rede utilizam diferentes mecanismos de acesso ao meio. Dois exemplos clássicos de topologias lógicas são **Broadcast** e **Passagem de Token**.
- **Ethernet:** Originalmente utilizava um meio compartilhado com CSMA/CD, em topologia física de barramento. Nas redes modernas, utiliza switches e enlaces ponto-a-ponto em topologia física estrela;
- **Token Ring:** É a Tecnologia baseada em passagem de token, na qual os dados circulam em uma anel lógico e cada dispositivo recebe e retransmite os dados para o próximo dispositivo;
- **FDDI - (Fiber Distributed Data Interface):** A Tecnologia baseada em Fibra Óptica que utiliza um anel duplo para transmissão de dados, permitindo redundância e maior confiabilidade da rede; e
- **ATM - Asynchronous Transfer Mode):** A Tecnologia orientada à conexão que transmite dados em células de tamanho fixo (53 bytes), projetada para suportar tráfego de voz, vídeo e dados com controle de Qualidade de Serviço (QoS).

## 🌿Largura de Banda e Latência

- **Largura de Banda:** Refere-se à Quantidade de Dados que podem ser transmitidos por uma rede em um determinado período de tempo, geralmente medida em bits por segundo (bps).
	- Quanto maior a largura de banda, mais dados podem ser transmitidos em um determinado período de tempo. A Largura de Banda é caracterizada pela tecnologia de rede utilizada, o número de dispositivos conectados à rede e o uso simultâneo da rede.
- **Latência:** Refere-se ao Tempo que leva para um pacote de dados ser transmitidos de um ponto a outro na rede.
	- A Latência é geralmente medida em milissegundos (ms) e é impactada por fatores como distância entre dispositivos, qualidade da conexão e velocidade de processamento. Latência alta pode ocasionar atrasos na comunicação entre dispositivos, afetando a qualidade do serviço e a experiência do usuário em aplicativos interativos, como jogos on-line e videoconferências. 

## 🌿Métricas

- **Jitter:** É a diferença entre os tempos de chegada de pacotes de dados de um determinado ponto da rede; 
- **Perda de Pacotes:** É a porcentagem de pacotes dados que não são recebidos;
- **Disponibilizados:** É a medida da capacidade de uma rede de estar disponível e funcionando corretamente durante um determinado período de tempo;
- **Confiabilidade:** É a medida da capacidade de uma rede de entregar pacotes de dados corretamente e sem erros; e 
- **Escalabilidade:** É a medida da capacidade de uma rede de lidar com um aumento no tráfego de dados ou no número de dispositivos. 

## 🌿Modelo OSI

Busca garantir:
- Comunicação fim a fim entre sistemas computacionais;
- Dividir as Redes de Computadores em 7 camadas;
- Permitir que protocolos implementam funcionalidades direcionadas a uma determinada camada;
- Não especificar protocolos exatos, mas descrever o que cada camada deve fazer; e
- Permitir comunicação entre máquina heterogêneas, independentemente da tecnologia utilizada. 

## 🌿Protocolos

É um conjunto de regras que definem como a comunicação entre dispositivos deve ocorrer e é uma forma de padronizar a comunicação para garantir a interoperabilidade entre sistemas distintos.

## 🌿TCP

É um Protocolo da Camada de Transportes do Modelo OSI. É o responsável por garantir a entrega confiável de dados entre dois dispositivos em uma rede. O TCP estabelece uma conexão entre os dispositivos e então separa os dados em segmentos para a a transmissão. Essas informações são usadas pelo TCP para garantir que os dados sejam transmitidos com sucesso entre os dispositivos. O TCP é um protocolo orientado à conexão, o que significa que uma conexão é estabelecida antes da transmissão dos dados. 

## 🌿RIP

É um Protocolo de Roteamento Interno para Sistemas Autônomos. O Software do RIP utiliza a lista de redes para atualizar a tabela de Encaminhamento Local

## 🌿IEEE

É uma Organização profissional internacional dedicada ao avanço da tecnologia relacionada à eletricidade, eletrônica e computação. São importantes para garantir interoperabilidade entre dispositivos de diferentes fabricantes e compatibilidade entre redes. Fornecem diretrizes para implementação e segurança, contribuindo para a qualidade e a confiabilidade da rede. A Padronização é fundamental para Interoperabilidade e Escalabilidade das Redes de Computadores.

- **IEEE 802** - Padrões para Redes Locais
	- **IEEE 802.1X** - Padrão de Autenticação de Porta baseado em EAP;
	- **IEEE 802.11** - Conjunto de Padrões para Redes sem Fio (Wi-Fi); e 
	- **IEEE 802.3** - Padrão para Ethernet.

## 🌿Padrão 802.11

- **LLC** - Protocolo que implementa serviços de transmissão confiáveis e não confiáveis; e
- **MAC** - Protocolo que depende do tipo de meio físico e da tecnologia de comunicação, sendo necessário quando o meio de transmissão é compartilhado.

## 🌿Qualidade de Serviço

O Objetivo é o provisionado da rede, projetar a rede para fornecer um nível específico de serviço (QoS - Quality of Service). Diferentes mecanismos podem ser utilizados para fornecer QoS em Redes de Computadores:
- **IntServ (Integrated Services)**
	- Reserva de Recursos de Rede
	- Utiliza o Protocolo RSVP
	
- **DiffServ - Differentiated Services**
	- Classificação e Priorização de Pacotes
	- Utiliza o campo DSCP no cabeçalho do IP
	
- **Traffic Shaping en Traffic Policing**
	- Controle de Taxa de Transmissão
	- Token Bucket e Leaky Bucket


## 🌿Modelo Cliente - Servidor

Ocorre entre dois tipos de entidades: O **Cliente** e o **Servidor**. O Cliente envia uma solicitação de serviço ao Servidor, enquanto o Cliente fornece o serviço solicitado. O Cliente e o Servidor podem estar em máquinas diferentes, conectadas por uma rede. O Modelo Cliente-Servidor é amplamente utilizado em Aplicações como Servidores de Arquivos, Servidores de E-mail e Servidores Web. 

## 🌿Modelo P2P

No modelo P2P, todos os computadores da rede são iguais e podem agir tanto como clientes quanto como servidores. Os nós da rede se conectam diretamente uns aos outros, sem a necessidade de um servidor centralizado. Isso permite que a rede seja mais distribuída e descentralizada, aumentando sua resiliência e disponibilidade. O Modelo P2P é amplamente utilizado em aplicações como compartilhamento de arquivos, entre outras.


