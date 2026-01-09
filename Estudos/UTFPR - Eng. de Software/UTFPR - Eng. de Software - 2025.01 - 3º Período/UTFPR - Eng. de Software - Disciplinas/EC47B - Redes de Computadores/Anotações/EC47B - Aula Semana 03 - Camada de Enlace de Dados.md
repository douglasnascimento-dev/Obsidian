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
> [!banner-icon] 🌿Semana 03
## 🌳Divisão da Camada
--- start-multi-column: ID_5vfn
```column-settings
Number of Columns: 2
Largest Column: standard
```

### 🌿LLC | *Logical Link Control*  

Fornece mecanismos de multiplexação de diferentes protocolos, controle de fluxo e erros

--- column-break ---

### 🌿 MAC | *Media Acess Control* 

Provê acesso a um canal de comunicação e o endereçamento neste canal

--- end-multi-column
Se preocupa com dois elementos físicos fisicamente conectados. Unidade de Dados: quadro ou frames.

### 🌿Serviços

- Delimitação de Quadros
	- Divide e encapsula pacotes em quadros;
	- Acrescenta endereços físicos (*endereços MAC*) usados no cabeçalhos dos quadros para identificar a fonte e o destino dos Quadros.
- Detecção de Erros
	- Erros causados pela atenuação do sinal e por ruídos
	- O Receptor detecta a presença de erros
- Correção de Erros
	- O Receptor identifica e corrige os bits com erros
- Controle de Fluxo
	- Limitação da transmissão entre transmissor e receptor
- Entrega confiável entre dois equipamentos fisicamente conectados
- Acesso ao Enlace
	- Implementa acesso ao canal se o meio é compartilhado

### 🌿Protocolos

- *Cabeçalho* → possui informações de controle e é formado por diversos campos, cada um com uma função específica no protocolo
- *Dados* → encapsula o PDU de rede passado pela Camada de Rede
- *Código de Detecção de Erro* → usado para o controle de erros

 🌵Exemplo de Estrutura → Cabeçalho + Dados ( *PDU de Rede* ) + CDE | *rabeira* 

 Os serviços são fornecidos nas seguintes combinações:
 
 - Sem conexão não confirmado
 - Sem conexão confirmado
 - Conexão confirmado

#### 🌱Serviço sem conexão e não confirmado

Envia frames sem ter uma conexão previamente estabelecida e também não possui confirmação de recebimento da receptora.

Os quadros perdidos são ignorados e tratados pelas camadas superiores. Usado em redes locais, como IEEE 802.3 Ethernet, como em aplicações onde a taxa de erro é muito baixa, ou em redes de tempo real 

#### 🌱Serviço sem conexão e confirmado

A Conexão não é estabelecida previamente, mas cada frame enviado é individualmente confirmado. Dessa forma, o emissor sabe se o frame foi recebido ou não

A Origem usa um mecanismo de temporização para reenviar quadros não confirmado. Útil para canais pouco confiáveis como o IEEE 802.11 Wi-Fi

#### 🌱Serviço orientado a conexão e confirmado

É o mais sofisticado, onde o receptor e o emissor estabelecem uma conexão antes do envio de dados. Cada frame é numerado, onde cada frame é recebido exatamente uma vez e todos os frames chegam em ordem. A Camada de Rede é uma sequência de bits corretos, está presenta no PPP *Point-to-Point Protocol*

### 🌿Considerações sobre os diferentes tipos de serviço

Confirmação na Camada de Enlace de Dados é uma otimização e não um requisito. O Serviço a ser oferecido para a Camada de Rede depende, dentre outros fatores, da aplicação que utilizará esse serviço. 

### 🌿Delimitação de Quadros

A Camada física transmite uma sequência de bits, que pode ser grande e conter erros, inicialmente a sequência de bits é quebrada em frames

Os principais métodos são a ==contagem de caracteres e as flags de início e fim==, com caracteres de preenchimento.

#### 🌱Contagem de Caracteres

