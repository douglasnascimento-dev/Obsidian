---
cssclasses:
  - banner
  - banner-fade
Início: 2024-03-04
Cursos:
  - "[[Java]]"
  - "[[JS & TS]]"
  - "[[HTML & CSS]]"
Tipo: Inicial
---
![[Cursos.png|banner]]
> [!banner-icon] :LiBookMarked: Cursos

##  **Atividades Pendentes** | Cursos

```dataviewjs
const currentPath = dv.current().file.folder;

const avaliacoes = dv.pages(`"${currentPath}"`)
    .filter(p => 
        p.Tipo === "Atividade" && 
        p.file.frontmatter.Status == false
    );

if (avaliacoes.length > 0) {
    let tabelaDados = [];
    let dataAtual = new Date();

    // Array com os nomes dos meses em português
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    avaliacoes.forEach(avaliacao => {
        let dataFinal = new Date(avaliacao.file.frontmatter.Final);
        let disciplina = avaliacao.file.frontmatter.Disciplina;
        let conteudo = avaliacao.file.frontmatter.Conteúdo;
        let diferencaDias = (dataFinal - dataAtual) / (1000 * 60 * 60 * 24);

        // Formatar a data para "DD de Mês de YYYY"
        let dia = dataFinal.getDate();
        let mes = meses[dataFinal.getMonth()];
        let ano = dataFinal.getFullYear();
        let dataFormatada = `${dia} de ${mes} de ${ano}`;

        if (diferencaDias < 3) {
            dataFormatada = `<span style="color: var(--link-color);">**${dataFormatada}**</span>`;
        }

        tabelaDados.push([`${avaliacao.file.link} | ${conteudo}`, disciplina, dataFormatada, dataFinal]);
    });

    // Ordena a tabela com base na data limite real (índice 3 do array)
    tabelaDados.sort((a, b) => a[3] - b[3]);

    // Remove a coluna extra de ordenação antes de exibir
    tabelaDados = tabelaDados.map(row => row.slice(0, 3));

    dv.table(["Atividade", "Disciplina", "Data Limite"], tabelaDados);
} else {
    dv.span(":LiCircleX: **Não há atividades pendentes**");
}

```


## Cursos em Aberto | Cursos

```dataviewjs
const currentPath = dv.current().file.folder;
const pages = dv.pages(`"${currentPath}"`)
    .filter(p => 
        p.Tipo === "Curso" && 
        p.file.name !== dv.current().file.name
    );

const pagesArray = Array.from(pages);
let html = `<div class="subject-grid">`;

for (let page of pagesArray) {
    const title = page.file.name; 
    const link = page.file.path;

    const parts = title.split(" - ");
    const subjectName = parts.length > 1 ? parts.slice(1).join(" - ") : title;
    const imagePath = `Imagens/${subjectName}.png`;

    html += `
    <a href="${link}" class="internal-link subject-card">
        <img src="${app.vault.adapter.getResourcePath(imagePath)}">
        <div class="subject-title">${title}</div>
    </a>`;
}

html += `</div>`;
dv.el("div", html);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file && pagesArray.length > 0) {
    const links = pagesArray.map(p => `[[${p.file.name}]]`);
    await app.fileManager.processFrontMatter(file, fm => {
        fm["Cursos"] = links;
    });
}
```
