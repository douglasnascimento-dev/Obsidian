---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Josieli Soares
Carga Horária: "30"
Início: 2024-10-01
Fim: 2025-02-28
Avaliações:
  - "[[EC47E - Avaliação 01]]"
  - "[[EC47E - Avaliação 02]]"
  - "[[EC47E - Avaliação 03]]"
  - "[[EC47E - Avaliação 04]]"
  - "[[EC47E - Avaliação 05]]"
  - "[[EC47E - Avaliação 06]]"
  - "[[EC47E - Avaliação 07]]"
Anotações:
Atividades:
  - "[[EC47E - Ex. 01]]"
  - "[[EC47E - Ex. 02]]"
  - "[[EC47E - Ex. 03]]"
  - "[[EC47E - Ex. 04]]"
  - "[[EC47E - Ex. 05]]"
Nota Final: "9.5"
---

![[Empreendedorismo.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Empreendedorismo

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/EC47E - Empreendedorismo/Atividades'));

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

### 🔷 **Registro de Aulas** | Empreendedorismo

| Aula                                                                                        |     Atividade      | Data de Realização |
| :------------------------------------------------------------------------------------------ | :----------------: | :----------------: |
| Definição de Conceitos de Empreendedorismo                                                  | [[EC47E - Ex. 01]] |        EaD         |
| Apresentação a Metodológia das Aulas e Formas de Avaliação                                  |         X          |        EaD         |
| Oportunidades e Tendências de Negócio                                                       | [[EC47E - Ex. 02]] |        EaD         |
| Inovação e Criatividade                                                                     | [[EC47E - Ex. 03]] |        EaD         |
| Quadro de Modelo de Negócios                                                                | [[EC47E - Ex. 04]] |        EaD         |
| Introdução ao Plano de Negócios                                                             | [[EC47E - Ex. 05]] |        EaD         |
| Elaboração do Plano de Negócio: Plano de Marketing, Plano Operacional e do Plano Financeiro |         X          |        Ead         |
| Elaboração do Plano de Negócio: Sumário Executivo e Avaliação do Plano                      |         X          |        Ead         |
| Conceito de Pitch                                                                           |         X          |        Ead         |
| Finalização do Plano de Negócio e Elaboração da apresentação no estilo Pitch                |         X          |        EaD         |
| Entrega do Plano de Negócio escrito e da apresentação                                       |         X          |        EaD         |
| Entrega das Avaliações dos planos de negócios pelas demais equipes                          | [[EC47E - Ex. 06]] |        EaD         |
| Feedback dos Planos de Negócios                                                             |         X          |        EaD         |
| Avaliação da Disciplina                                                                     |         X          |        EaD         |
| Desenvolvimento de Atividade de Recuperação                                                 |         X          |        EaD         |
| Desenvolvimento de Atividade de Recuperação                                                 |         X          |        EaD         |
## 💙 **Anotações** | Empreendedorismo

🔹Durante a realização dessa disciplina não houve 'Anotações'

## 💙 **Avaliações** | Empreendedorismo

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual = 0;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/EC47E - Empreendedorismo/Avaliações'));

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

