---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Natassya Barlate Floro Da Silva
Carga Horária: "60"
Início: 2025-04-25
Fim: 2025-07-11
Avaliações:
  - "[[EC47B - Média dos Exercícios]]"
  - "[[EC47B - Média das Atvs. Práticas]]"
Nota Final: "9.3"
Atividades:
  - "[[EC47B - Ex. 01 - Introdução a Redes de Computadores]]"
  - "[[EC47B - Ex. 02 - Camada Física]]"
  - "[[EC47B - Ex. 03 - Camada de Enlace de Dados]]"
  - "[[EC47B - Ex. 04 - Camada de Redes]]"
  - "[[EC47B - Ex. 05 - Camada de Redes - 02]]"
  - "[[EC47B - Ex. 06 - Camada de Redes - 03]]"
  - "[[EC47B - Ex. 07 - Camada de Transporte]]"
  - "[[EC47B - Ex. 08 - Camada de Transporte - 02]]"
  - "[[EC47B - Ex. 09 - Camada de Sessão + Apresentação + Aplicação]]"
  - "[[EC47B - Ex. 10 - Camada de Sessão + Apresentação + Aplicação - 02]]"
  - "[[EC47B - Prática 01 - Camada de Enlace de Dados]]"
  - "[[EC47B - Prática 02 - Camada de Redes]]"
  - "[[EC47B - Prática 03 - Camada de Transporte]]"
  - "[[EC47B - Prática 04 - Camada de Sessão + Apresentação + Aplicação]]"
Anotações:
  - "[[EC47B - Aula Semana 01 - Introdução e Apresentação da Disciplina]]"
  - "[[EC47B - Aula Semana 02 - Camada Física]]"
  - "[[EC47B - Aula Semana 03 - Camada de Enlace de Dados]]"
  - "[[EC47B - Aula Semana 05 - Camada de Redes]]"
  - "[[EC47B - Aula Semana 06 - Camada de Redes - 02]]"
  - "[[EC47B - Aula Semana 07 - Camada de Redes - 03]]"
  - "[[EC47B - Aula Semana 09 - Camada de Transporte]]"
  - "[[EC47B - Aula Semana 10 - Camada de Transporte - 02]]"
  - "[[EC47B - Aula Semana 11 - Camada de Sessão + Apresentação + Aplicação]]"
  - "[[EC47B - Aula Semana 12 - Camada de Sessão + Apresentação + Aplicação - 02]]"
---


![[Redes de Computadores.png|banner]]
![[Redes de Computadores.png|banner]]
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

| Aula                                                                                                                            |                                                             Atividade                                                             | Data de Realização |
| :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
| [[EC47B - Aula Semana 01 - Introdução e Apresentação da Disciplina\|Introdução e Apresentação a Ementa da Disciplina]]          |                           [[EC47B - Ex. 01 - Introdução a Redes de Computadores\|Ex. 01 - Introdução]]                            |        EaD         |
| [[EC47B - Aula Semana 02 - Camada Física\|Camada Física]]                                                                       |                                    [[EC47B - Ex. 02 - Camada Física\|Ex. 02 - Camada Física]]                                     |        EaD         |
| [[EC47B - Aula Semana 03 - Camada de Enlace de Dados\|Camada de Enlace de Dados]]                                               |                        [[EC47B - Ex. 03 - Camada de Enlace de Dados\|Ex. 03 - Camada de Enlace de Dados]]                         |        EaD         |
| [[EC47B - Prática 01 - Camada de Enlace de Dados\|Prática da Camada de Enlance de Dados]]                                       |                     [[EC47B - Prática 01 - Camada de Enlace de Dados\|Prática da Camada de Enlance de Dados]]                     |        EaD         |
| [[EC47B - Aula Semana 05 - Camada de Redes\|Camada de Redes]]                                                                   |                                  [[EC47B - Ex. 04 - Camada de Redes \|Ex. 04 - Camada de Redes]]                                  |        EaD         |
| [[EC47B - Aula Semana 06 - Camada de Redes - 02\|Camada de Redes - 02]]                                                         |                             [[EC47B - Ex. 05 - Camada de Redes - 02\|Ex. 05 - Camada de Redes - 02]]                              |        EaD         |
| [[EC47B - Aula Semana 07 - Camada de Redes - 03\|Camada de Redes - 03]]                                                         |                             [[EC47B - Ex. 06 - Camada de Redes - 03\|Ex. 06 - Camada de Redes - 03]]                              |        EaD         |
| [[EC47B - Prática 02 - Camada de Redes\|Prática da Camada de Redes]]                                                            |                               [[EC47B - Prática 02 - Camada de Redes\|Prática da Camada de Redes]]                                |        EaD         |
| [[EC47B - Aula Semana 09 - Camada de Transporte\|Camada de Transporte]]                                                         |                             [[EC47B - Ex. 07 - Camada de Transporte\|Ex. 07 - Camada de Transporte]]                              |        EaD         |
| [[EC47B - Aula Semana 10 - Camada de Transporte - 02\|Camada de Transporte - 02]]                                               |                        [[EC47B - Ex. 08 - Camada de Transporte - 02\|Ex. 08 - Camada de Transporte - 02]]                         |        EaD         |
| [[EC47B - Prática 03 - Camada de Transporte\|Prática da Camada de Transporte]]                                                  |                          [[EC47B - Prática 03 - Camada de Transporte\|Prática da Camada de Transporte]]                           |        EaD         |
| [[EC47B - Aula Semana 11 - Camada de Sessão + Apresentação + Aplicação\|Camada de Sessão + Apresentação + Aplicação]]           |      [[EC47B - Ex. 09 - Camada de Sessão + Apresentação + Aplicação\|Ex. 09 - Camada de Sessão + Apresentação + Aplicação]]       |        EaD         |
| [[EC47B - Aula Semana 12 - Camada de Sessão + Apresentação + Aplicação - 02\|Camada de Sessão + Apresentação + Aplicação - 02]] | [[EC47B - Ex. 10 - Camada de Sessão + Apresentação + Aplicação - 02\| Ex. 10 - Camada de Sessão + Apresentação + Aplicação - 02]] |        EaD         |
| [[EC47B - Prática 04 - Camada de Sessão + Apresentação + Aplicação\|Prática da Camada de Sessão + Apresentação + Aplicação]]    |   [[EC47B - Prática 04 - Camada de Sessão + Apresentação + Aplicação\|Prática da Camada de Sessão + Apresentação + Aplicação]]    |        EaD         |

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

