---
Tipo: Módulo
Descrição: Nesse módulo será apresentado ferramentas que podem auxiliar a transposição do JS moderno para versões anteriores suportadas por navegadores mais antigos, também apresenta o conceito de módulos da vesão ES6
Conteúdo: "'WebPack' | 'NPM' | 'ES6 Modules'"
Status: true
Início: 2025-03-01
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Fim: 2025-03-09
Anotações:
  - "[[JS & TS - 09.01 - ES6 Modules]]"
Atividades:
  - "[[JS & TS - AC. 09.01.01 - ES6 Modules]]"
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌳
## 💙**Atividades** | JS & TS - Toolings e Modules

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/Cursos/JS & TS/JS & TS - Módulos/09 - JavaScript Toolings e ES6 Modules/Atividades'));

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

if(pages.length === 0){
    dv.paragraph("🔹Durante a realização dessa disciplina não houve 'Atividades'");
} else {
dv.table(
    ["Atividade", "Data de Início", "Data Final", "Status"], 
    tabelaDados
);
}
```

### 🔷**Registro de Aulas** | JS & TS - Toolings e Modules

| <p style="text-align: center">Título - Aula</p> | <p style="text-align: center">Status - Aula</p> | <p style="text-align: center">Último Minuto</p> |
| :---------------------------------------------- | :---------------------------------------------: | :---------------------------------------------: |
| 🔹114 - Sobre as Ferramentas                    |                    Concluído                    |                    -- \| --                     |
| 🔹115 - Babel e "Can i use"                     |                    Concluído                    |                    -- \| --                     |
| 🔹116 - WebPack                                 |                    Concluído                    |                    -- \| --                     |
| 🔹117 - Correção \| CoreJS                      |                    Concluído                    |                    -- \| --                     |
| 🔹118 - ES6 Modules                             |                    Concluído                    |                    -- \| --                     |
| 🔹119 - Atualização do Antigo Modelo            |                    Concluído                    |                    -- \| --                     |
| 🔹120 - EX. Gerando um CPF                      |                    Concluído                    |                    -- \| --                     |
| 🔹121 - EX. Gerando senhas                      |                    Concluído                    |                    -- \| --                     |
| 🔹122 - EX. CoreJS e Regenerator RunTime        |                    Concluído                    |                    -- \| --                     |

## 💙**Anotações** | JS & TS - Toolings e Modules

#### 🌱Uso do Babel e WebPack

O Uso manual do **Babel** manual é incomum a desenvolvedores, para maior adaptação é mais comum a utilização de ferramentas como o **WebPack**, que além de padronização de JS, como o Babel, também padroniza outras linguagens como o .css, .sass e outros.

### [[JS & TS - 09.01 - ES6 Modules]]

Durante essas notas é apresentado o conceito de módulos em JS, utilizando os módulos da versão ES6, além de exemplificar a exportação e importação de módulos e como pode ser utilizando o dispositivos alias 