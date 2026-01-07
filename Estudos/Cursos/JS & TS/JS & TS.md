---
cssclasses:
  - banner
  - banner-fade
  - academia
  - wideTable
  - wideFC
Tipo: Curso
Ministrado: Udemy | Luiz Otávio Miranda
Início: 2024-07-13
Fim: ""
Status: false
Anotações:
  - "[[JS & TS - 01 - Configurando o Ambiente]]"
  - "[[JS & TS - 02 - JavaScript Básico]]"
  - "[[JS & TS - 03 - JavaScript - Lógica de Programação]]"
  - "[[JS & TS - 04 - JavaScript - Funções]]"
  - "[[JS & TS -  05 - JavaScript - Arrays]]"
  - "[[JS & TS - 06 - JavaScript - Objetos e Prototypes]]"
  - "[[JS & TS - 07 - JavaScript POO]]"
  - "[[JS & TS - 08 - JS Assíncrono]]"
  - "[[JS & TS - 09 - JS Toolings e Modules]]"
  - "[[JS & TS - 10 - Node, NPM, Express e MongoDB]]"
  - "[[JS & TS - 11 - Projeto Agenda]]"
  - "[[JS & TS - 12 - Deploy da Aplicação]]"
  - "[[JS & TS - 13 - API Rest]]"
  - "[[JS & TS - 14 - React - Básico]]"
  - "[[JS & TS - 15 - React - Redux Saga]]"
  - "[[JS & TS - 16 - React Router Dom v6]]"
---

![[JSTS.png|banner]]
> [!banner-icon] :LiServer: JavaScript & TypeScript
# :LiClipboard:**Atividades Pendentes** | JS & TS

```dataviewjs
let avaliacoes = dv.pages('"Estudos/Cursos/JS & TS/JS & TS - Módulos"')
    .where(p => p.file.frontmatter.Tipo === "Atividade" && p.file.frontmatter.Status == false);

if (avaliacoes.length > 0) {
    let tabelaDados = [];
    let dataAtual = new Date();

    // Array com os nomes dos meses em português
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    avaliacoes.forEach(avaliacao => {
        let dataFinal = new Date(avaliacao.file.frontmatter.Final);
        let disciplina = avaliacao.file.frontmatter.Disciplina;
        let conteudo = avaliacao.file.frontmatter.Conteúdo;
        let diferencaDias = (dataFinal - dataAtual) / (1000 * 60 * 60 * 24);

        // Formatar a data para "DD de Mês de YYYY"
        let dia = dataFinal.getDate();
        let mes = meses[dataFinal.getMonth()];
        let ano = dataFinal.getFullYear();
        let dataFormatada = `${dia} de ${mes} de ${ano}`;

        if (diferencaDias < 3) {
            dataFormatada = `<span style="color: var(--link-color);">**${dataFormatada}**</span>`;
        }

        tabelaDados.push([`${avaliacao.file.link} | ${conteudo}`, disciplina, dataFormatada, dataFinal]);
    });

    // Ordena a tabela com base na data limite real (índice 3 do array)
    tabelaDados.sort((a, b) => a[3] - b[3]);

    // Remove a coluna extra de ordenação antes de exibir
    tabelaDados = tabelaDados.map(row => row.slice(0, 3));

    dv.table(["Atividade", "Disciplina", "Data Limite"], tabelaDados);
} else {
    dv.span("🔹*Não há atividades pendentes*");
}


```

## **Módulos** | JS & TS

### [[JS & TS - 01 - Configurando o Ambiente]]
Durante esse módulo é apresentado os requisitos básicos para a programação em JavaScript, além de ferramentas a ser utilizadas

### [[JS & TS - 02 - JavaScript Básico]]
Durante esse módulo é apresentado os comandos inicias a serem utilizados em JavaScript. Além de suas primeiras utilidades.

### [[JS & TS - 03 - JavaScript - Lógica de Programação]]
Durante esse módulo é apresentado o conteúdo referente a utilização de lógica de programação em JavaScript.

### [[JS & TS - 04 - JavaScript - Funções]]
Durante esse módulo é apresentado as funções em JavaScript, além de suas estruturas diversas na linguagem de programação.

### [[JS & TS -  05 - JavaScript - Arrays]]
Durante esse módulo é apresentado o conteúdo referente a utilização de Arrays em JavaScript, além de métodos e comportamentos. 

### [[JS & TS - 06 - JavaScript - Objetos e Prototypes]]
Durante esse módulo é apresentado o conteúdo referente a objetos em JavaScript além da função de Prototypes.

### [[JS & TS - 07 - JavaScript POO]]
Durante esse módulo é apresentado os conceitos de Programação Orientada a Objetos em JavaScript, e sua utilização.

### [[JS & TS - 08 - JS Assíncrono]]
Durante esse módulo é apresentado os métodos e utilidades assíncronas em JS, além de seu comportamento na linguagem. 

### [[JS & TS - 09 - JS Toolings e Modules]]
Durante esse módulo é apresentado ferramentas de transcrição, como o Babel. Além da utilização dos módulos ES6.

### [[JS & TS - 10 - Node, NPM, Express e MongoDB]]
Durante esse módulo é apresentado o uso de ferramentas de back-end. Sua utilização na linguagem, além de utilização de banco de dados. 

### [[JS & TS - 11 - Projeto Agenda]]
Durante esse módulo é criado o projeto agenda. O Projeto conclui todo o aprendizado sobre as ferramentas do módulo 10. 

### [[JS & TS - 12 - Deploy da Aplicação]]
Durante esse módulo é apresentado as formas para realizar o deploy da aplicação desenvolvida no módulo 11 do curso. 

### [[JS & TS - 13 - API Rest]]
Durante esse módulo é criado uma API Rest. O Projeto conclui todo o aprendizado sobre diversos conteúdos do curso. 

### [[JS & TS - 14 - React - Básico]]
Durante esse módulo é apresentado o conteúdo inicial de React. A Utilização do .jsx e as normas e convenções para componentes. 