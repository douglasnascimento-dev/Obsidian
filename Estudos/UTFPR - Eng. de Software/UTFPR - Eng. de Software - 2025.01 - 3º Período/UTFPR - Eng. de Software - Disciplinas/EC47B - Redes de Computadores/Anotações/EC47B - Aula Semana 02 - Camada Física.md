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

![[Redes de Computadores.png|banner]]
> [!banner-icon] 🌿Semana 02
## 🌳Funções da Camada Física

Estão entre as funções da camada física, estabelecer a conexão física entre máquinas ligas em rede, especificar interfaces mecânicas e elétricas, executar tarefas de sincronização para a rede e converter informações de bits em sinais que são passados pelos meios de transmissão.

### 🌿Dados Analógicos 

- Dados como áudio e o vídeo;
- Sinais como **valores contínuos** em um intervalo de tempo

### 🌿Dados Digitais

- Dados como arquivos armazenados em computador
- Sinais como **valores discretos** em um intervalo de tempo

### 🌿Sinais Analógicas

- Amplitude → magnitude;
- Frequência → número de ciclos por segundo;
- Fase → deslocamento da onda;
- Comprimento da Onda → distância mínima que o ciclo se repete;

### 🌿Tipos de Transmissão

- Analógico → *Telefone* → Analógico
- Digital → *Modem* → Analógico

- Analógico → *Codec* → Digital
- Digital → *Digital transceiver* → Digital

### 🌿Largura de Banda

É a diferença entre a maior e menor frequência que pode ser utilizada para a a transmissão. Pode ser uma limitação física ou imposta através de filtros.

A Largura de Banda é medida em MHz e a Taxa de transmissão é medida em Mbps. A Largura de Banda de um cabo pode ser definida em canais. As duas formas de utilizar a capacidade de um meio físico,  a **banda base** e a **banda larga**. 

#### 🌱Banda Base

Toda a largura é usada por um único canal. Essa tecnologia é frequentemente usada para transmissão digital

#### 🌱 Banda Larga

Esse modelo de transmissão, é caracterizado pela divisão da largura em múltiplos canais. Cada canal pode transmitir diferentes sinais analógicos. Por essa razão, redes de banda larga podem transmitir múltiplos sinais simultaneamente.

### 🌿Modelos de Transmissão

- *Simplex* → transmissão em apenas em um dos dois sentidos;
- *Half-duplex* → transmissão nos dois possíveis sentidos, porém apenas um de cada vez;
- *Full-duplex* → transmissão nos dois sentidos simultaneamente;

### 🌿Meios de Transmissão

- *Meios Guiados* → os sinais propagam em meios sólidos
	- Como o Fios de Cobres e Fibra Óptica
- *Meios não Guiados* → os sinais se propagam livremente
	- Como o Rádio e Satélite

#### 🌱Cabo Coaxial

Um dos primeiros tipos de cabos usados em redes. Tem como vantagem, sua blindagem o que permite que o cabo seja longo, mais barato e maior imunidade contra ruídos. Entretanto é pouco flexível, difícil em passar em conduítes e apresenta mau contato.

#### 🌱Par Trançado

Usado na ethernet. O Tipo UTP possui blindagem, já o STP não possui blindagem. Ele é trançado, para proteger de ruídos dos próprios cabos, a mesma informação circula em dois cabos, mas com a polaridade inversa, o que faz com que o campo eletromagnético seja neutralizado. Tem como vantagem, a possibilidade de usar o Full-duplex, o baixo preço e alta flexibilidade. Porem é mais suscetível a ruídos e tem limite de aproximadamente 100 metros

Possui dois modelos, onde existe dois fios, uma para transmissão de dados e outro para a recepção de dados. 

- 🌵*Straight-through*

	- Usado para ligar dispositivos diferentes;
	 - As duas pontas seguem o mesmo padrão;

- 🌵*Crossover*

	- Usado para ligar dispositivos iguais;
	 - As duas pontas seguem padrões diferentes;
	 - Porém, atualmente, os dispositivos utilizam protocolos que fazem a inversão automática, o que retira a necessidade de uso do cabo

#### 🌱Fibra Óptica

Utiliza sinais luminosos ao invés de sinais elétricos. Partes da Fibra:

- 🌵Núcleo → É o meio físico pelo qual os sinal vai passar, quanto maior, mais luz ele conduzirá, o núcleo é um duto contínuo de vidro ou plástico, possui alta largura de banda
- 🌵Casca → É uma camada fina que envolve o núcleo e serve como limite para conter as ondas luminosas, fazendo quase uma reflexão total, possui um indíce de reflaxão diferente
- 🌵Revestimento Primário → É a parte externa do cabo, faz a proteção mecânica

Possui uma largura de banda maior, uma baixa atenuação, o que resulta em distâncias maiores, maior segurança, porque diferente do cabo de cobre, ao acessar o núcleo o sinal irá parar de chegar no final, imunidade a interferências. É classificado conforme a luz é transmitida através da fibra

