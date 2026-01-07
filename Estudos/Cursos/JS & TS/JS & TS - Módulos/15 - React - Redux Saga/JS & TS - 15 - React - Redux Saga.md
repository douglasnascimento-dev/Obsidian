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
  - yellowCab
  - wideTable
  - wideFC
Fim: 2025-05-31
---

![[JSTS.png|banner]]
> [!banner-icon] :LiBookMarked: Módulo 15
>

# :LiClipboard: **Atividades** | React - Redux Saga
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
# :LiBook: **Anotações** | React - Redux Saga

[[JS & TS - 15.01 - Styled Components]]

[[JS & TS - 15.02 - React Router Dom v5]]

[[JS & TS - 15.03 - Rotas Personalizadas]]

[[JS & TS - 15.04 - React Toastify]]

[[JS & TS - 15.05 - Axios]]

[[JS & TS - 15.06 - React Reducer]]

[[JS & TS - 15.07 - Redux Saga]]

[[JS & TS - 15.08 - Redux Persisit]]

[[JS & TS - 15.09 - Estado em Componentes Funcionais]]

