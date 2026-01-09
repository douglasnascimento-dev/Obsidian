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

![[Requisitos de Software.png|banner]]
> [!banner-icon] 🌿Aula 09.05.25
### 🌳Requisitos Não Funcionais

Descrevem **restrições** sobre os serviços ou funções oferecidos pelo Sistema. São requisitos que expressam as condições que o software deve atender ou qualidades especificas que o software deve ter. Estão relacionados às propriedades emergentes do sistema, como :
- A Confiabilidade;
- O Tempo de resposta;
- O Espaço de armazenamento;
- A Proteção; e 
- A Disponibilidade. 

Podem envolver o sistema como um todo, são mais amplos. Especificam como o sistema deve se comportar e serem mensuráveis.

- Velocidade → ex: transações processadas por segundo.
- Tamanho → ex: bytes, números de chips de RAM.
- Facilidade de uso → ex: tempo de treinamento.
- Confiabilidade → ex: tempo médio de falhas, probabilidade de indisponibilidade, taxa de ocorrência de falhas.
- Robustez → ex: tempo de reinício após falha, percentual de eventos causando falhas, probabilidade de corrupção de dados após a falha.
- Portabilidade → ex: número de sistema destino. 

Ao definir os requisitos não funcionais, a utilização de determinadas palavras podem ser evitadas.

- Amigável → números de passos, menus para auxiliar usuários.
- Portável → requisitos mínimos de hardware, sistemas operacionais em que deve funcionar.
- Pequeno → dimensões aceitáveis em tantos bytes
- Flexível → funções que implementam uma de várias possibilidades. 

> As consultas ao sistema devem ser respondidas rapidamente

O Que é rapidamente? 1 seg.? 2 seg.? 3 seg.? → As consultas ao sistema devem ser respondidas em até 3 segundos. 

### 🌿Classificação

- **Requisito do Produto** → apresenta como o sistema deve se comportar e as características desejáveis que um sistema deve possuir.
- **Requisitos Organizacionais** → são derivados de metas, políticas e procedimentos das organizações do cliente e desenvolvedor. 
- **Requisitos Externos** → são consequências de fatores externos do sistema e é derivado da necessidade de o sistema estar em conformidade. 

#### 🌱Requisitos do Produto

-  **Usabilidade**
 
Pode ser definido por "É fácil de usar?". A Usabilidade pode ser expressa em termos de:

- Facilidade de aprender → associado ao tempo e esforço mínimo exigido para alcançar um determinado nível de desempenho no uso do sistema. 
- Facilidade de uso → relacionado à velocidade de execução de tarefas e à redução de erros no uso do sistema. 

> Os usuários devem ser capazes de utilizar todas as funcionalidade do sistema após 2 horas de treinamento

> O Usuário deve ser capaz de final a compra com menos de 3 cliques na página

- **Eficiência**

Pode ser definido por "É rápido e enxuto". O Desempenho é importante pois afeta a usabilidade de um sistema. O requisito de desempenho pode ser decomposto em termos de tempo e espaço. 

Se um sistema de software é lento, ele certamente reduz a produtividade de seus usuários ao ponto de não atender às suas necessidades. Se um sistema de software requer muito espaço em disco para armazenamento de informações, pode ser oneroso utilizá-lo. 

> O Sistema deverá processar 1000 requisições a cada segundo. 

> O Executável do Sistema não deve ser superior a 512 kbytes. 

- **Confiabilidade**

Pode ser definido por "É seguro?". A Confiabilidade de software, geralmente define que um sistema executará suas funções como esperado. 

> O Sistema deve estar disponível 70% das vezes.

> Se o sistema falhar, os dados do usuário devem ser recuperados pelo sistema. 

- **Portabilidade**

Pode ser definido por "É fácil de usar em outro ambiente". Está ligado a possibilidade de ser executado em diferentes ambientes.

> O Sistema deve ser operacionalizado em Windows e Linux

> O Sistema deve abrir nos browsers Internet Explorer, Chorme e Firefox

#### 🌱Requisitos Organizacionais

Especifica que o sistema deve ser de acordo com um processo padrão ou política ou procedimentos da empresa. 

- **Entrega**

> Todos os documentos entregue devem seguir o cabeçalhos e rodapé definidos pela empresa. 

- **Implementação**

> O Sistema deve ser implementado na linguagem Java

- **Padrão**

> O Sistema deve ser desenvolvido usando os conceitos de POO

#### 🌱Requisitos Externos

São requisitos que podem ser colocados no produto e no processo e são derivados do ambiente que é desenvolvido.

- **Interoperabilidade**

> O Sistema deve interagir com o API 'OpenWeatherMap'

- **Éticos**

> O sistema não deve revelar aos operados nenhuma informação pessoal dos clientes

- **Legais**

> O Sistema deverá armazenar as informações de acordo com a Lei Geral de Proteção de Dados