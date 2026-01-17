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
> [!banner-icon] 🌿Numbers
### 🌿 Variáveis 'numbers' para 'strings'

É possivel transformar um número em string utilizando a função 'toString()' associado a uma variável do tipo 'number'. Ao somar a variável com outra ela irá concatenar ao invés de somar, como o usual.

```javascript
let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2) // 12.5
```

### 🌿Variáveis 'numbers' para 'strings' binárias

Também é possível transformar um número em strings binárias utilizando a função 'toString(2)' associando a uma variável do tipo 'number'. Ao final ela resultará na versão binária do numero original.

```javascript
let num1 = 10;

console.log(num1.toString(2)) // 1010
```

### 🌿Fixando casas decimais

Nas situações em que se é necessário definir um número máximo de casas decimais em números com ponto flutuante, se deve utilizar a função 'toFixed()', onde no interior dos parênteses deve ser definido o número de casas.

```javascript
let num1 = 10.5413267;

console.log(num1.toFixed(2)) // 10.54
```

### 🌿Verificação de número inteiro

Em JS é possível determinar se um determinado número é inteiro ou não, para isso se utilizar a função 'Number.isInteger()', o número a ser verificado deve estar entre os parênteses, que retornará um valor booleano (true ou false).

```javascript
let num1 = 10;

console.log(Number.isInteger(num1)) // true
```

```javascript
let num1 = 10.50;

console.log(Number.isInteger(num1)) // false
```

### 🌿Verificação da validade de um número

Além de verificar o tipo de um número, também é possível verificar se esse número é valido ou não, como acontece nos casos (NAN - Not a Number). Para isso, se deve utilizar a função 'Number.isNAN()', no interior do parênteses deve estar a variável a ser verificada. A função irá retornar um valor booleano (true ou false). **Observe que ele irá retornar 'true' quando o número for um NAN.**

```javascript
let num1 = 10 * 'Olá';

console.log(Number.isNAN(num1)) // true
```

```javascript
let num1 = 10 * '5';

console.log(Number.isNan(num1)) // false
```

#### 🌱Imprecisão em JS

Ao realizar operações com números que possuem casas decimais em JS, é possível observar que esse números vão apresentar pequenas imprecisões, dessa maneira, é possível neutralizar esses erros, utilizando a função 'Number' ou 'parseFloat' junto com a função 'toFixed()'

```javascript
let num1 = 0.1
let num2 = 0.7

console.log(num1 + num2) //0.79999999999
```

```javascript
let num1 = 0.1
let num2 = 0.7

let num = Number(num1 + num2).toFixed(2)

console.log(num) //0.8
```


