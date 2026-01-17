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
> [!banner-icon] 🌿NPM Modules
## 🌳NPM Modules

O Node.js utiliza o sistema de módulos CommonJS para organizar e reutilizar código. Os módulos permitem dividir um programa em arquivos menores e reutilizáveis. Para isso, usamos as funções 'require()' para importar e 'module.exports' para exportar valores.

### 🌿 Exportando e Importando Módulos


```column-settings
Number of Columns: 3
Largest Column: standard
```

Os módulos podem exportar variáveis, funções e classes utilizando 'module.exports' ou 'exports'. Para importar, usamos 'require()'. Além de também ser possível utilizar o 'this', onde o escopo for o próprio arquivo.No exemplo abaixo, criamos um módulo que exporta um nome e uma função para retornar o nome completo.



```javascript
// mod.js
const nome = "Douglas";
const sobrenome = "Nascimento";

const nomeCompleto = () => {
  return '${nome} ${sobrenome}';
};

module.exports.nome = nome
exports.sobrenome = sobrenome
this.nomeCompleto = nomeCompleto
```



```javascript
// app.js
const mod = require("./mod.js");
console.log(mod.nomeCompleto()); // Douglas Nascimento

const { nome, sobrenome } = require("./mod.js");
console.log(nome, sobrenome); // Douglas Nascimento
```


### 🌿 Exportando Classes e Objetos


```column-settings
Number of Columns: 3
Largest Column: standard
```

Podemos exportar classes da mesma forma que exportamos funções e variáveis. No exemplo abaixo, exportamos uma classe 'Pessoa' e a utilizamos em outro arquivo.



```javascript
// mod2.js
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

module.exports = { Pessoa };
```



```javascript
// app.js
const { Pessoa } = require("./mod2.js");
const p1 = new Pessoa("Dgas");
console.log(p1); // Pessoa { nome: 'Dgas' }
```



### 🌿 Sobrescrevendo module.exports

```column-settings
Number of Columns: 2
Largest Column: standard
```

Se atribuirmos um novo objeto a 'module.exports', substituímos todos os valores anteriores. No exemplo abaixo, todos os exports anteriores são perdidos, e apenas 'nome1', 'nome2' e 'nome3' serão exportados:



```javascript
let nome1 = "Giovinazzi";
let nome2 = "Fuoco";
let nome3 = "Kubtiza";

module.exports = { nome1, nome2, nome3 };
console.log(module.exports);
```


### 🌿Valores Padrão em NPM Modules

```column-settings
Number of Columns: 3
Largest Column: standard
```

Assim como nos Modulos ES6, também é possível exportar valores padrão, 'default', com os módulos NPM, para isso é necessário atribuir o valor direto a função sem usar um 'nome'. Observe no exemplo ao lado, o uso de uma função anônima como 'default'



```javascript
// mod.js
module.exports = function (x, y) {
  return x * y;
};
```



```javascript
// app.js
const multiplicação = require('./mod')
console.log(multiplicação(2, 5)) // 10
```






