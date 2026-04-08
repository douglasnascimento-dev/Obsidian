---
cssclasses:
  - banner
  - banner-fade
  - academia
  - wideTable
  - wideFC
Tipo: Curso
Ministrado: Udemy | Luiz Otávio Miranda
Início: 2024-07-13
Fim: ""
Status: false
Módulos:
  - "[[01 - Módulo Introdutório]]"
---

## **Atividades Pendentes** | `$= dv.current().file.name`

```dataviewjs
let pastaAtual = dv.current().file.folder;

let avaliacoes = dv.pages(`"${pastaAtual}"`)
    .where(p => p.file.frontmatter.Tipo === "Atividade" && p.file.frontmatter.Status == false);

if (avaliacoes.length > 0) {
    let tabelaDados = [];
    let dataAtual = new Date();

    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    avaliacoes.forEach(avaliacao => {
        // Verifica se existe data final, senão pula ou trata erro
        if (!avaliacao.file.frontmatter.Final) return;

        let dataFinal = new Date(avaliacao.file.frontmatter.Final);
        let disciplina = avaliacao.file.frontmatter.Disciplina;
        let conteudo = avaliacao.file.frontmatter.Conteúdo;
        let diferencaDias = (dataFinal - dataAtual) / (1000 * 60 * 60 * 24);

        let dia = dataFinal.getDate();
        let mes = meses[dataFinal.getMonth()];
        let ano = dataFinal.getFullYear();
        let dataFormatada = `${dia} de ${mes} de ${ano}`;

        if (diferencaDias < 3) {
            dataFormatada = `<span style="color: var(--link-color);">**${dataFormatada}**</span>`;
        }

        tabelaDados.push([`${avaliacao.file.link} | ${conteudo}`, disciplina, dataFormatada, dataFinal]);
    });
    
    tabelaDados.sort((a, b) => a[3] - b[3]);

    tabelaDados = tabelaDados.map(row => row.slice(0, 3));

    dv.table(["Atividade", "Disciplina", "Data Limite"], tabelaDados);
} else {
    dv.span(":LiCircleX: **Não há atividades pendentes**");
}
```

---

![[Banner 01 - JS & TS.png]]

## Módulos | `$= dv.current().file.name`
```dataviewjs
const currentPath = dv.current().file.folder;
const currentPage = dv.current().file.name;

const pages = dv.pages(`"${currentPath}"`)
    .filter(p => 
        p.Tipo === "Módulo" && 
        p.file.name !== currentPage
    );

const pagesArray = Array.from(pages);
let html = `<div class="subject-grid">`;

for (let page of pagesArray) {
    const title = page.file.name; 
    const link = page.file.path;
    const img = page.file.frontmatter.banner
    const imagePath = `${currentPage}`;

    html += `
    <a href="${link}" class="internal-link subject-card">
        <img src="${img}">
        <div class="subject-title">${title}</div>
    </a>`;
}

html += `</div>`;
dv.el("div", html);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file && pagesArray.length > 0) {
    const links = pagesArray.map(p => `[[${p.file.name}]]`);
    await app.fileManager.processFrontMatter(file, fm => {
        fm["Módulos"] = links;
    });
}
```
