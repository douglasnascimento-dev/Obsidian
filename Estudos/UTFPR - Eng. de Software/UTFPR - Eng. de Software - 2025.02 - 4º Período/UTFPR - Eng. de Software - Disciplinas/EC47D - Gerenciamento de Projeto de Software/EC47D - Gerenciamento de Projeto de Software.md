---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Flávia Belintani Blum Haddad
Carga Horária: 60h
Nota Final: "7.7"
Início: 2025-08-12
Fim: ""
Avaliações:
  - "[[EC47D - Médias das Atvs.]]"
Banner: Gerenciamento de Projeto de Software
---

![[Gerenciamento de Projeto de Software.png|banner]]
##  **Atividades** | Gerenciamento de Projeto de Software 

```dataviewjs
let pathAtividades = `"${dv.current().file.folder}/Atividades"`;
let pages = dv.pages(pathAtividades);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

if (sortedPagesArray.length === 0) {
    dv.span(":LiCircleX: **Não há atividades registradas nesta disciplina.**");
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
```

---

![[Banner 01 - 04.png]]

## **Registros de Aulas** | Gerenciamento de Projeto de Software 

| Aula                                  | Atividade | Data de Realização |
| :------------------------------------ | :-------: | :----------------: |
| Apresentação                          |     X     |  EaD - Semana 01   |
| Introdução ao GP e PMBOK              |     X     |  EaD - Semana 02   |
| Gerenciamento das Partes Interessadas |     X     |  EaD - Semana 03   |
| Gerenciamento de Integração           |     X     |  EaD - Semana 04   |
| Gerenciamento de Escopo               |     X     |  EaD - Semana 05   |
| Estrutura Analítica do Projeto        |     X     |  EaD - Semana 06   |
| Recursos do Projeto                   |     X     |  EaD - Semana 07   |
| Gerenciamento do Projeto              |     X     |  EaD - Semana 08   |
| Estimativa de Duração das Atividades  |     X     |  EaD - Semana 09   |
| Gerenciamento de Custos               |     X     |  EaD - Semana 10   |
| Gerenciamento de Riscos               |     X     |  EaD - Semana 11   |
| Diagrama de Ishikawa                  |     X     |  EaD - Semana 12   |
| Entregas Finais                       |     X     |  EaD - Semana 13   |
###  Rastreamento de Presença | Gerenciamento de Projeto de Software

  :LiCircleX: **Não há necessidade de Presença**

--- 

![[Banner 02 - 04.png]]

## **Anotações** | Gerenciamento de Projeto de Software

```dataviewjs
// 1. Obtém o caminho da pasta onde esta nota atual está (a pasta da disciplina)
// 2. Adiciona o sufixo "/Anotações" para apontar para a subpasta correta
let pathAnotacoes = `"${dv.current().file.folder}/Anotações"`;

// Busca as notas diretamente dentro da pasta de Anotações
let pages = dv.pages(pathAnotacoes);

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
      dv.span(":LiCircleX: **Não há anotações registradas nesta disciplina.**");
} else {
    let cont = 1;
    
    // Criar a tabela de dados com contador automático
    let tabelaDados = sortedPagesArray.map(p => {
        // Formata o número da aula com zero à esquerda (ex: Aula 01, Aula 02...)
        let aulaLabel = cont < 10 ? `Aula 0${cont}` : `Aula ${cont}`;
        cont++; 
        
        return [
            aulaLabel,
            p.file.link,
        ];
    });

    // Exibir a tabela
    dv.table(
        ["Aula", "Anotações"], 
        tabelaDados
    );
}
```

---

![[Banner 01 - 04.png]]

## **Avaliações** | Gerenciamento de Projeto de Software

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