Usa um campo no cabeçalho para indicar o número de caracteres no quadro. O problema é se o caractere de contagem sofrer um erro de transmissão, todos os caracteres de transmissão seguinte sofrerão o erro. Na prática, não é utilizado para protocolos da Camada de Enlace de Dados

#### 🌱Flags de Início e de Fim

Permite codificar caracteres com um número arbitrário de bits por caracteres. Usa um padrão especial de bits para sinalizar o início e o fim do quadro. 

Sempre que 5 'uns' consecutivos são encontrados no dados, o emissor insere um zero (*bit stuffing*). Após a transmissão, quando o receptor encontra cinco 'uns' seguidos por um zero, o stuff é retirado

### 🌿Controle de Erros

A Camada de Enlace de Dados tem a função de realizar o tratamento dos possíveis erros. O Controle de Erros envolve duas etapas.

#### 🌱Detecção de Erros

O Mecanismo de detecção de erro é semelhante ao esquema do dígito verificador largamente utilizado em código de barras, CPF

01. Antes de enviar a mensagem o transmissor utiliza uma função para gerar um código verificador, esse código é adicionar ao quadro que será enviado.

- 🌵Bit de Paridade → insere-se 1 bit extra ao final de cada caractere de modo a deixar todos os caracteres com um número par ou ímpar de bits 1. Só usado em baixa velocidade e com poucos erros
- 🌵Verificação de Redundância Cíclica → O Emissor e o receptor concordam com uma sequência de bits que representa o gerador G com (r + 1) bits de comprimento e que tem o bit mais significativo (mais à esquerda) como 1. Basicamente, a sequência de bits a ser transmitida D com d bits com a soma da verificação deve ser divisível pelo gerador, se houver resto, ocorreu um erro. 
	-  Para se calcular R (resto) realize-se o processo de divisão longa ao se subtrair o gerador caso o bit mais significativo   

### 🌿Controle de Fluxo

Quando um emissor transmite mais rápido que o receptor pode aceitar, é necessário algum mecanismo de feedback para fornecer para o emissor fique ciente das capacidades do receptor. Isso também pode estar na Camada de Transporte

- Pode ser resolvido por protocolos ARQ, que busca garantir a transmissão confiável pelo uso de reconhecimentos e temporizadores. Também garantem o controle de fluxo, já que define a quantidade de mensagens que o emissor pode enviar

- 🌵Stop and Wait → *os pacotes são numerador com 1 bits já que o só acontece uma vez cada envio, caso não aconteça a confirmação, ele é retransmitido após os esgotamento do timer*
- 🌵Go Back N → *São transmitidos um conjunto de quadros e confirma-se o último, também chamado de protocolo de janela deslizante, pois utiliza uma janela de transmissão. Onde o transmissor mantém um conjunto de número de sequência correspondentes a quadros que ele pode envia*
- 🌵Select Repeat → *Utiliza duas janelas, uma para a transmissão, outra para a recepção. Assim, quadros recebidos após um quadro que foi perdido não são descartados*

- 🌵Piggybacking → *também conhecido como superposição. consistem em adicionar o reconhecimento no campo ACK, do cabeçalho do quadro que é normalmente enviado do receptor para o transmissor, pegando 'carona' na volta*

### 🌿Tipos de Enlace

Um canal de comunicação único compartilhado pode estar sujeito a interferência. Onde apenas um nó pode transmitir com sucesso num dado instante de tempo

#### 🌱Protocolos de Acesso Múltiplo

É um algoritmo distribuído que determina como as estações compartilham o canal, isto é, determinam quando cada estação pode transmitir. É a principal função da camada MAC (*Medium Acess Control*) 

- Três grandes classes
	- Particionamento do canal → *soluções estáticas, dividem o canal em pedaços menores, aloca um pedaço para uso exclusivo*
	- Acesso Aleatório → *permitem colisões e se recuperam delas*
	- Passagem de Permissão → *compartilhamento estritamente coordenado para evitar colisões*

##### 🌵TDMA - Acesso múltiplo por Divisão de Tempo

