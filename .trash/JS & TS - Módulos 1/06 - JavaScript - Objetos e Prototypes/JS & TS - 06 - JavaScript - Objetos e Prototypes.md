---
Tipo: Módulo
Descrição: Nesse módulo será aprofundado o conceito de funções construtoras e funções fábrica, além de apresentar o conceito de prototype. Esse módulo pretende criar uma sólida base para o conteúdo de POO no módulo seguinte
Conteúdo: "'Prototype' | 'Constructor Function' | 'Factory Function'"
Status: true
Início: 2024-12-02
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Fim: 2025-01-30
Anotações:
  - "[[JS & TS - 06.01 - Objetos em JS]]"
  - "[[JS & TS - 06.02 - Object.defineProperty e Object.defineProperties em JS]]"
  - "[[JS & TS - 06.03 - Métodos Úteis em JS]]"
  - "[[JS & TS - 06.04 - Prototypes]]"
  - "[[JS & TS - 06.05 - Herança em JS]]"
  - "[[JS & TS - 06.07 - Factory Function + Prototypes e 'new Map']]"
Atividades:
  - "[[JS & TS - AC. 06.01.01 - Objetos em JS]]"
  - "[[JS & TS - AC. 06.02.01 - Object.defineProperty e Object.defineProperties em JS]]"
  - "[[JS & TS - AC. 06.03.01 - Métodos Úteis em JS]]"
  - "[[JS & TS - AC. 06.03.02 - Métodos úteis em JS]]"
  - "[[JS & TS - AC. 06.04.01 - Prototypes]]"
  - "[[JS & TS - AC. 06.05.01 - Herança em JS]]"
---

![[JS - Objetos e Prototypes.jpg|banner]]
> [!banner-icon] 🌳
## 💙**Atividades** | JS & TS - Objetos e Prototypes

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/Cursos/JS & TS/JS & TS - Módulos/06 - JavaScript - Objetos e Prototypes/Atividades'));

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

### 🔷**Registro de Aulas** | JS & TS - Objetos e Prototypes

| <p style="text-align: center">Título - Aula</p>            | <p style="text-align: center">Status - Aula</p> | <p style="text-align: center">Último Minuto</p> |
| :--------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------: |
| 🔹89 - Revisando Objetos                                   |                    Concluído                    |                    -- \| --                     |
| 🔹90 - Object.defineProperty() e Object.defineProperties() |                    Concluído                    |                    -- \| --                     |
| 🔹91 - Getters e Setters                                   |                    Concluído                    |                    -- \| --                     |
| 🔹92 - Métodos Úteis para Objetos                          |                    Concluído                    |                    -- \| --                     |
| 🔹93 - Prototypes                                          |                    Concluído                    |                    -- \| --                     |
| 🔹94 - Manipulando Prototypes                              |                    Concluído                    |                    -- \| --                     |
| 🔹95 - Herança                                             |                    Concluído                    |                    -- \| --                     |
| 🔹96 - Herança?                                            |                    Concluído                    |                    -- \| --                     |
| 🔹97 - EX. Validando um CPF                                |                    Concluído                    |                    -- \| --                     |
| 🔹98 - EX. Validando um CPF \| Resolução                   |                    Concluído                    |                    -- \| --                     |
| 🔹99 - Polimorfismo                                        |                    Concluído                    |                    -- \| --                     |
| 🔹100 - Factory Functions                                  |                    Concluído                    |                    -- \| --                     |
| 🔹101 - Objeto Map()                                       |                    Concluído                    |                    -- \| --                     |

## 💙**Anotações** | JS & TS - Objetos e Prototypes

### [[JS & TS - 06.01 - Objetos em JS]]

Durante essas notas é aprofundado conceitos de objetos, desde de métodos básicos á criação dinâmica de objetos, utilizando 'factory functions' e funções construtoras.

### [[JS & TS - 06.02 - Object.defineProperty e Object.defineProperties em JS]]

Durante essas notas é introduzido os métodos 'Object.defineProperty()', para modificação de uma única propriedade e o método 'Object.defineProperties()' para mais de uma propriedade.

### [[JS & TS - 06.03 - Métodos Úteis em JS]]

Durante essas notas é apresentado diversos métodos úteis para a manipulação de objetos, como o spread (...) e demais métodos que auxiliam a utilização de objetos.

### [[JS & TS - 06.04 - Prototypes]]

Durante essas notas é introduzido a utilização de 'prototypes', um local que todas os métodos criados por uma função construtora compartilhas e facilitam o compartilhamento de métodos e diminui a utilização de memória e armazenamento.

### [[JS & TS - 06.05 - Herança em JS]]

Durante essas notas é apresentado o conceito de herança em JS. Isso é, a passagem de atributos e métodos de um objeto pai para especializações (objetos filhos).

### [[JS & TS - 06.06 - Polimorfismo em JS]]

Durante essas notas é aprofundando o conceito de polimorfismo, e também de exemplos práticos da utilização de especializações, tanto como atributos quanto com métodos.

### [[JS & TS - 06.07 - Factory Function + Prototypes e 'new Map']]

Durante essas notas é introduzido o processo de utilização conjunto de 'factory functions' e prototypes, além de apresentar o uso de 'new Map'