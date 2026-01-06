---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Período: 
Ministrado: 
Nota Final: 
Início: ""
Fim: ""
Avaliações: 
Anotações: 
Atividades:
---
![[Capa - Estudos.png|banner]]
> [!banner-icon] 🌳


## 💙**Atividades** | XXXXXXXX

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/202X.0X - Xº Período/Matérias - Xº Período/XXXXXXXX/Atividades'));

// Ordene as notas por 'Referência' (ou use 'file.name' se for o caso)
let sortedPages = pages.sort(p => p.file.name);

// Converta `sortedPages` para um array regular
let sortedPagesArray = Array.from(sortedPages);

// Data atual
let dataAtual = new Date();

// Função para verificar se a data final é menor que dois dias
function verificarDataFinal(dataFinal) {
    let diffMilissegundos = new Date(dataFinal) - dataAtual;
    let diffDias = diffMilissegundos / (1000 * 60 * 60 * 24); // Converter milissegundos para dias
    return diffDias < 2;
}

// Crie uma tabela de dados, adicionando checkbox em vez de true/false
let tabelaDados = sortedPagesArray.map(p => {
    let dataFinal = p.Final ? new Date(p.Final) : null;
    
    // Transforme o campo "Status" em checkbox
    let statusCheckbox = p.Status === true ? "Concluído" : "Pendente";
	let destaque = "";

    if(dataFinal && verificarDataFinal(dataFinal) && statusCheckbox === "Pendente") {
		 destaque = 'style="color:#ba4343"';
	}	else if(statusCheckbox === "Concluído") {
		 destaque = 'style="color:#43ba63"';
	};

    return [
        `**${p.file.name}** | ${p.Conteúdo === null ? " " : p.Conteúdo}`,
        p.Início,
        p.Final,
        `<span ${destaque}> **${statusCheckbox}**</span>`,
        
    ];
});

// Exiba a tabela com as notas e destaque em vermelho
dv.table(
    ["Atividade", "Data de Início", "Data Final", "Status"], 
    tabelaDados
);

```

### 🔷 **Registro de Aulas** | XXXXXXXX

| Aula                                                                                                                               | Atividade | Data de Realização |
| :--------------------------------------------------------------------------------------------------------------------------------- | :-------: | :----------------: |
|                                                                                                                                    |           |                    |
## 💙**Anotações** | XXXXXXXX

``` page-gallery
fields: [file.name, file.frontmatter.Conteúdo]
columns: 3
filter: false
count: false
views:
  - name: 
    from: '("Estudos/UTFPR - Eng. de Software/202X.0X - Xº Período/Matérias - Xº Período/XXXXXXXX")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Anotação"'
```

## 💙**Avaliações** | XXXXXXXX

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/202X.0X - Xº Período/Matérias - Xº Período/XXXXXXXX/Avaliações'));

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

