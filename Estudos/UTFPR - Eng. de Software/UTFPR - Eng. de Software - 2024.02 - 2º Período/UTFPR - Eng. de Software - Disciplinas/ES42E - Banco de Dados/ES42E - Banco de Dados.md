---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Giovani Volnei
Carga Horária: "90"
Início: 2024-10-01
Fim: 2025-02-28
Avaliações:
  - "[[ES42E - Avaliação 01|ES42E - Avaliação 01]]"
  - "[[ES42E - Avaliação 02|ES42E - Avaliação 02]]"
Anotações:
  - "[[01 - Modelo Entidade-Relacionamento]]"
  - "[[02 - Modelo Relacional]]"
  - "[[03 - Normalização]]"
  - "[[04 - SQL]]"
Atividades:
  - "[[ES42E - EF 01]]"
  - "[[ES42E - EF 02]]"
  - "[[ES42E - EF 03]]"
  - "[[ES42E - EF 04]]"
  - "[[ES42E - EF 05]]"
  - "[[ES42E - EF 06]]"
  - "[[ES42E - EF 07]]"
  - "[[ES42E - EF 08]]"
  - "[[ES42E - EF 09]]"
  - "[[ES42E - EF 10]]"
  - "[[ES42E - EF 11]]"
  - "[[ES42E - EF 12]]"
  - "[[ES42E - EF 13]]"
  - "[[ES42E - EF 14]]"
  - "[[ES42E - EF 15]]"
Nota Final: "9.3"
---

![[Banco de Dados.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Banco de Dados 

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42E - Banco de Dados/Atividades'));

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

### 🔷 **Registro de Aulas** | Banco de Dados 

| Aula                                                                            |               Atividade                | Data de Realização |
| :------------------------------------------------------------------------------ | :------------------------------------: | :----------------: |
| Apresentação a Matéria e Apresentação da Ementa do Curso                        |           [[ES42E - EF 01]]            |     01/10/2024     |
| *Realização da Feira de Profissões*                                             |                   X                    |     07/10/2024     |
| *Realização da Feira de Profissões*                                             |                   X                    |     08/10/2024     |
| Introdução á [[01 - Modelo Entidade-Relacionamento]], com Atributos e Entidades |           [[ES42E - EF 02]]            |     14/10/2024     |
| Aprofundamento á [[01 - Modelo Entidade-Relacionamento]], com Relacionamentos   |           [[ES42E - EF 03]]            |     15/10/2024     |
| *Realização da SECOMP*                                                          |                   X                    |     21/10/2024     |
| *Realização da SECOMP*                                                          |                   X                    |     22/10/2024     |
| *Recesso: Dia do Servidor Público*                                              |                   X                    |     28/10/2024     |
| Finalização á [[01 - Modelo Entidade-Relacionamento]]                           |                   X                    |     29/10/2024     |
| Introdução á [[02 - Modelo Relacional]]                                         |                   X                    |     04/11/2024     |
| Aprofundamento á [[02 - Modelo Relacional]]                                     |           [[ES42E - EF 04]]            |     05/11/2024     |
| Finalização á [[02 - Modelo Relacional]]                                        |           [[ES42E - EF 05]]            |     11/11/2024     |
| Explicação sobre [[03 - Normalização]]                                          |           [[ES42E - EF 06]]            |     12/11/2024     |
| Introdução á [[04 - SQL]]                                                       |           [[ES42E - EF 07]]            |     18/11/2024     |
| Aprofundamento á [[04 - SQL]]                                                   |           [[ES42E - EF 08]]            |     19/11/2024     |
| Aprofundamento á [[04 - SQL]]                                                   |           [[ES42E - EF 09]]            |     25/11/2024     |
| **Avaliação** \| Aplicação da [[ES42E - Avaliação 01]]                          |                   X                    |     26/11/2024     |
| Aprofundamento á [[04 - SQL]]                                                   |           [[ES42E - EF 10]]            |     02/12/2024     |
| Aprofundamento á [[04 - SQL]]                                                   | [[ES42E - EF 11]] \| [[ES42E - EF 12]] |     03/12/2024     |
| Aprofundamento á [[04 - SQL]]                                                   |           [[ES42E - EF 13]]            |     09/12/2024     |
| Aprofundamento á [[04 - SQL]]                                                   |           [[ES42E - EF 14]]            |     10/12/2024     |
| Aprofundamento á [[04 - SQL]]                                                   |                   X                    |     16/12/2024     |
| Finalização á [[04 - SQL]]                                                      |           [[ES42E - EF 15]]            |     17/12/2024     |
| **Sem Necessidade de Presença** \| Reaplicação da [[ES42E - Avaliação 01]]      |                   X                    |     03/02/2025     |
| **Avaliação** \| Aplicação da [[ES42E - Avaliação 02]]                          |                   X                    |     04/02/2025     |
| **Sem Necessidade de Presença** \| Vista da [[ES42E - Avaliação 02]]            |                   X                    |     10/02/2025     |
| **Sem Necessidade de Presença** \| Reaplicação da [[ES42E - Avaliação 02]]      |                   X                    |     11/02/2025     |
| **Sem Necessidade de Presença** \| Aplicação da Prova de Recuperação            |                   X                    |     17/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                    |                   X                    |     18/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                    |                   X                    |     24/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina                    |                   X                    |     25/02/2025     |

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
let notaManual = 9.3;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42E - Banco de Dados/Avaliações'));

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