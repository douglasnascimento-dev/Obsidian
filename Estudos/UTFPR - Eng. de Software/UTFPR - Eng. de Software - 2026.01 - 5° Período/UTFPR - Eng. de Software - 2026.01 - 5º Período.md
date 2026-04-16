---
cssclasses:
  - banner
  - banner-fade
Disciplinas:
  - "[[EC46G - Metodologias de Pesquisa]]"
  - "[[ES45A - Sistemas Distribuidos]]"
  - "[[ES48E - Mineração de Dados]]"
  - "[[ES48H - Programação de Banco de Dados]]"
Coeficiente de Rendimento: "0.0000"
Tipo: Período
Carga Horária: 420h
---

> [!banner-icon] `$= dv.current().file.name.split(" - ")[2]`

## **Atividades Pendentes** | `$= dv.current().file.name.split(" - ")[2]`

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
    dv.span(":LiBadgeX: **Não há atividades pendentes**");
}
```

--- 

![[Banner 01 - 04.png]]

## **Disciplinas** | `$= dv.current().file.name.split(" - ")[2]`

```dataviewjs
const currentPath = dv.current().file.folder;

// Busca as páginas do tipo Disciplina na pasta atual
const pages = dv.pages(`"${currentPath}"`)
    .filter(p => 
        p.Tipo === "Disciplina" && 
        p.file.name !== dv.current().file.name
    );

const pagesArray = Array.from(pages);
let html = `<div class="subject-grid">`;

for (let page of pagesArray) {
    const title = page.file.name; 
    const link = page.file.path;

    // Lógica da Capa: Nome da disciplina após o " - "
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

// Automação: Vincula os links das disciplinas no YAML da nota atual
const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file && pagesArray.length > 0) {
    const links = pagesArray.map(p => `[[${p.file.name}]]`);
    await app.fileManager.processFrontMatter(file, fm => {
        fm["Disciplinas"] = links;
    });
}
```

--- 
## **Grade Horária** | `$= dv.current().file.name.split(" - ")[2]`

````col
```col-md 
flexGrow=2
===
|     | **Segunda** | **Terça** | **Quarta** | **Quinta** | **Sexta** |
| --- | :-----: | :---: | :----: | :----: | :---: |
| **N2**  |        |ES45A|ES45A|        |        |
| **N3**  |        |ES45A|ES45A|        |        |
| **N4**  |        |        |ES46B|        |ES46B|
| **N5**  |        |        |ES46B|        |ES46B|
```

```col-md
![[Banner 03 - 04.png]]
```
````

--- 

![[Banner 02 - 04.png]]

## **Coeficiente do Período** | `$= dv.current().file.name.split(" - ")[2]`
```dataviewjs
// Configuração automática do caminho
const currentFolder = `"${dv.current().file.folder}"`;
const pages = dv.pages(currentFolder);

// Separação em memória
const disciplinas = pages.filter(p => p.Tipo === "Disciplina").sort(p => p.file.name);
const avaliacoes = pages.filter(p => p.Tipo === "Avaliação");

let mediaTotalPonderada = 0;
let cargaHorariaTotal = 0;

for (let disciplina of disciplinas) {
    const nomeDisciplina = disciplina.file.name;
    
    // Tratamento de dados da Disciplina
    const rawCH = disciplina["Carga Horária"] || "0h";
    const ch = parseInt(String(rawCH).replace(/\D/g, "")) || 0; 
    const notaFinal = parseFloat(disciplina["Nota Final"]) || 0;

    // Filtra e converte imediatamente para Array nativo
    const evalsDaMateria = avaliacoes
        .filter(a => a.Disciplina && String(a.Disciplina).includes(nomeDisciplina))
        .sort(a => a.file.name);

    // CORREÇÃO AQUI: Convertendo para array nativo antes de manipular
    const rows = Array.from(evalsDaMateria).map(a => [a.file.link, a.Nota ?? "-"]);
    
    // Agora o .push funciona porque 'rows' é um Array legítimo
    rows.push(["**Média Final**", `**${notaFinal.toFixed(1)}**`]);

    dv.header(3, nomeDisciplina);
    if (rows.length > 1) { 
        dv.table(["Avaliação", "Nota"], rows);
    } else {
        dv.paragraph("*Sem avaliações registradas.*");
    }

    if (ch > 0) {
        mediaTotalPonderada += (notaFinal * ch);
        cargaHorariaTotal += ch;
    }
}

const rawCR = cargaHorariaTotal > 0 ? ((mediaTotalPonderada / cargaHorariaTotal) / 10) : 0;
const crFormatado = rawCR.toFixed(4);

dv.paragraph(`### :LiChartBarBig: Coeficiente de Rendimento | Período (CRp): **${crFormatado}**`);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    setTimeout(() => {
        app.fileManager.processFrontMatter(file, fm => {
            if (String(fm["Coeficiente de Rendimento"]) !== crFormatado) {
                fm["Coeficiente de Rendimento"] = crFormatado;
                console.log(`CR atualizado: ${crFormatado}`);
            }
        });
    }, 500);
}
```
