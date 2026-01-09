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
> [!banner-icon] 🌿Semana 08

## 🌳Camada de Transporte

A Principal função é garantir a entrega de correta de mensagens para os processos e aplicações. Aceita dados das camadas de redes e pode dividir em pacotes menores e envia para a camada de Redes.

Fornece comunicação lógica entre processos de aplicações. Camada fim a fim, que liga a origem ao destino. 

### 🌿Protocolos e Serviços de Transporte

- Fornecem comunicação lógica entre processos de aplicação em diferentes hosts com segmentos; 
- Os protocolos de transporte são executados nos sistemas finais da rede; 
- Serviço de Transporte vs Serviços de Rede:
	- Camada de Rede: transferência de dados entre usuários finais;
	- Camada de Transporte: transferência de dados entre processos. 
-  Utiliza e aprimora os serviços oferecidos pela Camada de Rede.

- Serviços de Transporte
	- Não confiável: UDP
	- Confiável: TCP
		- Controle de congestionamento, controle de fluxo e orientado à conexão

O Hardware e/ou software da Camada de Transporte que executado trabalho é chamado de entidade de transporte (transport entity). Essa entidades podem estar:
- no kernel
- outro processo de usuário
- biblioteca vinculada a aplicações
- placa de interface de rede

Muitos host são multiprogramados. Isso que dizer que muitas conexões estarão entrando e saindo de cada host e processos executam de forma concorrente. É responsabilidade da Camada de Transporte multiplexar todas as comunicações para a Camada de Rede e posteriormente determinar a qual processo uma mensagem pertence. 

### 🌿Multiplexação de Aplicações

- **Demultiplicação**: entrega de segmentos recebidos aos processos de aplicação corretos;
- **Multiplexação**: reunir dados de qualquer processo, juntar cabeçalhos com dados para cada segmento e repassar para um único ponto, a Camada de Redes. 

Se baseia em número de porta de transmissor, número de porta do receptor e endereços IP: números de porta e origem em cada segmento. 

### 🌿Endereçamento

Da mesma forma que em outras camadas, a camada de transporte também possui um endereçamento, que identifica o processo da aplicação. A porta que é um número de 16 bits. Os serviços são obtidos por meio de comunicação entre os sockets do transmissor e do receptor. 

### 🌿Portas

Existem 2<sup>16</sup> = 65536 portas para o TCP e 65536 para o UDP. Conhecer essas portas é fundamental para operar um Firewall de forma satisfatória. 

Apenas as primeiras 1024 são especificadas pela IANA. Essa entidade é responsável por alocar portas para determinados serviços

### 🌿Sockets

Os sockets são diferentes para cada protocolo de transporte. Os sockets de origem e destino são responsáveis pela identificação única da comunicação. Desta forma é possível a implementação da função conhecida como multiplexação. 

01. Ao iniciar uma comunicação é especificado para a aplicação o IP de destino e a porta de destino
02. A porta de origem é atribuída dinamicamente pela Camada de Transporte. 
03. Ele geralmente é um número aleatório acima de 1024. O endereço IP de origem é atribuída pela Camada de Rede

### 🌿UDP

Definido pela RFC 768. Protocolo de transporte da Internet "sem gorduras". Serviço de melhor esforço. Os segmentos do UDP são conhecidos como datagramas. Datagramas podem ser perdidos e entregues fora de ordem para a aplicação. Não utiliza conexão prévia.

Então não há confirmação entre o UDP transmissor e o receptor. Cada segmento UDP é tratado de forma independente dos outros. 

Mas possuí benefícios como não há estabelecimento de conexão, oq evita atrasos. É simples, não há estado de conexão nem no transmissor nem no receptor. Cabeçalho de segmento reduzido. E não controle de congestionamento, o UDP pode enviar segmentos tão rápido quanto desejado. 

Usado por multimídia contínua (voz e vídeo). No DNS e SNMP (protocolo simples de gerenciamento de rede) e o RIP (routing information protocolo). Para uma transferência confiável sobre UDP é possível acrescentar confiabilidade na camada de aplicação e a recuperação de erro específica de cada aplicação. 

Cabeçalho: 
- Porta de Origem e Destino e Porta de Destino
- Comprimento 
- Soma de Verificação - Opcional no IPv4 e obrigatória no IPv6

### 🌿TCP 

Foi formalmente definido pela RFC 793 e posteriormente na RFC 1122. Foi projetado para oferecer um fluxo de bytes fim a fim confiável em uma rede não confiável. É um protocolo orientado a conexão. O Segmento TCP é muito mais complexo que o segmento do UDP. 

Para que o TCP funcione é necessário que a conexão seja explicitamente estabelecida entre os sockets das duas máquinas. Um socket pode ser usado por várias conexões ao mesmo tempo. As conexões são identificadas nas duas extremidades pelos sockets. 

O TCP é full duplex, o tráfego pode ser feito em ambas as direções ao mesmo tempo, e ponto a ponto, porque cada conexão possui exatamente dois pontos terminais únicos. 

Uma conexão TCP é um fluxo de dados e não fluxo de mensagens. O TCP não tem ideia do significado dos bytes, ele apenas cuida da entrega. Os dados podem ser armazenados em um buffer para serem enviados posteriormente em um único segmento. 

> Executar 4 escritas com 512 bytes

- 4 segmentos de 512 bytes
- 2 segmentos de 1024 bytes
- 1 segmento de 2048 bytes
- outras divisões

O TCP decide qual deve ser o tamanho dos segmentos, baseando em duas regras
- A Carga útil do IP, que é de 65535 bytes.
- E o MTU (maximum transfer unit). Na prática, a MTU tem alguns milhares de bytes, aprox. 1500 bytes, e portanto define o limite superior de termos de tamanho de segmento. 

### 🌿Recuperação de Erros

O TCP proporciona uma transferência confiável de dados, o que também é chamado de confiabilidade ou recuperação de erros. Para isso, o TCP enumera os bytes de dados usando os campos referentes a sequência e aos ACKs no cabeçalho TCP. O TCP alcança a confiabilidade em ambas as direções, usando um campo referente ao número de sequência de uma direção, combinando com o campo referente ao ACK na direção oposta. 

01. O campo ACK indica o próximo byte a ser recebido. O número de sequência indica o número do primeiro byte do segmento correspondente à sua posição no fluxo de dados.
02. Caso a temporização se esgote, os segmentos são reenviados, garantindo que sempre sejam entregues.
03. O número de sequência nem sempre é incrementado por 1, ele pode ser incrementado com base no número de bytes enviados pela origem;
04. O ACK tem como objetivo solicitar a continuidade das mensagens. Pode-se interpretar um ACK=210 como sendo: "Pronto, recebi até a 209, pode mandar a 210."

