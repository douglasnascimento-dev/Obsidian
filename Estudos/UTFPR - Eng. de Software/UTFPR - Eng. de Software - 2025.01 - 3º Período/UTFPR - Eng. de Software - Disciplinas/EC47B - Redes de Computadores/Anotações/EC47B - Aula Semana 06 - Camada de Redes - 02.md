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
> [!banner-icon] 🌿Semana 06

### 🌳Protocolo de Roteamento

Um protocolo de roteamento é a comunicação usada entre os roteadores. Ele permite que um roteador compartilhe informações com outros roteadores a respeito das redes que ele conhece. Essa informações são usadas para construir e manter uma tabela de Roteamento de forma dinâmica. 

- Roteamento estático → informações sobre as redes remotas são configuradas manualmente
- Roteamento dinâmico → informações obtidas de outros roteadores quando há alteração na topologia, reconfiguração ou falha na rede. 

Necessário que todos os roteadores conheçam as mesmas informações, o que chamamos de convergência. Um protocolo dinâmico escolhe a melhor rota como base de um fato chamado de **métrica de roteamento**. Pode ser métricas: ==latência, largura de banda, confiabilidade, carga, contagem de saltos e custos==. Cada protocolo de roteamento dinâmico determina quais e como estes valores são utilizados no cálculo da métrica. 

Os roteadores são capazes de suportar vários protocolos de roteamento independentes e de manter tabelas de roteamento de vários protocolos roteados, simultaneamente. As tabelas de roteamento contém:
- **Tipo de Protocolo** → o protocolo que criou a entrada da tabela
- **Endereço de Rede e Máscara** → o endereço de rede conhecido pelo roteador ou default gateway.
- **Associação destino ou próximo salto** → indica um destino específico está diretamente ligado ao roteador, ou se será necessário utilizar um outro roteador.
- **Métrica** → protocolos de roteamento diferentes utilizam métricas diferentes.
- **Interface de saída** → a interface na qual os dados devem ser enviados para que cheguem ao destino final.

Os protocolos de roteamento podem ser separados em duas classes: 
- De acordo com o seu algoritmo de roteamento | Vetor de distância ou Estado de Enlace. 
- De acordo com o local que é usado | IGP ou EGP

Determina bons caminhos através da rede da fonte até o destino. Podem ser descritos como grafos, onde os nós são os roteadores e as arestas são os enlaces, onde cada uma possui um peso conforme a métrica. 

### 🌿Vetor de Distância | Roteamento de Bellman Ford ou Ford Fulkerson

01. Cada nó tem um vetor de distância com a distância até seu vizinho.
02. Os nós enviam uns para os outros seus vetores de distância.
03. Quando recebe um vetor, o nó compara com os custos que conhece.
04. Se o custo até o vizinho mais o custo no vetor recebido for menor que o valor no seu próprio vetor, esse custo é atualizado e a nova rota é atualizada na tabela de roteamento. 

- **Algoritmo dinâmico** → é capaz de se adaptar às mudanças na rede. 
- **Algoritmo interativo** → continua até que os nós não troquem mais informações.
- **Algoritmo distribuído** → cada nó se comunica apenas com o seu vizinho. 

- Estrutura de dados da Tabela de Distância
	- Cada nó tem sua própria linha
	- Linha para cada possível destino
	- Coluna para cada roteador

Entretanto, existe um problema, da contagem até infinito. Por causa do aumento do custo ou falhas que são propagadas lentamente. 

### 🌿Estado de Enlace | Link State 

01. Descobre seu vizinho e seu endereços de rede e calcula o custo até cada um deles.
02. Cria um pacote que informa o que foi descoberto e calculado e envia para todos os outros roteadores. 
03. Calcula o caminho mais curto até cada um dos roteadores, usando o Algoritmo de Dijkstra

- Estrutura dos Pacotes de dados
	- SEQ → sequência usada para identificar pacotes duplicadas.
	- AGE → idade decrementada após cada transmissão para identificar e/ou descartar pacotes antigos. 
	- Vizinho | Custo → identificar do vizinho e o custo para chegar até ele, é repetido para cada vizinho. 

- **Algoritmo dinâmico** → capaz de se adaptar às mudanças na rede.
- **Algoritmo global** → a topologia de rede e custo dos enlaces são conhecidas por todos os nós.
- **Algoritmo de Convergência** → após k interações, conhece o caminho de menor custo para k destino.

### 🌿Roteamento Hierárquico

Agrega roteadores em regiões chamadas de Sistemas Autônomos (AS). Roteadores no mesmo AS rodam o mesmo protocolo de roteamento (protocolo IntraAS). Roteadores em diferentes AS podem rodar diferentes protocolos de roteamento (protocolo InterAS). 

Roteadores de boras são as interfaces de um AS. Eles rodam protocolos de roteamento intraAS com os outros roteadores do AS. São os responsáveis por enviar mensagens para fora do AS. Rodam protocolos de roteamento interAS com outros roteador de borda. 

