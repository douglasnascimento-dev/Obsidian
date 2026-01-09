---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: João Luiz Dallamuta Lopes
Carga Horária: 30h
Início: 2025-08-14
Fim: 2025-11-28
Avaliações:
  - "[[ES46E - Seminários]]"
  - "[[ES46E - Lista de Exercícios]]"
Nota Final: "8.3"
Atividades:
  - "[[ES46E - Entrega da Lista de Exercícios]]"
---


![[Estratégias de Inovação.png|banner]]
## **Atividades** | `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAtividades = `"${dv.current().file.folder}/Atividades"`;
let pages = dv.pages(pathAtividades);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

if (sortedPagesArray.length === 0) {
    dv.span(":LiCircleX: **Não há atividades registradas nesta disciplina.**");
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
 
## **Registros de Aulas** | `$= (dv.current().file.name).split(' - ')[1]`

| Aula                                                                   |                                 Atividade                                  | Falta | Data de Realização |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------: | :---: | :----------------: |
| Apresentação da Disciplina                                             |                                     X                                      |   X   |     15.08.2025     |
| Por que inovar?                                                        |                                     X                                      |   X   |     22.08.2025     |
| Tipos e Graus de Inovação                                              |                                     X                                      |   X   |     29.08.2025     |
| Princípios de Inovação Tecnológica                                     |                                     X                                      |   X   |     05.09.2025     |
| Ambiente e Cultura de Inovação                                         |                                     X                                      |   X   |     12.09.2025     |
| Estratégias de Inovação - Parte 1                                      |                                     X                                      |   X   |     19.09.2025     |
| Estratégias de Inovação - Parte 2                                      |                                     X                                      |  Sim  |     26.09.2025     |
| Propriedade Intelectual                                                |                                     X                                      |   X   |     03.10.2025     |
| Difusão de Tecnologia e da Inovação                                    |                                     X                                      |   X   |     10.10.2025     |
| Tópicos em Inovação                                                    | [[ES46E - Entrega da Lista de Exercícios\|Entrega da Lista de Exercícios]] |  Sim  |     17.10.2025     |
| Tópicos em Inovação                                                    |                                     X                                      |   X   |     24.10.2025     |
| :LiBadgeX: Sem necessidade de Presença - **SECOMP**                    |                                     X                                      |   X   |     31.10.2025     |
| Apresentação dos [[ES46E - Seminários\|Seminários]]                    |                                     X                                      |  Sim  |     07.11.2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina** |                                     X                                      |   X   |     14.11.2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina** |                                     X                                      |   X   |     28.11.2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina** |                                     X                                      |   X   |     05.12.2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina** |                                     X                                      |   X   |     12.12.2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina** |                                     X                                      |   X   |     19.12.2025     |

### **Rastreamento de Presença** | `$= (dv.current().file.name).split(' - ')[1]`

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

## **Anotações** | `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
// 1. Obtém o caminho da pasta onde esta nota atual está (a pasta da disciplina)
// 2. Adiciona o sufixo "/Anotações" para apontar para a subpasta correta
let pathAnotacoes = `"${dv.current().file.folder}/Anotações"`;

// Busca as notas diretamente dentro da pasta de Anotações
let pages = dv.pages(pathAnotacoes);

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
      dv.span(":LiBadgeX: **Não há anotações registradas nesta disciplina.**");
} else {
    let cont = 1;
    
    // Criar a tabela de dados com contador automático
    let tabelaDados = sortedPagesArray.map(p => {
        // Formata o número da aula com zero à esquerda (ex: Aula 01, Aula 02...)
        let aulaLabel = cont < 10 ? `Aula 0${cont}` : `Aula ${cont}`;
        cont++; 
        
        return [
            aulaLabel,
            p.file.link,
        ];
    });

    // Exibir a tabela
    dv.table(
        ["Aula", "Anotações"], 
        tabelaDados
    );
}
```

--- 

![[Banner 01 - 04.png]]

## **Avaliações** | `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAvaliacoes = `"${dv.current().file.folder}/Avaliações"`;
let notaManual;

let pages = dv.pages(pathAvaliacoes);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

let totalPeso = 0;
let totalNotaComPeso = 0;

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
    });
}
```