- *MMF - Multiple Mode Fiber* → Modo múltiplo ou Multimodo
	- Núcleo mais largo;
	- Vários feixes de luz ao mesmo tempo;
	- Utilizando por companhias telefônicas;
- *SMF - Simple Mode Fiber* → Modo único ou Monomodo
	- É necessário o alinhamento do feixe do luz;
	- Tem apenas um modo de propagação
	- Possui baixa flexibilidade

#### 🌱Radiodifusão

Utilizam ondas eletromagnéticos, assim como a luz, mas frequências menores, para a comunicação, é regularizada pelo governo

#### 🌱Wi-Fi

Utiliza o padrão IEEE 802.11, redes locais sem fio, possui uma infraestrutura para interconexão à rede cabeada. Toda a comunicação é feita entre o host e a estação base com um único salto

#### 🌱Rede Celular

Utiliza a infraestrutura da rede telefônica móvel para também realizar o envio de dados, cada estação base envia dados e recebe dados dos host móveis

## 🌳Multiplexação

É a transmissão simultânea de dois ou dois elementos de informação utilizando o mesmo meio de transmissão. Tenta maximizar o número de conexões. Métodos para Multiplexação

- *TDM - Divisão de Tempo* → Transmite para cada usuário por um determinado período
- *FDM - Divisão de Frequência* → Se divide a banda larga atribuindo um canal para cada usuário
	- *WDM - Divisão de comprimento de Onda* → Voltado pro meio digital
- *CDM - Divisão de Código* → Baseado em propriedades matemáticas

### 🌿FDM | Frequency Division Multiplexing

Irá ser designado uma faixa de frequência para cada canal. Os sinais serão modulados para uma frequência e após utilizando filtros se separa os código.

### 🌿WDM | Wavelength Division Multiplexing

É uma forma de FDM voltado para as fibras ópticas, utilizando diferentes comprimentos de onda.

### 🌿TDM | Time Division Multiplexing

Usuários se alternam em um rodízio, cada um utiliza toda a largura de bando por um pequeno período

## 🌳Dispositivos de Redes

### 🌿Repetidor

Um dispositivo que propaga sinais elétricos em uma conexa de dados, para estender o alcance da transmissão

### 🌿Hub

É um dispositivo que repete sinais recebidos, o dispositivo não sabe quais são os computadores conectados a ele, e não executa nem processamento

### 🌿Switch ou Comutador

Efetua a detecção dos endereços dos computadores conectados a ele. Quando recebe uma mensagem, a envia somente para o receptor desejado

### 🌿Roteador

É escolher um caminho para a informação chegar ao seu destino. Atua na camada de Rede

## 🌳Topologia

É a forma como os computadores se encontram computadores.

- *Topologia Física* → disposição física dos dispositivos
- *Topologia Lógica* → comportamento lógico da comunicação

### 🌿Topologia Física

Os arranjos topológicos possíveis dependem do tipo de rede. A topologia de uma rede, caracteriza o seu tipo, a sua eficiência e a sua velocidade. 

- *Ponto-a-Ponto* → dois pontos de comunicação, um em cada extremidade
- *Multiponto* → comportamento dos meio físico de transmissão

#### 🌱Meio Ponto-a-Ponto

- 🌵*Totalmente Interligada* → Sem roteamento, grande número de conexões, maior custo
- 🌵*Parcialmente interligada* → Necessita de roteamento, arranjo pode ser feita de acordo com o tráfego

### 🌿Topologia para LANs e MANs

Nessas redes, meios de transmissão de alta velocidade e baixa taxas de erro são empregadas para interligar estações. Topologias físicas mais empregadas: ==Estrela, Anel e Barramento==

#### 🌱Estrela

Comunicações sempre passam pelo nó central que geralmente é um hub ou switch, é a mais usada em redes de computadores. O nó central pode implementar mecanismo de segurança, conversão de protocolos, operações de diagnóstico de rede e compartilhamento de velocidade entre transmissor, porém pode se tornar o gargalo do sistema

#### 🌱Anel

É um caminho fechado, utilizando repetidores, usualmente ele é unidirecional. Quando a mensagem entra no anel e circula até ser retirada pelo nó de destino. Muito usada no backbones das redes

#### 🌱Barramento

Configuração multiponto com compartilhamento do meio físico, transmissão por difusão, cada nó tem acesso a todas as informações. Facilita a comunicação para aplicações com multicast. O Método de acesso, pode ser 'token passing', onde o controle é distribuído, e no 'polling' o controle é centralizado. A Confiabilidade desse tipo de topologia vai depender em muito da estratégia de controle. 

### 🌿Topologia adequada para WANs

As principais topologias físicas de rede geograficamente distribuídas são: Topologia totalmente ligada, em anel, parcialmente ligada. Ainda existem configurações híbridas, como anel-estrela, barramento-estrela, estrela-anel e as árvores de barramentos


