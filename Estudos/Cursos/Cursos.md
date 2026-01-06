---
cssclasses:
  - banner
  - banner-fade
Início: 2024-03-04
Cursos:
  - "[[JS & TS]]"
  - "[[HTML 5 & CSS 3]]"
  - "[[Java]]"
Tipo: Inicial
---
![[Cursos.png|banner]]
> [!banner-icon] :LiBookMarked: Cursos

# :LiSwatchBook: **Atividades Pendentes** | Cursos

```dataviewjs
let avaliacoes = dv.pages('"Estudos/Cursos"')
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
    dv.span(" :LiCheckCheck: *Não há atividades pendentes*");
}


```

# :LiFolderOpen: **Cursos em Andamento** | Cursos

### [[HTML 5 & CSS 3]]
--- start-multi-column: ID_jcx1
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[HTMLCSS.png]]

--- column-break ---

Curso de **HTML 5 & CSS 3**
Ministrado por Gustavo Guanabara | Curso em Vídeo

--- end-multi-column
### [[JS & TS]]
--- start-multi-column: ID_3hyo
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[JSTS.png]]

--- column-break ---

Curso de **JavaScript & TypeScript**
Ministrado por Luiz Otávio | Udemy

--- end-multi-column


