---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Camila Dias de Oliveira Sestito
Carga Horária: "60"
Início: 2025-03-28
Fim: 2025-06-30
Avaliações:
  - "[[ES43C - Avaliação]]"
  - "[[ES43C - Projeto Final]]"
Nota Final: "9.3"
Anotações:
  - "[[ES43C - Aula 01 - 28.03.25 - Introdução a Requisitos]]"
  - "[[ES43C - Aula 02 - 31.03.25 - Engenharia de Requisitos]]"
  - "[[ES43C - Aula 03 - 07.04.25 - Estudos de Viabilidade e Requisitos de Usuário e Sistema]]"
  - "[[ES43C - Aula 04 - 14.04.25 - Gerenciamento de Requisitos]]"
  - "[[ES43C - Aula 05 - 25.04.25 - Gerência de Git e GitHub]]"
  - "[[ES43C - Aula 06 - 05.05.25 - Descrição do Usuário e Elicitação de Requisitos pt. 01]]"
  - "[[ES43C - Aula 07 - 09.05.25 - Elicitação de Requisitos pt. 02]]"
  - "[[ES43C - Aula 08 - 12.05.25 - Elicitação de Requisitos pt. 03]]"
  - "[[ES43C - Aula 09 - 16.05.25 - Elicitação de Requisitos pt. 04]]"
  - "[[ES43C - Aula 10 - 19.05.25 - Validação de Requisitos]]"
  - "[[ES43C - Aula 11 - 26.05.25 - Histórias de Usuário]]"
  - "[[ES43C - Aula 12 - 30.05.25 - Modelo Conceitual, introdução a UML e Diagrama de Caso de Uso]]"
  - "[[ES43C - Aula 13 - 02.06.25 - Diagrama de Classes]]"
  - "[[ES43C - Aula 14 - 06.06.25 - Diagrama de Atividades]]"
  - "[[ES43C - Aula 15 - 09.06.25 - Matriz de Rastreabilidade]]"
Atividades:
  - "[[ES43C - Informações sobre o Grupo]]"
---

![[Estrutura de Dados - 01.png|banner]]

![[Requisitos de Software.png|banner]]
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

