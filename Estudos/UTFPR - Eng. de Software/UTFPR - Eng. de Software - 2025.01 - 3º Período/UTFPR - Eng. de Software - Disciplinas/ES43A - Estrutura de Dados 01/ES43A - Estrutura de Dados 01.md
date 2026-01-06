---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Rodrigo Henrique Cunha Palácios
Carga Horária: 90h
Nota Final: "9.1"
Início: 2025-03-25
Fim: 2025-06-30
Avaliações:
  - "[[ES43A - Avaliação 01]]"
  - "[[ES43A - Avaliação 02]]"
  - "[[ES43A - Média dos Exercicíos]]"
---

![[Estrutura de Dados - 01.png|banner]]
> [!banner-icon] :LiBookMarked: ES43A
#  :LiClipboard: **Atividades** | Estrutura de Dados 01 

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha o caminho do arquivo atual
let caminhoArquivoAtual = dv.current().file.path;

// Extraia o diretório base do curso (assumindo que os arquivos estão organizados em subpastas dentro da disciplina)
let diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");

// Caminho dinâmico para atividades dentro da disciplina atual
let caminhoAtividades = `${diretorioBase}/Atividades`;

// Obtenha todas as notas dentro do diretório especificado dinamicamente
let pages = dv.pages()
    .where(p => p.file.path.includes(caminhoAtividades));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph("🔹Durante a realização dessa disciplina não houve 'Atividades'.");
} else {
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
            dv.fileLink(p.file.path), // Link dinâmico para o arquivo
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
}

```

## :LiCalendarCheck2: **Registro de Aulas** | Estrutura de Dados 01 

| Aula                                                                                                                                                                  |                                            Atividade                                             | Falta | Data de Realização |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------: | :---: | :----------------: |
| Introdução a Ementa da Disciplina e Revisão sobre [[ES43A - Aula 01 - 25.03.25 - Revisão de Ponteiros\|Ponteiros em Linguagem C]]                                     |                                                X                                                 |   X   |     25/03/2025     |
| Revisão sobre [[ES43A - Aula 02 - 01.04.25 - Revisão de Alocação Dinâmica de Memória\|Alocação dinâmica de Memória em Linguagem C]]                                   |                                                X                                                 |   X   |     01/04/2025     |
| Início da Resolução da [[ES43A - Lista de Exs. 01\|Lista de Exs. 01]]                                                                                                 |                          [[ES43A - Lista de Exs. 01\|Lista de Exs. 01]]                          |   X   |     02/04/2025     |
| Revisão sobre [[ES43A - Aula 03 - 07.04.25 - Matrizes Dinâmicas\|Matrizes Dinâmicas]]                                                                                 |                                                X                                                 |   X   |     07/04/2025     |
| Início da Resolução da [[ES43A - Lista de Exs. 02\|Lista de Exs. 02]]                                                                                                 |                          [[ES43A - Lista de Exs. 02\|Lista de Exs. 02]]                          |   X   |     08/04/2025     |
| Introdução a [[ES43A - Aula 04 - 14.04.25 - Listas Encadeadas\|Lista Encadeadas]]                                                                                     |                                                X                                                 |   X   |     14/04/2025     |
| Aprofundamento a [[ES43A - Aula 05 - 15.04.25 - Listas Encadeadas com inserção ao final\|Listas encadeadas com inserção ao final]]                                    |                                                X                                                 |   X   |     15/04/2025     |
| Aprofundamento a [[ES43A - Aula 06 - 22.04.25 - Listas Encadeadas com inserção em posições\|Lista encadeadas com inserção em posição e utilização de recursividades]] | [[ES43A - Lista de Exs. 03\|Lista de Exs. 03]] \| [[ES43A - Lista de Exs. 04\|Lista de Exs. 04]] |   X   |     22/04/2025     |
| Aprofundamento a Listas Circulares                                                                                                                                    |                          [[ES43A - Lista de Exs. 05\|Lista de Exs. 05]]                          |  Sim  |     05/05/2025     |
| Aprofundamento a Listas Duplamente Encadeadas                                                                                                                         |                          [[ES43A - Lista de Exs. 06\|Lista de Exs. 06]]                          |  Sim  |     06/05/2025     |
| Aprofundamento a Listas Duplamente Encadeadas                                                                                                                         |                          [[ES43A - Lista de Exs. 07\|Lista de Exs. 07]]                          |   X   |     12/05/2025     |
| :LiSquareX: *Sem necessidade de Presença*                                                                                                                             |                                                X                                                 |   X   |     13/05/2025     |
| Aplicação da [[ES43A - Avaliação 01]]                                                                                                                                 |                                                X                                                 |   X   |     19/05/2025     |
| Vista da [[ES43A - Avaliação 01]]                                                                                                                                     |                                                X                                                 |   X   |     20/05/2025     |
| Introdução a [[ES43A - Aula 09 - 26.05.25 - Pilhas com Vetor\|Pilhas]]                                                                                                |                          [[ES43A - Lista de Exs. 08\|Lista de Exs. 08]]                          |   X   |     26/05/2025     |
| :LiSquareX: *Sem necessidade de Presença*                                                                                                                             |                          [[ES43A - Lista de Exs. 09\|Lista de Exs. 09]]                          |   X   |     27/05/2025     |
| Introdução a [[ES43A - Aula 07 - 09.06.25 - Filas com Listas\|Filas com Lista]]                                                                                       |                                                X                                                 |   X   |     09/06/2025     |
| Aprofundamento a  [[ES43A - Aula 08 - 10.06.25 - Filas com Vetor\|Filas com Vetor]]                                                                                   |                          [[ES43A - Lista de Exs. 10\|Lista de Exs. 10]]                          |   X   |     10/06/2025     |
| :LiSquareX: *Sem necessidade de Presença*                                                                                                                             |                                                X                                                 |   X   |     16/06/2025     |
| :LiSquareX: *Sem necessidade de Presença*                                                                                                                             |                                                X                                                 |   X   |     17/06/2025     |
| Introdução a Árvores Binárias                                                                                                                                         |                                                X                                                 |   X   |     23/06/2025     |
| Aprofundamentos a Árvores Binárias                                                                                                                                    |                          [[ES43A - Lista de Exs. 11\|Lista de Exs. 11]]                          |   X   |     24/06/2025     |
| Aplicação da [[ES43A - Avaliação 02]]                                                                                                                                 |                                                X                                                 |   X   |     30/06/2025     |


## :LiCalendarRange: Rastreamento de Presença | Estrutura de Dados 01

```dataviewjs
let editor = app.workspace.getLeaf().view.editor;
let conteudoArquivo = editor.getRange({ line: 0, ch: 0 }, { line: editor.lineCount() - 1, ch: 0 });
let linhas = conteudoArquivo.split('\n');

