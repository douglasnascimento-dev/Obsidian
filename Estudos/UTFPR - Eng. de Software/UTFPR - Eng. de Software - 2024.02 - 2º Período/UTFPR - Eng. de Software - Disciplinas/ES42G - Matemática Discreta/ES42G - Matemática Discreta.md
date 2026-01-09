---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Josimar da Silva
Carga Horária: "60"
Início: 2024-10-03
Fim: 2025-02-28
Avaliações:
  - "[[ES42G - Avaliação 01|ES42G - Avaliação 01]]"
  - "[[ES42G - Avaliação 02|ES42G - Avaliação 02]]"
  - "[[ES42G - Avaliação 03|ES42G - Avaliação 03]]"
  - "[[ES42G - Média Geral]]"
Anotações:
Atividades:
  - "[[ES42G - Atividade de Fixação 01]]"
  - "[[ES42G - Atividade de Fixação 02]]"
  - "[[ES42G - Atividade de Fixação 03]]"
Nota Final: "7.7"
---

![[Matemática Discreta.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Matemática Discreta

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42G - Matemática Discreta/Atividades'));

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

### 🔷 **Registro de Aulas** | Matemática Discreta

| Aula                                                                             |              Atividade              | Data de Realização |
| :------------------------------------------------------------------------------- | :---------------------------------: | :----------------: |
| Apresentação a Matéria e a Ementa do Curso e Introdução á 01- Sentenças Lógicas  |                  X                  |     03/10/2024     |
| *Realização da Feira de Profrissões*                                             |                  X                  |     07/10/2024     |
| Finalização á 01 - Sentenças Lógicas                                             |                  X                  |     10/10/2024     |
| Introdução á 02 - Teoria de Conjuntos                                            |                  X                  |     14/10/2024     |
| Finalização á 02 -Teoria de Conjuntos                                            | [[ES42G - Atividade de Fixação 01]] |     17/10/2024     |
| *Realização da SECOMP*                                                           |                  X                  |     21/10/2024     |
| *Realização da SECOMP*                                                           |                  X                  |     24/10/2024     |
| *Recesso: Dia do Servirdor Público*                                              |                  X                  |     28/10/2024     |
| Explicação sobre Técnicas de Contagem                                            |                  X                  |     31/10/2024     |
| Introdução á Técnicas de Demostração                                             | [[ES42G - Atividade de Fixação 02]] |     04/11/2024     |
| Finalização e Resolução de Exercícios sobre Técnicas de Demonstração             |                  X                  |     07/11/2024     |
| Explicação sobre Primeiro Principio da Indução                                   |                  X                  |     11/11/2024     |
| **Não Presente** \| Revisão do Conteúdo da Avaliação                             |                  X                  |     14/11/2024     |
| **Avaliação** \| Aplicação da [[ES42G - Avaliação 01]]                           | [[ES42G - Atividade de Fixação 03]] |     18/11/2024     |
| Introdução á 03 -  Relações entre Conjuntos                                      |                  X                  |     21/11/2024     |
| Continuação á 03 -  Relações entre Conjuntos                                     |                  X                  |     25/11/2024     |
| Continuação á 03 -  Relações entre Conjuntos                                     |                  X                  |     28/11/2024     |
| **Não Presente** \| Continuação á 03 -  Relações entre Conjuntos                 |                  X                  |     02/12/2024     |
| **Não Presente** \| Resolução de Exercícios sobre 03 -  Relações entre Conjuntos | [[ES42G - Atividade de Fixação 04]] |     05/12/2024     |
| Introdução á 04 -  Funções                                                       |                  X                  |     09/12/2024     |
| **Não Presente** \| Finalização á 04 -  Funções                                  |                  X                  |     12/12/2024     |
| **Não Presente** \| Introdução á 05 -  Grafos                                    |                  X                  |     16/12/2024     |
| **Avaliação** \| Aplicação da [[ES42G - Avaliação 02]]                           |                  X                  |     19/12/2024     |
| **Não Presente** \| Continuação á 05 -  Grafos                                   | [[ES42G - Atividade de Fixação 05]] |     03/02/2025     |
| Continuação á 05 -  Grafos                                                       |                  X                  |     06/02/2025     |
| **Não Presente** \| Continuação á 🌿05 -  Grafos                                 |                  X                  |     10/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                     |                  X                  |     13/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                     |                  X                  |     17/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                     |                  X                  |     20/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                     |                  X                  |     24/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                     |                  X                  |     27/02/2025     |
## 💙**Anotações** | Matemática Discreta

🔹Durante a realização dessa disciplina não houve 'Anotações'

## 💙 **Avaliações** | Matemática Discreta

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual = 0;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42G - Matemática Discreta/Avaliações'));

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

