---
Tipo: Módulo
Descrição: Nesse módulo será apresentado o conceito de execução assíncrona pela machine do JS. Utilizando diversas ferramentas, desde das inicias as mais modernas, para a execução assíncrona do código
Conteúdo: "'Promisses' | 'FetchAPI' | 'XMLHTTPRequest'"
Status: true
Início: 2025-02-25
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Fim: 2025-02-28
Anotações:
  - "[[JS & TS - 08.01 - Promisses]]"
  - "[[JS & TS - 08.02 - Async e Await]]"
  - "[[JS & TS - 08.03 - XMLHTTPRequest]]"
  - "[[JS & TS - 08.04 - FetchAPI]]"
Atividades:
  - "[[JS & TS - AC. 08.01.01 - Promisses]]"
  - "[[JS & TS - AC. 08.03.01 - XMLHTTPRequest]]"
  - "[[JS & TS - AC. 08.04.01 - FetchAPI]]"
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌳
## 💙**Atividades** | JS & TS - JS Assíncrono

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/Cursos/JS & TS/JS & TS - Módulos/08 - JavaScript Assíncrono/Atividades'));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Data atual
let dataAtual = new Date();

// Array com os nomes dos meses em português
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// Função para formatar a data para "DD de Mês de YYYY"
function formatarData(data) {
    if (!data) return "";
    let dia = data.getDate();
    let mes = meses[data.getMonth()];
    let ano = data.getFullYear();
    return `${dia} de ${mes} de ${ano}`;
}

// Função para verificar se a data final está a menos de dois dias do prazo
function verificarDataFinal(dataFinal) {
    let diffMilissegundos = new Date(dataFinal) - dataAtual;
    let diffDias = diffMilissegundos / (1000 * 60 * 60 * 24);
    return diffDias < 2;
}

// Cores baseadas na paleta fornecida
const corPendente = "rgb(54, 102, 129)";  // Azul principal
const corConcluido = "rgb(91, 145, 177)"; // Azul mais claro

// Criar a tabela de dados com os ajustes visuais
let tabelaDados = sortedPagesArray.map(p => {
    let dataInicio = p.Início ? new Date(p.Início) : null;
    let dataFinal = p.Final ? new Date(p.Final) : null;

    // Definir status e cor
    let statusTexto = p.Status === true ? "Concluído" : "Pendente";
    let corStatus = p.Status === true ? corConcluido : corPendente;

    if (dataFinal && verificarDataFinal(dataFinal) && statusTexto === "Pendente") {
        corStatus = "rgb(178, 50, 50)"; // Vermelho escuro para urgência
    }

    return [
        `**${p.file.link}** | ${p.Conteúdo ? p.Conteúdo : ""}`, // Nome do arquivo em vez do link
        formatarData(dataInicio),
        formatarData(dataFinal),
        `<span style="color:${corStatus}; font-weight: bold;">${statusTexto}</span>`, // Aplicar cor e negrito
    ];
});

// Exibir a tabela
dv.table(
    ["Atividade", "Data de Início", "Data Final", "Status"], 
    tabelaDados
);

```

### 🔷**Registro de Aulas** | JS & TS - JS Assíncrono

| <p style="text-align: center">Título - Aula</p> | <p style="text-align: center">Status - Aula</p> | <p style="text-align: center">Último Minuto</p> |
| :---------------------------------------------- | :---------------------------------------------: | :---------------------------------------------: |
| 🔹108 - Promisses                               |                    Concluído                    |                    -- \| --                     |
| 🔹109 - Métodos Úteis para Promisses            |                    Concluído                    |                    -- \| --                     |
| 🔹110 - Async / Await                           |                    Concluído                    |                    -- \| --                     |
| 🔹111 - XMLHTTPRequest (GET) + Promisses        |                    Concluído                    |                    -- \| --                     |
| 🔹112 - FetchAPI (GET)                          |                    Concluído                    |                    -- \| --                     |
| 🔹113 - FetchAPI e Axios \| JSON                |                    Concluído                    |                    -- \| --                     |

## 💙**Anotações** | JS & TS - JS Assíncrono

### [[JS & TS - 08.01 - Promisses]]

Durante essas notas é apresentado o conceito de 'promisses', que são promessas que se faz ao motor do JS. Isso é que determinada parte do código, não será executado de forma síncrona, de forma que demora algum tempo para ser devolvido uma resposta

### [[JS & TS - 08.02 - Async e Await]]

Durante essas notas é introduzida o uso de 'async' e 'await' em códigos JS. Isso permite deixar o código mais limpo ao utilizar as 'promisses' 

### [[JS & TS - 08.03 - XMLHTTPRequest]]

Durante essas notas é apresentado o método 'XMLHTTPRequest' que permite fazer requisições de arquivos .xml, .txt, .html e/ou .json. A Utilização desse método é considerada ultrapassada

### [[JS & TS - 08.04 - FetchAPI]]

Durante essas notas é apresentada o método 'FetchAPI' que é considerada uma evolução do 'XMLHTTPRequest'. A Utilização desse método é mais comum e menor para a execução