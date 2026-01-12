---
Tipo: Atividade
Início: 2026-01-09
Final: 2026-01-09
Conclusão: 2026-01-09
Status: true
Disciplina:
  - JS & TS - Módulo 17
---
# 🌳Exercícios Práticos (Consolidação)

Abaixo estão 5 novos desafios. O foco é interpretar o padrão do texto de entrada e transformar ou extrair os dados conforme a saída esperada.

## 🌿Desafio 1: Conversor de Imagens Markdown para HTML

Você está construindo um parser de blog. O redator escreve as imagens no formato Markdown `![Texto Alternativo](URL)`, mas o site precisa renderizar isso como uma tag HTML `<img src="URL" alt="Texto Alternativo" />`.

```js
const texto = "Aqui está uma foto do gato: ![Gato Fofo](img/gato.jpg) e aqui o cachorro: ![Cachorro](https://site.com/dog.png).";

// Construa a RegEx
const regExpImg = /.../g;

// Realize a substituição
// Dica de formato HTML: <img src="..." alt="..." />
console.log(texto.replace(regExpImg, '...'));

// Saída Esperada:
// Aqui está uma foto do gato: <img src="img/gato.jpg" alt="Gato Fofo" /> e aqui o cachorro: <img src="[https://site.com/dog.png](https://site.com/dog.png)" alt="Cachorro" />.
````

### 🎋Resolução

```js
const texto = "Aqui está uma foto do gato: ![Gato Fofo](img/gato.jpg) e aqui o cachorro: ![Cachorro](https://site.com/dog.png).";

// Construa a RegEx
const regExpImg = /\!\[(.*?)\]\((.*?)\)/g;

// Realize a substituição
console.log(texto.replace(regExpImg, '<img src="$2" alt="$1" />'));

// Saída Esperada:
// Aqui está uma foto do gato: <img src="img/gato.jpg" alt="Gato Fofo" /> e aqui o cachorro: <img src="[https://site.com/dog.png](https://site.com/dog.png)" alt="Cachorro" />.
```

## 🌿Desafio 2: Extração de Parâmetros de URL

Dada uma string de Query String (comum em URLs), extraia todos os pares de chave e valor. A string segue o padrão `chave=valor`, separados por `&`.

```js
const queryString = "produto=notebook&id=500&categoria=eletronicos&promo=true";

// Construa a RegEx para capturar as chaves e os valores separadamente
const regExpQuery = /.../g;

let match;
const params = {};

while ((match = regExpQuery.exec(queryString)) !== null) {
    // Armazene no objeto: params[chave] = valor
    // match[...]
}

console.log(params);

// Saída Esperada:
// { produto: 'notebook', id: '500', categoria: 'eletronicos', promo: 'true' }
```

### 🎋Resolução

```js
 const queryString = "produto=notebook&id=500&categoria=eletronicos&promo=true";

// Construa a RegEx para capturar as chaves e os valores separadamente
const regExpQuery = /(\w*)=(\w*)[^\W]?/g;

let match;
const params = {};

while ((match = regExpQuery.exec(queryString)) !== null) {
  params[match[1]] = match[2];
}

console.log(params);
```

## 🌿Desafio 3: Sanitização de Tags HTML

Um usuário tentou injetar tags HTML (`<div>`, `<script>`, `<b>`) em um campo de comentário que deveria ser apenas texto puro. Sua tarefa é remover qualquer tag HTML (conteúdo entre `<` e `>`), mantendo apenas o texto que está fora ou dentro delas.


```js
const comentario = "Olá! Eu <b>adorei</b> o post. <script>alert('hack')</script> Mas precisa ajustar a <div>cor</div>.";

// Construa a RegEx para encontrar as tags completas
const regExpTags = /.../g;

// Substitua as tags por uma string vazia
console.log(comentario.replace(regExpTags, ''));

// Saída Esperada:
// Olá! Eu adorei o post. alert('hack') Mas precisa ajustar a cor.
```

### 🎋Resolução

```js
const comentario = "Olá! Eu <b>adorei</b> o post. <script>alert('hack')</script> Mas precisa ajustar a <div>cor</div>.";

const regExpTags = /<.*?>/g;

console.log(comentario.replace(regExpTags, ''));
```

## 🌿Desafio 4: Formatação de Nomes Próprios

Temos uma lista de nomes digitados de forma errada (maiúsculas e minúsculas misturadas). O objetivo é padronizar para "Title Case" (apenas a primeira letra maiúscula e o resto minúscula).

```js
const nomesBaguncados = [
    "joÃO",
    "mARIA",
    "pEdRo hENRIQUE",
    "ANA cLARa"
];

// Construa a RegEx que identifique as palavras
const regExpNome = /.../g;

const nomesCorrigidos = nomesBaguncados.map(nome => {
    return nome.replace(regExpNome, function(match) {
        // Lógica para deixar a primeira Letra Maiúscula e o resto minúscula
        return ...
    });
});

console.log(nomesCorrigidos);

// Saída Esperada:
// [ 'João', 'Maria', 'Pedro Henrique', 'Ana Clara' ]
```

### 🎋Resolução

```js

```
## 🌿Desafio 5: Validador de Estrutura de Arquivo

Você precisa filtrar uma lista de caminhos de arquivos do Windows. O padrão válido deve ser: Letra da unidade (C, D, E...), dois pontos, contra-barra, nome da pasta (apenas letras), contra-barra, nome do arquivo e extensão.

JavaScript

```js
const caminhos = [
    "C:\\Users\\Documento.txt",      // Válido
    "D:\\Jogos\\Game.exe",           // Válido
    "c:\\users\\doc.txt",            // Inválido (Letra da unidade minúscula)
    "F:\\Dados\\Planilha",           // Inválido (Sem extensão)
    "Z:Arquivo.bat",                 // Inválido (Falta a pasta)
    "A:\\Pasta123\\arq.pdf"          // Inválido (Pasta tem números, só letras permitidas)
];

// Construa a RegEx para validar o padrão estrito descrito
const regExpPath = /.../g;

const validos = caminhos.filter(caminho => regExpPath.test(caminho));

console.log(validos);

// Saída Esperada:
// [ 'C:\\Users\\Documento.txt', 'D:\\Jogos\\Game.exe' ]
```

```js
const caminhos = [
    "C:\\Users\\Documento.txt",      // Válido
    "D:\\Jogos\\Game.exe",           // Válido
    "c:\\users\\doc.txt",            // Inválido (Letra da unidade minúscula)
    "F:\\Dados\\Planilha",           // Inválido (Sem extensão)
    "Z:Arquivo.bat",                 // Inválido (Falta a pasta)
    "A:\\Pasta123\\arq.pdf"          // Inválido (Pasta tem números, só letras permitidas)
];

// Construa a RegEx para validar o padrão estrito descrito
const regExpPath = /[A-Z]:((\\)[a-zA-Z]+){2}(\.)[a-z]+/;

const validos = caminhos.filter(caminho => regExpPath.test(caminho));
console.log(validos);
```