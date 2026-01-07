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
Anotações:
  - "[[JS & TS - 01 - Configurando o Ambiente]]"
  - "[[JS & TS - 02 - JavaScript Básico]]"
  - "[[JS & TS - 03 - JavaScript - Lógica de Programação]]"
  - "[[JS & TS - 04 - JavaScript - Funções]]"
  - "[[JS & TS -  05 - JavaScript - Arrays]]"
  - "[[JS & TS - 06 - JavaScript - Objetos e Prototypes]]"
  - "[[JS & TS - 07 - JavaScript POO]]"
  - "[[JS & TS - 08 - JS Assíncrono]]"
  - "[[JS & TS - 09 - JS Toolings e Modules]]"
  - "[[JS & TS - 10 - Node, NPM, Express e MongoDB]]"
  - "[[JS & TS - 11 - Projeto Agenda]]"
  - "[[JS & TS - 12 - Deploy da Aplicação]]"
  - "[[JS & TS - 13 - API Rest]]"
  - "[[JS & TS - 14 - React - Básico]]"
  - "[[JS & TS - 15 - React - Redux Saga]]"
  - "[[JS & TS - 16 - React Router Dom v6]]"
---
![[JS & TS.png|banner]]

## **Atividades Pendentes** | 2025.02

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


```dataviewjs

const currentPath = dv.current().file.folder;
const currentPage = dv.current().file.name;


const pages = dv.pages(`"${currentPath}"`)
    .filter(p => 
        p.Tipo === "Módulo" && 
        p.file.name !== dv.current().file.name
    );

let html = `<div class="subject-grid">`;

for (let page of pages) {
    const title = page.file.name; 
    const link = page.file.path;

    const parts = title.split(" - ");
    const imagePath = `Imagens/${currentPage}.png`;

    html += `
    <a href="${link}" class="internal-link subject-card">
        <img src="${app.vault.adapter.getResourcePath(imagePath)}">
        <div class="subject-title">${title}</div>
    </a>`;
}

html += `</div>`;
dv.el("div", html);
```