let faltas = 0;
let totalAulas = 0;

let dentroDaTabela = false;
let nomeMateria = app.workspace.getActiveFile().name.replace(".md", "");

for (let linha of linhas) {
    linha = linha.trim();

    // Detecta início da tabela
    if (linha.startsWith("| Aula ")) {
        dentroDaTabela = true;
        continue;
    }

    if (dentroDaTabela && linha.startsWith("|")) {
        // Ignora linhas de separadores como "| :--- | ---: |"
        if (/^(\|\s*:?-+:?\s*)+\|$/.test(linha)) continue;

        // Quebra a linha com regex que ignora os pipes dentro dos links
        let colunas = linha.split(/(?<!\\)\|/).map(c => c.trim()).filter(c => c.length > 0);

        if (colunas.length >= 4) {
            let falta = colunas[2].toLowerCase(); // Terceira coluna: Falta

            // Aceita 'sim' e 'x' (qualquer capitalização)
            let temFalta = ['sim'].includes(falta);

            totalAulas += 2;
            if (temFalta) {
                faltas += 2;
            }
        }
    }
}

dv.table(
    ["Relação Aulas / Faltas", "Quantidade"],
    [
        [`**Aulas** de ${nomeMateria}`, `**${totalAulas}**`],
        [`**Faltas** de ${nomeMateria}`, `**${faltas}**`]
    ]
);

let presenciaPercentual = totalAulas > 0 ? ((totalAulas - faltas) / totalAulas) * 100 : 0;
dv.paragraph(`Porcentagem de Presença: **${presenciaPercentual.toFixed(2)}%**`);
```
# :LiNotebook: **Anotações** | Estrutura de Dados 01

``` dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let caminhoArquivoAtual = dv.current().file.path;
let diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");

// Caminho dinâmico para atividades dentro da disciplina atual
let caminhoAtividades = `${diretorioBase}/Anotações`;
// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes(caminhoAtividades));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph("   :LiCheckCheck: Durante a realização dessa disciplina não houve 'Anotações'.");
} else {
    // Data atual
    let dataAtual = new Date();
    // Criar a tabela de dados com os ajustes visuais
    let tabelaDados = sortedPagesArray.map(p => {
        return [
            `**${p.file.link}**`, // Nome do arquivo em vez do link
        ];
    });
    // Exibir a tabela
    dv.table(
        ["Anotações"], 
        tabelaDados
    );
}

```

# :LiChartPie:  **Avaliações** | Estrutura de Dados 01

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual;

let caminhoArquivoAtual = dv.current().file.path;
let diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");
let caminhoAvaliações = `${diretorioBase}/Avaliações`;

let pages = dv.pages()
    .where(p => p.file.path.includes(caminhoAvaliações));

// Ordene as notas por 'Referência' (ou use 'file.name' se for o caso)
let sortedPages = pages.sort(p => p.file.name);

// Converta `sortedPages` para um array regular
let sortedPagesArray = Array.from(sortedPages);

// Inicialize variáveis para o cálculo da média final
let totalPeso = 0;
let totalNotaComPeso = 0;

// Crie uma tabela de dados, ignorando notas indefinidas no cálculo da média
let tabelaDados = sortedPagesArray.map(p => {
    let notaValida = p.Nota !== undefined && p.Nota !== null;
    if (notaValida) {
        totalPeso += p.Peso;
        totalNotaComPeso += p.Nota * p.Peso;
    }
    return [`[[${p.file.name}]] | ${p.Referência === null ? " " : p.Referência }`, p.Nota, p.Peso];
});

// Calcule a média final, considerando apenas as notas definidas
let mediaFinal = totalPeso ? totalNotaComPeso / totalPeso : 0;

// Adicione a média final como a última linha da tabela
tabelaDados.push(["**Média Final**", `**${notaManual ? notaManual : mediaFinal.toFixed(1)}**`, ""]);

// Exiba a tabela com as notas e a média final
dv.table(
    ["Avaliação", "Nota", "Peso"], 
    tabelaDados
);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Nota Final"] = notaManual ? notaManual : mediaFinal.toFixed(1);
    });
}
```
