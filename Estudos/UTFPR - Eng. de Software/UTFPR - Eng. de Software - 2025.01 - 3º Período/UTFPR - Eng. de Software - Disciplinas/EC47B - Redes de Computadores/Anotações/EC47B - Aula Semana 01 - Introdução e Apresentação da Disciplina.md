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
> [!banner-icon] :LiNotebook: Semana 01

### 🌿Evolução dos Sistemas Computacionais

Nas primeiras décadas, os sistemas eram altamente centralizados. 
- Centralizados, fortemente acoplados
	- Execução em Batch;
	- Execução com tempo compartilhado;
- Descentralizados, fracamente acoplados
	- Compartilhamento de Recursos;
	- Processo Distribuído;

> Uma rede é uma coleção de computadores autônomos interconectados, aptos a trocar informações e compartilhar recursos.
> **Andrew Stuart Tanenbaum**

## 🌳Meios de Transmissão

Um Meio de transmissão corresponde ao meio físico que será utilizado para realizar a comunicação entre *hosts* e aplicações. O ==Núcleo de Rede== interconecta os sistemas finais, já as ==Redes de Acesso== são as redes que conectam um sistema final ao primeiro roteador de um caminho.

Os primeiros meios de transmissão foram a ==Linha digital de assinantes== (DSL) que se utilizava da Linha telefônica existente. Após isso veio os cabos coaxial, que pertenciam as Linha de Televisão a Cabo. Nessa evolução veio o ==Híbrido entre a Fibra Ótica e o Cabo Coaxial==, onde a informação ia por um cabo coaxial até um nó de fibra ótica que ai então passava a ser transmitido por um cabo de fibra ótica. Mais tarde o modelo híbrido foi abandonado, a fibra ótica se tornou dominante com o sistema =='Fiber to the Home'==, onde a fibra ótica vai diretamente até a casa. Ainda no interior das casas temos a ==Ethernet== que conecta dispositivos a curta distância.

Já na transmissão sem fio temos o ==Wi-fi== que conta com dezenas de ponto de acessos, normalmente no interior de residências e prédios. E o ==Acesso sem Fio a Longa Distância==, que conta com dezenas de quilômetros da estação-base e utiliza das mesma infraestrutura da telefonia celular.

## 🌳Categoria de Redes 

### 🌿Tipo de Transmissão

- 🌱 ==Redes de Difusão== | Todas estão conectadas por meio de um cabo único
	-  Canal único de transmissão, compartilhadas por todas as máquinas
	-  Mensagem recebida por uma máquina tem seu campo de enderenço verificado;
	-  Mensagem pode ser endereçada a todas as máquinas da rede ao mesmo tempo - *Broadcasting*
	-  Mensagem pode ser endereçada a alguma máquinas da rede ao mesmo tempo - *Multicasting*
- 🌱==Redes Ponto a Ponto== | Uma máquina está diretamente ligadas a uma fila de máquinas
	-  Canal exclusivo de comunicação para interligação de quaisquer duas máquinas na rede;
	-  Para ir de uma origem para um destino, uma mensagem pode ter de passar por uma ou mais máquina;
	- Múltiplas rotas, de diferentes custos, podem existir entre uma origem e um destino, de modo que se faz necessários os algoritmos de roteamento;

### 🌿Dispersão Geográfica

- 🌱Redes Pessoais
	-  ==PAN | Personal Area Network==
		-  Cobrem distâncias muito pequenas
		-  Destinadas a uma pessoa
			-  Ex: *Bluetooth*
- 🌱Redes de Maior Abrangência
	-  ==LAN | Local Area Network==
		- Dispersão limitada
		- Adotam o Padrão Ethernet e/ou Wi-fi
			- Ex: *Salas, Quartos*
	-  ==MAN | Metropolitan Area Network==
		- Projetadas para interconectar sistemas de uma cidade
		- Custo de transmissão é alta
		- Padrão SONET e/ou SDH
	-  ==WAN | Wide Area Network==
		- Grande dispersão geográfica, como países ou um continente
		- Transmissão menos confiável
		- Presença de Roteadores


## 🌳Modelo OSI/ISO

Se baseia em Sistemas Abertos que são aqueles que estão abertos a outros sistemas para comunicação. O Modelo OSI/ISO é definido em 7 camadas, do mais físico ao mais abstrato

7. Aplicação 
6. Apresentação
5. Sessão
4. Transporte
3. Rede
2. Enlace de Dados
1. Física

- *Camadas Superiores* | 7 - 6 - 5 | Relacionadas com a natureza da Aplicação
- *Camada de Transporte* | 4 | Relacionada com a Comunicação entre as aplicações
- *Camadas Inferiores* | 3 - 2 - 1 | Relacionadas com a Interconexão de Sistemas ou Equipamentos

### 🌿 Encapsulamento de Dados | Unidades de Dados de Protocolo

7. Aplicação | Dados
6. Apresentação | Dados
5. Sessão | Dados
4. Transporte | Segmentos
3. Rede | Pacotes
2. Enlace de Dados | Quadros
1. Física | Bits

Cada Camada pode ser composto por cabeçalhos - *Header*, Carga útil e rabeira - *Trailers*

Aplicação >                                                             **Dados** >       Aplicação
Apresentação >                                              **H** + Dados >       Apresentação
Sessão >                                                     **H** + H + Dados >       Sessão
Transporte >                                       **H** + H + H + Dados >       Transporte
Aplicação >                                 **H** + H + H + H + Dados >       Aplicação
Enlace de Dados >       **H** + H + H + H + H + Dados + **T** >       Enlace de Dados
Física >                             1 0 1 0 1 1 0 1 0 1 1 0 0 1 0 1 >       Física

Cada camada possui fronteira somente a sua camada superior e inferior e as mudanças em uma camada não afetem uma a outra. As camadas são compostas por serviços e protocolos

Os ==serviços se comunicam verticalmente== enquanto os ==protocolos se comunicam horizontalmente==

### 🌿Serviços

A comunicação entre camadas é feita através da requisição de serviços. Cada camada é responsável por um conjunto de serviços. A prestação de serviços é o que justifica a existência de uma camada. Uma camada N fornece serviços a uma camada N + 1

### 🌿Protocolos

A comunicação acontece entre camadas de mesmo nível, mas em nós diferentes, são regras que governam a interação em sistemas distribuídos. Para dois protocolos se comunicarem, ele deve estar em mesmo nível



## 🌳Arquitetura IEEE 802 

É resultado da tentativa de estabelecer uma arquitetura padrão, mas não conseguiu proeza. Atualmente define somente padrões para o nível físico. Como: 
- IEEE 802.3 - Ethernet
- IEEE 802.8 - Fibra Ótica
- IEEE 802.11 - Wi-fi
- IEEE 802.15 - Deu origem ao Bluetooth

## 🌳Modelo TCP/IP

O TCP é o protocolo de rede o IP é o protocolo de transmissão. Se baseia na interconexão e coexistência de redes. Também se baseia no ISO/OSI
--- start-multi-column: ID_ku3c
```column-settings
Number of Columns: 2
Largest Column: standard
```

**ISO/OSI**

7. Aplicação 
6. Apresentação
5. Sessão
4. Transporte
3. Rede
2. Enlace de Dados
1. Física

--- column-break ---

**TCP/IP**

7. Aplicação
6. Aplicação
5. Aplicação
4. Transporte
3. Internet
2. Acesso á Rede
1. Acesso á Rede

--- end-multi-column

