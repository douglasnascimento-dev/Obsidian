---
Tipo: Módulo
Status: true
Início: 2024-12-02
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Fim: 2025-01-30
Anotações:
  - "[[JS & TS - 06.01 - Objetos em JS]]"
  - "[[JS & TS - 06.02 - Object.defineProperty e Object.defineProperties em JS]]"
  - "[[JS & TS - 06.03 - Métodos Úteis em JS]]"
  - "[[JS & TS - 06.04 - Prototypes]]"
  - "[[JS & TS - 06.05 - Herança em JS]]"
  - "[[JS & TS - 06.06 - Polimorfismo em JS]]"
  - "[[JS & TS - 06.07 - Factory Function + Prototypes e 'new Map']]"
Atividades:
  - "[[JS & TS - AC. 06.01.01 - Objetos em JS]]"
  - "[[JS & TS - AC. 06.02.01 - Object.defineProperty e Object.defineProperties em JS]]"
  - "[[JS & TS - AC. 06.03.01 - Métodos Úteis em JS]]"
  - "[[JS & TS - AC. 06.03.02 - Métodos úteis em JS]]"
  - "[[JS & TS - AC. 06.04.01 - Prototypes]]"
  - "[[JS & TS - AC. 06.05.01 - Herança em JS]]"
  - "[[JS & TS - AC. 06.07.01 - Factory Functions + Prototypes e 'new Map']]"
---

![[JS & TS.png|banner]]

## **Atividades** |  `$= dv.current().file.name`

```dataviewjs
const pathAtividades = `"${dv.current().file.folder}/Atividades"`;
const pages = dv.pages(pathAtividades).sort(p => p.file.name);
const pagesArray = Array.from(pages);

const dataAtual = new Date();
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

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
    dv.span(":LiCircleX: **Não há anotações registradas nesta disciplina.**");
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