- **IGP** → protocolo interno de roteamento | é usada na intercomunicação de redes dentro de um mesmo AS
- **EGP** → protocolo externo de roteamento | é usada na intercomunicação de redes de diferentes AS. 

- Exemplos - EGP

>  BGP | Border Gateway Protocol - Exemplo único, o principal protocolo de roteamento utilizado na internet.

- Exemplos + IGP

> Baseados no Vetor de Distância - RIP, IGRP e EIGRP
 > Baseados no Estado de Enlace - OSPF e ISIS


#### 🌱BGP | Border Gateway Protocol

É considerado a "cola que mantém a internet ligada". Permite a troca de informações entre AS, ao mesmo tempo que é livre de loops. O BGP é principal protocolo utilizado pelas maiores empresas e provedoras. 

### 🌿Tabela de Roteamento

> Exemplo de Tabela de Roteamento:

| Rede de Destino | Próximo Salto         | Interface de Saída |
| --------------- | --------------------- | ------------------ |
| 191.168.1.0/24  | Diretamente conectado | eth0               |
| 192.168.2.0/24  | Diretamente conectado | eth1               |
| 172.16.32.0/24  | Diretamente conectado | eth2               |
| 10.1.100.0/24   | 172.16.32.254         | eth2               |
| 10.1.200.0/24   | 172.16.32.254         | eth2               |

Conceito de "roteador mais inteligente". Esse roteador considera que 172.16.32.254 é mais inteligente que ele e pode encontrar aas redes 10.1.100.0/24 e 10.1.200.0/24. Ele não precisa se preocupar como esse outro roteador vai fazer isso, ele simplesmente acredita que ele consegue. 

Aqui entra o conceito de gateway. Dizemos que o gateway da rede 10.1.200.0 é o roteador 172.16.32.254. O Gateway é o próximo salto. Traduzindo ao pé da letra, gateway, é um portal, nesse caso o portal de acesso para uma determinada rede. Diferente de um default gateway.

### 🌿Default Gateway | Gateway Padrão

As rotas default são usadas para rotear pacotes com destinos que não correspondentes a nenhum das outras rotas da tabela de roteamento. Geralmente, os roteadores são configurados com uma tora default para o tráfego dirigido à internet, já que normalmente é impraticável ou desnecessário manter rotas para todas as redes de internet. Uma rota default, na verdade, é uma rota estática especial endereçada a 0.0.0.0 e com a máscara 0.0.0.0. Quando um IP de destino é submetido à operação lógica AND com a máscara definida resultará sempre na rede 0.0.0.0.

| Rede de Destino | Próximo Salto         | Interface de Saída |
| --------------- | --------------------- | ------------------ |
| 191.168.1.0/24  | Diretamente conectado | eth0               |
| 192.168.2.0/24  | Diretamente conectado | eth1               |
| 172.16.32.0/24  | Diretamente conectado | eth2               |
| 0.0.0.0/0       | 172.16.32.254         | eth2               |


### 🌿Sumarização de Rotas

A Sumarização de rotas é a abreviação de rotas. Ela server para manter uma tabela de roteamento mais limpa.

01. Analisar a tabela de roteamento
	
| Destino          | Próximo Salto |
| ---------------- | ------------- |
| 192.168.0.0/30   | eth0          |
| 192.168.0.128/30 | eth1          |
| 192.168.0.4/30   | 192.168.0.2   |
| 192.168.0.64/26  | 192.168.0.2   |
| 192.168.0.132/26 | 192.168.0.130 |
| 192.168.0.192/26 | 192.168.0.130 |

 02. Então sabemos que:
	 - eth0 = 192.168.0.2
	 - eth1 = 192.168.0.130

 03. Vamos agrupar as redes 192.168.0.0/30, 192.168.0.4/30 e 192.168.0.64/26. Esse agrupamento só pode ser feito quando todos possuem a mesma saída. 

| Destino             | Próximo Salto   |
| ------------------- | --------------- |
| **192.168.0.0/30**  | **eth0**        |
| 192.168.0.128/30    | eth1            |
| **192.168.0.4/30**  | **192.168.0.2** |
| **192.168.0.64/26** | **192.168.0.2** |
| 192.168.0.132/26    | 192.168.0.130   |
| 192.168.0.192/26    | 192.168.0.130   |

04. Convertendo para Binário

| Destino         | Octeto 1  | Octeto 2  | Octeto 3  | Octeto 4      |
| --------------- | --------- | --------- | --------- | ------------- |
| 192.168.0.0/30  | 1111 0000 | 1010 1000 | 0000 0000 | 0**000 0000** |
| 192.168.0.4/30  | 1111 0000 | 1010 1000 | 0000 0000 | 0**000 0100** |
| 192.168.0.64/26 | 1111 0000 | 1010 1000 | 0000 0000 | 0**100 0000** |

05. Até onde esses endereços são iguais? 
	- Todos os primeiros 25 bits são comuns aos 3 endereços IPs. Logo podemos sumarizar essas 3 redes em uma única rede: 192.168.0.0/25

