---
Tipo: Anotação
Descrição: Nesta secção foi apresentado o conceito de função, o seu uso em programas que utilizam linguagem C, e a importância do processo de modularização
Conteúdo: "'Void' | 'Function' | 'Return'"
Início: 2024-08-06
cssclasses:
  - banner
  - banner-fade
Fim: 2024-08-20
Atividades:
  - "[[(Lista 24) - Função (01)]]"
  - "[[(Lista 25) - Função (02)]]"
---

![[Capa - Função.png|banner]]
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

