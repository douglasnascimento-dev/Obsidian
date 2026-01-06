---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Rosângela De Fátima Pereira Marquesone
Carga Horária: 90h
Nota Final: "7.8"
Início: 2025-08-12
Fim: ""
Avaliações:
  - "[[ES44A - Avaliação 01]]"
  - "[[ES44A - Avaliação 02]]"
  - "[[ES44A - Projeto Final]]"
---

![[Estrutura de Dados - 02.png|banner]]
> [!banner-icon] :LiBookMarked: ES44A 
# :LiClipboard: **Atividades** | Estrutura de Dados - 02 

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44A - Estrutura de Dados - 02/Atividades'));

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
## :LiCalendarCheck2: **Registros de Aulas** | Estrutura de Dados - 02 

| Aula                                                                                                                                           |                                          Atividade                                           | Falta | Data de Realização |
| :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------: | :---: | :----------------: |
| Apresentação da Ementa da Disciplina                                                                                                           |                                              X                                               |   X   |     12.08.2025     |
| [[ES44A - Aula 01 - 18.08.2025 - Selection Sort\| Aula 01 - Selection Sort]]                                                                   |                                              X                                               |   X   |     18.08.2025     |
| Realização da [[ES44A - Atv. Prática 01\| Atv. Prática 01]]                                                                                    |                        [[ES44A - Atv. Prática 01\| Atv. Prática 01]]                         |   X   |     19.08.2025     |
| [[ES44A - Aula 02 - 25.08.2025 - Insertion Sort\| Aula 02 - Insertion Sort]]                                                                   |                                              X                                               |   X   |     25.08.2025     |
| Realização da [[ES44A - Atv. Prática 02\| Atv. Prática 02]] e da [[ES44A - Atv. Prática 03\| Atv. Prática 03]]                                 | [[ES44A - Atv. Prática 02\|Atv. Prática 02]] e [[ES44A - Atv. Prática 03\| Atv. Prática 03]] |   X   |     26.08.2025     |
| Realização da [[ES44A - Atv. Prática 04\| Atv. Prática 04]]                                                                                    |                        [[ES44A - Atv. Prática 04\| Atv. Prática 04]]                         |   X   |     01.09.2025     |
| Realização da  [[ES44A - Atv. Prática 05\| Atv. Prática 05]]                                                                                   |                        [[ES44A - Atv. Prática 05\| Atv. Prática 05]]                         |   X   |     02.09.2025     |
| Correção da  [[ES44A - Atv. Prática 05\| Atv. Prática 05]] e Aula 03 - Árvores                                                                 |                                              X                                               |   X   |     08.09.2025     |
| Aula 04 - Árvore AVL - Criação de Árvores - Realização da [[ES44A - Atv. Prática 06]]                                                          |                                 [[ES44A - Atv. Prática 06]]                                  |  Sim  |     09.09.2025     |
| Aula 05 - Árvore AVL - Código de Inclusão - Realização da [[ES44A - Atv. Prática 07\| Atv. Prática 07]]                                        |                        [[ES44A - Atv. Prática 07\| Atv. Prática 07]]                         |   X   |     15.09.2025     |
| Aula 06 - Árvore AVL - Código de Exclusão - Realização da [[ES44A - Atv. Prática 08\| Atv. Prática 08]]                                        |                        [[ES44A - Atv. Prática 08\| Atv. Prática 08]]                         |   X   |     16.09.2025     |
| Realização da [[ES44A - Atv. Prática 09\|Atv. Prática 09]]                                                                                     |                         [[ES44A - Atv. Prática 09\|Atv. Prática 09]]                         |  Sim  |     22.09.2025     |
| *Sem necessidade de presença* - Feira de Profissões                                                                                            |                                              X                                               |   X   |     23.09.2025     |
| :LiXCircle: Sem necessidade de Presença - **Aula dedicada para retirar dúvidas sobre a realização da [[ES44A - Avaliação 01\| Avaliação 01]]** |                                              X                                               |   X   |     29.09.2025     |
| Aplicação da [[ES44A - Avaliação 01\| Avaliação 01]]                                                                                           |                                              X                                               |   X   |     30.09.2025     |
| Quiz sobre os conteúdos aplicados até o momento                                                                                                |                                              X                                               |   X   |     06.10.2025     |
| Aula 07 - Árvore Rubro Negro - Introdução - Realização de Atv. em Sala - Árvore Rubro Negra                                                    |                                           Em Sala                                            |  Sim  |     07.10.2025     |
| Realização da [[ES44A - Atv. Prática 10\|Atv. Prática 10]]                                                                                     |                         [[ES44A - Atv. Prática 10\|Atv. Prática 10]]                         |   X   |     13.10.2025     |
| Realização da [[ES44A - Atv. Prática 11\|Atv. Prática 11]]                                                                                     |                         [[ES44A - Atv. Prática 11\|Atv. Prática 11]]                         |  Sim  |     14.10.2025     |
| Correção do Gabarito da Atv.11                                                                                                                 |                                              X                                               |   X   |     20.10.2025     |
| :LiXCircle: Sem necessidade de Presença - **SEI SIATE**                                                                                        |                                              X                                               |   X   |     21.10.2025     |
| :LiXCircle: Sem necessidade de Presença - **SECOMP**                                                                                           |                                              X                                               |   X   |     28.10.2025     |
| Aula 08 - Árvore B                                                                                                                             |                                              X                                               |  Sim  |     03.11.2025     |
| Realização de Atv. em Sala - Árvore B                                                                                                          |                                           Em sala                                            |   X   |     04.11.2025     |
| Aula 09 - Grafos                                                                                                                               |                                              X                                               |   X   |     10.11.2025     |
| Realização de Atv. em Sala - Grafos                                                                                                            |                                           Em sala                                            |   X   |     11.11.2025     |
| Aula 10 - Implementação em Grafos                                                                                                              |                                              X                                               |   X   |     17.11.2025     |
| Realização de Atv. em Sala - Grafos                                                                                                            |                                           Em sala                                            |   X   |     18.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Aula dedicada para retirar dúvidas sobre a realização da [[ES44A - Avaliação 02\| Avaliação 02]]** |                                              X                                               |   X   |     24.11.2025     |
| Aplicação da [[ES44A - Avaliação 02\|Avaliação 02]]                                                                                            |                                              X                                               |   X   |     25.11.2025     |
| :LiXCircle: Sem necessidade de Presença - **Desenvolvimento do Projeto Final**                                                                 |                                              X                                               |   X   |     01.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Desenvolvimento do Projeto Final**                                                                 |                                              X                                               |   X   |     02.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                        |                                              X                                               |   X   |     08.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                        |                                              X                                               |   X   |     09.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                        |                                              X                                               |   X   |     15.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                                                        |                                              X                                               |   X   |     16.12.2025     |


