---
cssclasses:
  - banner
  - banner-fade
Tipo: Período
Início: 2025-08-12
Disciplinas:
  - "[[EC47D - Gerenciamento de Projeto de Software]]"
  - "[[EC48B - Programação Web Back-end]]"
  - "[[ES44A - Estrutura de Dados - 02]]"
  - "[[ES44B - Programação Orientada a Objetos - 02]]"
  - "[[ES44D - Interação Homem Computador]]"
  - "[[Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44F - Segurança da Informação/ES44F - Segurança da Informação]]"
  - "[[ES46E - Estratégias de Inovação]]"
Coeficiente de Rendimento: "0.8807"
Carga Horária: 420h
Nota Final: "7.7"
---

![[04 Período.png|banner]]
> [!banner-icon] 2025.02
> 
## **Atividades Pendentes** | 2025.02

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
    dv.span(":LiCircleX: **Não há atividades pendentes**");
}
```

--- 
![[Banner 01 - 04.png]]
## Disciplinas | 2025.02

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">

    <a href="EC47D - Gerenciamento de Projeto de Software" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="Gerenciamento de Projeto de Software.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">Gerenciamento de Projeto de Software</div>
    </a>

    <a href="EC48B - Programação Web Back-end" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="Programação Web Backend.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">Programação Web Back-end</div>
    </a>

    <a href="ES44A - Estrutura de Dados - 02" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="Estrutura de Dados - 02.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">Estrutura de Dados - 02</div>
    </a>

    <a href="ES44B - Programação Orientada a Objetos - 02" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="Programação Orientada a Objetos - 02.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">Programação Orientada a Objetos - 02</div>
    </a>

    <a href="ES44D - Interação Homem Computador" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="Interação Homem Computador.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">Interação Homem Computador</div>
    </a>

    <a href="ES44F - Segurança da Informação" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="Segurança da Informação.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">Segurança da Informação</div>
    </a>
    
    <a href="ES46E - Estratégias de Inovação" class="internal-link" style="text-align: center; text-decoration: none; color: inherit;">
        <img src="Estratégias da Inovação.png" style="width: 100%; border-radius: 10px; object-fit: cover;">
        <div style="margin-top: 5px; font-weight: bold;">Estratégias de Inovação</div>
    </a>

</div>

--- 
## **Grade Horária** | 2025.02

````col
```col-md 
flexGrow=2
===
|     | **Segunda** | **Terça** | **Quarta** | **Quinta** | **Sexta** |
| --- | :-----: | :---: | :----: | :----: | :---: |
| **N2**  |  ES44F  | ES44A |        | ES44D  | ES44B |
| **N3**  |  ES44F  | ES44A |        | ES44D  | ES44B |
| **N4**  |  ES44A  | ES44F |        | ES44B  | ES46E |
| **N5**  |  ES44A  | ES44F |        | ES44B  | ES46E |
```

```col-md
![[Banner 03 - 04.png]]
```
````

--- 

![[Banner 02 - 04.png]]

## **Coeficiente de Rendimento** | 2025.02
```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas"')
    .where(p => p.file.frontmatter?.Tipo === "Avaliação");

let disciplinasDados = dv.pages('"Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas"')
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
    
    dv.header(3, ` ${disciplina}`);
    dv.table(["Avaliação", "Nota"], avaliacoesOrdenadas);

    let mediaNumerica = parseFloat(mediaFinal);
    if (!isNaN(mediaNumerica) && cargaHorariaPorDisciplina[disciplina] > 0) {
        let ch = cargaHorariaPorDisciplina[disciplina];
        mediaTotalPonderada += (mediaNumerica * ch);
        cargaHorariaTotal += ch;
    }
}

let rawCR = cargaHorariaTotal > 0 ? ((mediaTotalPonderada / cargaHorariaTotal) / 10) : 0;

let crExibicao = rawCR.toFixed(4); 
let crSalvar = rawCR.toFixed(4);

dv.paragraph(`### :LiChartBarBig: Coeficiente de Rendimento | Período (CRp): **${crExibicao}**`);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);

if (file) {
    setTimeout(() => {
        app.fileManager.processFrontMatter(file, fm => {
            if (String(fm["Coeficiente de Rendimento"]) !== crSalvar) {
                fm["Coeficiente de Rendimento"] = crSalvar;
                console.log("CR atualizado para: " + crSalvar);
            }
        });
    }, 500)
}
```
