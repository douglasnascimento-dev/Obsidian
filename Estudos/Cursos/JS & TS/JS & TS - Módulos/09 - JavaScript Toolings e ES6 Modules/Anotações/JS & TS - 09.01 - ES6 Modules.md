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
> [!banner-icon] 🌿Modules
## 🌳Modules ES6

Os Módulos em JS são arquivos diferentes que possuem a possibilidade de se integrarem, isso permite a fatoração de um código e a reutilização de bloco/módulos em diferentes aplicações. Existem alguns tipos de módulos, entre eles o implementado pelo EcmaScript 06 (ES6).

### 🌿Utilizando Módulos ES6


```column-settings
Number of Columns: 3
Largest Column: standard
```

Para utilizar módulos ES6, utilizamos as palavras-chave 'export' e 'import'. Um módulo pode exportar valores individuais ou um conjunto de funcionalidades que podem ser importadas por outros arquivos JavaScript. 



```javascript
// modulo01.js
export function saudacao(nome) {
    return `Olá, ${nome}!`;
}

export default const PI = 3.1415;
```



```javascript
// main.js
import { saudacao, PI } from "./modulo01.js";
import qualquerNome from ";/modulo01.js";

console.log(saudacao("Maria")); // Olá, Maria!
console.log(`O valor de PI é ${PI}`); // O valor de PI é 3.1415
```



### 🌿Exportando e Importando Arquivos



```column-settings
Number of Columns: 3
Largest Column: standard
```

Existem diversas maneiras de exportar/importar um módulo ES6. É possível exportar todos os componentes de uma vez, assim como exportar no momento da declaração da função/classe/variável. Também é possível definir uma única exportação como o padrão utilizando a palavra 'default', isso permite que se utilize qualquer nome no momento da importação.



```javascript
// utils.js
export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}

export default function multiplicacao(a, b) {
    return a * b;
}
```



```javascript
// app.js
import mult, { soma as add, subtracao } from "./utils.js";

console.log(add(5, 3)); // 8
console.log(subtracao(5, 3)); // 2
console.log(mult(5, 3)); // 15
```



#### 🌱Uso de Alias

Ao importar módulos, podemos renomeá-los utilizando a palavra-chave 'as'. Isso é útil para evitar conflitos de nomes ou para tornar o código mais legível. No exemplo acima, renomeamos soma para add, permitindo um nome mais claro para a operação de adição sem alterar a exportação original do módulo

