---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: 
Carga Horária: 
Nota Final: "0.0"
Início: ""
Fim: ""
Avaliações: 
Anotações: 
Atividades: 
---

![[Banco de Dados.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Banco de Dados 

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

### 🔷 **Registro de Aulas** | Banco de Dados 

| Aula                                                     |     Atividade     | Falta | Data de Realização |
| :------------------------------------------------------- | :---------------: | :---: | :----------------: |
| Apresentação a Matéria e Apresentação da Ementa do Curso | [[ES42E - EF 01]] |  Sim  |     01/10/2024     |
| *Realização da Feira de Profissões*                      |         X         |  --   |     07/10/2024     |

### 🔷Rastreamento de Presença | Banco de Dados

```dataviewjs
let editor = app.workspace.getLeaf().view.editor;
let conteudoArquivo = editor.getRange({ line: 0, ch: 0 }, { line: editor.lineCount() - 1, ch: 0 });
let linhas = conteudoArquivo.split('\n');

let faltas = 0;
let totalAulas = 0;
let materias = [];

// Encontrar o início da tabela
let dentroDaTabela = false;

// Nome da matéria extraído do título do arquivo
let nomeMateria = app.workspace.getActiveFile().name.replace(".md", "");

for (let linha of linhas) {
    linha = linha.trim();
    
    if (linha.startsWith("| Aula ")) {
        dentroDaTabela = true;
        continue;
    }
    
    if (dentroDaTabela && linha.startsWith("|")) {
        let colunas = linha.split("|").map(c => c.trim());
        
        // Certificar-se de que a linha tem pelo menos 4 colunas
        if (colunas.length >= 4) {
            let falta = colunas[3].toLowerCase();
            
            // Verifica se a falta está marcada como 'Sim' ou 'X'
            let temFalta = falta === 'sim';
            
            totalAulas += 2; // Cada linha de atividade representa 2 aulas
            if (temFalta) {
                faltas += 2; // Contabiliza como uma falta para cada linha
            }
        }
    }
}

totalAulas -= 2
dv.table( ["Relação Aulas / Faltas", "Quantidade"], [ [`**Aulas** de ${nomeMateria}`, `**${totalAulas}**`], [`**Faltas** de ${nomeMateria}`, `**${faltas}**`] ] );

// Cálculo da porcentagem de presença
let presenciaPercentual = ((totalAulas - faltas) / totalAulas) * 100;
dv.paragraph(`Porcentagem de Presença: **${presenciaPercentual.toFixed(2)}%**`);

```
## 💙 **Anotações** | Banco de dados

``` page-gallery
fields: [file.name, file.frontmatter.Conteúdo]
columns: 3
filter: false
count: false
views:
  - name: 
    from: '("Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42E - Banco de Dados/Anotações")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Anotação"'
```

## 💙 **Avaliações** | Banco de Dados
```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual;

let caminhoArquivoAtual = dv.current().file.path;
let diretorioBase = caminhoArquivoAtual.split("/").slice(0, -1).join("/");
let caminhoAvaliações = `${diretorioBase}/Avaliações`;

let pages = dv.pages()
    .where(p => p.file.path.includes(caminhoAvaliações));

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

