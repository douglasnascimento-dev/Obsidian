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
> [!banner-icon] 🌿Semana 11

## 🌳Protocolos da Camada de Aplicação

### 🌿HTTP

World Wide Web - WWW | Permite o acesso de documentos em hipermídia que são interligado. Através da arquitetura cliente > servidor. E para isso utiliza o HTTP

Uma página web é constituída de objetos. Pode ser diferentes de arquivos, que podem constituir de um arquivo HTML base que link demais páginas. Cada objeto é endereçável por uma URL 

- Cliente: browser ou navegador pede, recebe e visualiza
- Servidor: envia os objetos em resposta a pedidos

Usa o serviço de transporte do TCP. 

01. O Cliente inicia conexão na porta 80 
02. O Servidor aceita a conexão TCP do cliente
03. As mensagens HTTP passam a trocar as mensagens
04. A Conexão é encerrada

O HTTP é sem estado. Isso é o servidor não mantém informações sobre pedidos anteriores do cliente. No início a conexão era não persistente, no máximo um objeto é enviado numa conexão TCP. Hoje ocorre as conexões persistentes, então existem múltiplos objetos que podem ser enviados sobre uma única conexão TCP entre cliente e servidor. 

Os cookies permitem que sites monitorem seus usuários e é usado atualmente pela maioria do sites comercias:
- Uma linha de cookie na requisição 
- Uma linha de cookie na resposta
- Cliente - Um arquivo de cookie é gerenciado pelos navegadores
- Servidor -  Um banco de dados no servidor

Existem controvérsias sobre o uso de cookies por conta da privacidade dos usuários. 

### 🌿Correio Eletrônico

- Componentes
	- Agentes de Usuário - UA
		- Leitor de Correio - Como o Gmail e Outlook.
	- Servidores de Correio
		- Caixa de correio contém as mensagem de chegada, a fila de mensagens contém as mensagem de saída.
	- Simple Mail Transfer Protocol - SMTP
		- Quando envia, age como cliente. Quando recebe, age como servidor. 

	Utiliza o TCP para a transferência confiável, na porta 25. A transferência ocorre de modo direto. 

#### 🌱Protocolo de acesso ao correio

- Protocolos
	- POP - Post Office Protocol
		- Autorização
	- IMAP - Internet Mail Protocol
		- Mais comandos
		- Manuseio de mensagens
	- HTTP 
		- Mais utilizado

### 🌿DNS

O DNS - Domain Name System é uma base de dados distribuídos com muitos servidores. Protocolo da camada de aplicação. Função imprescindível para a Internet. Utiliza o UDP na porta 53.

> Servidores DNS **raiz** → Servidores DNS **com** → Servidores DNS **amazon.com**

Cada provedor, empresa tem servidor de nomes local. O Pedido DNS de hospedeiro ao servidor de nomes local, quando não consegue resolver ele procura um servidor raiz

O Servidor raiz procura outros servidores da hierarquia se o mapeamento for desconhecido. 

### 🌿BitTorrent

É um protocolo P2P para a distribuição de arquivos. O Torrent é o arquivo que contém informações do arquivo a ser baixado e localização de rastreadores.  Os Rastreadores definem a coleção de pares que participam da distribuição de um determinado arquivo. 






