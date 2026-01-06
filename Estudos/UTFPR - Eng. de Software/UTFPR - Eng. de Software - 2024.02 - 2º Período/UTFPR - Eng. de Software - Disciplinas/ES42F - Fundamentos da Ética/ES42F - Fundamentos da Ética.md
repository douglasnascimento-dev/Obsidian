---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Dirceu Casa Grande Jr.
Carga Horária: 30h
Nota Final: "9.5"
Início: 2024-10-04
Fim: 2025-02-28
Avaliações:
  - "[[ES42F - Avaliação 01]]"
  - "[[ES42F - Avaliação 02]]"
Anotações: 
Atividades: 
---


![[Fundamentos da ética.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Fundamentos da Ética

🔹Durante a realização dessa disciplina não houve 'Atividades'

### 🔷 **Registro de Aulas** | Fundamentos da Ética

| Aula                                                                 | Atividade | Data de Realização |
| :------------------------------------------------------------------- | :-------: | :----------------: |
| Apresentação a Matéria e a Ementa do Curso                           |     X     |     04/10/2024     |
| Introdução á Estudo sobre a 🌿Ética e a Aplicação da Moral           |     X     |     11/10/2024     |
| Continução á Estudo sobre a 🌿Ética e a Aplicação da Moral           |     X     |     18/10/2024     |
| **Não Presente** \| Leitura e Discussão sobre a 🌿Ética Aristotélica |     X     |     25/10/2024     |
| **Avaliação** \| [[ES42F - Avaliação 01]]                            |     X     |     01/11/2024     |
| **Não Presente** \| Correção - [[ES42F - Avaliação 01]]              |     X     |     08/11/2024     |
| *Recesso: Dia da Proclamação da República do Brasil*                 |     X     |     15/11/2024     |
| Ética do dever por Kant                                              |     X     |     22/11/2024     |
| Estudo de Caso: Hannah Arendt                                        |     X     |     29/11/2024     |
| Estudo de Caso: Hannah Arendt                                        |     X     |     06/12/2024     |
| Estudo de Caso: Hannah Arendt                                        |     X     |     13/12/2024     |
| **EaD** \| Resolução de Caso                                         |     X     |     20/12/2024     |
| **Não Presente** \| 🌿Lógica Algoritimica                            |     X     |     07/02/2025     |
| 🌿Lógica Algoritimica                                                |     X     |     14/02/2025     |
| **Avaliação** \| [[ES42F - Avaliação 02]]                            |     X     |     21/02/2025     |
| **Sem Necessidade de Presença** \| Finalização da Disciplina         |     X     |     28/02/2025     |

## 💙 **Anotações** | Fundamentos da Ética

🔹Durante a realização dessa disciplina não houve 'Anotações'

## 💙 **Avaliações** | Fundamentos da Ética

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual = 0;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42F - Fundamentos da Ética/Avaliações'));

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
tabelaDados.push(["**Média Final**", `**${mediaFinal.toFixed(1)}**`, ""]);

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

