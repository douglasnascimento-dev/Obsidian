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


![[Java.png|banner]]
> [!banner-icon] :LiNotebook: Comportamento de Memória
# 🌳Data-\[Hora] | Local Vs Data-Hora | Global

- Data-\[Hora] | Local
	- Quando o momento exato não interessa a pessoas de outro fuso horário. Uso comum: sistemas de região única, Excel. ==A declaração de Hora é opcional.==
- Data-Hora | Global
	- Quando o momento exato interessa a pessoas de outro fuso horário. Uso comum: sistemas multi-região, web. ==A declaração de Hora é obrigatória.==

### 🌿GMT 

Se refere ao  Greenwich Mean Time que também se refere Horário de Londres que é o Horário do padrão UTC - Coordinated Universal Time. Também chamado de "Z" time, ou Zulu time.

> **Exemplos**:
> São Paulo: GMT-3
> Manaus: GMT-4
> Lisboa: GMT+1

## 🌿ISO 8601

- Data-\[Hora] | Local
	- `2022-07-21`: 
		- Representa apenas a data, no formato `AAAA-MM-DD`.
	- `2022-07-21T14:52`
		- Aqui, a letra **"T"** atua como um separador, indicando o início da representação do tempo. Este exemplo mostra a data, hora e minuto.
	- `2022-07-22T14:52:09`: 
		- Adiciona os segundos à representação.
	- `2022-07-22T14:52:09.4073`
		- Apresenta o mais alto grau de precisão entre os exemplos locais, incluindo frações de segundo.

- Data-Hora | Global
	- `2022-07-23T14:52:09Z`
		- A letra **"Z"** é o designador para o Tempo Universal Coordenado (UTC), também conhecido como "Zulu time". Esta é a forma mais comum de representar um instante de tempo de forma global e inequívoca, pois se refere ao fuso horário de referência (offset zero).
	- `2022-07-23T14:52:09.254935Z`
		- Similar ao anterior, mas com uma precisão maior de frações de segundo, também em UTC.
	- `2022-07-23T14:52:09-03:00`
		- Este formato indica um **offset** (deslocamento) em relação ao UTC. Neste caso, `-03:00` significa que o tempo representado está 3 horas _atrás_ do UTC. Este é o fuso horário oficial de Brasília (BRT). Portanto, `14:52:09` no horário de Brasília corresponde a `17:52:09` em UTC. Um offset positivo (ex: `+02:00`) indicaria um tempo 2 horas _à frente_ do UTC.

## 🌿Tipos para Data-Hora

- Data-Hora | Local 
	- LocalDate 
	- LocalDateTime 

- Data-Hora | Global 
	- Instant 

- Duração
	- Duration 

- Outros 
	- ZoneId 
	- ChronoUnit