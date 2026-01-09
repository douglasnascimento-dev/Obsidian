---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Rosângela De Fatima Pereira Marquesone
Carga Horária: "60"
Início: 2025-03-25
Fim: 2025-06-23
Avaliações:
  - "[[EC47C - Projeto Parcial]]"
  - "[[EC47C - Projeto Final]]"
Nota Final: "9.1"
Anotações: []
Atividades:
  - "[[EC47C - Atv. Prática 01]]"
  - "[[EC47C - Atv. Prática 02]]"
  - "[[EC47C - Atv. Prática 03]]"
  - "[[EC47C - Atv. Prática 04]]"
  - "[[EC47C - Entrega do Projeto Final]]"
  - "[[EC47C - Entrega do Projeto Parcial]]"
---

![[Redes de Computadores.png|banner]]
![[Programação Web Front-end.png|banner]]
## **Atividades** | `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAtividades = `"${dv.current().file.folder}/Atividades"`;
let pages = dv.pages(pathAtividades);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

if (sortedPagesArray.length === 0) {
    dv.span(":LiBadgeX: **Não há atividades registradas nesta disciplina.**");
} else {
    let dataAtual = new Date();
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    function formatarData(data) {
        if (!data) return "";
        let dia = data.getDate();
        let mes = meses[data.getMonth()];
        let ano = data.getFullYear();
        return `${dia} de ${mes} de ${ano}`;
    }

    function verificarDataFinal(dataFinal) {
        let diffMilissegundos = new Date(dataFinal) - dataAtual;
        let diffDias = diffMilissegundos / (1000 * 60 * 60 * 24);
        return diffDias < 2;
    }

    const corPendente = "rgb(54, 102, 129)";  
    const corConcluido = "rgb(91, 145, 177)"; 

    let tabelaDados = sortedPagesArray.map(p => {
        let dataInicio = p.Início ? new Date(p.Início) : null;
        let dataFinal = p.Final ? new Date(p.Final) : null;

        let statusTexto = p.Status === true ? "Concluído" : "Pendente";
        let corStatus = p.Status === true ? corConcluido : corPendente;

        if (dataFinal && verificarDataFinal(dataFinal) && statusTexto === "Pendente") {
            corStatus = "rgb(178, 50, 50)"; 
        }

        return [
            `**${p.file.link}** | ${p.Conteúdo ? p.Conteúdo : ""}`,
            formatarData(dataInicio),
            formatarData(dataFinal),
            `<span style="color:${corStatus}; font-weight: bold;">${statusTexto}</span>`,
        ];
    });

    dv.table(
        ["Atividade", "Data de Início", "Data Final", "Status"], 
        tabelaDados
    );
}

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    const linksAtividades = sortedPagesArray.map(p => `[[${p.file.name}]]`);
    await app.fileManager.processFrontMatter(file, fm => {
        if (JSON.stringify(fm["Atividades"]) !== JSON.stringify(linksAtividades)) {
            fm["Atividades"] = linksAtividades;
        }
    });
}
```

--- 

![[Banner 01 - 03.png]]
 
## **Registros de Aulas** | `$= (dv.current().file.name).split(' - ')[1]`

| Aula                                                               |                             Atividade                              | Data de Realização |
| :----------------------------------------------------------------- | :----------------------------------------------------------------: | :----------------: |
| Introdução ao HTML                                                 |                                 X                                  |        EaD         |
| HTML Semântico                                                     |            [[EC47C - Atv. Prática 01\|Arv. Prática 01]]            |        EaD         |
| Imagens e Formulários                                              |            [[EC47C - Atv. Prática 02\|Atv. Prática 02]]            |        EaD         |
| Sem conteúdo prográmatico                                          |                                 X                                  |        EaD         |
| Introdução ao CSS                                                  |            [[EC47C - Atv. Prática 03\|Atv. Prática 03]]            |        EaD         |
| FlexBox em CSS                                                     |                                 X                                  |        EaD         |
| Layouts Responsivos                                                |                                 X                                  |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] | [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] | [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] |        EaD         |
| Introdução ao JavaScript                                           |                                 X                                  |        EaD         |
| Manipulação do DOM com JS                                          |                                 X                                  |        EaD         |
| Integração com o LocalStorage                                      |            [[EC47C - Atv. Prática 04\|Atv. Prática 04]]            |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Final]]   |   [[EC47C - Entrega do Projeto Final\|Entrega do Projeto Final]]   |        EaD         |
### **Rastreamento de Presença** | `$= (dv.current().file.name).split(' - ')[1]`

  :LiBadgeX: **Não há necessidade de Presença**
  
--- 

![[Banner 02 - 03.png]]

## **Anotações** | `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAnotacoes = `"${dv.current().file.folder}/Anotações"`;
let pages = dv.pages(pathAnotacoes);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// --- Lógica Visual (Tabela) ---
if (sortedPagesArray.length === 0) {
     dv.span(":LiBadgeX: **Não há anotações registradas nesta disciplina.**");
} else {
    let cont = 1;
    let tabelaDados = sortedPagesArray.map(p => {
        let aulaLabel = cont < 10 ? `Aula 0${cont}` : `Aula ${cont}`;
        cont++; 
        return [ aulaLabel, p.file.link ];
    });

    dv.table(["Aula", "Anotações"], tabelaDados);
}

