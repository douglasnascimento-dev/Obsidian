A especificação Conventional Commits é uma convenção leve sobre mensagens de commit. Ela fornece um conjunto simples de regras para a criação de um histórico de commits explícito, o que facilita a criação de ferramentas automatizadas sobre ele.

```powershell
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

## :LiList: Tipos de Commit

- **Feat**: Vem de feature (recurso) e é utilizado quando um novo recurso ou funcionalidade é implementado no projeto, destacando essa adição. Um exemplo disso é o acréscimo de um novo endpoint em uma API.

- **Fix**: Vem de bug fixes (correções de erros) e é utilizado para indicar a correção de um problema ou mal funcionamento do código, como a correção de um erro de validação de um formulário.

- **Style**: Ao contrário do que se possa imaginar, esse tipo não diz respeito a alterações no CSS. Ele é utilizado para se referir a alterações ou formatações no estilo do código que não afetam o seu funcionamento. Ou seja, a remoção de espaços em branco, correção de ponto e vírgula, organização da indentação etc.

- **Refactor**: Vem de code refactoring (refatoração de código), esse tipo indica a reestruturação do código preexistente sem alteração de sua funcionalidade, como ajustes após um code review.

- **Change**: Significando alteração, esse tipo é utilizado quando são feitas mudanças na implementação de um recurso existente, como melhorar uma interface de usuário.

- **Perf**: Vem de performance improvements (melhorias de desempenho), é utilizado quando são feitas alterações para melhorar a performance, como melhorias no desempenho dos algoritmos ou no tempo geral de execução do sistema.

- **Build**: Vem do termo construir e é utilizado quando se faz alterações no sistema de compilação ou nas dependências externas do projeto, gerando impacto real ao sistema, como adicionar, remover ou atualizar dependências.

- **Chore**: Traduzido por tarefa, esse tipo é utilizado para indicar mudanças relacionadas a manutenção técnica ou preventiva, que não modificam os arquivos src ou de teste. Diferente do build, essas alterações não modificam o código de produção, apenas as ferramentas, configuração e bibliotecas auxiliares. Como exemplos de usos, temos a alteração de uma dependência de desenvolvimento, adição de prettier, alterações no .gitignore ou nas regras do eslint.

- **Ci**: Vem de continuous integrations (integrações contínuas) e é utilizado quando se faz alterações nos arquivos e scripts de configuração de CI (Travis, Circle, BrowserStack, SauceLabs). Por exemplo: atualizar configurações do pipeline de CI/CD.

- **Docs**: Vem de documentation (documentação) e é utilizado quando são feitas alterações e atualizações na documentação armazenada no repositório, como alterar o README, por exemplo.

- **Deprecate**: Significando depreciar, esse tipo é utilizado para sinalizar que uma funcionalidade existente está sendo descontinuada, mas ainda não será removida do produto para não quebrar integrações preexistentes. É uma maneira de incentivar os desenvolvedores a migrar para alternativas mais recentes.

- **Remove**: De remover, é utilizado quando um recurso é removido, geralmente após um período de tempo marcado como deprecated. Remover um recurso é considerado um breaking change, sendo necessário incrementar o número da versão.

- **Revert**: Significando reverter, é utilizado para indicar a remoção de um ou mais commits anteriores que foram incluídos acidentalmente ou causaram problemas sérios que exigiram sua remoção.

- **Security**: Esse tipo é utilizado quando são feitas melhorias na segurança do produto ou resolver problemas de segurança relatados, como corrigir vulnerabilidade de injeção de SQL.

- **Test**: Esse tipo de commit indica a criação, revisão ou alteração dos testes automatizados do projeto.

## :LiList: Escopo

O escopo é uma parte opcional, curta e de fácil compreensão, sempre sinalizada entre parênteses. Essa parte é muito importante em repositórios enormes ou projetos com várias features e mudanças paralelas.

Através dela, apresentamos um contexto adicional, indicando qual área específica do código esse commit irá alterar, ou seja, o escopo afetado, como (api), se é na camada de backend, (lang), se é na tradução, (ui), se é na interface gráfica etc. Esse escopo é importante para diminuir as responsabilidades da descrição.    

## :LiList: Descrição

Juntamente com o tipo, a descrição é a parte mais importante do CC, sendo, portanto, obrigatória. É nessa parte que deve ser descrita, de maneira direta, sucinta e simplificada, o que foi realizado no commit. Por se tratar de um breve resumo, é recomendado que essa parte apresente, no máximo, 50 caracteres, para que não se estenda muito.

Convencionou-se também que as descrições não sejam iniciadas com maiúsculas, sejam escritas sem ponto final e que utilizem os verbos no imperativo. Apesar de parecer estranho, inicialmente, utilizar o imperativo presente para se referir a uma ação realizada no passado, mas a ideia aqui é descrever o que esse commit fará ao código preexistente. Por exemplo: “esse commit vai adicionar uma funcionalidade” ou “se mesclado, esse commit irá corrigir o CRUD de usuário”    

## :LiList: Corpo

O corpo é a parte da mensagem de commit que apresenta detalhes adicionais sobre as alterações feitas no código. Apesar de ser opcional, seu uso é altamente recomendado quando as alterações são muito complexas ou precisam de uma contextualização com mais detalhes sobre a implementação.

Assim, quando presente, deve fornecer informações suficientes para que os outros desenvolvedores possam entender o que foi alterado e quais as motivações para essas mudanças, comparando-as com o código anterior. Da mesma forma que a descrição, também deve ser escrito utilizando o imperativo.  

## :LiList: Rodapé

O rodapé também é uma parte opcional da mensagem de commit e adiciona informações sobre as alterações ocorridas. Geralmente, é colocado após o corpo da mensagem e é separado dele por uma linha em branco. É utilizado para incluir informações adicionais relacionadas a meta informações, como tarefas atreladas, números de ticket de suporte, links para relatórios de bugs ou outros recursos relacionados.

Além disso, pode conter uma seção crucial chamada BREAKING CHANGE para indicar mudanças que quebram a compatibilidade com o código anterior. Uma outra forma de indicar que o commit em questão apresenta breaking changes é a utilização de uma exclamação (!) após o tipo (ou escopo, se houver) do commit. Caso a exclamação seja utilizada, o commit deve conter um corpo para descrever as mudanças.