| Aula                                                                                                                                                                                                        |                             Atividade                             | Falta | Data de Realização |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------: | :---: | :----------------: |
| Introdução a Ementa do Curso e [[ES43C - Aula 01 - 28.03.25 - Introdução a Requisitos\|Requisitos de Software]]                                                                                             |                                 X                                 |   X   |     28/03/2025     |
| [[ES43C - Aula 02 - 31.03.25 - Engenharia de Requisitos\|Engenharia de Requisitos]]                                                                                                                         |                                 X                                 |   X   |     01/04/2025     |
| :LiBadgeX: Sem necessidade de Presença - Reposta pela Atividade de [[ES43C - Informações sobre o Grupo\|Publicar as Informações sobre o Grupo e o Projeto Final]]                                           | [[ES43C - Informações sobre o Grupo\|Inforamações sobre o Grupo]] |   X   |     04/04/2025     |
| [[ES43C - Aula 03 - 07.04.25 - Estudos de Viabilidade e Requisitos de Usuário e Sistema\| Estudos de Viabilidade e Requisitos de Usuário e Sistema]]                                                        |                                 X                                 |   X   |     07/04/2025     |
| Atividade de Publicar novas informações sobre os Grupos e Estudo de Viabilidade                                                                                                                             |                                 X                                 |   X   |     11/04/2025     |
| [[ES43C - Aula 04 - 14.04.25 - Gerenciamento de Requisitos\|Gerenciamento de Requisitos]] - Projeto SharkTank - Definição de Requisitos                                                                     |                                 X                                 |   X   |     14/04/2025     |
| [[ES43C - Aula 05 - 25.04.25 - Gerência de Git e GitHub\| Gerência de Git e GitHub]] - Projeto SharkTank - Definição de Funcionalidade do GitHub                                                            |                                 X                                 |   X   |     25/04/2025     |
| Utilização do GitHub \| Projeto SharkTank - Criação da Organização e Repositório                                                                                                                            |                                 X                                 |   X   |     28/04/2025     |
| [[ES43C - Aula 06 - 05.05.25 - Descrição do Usuário e Elicitação de Requisitos pt. 01\|Descrição do Usuário e Elicitação de Requisitos pt. 01]] - Projeto SharkTank - Definição de 10 Requisitos Funcionais |                                 X                                 |  Sim  |     05/05/2025     |
| [[ES43C - Aula 07 - 09.05.25 - Elicitação de Requisitos pt. 02\|Elicitação de Requisitos - pt. 02]] - Projeto SharkTank - Definição de 10 Requisitos Não Funcionais                                         |                                 X                                 |   X   |     09/05/2025     |
| [[ES43C - Aula 08 - 12.05.25 - Elicitação de Requisitos pt. 03\|Elicitação de Requisitos - pt. 03]]  -Projeto SharkTank - Definição de Prioridades                                                          |                                 X                                 |   X   |     12/05/2025     |
| [[ES43C - Aula 09 - 16.05.25 - Elicitação de Requisitos pt. 04\|Elicitação de Requisitos - pt. 04]] - Projeto SharkTank - Definição de Prioridades                                                          |                                 X                                 |   X   |     16/05/2025     |
| [[ES43C - Aula 10 - 19.05.25 - Validação de Requisitos\|Validação de Requisitos]] - Projeto SharkTank - Validação de Requisitos - Grupo 02                                                                  |                                 X                                 |   X   |     19/05/2025     |
| Entrega de Validação de Requisitos e Início do Projeto do Protótipo                                                                                                                                         |                                 X                                 |   X   |     23/05/2025     |
| [[ES43C - Aula 11 - 26.05.25 - Histórias de Usuário\|Histórias de Usuário]] - Projeto SharkTank - Definição de 10 Histórias de Usuário                                                                      |                                 X                                 |   X   |     26/05/2025     |
| [[ES43C - Aula 12 - 30.05.25 - Modelo Conceitual, introdução a UML e Diagrama de Caso de Uso\|Modelo Conceitual, UML e Diagrama de Caso de Uso]] - Criação do Diagrama de Caso de Uso                       |                                 X                                 |   X   |     30/05/2025     |
| [[ES43C - Aula 13 - 02.06.25 - Diagrama de Classes\|Diagrama de Classes]]                                                                                                                                   |                                 X                                 |   X   |     02/06/2025     |
| [[ES43C - Aula 14 - 06.06.25 - Diagrama de Atividades]]                                                                                                                                                     |                                 X                                 |   X   |     06/06/2025     |
| [[ES43C - Aula 15 - 09.06.25 - Matriz de Rastreabilidade]]                                                                                                                                                  |                                 X                                 |   X   |     09/06/2025     |
| Apliclação da [[ES43C - Avaliação\|Avaliação]]                                                                                                                                                              |                                 X                                 |   X   |     13/06/2025     |
| :LiBadgeX: Sem necessidade de Presença                                                                                                                                                                      |                                 X                                 |   X   |     16/06/2025     |
| Apresentação do [[ES43C - Projeto Final\|Projeto Final ]]                                                                                                                                                   |                                 X                                 |   X   |     23/06/2025     |
| Apresentação do [[ES43C - Projeto Final\|Projeto Final - pt. 02]]                                                                                                                                           |                                 X                                 |  Sim  |     27/06/2025     |

### **Rastreamento de Presença** | `$= (dv.current().file.name).split(' - ')[1]`

 ```dataviewjs
let editor = app.workspace.getLeaf().view.editor;
let conteudoArquivo = editor.getRange({ line: 0, ch: 0 }, { line: editor.lineCount() - 1, ch: 0 });
let linhas = conteudoArquivo.split('\n');

let faltas = 0;
let totalAulas = 0;

let dentroDaTabela = false;
let nomeMateria = app.workspace.getActiveFile().name.replace(".md", "");

for (let linha of linhas) {
    linha = linha.trim();

    // Detecta início da tabela
    if (linha.startsWith("| Aula ")) {
        dentroDaTabela = true;
        continue;
    }

    if (dentroDaTabela && linha.startsWith("|")) {
        // Ignora linhas de separadores como "| :--- | ---: |"
        if (/^(\|\s*:?-+:?\s*)+\|$/.test(linha)) continue;

        // Quebra a linha com regex que ignora os pipes dentro dos links
        let colunas = linha.split(/(?<!\\)\|/).map(c => c.trim()).filter(c => c.length > 0);

        if (colunas.length >= 4) {
            let falta = colunas[2].toLowerCase(); // Terceira coluna: Falta

            // Aceita 'sim' e 'x' (qualquer capitalização)
            let temFalta = ['sim'].includes(falta);

            totalAulas += 2;
            if (temFalta) {
                faltas += 2;
            }
        }
    }
}

dv.table(
    ["Relação Aulas / Faltas", "Quantidade"],
    [
        [`**Aulas** de ${nomeMateria}`, `**${totalAulas}**`],
        [`**Faltas** de ${nomeMateria}`, `**${faltas}**`]
    ]
);

let presenciaPercentual = totalAulas > 0 ? ((totalAulas - faltas) / totalAulas) * 100 : 0;
dv.paragraph(`Porcentagem de Presença: **${presenciaPercentual.toFixed(2)}%**`);
```
  
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




