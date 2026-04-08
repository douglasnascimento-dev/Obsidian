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

> [!banner-icon] :LiBookMarked: Aula 11.03.2026


# :LiAlbum: Funções

Um SO executa rotinas em função do tempo de forma não linear. Garante que Eventos Assíncronos são executados concorrentemente. Facilita o acesso a recursos do sistema e Compartilha recursos de forma segura e organizada. 

## 🌿Firmware

Ficam gravados em um Chip dentro da Placa Mãe. A Funçãdo Principal deles é serem a ponte o Hardware e os Software.

### 🎋 BIOS

É a Tecnologia Antiga, criada na Década de 70. Ela faz um **POST**[^1] , mas só consegue ler discos de até 2 TB. A Interface é simples e o Processo de Inicialização Lento porque é necessário inicializar cada Componente de Hardware

[^1]: Um CheckUp Inicial para ver se a Memória RAM e o Processador estão OK

### 🎋 UEFI

É o Sucessor Moderno da BIOS. Unanimidade em PC's recentes (<10 anos). Possui Interface amigável e consegue ler Discos Gigantes. Possui **SECURE BOOT**, que impede vírus de serem carregados e o PC liga muito mais rápido. 

## 🌿Virtualização

Processo de Simular em Software um SO sobre outro Sistemas. Um Ambiente de VM consiste em 3 Partes:
* **HOST** - Contém os Recursos Reais de Hardware e Software
* **HYPERVISOR** - Desenvolve o SO Virtual
* **GUEST** - Executa sobre o Sistema Virtual

## 🌿Contêineres

Forma isolamento de processos, usuários e recursos, compartilham o mesmo núcleo do SO hospedeiro. Cada contêiner possui seus próprios identificadores, seu próprio sistema de arquivos, usuários. processos, dispositivos e configurações independentes

## 🌿Middleware

É a Camada intermediária entre aplicações e o SO. Fornece Serviços de Comunicação, Gerência de Transações, Implementação de Segurança, Autenticação e Autorização. Abstrai os Detalhes de Rede e Infraestrutura subjacente para as Aplicações. 

### 🎋 Middleware VS API

**Middleware** é uma camada intermediária que implementa várias tarefas de coordenação e comunicação entre componentes em Sistemas Operacionais ou Distribuídos. Já as **APIs** implementam uma interface padronizada para que Aplicações interajam com recursos ou serviços específicos, independentemente da localização desses recursos. 

## 🌿Tipos de Sistemas Operacionais

- **Sistemas Monoprogramáveis**
	- São os sistemas mais antigos e simples. Como o nome sugere, eles são projetados para executar **apenas um programa por vez**.
		- **Como funciona:** O processador, a memória e os periféricos ficam dedicados exclusivamente a um único programa até que ele termine sua execução.
		- **Desvantagem:** Têm baixa eficiência. Se o programa precisar ler um dado no disco (uma operação lenta), o processador ficará totalmente ocioso esperando essa ação terminar, desperdiçando tempo de processamento.
		- **Exemplo histórico:** MS-DOS.
		
- **Sistemas Multiprogramáveis**
	- São a base dos sistemas modernos. Eles permitem que **vários programas compartilhem os recursos do computador** (como memória e processador) simultaneamente.
		- **Como funciona:** Vários programas são carregados na memória. Se o "Programa A" pausa para carregar um arquivo ou aguardar a digitação do usuário, o Sistema Operacional rapidamente transfere o uso do processador para o "Programa B", mantendo a CPU sempre ocupada.
		- **Vantagem:** Alta eficiência e melhor aproveitamento dos recursos do computador. Para o usuário, dá a ilusão de que tudo está rodando ao mesmo tempo.
		- **Exemplos:** Windows, macOS, Linux, Android.
		
- **Sistemas com Múltiplos Processadores**
	- São sistemas que possuem **duas ou mais CPUs (processadores)** interconectadas trabalhando juntas em um mesmo computador.
		- **Como funciona:** O Sistema Operacional divide as tarefas ou os programas entre os vários processadores disponíveis, permitindo a execução paralela real (várias coisas sendo calculadas no exato mesmo milissegundo).
		- **Vantagens:** Maior poder de processamento (throughput), maior velocidade na resolução de problemas complexos e maior tolerância a falhas (se um processador falhar, os outros podem assumir, dependendo da arquitetura).

## 🌿Tipos de Acoplamento de Sistemas

- **Sistemas Fortemente Acoplados**
	- Neste modelo, os processadores estão muito próximos e **compartilham a mesma memória principal (RAM)** e o mesmo relógio (clock).
		- **Características:** A comunicação entre os processadores é extremamente rápida, pois é feita diretamente através da memória compartilhada. Geralmente, há um único Sistema Operacional gerenciando todos os processadores.
		- **Uso comum:** É a arquitetura padrão dos computadores e smartphones modernos (processadores _multicore_ ou placas-mãe com múltiplos soquetes de CPU).
		- **Limitação:** É mais difícil de escalar infinitamente, pois adicionar muitos processadores cria um gargalo no acesso à mesma memória RAM.
	
- **Sistemas Fracamente Acoplados**
	- Neste modelo, **cada processador possui sua própria memória local** e seu próprio Sistema Operacional independente. Eles funcionam como computadores autônomos (nós) interligados.
		- **Características:** A comunicação entre os processadores é feita através da troca de mensagens por uma rede de interconexão (como uma rede local LAN ou até a internet).
		- **Uso comum:** Sistemas distribuídos, _Clusters_ (vários computadores ligados para funcionar como um só) e computação em nuvem.
		- **Vantagens:** Alta escalabilidade (é fácil adicionar mais "nós" à rede) e altíssima tolerância a falhas (se um computador inteiro pifar, o resto da rede continua funcionando normalmente).

## 🌿Concorrência

A Medida que as CPU's atingem limites tecnológicos (frequência dos processadores), ganhos futuros em desempenho dependem de uma melhor exploração da concorrência (processamento paralelo). Sistemas Multiprogramáveis objetivam maximizar o uso dos recursos pela execução duas ou mais tarefas concorrentemente. 

## 🌿Métricas

- **Tempo de Resposta:** É o tempo necessário para o sistema responder a uma solicitação;
- **Throughput:** É a Quantidade de trabalho processado em um intervalo de tempo;
- **Utilização de CPU:** Percentual do Tempo em que a CPU está ativamente processando;
- **Utilização de Memória:** Quantidade de memória física e virtual utilizada; 
- **Latência de Disco:** Tempo para completar uma operação de E/S no disco;
- **Taxa de Transferência de E/S:** Volume de dados transferidos entre a memória e dispositivos de E/S;
- **Taxa de Erro de Páginas (Page Fault Page):** Frequência de falhas de página;
- **Context Switches por Segundo:** Número de trocas de contexto realizadas;
- **Disponibilidade:** Proporção do tempo em que o sistema está operacional; e 
- **Escalabilidade:** Capacidade de manter ou melhorar o desempenho com o aumento da carga.
