---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Emilio Augusto Coelho Barros
Carga Horária: "60"
Início: 2025-03-26
Fim: 2025-07-12
Avaliações:
  - "[[PBE - Avaliação 01]]"
  - "[[PBE - Avaliação 02]]"
  - "[[PBE - Avaliação 03]]"
  - "[[PBE - Média das Tarefas]]"
  - "[[PBE - Médias dos Questionários]]"
Nota Final: "8.3"
Anotações:
  - "[[PBE - Aula 01 - 26.03.25 - Importância da Estatística]]"
  - "[[PBE - Aula 02  - 28.03.25 - Introdução ao Software R]]"
  - "[[PBE - Aula 03 - 02.04.25 - Estatística Descritiva]]"
  - "[[PBE - Aula 04 - 04.04.25 - Medidas de Dispersão]]"
  - "[[PBE - Aula 05 - 09.04.25 - Tabelas de Frequência]]"
  - "[[PBE - Aula 06 - 11.04.25 - Correlação]]"
  - "[[PBE - Aula 07 - 16.04.25 - Boxplot e Gráfico de Barras]]"
  - "[[PBE - Aula 08 - 30.04.25 - Probabilidade]]"
  - "[[PBE - Aula 09 - 14.05.25 - Intervalo de Confiança - Média]]"
  - "[[PBE - Aula 10 - 16.05.25 - Intervalo de Confiança - Variância Populacional e Intervalo de Confiança - Proporção Populacional]]"
  - "[[PBE - Aula 11 - 21.05.25 - Testes de Hipóteses]]"
  - "[[PBE - Aula 12 - 23.05.25 - Testes de Hipóteses - Média]]"
  - "[[PBE - Aula 13 - 28.05.25 - Testes de Hipóteses - Variância Populacional e Proporção Populacional]]"
  - "[[PBE - Aula 14 - 04.06.25 - Testes de Hipóteses - Comparando Médias]]"
  - "[[PBE - Aula 15 - 11.06.25 - Testes de Hipóteses - Comparando mais de duas Médias]]"
  - "[[PBE - Aula 16 - 13.06.25 - Testes de Hipóteses - Correlação de Pearson]]"
  - "[[PBE - Aula 17 - 18.06.25 - Testes de Hipóteses - Não paramétricos]]"
Atividades:
  - "[[PBE - Questionário 01]]"
  - "[[PBE - Questionário 02]]"
  - "[[PBE - Questionário 03]]"
  - "[[PBE - Questionário 04]]"
  - "[[PBE - Questionário 05]]"
  - "[[PBE - Questionário 06]]"
  - "[[PBE - Questionário 07]]"
  - "[[PBE - Questionário 08]]"
  - "[[PBE - Questionário 09]]"
  - "[[PBE - Questionário 10]]"
  - "[[PBE - Questionário 11]]"
  - "[[PBE - Questionário 12]]"
  - "[[PBE - Questionário 13]]"
  - "[[PBE - Questionário 14]]"
  - "[[PBE - Questionário 15]]"
  - "[[PBE - Questionário 16]]"
  - "[[PBE - Questionário 17]]"
  - "[[PBE - Questionário 18]]"
  - "[[PBE - Questionário 19]]"
  - "[[PBE - Tarefa 01]]"
  - "[[PBE - Tarefa 02]]"
  - "[[PBE - Tarefa 03]]"
  - "[[PBE - Tarefa 04]]"
  - "[[PBE - Tarefa 05]]"
  - "[[PBE - Tarefa 06]]"
  - "[[PBE - Tarefa 07]]"
  - "[[PBE - Tarefa 08]]"
  - "[[PBE - Tarefa 09]]"
  - "[[PBE - Tarefa 10]]"
  - "[[PBE - Tarefa 11]]"
  - "[[PBE - Tarefa 12]]"
  - "[[PBE - Tarefa 13]]"
  - "[[PBE - Tarefa 14]]"
---