06. Repetir o mesmo  em todos os casos possíveis. 

### 🌿IPv6

Os endereços são compostos por 128 bits. 2<sup>128</sup> =  mais de 340 undecilhões de endereços disponíveis. Representado em Hexadecimal. Oito blocos de 16 bits (quatro algarismos hexadecimais), separados por dois pontos. Esse endereços podem ser simplificados para facilitar sua escrita.

O CIDR padrão é de /64. Onde 64 bits para rede e 64 bits para identificação da máquina. Onde há 2<sup>64</sup> máquinas por rede. Número mais do que suficiente de endereços. 

> 2031:0000:140F:0000 - 0000:0AC0:975B:010C
    (rede) > (máquina)

A porção de máquina é formada pelo IID, que contém o endereço físico (MAC) da máquina. Por isso, não há necessidade de usar DHCP, pois cada máquina já tem seu endereço de fábrica. DHCPv6 é opcional, pode ser usada quando o adm quiser mais controle sobre a rede. 

No IPv6 não existe o endereçamento de broadcast. No Ipv6, obrigatoriamente todas as máquinas tem dois endereços IP configurados. 
- **Unicast** → endereço da própria máquina;
- **Multicast** → endereço de distribuição ou de grupo, todas as máquinas que tiveram esse endereço, recebem os pacotes de dados endereçados a ele.

####  🌱 Expansão

 01. Se elimina zeros à esquerda de cada bloco. 
 02. Se elimina uma sequência que tiverem maior números zeros, pode ser substituída por dois dois pontos. Isso só pode ser feito uma vez.

> 2031:0000:140F:0000:0000:0AC0:975B:010C 
> 2031:**000**0:140F:**000**0 :**000**0:**0**AC0:975B:**0**10C 
> 2031:0:140F:0:0:AC0:975B:10C
> 2031:0:140F:**0:0**:AC0:975B:10C
> 2031:0:140F::AC0:975B:10C

#### 🌱Expansão

01. Localizar se existem dois dois pontos juntos. Se sim, substituí-los por tantos blocos de zero. 
02. Verificar se todos os blocos possuem 4 algarismos. Se não tiver, colocar zeros à esquerda de cada bloco até completar. 

> 2001:FD0:1002:4C::5:2F
> 2001:FD0:1002:0000:0000:5:2F
> 2001:0FD0:1002:0000:0000:0005:002F

#### 🌱Formação do IID

> 00-80-AD-0A-CD-DC
> 00-80-AD | 0A-CD-DC
> 0==0==-80-AD-**FF**-**FE**-0A-CD-DC

Como algarismo hexadecimal representa 4 bits, então o 7º bit está embutido no 2º algarismo do nosso endereço

> 0 → 00==0==0
> 0 → 00==1==0
> 0010 → 2
> 02-80-AD-**FF**-**FE**-0A-CD-DC
> 0280-AD**FF**-**FE**0A-CDDC

### 🌿Endereços do IPv6

- **Unicast** → endereço da própria máquina. Uma única máquina ira responder.
- **Anycast** → mais de uma máquina terão os mesmo endereço IP. A Máquina que estiver mais próxima responderá. Qualquer endereço unicast pode ser usado com anycast. Utilizado pelo DNS.
- **Multicast** → endereço de distribuição ou de grupo, todas as máquinas que tiveram esse endereço, recebem os pacotes de dados endereçados a ele. Sempre começam com o FF.

Propõe a simplificação do datagrama IPv6 para aumentar o desempenho dos roteadores. Passar a ter um tamanho fixo de 40 bytes, não existe o campo de checksum, inclusão de cabeçalhos extras no conteúdo útil para o host final e a fragmentação acontece apenas no host de origem e nunca pelos roteadores.

Segurança é acrescenta à camada de redes pelo IPSec inerente ao IPv6. O Cabeçalho da camada de transporte e da aplicação também se tornam ilegíveis se for utilizado criptografia. Não é necessária que mecanismos de segurança sejam implementados na aplicação. 

O IPSec provê três propriedades de segurança. A Autentificarão, a Integridade e a Confidencialidade, que é opcional. 
#### 🌱Multicast

Introduz o conceito de Escopo, diminuindo a área de abrangência dos endereços IP. No unicast e anycast, existem dois escopos:
- **Link-Local** → equivalente a endereços privados
- **Global** → equivalente a endereços públicos

Ao todo existem 14 escopos reservados, porém apenas 7 estão definidos, já contando o link-local e o global. Máquinas configuradas com um mesmo escopo e um mesmo endereço de multicast, receberão mensagens endereçadas ao grupo. 

#### 🌱Transição entre IPv4 e IPv6

As técnicas existentes para a transição entre IPv4 para IPv6
- **Pilha dupla** → utilização das duas versões de forma nativa
- **Túneis** → encapsulamento de pacotes IPv6 em pacotes IPv4 ao passar por redes que só possuam IPv4
- **Tradução** → roteadores armazenam tabelas com o mapeamento entre endereços IPv4 e IPv6. 

