---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Gisele Alves Santana
Carga Horária: 90h
Nota Final: "9.8"
Início: 2025-08-12
Fim: ""
Avaliações:
  - "[[ES44B - Avaliação]]"
  - "[[ES44B - Projeto]]"
  - "[[ES44B - Média das Atividades]]"
---


![[Programação Orientada a Objetos - 02.png|banner]]

## **Atividades** | Programação Orientada a Objetos - 02 

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

## **Registros de Aulas** | Programação Orientada a Objetos - 02 

| Aula                                                                                                                                                                         |                                                                           Atividade                                                                            | Falta | Data de Realização |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---: | :----------------: |
| Apresentação da Ementa da Disciplina                                                                                                                                         |                                                                               X                                                                                |   X   |     14.08.2025     |
| [[ES44B - Aula 01 - 15.08.2025 - Conceitos de OO e UML\|Conceitos de OO e UML]]                                                                                              |                                                 [[ES44B - Atv. 01 - Grupos e Temas\|Atv. 01 - Grupos e Temas]]                                                 |   X   |     15.08.2025     |
| Levantamento de Requisitos de Software                                                                                                                                       |                                      [[ES44B - Atv. 02 - Classes e Funcionalidades\|Atv. 02 - Classes e Funcionalidades]]                                      |   X   |     21.08.2025     |
| Realização da [[ES44B - Atv. 03 - Documento de Requisitos\|Atv. 03 - Documentos de Requisitos]]                                                                              |                                       [[ES44B - Atv. 03 - Documento de Requisitos\|Atv. 03 - Documentos de Requisitos]]                                        |   X   |     22.08.2025     |
| Diagrama de Caso de Uso                                                                                                                                                      |                                                                               X                                                                                |   X   |     28.08.2025     |
| :LiCircleX: *Sem Necessidade de Presença* \| Falta de Energia no Campus                                                                                                      |                                                                               X                                                                                |   X   |     29.08.2025     |
| Diagrama de Classes                                                                                                                                                          |                                                                               X                                                                                |   X   |     04.09.2025     |
| Realização da [[ES44B - Atv. 04 - Diagrama de Caso de Uso\|Atv. 04 - Diagrama de Caso de Uso]] e da [[ES44B - Atv. 05 - Diagrama de Classes\|Atv. 05 - Diagrama de Classes]] | [[ES44B - Atv. 04 - Diagrama de Caso de Uso\|Atv. 04 - Diagrama de Caso de Uso]] e da [[ES44B - Atv. 05 - Diagrama de Classes\|Atv. 05 - Diagrama de Classes]] |   X   |     05.09.2025     |
| Diagrama de Atividades                                                                                                                                                       |                                                                               X                                                                                |   X   |     11.09.2025     |
| Realização da [[ES44B - Atv. 06 - Diagrama de Atividade\|Atv. 06 - Diagrama de Atividade]]                                                                                   |                                                                               X                                                                                |  Sim  |     12.09.2025     |
| Revisão da [[ES44B - Avaliação]]                                                                                                                                             |                                                                               X                                                                                |   X   |     18.09.2025     |
| Realização da [[ES44B - Avaliação]]                                                                                                                                          |                                                                               X                                                                                |   X   |     19.09.2025     |
| Boas Práticas                                                                                                                                                                |                                                                               X                                                                                |   X   |     25.09.2025     |
| Boas Práticas - Padrão MVC                                                                                                                                                   |                                                     [[ES44B - Atv. 07 - Padrão MVC\|Atv. 07 - Padrão MVC]]                                                     |   X   |     26.09.2025     |
| Boas Práticas - Princípio SRP                                                                                                                                                |                                                  [[ES44B - Atv. 08 - Princípio SRP\| Atv. 08 Princípio SRP]]                                                   |   X   |     02.10.2025     |
| Boas Práticas - Princípio DIP                                                                                                                                                |                                                  [[ES44B - Atv. 09 - Princípio DIP\|Atv. 09 - Princípio DIP]]                                                  |   X   |     03.10.2025     |
| Conexão com o BD - Introdução Teórica                                                                                                                                        |                                                                               X                                                                                |   X   |     09.10.2025     |
| Conexão com o BD - Introdução Prática                                                                                                                                        |                                                                               X                                                                                |   X   |     10.10.2025     |
| Conexão com o BD - Create e Insert                                                                                                                                           |                                                                               X                                                                                |   X   |     16.10.2025     |
| Conexão com o BD - Select e Delete                                                                                                                                           |                                                                               X                                                                                |   X   |     17.10.2025     |
| Conexão com o DB - Formulários                                                                                                                                               |                                                                               X                                                                                |   X   |     23.10.2025     |
| Conexão com o BD - Formulários                                                                                                                                               |                                                                               X                                                                                |   X   |     24.10.2025     |
| Conexão com o DB - MVC                                                                                                                                                       |                                                                               X                                                                                |   X   |     30.10.2025     |
| Conexão com o BD - MVC                                                                                                                                                       |                                                                               X                                                                                |   X   |     31.10.2025     |
| :LiXCircle: Sem necessidade de Presença - **Multithreading**<br>                                                                                                             |                                                                               X                                                                                |   X   |     06.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Multithreading**<br>                                                                                                             |                                                                               X                                                                                |   X   |     07.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Multithreading**<br>                                                                                                             |                                                                               X                                                                                |  Sim  |     13.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Apresentação do [[ES44B - Projeto\|Projeto]]**                                                                                   |                                                                               X                                                                                |   X   |     14.11.2025     |
| Apresentação do **[[ES44B - Projeto\|Projeto]]**                                                                                                                             |                                                                  [[ES44B - Projeto\|Projeto]]                                                                  |   X   |     27.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Apresentação do [[ES44B - Projeto\|Projeto]]**                                                                                   |                                                                               X                                                                                |   X   |     28.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                                                      |                                                                               X                                                                                |   X   |     04.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                                                      |                                                                               X                                                                                |   X   |     05.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                                                      |                                                                               X                                                                                |   X   |     11.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                                                      |                                                                               X                                                                                |   X   |     12.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                                                      |                                                                               X                                                                                |   X   |     18.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                                                      |                                                                               X                                                                                |   X   |     19.12.2025     |

### **Rastreamento de Presença** | Programação Orientada a Objetos - 02

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

![[Banner 02 - 04.png]]

## **Anotações** | Programação Orientada a Objetos - 02

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

## **Avaliações** | Programação Orientada a Objetos - 02

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