![[Estrutura de Dados - 01.png|banner]]

![[Estrutura de Dados - 01.png|banner]]

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

| Aula                                                                                                                                                                                                                                                                                 |                                        Atividade                                         | Falta | Data de Realização |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------: | :---: | :----------------: |
| Apresentação da Ementa da Disciplina e a [[PBE - Aula 01 - 26.03.25 - Importância da Estatística\| Importância da Estatística]]                                                                                                                                                      |                        [[PBE - Questionário 01\|Questionário 01]]                        |   X   |     26/03/2025     |
| :LiSquareX: *Sem Necessidade de Presença* - [[PBE - Aula 02  - 28.03.25 - Introdução ao Software R\|Introdução ao Software R]]                                                                                                                                                       |                        [[PBE - Questionário 02\|Questionário 02]]                        |   X   |     28/03/2025     |
| [[PBE - Aula 03 - 02.04.25 - Estatística Descritiva\| Estatística Descritiva - Medidas de Posição ou Tendência Central]] \| Realização da [[PBE - Tarefa 01\|Tarefa 01]]                                                                                                             |                        [[PBE - Questionário 03\|Questionário 03]]                        |   X   |     02/04/2025     |
| [[PBE - Aula 04 - 04.04.25 - Medidas de Dispersão\|Estatística Descritiva - Medidas de Dispersão]] \| Realização da [[PBE - Tarefa 02\|Tarefa 02]]                                                                                                                                   |                        [[PBE - Questionário 04\|Questionário 04]]                        |   X   |     04/04/2025     |
| [[PBE - Aula 05 - 09.04.25 - Tabelas de Frequência\|Tabelas de Frequência]] \| Realização da [[PBE - Tarefa 03\|Tarefa 03]]                                                                                                                                                          |                        [[PBE - Questionário 05\|Questionário 05]]                        |   X   |     09/04/2025     |
| [[PBE - Aula 06 - 11.04.25 - Correlação\|Correlação]] \| Realização da [[PBE - Tarefa 04\|Tarefa 04]]                                                                                                                                                                                |                        [[PBE - Questionário 06\|Questionário 06]]                        |   X   |     11/04/2025     |
| [[PBE - Aula 07 - 16.04.25 - Boxplot e Gráfico de Barras\|BoxPlot e Gráfico de Barras]] \| Realização da [[PBE - Tarefa 05\|Tarefa 05]]                                                                                                                                              |                        [[PBE - Questionário 07\|Questionário 07]]                        |   X   |     16/04/2025     |
| :LiSquareX: *Sem Necessidade de Presença* \| Destinada para o Exercício Pré Avaliação                                                                                                                                                                                                |                                            X                                             |   X   |     23/04/2025     |
| :LiSquareX: *Sem Necessidade de Presença* \| Destina para a [[PBE - Avaliação 01]]                                                                                                                                                                                                   |                                            X                                             |   X   |     25/04/2025     |
| [[PBE - Aula 08 - 30.04.25 - Probabilidade\|Probabilidade]] \| Realização da [[PBE - Tarefa 06\|Tarefa 06]]                                                                                                                                                                          | [[PBE - Questionário 08\|Questionário 08]] \| [[PBE - Questionário 09\|Questionário 09]] |  Sim  |     30/04/2025     |
| :LiSquareX: *Sem Necessidade de Presença* \| Destinada para o Exercício Pré Avaliação                                                                                                                                                                                                |                                            X                                             |   X   |     07/05/2025     |
| :LiSquareX: *Sem Necessidade de Presença* \| Aplicação da  [[PBE - Avaliação 02]]                                                                                                                                                                                                    |                                            X                                             |   X   |     09/05/2025     |
| [[PBE - Aula 09 - 14.05.25 - Intervalo de Confiança - Média \| Intervalo de Confiança - Média]] \| Realização da [[PBE - Tarefa 07\|Tarefa 07]]                                                                                                                                      |                        [[PBE - Questionário 10\|Questionário 10]]                        |   X   |     14/05/2025     |
| [[PBE - Aula 10 - 16.05.25 - Intervalo de Confiança - Variância Populacional e Intervalo de Confiança - Proporção Populacional\| Intervalo de Confiança - Variância Populacional e Intervalo de Confiança - Proporção Populacional]] \| Realização da [[PBE - Tarefa 08\|Tarefa 08]] |                        [[PBE - Questionário 11\|Questionário 11]]                        |  Sim  |     16/05/2025     |
| [[PBE - Aula 11 - 21.05.25 - Testes de Hipóteses \| Testes de Hipóteses]] \| Realização da [[PBE - Tarefa 09]]                                                                                                                                                                       |                        [[PBE - Questionário 12\|Questionário 12]]                        |   X   |     21/05/2025     |
| [[PBE - Aula 12 - 23.05.25 - Testes de Hipóteses - Média\|Testes de Hipóteses - Média]] \| Realização da [[PBE - Tarefa 09\|Tarefa 09]]                                                                                                                                              |                        [[PBE - Questionário 13\|Questionário 13]]                        |   X   |     23/05/2025     |
| [[PBE - Aula 13 - 28.05.25 - Testes de Hipóteses - Variância Populacional e Proporção Populacional\|Testes de Hipóteses - Variância Populacional e Proporção Populacional]] \| Realização da [[PBE - Tarefa 10\|Tarefa 10]]                                                          |                        [[PBE - Questionário 14\|Questionário 14]]                        |   X   |     28/05/2025     |
| :LiSquareX: *Sem Necessidade de Presença*                                                                                                                                                                                                                                            |                                            X                                             |   X   |     30/05/2025     |
| [[PBE - Aula 14 - 04.06.25 - Testes de Hipóteses - Comparando Médias\|Testes de Hipóteses - Comparando Médias]] \| Realização da [[PBE - Tarefa 11 \| Tarefa 11]]                                                                                                                    |                        [[PBE - Questionário 15\|Questionário 15]]                        |   X   |     04/06/2025     |
| :LiSquareX: *Sem Necessidade de Presença*                                                                                                                                                                                                                                            |                                            X                                             |   X   |     06/06/2025     |
| [[PBE - Aula 15 - 11.06.25 - Testes de Hipóteses - Comparando mais de duas Médias\| Testes de Hipóteses - Comparando mais de duas Médias]] \| Realização da [[PBE - Tarefa 12\|Tarefa 12]]                                                                                           |                       [[PBE - Questionário 16\| Questionário 16]]                        |  Sim  |     11/06/2025     |
| [[PBE - Aula 16 - 13.06.25 - Testes de Hipóteses - Correlação de Pearson\| Testes de Hipóteses - Correlação de Pearson]] \| Realização da [[PBE - Tarefa 13\|Tarefa 13]]                                                                                                             |                        [[PBE - Questionário 17\|Questionário 17]]                        |   X   |     13/06/2025     |
| [[PBE - Aula 17 - 18.06.25 - Testes de Hipóteses - Não paramétricos\| Testes de Hipóteses - Não parámetricos]] \| Realização da [[PBE - Tarefa 14\|Tarefa 14]]                                                                                                                       |                        [[PBE - Questionário 18\|Questionário 18]]                        |   X   |     18/06/2025     |
| :LiSquareX: *Sem Necessidade de Presença*                                                                                                                                                                                                                                            |                                            X                                             |   X   |     20/06/2025     |
| :LiSquareX: *Sem Necessidade de Presença* \| Destinada para o Exercício Pré Avaliação                                                                                                                                                                                                |                        [[PBE - Questionário 19\|Questionário 19]]                        |   X   |     25/06/2025     |
| :LiSquareX: *Sem Necessidade de Presença* \| Aplicação da  [[PBE - Avaliação 03]]                                                                                                                                                                                                    |                                            X                                             |   X   |     27/05/2025     |

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


