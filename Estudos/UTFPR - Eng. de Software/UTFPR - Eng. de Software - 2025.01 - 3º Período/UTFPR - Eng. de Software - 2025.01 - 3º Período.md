---
cssclasses:
  - banner
  - banner-fade
Tipo: Período
Início: 2025-03-25
Disciplinas:
  - "[[EC47B - Redes de Computadores]]"
  - "[[EC47C - Programação Web Front-end]]"
  - "[[ES43A - Estrutura de Dados 01]]"
  - "[[ES43B - Programação Orientada a Objetos 01]]"
  - "[[ES43C - Requisitos de Software]]"
  - "[[ES45C - Qualidade de Software]]"
  - "[[PBE - Probabilidade e Estatística]]"
Coeficiente de Rendimento: 0.9412499999999999
Carga Horária: 480h
Nota Final: 0
---


![[03º Período.png|banner]]
> [!banner-icon] :LiServer: 2025.01
#  :LiSwatchBook: **Atividades Pendentes** | 2025.01

```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.01 - 3º Período/UTFPR - Eng. de Software - Disciplinas"')
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

# :LiCalendarClock: **Grade Horária** | 2025.01

|     |                  Segunda                  |                         Terça                         |                   Quarta                   |                        Quinta                         |                   Sexta                    |
| --- | :---------------------------------------: | :---------------------------------------------------: | :----------------------------------------: | :---------------------------------------------------: | :----------------------------------------: |
| M1  |                                           |                                                       |                                            |                                                       |                                            |
| M2  |                                           |                                                       |                                            |                                                       |                                            |
| M3  |                                           |                                                       |                                            |                                                       |                                            |
| M4  |                                           |                                                       | [[PBE - Probabilidade e Estatística\|PBE]] |                                                       | [[PBE - Probabilidade e Estatística\|PBE]] |
| M5  |                                           |                                                       | [[PBE - Probabilidade e Estatística\|PBE]] |                                                       | [[PBE - Probabilidade e Estatística\|PBE]] |
| M6  |                    ...                    |                          ...                          |                    ...                     |                          ...                          |                    ...                     |
| N1  |                    ...                    |                          ...                          |                    ...                     |                          ...                          |                    ...                     |
| N2  | [[ES43A - Estrutura de Dados 01\|ES43A]]  | [[ES43B - Programação Orientada a Objetos 01\|ES43B]] |                                            | [[ES43B - Programação Orientada a Objetos 01\|ES43B]] |  [[ES45C - Qualidade de Software\|ES45C]]  |
| N3  | [[ES43A - Estrutura de Dados 01\|ES43A]]  | [[ES43B - Programação Orientada a Objetos 01\|ES43B]] |                                            | [[ES43B - Programação Orientada a Objetos 01\|ES43B]] |  [[ES45C - Qualidade de Software\|ES45C]]  |
| N4  | [[ES43C - Requisitos de Software\|ES43C]] |       [[ES43A - Estrutura de Dados 01\|ES43A]]        |                                            |       [[ES45C - Qualidade de Software\|ES45C]]        | [[ES43C - Requisitos de Software\|ES43C]]  |
| N5  | [[ES43C - Requisitos de Software\|ES43C]] |       [[ES43A - Estrutura de Dados 01\|ES43A]]        |                                            |       [[ES45C - Qualidade de Software\|ES45C]]        | [[ES43C - Requisitos de Software\|ES43C]]  |
# :LiAreaChart: **Coeficiente de Rendimento** | 2025.01
```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.01 - 3º Período/UTFPR - Eng. de Software - Disciplinas"')
    .where(p => p.file.frontmatter?.Tipo === "Avaliação");

let disciplinasDados = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.01 - 3º Período/UTFPR - Eng. de Software - Disciplinas"')
    .where(p => p.file.frontmatter?.Tipo === "Disciplina");

let disciplinasParaExibir = {};
let mediaFinalPorDisciplina = {};
let cargaHorariaPorDisciplina = {};
let mediaTotalPonderada = 0;
let cargaHorariaTotal = 0;

disciplinasDados.forEach(disciplina => {
    let nome = disciplina.file.name;
    let cargaHoraria = disciplina.file.frontmatter["Carga Horária"] || "0h";
    
    mediaFinalPorDisciplina[nome] = disciplina.file.frontmatter["Nota Final"] ?? "0.0";
    cargaHorariaPorDisciplina[nome] = parseInt(cargaHoraria.replace("h", "")) || 0;
});

