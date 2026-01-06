---
cssclasses:
  - banner
  - banner-fade
  - list-cards
  - cards-16-9
  - table-wide
  - cards-cols-3
Tipo: Período
Início: 2024-10-01
Disciplinas:
  - "[[ES42B - Algoritimos - 02]]"
  - "[[ES42E - Banco de Dados]]"
  - "[[EC47E - Empreendedorismo]]"
  - "[[ES42F - Fundamentos da Ética]]"
  - "[[ES42G - Matemática Discreta]]"
  - "[[ES42C - Processo de Produção de Software]]"
  - "[[ES42D - Sistemas Operacionais]]"
---
![[Capa - 2024.02.png|banner]]
> [!banner-icon] 🥀
# **Atividades Pendentes** | 2º Período

```dataviewjs
let avaliacoes = dv.pages('"Estudos/UTFPR - Eng. de Software/2024.02 - 2º Período/Matérias - 2º Período"')
    .where(p => p.file.frontmatter.Tipo === "Atividade" && p.file.frontmatter.Status == false);

// Cria um array para armazenar os dados das tabelas
let tabelaDados = [];

// Data atual
let dataAtual = new Date();

avaliacoes.forEach(avaliacao => {
    let dataFinal = new Date(avaliacao.file.frontmatter.Final);
    let disciplina = avaliacao.file.frontmatter.Disciplina;
    let conteudo = avaliacao.file.frontmatter.Conteúdo;

    // Calcula a diferença entre a data limite e a data atual (em milissegundos)
    let diferencaDias = (dataFinal - dataAtual) / (1000 * 60 * 60 * 24);

    // Formata a data final para o formato YYYY-MM-DD
    let dataFinalFormatada = dataFinal.toISOString().split('T')[0];

    // Se a data limite for menor que 3 dias, a data ficará em vermelho
    if (diferencaDias < 3) {
        dataFinalFormatada = `<span style="color: red;">${dataFinalFormatada}</span>`;
    }

    // Adiciona os dados da avaliação à tabela
    tabelaDados.push([`${avaliacao.file.link} | ${conteudo}`, disciplina , dataFinalFormatada]);
});

// Ordena a tabela com base na data limite (índice 2 do array)
tabelaDados.sort((a, b) => new Date(a[2].replace(/<[^>]+>/g, '')) - new Date(b[2].replace(/<[^>]+>/g, '')));

// Adiciona a tabela ao contêiner
dv.table(["Atividade", "Disciplina", "Data Limite"], tabelaDados);

```


# **Disciplinas** | 2º Período

```page-gallery
fields: [file.name]
columns: 3
filter: false
count: false
views:
  - name: 
    from: '("Estudos/UTFPR - Eng. de Software/2024.02 - 2º Período")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Disciplina"'
```



