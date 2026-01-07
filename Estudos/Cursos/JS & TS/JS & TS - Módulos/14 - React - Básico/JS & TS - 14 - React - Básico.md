---
Tipo: Módulo
Descrição: Neste módulo é apresentado e criado uma API Rest, utilizando os 4 métodos de um CRUD (Create > Read > Update > Delete), além da parte de Tokenização
Conteúdo: "'Tokens' | 'CRUD' | 'API'"
Status: true
Início: 2025-05-24
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Fim: 2025-05-31
---

![[JS & TS.png|banner]]
> [!banner-icon] :LiBookMarked: Módulo 14

# :LiClipboard: **Atividades** | React - Básico
```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

let caminhoArquivoAtual = dv.current().file.path;

// Extraia o diretório base do curso (assumindo que os arquivos estão organizados em subpastas dentro da disciplina)
let diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");

// Caminho dinâmico para atividades dentro da disciplina atual
let caminhoAtividades = `${diretorioBase}/Atividades`;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes(caminhoAtividades));

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

if(pages.length === 0){
    dv.paragraph(":LiCheckCheck: Durante a realização dessa disciplina não houve 'Atividades'");
} else {
dv.table(
    ["Atividade", "Data de Início", "Data Final", "Status"], 
    tabelaDados
);
}
```
# :LiBook: **Anotações** | React - Básico

### [[JS & TS - 14.01 - Criando um projeto React]]

Durante essas anotações é apresentada os comandos necessários para a criação de um projeto React. Além de suas escolhas no momento da criação. 

### [[JS & TS - 14.02 - Componentes]]

Durante essas anotações é apresentada as formatações para componentes sem estado e com estado. Além de seus métodos e convenções.

### [[JS & TS - 14.03 - Componentes + LocalStorage]]

Durante essas anotações é apresentada as utilizações combinadas do uso do localStorage e de componentes em React. 