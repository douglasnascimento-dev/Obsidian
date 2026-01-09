---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: José Antônio Gonçalves
Carga Horária: "90"
Início: 2025-03-25
Fim: 2025-06-30
Avaliações:
  - "[[ES43B - Média das Listas]]"
  - "[[ES43B - Projeto Pessoal - Entrega Parcial]]"
  - "[[ES43B - Projeto Pessoal - Entrega Final]]"
Nota Final: "9.9"
Anotações:
  - "[[ES43B - Aula 01 - 27.03.25 - Portabilidade da Linguagem Java e Entrada de Dados pelo Terminal]]"
  - "[[ES43B - Aula 02 - 02.04.25 - Mudanças de Tipo]]"
  - "[[ES43B - Aula 03 - 03.04.2025 - Introdução a Programação Orientada a Objetos]]"
  - "[[ES43B - Aula 04 - 08.04.2025 - Organização de Objetos]]"
  - "[[ES43B - Aula 05 - 10.04.2025 - Objetos dentro de Objetos]]"
  - "[[ES43B - Aula 06 - 15.04.2025 - Entrada de Dados por Teclado]]"
  - "[[ES43B - Aula 07 - 17.04.2025 - Funções Construtoras]]"
  - "[[ES43B - Aula 08 - 22.04.2025 - Poliformismo por Sobrecarga]]"
  - "[[ES43B - Aula 09 - 27.04.2025 - Herança]]"
  - "[[ES43B - Aula 10 - 10.06.2025 - JFrame]]"
Atividades:
  - "[[ES43B - Lista de Exs. 02]]"
  - "[[ES43B - Lista de Exs. 03]]"
---

![[Estrutura de Dados - 01.png|banner]]

![[Programação Orientada a Objetos - 01.png|banner]]

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

| Aula                                                                                                                                                                 |                          Atividade                          | Falta | Data de Realização |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------: | :---: | :----------------: |
| Apresentação da Ementa da Disciplina e Introdução a linguagem de Programação Java                                                                                    |                              X                              |   X   |     25/03/2025     |
| [[ES43B - Aula 01 - 27.03.25 - Portabilidade da Linguagem Java e Entrada de Dados pelo Terminal\| Portabilidade da Linguagem Java e Entrada de Dados pelo Terminal]] |                              X                              |   X   |     27/03/2025     |
| [[ES43B - Aula 02 - 02.04.25 - Mudanças de Tipo\|Mudança de Tipo em Linguagem Java, utilizando com Casting e Classes Wrapper]]                                       |                              X                              |   X   |     01/04/2025     |
| [[ES43B - Aula 03 - 03.04.2025 - Introdução a Programação Orientada a Objetos\| Início do Conteúdo referente a Programação Orientada a Objeto]]                      |                              X                              |   X   |     03/04/2025     |
| Importância das [[ES43B - Aula 04 - 08.04.2025 - Organização de Objetos\|Convenções para o uso de Objetos, com getters e setters]]                                   |                              X                              |   X   |     08/04/2025     |
| Introdução e [[ES43B - Aula 05 - 10.04.2025 - Objetos dentro de Objetos\|Utilização de Objetos dentro de Objetos]]                                                   |                              X                              |   X   |     10/04/2025     |
| Utilização da [[ES43B - Aula 06 - 15.04.2025 - Entrada de Dados por Teclado\|Entrada de Dados por Teclado]]                                                          |                              X                              |   X   |     15/04/2025     |
| Utilização das [[ES43B - Aula 07 - 17.04.2025 - Funções Construtoras\|Funções Contrutoras]]                                                                          |                              X                              |  Sim  |     17/04/2025     |
| Aplicação do [[ES43B - Aula 08 - 22.04.2025 - Poliformismo por Sobrecarga\|Poliformismo por Sobrecarga]]                                                             |                              X                              |   X   |     22/04/2025     |
| Introdução a [[ES43B - Aula 09 - 27.04.2025 - Herança\|Herança]]                                                                                                     |                              X                              |   X   |     24/05/2025     |
| Aprofundamento ao Conceito de Herança                                                                                                                                | [[ES43B - Lista de Exs. 02]] - [[ES43B - Lista de Exs. 03]] |  Sim  |     29/05/2025     |
| Aprofundamento ao Conceitos de Herança e Classes Mãe                                                                                                                 |                              X                              |   X   |     06/05/2025     |
| Introdução a Funções construtoras e Sobrescrita                                                                                                                      |                              X                              |   X   |     08/05/2025     |
| Aprofundamento a Funções construtoras e Sobreescrita                                                                                                                 |                              X                              |  Sim  |     13/05/2025     |
| Introdução de Interfaces                                                                                                                                             |                              X                              |   X   |     15/05/2025     |
| Aprofundamento a Interfaces                                                                                                                                          |                              X                              |   X   |     20/05/2025     |
| Aprofundamento a Interfaces - Métodos                                                                                                                                |                              X                              |   X   |     22/05/2025     |
| Introdução a Sobrecarga                                                                                                                                              |                              X                              |   X   |     27/05/2025     |
| Aprofundamento a Sobrecarga                                                                                                                                          |                              X                              |  Sim  |     29/05/2025     |
| Introdução a Appache - Comandos Básicos                                                                                                                              |                              X                              |   X   |     03/06/2025     |
| Introdução a JFrames                                                                                                                                                 |                              X                              |   X   |     05/06/2025     |
| Aprofundamento a [[ES43B - Aula 10 - 10.06.2025 - JFrame\| JFrames]]                                                                                                 |                              X                              |   X   |     10/06/2025     |
| Aprofundamento a JFrames - Elementos                                                                                                                                 |                              X                              |   X   |     12/06/2025     |
| Aprofundamento a JFrames - Funções                                                                                                                                   |                              X                              |   X   |     17/06/2025     |
| Aprofundamento a JFrames - Tabelas                                                                                                                                   |                              X                              |   X   |     19/06/2025     |
| Aprofundamento a JFrames - Menu                                                                                                                                      |                              X                              |  Sim  |     24/06/2025     |
| Métodos de Processos de Produção de Software                                                                                                                         |                              X                              |   X   |     26/06/2025     |

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





