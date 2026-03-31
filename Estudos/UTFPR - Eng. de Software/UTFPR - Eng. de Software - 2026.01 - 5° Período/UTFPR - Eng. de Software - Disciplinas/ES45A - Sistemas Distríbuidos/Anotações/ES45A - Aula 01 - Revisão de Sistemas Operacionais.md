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

Ficam gravados em um Chip dentro da Placa Mãe. A Função Principal deles é serem a ponte o Hardware e os Software.

### 🎋 BIOS

É a Tecnologia Antiga, criada na Década de 70. Ela faz um **POST**[^1] , mas só consegue ler discos de até 2 TB. A Interface é simples e o Processo de Inicialização Lento porque é necessário inicializar cada Componente de Hardware

[^1]: Um CheckUp Inicial para ver se a Memória RAM e o Processador estão OK

### 🎋 UEFI

É o Sucessor Moderno da BIOS. Unanimidade em PC's recentes (<10 anos). Possui Interface amigável e consegue ler Discos Gigantes. Possui Secure Boot, que impede vírus de serem carregados e o PC liga muito mais rápido. 

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

**Middleware** é uma camada intermediária que implementa várias tarefas de coordenação e comunicação entre componentes em Sistemas Operacionais ou Distríbuidos