avaliacoes.forEach(avaliacao => {
    let disciplina = avaliacao.file.frontmatter.Disciplina || "Sem disciplina";
    let nota = avaliacao.file.frontmatter.Nota ?? "Sem nota";
    let nomeAvaliacao = avaliacao.file.name;

    if (!disciplinasParaExibir[disciplina]) {
        disciplinasParaExibir[disciplina] = [];
    }
    
    disciplinasParaExibir[disciplina].push([avaliacao.file.link, nota, nomeAvaliacao]);
});

let disciplinasOrdenadas = Object.keys(disciplinasParaExibir).sort();

for (let disciplina of disciplinasOrdenadas) {
    disciplinasParaExibir[disciplina].sort((a, b) => a[2].localeCompare(b[2]));

    let avaliacoesOrdenadas = disciplinasParaExibir[disciplina].map(a => [a[0], a[1]]);
    
    let mediaFinal = mediaFinalPorDisciplina[disciplina] || "0.0";
    
    avaliacoesOrdenadas.push([`**Média em ${disciplina}**`, `**${mediaFinal}**`]);
    
    dv.header(3, `:LiTabs:  ${disciplina}`);
    dv.table(["Avaliação", "Nota"], avaliacoesOrdenadas);

    let mediaNumerica = parseFloat(mediaFinal);
    if (!isNaN(mediaNumerica) && cargaHorariaPorDisciplina[disciplina] > 0) {
        let ch = cargaHorariaPorDisciplina[disciplina];
        mediaTotalPonderada += (mediaNumerica * ch);
        cargaHorariaTotal += ch;
    }
}

let CR = cargaHorariaTotal > 0 ? ((mediaTotalPonderada / cargaHorariaTotal).toFixed(4)/10) : "0.0000";

dv.paragraph(`## :LiChartBarBig: Coeficiente de Rendimento | Período (CRp): **${CR}**`);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Coeficiente de Rendimento"] = CR;
    });
}
```
# :LiTabs: **Disciplinas** | 2025.01

### [[EC47B - Redes de Computadores]]
--- start-multi-column: ID_v2gm
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Redes de Computadores.png]]

--- column-break ---

Redes de Computadores, aborda os fundamentos de redes de computadores. Na disciplina, os estudantes aprendem a utilizar protocolos de comunicação de redes, com foco na camada de aplicação, transporte e redes.

--- end-multi-column
### [[EC47C - Programação Web Front-end]]
--- start-multi-column: ID_32qx
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Programação Web Front-end.png]]

--- column-break ---

Programação Web Front-end, aborda os conceitos básicos de programação web. Na disciplina, os estudantes aprendem a implementar páginas simples que utilizam linguagens de marcação com HTML e CSS, e páginas estruturadas com JavaScript.

--- end-multi-column
### [[ES43A - Estrutura de Dados 01]]
--- start-multi-column: ID_n49d
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Estrutura de Dados - 01.png]]

--- column-break ---

Estrutura de Dados, aborda os conceitos básicos de estrutura de dados. Na disciplina, os estudantes aprendem a implementar algoritmos que utilizam estruturas lineares, recursividade e árvores binárias.

--- end-multi-column
### [[ES43B - Programação Orientada a Objetos 01]]
--- start-multi-column: ID_mhlu
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Programação Orientada a Objetos.png]]

--- column-break ---

Programação Orientada a Objetos 1, trata dos fundamentos do paradigma orientado a objetos. Nesta disciplina os estudantes aprendem a modelar sistemas com classes, objetos, atributos, métodos, encapsulamento, herança, polimorfismo e utilizar bibliotecas.

--- end-multi-column
### [[ES43C - Requisitos de Software]]
--- start-multi-column: ID_5x5q
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Requisitos de Software.png]]

--- column-break ---

Requisitos de Software, aborda fundamentos da Engenharia de Requisitos do processo de Engenharia de Software. Nesta disciplina os estudantes aprendem a elicitar, especificar e analisar requisitos.

--- end-multi-column
### [[ES45C - Qualidade de Software]]
--- start-multi-column: ID_uhvo
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Qualidade de Software.png]]

--- column-break ---

Aborda conceitos de qualidade do processo e do produto de software. Nesta disciplina, os estudantes aprendem conceitos e normas de qualidade de software. Ao final da disciplina, o estudante será capaz de analisar conformidade com modelos de maturidade de processo e avaliar a qualidade de produto de software.

--- end-multi-column
### [[PBE - Probabilidade e Estatística]]
--- start-multi-column: ID_nbdn
```column-settings
Number of Columns: 2
Largest Column: standard
```

![[Probabilidade e Estatística.png]]

--- column-break ---

Aborda métodos para a transmissão e vivencia de conhecimentos de Estatística. Compreende o método estatístico ao utilizar técnicas estatísticas adequadas ao estudo de fenômenos específicos. Como elementos de probabilidade, teste de hipóteses, controle estatístico de processo (CEP).

--- end-multi-column