Acesso ao canal é feito por turnos, cada estação controla um compartilhamento de período fixo. Se o slot não for utilizado ele fica vazio.

##### 🌵FDMA - Acesso múltiplo por Divisão de Frequência

O Espectro do canal é divido em bandas de frequência, cada estação recebe uma banda de frequência, o tempo de transmissão não usado é desperdiçado

##### 🌵CDMA - Acesso múltiplo por divisão de Código

Um código único chamados de 'chipping sequence' é atribuido a cada usuário, isto é, o código define o particionamento. Muito usado em canais broadcast

#### 🌱Acesso Aleatório

A transmissão acontece quando um nó tem um pacote a enviar, e utiliza todo a taxa do canal, e não há uma regra de coordenação pré-determinada entre os nós, o que pode levar a colisões. 

##### 🌵ALOHA

A Estação realiza o envio sempre que tiver dados para enviar, se houver colisão, aguarda um tempo aleatório para realizar a transmissão

##### 🌵CSMA - Acesso múltiplo com detecção de portadora

Escuta o sinal antes de transmitir, se o canal tiver vazio, transmite, se estiver ocupado ele espera um tempo aleatório.

##### 🌵CSMA/CD - Acesso múltiplo com detecção de portadora com detecção de colisão

Escuta o canal enquanto transmite, transmissões com colisões são interrompidas, reduzindo o desperdício do canal

#### 🌱Passagem de permissão

##### 🌵Polling

O Nó superior convida os nós supervisionados a transmitir um de cada vez de maneira circular, quando cada nó transmite, o nó supervisor repassa a permissão para o próximo

##### 🌵Token passing

Não há no supervisor, um token é passado de um nó a outros sequencialmente, um quadro especial do tipo token

### 🌿Ethernet

É a tecnologia predominante em LANs com fio, padrão IEEE 802.3. Foi criado para ser usado em barramentos, posteriormente passou a ser usado na topologia estrela com Hubs. Oferece um serviço sem conexão não confirmado para a camada de rede, o que torna simples e barato

No processo de envio, a camada de enlace encapsula os dados em quadro contendo, os campos MAC de origem e destino, os campos de tipo/comprimento, e o campo de Checksum.

No processo de recepção, se verifica se o endereço de destino do quadro é igual ao endereço e o calculo de Checksum

### 🌿Endereços de LAN

#### 🌱Endereços IP

Endereços da camada de rede, usados para levar o pacote até a rede de destino.
IPv4 - 32 bits
IPv6 - 128 bits

#### 🌱Endereços MAC 

Usado para levar o pacote de uma interface física a outra fisicamente conectados. Possuem 48 bits. Gravado na memória somente de leitura do adaptador da rede.

A Alocação de endereços MAC é administrada pelo IEEE. O Endereçamento MAC tem portabilidade

#### 🌱Protocolo de Resolução de Endereços - ARP

O Pacote da camada de rede contém os endereços de IP do usuário final de origem e de destino. A tabela de roteamento da camada de rede é capaz de determinar qual é o próximo dispositivos na rede para o qual o pacote deve ser encaminhado. 

Cada IP de uma rede possui um módulo e uma tabela ARP. A Tabela faz o endereçamento de endereços IP/MAC para nós da rede 

#### 🌱Switch

A Função de um switch é receber quadros da camada de enlace e repassá-los para enlace de saída. O Switch é transparente aos hospedeiros e roteadores na sub-rede, não possui um endereço MAC. Eles são autodidatas. 

O Switch aprende a localização do adaptador com endereços MAC ao receber um quadro com esse endereço na origem a partir de uma suas interfaces. O Switch elimina as colisões e permite realizar enlace heterogêneos

##### 🌱VLANs

São redes locais virtuais. O Administrador de rede configura quais são as interface que pertencem a cada VLAN. Presença de roteamentos com o switch para encaminhar pacotes de uma VLAN para outra VLAN. Buscar isolar o tráfego, melhoria de desempenho, além e melhoria de políticas de segurança e privacidade