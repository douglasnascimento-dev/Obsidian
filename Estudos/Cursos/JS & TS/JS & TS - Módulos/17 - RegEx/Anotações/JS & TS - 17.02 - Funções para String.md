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

São funções nativas do tipo String, que permite a execução de expressões regulares. Diferentemente das anteriores, elas são executada a partir da String, e não mais tendo a String como parâmetro esperado.

## 🌿Funções 

```js
console.log(texto.match(regExp1));
```

Essa função retornará o mesmo objeto se caso fosse executada a Função '.exec()'. Entretanto, se caso a Expressão Regular enviando conter a Flag 'g' a função irá retornar apenas um Arrays, com todas as ocorrências da Expressão. 

## 🌿Replace

```js
const regExp01 = /(João|Joao)/gi;

console.log(text.replace(regExp01, 'Lipe'))
```

A Função '.replace()' é responsável por realizar trocas, recebendo como parâmetros, respectivamente, a expressão á ser procura e substituída e em seguida, a expressão que ocupará o lugar. Quando usada com o '|', o '.replace()' irá substituir qualquer valor encontrado, dentro do 'OR' indicado. 

## 🌿Replace com Grupos

```js
const regExp01 = /(João|Joao)/gi;

console.log(text.replace(regExp01, '---$1---')) 
```

Nesse caso, diferentemente do caso anterior, o '.replace()' não irá substituir um valor, mas sim, modificá-lo, no exemplo acima, "João" irá se tornar "---João---". Os grupos continuam a aumentar conforme o número de grupos na RegEx, sendo sempre enumerados de $1 > $2 > $3 > $n. 

## 🌿Replace com Funções

```js
const regExp01 = /(João|Joao)/gi;

console.log(text.replace(regExp01, function(input){
  return input.toUpperCase()
}))
```

Nesse caso, o '.replace()' irá executar uma Função em conjunto com a execução da Função. O Parâmetro pode ser nomeado de qualquer maneira. 