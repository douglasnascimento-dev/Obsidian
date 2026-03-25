---
cssclasses:
  - banner
  - banner-fade
Períodos:
  - "[[UTFPR - Eng. de Software - 2024.01 - 1º Período]]"
  - "[[UTFPR - Eng. de Software - 2024.02 - 2º Período]]"
  - "[[UTFPR - Eng. de Software - 2025.01 - 3º Período-]]"
  - "[[UTFPR - Eng. de Software - 2025.02 - 4º Período]]"
Coeficiente de Rendimento: "0.9183"
Disciplinas:
  - "[[ES41A - Algoritimos - 01]]"
  - "[[ES41B - Introdução a Eng. de Software]]"
  - "[[ES41D - Fundamentos da Matemática]]"
  - "[[ES41C - Organização de Computadores]]"
  - "[[ES41F - Inglês Instrumental]]"
  - "[[EC47C - Programação Web Front-end]]"
  - "[[EC47B - Redes de Computadores]]"
  - "[[ES43C - Requisitos de Software]]"
  - "[[ES45C - Qualidade de Software]]"
  - "[[PBE - Probabilidade e Estatística]]"
  - "[[ES43A - Estrutura de Dados - 01]]"
  - "[[ES43B - Programação Orientada a Objetos - 01]]"
  - "[[EC47D - Gerenciamento de Projeto de Software]]"
  - "[[EC48B - Programação Web Back-end]]"
  - "[[ES44A - Estrutura de Dados - 02]]"
  - "[[ES44B - Programação Orientada a Objetos - 02]]"
  - "[[ES44D - Interação Homem Computador]]"
  - "[[ES44F - Segurança da Informação]]"
  - "[[ES46E - Estratégias de Inovação]]"
  - "[[EC47E - Empreendedorismo]]"
  - "[[ES42B - Algoritimos - 02]]"
  - "[[ES42C - Processo de Produção de Software]]"
  - "[[ES42D - Sistemas Operacionais]]"
  - "[[ES42E - Banco de Dados]]"
  - "[[ES42F - Fundamentos da Ética]]"
  - "[[ES42G - Matemática Discreta]]"
Tipo: Inicial
Início: 2024-03-04
Nota Final: "7.7"
---


##  **Atividades Pendentes** | Eng. de Software

```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software"')
    .where(p => p.file.frontmatter.Tipo === "Atividade" && p.file.frontmatter.Status == false);

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

--- 

![[Banner 01 - Eng..png]]

## **Períodos** | Eng. de Software


```dataviewjs
const pages = dv.pages(`"${dv.current().file.folder}"`)
    .filter(p => p.file.name.includes("º Período") && p.file.name !== dv.current().file.name);

let html = `<div class="subject-grid">`;

for (const page of pages.sort(p => p.file.name)) {
    const match = page.file.name.match(/(\d+)º Período$/);
    
    if (match) {
        const num = match[1].padStart(2, '0');
        const bannerFile = `${num} Período.png`;
        const label = `${match[1]}º Período`;

        html += `
        <a href="${page.file.path}" class="internal-link subject-card">
            <img src="${app.vault.adapter.getResourcePath("Imagens/" + bannerFile)}">
            <div class="subject-title">${label}</div>
        </a>`;
    }
}

html += `</div>`;
dv.el("div", html);
```

--- 

![[Banner 02 - Eng..png]]

## **Coeficiente de Rendimento** | Eng. de Software

```dataviewjs
let periodos = dv.pages('"Estudos/UTFPR - Eng. de Software"')
    .where(p => p.file.frontmatter?.Tipo === "Período")
    .sort(p => p.file.name, 'asc'); // <-- AQUI ESTÁ A CORREÇÃO

let tabelaCR = [];
let CRTotal = 0;
let cargaHorariaTotal = 0;

periodos.forEach(periodo => {
    let CR = periodo.file.frontmatter["Coeficiente de Rendimento"] || 0;
    let cargaHorariaStr = periodo.file.frontmatter["Carga Horária"] || "0h";
    
    let cargaHoraria = parseInt(cargaHorariaStr.replace('h', ''), 10);
    
    if (CR !== "Sem dados" && cargaHoraria > 0) {
        CR = Number(CR);
        CRTotal += CR * cargaHoraria;
        cargaHorariaTotal += cargaHoraria;
        tabelaCR.push([periodo.file.link, CR.toFixed(4), `${cargaHoraria}hrs`]);
    } else {
        tabelaCR.push([periodo.file.link, "Sem dados", `${cargaHoraria}hrs`]);
    }
});

let CRGeral = cargaHorariaTotal > 0 ? (CRTotal / cargaHorariaTotal).toFixed(4) : "Sem dados";

dv.table(["Período", "Coeficiente de Rendimento", "Carga Horária"], tabelaCR);

dv.paragraph(`### :LiChartBarBig: Coeficiente de Rendimento (CR): **${CRGeral}**`);
```



