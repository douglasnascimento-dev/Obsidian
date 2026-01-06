---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Gabriel Canhadas
Nota Final: "10.0"
Início: 2024-10-02
Fim: 2025-02-28
Avaliações:
  - "[[ES42B - Avaliação do Projeto Final]]"
Anotações:
  - "[[ES42B - Ponteiros e Passagem por Referência]]"
Atividades:
  - "[[ES42B - Projeto Final]]"
  - "[[ES42B - Atividade 01]]"
Carga Horária: 60h
---

![[Algoritimos 02.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Algoritimos - 02

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42B - Algoritimos - 02/Atividades'));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

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

```

### 🔷**Registro de Aulas** | Algoritimos - 02

| Aula                                                                                                                                              |         Atividade         | Data de Realização |
| :------------------------------------------------------------------------------------------------------------------------------------------------ | :-----------------------: | :----------------: |
| Apresentação a Matéria e Introdução de  [[ES42B - Ponteiros e Passagem por Referência\|Ponteiros e Passagem por Referência]]                      |             X             |     02/10/2024     |
| Continuação de [[ES42B - Ponteiros e Passagem por Referência\|Ponteiros e Passagem por Referência]] e realização de exercício em sala             |          Em sala          |     03/10/2024     |
| Continuação de [[ES42B - Ponteiros e Passagem por Referência\|Ponteiros e Passagem por Referência]] e realização de exercício em sala             |          Em sala          |     09/10/2024     |
| Continuação de [[ES42B - Ponteiros e Passagem por Referência\|Ponteiros e Passagem por Referência]] e realização de exercício em sala             |          Em sala          |     10/10/2024     |
| **Não Presente** \| Continuação de [[ES42B - Ponteiros e Passagem por Referência\|Ponteiros e Passagem por Referência]] e realização de exercício | [[ES42B - Atividade 01]]  |     16/10/2024     |
| Continuação de [[ES42B - Ponteiros e Passagem por Referência\|Ponteiros e Passagem por Referência]] e finalização de exercício anterior           |             X             |     17/10/2024     |
| *Realização da SECOMP*                                                                                                                            |             X             |     23/10/2024     |
| *Realização da SECOMP*                                                                                                                            |             X             |     24/10/2024     |
| Introdução de Struct e Vetores                                                                                                                    |             X             |     30/10/2024     |
| Continuação de Struct e Vetores e realização de exercício em sala                                                                                 |          Em sala          |     31/10/2024     |
| Continuação de Struct e Vetores e realização de exercício em sala                                                                                 |          Em sala          |     06/11/2024     |
| *Não Realizada*                                                                                                                                   |             X             |     07/11/2024     |
| Introdução á ES42B - Alocação Dinâmica de Memória                                                                                                 |          Em sala          |     13/11/2024     |
| **Não Presente** \| Continuação de ES42B - Alocação Dinâmica de Memória                                                                           |             X             |     14/11/2024     |
| *Recesso: Dia da Consciência Negra*                                                                                                               |             X             |     20/11/2024     |
| Explicação sobre o [[ES42B - Projeto Final]]                                                                                                      | [[ES42B - Projeto Final]] |     21/11/2024     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     27/11/2024     |
| Dedicada ao [[ES42B - Projeto Final]]                                                                                                             | [[ES42B - Projeto Final]] |     28/11/2024     |
| Dedicada ao [[ES42B - Projeto Final]]                                                                                                             | [[ES42B - Projeto Final]] |     04/12/2024     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     05/12/2024     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     11/12/2024     |
| *Não Realizada*                                                                                                                                   | [[ES42B - Projeto Final]] |     12/12/2024     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     18/12/2024     |
| *Não Realizada*                                                                                                                                   | [[ES42B - Projeto Final]] |     19/12/2024     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     05/02/2025     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     06/02/2025     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     12/02/2025     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     13/02/2025     |
| *Não Realizada*                                                                                                                                   | [[ES42B - Projeto Final]] |     19/02/2025     |
| **Não Presente** \| Dedicada ao [[ES42B - Projeto Final]]                                                                                         | [[ES42B - Projeto Final]] |     20/02/2025     |
## 💙 **Anotações** | Algoritimos - 02

```page-gallery
fields: [file.name, file.frontmatter.Conteúdo]
columns: 3
filter: false
count: false
views:
  - name: 
    from: '("Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42B - Algoritimos - 02/Anotações")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Anotação"'
```

## 💙 **Avaliações** | Algoritimos - 02

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual = 0;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42B - Algoritimos - 02/Avaliações'));

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
tabelaDados.push(["**Média Final**", `**${mediaFinal.toFixed(1)}**`, ""]);

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

