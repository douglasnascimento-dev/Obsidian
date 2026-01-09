---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Josieli Soares
Carga Horária: "30"
Início: 2024-10-01
Fim: 2025-02-28
Avaliações:
  - "[[EC47E - Avaliação 01]]"
  - "[[EC47E - Avaliação 02]]"
  - "[[EC47E - Avaliação 03]]"
  - "[[EC47E - Avaliação 04]]"
  - "[[EC47E - Avaliação 05]]"
  - "[[EC47E - Avaliação 06]]"
  - "[[EC47E - Avaliação 07]]"
Anotações: []
Atividades:
  - "[[EC47E - Ex. 01]]"
  - "[[EC47E - Ex. 02]]"
  - "[[EC47E - Ex. 03]]"
  - "[[EC47E - Ex. 04]]"
  - "[[EC47E - Ex. 05]]"
  - "[[EC47E - Ex. 06]]"
Nota Final: "9.5"
---


![[Redes de Computadores.png|banner]]
![[Empreendedorismo.png|banner]]
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

| Aula                                                                                        |     Atividade      | Data de Realização |
| :------------------------------------------------------------------------------------------ | :----------------: | :----------------: |
| Definição de Conceitos de Empreendedorismo                                                  | [[EC47E - Ex. 01]] |        EaD         |
| Apresentação a Metodológia das Aulas e Formas de Avaliação                                  |         X          |        EaD         |
| Oportunidades e Tendências de Negócio                                                       | [[EC47E - Ex. 02]] |        EaD         |
| Inovação e Criatividade                                                                     | [[EC47E - Ex. 03]] |        EaD         |
| Quadro de Modelo de Negócios                                                                | [[EC47E - Ex. 04]] |        EaD         |
| Introdução ao Plano de Negócios                                                             | [[EC47E - Ex. 05]] |        EaD         |
| Elaboração do Plano de Negócio: Plano de Marketing, Plano Operacional e do Plano Financeiro |         X          |        Ead         |
| Elaboração do Plano de Negócio: Sumário Executivo e Avaliação do Plano                      |         X          |        Ead         |
| Conceito de Pitch                                                                           |         X          |        Ead         |
| Finalização do Plano de Negócio e Elaboração da apresentação no estilo Pitch                |         X          |        EaD         |
| Entrega do Plano de Negócio escrito e da apresentação                                       |         X          |        EaD         |
| Entrega das Avaliações dos planos de negócios pelas demais equipes                          | [[EC47E - Ex. 06]] |        EaD         |
| Feedback dos Planos de Negócios                                                             |         X          |        EaD         |
| Avaliação da Disciplina                                                                     |         X          |        EaD         |
| Desenvolvimento de Atividade de Recuperação                                                 |         X          |        EaD         |
| Desenvolvimento de Atividade de Recuperação                                                 |         X          |        EaD         |
### **Rastreamento de Presença** | `$= (dv.current().file.name).split(' - ')[1]`

  :LiBadgeX: **Não há necessidade de Presença**
  
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

