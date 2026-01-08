---
cssclasses:
  - banner
  - banner-fade
Tipo: Período
Início: 2024-10-01
Disciplinas:
  - "[[EC47E - Empreendedorismo]]"
  - "[[ES42B - Algoritimos - 02]]"
  - "[[ES42C - Processo de Produção de Software]]"
  - "[[ES42D - Sistemas Operacionais]]"
  - "[[ES42E - Banco de Dados]]"
  - "[[ES42F - Fundamentos da Ética]]"
  - "[[ES42G - Matemática Discreta]]"
Coeficiente de Rendimento: "0.9317"
Carga Horária: 360h
---

![[02º Período.png|banner]]
> [!banner-icon] 🌵
##  💙**Atividades Pendentes** | 2024.02

```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas"')
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

## 💙**Grade Horária** | 2024.02

|     | Segunda                         | Terça                                        | Quarta                            | Quinta                          | Sexta                             |
| --- | ------------------------------- | -------------------------------------------- | --------------------------------- | ------------------------------- | --------------------------------- |
| 1N  | [[ES42E - Banco de Dados]]      | [[ES42E - Banco de Dados]]                   | [[ES42B - Algoritimos - 02]]        | [[ES42G - Matemática Discreta]] | [[ES42F - Fundamentos da Ética]]  |
| 1N  | [[ES42E - Banco de Dados]]      | [[ES42E - Banco de Dados]]                   | [[ES42B - Algoritimos - 02]]        | [[ES42G - Matemática Discreta]] | [[ES42F - Fundamentos da Ética]]  |
| 2N  | [[ES42G - Matemática Discreta]] | [[ES42C - Processo de Produção de Software]] | [[ES42D - Sistemas Operacionais]] | [[ES42B - Algoritimos - 02]]      | [[ES42D - Sistemas Operacionais]] |
| 2N  | [[ES42G - Matemática Discreta]] | [[ES42C - Processo de Produção de Software]] | [[ES42D - Sistemas Operacionais]] | [[ES42B - Algoritimos - 02]]      | [[ES42D - Sistemas Operacionais]] |

## 💙**Coeficiente de Rendimento** | 2024.02
```dataviewjs

let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas"')
    .where(p => p.file.frontmatter?.Tipo === "Avaliação");

let disciplinasDados = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas"')
    .where(p => p.file.frontmatter?.Tipo === "Disciplina");

let disciplinas = {};
let medias = {};
let notasPonderadas = 0;
let cargaHorariaTotal = 0;
let cargaHorariaPorDisciplina = {};
let media = {};
let mediaTotal = 0;

disciplinasDados.forEach(disciplina => {
    let nome = disciplina.file.name;
    let cargaHoraria = disciplina.file.frontmatter?.["Carga Horária"] || "0h";
    cargaHorariaPorDisciplina[nome] = parseInt(cargaHoraria.replace("h", "")) || 0;
	media[nome] = disciplina.file.frontmatter?.["Nota Final"] || "Sem notas";
});

avaliacoes.forEach(avaliacao => {
    let disciplina = avaliacao.file.frontmatter?.Disciplina || "Sem disciplina";
    let nota = avaliacao.file.frontmatter?.Nota;
    let peso = avaliacao.file.frontmatter?.Peso !== undefined ? avaliacao.file.frontmatter.Peso : 1;
    let nomeAvaliacao = avaliacao.file.name; // Nome do arquivo da avaliação

    if (!disciplinas[disciplina]) {
        disciplinas[disciplina] = [];
        medias[disciplina] = { somaPesos: 0};
    }

    if (nota !== undefined) { 
        medias[disciplina].somaPesos += peso;
    }

    disciplinas[disciplina].push([avaliacao.file.link, nota !== undefined ? nota : "Sem nota", nomeAvaliacao]);
});

let disciplinasOrdenadas = Object.keys(disciplinas).sort();

for (let disciplina of disciplinasOrdenadas) {
    disciplinas[disciplina].sort((a, b) => a[2].localeCompare(b[2]));

    let avaliacoesOrdenadas = disciplinas[disciplina].map(a => [a[0], a[1]]);
    
    avaliacoesOrdenadas.push([`**Média em ${disciplina}**`, `**${media[disciplina]}**`]); 
    dv.header(3, `🔷 ${disciplina}`);
    dv.table(["Avaliação", "Nota"], avaliacoesOrdenadas);

    if (media !== "Sem notas" && cargaHorariaPorDisciplina[disciplina] > 0) {
        let ch = cargaHorariaPorDisciplina[disciplina];
        mediaTotal += (media[disciplina] * Number(ch));
        cargaHorariaTotal += ch;
    }
}

console.log(mediaTotal)
let CR = cargaHorariaTotal > 0 ? (mediaTotal / (10 * cargaHorariaTotal)).toFixed(4) : "Sem dados";

// Exibe o resultado final
dv.paragraph(`## 🔹 Coeficiente de Rendimento | Período (CRp): **${CR}**`);

// Atualiza o Frontmatter de forma segura
const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Coeficiente de Rendimento"] = CR;
    });
}

```
## 💙**Disciplinas** | 2024.02

### [[EC47E - Empreendedorismo/EC47E - Empreendedorismo]] 

- **EaD** | Assíncrona
- Ministrada por Joseli Soares

### [[ES42B - Algoritimos - 02]]

- **Quarta** | 1N - **Quinta** | 2N
- Ministrada por Gabriel Genivir

### [[ES42C - Processo de Produção de Software]]

- **Terça** | 2N
- Ministrada por Alessandro Duarte

### [[ES42D - Sistemas Operacionais]]

- **Quarta** | 2N - **Sexta** | 2N
- Ministrada por Jader Maikol e Luciano Rovanni

### [[ES42E - Banco de Dados]]

- **Segunda** | 1N - **Terça** | 1N
- Ministrada por Giovane Volnei

### [[ES42F - Fundamentos da Ética]]

- **Sexta** | 1N
- Ministrada por Dirceu Casagrande

### [[ES42G - Matemática Discreta]]

- **Segunda** | 2N - **Quinta** | 1N
- Ministrada por Josimar Rocha


