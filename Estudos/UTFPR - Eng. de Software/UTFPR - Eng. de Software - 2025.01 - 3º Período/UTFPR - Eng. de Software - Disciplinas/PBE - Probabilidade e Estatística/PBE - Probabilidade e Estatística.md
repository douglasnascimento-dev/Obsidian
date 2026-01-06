---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Emilio Augusto Coelho Barros
Carga Horária: 60h
Nota Final: 9.1
Início: 2025-03-26
Fim: ""
Avaliações:
  - "[[PBE - Avaliação 01]]"
  - "[[PBE - Avaliação 02]]"
  - "[[PBE - Avaliação 03]]"
  - "[[PBE - Média das Tarefas]]"
  - "[[PBE - Médias dos Questionários]]"
---

![[Probabilidade e Estatística.png|banner]]
> [!banner-icon] :LiBookMarked: PBE
# :LiClipboard: **Atividades** | Probabilidade e Estatística

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha o caminho do arquivo atual
let caminhoArquivoAtual = dv.current().file.path;

// Extraia o diretório base do curso (assumindo que os arquivos estão organizados em subpastas dentro da disciplina)
let diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");

// Caminho dinâmico para atividades dentro da disciplina atual
let caminhoAtividades = `${diretorioBase}/Atividades`;

// Obtenha todas as notas dentro do diretório especificado dinamicamente
let pages = dv.pages()
    .where(p => p.file.path.includes(caminhoAtividades));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph("🔹Durante a realização dessa disciplina não houve 'Atividades'.");
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
            dv.fileLink(p.file.path), // Link dinâmico para o arquivo
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

## :LiCalendarCheck2: **Registro de Aulas** | Probabilidade e Estatística

| Aula                                                                                                                                                                                                                                                                                 |                                        Atividade                                         | Falta | Data de Realização |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------: | :---: | :----------------: |
| Apresentação da Ementa da Disciplina e a [[PBE - Aula 01 - 26.03.25 - Importância da Estatística\| Importância da Estatística]]                                                                                                                                                      |                        [[PBE - Questionário 01\|Questionário 01]]                        |   X   |     26/03/2025     |
| :LiSquareX: *Sem Necessidade de Presença* \| [[PBE - Aula 02  - 28.03.25 - Introdução ao Software R\|Introdução ao Software R]]                                                                                                                                                      |                        [[PBE - Questionário 02\|Questionário 02]]                        |   X   |     28/03/2025     |
| [[PBE - Aula 03 - 02.04.25 - Estatística Descritiva\| Estatística Descritiva - Medidas de Posição ou Tendência Central]] \| Realização da [[PBE - Tarefa 01\|Tarefa 01]]                                                                                                             |                        [[PBE - Questionário 03\|Questionário 03]]                        |   X   |     02/04/2025     |
| [[PBE - Aula 04 - 04.04.25 - Medidas de Dispersão\|Estatística Descritiva - Medidas de Dispersão]] \| Realização da [[PBE - Tarefa 02\|Tarefa 02]]                                                                                                                                   |                        [[PBE - Questionário 04\|Questionário 04]]                        |   X   |     04/04/2025     |
| [[PBE - Aula 05 - 09.04.25 - Tabelas de Frequência\|Tabelas de Frequência]] \| Realização da [[PBE - Tarefa 03\|Tarefa 03]]                                                                                                                                                            |                        [[PBE - Questionário 05\|Questionário 05]]                        |   X   |     09/04/2025     |
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
## :LiCalendarRange: Rastreamento de Presença | Probabilidade e Estatística

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
# :LiBook: **Anotações** | Probabilidade e Estatística

``` dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let caminhoArquivoAtual = dv.current().file.path;
let diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");

// Caminho dinâmico para atividades dentro da disciplina atual
let caminhoAtividades = `${diretorioBase}/Anotações`;
// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes(caminhoAtividades));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph("   :LiCheckCheck: Durante a realização dessa disciplina não houve 'Anotações'.");
} else {

    let dataAtual = new Date();
    let tabelaDados = sortedPagesArray.map(p => {
        return [
            `**${p.file.link}**`,
        ];
    });
    // Exibir a tabela
    dv.table(
        ["Anotações"], 
        tabelaDados
    );
}

```

# :LiChartPie: **Avaliações** | Probabilidade e Estatística

```dataviewjs
// --- CONFIGURAÇÃO ---
const caminhoArquivoAtual = dv.current().file.path;
const diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");
const caminhoAvaliações = `${diretorioBase}/Avaliações`;

// --- BUSCA E CÁLCULO DAS NOTAS ---
const pages = dv.pages(`"${caminhoAvaliações}"`);

let mediaFinalBruta = 0; // Nota em escala 0-100
const tabelaDados = []; 

// Itera sobre as páginas para popular a tabela e calcular a média
pages
    .sort(p => p.file.name)
    .forEach(p => { 
        const nota = p.Nota ?? 0;
        const peso = p.Peso ?? 0;
        
        mediaFinalBruta += nota * peso;
        
        tabelaDados.push([
            `[[${p.file.name}]]`, 
            nota, 
            peso.toFixed(2)
        ]);
    });

// --- AJUSTE DE ESCALA E FINALIZAÇÃO DA TABELA ---
// Converte a nota final da escala 0-100 para a escala 0-10
const mediaFinalEscala10 = mediaFinalBruta / 10;

// Adiciona a linha de resultado na tabela JÁ com a nota na escala correta
tabelaDados.push(["**Média Final**", `**${mediaFinalEscala10.toFixed(1)}0**`, "-"]);

// --- EXIBIÇÃO E ATUALIZAÇÃO ---
dv.table(
    ["Avaliação", "Nota", "Peso"],
    tabelaDados
);

// Atualiza o campo 'Nota Final' no frontmatter com o valor correto
const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Nota Final"] = parseFloat(mediaFinalEscala10.toFixed(1));
    });
}
```
