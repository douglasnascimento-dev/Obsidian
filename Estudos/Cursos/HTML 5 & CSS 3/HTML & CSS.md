---
cssclasses:
  - banner
  - banner-fade
  - academia
  - wideTable
  - wideFC
Tipo: Curso
Ministrado: Curso em Vídeo | Gustavo Guanabara
Início: 2024-07-13
Fim: ""
Anotações:
  - "[[HTML 5 & CSS 3 - Módulo 01]]"
  - "[[HTML 5 & CSS 3 - Módulo 02]]"
  - "[[HTML 5 & CSS 3 - Módulo 03]]"
Status: false
---


> [!banner-icon] 🌵
![[HTML & CSS.png|banner]]

##  💙**Atividades Pendentes** | HTML 8 & CSS 3

```dataviewjs
let avaliacoes = dv.pages('"Estudos/Cursos/HTML 5 & CSS 3/HTML 5 & CSS 3 - Módulos"')
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
    dv.span("🔹*Não há atividades pendentes*");
}


```

## 💙**Módulos** | HTML 5 & CSS 3

### [[HTML 5 & CSS 3 - Módulo 01]]

Neste módulo será apresentado os conceitos iniciais de HTML 5 & CSS 3, além do surgimento da internet, e os requisitos mínimos para este cursos

### [[HTML 5 & CSS 3 - Módulo 02]]

Durante esse módulo será apresentado um aprofundamento sobre design utilizando o CSS, como famílias e pesos de fontes, cores e layouts de sites