### :LiCalendarRange: Rastreamento de Presença | Estrutura de Dados - 02

> 72 aulas previstas

```dataviewjs
let editor = app.workspace.getLeaf().view.editor;
let conteudoArquivo = editor.getRange({ line: 0, ch: 0 }, { line: editor.lineCount() - 1, ch: 0 });
let linhas = conteudoArquivo.split('\n');

let faltas = 0;
let totalAulas = 0;
let listaFaltas = []; 

let dentroDaTabela = false;
let nomeMateria = app.workspace.getActiveFile().name.replace(".md", "");

// Função auxiliar para limpar sujeira do texto
const limparTexto = (txt) => txt ? txt.replace(/[\u200B-\u200D\uFEFF]/g, '').trim().toLowerCase() : "";

for (let linha of linhas) {
    let linhaOriginal = linha.trim();

    // 1. Detecta cabeçalho
    if (linhaOriginal.includes("| Aula") && linhaOriginal.includes("| Falta")) {
        dentroDaTabela = true;
        continue;
    }

    if (dentroDaTabela && linhaOriginal.startsWith("|")) {
        // 2. Ignora linhas de separação visual (----)
        if (linhaOriginal.includes("---")) continue;

        // --- TRUQUE PARA CORRIGIR O ERRO DOS LINKS ---
        // Substituímos os pipes '|' que estão DENTRO de [[...]] por um símbolo temporário '§'
        // Assim o split não quebra o link no meio.
        let linhaSegura = linhaOriginal.replace(/\[\[(.*?)\]\]/g, (match) => {
            return match.replace(/\|/g, '§'); 
        });

        // 3. Divide as colunas usando o pipe normal
        let colunas = linhaSegura.split("|").map(c => c.trim());

        // A estrutura padrão do split em linhas que começam e terminam com | é:
        // Index 0: "" (vazio antes do primeiro pipe)
        // Index 1: Aula
        // Index 2: Atividade
        // Index 3: Falta
        // Index 4: Data
        
        if (colunas.length >= 4) {
            // Recupera os valores (e desfaz a troca do símbolo § caso queiramos exibir o nome)
            let textoAula = colunas[1].replace(/§/g, '|');
            let textoAtividade = colunas[2].replace(/§/g, '|');
            let textoFalta = limparTexto(colunas[3]); // Coluna 3 é a Falta
            let textoData = colunas[4] ? colunas[4] : "";

            // Verifica se a linha tem conteúdo real (não é linha vazia de formatação)
            let temConteudo = textoAula !== "" || textoAtividade !== "" || textoFalta !== "";

            if (temConteudo) {
                totalAulas += 2;

                // Lógica de Falta: Aceita "sim", "s" (ignora maiúsculas/minúsculas)
                if (textoFalta === "sim" || textoFalta === "s") {
                    faltas += 2;
                    
                    let identificador = textoAula || textoAtividade || "Sem descrição";
                    listaFaltas.push([identificador, textoData]);
                }
            }
        }
    }
}

// --- Exibição ---

dv.table(
    ["Resumo", "Quantidade"],
    [
        [`**Aulas** de ${nomeMateria}`, `**${totalAulas}**`],
        [`**Faltas** de ${nomeMateria}`, `**${faltas}**`]
    ]
);

let presenciaPercentual = totalAulas > 0 ? ((totalAulas - faltas) / totalAulas) * 100 : 0;

dv.paragraph(`Porcentagem de Presença: ${presenciaPercentual.toFixed(2)}%`);
```

# :LiNotebook: **Anotações** | Estrutura de Dados - 02

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44A - Estrutura de Dados - 02/Anotações'));

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

# :LiPieChart: **Avaliações** | Estrutura de Dados - 02

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44A - Estrutura de Dados - 02/Avaliações'));

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

