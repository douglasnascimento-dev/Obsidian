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
- **\[0]** | A Expressão pesquisada, se caso encontrada;
- **\[1]** | O Index, ou seja, qual a posição do caractere onde a expressão foi encontrada;
- **\[2]** | O Input, ou seja, o texto enviado e analisado pela expressão; e
- **\[3]** | Os Grupos.

## 🌿Flags

As Flags são adições ou modificações á Expressões Regulares. As Flags serão declarados após a Barra Final.


```js
const regExp01 = /João/gi;
```

- **g** | Global - Encontra todas as ocorrências, diferente do padrão em que se encontra apenas a primeira ocorrência.
- **i** | Insensitive Case - Ativa o Padrão de Insensitive Case, ou seja, não considera a Caixa da Expressão.

## 🌿Grupos

Os Grupos nas RegEx's indica que todos as RegExp's em formato de Grupo. Não necessariamente, esses valores precisam estar juntos um ao outro. Atuando como um Comparador semelhante a 'AND'.

```js
const regExp01 = /(futebol)(Brasil)/gi;
```

## 🌿Ou

O Caractere '|' vai representar o Ou em RegEx. Ou seja, ele retornará verdadeiro, sempre que ao menos uma RegEx for encontrada. Semelhante ao comportamento 'OR'

```js
const regExp01 = /(futebol|vôlei|F1|basquete )(Brasil)/gi;
```