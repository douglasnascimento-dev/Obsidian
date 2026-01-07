---
Tipo: Módulo
Status: true
Início: 2025-03-01
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Fim: 2025-04-01
Anotações:
  - "[[JS & TS - 10.01 - NPM Modules]]"
  - "[[JS & TS - 10.02 - Listando Arquivos com FS]]"
  - "[[JS & TS - 10.03 - Lendo e Escrevendo Arquivos em JS]]"
  - "[[JS & TS - 10.04 - Express]]"
  - "[[JS & TS - 10.05 - Evoluindo no Express]]"
  - "[[JS & TS - 10.06 - MongoDB]]"
  - "[[JS & TS - 10.07 - Arquivos '.ejs']]"
Atividades:
  - "[[JS & TS - AC. 10.01.01 - NPM Modules]]"
  - "[[JS & TS - AC. 10.03.01 - Lendo e Escrevendo Arquivos]]"
  - "[[JS & TS - AC. 10.03.02 - Lendo e Escrevendo Arquivos]]"
  - "[[JS & TS - AC. 10.04.01 - Express]]"
  - "[[JS & TS - AC. 10.05.01 - Evoluindo no Express]]"
  - "[[JS & TS - AC. 10.07.01 - MongoDB e '.ejs']]"
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌳
## 💙**Atividades** | JS & TS - Node, NPM, Express e MongoDB

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas dentro do diretório especificado
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/Cursos/JS & TS/JS & TS - Módulos/10 - JavaScript - Node, NPM, Express e MongoDB/Atividades'));

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
## 💙**Anotações** | JS & TS - Node, NPM, Express e MongoDB

### [[JS & TS - 10.01 - NPM Modules]]

Durante essa é apresentado a utilização de módulos NPM, a possibilidade de importação e exportação de módulos locais e globais de módulos NPM, além da manipulação desses módulos

#### 🌱Comandos NPM

- 🌲*Iniciando o NPM*: 
	- 'npm init -y' 
- 🌲*Instalando um Pacote*: 
	- 'npm install nomeDoPacote'
- 🌲*Instalando uma versão exata do Pacote*: -
	- 'npm install nomeDoPacote@versãoDesejada'
- 🌲*Instalando uma versão sem atualização do Pacote*: 
	- 'npm install nomeDoPacote -E'
- 🌲*Atualizando todos os Pacote*: 
	- 'npm update'
- 🌲*Desinstalando um Pacote*:
	- 'npm uninstall nomeDoPacote'
- 🌲*Listando Pacotes*
	- 'npm ls'
- 🌲*Lista Pacotes até profundidade'
	- 'npm ls --depth=profundidadeDesejada'
- 🌲*Listando Pacotes desatualizados
	- 'npm outdated'
- 🌲*Movendo um Pacote para Dependências de Desenvolvimento*:
	- 'npm install nomeDoPacote --save-dev'
- 🌲*Movendo um Pacote para Dependências*: 
	- 'npm install nomeDoPacote --save-prod'

##### 🌵Versões

- 🌲Exemplo: '88.77.66'
	- 🌲*88*: 'Major version'
	- 🌲*77*: 'Minor version'
	- 🌲*66*: 'Patch version'

 - 🌲 **^** | ^88.77.66 = 88.XX.XX 
	- Permite atualizar para a versão mais recente do 'minor' e do 'patch'. Não irá atualizar a versão do 'major'
 - 🌲 **~** | ~88.77.66 =  88.77.XX
	- Permite atualizar para a versão mais recente do 'patch'. Não irá atualizar a versão do 'major' e do 'minor'


### [[JS & TS - 10.02 - Listando Arquivos com FS]]

Durante essa nota é apresentada o módulo 'fs', file system, do NPM, sua utilização na procura local de arquivos e os dispositivos que permitem realizar a recursão mútua

### [[JS & TS - 10.03 - Lendo e Escrevendo Arquivos em JS]]

Durante essa nota é dada continuação ao conteúdo referente ao módulo 'fs' do NPM, agora também permitindo a leitura e escrita de arquivos de múltiplos tipos, como .json ou .txt.

### [[JS & TS - 10.04 - Express]]

Durante esse nota é apresentado o módulo 'express' do NPM, com este módulo é possível criar servidores, criando rotas e emulando um cenário real da criação de um site.

### [[JS & TS - 10.05 - Evoluindo no Express]]

Durante essa nota é dada continuação ao conteúdo referente ao módulo 'express' do NPM, agora também é exemplificado a organização de arquivos e rotas, além de apresentar o conceito de middleware.

#### 🌱Utilizando o 'dotenv'

O pacote do NPM 'dotenv', permite criar um tipo de arquivo que irá guardar informações que necessitam de sigilo, para sua criação ele não recebe um nove, apenas '.env'. Exemplo de um '.env'

```js
CONNECTIONSTRING = 'mongodb+srv://douglasnascimentomatos06:a2648806+@cursojsets.nbhjdbb.mongodb.net/BaseDeDados?retryWrites=true&w=majority&appName=cursojsets'
```


### [[JS & TS - 10.06 - MongoDB]]

Durante essa nota é apresentado o banco de dados MongoDB, além de sua utilização em models e controllers, também é apresentado módulos auxiliares para a utilização de banco de dados

### [[JS & TS - 10.07 - Arquivos '.ejs']]

Durante essa nota é apresentado e explorados os arquivos '.ejs', que basicamente são uma combinação de um arquivo '.html', mas com a possibilidade de inserir código '.js'.

### [[JS & TS - 10.08 - Helmet e CSRF]]

Durante essa nota é apresentada os módulos Helmet e CSRF, que tem como função primária, garantir que todo formulário só seja postado, a partir do site de origem.