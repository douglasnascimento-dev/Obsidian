---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Jader Maikol | Luciano Rovanni
Carga Horária: "60"
Início: 2024-10-02
Fim: 2025-02-28
Avaliações:
  - "[[ES42D - Avaliação 01]]"
  - "[[ES42D - Avaliação 02]]"
  - "[[ES42D - Avaliação 03]]"
  - "[[ES42D - Atividades]]"
Anotações:
Atividades:
  - "[[ES42D - T1]]"
  - "[[ES42D - T2]]"
Nota Final: "10.0"
---

![[Sistemas Operacionais.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Sistemas Operacionais

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42D - Sistemas Operacionais/Atividades'));

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

### 🔷**Registro de Aulas** | Sistemas Operacionais

| Aula                                                                                  |   Atividade    | Data de Realização |
| :------------------------------------------------------------------------------------ | :------------: | :----------------: |
| Apresentação a Matéria e a Ementa do Curso                                            |       X        |     02/10/2024     |
| Introdução a 🌿*Definições de Sistemas Operacionais*                                  |       X        |     04/10/2024     |
| Aprofundamento em 🌿 *Definições de Sistemas Operacionais*                            | [[ES42D - T1]] |     09/10/2024     |
| Introdução a 🌿*Concorrência e Processos de Sistemas Operacionais*                    |       X        |     11/10/2024     |
| *Realização da SNCT*                                                                  |       X        |     16/10/2024     |
| *Não realizada*                                                                       |       X        |     18/10/2024     |
| *Realização da SECOMP*                                                                |       X        |     23/10/2024     |
| **Reposição via Moodle** \| Introdução á 🌿*Fundamento de Linux*                      |       X        |        EaD         |
| Finalização á 🌿*Fundamento de Linux*                                                 |       X        |     30/10/2024     |
| Introdução sobre 🌿*Escalonamento e Threads*                                          |       X        |     01/11/2024     |
| Aprofundamento á 04 - 🌿*Escalonamento e Threads*                                     |       X        |     06/11/2024     |
| **Avaliação** \| [[ES42D - Avaliação 01]]                                             |       X        |     08/11/2024     |
| Aprofundamento á 🌿*Escalonamento e Threads*                                          | [[ES42D - T2]] |     13/11/2024     |
| *Recesso: Dia da Independência do Brasil*                                             |       X        |     15/11/2024     |
| **Troca de Professor** \| Apresentação e Introdução com um novo professor - *Luciano* |       X        |     22/11/2024     |
| **Não Presente** \| 🌿*DeadLock*                                                      |       X        |     27/11/2024     |
| 🌿*Gerenciamento de Processos*                                                        |       X        |     29/11/2024     |
| **Não Presente** \| 🌿*Gerenciamento de Processos*                                    |       X        |     04/12/2024     |
| Revisão \| [[ES42D - Avaliação 02]]                                                   |       X        |     06/12/2024     |
| **Avaliação** \| [[ES42D - Avaliação 02]]                                             |       X        |     11/12/2024     |
| 🌿*Segurança de Rede e Vírus*                                                         |       X        |     13/12/2024     |
| **EAD** \| Disponível para a Realização do Seminário                                  |       X        |     18/12/2024     |
| **EAD** \| Disponível para a Realização do Seminário                                  |       X        |     20/12/2024     |
| Apresentações do Seminários                                                           |       X        |     05/02/2025     |
| **Não Presente** \| Apresentações do Seminários                                       |       X        |     07/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                          |       X        |     12/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                          |       X        |     14/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                          |       X        |     19/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                          |       X        |     21/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                          |       X        |     26/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                          |       X        |     29/02/2025     |

## 💙 **Anotações** | Sistemas Operacionais

🔹Durante a realização dessa disciplina não houve 'Anotações'

## 💙 **Avaliações** | Sistemas Operacionais

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual = 0;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42D - Sistemas Operacionais/Avaliações'));

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

