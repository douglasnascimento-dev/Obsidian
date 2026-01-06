---
cssclasses:
  - banner
  - banner-fade
Tipo: Disciplina
Ministrado: Alessandro Silveira Duarte
Nota Final: "9.5"
Início: 2024-10-01
Fim: 2025-02-28
Avaliações:
  - "[[Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.01 - 3º Período/UTFPR - Eng. de Software - Disciplinas/ES42C - Processo de Produção de Software/Avaliações/ES42C - Avaliação 01|ES42C - Avaliação 01]]"
  - "[[Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2025.01 - 3º Período/UTFPR - Eng. de Software - Disciplinas/ES42C - Processo de Produção de Software/Avaliações/ES42C - Avaliação 02|ES42C - Avaliação 02]]"
Anotações: 
Atividades: 
Carga Horária: 30h
---

![[Processo de Produção de Software.png|banner]]
> [!banner-icon] 🌳
## 💙 **Atividades** | Processo de Produção de Software

🔹Durante a realização dessa disciplina não houve 'Atividades'
### 🔷 **Registro de Aulas** | Processo de Produção de Software

| Aula                                                | Atividade | Data de Realização |
| :-------------------------------------------------- | :-------: | :----------------: |
| Apresentação a Matéria e a Ementa do Curso          |     X     |     01/10/2024     |
| *Realização da Feira de Profrissões*                |     X     |     08/10/2024     |
| Evolução dos Processos de Produção de Software      |     X     |     15/10/2024     |
| *Realização da SECOMP*                              |     X     |     22/10/2024     |
| Processo Unificado para a Criação de Software       |  Em sala  |     29/10/2024     |
| Diagrama de Caso de Uso                             |     X     |     05/11/2024     |
| Diagrama Entidade-Relacionamento                    |     X     |     12/11/2024     |
| Diagrama de Classe                                  |  Em sala  |     19/11/2024     |
| Diagrama de Classe                                  |  Em sala  |     26/11/2024     |
| Diagrama de Sequência                               |  Em sala  |     03/12/2024     |
| Apresentação do Modelo para a Entrega               |     X     |     10/12/2024     |
| **EAD** \| Disponível para a realização da Trabalho |     X     |     17/12/2024     |
| Metodologias Ágeis - SCRUM                          |     X     |     04/02/2025     |
| **Não Presente** \| Metodologias Ágeis - SCRUM      |     X     |     11/02/2025     |
| **EAD** \| Disponível para a realização da Trabalho |     X     |     18/02/2025     |
## 💙 **Anotações** | Processo de Produção de Software

🔹Durante a realização dessa disciplina não houve 'Anotações'

## 💙 **Avaliações** | Processo de Produção de Software

```dataviewjs
// Obtenha o nome do arquivo atual
let nomeArquivoAtual = dv.current().file.name;
let notaManual = 0;
// Obtenha todas as notas que possuem as propriedades 'Referência', 'Status' e opcionalmente 'Conclusão'
let pages = dv.pages()
    .where(p => p.file.path.includes('Estudos/UTFPR - Eng. de Software/UTFPR - Eng. de Software - 2024.02 - 2º Período/UTFPR - Eng. de Software - Disciplinas/ES42C - Processo de Produção de Software/Avaliações'));

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

