---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Camila Dias de Oliveira Sestito
Carga Horária: 30h
Nota Final: "9.6"
Início: 2025-08-14
Fim: ""
Avaliações:
  - "[[ES44D - Avaliação]]"
  - "[[ES44D - Atividades]]"
---

![[Interação Homem Computador.png|banner]]
> [!banner-icon] :LiBookMarked: ES44D 
# :LiClipboard: **Atividades** | Interação Homem Computador

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44D - Interação Homem Computador/Atividades'));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph(" :LiCheckCheck: Durante a realização dessa disciplina não houve 'Atividades'.");
} else {
    // Data atual
    let dataAtual = new Date();

    // Array com os nomes dos meses em português
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    // Função para formatar a data para "DD de Mês de YYYY"
    function formatarData(data) {
        if (!data) return "";
        let dia = data.getDate();
        let mes = meses[data.getMonth()];
        let ano = data.getFullYear();
        return `${dia} de ${mes} de ${ano}`;
    }

    // Função para verificar se a data final está a menos de dois dias do prazo
    function verificarDataFinal(dataFinal) {
        let diffMilissegundos = new Date(dataFinal) - dataAtual;
        let diffDias = diffMilissegundos / (1000 * 60 * 60 * 24);
        return diffDias < 2;
    }

    // Cores baseadas na paleta fornecida
    const corPendente = "rgb(54, 102, 129)";  // Azul principal
    const corConcluido = "rgb(91, 145, 177)"; // Azul mais claro

    // Criar a tabela de dados com os ajustes visuais
    let tabelaDados = sortedPagesArray.map(p => {
        let dataInicio = p.Início ? new Date(p.Início) : null;
        let dataFinal = p.Final ? new Date(p.Final) : null;

        // Definir status e cor
        let statusTexto = p.Status === true ? "Concluído" : "Pendente";
        let corStatus = p.Status === true ? corConcluido : corPendente;

        if (dataFinal && verificarDataFinal(dataFinal) && statusTexto === "Pendente") {
            corStatus = "rgb(178, 50, 50)"; // Vermelho escuro para urgência
        }

        return [
            `**${p.file.link}** | ${p.Conteúdo ? p.Conteúdo : ""}`, // Nome do arquivo em vez do link
            formatarData(dataInicio),
            formatarData(dataFinal),
            `<span style="color:${corStatus}; font-weight: bold;">${statusTexto}</span>`, // Aplicar cor e negrito
        ];
    });

    // Exibir a tabela
    dv.table(
        ["Atividade", "Data de Início", "Data Final", "Status"], 
        tabelaDados
    );
}

