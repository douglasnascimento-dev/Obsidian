---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Lucas Dias Hiera Sampaio
Carga Horária: 60h
Nota Final: "8.6"
Início: 2025-08-14
Fim: ""
Avaliações:
  - "[[ES44F - Avaliação 01]]"
  - "[[ES44F - Avaliação 02]]"
  - "[[ES44F - Média das Labóratorios]]"
  - "[[ES44F - Média dos Questionários]]"
---

![[Segurança da Informação.png|banner]]
> [!banner-icon] :LiBookMarked: ES44F 
# :LiClipboard: **Atividades** | Segurança da Informação

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44F - Segurança da Informação/Atividades'));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph(" :LiCheckCheck: Durante a realização dessa disciplina não houve 'Atividades'.");
} else {
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
}

```
## :LiCalendarCheck2: **Registros de Aulas** | Segurança da Informação

| Aula                                                                                                       |                  Atividade                   | Data de Realização |
| :--------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :----------------: |
| Apresentação da Ementa da Disciplina                                                                       |                      X                       |     12.08.2025     |
| [[ES44F - Aula 01 - 18.08.2025 - Pilares da Seg. da Informação\| Aula 01 - Pilares da Seg. da Informação]] |                      X                       |     18.08.2025     |
| [[ES44F - Aula 02 - 19.08.2025 - Criptografia Clássica\| Aula 02 - Criptografia Clássica]]                 |                      X                       |     19.08.2025     |
| [[ES44F - Aula 03 - 25.08.2025 - Algoritimos Simétricos e DES\|Aula 03 - DES]]                             |                      X                       |     25.08.2025     |
| AES                                                                                                        |                      X                       |     26.08.2025     |
| Cifras Assimétricas                                                                                        |                      X                       |     01.09.2025     |
| Funcões Hash                                                                                               |                      X                       |     02.09.2025     |
| Laboratório 01                                                                                             |  [[ES44F - Laboratório 01\|Laboratório 01]]  |     08.09.2025     |
| Identidade Digital                                                                                         |                      X                       |     09.09.2025     |
| Infraestrutura Pública de Chaves                                                                           |                      X                       |     15.09.2025     |
| Realização do [[ES44F - Laboratório 02\|Laboratório 02]]                                                   |  [[ES44F - Laboratório 02\|Laboratório 02]]  |     16.09.2025     |
| *Não presente* \| Revisão para a [[ES44F - Avaliação 01\|Avaliação 01]]                                    |                      X                       |     22.09.2025     |
| Feira de Profissões                                                                                        |                      X                       |     23.09.2025     |
| Aplicação da [[ES44F - Avaliação 01\|Avaliação 01]]                                                        |                      X                       |     29.09.2025     |
| Correção da [[ES44F - Avaliação 01\|Avaliação 01]]                                                         |                      x                       |     30.09.2025     |
| Segurança na Camada de Redes                                                                               |                      X                       |     06.10.2025     |
| Seguranaça na Camada de Enlace                                                                             |                      X                       |     07.10.2025     |
| Segurança na Camada de Enlace - Ataques                                                                    |                      X                       |     13.10.2025     |
| Seguranaça na Camada de Transportes                                                                        |                      X                       |     14.10.2025     |
| Seguranaça na Camada de Transportes - Ataques                                                              |  [[ES44F - Laboratório 03\|Laboratório 03]]  |     20.10.2025     |
| Seguranaça na Camada de Apresentação, Sessão e Aplicação                                                   |                      X                       |     21.10.2025     |
| Seguranaça na Camada de Apresentação, Sessão e Aplicação - Ataques                                         |                      X                       |     28.10.2025     |
| Prática com Firewall                                                                                       |                      X                       |     03.11.2025     |
| Prática com Firewall                                                                                       |                      X                       |     04.11.2025     |
| Sistema de Detecção de Intrusão                                                                            |                      X                       |     10.11.2025     |
| Sistema de Detecção de Intrusão                                                                            |                      X                       |     11.11.2025     |
| Segurança na Web - Fundamentos                                                                             |                      X                       |     17.11.2025     |
| Segurança na Web - Fundamentos                                                                             | [[ES44F - Laboratório 04\|Laboratório 04]] |     18.11.2025     |
| SQL Injection                                                                                              |                      X                       |     24.11.2025     |
| XSS                                                                                                        |                      X                       |     25.11.2025     |
| Revisão para a [[ES44F - Avaliação 02\|Avaliação 02]]                                                      |                      X                       |     01.12.2025     |
| Revisão para a [[ES44F - Avaliação 02\|Avaliação 02]]                                                      |                      X                       |     02.12.2025     |
| Aplicação da [[ES44F - Avaliação 02\|Avaliação 02]]                                                        |                      X                       |     08.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                    |                      X                       |     09.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                    |                      X                       |     15.12.2025     |
| :LiXCircle: Sem necessidade de Presença - **Finalização da Disciplina**                                    |                      X                       |     16.12.2025     |


### :LiCalendarRange: Rastreamento de Presença | Segurança da Informação

> 72 aulas previstas - Sem necessidade de Presença


# :LiNotebook: **Anotações** | Segurança da Informação

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44F - Segurança da Informação/Anotações'));

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
    dv.paragraph(":LiCheckCheck: Durante a realização dessa disciplina não houve 'Anotações'.");
} else {
    // Data atual
    let dataAtual = new Date();
    // Criar a tabela de dados com os ajustes visuais
    let tabelaDados = sortedPagesArray.map(p => {
        return [
            `**${p.file.link}**`, // Nome do arquivo em vez do link
        ];
    });
    // Exibir a tabela
    dv.table(
        ["Anotações"], 
        tabelaDados
    );
}

```

# :LiPieChart: **Avaliações** | Segurança da Informação

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.02 - 4º Período/UTFPR - Eng. de Software - Disciplinas/ES44F - Segurança da Informação/Avaliações'));

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