// --- Lógica de Persistência (YAML) ---
const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    const linksAnotacoes = sortedPagesArray.map(p => `[[${p.file.name}]]`);
    
    await app.fileManager.processFrontMatter(file, fm => {
        // Verifica mudança para evitar escrita desnecessária
        if (JSON.stringify(fm["Anotações"]) !== JSON.stringify(linksAnotacoes)) {
            fm["Anotações"] = linksAnotacoes;
        }
    });
}
```

--- 

![[Banner 01 - 03.png]]

## **Avaliações** | `$= (dv.current().file.name).split(' - ')[1]`

```dataviewjs
let pathAvaliacoes = `"${dv.current().file.folder}/Avaliações"`;
let notaManual;

let pages = dv.pages(pathAvaliacoes);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

let totalPeso = 0;
let totalNotaComPeso = 0;

let tabelaDados = sortedPagesArray.map(p => {
    let notaValida = p.Nota !== undefined && p.Nota !== null;
    if (notaValida) {
        totalPeso += p.Peso;
        totalNotaComPeso += p.Nota * p.Peso;
    }
    return [`[[${p.file.name}]] | ${p.Referência === null ? " " : p.Referência }`, p.Nota, p.Peso];
});

let mediaFinal = totalPeso ? totalNotaComPeso / totalPeso : 0;
let notaExibicao = notaManual ? notaManual : mediaFinal.toFixed(1);

tabelaDados.push(["**Média Final**", `**${notaExibicao}**`, ""]);

dv.table(
    ["Avaliação", "Nota", "Peso"], 
    tabelaDados
);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Nota Final"] = notaExibicao;
    });
}
```



## :LiCalendarCheck2: **Registro de Aulas** | Programação Web Front-end 

| Aula                                                               |                             Atividade                              | Data de Realização |
| :----------------------------------------------------------------- | :----------------------------------------------------------------: | :----------------: |
| Introdução ao HTML                                                 |                                 X                                  |        EaD         |
| HTML Semântico                                                     |            [[EC47C - Atv. Prática 01\|Arv. Prática 01]]            |        EaD         |
| Imagens e Formulários                                              |            [[EC47C - Atv. Prática 02\|Atv. Prática 02]]            |        EaD         |
| Sem conteúdo prográmatico                                          |                                 X                                  |        EaD         |
| Introdução ao CSS                                                  |            [[EC47C - Atv. Prática 03\|Atv. Prática 03]]            |        EaD         |
| FlexBox em CSS                                                     |                                 X                                  |        EaD         |
| Layouts Responsivos                                                |                                 X                                  |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] | [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] | [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] |        EaD         |
| Introdução ao JavaScript                                           |                                 X                                  |        EaD         |
| Manipulação do DOM com JS                                          |                                 X                                  |        EaD         |
| Integração com o LocalStorage                                      |            [[EC47C - Atv. Prática 04\|Arv. Prática 04]]            |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Final]]   |   [[EC47C - Entrega do Projeto Final\|Entrega do Projeto Final]]   |        EaD         |
