---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Adriane Carla Anastácio
Carga Horária: "90"
Início: 2024-03-04
Fim: 2025-07-01
Avaliações:
  - "[[ES41A - Avaliação 01]]"
  - "[[ES41A - Avaliação 02]]"
  - "[[ES41A - Avaliação 03]]"
  - "[[ES41A - Avaliação 04]]"
  - "[[ES41A - Avaliação 05]]"
Anotações:
  - "[[ES41A - Registro]]"
  - "[[ES41A - Vetor e Matriz]]"
Atividades:
  - "[[ES41A - Lista de Ex. 18]]"
  - "[[ES41A - Lista de Ex. 19]]"
  - "[[ES41A - Lista de Ex. 20]]"
  - "[[ES41A - Lista de Ex. 21]]"
  - "[[ES41A - Lista de Ex. 22]]"
  - "[[ES41A - Lista de Ex. 23]]"
  - "[[ES41A - Lista de Ex. 24]]"
  - "[[ES41A - Lista de Ex. 25]]"
Nota Final: "9.8"
---
![[Algoritimos - 01.png|banner]]
> [!banner-icon] 🌳


## 💙**Atividades** | Algoritimos 01

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.01 - 1º Período/UTFPR - Eng. de Software - Disciplinas/ES41A - Algoritimos 01/Atividades'));

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

### 🔷 **Registro de Aulas** | Algoritimos 01

🔹 Durante a realização dessa disciplina não houve o 'Registo de Aulas'

## 💙**Anotações** | Algoritimos 01

🔹Durante a realização dessa disciplina não houve 'Anotações'

## 💙**Avaliações** | Algoritimos 01

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.01 - 1º Período/UTFPR - Eng. de Software - Matérias - 1º Período/ES41A - Algoritimos 01/Avaliações'));

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
    return [`${p.file.name} | ${p.Referência === null ? " " : p.Referência }`, p.Nota, p.Peso];
});

// Calcule a média final, considerando apenas as notas definidas
let mediaFinal = totalPeso ? totalNotaComPeso / totalPeso : 0;

// Adicione a média final como a última linha da tabela
tabelaDados.push(["**Média Final**", `**${mediaFinal.toFixed(2)}**`, ""]);

// Exiba a tabela com as notas e a média final
dv.table(
    ["Avaliação", "Nota", "Peso"], 
    tabelaDados
);
```

