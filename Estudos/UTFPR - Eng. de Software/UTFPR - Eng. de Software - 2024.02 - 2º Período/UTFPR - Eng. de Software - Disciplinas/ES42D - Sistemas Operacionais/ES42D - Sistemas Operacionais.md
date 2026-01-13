---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Jader Maikol | Luciano Rovanni
Carga Horária: "60"
Início: 2024-10-02
Fim: 2025-02-28
Avaliações:
  - "[[ES42D - Avaliação 01]]"
  - "[[ES42D - Avaliação 02]]"
  - "[[ES42D - Avaliação 03]]"
  - "[[ES42D - Atividades]]"
Anotações: []
Atividades:
  - "[[ES42D - T1]]"
  - "[[ES42D - T2]]"
Nota Final: "10.0"
---

![[Processo de Produção de Software.png|banner]]
> [!banner-icon] 🌳

![[Processo de Produção de Software.png|banner]]
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

![[Banner 01 - 02.png]]
 
## **Registros de Aulas** | `$= (dv.current().file.name).split(' - ')[1]`

| Aula                                                                                  |   Atividade    | Data de Realização |
| :------------------------------------------------------------------------------------ | :------------: | :----------------: |
| Apresentação a Matéria e a Ementa do Curso                                            |       X        |     02/10/2024     |
| Introdução a Definições de Sistemas Operacionais*                                     |       X        |     04/10/2024     |
| Aprofundamento em  Definições de Sistemas Operacionais                                | [[ES42D - T1]] |     09/10/2024     |
| Introdução a Concorrência e Processos de Sistemas Operacionais                        |       X        |     11/10/2024     |
| Realização da SNCT                                                                    |       X        |     16/10/2024     |
| Não realizada                                                                         |       X        |     18/10/2024     |
| Realização da SECOMP                                                                  |       X        |     23/10/2024     |
| **Reposição via Moodle** \| Introdução á Fundamento de Linux                          |       X        |        EaD         |
| Finalização á Fundamento de Linux                                                     |       X        |     30/10/2024     |
| Introdução sobre Escalonamento e Threads                                              |       X        |     01/11/2024     |
| Aprofundamento á 04 - Escalonamento e Threads                                         |       X        |     06/11/2024     |
| **Avaliação** \| [[ES42D - Avaliação 01]]                                             |       X        |     08/11/2024     |
| Aprofundamento á Escalonamento e Threads                                              | [[ES42D - T2]] |     13/11/2024     |
| Recesso: Dia da Independência do Brasil                                               |       X        |     15/11/2024     |
| **Troca de Professor** \| Apresentação e Introdução com um novo professor - *Luciano* |       X        |     22/11/2024     |
| **Não Presente** \| *DeadLock*                                                        |       X        |     27/11/2024     |
| *Gerenciamento de Processos*                                                          |       X        |     29/11/2024     |
| **Não Presente** \| *Gerenciamento de Processos*                                      |       X        |     04/12/2024     |
| Revisão \| [[ES42D - Avaliação 02]]                                                   |       X        |     06/12/2024     |
| **Avaliação** \| [[ES42D - Avaliação 02]]                                             |       X        |     11/12/2024     |
| *Segurança de Rede e Vírus*                                                           |       X        |     13/12/2024     |
| **EAD** \| Disponível para a Realização do Seminário                                  |       X        |     18/12/2024     |
| **EAD** \| Disponível para a Realização do Seminário                                  |       X        |     20/12/2024     |
| Apresentações do Seminários                                                           |       X        |     05/02/2025     |
| **Não Presente** \| Apresentações do Seminários                                       |       X        |     07/02/2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                |       X        |     12/02/2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                |       X        |     14/02/2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                |       X        |     19/02/2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                |       X        |     21/02/2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                |       X        |     26/02/2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                |       X        |     29/02/2025     |
### **Rastreamento de Presença** | `$= (dv.current().file.name).split(' - ')[1]`

  :LiBadgeX: **Não houve acompanhamento de Presença**
  
--- 

![[Banner 02 - 02.png]]

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

![[Banner 01 - 02.png]]

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





