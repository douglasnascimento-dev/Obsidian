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
> [!banner-icon] 🌿Semana 07

Para se obter endereços IP, é feito pelo ICANN, *Internet Corporation for Assigned Names and Number*, que tem função de alocar endereços, gerenciar o DNS, e atribuir nomes de domínios

A Alocação de endereços é realizada pela **IANA**, *Internet Assigned Number Authority*, que é um departamento do ICANN, na América Latina é a realizada pelo escritório da **LACNIC**.

Para hosts, pode ser feita de duas formas:
- Endereço Fixo → definido pelo administrador;
- Endereço dinâmico por DHCP | *Dynamic Host Configuration Protocol* →  permite a atribuição dinâmica de endereços IP. É realizado em 4 passos:
01. O Host envia por broadcast a mensagem '*DHCP discover*'
02. O Servidor DHCP responde com a mensagem '*DHCP offer*'
03. O Host solicita um endereço IP com a mensagem *'DHCP request*'
04. O Servidor DHCP envia um endereço com a mensagem '*DHCP ack*'

### 🌿Entrega de Pacotes

A Entrega de pacotes na camada de rede pode ser divida em dois tipos. A **Entrega Direta** acontece quando o remetente e o destinatário se encontram na mesma rede lógica. É realizada pela camada de Enlace de Dados, conhecida como Entrega Local. Já a **Entrega Indireta** acontece quando o destinatário e o remetente se encontram em redes lógicas diferentes e se faz necessário a utilização de um destino intermediário. Também é chamada de Entrega Remota

Para saber se o host irá executar uma entrega local ou remota, basta saber se o remetente se encontra na mesma rede que o destinatário.
01. O Resultado de 'sua máscara de rede AND seu endereço'
02. O Resultado de 'sua máscara de rede AND endereço de destino'
03. Se os resultados forem iguais, ambos estão na mesma rede, caso contrário, estão em redes distintas.

#### 🌱Entrega Direta

Na entrega direta, o remetente precisa saber todas as informações do destinatário.
01. Preenchimento do endereço IP de origem e destino.
02. Requisição ARP para descobrir qual endereço MAC está vinculado ao endereço IP do destino
03. Preenchimento do endereço MAC de origem e destino
04. Envio do Pacote

#### 🌱Entrega Indireta

Na entrega indireta, o nó intermediário irá redirecioná-la para o destinatário, caso possível, ou para um outro intermediário. Para esse processo, se dá o nome de roteamento. 
01. Envia os dados para um roteador próximo
02. Passar os dados deste roteador para outro, sucessivamente, até alcançar o último roteador
03. Passa os dados do último roteador para o destino final

Quando o host de origem não está diretamente conectado ao host de destino e é necessário fazer a entrega remota, o host de origem envia os dados para seu gateway. Em vez de colocar o MAC de destino do destinatário, se utilizado o endereço MAC do gateway, o endereço IP será do destino. 

### 🌿NAT

O *Network Address Translation* é a tradução de Endereço de Rede, definida na RFC-1631. Foi criado para reduzir o número de endereços públicos na Internet permitindo que uma rede com endereço privado tenha acesso à Internet. Para isto é feita a conversão dos endereços privados em endereços públicos.

Um dispositivo habilitado para NAT geralmente opera na borda de um rede *stub* (rede com uma única saída para rede externa). Ao realizar uma NAT para os endereços de uma rede local é necessário possuir ao mesmo um endereço público que estará localizado no roteador que provê acesso à Internet

Portas são os endereços da Camada de Transporte, que identificam uma aplicação. Quando chega no NAT o roteador gera uma nova porta para associar com os endereços de origem do pacote. O Mapeamento entre os endereços da rede privada e pública são armazenadas na Tabela NAT. 

Os mapeamentos de endereços são feitos utilizados a PAT (*Port Address Translation*). Então o roteador troca os endereços de origem do pacote e do segmento.  

### 🌿ICMP

A Operação de uma rede IP é monitorada por roteadores. Quando algo acontece de modo inesperado, o evento é reportado pelo ICMP (*Internet Control Message Protocol*), que também é utilizado para teste. O ICMP utiliza mensagens para realizar suas tarefas. No RFC são definidos 16 mensagens. 