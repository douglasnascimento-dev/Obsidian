---
Tipo: Módulo
Descrição: Nesse módulo será apresentado o conceito de programação orientada a objetos em JS, utilizando como base o conhecimento adquirido durante o módulo de funções
Conteúdo: "'Class' | 'Constructor' | 'Super'"
Status: true
Início: 2025-02-01
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Fim: 2025-02-12
Anotações:
  - "[[JS & TS - 07.01 - Classes em JS]]"
  - "[[JS & TS - 07.02 - Herança e Métodos Estáticos com Classes]]"
Atividades:
  - "[[JS & TS - AC. 07.01.01 - ATV. Classes em JS]]"
  - "[[JS & TS - AC. 07.02.01 - ATV. Herança e Métodos Estáticos]]"
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌳
## 💙**Atividades** | JS & TS - POO

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/Cursos/JS & TS/JS & TS - Módulos/07 - JavaScript POO/Atividades'));

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

### 🔷**Registro de Aulas** | JS & TS - POO

| <p style="text-align: center">Título - Aula</p> | <p style="text-align: center">Status - Aula</p> | <p style="text-align: center">Último Minuto</p> |
| :---------------------------------------------- | :---------------------------------------------: | :---------------------------------------------: |
| 🔹102 - Criando Classes                         |                    Concluído                    |                    -- \| --                     |
| 🔹103 - Getters e Setters                       |                    Concluído                    |                    -- \| --                     |
| 🔹104 - Herança com Classes                     |                    Concluído                    |                    -- \| --                     |
| 🔹105 - Métodos de Instância e Estáticos        |                    Concluído                    |                    -- \| --                     |
| 🔹106 - EX. Validando um CPF \| Usando Classes  |                    Concluído                    |                    -- \| --                     |
| 🔹107 - EX. Validando um Formulário             |                    Concluído                    |                    -- \| --                     |


## 💙**Anotações** | JS & TS - POO

### [[JS & TS - 07.01 - Classes em JS]]

Durante essas notas é introduzido a utilização de classes, deixando o uso de 'factory functions' e funções construtoras e passando utilizar métodos voltados para a Programação Orientada a Objetos

### [[JS & TS - 07.02 - Herança e Métodos Estáticos com Classes]]

Durante essas notas é aprofundado os conceitos de classes, apresenta a herança em POO e também os métodos estáticos, métodos que são acoplados diretamente na classe construtora e não nos objetos instanciados.

