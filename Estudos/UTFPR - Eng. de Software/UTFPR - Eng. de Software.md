---
cssclasses:
  - banner
  - banner-fade
Início: 2024-03-04
Períodos:
  - "[[UTFPR - Eng. de Software - 2024.01 - 1º Período]]"
  - "[[UTFPR - Eng. de Software - 2024.02 - 2º Período]]"
  - "[[UTFPR - Eng. de Software - 2025.01 - 3º Período]]"
  - "[[UTFPR - Eng. de Software - 2025.02 - 4º Período]]"
Tipo: Inicial
Coeficiente de Rendimento:
Nota Final: "7.7"
---

![[Eng. de Software.png|banner]]
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


<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">

    <a href="UTFPR - Eng. de Software - 2024.01 - 1º Período" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="01 Período.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">1º Período</div>
    </a>

    <a href="UTFPR - Eng. de Software - 2024.02 - 2º Período" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="02 Período.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">2º Período</div>
    </a>

    <a href="UTFPR - Eng. de Software - 2025.01 - 3º Período" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="03 Período.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">3º Período</div>
    </a>

    <a href="UTFPR - Eng. de Software - 2025.02 - 4º Período" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="04 Período.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">4º Período</div>
    </a>

    <a href="UTFPR - Eng. de Software - 2026.01 - 5º Período" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="05 Período.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">5º Período</div>
    </a>

</div>

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



