---
Tipo: Anotação
Descrição: Nesta secção da disciplina será apresentado o conceito de Estruturas de Repetição, dos processos mais simples, como o 'For' aos mais complexos 'While' e o 'Do - While'
Conteúdo: "'For' | 'While' | 'Do - While'"
Início: 2024-04-22
cssclasses:
  - banner
  - banner-fade
Fim: 
Atividades:
  - "[[(Lista 18) - Enquanto e Faça enquanto]]"
  - "[[(Lista 19) - Desafio -  Enquanto e Faça enquanto]]"
---
![[Capa - Estruturas de Repetição.png|banner]]
> [!banner-icon] 🎋
```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.Referência && p.Status && p.Referência === nomeArquivoAtual);

// Agrupe as notas por 'Status'
let grouped = pages.groupBy(p => `🌿 ${p.Status}`);
dv.header(1,"🥀 Atividades")

// Para cada grupo, ordene as notas por 'Conclusão' (tratando atividades sem conclusão) e exiba-as
grouped.forEach(group => {
    dv.header(2, group.key);
    dv.table(
        ["Nome do Arquivo", "Referência", "Status", "Conclusão"],
        group.rows
            .sort(p => p.Conclusão || "9999-12-31")  // Ordena notas sem 'Conclusão' como se fossem no futuro distante
            .map(p => [p.file.name, p.Referência, p.Status, p.Conclusão || "Sem conclusão"])
    );
});

```





```dataviewjs
/*// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.Referência && p.Status && p.Referência === nomeArquivoAtual);

// Agrupe as notas por 'Status'
let grouped = pages.groupBy(p => p.Status);

// Crie a estrutura da tabela com estilo Kanban
let container = document.createElement("div");
container.className = "table-container";

grouped.forEach(group => {
    let statusClass = group.key.replace(/\s+/g, "-").toLowerCase();

    let column = document.createElement("div");
    column.className = `table-column ${statusClass}`;

    // Cabeçalho da coluna
    let header = document.createElement("div");
    header.className = "table-column-header";
    let title = document.createElement("div");
    title.className = `table-column-title ${statusClass}`;
    title.textContent = group.key;
    let titleDetail = document.createElement("span");
    titleDetail.className = `title-detail ${statusClass}`;
    header.appendChild(title);
    title.appendChild(titleDetail);
    column.appendChild(header);

    // Div para os itens
    let itemsDiv = document.createElement("div");
    itemsDiv.className = "table-items";

    // Itens da coluna
    group.rows
        .sort(p => p.Conclusão || "9999-12-31")  // Ordena notas sem 'Conclusão' como se fossem no futuro distante
        .forEach(p => {
            let item = document.createElement("div");
            item.className = `table-item ${statusClass}`;
            let itemTitle = document.createElement("div");
            itemTitle.className = "table-item-title";
            itemTitle.textContent = p.file.name;
            let itemDetail = document.createElement("div");
            itemDetail.className = "table-item-detail";
            itemDetail.textContent = p.Referência;
            let itemDate = document.createElement("div");
            itemDate.className = "table-item-date";
            itemDate.textContent = p.Conclusão || "-- | --";
            item.appendChild(itemTitle);
            item.appendChild(itemDetail);
            item.appendChild(itemDate);
            itemsDiv.appendChild(item);
        });

    column.appendChild(itemsDiv);
    container.appendChild(column);
});

// Adicione o container ao elemento Dataview
dv.container.appendChild(container);
*/
```
