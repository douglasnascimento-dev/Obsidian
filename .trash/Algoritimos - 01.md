---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Adriane Carla Anastácio
Nota Final: 
Início: 2024-03-04
Fim: ""
Avaliações:
  - "[[ES41A - Avaliação 01]]"
  - "[[ES41A - Avaliação 02]]"
  - "[[ES41A - Avaliação 03]]"
  - "[[ES41A - Avaliação 04]]"
  - "[[ES41A - Avaliação 05]]"
Anotações:
  - "[[Estrutura de Repetição]]"
  - "[[Vetor & Matriz]]"
  - "[[ES41A - Registro]]"
  - "[[Função]]"
---
![[Capa - Algoritimos (01).png|banner]]
> [!banner-icon] 🌳

# 🌹Anotações de Algoritimos - 01
``` page-gallery
title: "🎋 Conteúdos"
fields: [file.name, file.frontmatter.Conteúdo]
columns: 3
filter: false
count: false
views:
  - name: 
    from: '("Estudos/UTFPR - Eng. de Software/2024.01 - 1º Período/Matérias - 1º Período/Algoritimos - 01")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Anotação"'
```

# 🌹Avaliações de Algoritimos - 01
```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;

// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/2024.01 - 1º Período/Matérias - 1º Período/Algoritimos - 01/Avaliações'));

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
    return [`${p.file.name} | ${p.Referência}`, p.Nota, p.Peso];
});

// Calcule a média final, considerando apenas as notas definidas
let mediaFinal = totalPeso ? totalNotaComPeso / totalPeso : 0;

// Adicione a média final como a última linha da tabela
tabelaDados.push(["**Média Final**", `**${mediaFinal.toFixed(2)}**`, ""]);

// Exiba o cabeçalho "Notas"
dv.header(4, "🎋 Notas");

// Exiba a tabela com as notas e a média final
dv.table(
    ["Nome do Arquivo", "Nota", "Peso"], 
    tabelaDados
);
```
