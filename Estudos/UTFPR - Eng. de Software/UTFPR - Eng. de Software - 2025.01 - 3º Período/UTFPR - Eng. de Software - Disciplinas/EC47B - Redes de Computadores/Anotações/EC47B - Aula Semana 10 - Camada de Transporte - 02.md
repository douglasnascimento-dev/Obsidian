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
> [!banner-icon] 🌿Semana 09

### 🌿TCP - Estabelecimento de Conexões

Ocorre antes que qualquer outro recurso TCP possa desempenhar sua função. Fundamento o processo da inicialização referentes à sequência, aos ACKs e na troca de número de sockets usados

- **SYN** - Indica o pedido de conexão e confirmação da conexão
- **SEQ** - Número sequencial com início diferente para cada host
- **ACK** - Segmento de confirmação 

01. O estabelecimento da conexão é feito usando dois bits no cabeçalho TCP: SYN e ACK;
02. Um segmento que possua a flag SYN ativa, sinaliza uma requisição de sincronia do número de sequência (seq).
03. Essa sincronização é necessária em ambos os sentidos, pois origem e destino utilizam números de sequência distintos;
04. Cada pedido de conexão é seguido de uma confirmação utilizando o bit ACK;
05. O segundo segmento do three way handshake exerce as duas funções ao mesmo tempo: confirma a sincronização do servidor com o cliente e requisita a sincronização do cliente com o servidor.

O three way handshake simulado um acordo:
01. O Cliente pergunta ao servidor: *Você está aí?*
02. O Servidor responde: *Sim, estou aqui*
03. O Servidor pergunta ao cliente: *Você está aí?*
04. O Cliente responde: *Sim, estou aqui*

 Os Itens 2 e 3, acontecem simultaneamente na segunda mensagem. 

 - **FIN** - Indica o pedido para fechar a conexão, emitida pelos dois host
 - **ACK** - Segmento de confirmação
 
### 🌿TCP - Controle de Fluxo

Quando os bytes chegam ordenados e corretos, eles são colocados no buffer de recepção e passam a ser acessíveis para a aplicação. A Aplicação pode demorar para ler os dados desse buffer e ele pode ficar cheio muito rápido. É necessário garantir um controle de fluxo para impedir que o buffer de recepção sature. 

- O TCP implementa o controle de fluxo utilizando os dados dos campos Número de Sequência, Número de Confirmação e Tamanho da Janela; 
- O controle de fluxo no TCP é gerenciado por uma técnica denominada janela deslizante;
- O campo Tamanho da Janela indica, em tempo real, o número máximo de bytes que podem ser enviados sem confirmação. Com a utilização de janelas, um emissor só poderá enviar o número de bytes previsto na janela, antes de receber alguma confirmação.

- Além do controle de fluxo, o protocolo de janela deslizante também garante a recuperação de erros por usar reconhecimento.
- O TCP utiliza o protocolo de janela deslizante híbrido do ARQ Go-Back-N (ACKs cumulativos) e ARQ Selective-Repeat (buffer de recepção) com retransmissão rápida:
	- Permite o envio de reconhecimentos cumulativos, aguardando 500 ms pela chegada de um novo segmento antes de enviar o ACK;
	- Se 3 ACKS duplicados forem recebidos, reenvia o segmento sem aguardar pelo esgotamento da temporização.

### 🌿TCP - Controle de Congestionamento

É quando muitas fontes enviando dados acima da **capacidade da rede** de tratá-los. Diferencia-se de controle de fluxo que está muita mais ligado ao buffer do usuário final. Causa a perda de pacotes, atrasos grandes

Existem duas abordagens gerais para o problema de controle de congestionamento:
- Controle de congestionamento fim-a-fim:
	- Não usa realimentação explícita da rede;
	- Congestionamento é inferido a partir das perdas e dos atrasos observados nos sistemas finais;
	- Abordagem usada pelo TCP.
- Controle de congestionamento assistido pela rede:
	- Roteadores enviam informações para os sistemas finais indicando o congestionamento.

Cada remetente limita sua taxa de transmissão de acordo com o tráfego até o destinatário. Se for notado congestionamento, a taxa é reduzida. Caso contrário, é aumentada.

A Detecção do congestionamento é feita pelo esgotamento da temporização e a presença de 3 ACKs duplicados. A Janela de Congestionamento é usada para realizar a taxa de envio e utiliza ACKs para realizar seu tamanho. O TCP é considerado autorregulado. 

O Algoritimo de controle de congestionamento possui três fases:
- Perda lenta
- Prevenção de congestionamento
- Recuperação rápida (não obrigatória, mas recomendado)

#### 🌱Partida Lenta

Aumenta a janela de congestionamento no tamanho de 1 segmento a cada Ack recebido. Isso gera uma taxa de envio que começa lenta mas cresce exponencialmente. Encerra-se o crescimento:
- Esgotamento de temporização: reinicia a partida lenta com a janela de congestionamento com 1 segmento e estabelece a variável limiar de partida lenta para um valor igual à metade da janela de congestionamento no momento da detecção.
- Valor da janela de congestionamento igual ao limiar de partida lenta: alteração para o modo de prevenção de congestionamento.
- 3 ACKS duplicados: alteração para o modo de recuperação rápida, se caso não for possível ativar o modo de recuperação, ele reinicia a partida lenta.

#### 🌱Prevenção de congestionamento

Aumenta a janela de congestionamento no tamanho de 1 segmento quando recebe os ACKs de toda a rajada. 

- O congestionamento pode estar perto, já que a janela de congestionamento é metade do valor que era quando detectou-se o congestionamento anterior.
- Aumento da taxa de envio mais conservador: 1 MSS/Tamanho da janela, sendo MSS o tamanho máximo do segmento. Logo, é preciso receber todos os ACKS para aumentar em 1 segmento.
- Encerra-se o crescimento:
	- Esgotamento de temporização: reinicia a partida lenta com a janela de congestionamento com 1 segmento e estabelece a variável limiar de partida lenta para um valor igual à metade da janela de congestionamento no momento da detecção.
	- 3 ACKS duplicados alteração para o modo de recuperação rápida.

#### 🌱Recuperação rápida

- O limiar de partida lenta recebe o valor igual à metade da janela de congestionamento.
- A janela de congestionamento recebe o valor do limiar mais 3 MSS (1 para cada ACK duplicado recebido).
- Aumenta a janela de congestionamento em 1 MSS para cada ACK duplicado recebido do segmento que foi perdido. Quando chega um novo ACK, volta para a prevenção de congestionamento.
- Encerra-se o crescimento:
	- Esgotamento de temporização: reinicia a partida lenta com a janela de congestionamento com 1 segmento e estabelece a variável limiar de partida lenta para um valor igual à metade da janela de congestionamento no momento da detecção



