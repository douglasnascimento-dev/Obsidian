---
Tipo: Módulo
Status: true
Início: 2024-07-17
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Fim: 2024-08-25
Anotações:
  - "[[JS & TS - 02.01 - Tipos de Dados Primitivos em JS]]"
  - "[[JS & TS - 02.02 - 'numbers' em JS]]"
  - "[[JS & TS - 02.03 - Arrays em JS]]"
  - "[[JS & TS - 02.04 - Funções em JS]]"
  - "[[JS & TS - 02.05 - Objetos em JS]]"
Atividades:
---

![[JS & TS.png|banner]]

## **Atividades** |  `$= dv.current().file.name`

```dataviewjs
const pathAtividades = `"${dv.current().file.folder}/Atividades"`;
const pages = dv.pages(pathAtividades).sort(p => p.file.name);
const pagesArray = Array.from(pages);

const dataAtual = new Date();
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

if (pagesArray.length === 0) {
    dv.span(":LiBadgeX: **Não há atividades registradas nesta disciplina.**");
    return;
}

function formatarData(data) {
    if (!data) return "";
    let d = new Date(data);
    return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}

function verificarUrgencia(dataFinal) {
    if (!dataFinal) return false;
    let diff = (new Date(dataFinal) - dataAtual) / (1000 * 60 * 60 * 24);
    return diff < 2;
}

const corPendente = "rgb(54, 102, 129)";
const corConcluido = "rgb(91, 145, 177)";
const corUrgente = "rgb(178, 50, 50)";

let tabelaDados = pagesArray.map(p => {
    let statusTexto = p.Status === true ? "Concluído" : "Pendente";
    let corStatus = p.Status === true ? corConcluido : corPendente;

    if (statusTexto === "Pendente" && verificarUrgencia(p.Final)) {
        corStatus = corUrgente;
    }

    return [
        p.file.link,
        formatarData(p.Início),
        formatarData(p.Final),
        `<span style="color:${corStatus}; font-weight: bold;">${statusTexto}</span>`
    ];
});

dv.table(["Atividade", "Início", "Prazo Final", "Status"], tabelaDados);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    const links = pagesArray.map(p => `[[${p.file.name}]]`);
    await app.fileManager.processFrontMatter(file, fm => {
        fm["Atividades"] = links;
    });
}
```

## **Anotações** |  `$= dv.current().file.name`

```dataviewjs
const pathAnotacoes = `"${dv.current().file.folder}/Anotações"`;
const pages = dv.pages(pathAnotacoes).sort(p => p.file.name);
const pagesArray = Array.from(pages);

if (pagesArray.length === 0) {
    dv.span(":LiBadgeX: **Não há atividades registradas nesta disciplina.**");
} else {
    let cont = 1;
    let tabelaDados = pagesArray.map(p => {
        let aulaLabel = cont < 10 ? `Aula 0${cont}` : `Aula ${cont}`;
        cont++;
        return [aulaLabel, p.file.link];
    });

    dv.table(["Aula", "Anotação"], tabelaDados);

    const file = app.vault.getAbstractFileByPath(dv.current().file.path);
    if (file) {
        const links = pagesArray.map(p => `[[${p.file.name}]]`);
        await app.fileManager.processFrontMatter(file, fm => {
            fm["Anotações"] = links;
        });
    }
}
```
