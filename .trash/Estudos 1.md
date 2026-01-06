---
cssclasses:
  - banner
  - banner-fade
Áreas:
  - "[[Cursos]]"
  - "[[UTFPR - Eng. de Software]]"
---

![[Estudos.svg|banner]]
> [!banner-icon] Estudos
# :LiBookOpenCheck: **Atividades Pendentes** | Estudos

```dataviewjs
let avaliacoes = dv.pages('"Estudos"')
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
    dv.span(" :LiBookCheck: *Não há atividades pendentes*");
}


```

# :LiGitCompareArrows: **Áreas de Estudos** | Estudos

## **[[UTFPR - Eng. de Software]]**
--- start-multi-column: ID_f6h9

```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Eng. de Software.svg]]

--- column-break ---

## :LiGraduationCap: **Bacharelado em Engenharia de Software**

- UTFPR - Universidade Tecnológica do Paraná
- 2024.01 > 2027.02

--- end-multi-column
## **[[Cursos]]**
--- start-multi-column: ID_zowm
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Cursos.svg]]

--- column-break ---

## :LiGraduationCap: Cursos na Área de Tecnologia 

- :LiMonitorDot: **Programação - FrontEnd**:
	- HTML 5
	- CSS 3 
	- JavaScript
- :LiMonitorCog: Programação Web BackEnd:
	- JavaScript 
	- TypeScript
	- Java


--- end-multi-column
# :LiFolderOpen: **Cursos em Aberto** | Estudos

```page-gallery
fields: [file.name, file.frontmatter.Ministrado, "🌿Curso em Aberto"]
columns: 3
filter: false
count: false
radius: 1px
views:
  - name: <sub></sub>
    from: '("Estudos/Cursos")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Curso" AND file.frontmatter.Status = false'

```
