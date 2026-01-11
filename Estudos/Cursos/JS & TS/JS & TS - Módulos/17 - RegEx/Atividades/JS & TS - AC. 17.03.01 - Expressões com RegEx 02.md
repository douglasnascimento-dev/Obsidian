---
Tipo: Atividade
Início: 2026-01-09
Final: 2026-01-09
Conclusão: 2026-01-09
Status: true
Disciplina:
  - JS & TS - Módulo 17
---

# 🌳Exercícios Práticos (Aprofundamento)

Abaixo estão 5 desafios de nível intermediário para construção de Expressões Regulares.

## 🌿Desafio 1: Normalização de Datas Mistas

Recebemos um dump de dados onde as datas foram salvas em formatos variados (AAAA/MM/DD, DD-MM-AAAA ou DD.MM.AAAA). O sistema exige que todas sejam convertidas para o padrão brasileiro com barras `DD/MM/AAAA`.

```js
const entrada = `
O evento ocorrerá em 2024/05/12.
A data limite foi 15-04-2023.
O sistema atualizou em 01.12.2024.
`;

// Construa a RegEx
const regExpData = /.../g;

// Realize a substituição para o formato DD/MM/AAAA
console.log(entrada.replace(regExpData, '...'));

// Saída Esperada:
// O evento ocorrerá em 12/05/2024.
// A data limite foi 15/04/2023.
// O sistema atualizou em 01/12/2024.
````

## 🌿Desafio 2: Engine de Template Simples

Você está criando um sistema de templates simples. O texto contém variáveis entre chaves duplas `{{nomeDaVariavel}}`. Você deve substituir essas ocorrências pelos valores corretos fornecidos em um objeto, utilizando a função de callback do `replace`.


```js
const template = "Olá, {{usuario}}! Seu saldo é de {{valor}} reais. Atenciosamente, {{empresa}}.";

const dados = {
  usuario: "Lucas",
  valor: "150,00",
  empresa: "BankDev"
};

// Construa a RegEx para encontrar as variáveis no template
const regExpVar = /.../g;

const resultado = template.replace(regExpVar, function(match, grupo1) {
    // Lógica para retornar o valor do objeto 'dados'
    return ...
});

console.log(resultado);

// Saída Esperada:
// Olá, Lucas! Seu saldo é de 150,00 reais. Atenciosamente, BankDev.
```

## 🌿Desafio 3: Parser de Links Markdown

Dado um texto em formato Markdown, extraia apenas os nomes dos links e as URLs, ignorando o restante do texto. O formato de um link markdown é `[Nome do Link](URL)`. Note que podem existir múltiplos links na mesma linha.

```js
const textoMD = "Veja o [Google](https://google.com) ou pesquise no [Bing](https://bing.com).";

// Construa a RegEx
const regExpLinks = /.../g;

// Utilize exec ou matchall para iterar, ou match simples para ver as ocorrências
let match;
while ((match = regExpLinks.exec(textoMD)) !== null) {
  console.log(`Nome: ${match[1]}, URL: ${match[2]}`);
}

// Saída Esperada:
// Nome: Google, URL: [https://google.com](https://google.com)
// Nome: Bing, URL: [https://bing.com](https://bing.com)
```

## 🌿Desafio 4: Conversor CamelCase para snake_case

Temos uma lista de propriedades de um Objeto JavaScript em formato CamelCase (ex: `idUsuario`, `dataNascimento`) e precisamos convertê-las para snake_case (ex: `id_usuario`, `data_nascimento`) para salvar no banco de dados.


```js
const propriedades = [
  "idUsuario",
  "nomeCompleto",
  "dataDeNascimento",
  "enderecoResidencial"
];

const regExpCamel = /.../g;

const convertidos = propriedades.map(prop => {
  return prop.replace(regExpCamel, function(match) {
     // Lógica de conversão
     return ...
  });
});

console.log(convertidos);

// Saída Esperada:
// [ 'id_usuario', 'nome_completo', 'data_de_nascimento', 'endereco_residencial' ]
```

## 🌿Desafio 5: Mascaramento de Cartão de Crédito

Por segurança, precisamos mascarar números de cartão de crédito em um log, mantendo apenas os últimos 4 dígitos visíveis. O formato do cartão consiste em 4 blocos de 4 números, separados por espaço ou traço.


```js
const logPagamento = "Pagamento efetuado com o cartão 1234-5678-9012-3456 as 14h. Falha no cartão 9876 5432 1098 7654.";

// Construa a RegEx
const regExpCC = /.../g;

// Substitua os 3 primeiros blocos por ****
console.log(logPagamento.replace(regExpCC, '...'));

// Saída Esperada:
// Pagamento efetuado com o cartão ****-****-****-3456 as 14h. Falha no cartão **** **** **** 7654.
```