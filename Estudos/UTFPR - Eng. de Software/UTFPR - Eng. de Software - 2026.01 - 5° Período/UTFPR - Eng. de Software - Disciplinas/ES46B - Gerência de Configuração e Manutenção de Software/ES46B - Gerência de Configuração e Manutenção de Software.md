---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Eduarda de Maganha de Almeida
Carga Horária: "60"
Início: 2026-03-23
Fim:
Avaliações:
  - "[[ES46B - Avaliação Contínua]]"
  - "[[ES46B - Estudo de Caso]]"
  - "[[ES46B - Prova 01]]"
  - "[[ES46B - Prova 02]]"
Anotações:
  - "[[ES46B - 01 - Introdução]]"
  - "[[ES46B - 02 - Introdução a Conceitos]]"
  - "[[ES46B - 03 - Conceitos, Terminologias e Itens de Configuração]]"
  - "[[ES46B - 04 - Sistemas de Controle de Versão]]"
Atividades: []
Nota Final: "0.0"
---

## **Atividades** | `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAtividades = `"${dv.current().file.folder}/Atividades"`;
let pages = dv.pages(pathAtividades);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

if (sortedPagesArray.length === 0) {
    dv.span(":LiBadgeX: **Não há atividades registradas nesta disciplina.**");
} else {
    let dataAtual = new Date();
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    function formatarData(data) {
        if (!data) return "";
        let dia = data.getDate();
        let mes = meses[data.getMonth()];
        let ano = data.getFullYear();
        return `${dia} de ${mes} de ${ano}`;
    }

    function verificarDataFinal(dataFinal) {
        let diffMilissegundos = new Date(dataFinal) - dataAtual;
        let diffDias = diffMilissegundos / (1000 * 60 * 60 * 24);
        return diffDias < 2;
    }

    const corPendente = "rgb(54, 102, 129)";  
    const corConcluido = "rgb(91, 145, 177)"; 

    let tabelaDados = sortedPagesArray.map(p => {
        let dataInicio = p.Início ? new Date(p.Início) : null;
        let dataFinal = p.Final ? new Date(p.Final) : null;

        let statusTexto = p.Status === true ? "Concluído" : "Pendente";
        let corStatus = p.Status === true ? corConcluido : corPendente;

        if (dataFinal && verificarDataFinal(dataFinal) && statusTexto === "Pendente") {
            corStatus = "rgb(178, 50, 50)"; 
        }

        return [
            `**${p.file.link}** | ${p.Conteúdo ? p.Conteúdo : ""}`,
            formatarData(dataInicio),
            formatarData(dataFinal),
            `<span style="color:${corStatus}; font-weight: bold;">${statusTexto}</span>`,
        ];
    });

    dv.table(
        ["Atividade", "Data de Início", "Data Final", "Status"], 
        tabelaDados
    );
}

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    const linksAtividades = sortedPagesArray.map(p => `[[${p.file.name}]]`);
    await app.fileManager.processFrontMatter(file, fm => {
        if (JSON.stringify(fm["Atividades"]) !== JSON.stringify(linksAtividades)) {
            fm["Atividades"] = linksAtividades;
        }
    });
}
```

---

![[Banner 01 - 04.png]]

## **Registros de Aulas** |  `$= (dv.current().file.name).split(' - ')[1]`

| Aula                                                                         |   Atividade    |  Falta  | Data de Realização |
| :--------------------------------------------------------------------------- | :------------: | :-----: | :----------------: |
| Apresentação á Disciplina                                                    |       X        |    X    |     11.03.2026     |
| [[ES46B - 01 - Introdução]] e [[ES46B - 02 - Introdução a Conceitos]]        |    Atv. 01     |    X    |     13.03.2026     |
| [[ES46B - 03 - Conceitos, Terminologias e Itens de Configuração]]            |    Atv. 02     |    X    |     18.03.2026     |
| Sistemas de Controle de Versão - I                                           |    Atv. 03     |   Sim   |     20.03.2026     |
| Sistemas de Controle de Versão - II  & Processos de Gestão  de Configurações | Estudo de Caso |    X    |     25.03.2026     |
| Controle de Mudança e Linha de Base                                          |       X        | Abonada |     27.03.2026     |
| Armazenamento e Histórico de Alterações - I                                  |    Atv. 04     |    X    |     01.04.2026     |
|                                                                              |                |         |                    |

###  Rastreamento de Presença |  `$= (dv.current().file.name).split(' - ')[1]`

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

--- 

![[Banner 02 - 04.png]]

## **Anotações** |  `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAnotacoes = `"${dv.current().file.folder}/Anotações"`;
let pages = dv.pages(pathAnotacoes);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// --- Lógica Visual (Tabela) ---
if (sortedPagesArray.length === 0) {
     dv.span(":LiBadgeX: **Não há anotações registradas nesta disciplina.**");
} else {
    let cont = 1;
    let tabelaDados = sortedPagesArray.map(p => {
        let aulaLabel = cont < 10 ? `Aula 0${cont}` : `Aula ${cont}`;
        cont++; 
        return [ aulaLabel, p.file.link ];
    });

    dv.table(["Aula", "Anotações"], tabelaDados);
}

// --- Lógica de Persistência (YAML) ---
const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    const linksAnotacoes = sortedPagesArray.map(p => `[[${p.file.name}]]`);
    
    await app.fileManager.processFrontMatter(file, fm => {
        // Verifica mudança para evitar escrita desnecessária
        if (JSON.stringify(fm["Anotações"]) !== JSON.stringify(linksAnotacoes)) {
            fm["Anotações"] = linksAnotacoes;
        }
    });
}
```

---

![[Banner 01 - 04.png]]

## **Avaliações** |  `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAvaliacoes = `"${dv.current().file.folder}/Avaliações"`;
let notaManual;

let pages = dv.pages(pathAvaliacoes);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

let totalPeso = 0;
let totalNotaComPeso = 0;

// Cria uma array contendo os links no formato [[Nome da Avaliação]]
let linksAvaliacoes = sortedPagesArray.map(p => `[[${p.file.name}]]`);

let tabelaDados = sortedPagesArray.map(p => {
    let notaValida = p.Nota !== undefined && p.Nota !== null;
    if (notaValida) {
        totalPeso += p.Peso;
        totalNotaComPeso += p.Nota * p.Peso;
    }
    return [`[[${p.file.name}]] | ${p.Referência === null ? " " : p.Referência }`, p.Nota, p.Peso];
});

let mediaFinal = totalPeso ? totalNotaComPeso / totalPeso : 0;
let notaExibicao = notaManual ? notaManual : mediaFinal.toFixed(1);

tabelaDados.push(["**Média Final**", `**${notaExibicao}**`, ""]);

dv.table(
    ["Avaliação", "Nota", "Peso"], 
    tabelaDados
);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Nota Final"] = notaExibicao;
        fm["Avaliações"] = linksAvaliacoes; // Inserindo a lista de links no frontmatter
    });
}
```

