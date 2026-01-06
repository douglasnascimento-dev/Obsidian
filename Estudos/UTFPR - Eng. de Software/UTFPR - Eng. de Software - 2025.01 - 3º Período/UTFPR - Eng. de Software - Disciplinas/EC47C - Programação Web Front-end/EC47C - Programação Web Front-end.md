---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Rosângela De Fatima Pereira Marquesone
Carga Horária: 60h
Nota Final: "9.1"
Início: 2025-03-25
Fim: 2025-06-23
Avaliações:
  - "[[EC47C - Projeto Parcial]]"
  - "[[EC47C - Projeto Final]]"
---

![[Programação Web Front-end.png|banner]]
> [!banner-icon] :LiBookMarked: EC47C
# :LiClipboard: **Atividades** | Programação Web Front-end 

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.01 - 3º Período/UTFPR - Eng. de Software - Disciplinas/EC47C - Programação Web Front-end/Atividades'));

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

## :LiCalendarCheck2: **Registro de Aulas** | Programação Web Front-end 

| Aula                                                               |                             Atividade                              | Data de Realização |
| :----------------------------------------------------------------- | :----------------------------------------------------------------: | :----------------: |
| Introdução ao HTML                                                 |                                 X                                  |        EaD         |
| HTML Semântico                                                     |            [[EC47C - Atv. Prática 01\|Arv. Prática 01]]            |        EaD         |
| Imagens e Formulários                                              |            [[EC47C - Atv. Prática 02\|Atv. Prática 02]]            |        EaD         |
| Sem conteúdo prográmatico                                          |                                 X                                  |        EaD         |
| Introdução ao CSS                                                  |            [[EC47C - Atv. Prática 03\|Atv. Prática 03]]            |        EaD         |
| FlexBox em CSS                                                     |                                 X                                  |        EaD         |
| Layouts Responsivos                                                |                                 X                                  |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] | [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] | [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Parcial]] |        EaD         |
| Introdução ao JavaScript                                           |                                 X                                  |        EaD         |
| Manipulação do DOM com JS                                          |                                 X                                  |        EaD         |
| Integração com o LocalStorage                                      |            [[EC47C - Atv. Prática 04\|Arv. Prática 04]]            |        EaD         |
| [[EC47C - Entrega do Projeto Parcial\|Entrega do Projeto Final]]   |   [[EC47C - Entrega do Projeto Final\|Entrega do Projeto Final]]   |        EaD         |
### :LiCalendarRange: Rastreamento de Presença | Redes de Computadores

:LiCheckCheck: Disciplina em regime **EaD**, sem necessidade de presença.

# :LiNotebook: **Anotações** | Redes de Computadores
```dataviewjs
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
# :LiChartPie: **Avaliações** | Programação Web Front-end

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.01 - 3º Período/UTFPR - Eng. de Software - Disciplinas/EC47C - Programação Web Front-end/Avaliações'));

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

