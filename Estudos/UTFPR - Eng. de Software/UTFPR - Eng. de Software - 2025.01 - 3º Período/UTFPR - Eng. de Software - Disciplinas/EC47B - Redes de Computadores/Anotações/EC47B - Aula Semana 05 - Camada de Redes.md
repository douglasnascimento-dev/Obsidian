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
> [!banner-icon] 🌿Semana 03
### 🌿Funções

Transportar pacotes entre os sistemas finais de rede por meio de três funções importantes
- Determinação de Caminhos → A Escolha de rota pelos pacotes entre a origem e o destino
- Comutação → Mover pacotes entre as portas de entradas e saídas
- Estabelecimento de Conexão → Algumas arquiteturas exigem o estabelecimento de circuitos virtuais antes da transmissão de dados.

### 🌿Serviços

#### 🌱Redes de Circuitos Virtuais

É onde se estabelece conexão antes do envio de dados, e após isso é liberado a conexão. Cada pacote transporta um identificar, onde cada roteador mantém informações do estado para a conexão que passa por ele. A Sinalização é usada para estabelecer, manter e encerrar os Circuitos Virtuais.

*Vantagens → Orientado para o desempenho, a banda passante e os recursos do roteador podem ser alocados por VC, usadas em aplicações de tempo real, ótimo para conversação humana, sistemas finais mais simples, a complexidade fica dentro da rede*

#### 🌱Redes de Datagramas

Não estabelece conexões, e o roteador também não guardas informações. Todos os pacotes, necessitam de pacotes de destino, é utilizada na internet

*Vantagens → É um serviço elástico, quando não há requisitos de atraso. Sistemas finais inteligentes, podem adaptar-se realizar controle e recuperação de erros, a rede é mais simples, complexidade fica nos sistemas finais.*

### 🌿Endereçamento IPv4

Usado nas redes de Datagramas, é identificador de 32 bits para interfaces de roteadores e host

- EX: 172.16.254.1 | Parte representa a rede e outra parte representa o host

**Interface** → conexão entre roteador ou host e enlace físico. O Roteador tem múltiplas interface, Hosts podem ter múltiplas interface, mas geralmente possuem uma. Os endereços IP são associados com interfaces, não com o host ou com o roteador.

**Rede** → As interfaces de dispositivos com a mesma parte de rede no endereço IP podem fisicamente se comunicar sem o auxílio de um roteador. Os primeiros 24 bits de um IP são o endereço de rede.  

**Como encontrar uma rede?** Separe cada interface de roteadores e hosts, crie ilhas de redes isoladas, use a técnica de nuvens. Se obtém uma rede com seis redes interconectadas

#### 🌱Classes de Endereço - Classful

Uso ineficiente do espaço de endereçamento, exaustão de espaço de endereços

- **Classe A** → 0 - Rede . Host . Host . Host
- **Classe B** → 10 - Rede . Rede . Host . Host
- **Classe C** → 110 - Rede . Rede . Rede . Host

- **Classe A** → Entre 65.536 hosts até 16.581.375 hosts
- **Classe B** → Entre 256 hosts até 65.536 hosts
- **Classe C** → Até 254 hosts

#### 🌱Classes de Endereço - CIDR

A Porção de endereço de rede tem tamanho arbitrário. Formato de endereço: End.End.End.End / tamanho em bits da parte de rede.

Os endereços de rede são facilmente identificados aplicando-se as ==Máscaras de Rede==. 

- **Máscara de Rede** → Formada por 32 bits no mesmo formato do IP. Utilizada para definir a rede à qual pertence o computador. Por meio de uma operação AND entre o endereço do host e a máscara de rede, obtém-se a rede à qual o host pertence.

	- Bit 1: representa a parte do endereço usada para a rede
	- Bit 0: representa a parte do endereço usada para as máquinas/hosts  

### 🌿Sub-redes

A Estrutura de endereçamento IP pode ser mudada localmente, a critério do administrador da rede. O Número de host é divido em número da sub-rede e o número do host. O Número IP é agora interpretado como:

Parte de Rede > Parte de Sub-rede > Parte de Host

Ex: Uma rede de Classe B

16 Bits > Rede
16 Bits > Host

Então, se pode fazer:

- O Primeiro byte é o número da sub-rede e o segundo byte é o número do host;
- 2<sup>8</sup> > 256 sub-redes disponíveis 
- 2<sup>8</sup> > 254 hosts em cada sub-rede (0 e 255 são reservados)
- Máscara: 255.255.255.0

Ao dividir uma rede em sub-redes significa usar a máscara de sub-rede para dividir a rede em segmentos menores, ou sub-redes, mais eficazes e mais fáceis de gerenciar, gerando assim números maiores de redes pequenas. Busca reduzir o desperdício de redes. Em uma rede grande é normal ter enlaces entre roteadores

**Criando sub-redes** → 10.0.0.0/8 > 10.0.0.0/16 | Isso criará 256 sub-redes, somente mudando a máscara

- O Endereço de Host com todos os bits como zero é para o **endereço de rede**. Sempre par.
- O Endereço de Host com todos os bits como um é para o **broadcast**. Sempre impar.
- O Endereço de Broadcast é exatamente o endereço da próxima sub-redes menos um.

