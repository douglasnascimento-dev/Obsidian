---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Lucas Dias Hiera Sampaio
Carga Horária: "60"
Início: 2025-08-14
Fim: 2025-12-01
Avaliações:
  - "[[ES44F - Avaliação 01]]"
  - "[[ES44F - Avaliação 02]]"
  - "[[ES44F - Média das Labóratorios]]"
  - "[[ES44F - Média dos Questionários]]"
Nota Final: "8.6"
Atividades:
  - "[[ES44F - Laboratório 01]]"
  - "[[ES44F - Laboratório 02]]"
  - "[[ES44F - Laboratório 03]]"
  - "[[ES44F - Laboratório 04]]"
---

![[Segurança da Informação.png|banner]]

##  **Atividades** | Segurança da Informação

```dataviewjs
let pathAtividades = `"${dv.current().file.folder}/Atividades"`;
let pages = dv.pages(pathAtividades);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

if (sortedPagesArray.length === 0) {
    dv.span(":LiCircleX: **Não há atividades registradas nesta disciplina.**");
} else {
    let dataAtual = new Date();
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    function formatarData(data) {
        if (!data) return "";
        let dia = data.getDate();
        let mes = meses[data.getMonth()];
        let ano = data.getFullYear();
        return `${dia} de ${mes} de ${ano}`;
    }

    function verificarDataFinal(dataFinal) {
        let diffMilissegundos = new Date(dataFinal) - dataAtual;
        let diffDias = diffMilissegundos / (1000 * 60 * 60 * 24);
        return diffDias < 2;
    }

    const corPendente = "rgb(54, 102, 129)";  
    const corConcluido = "rgb(91, 145, 177)"; 

    let tabelaDados = sortedPagesArray.map(p => {
        let dataInicio = p.Início ? new Date(p.Início) : null;
        let dataFinal = p.Final ? new Date(p.Final) : null;

        let statusTexto = p.Status === true ? "Concluído" : "Pendente";
        let corStatus = p.Status === true ? corConcluido : corPendente;

        if (dataFinal && verificarDataFinal(dataFinal) && statusTexto === "Pendente") {
            corStatus = "rgb(178, 50, 50)"; 
        }

        return [
            `**${p.file.link}** | ${p.Conteúdo ? p.Conteúdo : ""}`,
            formatarData(dataInicio),
            formatarData(dataFinal),
            `<span style="color:${corStatus}; font-weight: bold;">${statusTexto}</span>`,
        ];
    });

    dv.table(
        ["Atividade", "Data de Início", "Data Final", "Status"], 
        tabelaDados
    );
}

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    const linksAtividades = sortedPagesArray.map(p => `[[${p.file.name}]]`);
    await app.fileManager.processFrontMatter(file, fm => {
        if (JSON.stringify(fm["Atividades"]) !== JSON.stringify(linksAtividades)) {
            fm["Atividades"] = linksAtividades;
        }
    });
}
```

--- 
![[Banner 01 - 04.png]]

##  **Registros de Aulas** | Segurança da Informação

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
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                                     |                      X                       |     09.12.2025     |
| :LiBadgeXSem necessidade de Presença - **Finalização da Disciplina**                                       |                      X                       |     15.12.2025     |
| :LiBadgeX: Sem necessidade de Presença - **Finalização da Disciplina**                                     |                      X                       |     16.12.2025     |
###  **Rastreamento de Presença** | Segurança da Informação

  :LiCircleX: **Não há necessidade de Presença**

--- 

![[Banner 02 - 04.png]]
## **Anotações** | Segurança da Informação

```dataviewjs
// 1. Obtém o caminho da pasta onde esta nota atual está (a pasta da disciplina)
// 2. Adiciona o sufixo "/Anotações" para apontar para a subpasta correta
let pathAnotacoes = `"${dv.current().file.folder}/Anotações"`;

// Busca as notas diretamente dentro da pasta de Anotações
let pages = dv.pages(pathAnotacoes);

// Ordene as notas pelo nome do arquivo
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

// Se não houver atividades, exibir a mensagem e encerrar o código
if (sortedPagesArray.length === 0) {
      dv.span(":LiCircleX: **Não há anotações registradas nesta disciplina.**");
} else {
    let cont = 1;
    
    // Criar a tabela de dados com contador automático
    let tabelaDados = sortedPagesArray.map(p => {
        // Formata o número da aula com zero à esquerda (ex: Aula 01, Aula 02...)
        let aulaLabel = cont < 10 ? `Aula 0${cont}` : `Aula ${cont}`;
        cont++; 
        
        return [
            aulaLabel,
            p.file.link,
        ];
    });

    // Exibir a tabela
    dv.table(
        ["Aula", "Anotações"], 
        tabelaDados
    );
}
```

---
![[Banner 01 - 04.png]]
## **Avaliações** | Segurança da Informação

```dataviewjs
let pathAvaliacoes = `"${dv.current().file.folder}/Avaliações"`;
let notaManual;

let pages = dv.pages(pathAvaliacoes);
let sortedPages = pages.sort(p => p.file.name);
let sortedPagesArray = Array.from(sortedPages);

let totalPeso = 0;
let totalNotaComPeso = 0;

let tabelaDados = sortedPagesArray.map(p => {
    let notaValida = p.Nota !== undefined && p.Nota !== null;
    if (notaValida) {
        totalPeso += p.Peso;
        totalNotaComPeso += p.Nota * p.Peso;
    }
    return [`[[${p.file.name}]] | ${p.Referência === null ? " " : p.Referência }`, p.Nota, p.Peso];
});

let mediaFinal = totalPeso ? totalNotaComPeso / totalPeso : 0;
let notaExibicao = notaManual ? notaManual : mediaFinal.toFixed(1);

tabelaDados.push(["**Média Final**", `**${notaExibicao}**`, ""]);

dv.table(
    ["Avaliação", "Nota", "Peso"], 
    tabelaDados
);

const file = app.vault.getAbstractFileByPath(dv.current().file.path);
if (file) {
    app.fileManager.processFrontMatter(file, fm => {
        fm["Nota Final"] = notaExibicao;
    });
}
```

