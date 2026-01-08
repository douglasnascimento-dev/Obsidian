---
cssclasses:
  - banner
  - banner-fade
Tipo: Período
Início: 2024-03-04
Disciplinas:
  - "[[ES41A - Algoritimos - 01]]"
  - "[[ES41B - Introdução a Eng. de Software]]"
  - "[[ES41C - Organização de Computadores]]"
  - "[[ES41D - Fundamentos da Matemática]]"
  - "[[ES41E - Comunicação Oral e Escrita]]"
  - "[[ES41F - Inglês Instrumental]]"
Coeficiente de Rendimento: 0.878
Carga Horária: 300h
---

![[01 Período.png|banner]]
> [!banner-icon] 🌵 UTFPR


##  💙**Atividades Pendentes** | 2024.01

```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.01 - 1º Período/UTFPR - Eng. de Software - Disciplinas"')
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
    dv.span("🔹*Durante esse momento não há 'Atividades Pendentes'*");
}


```

```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/2024.01 - 1º Período"')
    .where(p => p.file.frontmatter.Tipo === "Atividade" && p.file.frontmatter.Status === "Pendente");

// Cria um objeto para armazenar as atividades agrupadas por disciplina
let agrupadoPorDisciplina = {};

avaliacoes.forEach(avaliacao => {
    let disciplina = avaliacao.file.frontmatter.Disciplina;
    let dataFinal = avaliacao.file.frontmatter.Final;
    let conteudo = avaliacao.file.frontmatter.Referência;

    // Se a disciplina ainda não existe no objeto, crie uma nova entrada
    if (!agrupadoPorDisciplina[disciplina]) {
        agrupadoPorDisciplina[disciplina] = [];
    }

    // Adiciona a avaliação ao grupo correspondente
    agrupadoPorDisciplina[disciplina].push([avaliacao.file.link, dataFinal, conteudo]);
});

// Itera sobre cada disciplina e cria uma tabela para cada uma
for (let disciplina in agrupadoPorDisciplina) {
    dv.header(3, disciplina);
    dv.table(["Atividade", "Data Limite", "Conteúdo"], agrupadoPorDisciplina[disciplina]);
}

// Adiciona a classe ao contêiner
dv.container.className += ' theme';

```
## 💙**Disciplinas** | 2024.01
```page-gallery
fields: [file.name]
columns: 3
filter: false
count: false
views:
  - name: 
    from: '("Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.01 - 1º Período")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Disciplina"'
```



