---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: José Antônio Gonçalves
Carga Horária: 90h
Nota Final: "9.9"
Início: 2025-03-25
Fim: ""
Avaliações:
  - "[[ES43B - Média das Listas]]"
  - "[[ES43B - Projeto Pessoal - Entrega Parcial]]"
  - "[[ES43B - Projeto Pessoal - Entrega Final]]"
---

![[Programação Orientada a Objetos.png|banner]]
> [!banner-icon] :LiBookMarked: ES43B
# :LiClipboard: **Atividades** | Programação Orientada a Objetos 01 

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

## :LiCalendarCheck2: **Registro de Aulas** | Programação Orientada a Objetos 01 

| Aula                                                                                                                                                                 |                          Atividade                           | Falta | Data de Realização |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------: | :---: | :----------------: |
| Apresentação da Ementa da Disciplina e Introdução a linguagem de Programação Java                                                                                    |                              X                               |   X   |     25/03/2025     |
| [[ES43B - Aula 01 - 27.03.25 - Portabilidade da Linguagem Java e Entrada de Dados pelo Terminal\| Portabilidade da Linguagem Java e Entrada de Dados pelo Terminal]] |                              X                               |   X   |     27/03/2025     |
| [[ES43B - Aula 02 - 02.04.25 - Mudanças de Tipo\|Mudança de Tipo em Linguagem Java, utilizando com Casting e Classes Wrapper]]                                       |                              X                               |   X   |     01/04/2025     |
| [[ES43B - Aula 03 - 03.04.2025 - Introdução a Programação Orientada a Objetos\| Início do Conteúdo referente a Programação Orientada a Objeto]]                      |                              X                               |   X   |     03/04/2025     |
| Importância das [[ES43B - Aula 04 - 08.04.2025 - Organização de Objetos\|Convenções para o uso de Objetos, com getters e setters]]                                   |                              X                               |   X   |     08/04/2025     |
| Introdução e [[ES43B - Aula 05 - 10.04.2025 - Objetos dentro de Objetos\|Utilização de Objetos dentro de Objetos]]                                                   |                              X                               |   X   |     10/04/2025     |
| Utilização da [[ES43B - Aula 06 - 15.04.2025 - Entrada de Dados por Teclado\|Entrada de Dados por Teclado]]                                                          |                              X                               |   X   |     15/04/2025     |
| Utilização das [[ES43B - Aula 07 - 17.04.2025 - Funções Construtoras\|Funções Contrutoras]]                                                                          |                              X                               |  Sim  |     17/04/2025     |
| Aplicação do [[ES43B - Aula 08 - 22.04.2025 - Poliformismo por Sobrecarga\|Poliformismo por Sobrecarga]]                                                             |                              X                               |   X   |     22/04/2025     |
| Introdução a [[ES43B - Aula 09 - 27.04.2025 - Herança\|Herança]]                                                                                                     |                              X                               |   X   |     24/05/2025     |
| Aprofundamento ao Conceito de Herança                                                                                                                                | [[ES43B - Lista de Exs. 02]] \| [[ES43B - Lista de Exs. 03]] |  Sim  |     29/05/2025     |
| Aprofundamento ao Conceitos de Herança e Classes Mãe                                                                                                                 |                              X                               |   X   |     06/05/2025     |
| Introdução a Funções construtoras e Sobrescrita                                                                                                                      |                              X                               |   X   |     08/05/2025     |
| Aprofundamento a Funções construtoras e Sobreescrita                                                                                                                 |                              X                               |  Sim  |     13/05/2025     |
| Introdução de Interfaces                                                                                                                                             |                              X                               |   X   |     15/05/2025     |
| Aprofundamento a Interfaces                                                                                                                                          |                              X                               |   X   |     20/05/2025     |
| Aprofundamento a Interfaces - Métodos                                                                                                                                |                              X                               |   X   |     22/05/2025     |
| Introdução a Sobrecarga                                                                                                                                              |                              X                               |   X   |     27/05/2025     |
| Aprofundamento a Sobrecarga                                                                                                                                          |                              X                               |  Sim  |     29/05/2025     |
| Introdução a Appache - Comandos Básicos                                                                                                                              |                              X                               |   X   |     03/06/2025     |
| Introdução a JFrames                                                                                                                                                 |                              X                               |   X   |     05/06/2025     |
| Aprofundamento a [[ES43B - Aula 10 - 10.06.2025 - JFrame\| JFrames]]                                                                                                 |                              X                               |   X   |     10/06/2025     |
| Aprofundamento a JFrames - Elementos                                                                                                                                 |                              X                               |   X   |     12/06/2025     |
| Aprofundamento a JFrames - Funções                                                                                                                                   |                              X                               |   X   |     17/06/2025     |
| Aprofundamento a JFrames - Tabelas                                                                                                                                   |                              X                               |   X   |     19/06/2025     |
| Aprofundamento a JFrames - Menu                                                                                                                                      |                              X                               |  Sim  |     24/06/2025     |
| Métodos de Processos de Produção de Software                                                                                                                         |                              X                               |   X   |     26/06/2025     |

## :LiCalendarRange: Rastreamento de Presença | Programação Orientada a Objetos 01

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
# :LiNotebook: **Anotações** | Programação Orientada a Objetos 01

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

    let dataAtual = new Date();
    let tabelaDados = sortedPagesArray.map(p => {
        return [
            `**${p.file.link}**`,
        ];
    });
    // Exibir a tabela
    dv.table(
        ["Anotações"], 
        tabelaDados
    );
}

```

# :LiChartPie: **Avaliações** | Programação Orientada a Objetos 01

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

