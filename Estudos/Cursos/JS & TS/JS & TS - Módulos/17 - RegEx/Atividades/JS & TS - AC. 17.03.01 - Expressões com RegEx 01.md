


# 🌳Exercícios Práticos (Construção)

Abaixo estão 5 desafios para construir Expressões Regulares. O objetivo não é apenas encontrar o "match", mas pensar em como capturar grupos para substituição ou validar padrões flexíveis.

## 🌿Desafio 1: Padronização de CPFs (Grupos + Replace)

Recebemos uma lista de CPFs vinda de um banco de dados legado onde apenas os números foram salvos. O objetivo é formatar a string para o padrão `XXX.XXX.XXX-XX`.

**Requisito:** Você deve usar 4 grupos de captura.

```js
const cpfs = `
12345678900
98765432111
11122233344
`;

// Construa a RegEx para capturar os blocos de números
const regExpCPF = /.../g; 

// No replace, use os grupos ($1, $2...) para adicionar os pontos e traço
console.log(cpfs.replace(regExpCPF, '...'));
````

## 🌿Desafio 2: Limpeza de Logs (Quantificadores + Flags)

Temos um log de sistema onde o nível de alerta (INFO, ERROR, WARN) aparece repetido várias vezes por erro de digitação do desenvolvedor anterior (ex: "ERRORERROR" ou "INFOINFOINFO"). Precisamos normalizar para aparecer apenas uma vez.

**Requisito:** Use quantificadores para identificar repetições da mesma palavra específica.

JavaScript

```js
const logs = `
[INFOINFO] Sistema iniciado.
[ERROR] Falha na conexão.
[WARNWARNWARN] Uso de memória alto.
[ERRORERROR] Tentativa de invasão.
`;

// Construa uma RegEx que identifique as palavras repetidas (INFO, WARN ou ERROR)
const regExpLogs = /.../g;

console.log(logs.replace(regExpLogs, '...')); 
// Resultado esperado: [INFO], [ERROR], [WARN]...
```

## 🌿Desafio 3: Extração de Versões (Opcionais e Escape)

Você precisa encontrar todas as menções a versões de software em um texto. O problema é que algumas versões têm "patch" (v1.0.1) e outras não (v2.0). A regex deve pegar ambas.

**Requisito:** O terceiro número (o patch) deve ser opcional usando `?` e grupos. Cuidado com o caractere Ponto!

JavaScript

```js
const texto = "A versão v1.2 é estável, mas a v2.0.4 tem bugs. Evite a v1.0.";

// Deve dar match em: "v1.2", "v2.0.4" e "v1.0"
const regExpVersao = /.../g;

console.log(texto.match(regExpVersao));
```

## 🌿Desafio 4: Higienização de Preços (Replace com Função)

Um usuário digitou preços em um formulário, mas misturou formatos (R$ 10,00 e apenas 10,00). Precisamos remover o "R$" e os espaços extras para salvar no banco apenas o número (10,00).

**Requisito:** Identifique o "R$" e espaços como um grupo opcional que será descartado na substituição.

JavaScript

```js
const entrada = "O valor é R$ 50,00, mas com desconto fica 45,00. O frete é R$  12,50";

// A RegEx deve encontrar o padrão completo (com ou sem R$)
const regExpPreco = /.../g;

// Substitua por apenas o valor numérico (pode usar $1, $2 ou função de callback)
console.log(entrada.replace(regExpPreco, '...'));
```

## 🌿Desafio 5: Validação de Arquivos Proibidos (Quantificadores de Intervalo)

Um sistema de upload não permite arquivos executáveis (`.exe`, `.bat`, `.sh`) ou scripts perigosos. Porém, alguns usuários tentam burlar enviando `.ExE` ou `.bAt`.

**Requisito:** Crie uma RegEx Case Insensitive que encontre esses arquivos. Além disso, a extensão deve ter entre 2 e 3 caracteres, não mais que isso.

JavaScript

```js
const arquivos = "foto.png, virus.exe, script.sh, notas.txt, jogo.BAT, codigo.js";

// Deve encontrar: virus.exe, script.sh, jogo.BAT, codigo.js
// Não deve encontrar: foto.png, notas.txt
const regExpPerigo = /.../g;

console.log(arquivos.match(regExpPerigo));
```