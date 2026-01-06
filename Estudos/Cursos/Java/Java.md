---
cssclasses:
  - banner
  - banner-fade
  - academia
  - wideTable
  - wideFC
Tipo: Curso
Ministrado: Udemy | Nélio Alves
Início: 2025-03-10
Fim: ""
Status: false
Anotações:
  - "[[Java - Módulo 01 - Introdução]]"
  - "[[Java - Módulo 02 - Conceitos de Programação]]"
  - "[[Java - Módulo 03 - Introdução a Linguagem Java]]"
  - "[[Java - Módulo 04 - Estrutura Sequencial]]"
  - "[[Java - Módulo 05 - Estrutura Condicional]]"
  - "[[Java - Módulo 06 - Estruturas Repetitivas]]"
  - "[[Java - Módulo 07 - Outros tópicos]]"
  - "[[Java - Módulo 08 - Introdução a POO]]"
---
![[Java.png|banner]]
> [!banner-icon] Java - Módulos
## :LiBookOpen:  **Atividades Pendentes** | Java

```dataviewjs
let avaliacoes = dv.pages('"Estudos/Cursos/Java/Java - Módulos"')
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
    dv.span("*:LiBookOpenCheck:  Não há atividades pendentes*");
}


```

## :LiGitGraph: **Módulos** | Java

- [[Java - Módulo 01 - Introdução]] 
	- *Neste módulo será apresentado a estrutura geral do Curso e o mapa de estudos do Curso, além de apresentar as ferramentas necessárias*
- [[Java - Módulo 02 - Conceitos de Programação]]
	- *Neste módulo será apresentado os primeiros conceitos de programação, além de também apresentar os primeiros conceitos da lógica para a programação*
- [[Java - Módulo 03 - Introdução a Linguagem Java]]
	- *Neste módulo será apresentado o conteúdo referente a iniciação na Linguagem Java, seu conceitos inicias e suas convenções*
- **[[Java - Módulo 04 - Estrutura Sequencial]]**
	- *Neste módulo será apresentado as estruturas sequencial, como a leitura de dados, a exibição de dados e a manipulação de dados dentro da linguagem Java*
- [[Java - Módulo 05 - Estrutura Condicional]]
	- *Neste módulo será apresentado as Estruturas Condicionais, como a utilização de 'if', 'else if' e 'if'. Além de estruturas como o 'switch case'*
- [[Java - Módulo 06 - Estruturas Repetitivas]]
	- *Neste módulo será apresenta as Estruturas repetidas, como a estrutura 'for', 'while' e de estruturas menos utilizadas como 'do while'*
- [[Java - Módulo 07 - Outros tópicos]]
	- *Neste módulo será apresentado alguns detalhes sobre diversos tópicos da Linguagem Java, como a forma que será trabalhadas as string no Java*
- [[Java - Módulo 08 - Introdução a POO]]
	- *Neste módulo será apresentado os conceitos inicias de Programação Orientada a Objetos em Java, apresentando o conceito de Classes e Métodos*
- [[Java - Módulo 09 - Construtores + This + Sobrecarga + Encapsulamento]]
	- *Neste módulo será apresentado a utilização de construtores, a utilização de sobrecarga e encapsulamento, além da palavra reservada this*
- [[Java - Módulo 10 - Comportamento de Memória + Arrays + Listas]]
