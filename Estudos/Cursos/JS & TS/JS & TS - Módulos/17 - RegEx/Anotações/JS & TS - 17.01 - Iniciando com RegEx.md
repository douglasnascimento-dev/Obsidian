---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
---


![[JS & TS.png|banner]]
> [!banner-icon] Módulo 17

# 🌳O Que é?

O RegEx, em português, Expressões Regulares, é uma forma de extrair informações, e consequentemente, buscar e validar informações, através de padrões específicos definidos no texto. 

## 🌿Expressões Regulares em JS

```js
const regExp01 = /João/;
```

Essa é uma Expressão Regular Pura, sem nenhuma Flag. Ela sempre será iniciada e fechada usando as barras.

## 🌿Utilizando as RegExp

```js
console.log(regExp01.exec(texto))
console.log(regExp01.test(texto))
```

A Função '.test()' é mais simplificada e retorna apenas o valor booleano (false ou true). Já a Função '.exec()' retorna um Array com diversas informações em um Formato de Objeto, ou se não for encontrado é retornado apenas o valor 'Null'.

O Objeto retornado de '.exec()' contém nos índices respectivamente:
- **\[0]** | O Texto completo, se caso encontrado;
- **\[1] \[2] \[3] ... \[n]**  | São os Grupos de Captura, se caso houverem;
- **\.input** | O texto enviado e analisado pela expressão; e
- **.index** | A posição do texto encontrado.

## 🌿Flags

As Flags são adições ou modificações á Expressões Regulares. As Flags serão declarados após a Barra Final.


```js
const regExp01 = /João/gi;
```

- **g** | Global - Encontra todas as ocorrências, diferente do padrão em que se encontra apenas a primeira ocorrência.
- **i** | Insensitive Case - Ativa o Padrão de Insensitive Case, ou seja, não considera a Caixa da Expressão.

## 🌿Grupos

Os Grupos nas RegEx, delimitados por parênteses `( )`, servem para **tratar múltiplos caracteres como uma única unidade**. Isso permite que você aplique quantificadores a uma palavra inteira ou, principalmente, crie **Grupos de Captura** para extrair informações específicas separadamente no resultado final (como visto no retorno do `.exec()`). Quando você define grupos sequenciais, o RegEx busca exatamente aquela ordem de ocorrência.

```js
const regExp01 = /(futebol)(Brasil)/gi;
```

Neste exemplo, a expressão busca a palavra "futebol" seguida **imediatamente** pela palavra "Brasil".
- **Encontra:** "futebolBrasil"
- **Não encontra:** "futebol do Brasil" (pois há caracteres entre os grupos que não foram previstos na expressão).

## 🌿Ou

O Caractere '|' vai representar o Ou em RegEx. Ou seja, ele retornará verdadeiro, sempre que ao menos uma RegEx for encontrada. Semelhante ao comportamento 'OR'

```js
const regExp01 = /(futebol|vôlei|F1|basquete )(Brasil)/gi;
```