```

## :LiCalendarCheck2: **Registros de Aulas** | Interação Homem Computador

| Aula                                                                                                                           |                                                      Atividade                                                      | Falta | Data de Realização |
| :----------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------: | :---: | :----------------: |
| [[ES44D - Aula 01 - 14.08.2025 - Apresentação a IHC\|Apresentação a IHC]] e Contextualização sobre Interação Humano Computador |        [[ES44D - 01 - Avaliação Diagnóstica e Postagem no Fórum\|Avaliação Diagnóstica e Postagem no Fórum]]        |   X   |     14.08.2025     |
| [[ES44D - Aula 01 - 14.08.2025 - Apresentação a IHC\| Conceitos em IHC]] + Apresentação do CodeVita                            |                                                          X                                                          |   X   |     21.08.2025     |
| Continuação aos [[ES44D - Aula 02 - 21.08.2025 - Conceitos em IHC\|Conceitos em IHC]]                                          |                                 [[ES44D - 02 - Qualidade em IHC\|Qualidade em IHC]]                                 |   X   |     28.08.2025     |
| [[ES44D - Aula 03 - 04.09.2025 - Processo de Design\| Processo de Desing]] em IHC                                              |                        [[ES44D - 03 - Processo de Design em IHC\|Processo de Design em IHC]]                        |   X   |     04.09.2025     |
| Métodos para [[ES44D - Aula 04 - 11.09.2025 - Entendendo os Usuários\|Entender o Usuário]]                                     | [[ES44D - 04 - Entendendo os Usuários e desenhando o seu perfil\|Entendendo os Usuários e desenhando o seu perfil]] |   X   |     11.09.2025     |
| [[ES44D - Aula 05 - 18.09.2025 - Abordagens Teóricas em IHC\|Abordagens Teóricas em IHC]] - Parte 01                           |                                                          X                                                          |   X   |     18.09.2025     |
| [[ES44D - Aula 06 - 25.09.2025 - Abordagens Teóricas em IHC - 02\|Abordagens Teóricas em IHC]] - Parte 02                      |                                   [[ES44D - 05 - Atividade CRAP\|Atividade CRAP]]                                   |   X   |     25.09.2025     |
| [[ES44D - Aula 07 - 02.10.2025 - Princípios de Design e Prototipação\|Princípios de Design e Prototipação]] em IHC             |                                     [[ES44D - 06 - Prototipação\|Prototipação]]                                     |   X   |     02.10.2025     |
| [[ES44D - Aula 08 - 09.10.2025 - Acessibilidade Digital\|Acessibilidade Digital]] em IHC                                       |                                                          X                                                          |   X   |     09.10.2025     |
| Atv. Prática com Tecnologias Assistivas                                                                                        |                                                          X                                                          |   X   |     16.10.2025     |
| Processo de [[ES44D - Aula 08 - 23.10.2025 - Avaliação em IHC\| Avaliação em IHC]]                                             |                              [[ES44D - 07 - Teste com o usuário\|Teste com o usuário]]                              |  Sim  |     23.10.2025     |
| :LiXCircle: Sem necessidade de Presença - **SECOMP**                                                                           |                                                          X                                                          |   X   |     30.10.2025     |
| Interfaces Avançadas em IHC                                                                                                    |                                                          X                                                          |   X   |     06.11.2025     |
| Aplicação da [[ES44D - Avaliação\|Avaliação]]                                                                                  |                                                          X                                                          |   X   |     13.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                        |                                                          X                                                          |   X   |     27.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                        |                                                          X                                                          |   X   |     04.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                        |                                                          X                                                          |   X   |     11.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                        |                                                          X                                                          |   X   |     18.12.2025     |


### :LiCalendarRange: Rastreamento de Presença | Interação Homem Computador

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

    if (linha.startsWith("| Aula")) {
        dentroDaTabela = true;
        continue;
    }

    if (!dentroDaTabela || !linha.startsWith("|")) continue;
    
    if (/^(\|\s*:?-+:?\s*)+\|$/.test(linha)) continue;

    let colunas = linha.split(/(?<!\\)\|/).map(c => c.trim());
    
    if (colunas.length === 6) {
        let conteudoAula = colunas[1];
        let statusFalta = colunas[3];

        // Apenas processa se a primeira coluna não estiver vazia
        if (conteudoAula.length > 0) {
            totalAulas += 2;
            
            if (statusFalta.toLowerCase() === 'sim') {
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

# :LiNotebook: **Anotações** | Interação Homem Computador

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44D - Interação Homem Computador/Anotações'));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph(":LiCheckCheck: Durante a realização dessa disciplina não houve 'Anotações'.");
} else {
    // Data atual
    let dataAtual = new Date();
    // Criar a tabela de dados com os ajustes visuais
    let tabelaDados = sortedPagesArray.map(p => {
        return [
            `**${p.file.link}**`, // Nome do arquivo em vez do link
        ];
    });
    // Exibir a tabela
    dv.table(
        ["Anotações"], 
        tabelaDados
    );
}

```

# :LiPieChart: **Avaliações** | Interação Homem Computador

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44D - Interação Homem Computador/Avaliações'));

// Ordene as notas por 'Referência' (ou use 'file.name' se for o caso)
let sortedPages = pages.sort(p => p.file.name);

// Converta `sortedPages` para um array regular
let sortedPagesArray = Array.from(sortedPages);

// Inicialize variáveis para o cálculo da média final
let totalPeso = 0;
let totalNotaComPeso = 0;

// Crie uma tabela de dados, ignorando notas indefinidas no cálculo da média
let tabelaDados = sortedPagesArray.map(p => {
    let notaValida = p.Nota !== undefined && p.Nota !== null;
    if (notaValida) {
        totalPeso += p.Peso;
        totalNotaComPeso += p.Nota * p.Peso;
    }
    return [`[[${p.file.name}]] | ${p.Referência === null ? " " : p.Referência }`, p.Nota, p.Peso];
});

// Calcule a média final, considerando apenas as notas definidas
let mediaFinal = totalPeso ? totalNotaComPeso / totalPeso : 0;

// Adicione a média final como a última linha da tabela
tabelaDados.push(["**Média Final**", `**${notaManual ? notaManual : mediaFinal.toFixed(1)}**`, ""]);

// Exiba a tabela com as notas e a média final
dv.table(
    ["Avaliação", "Nota", "Peso"], 
    tabelaDados
);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Nota Final"] = notaManual ? notaManual : mediaFinal.toFixed(1);
    });
}
```

