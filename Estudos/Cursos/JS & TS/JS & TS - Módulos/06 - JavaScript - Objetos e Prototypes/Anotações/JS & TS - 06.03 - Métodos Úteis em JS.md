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
> [!banner-icon] 🌿Métodos Úteis

## 🌳Operador Spread para Objetos

```column-settings
Number of Columns: 2
Largest Column: standard
```

O operador spread (...) permite copiar as propriedades de um objeto para outro de maneira rápida e eficiente, criando um novo objeto com as propriedades do original e adicionando ou sobrescrevendo propriedades conforme necessário.




```javascript
const produto = {
    nome: "Caneca",
    preco: 2.5,
};

const outraCoisa = {
    ...produto, // Copia todas as propriedades deproduto`
    material: "porcelana" // Adiciona uma nova propriedade
};
console.log(outraCoisa);
// Saída: { nome: "Caneca", preco: 2.5, material: "porcelana" }
```


### 🌿 Object.keys()

```column-settings
Number of Columns: 2
Largest Column: standard
```


O método Object.keys(objeto) retorna um array com as chaves (propriedades) do objeto especificado. Esse método é útil para iterar sobre as propriedades do objeto ou para verificar quais chaves ele possui.



```javascript
console.log(Object.keys(produto)); // Saída: ["nome", "preco"]`
```



### 🌿Object.values()

```column-settings
Number of Columns: 2
Largest Column: standard
```

O método Object.values(objeto) retorna um array com os valores das propriedades de um objeto. Esse método é útil para acessar rapidamente os valores sem se preocupar com as chaves.



```javascript
console.log(Object.values(produto)); // Saída: ["Caneca", 2.5]
```


### 🌿Object.entries()

```column-settings
Number of Columns: 2
Largest Column: standard
```

O método Object.entries(objeto) retorna um array de arrays, onde cada sub-array contém uma chave e o valor correspondente.  Esse método é muito usado em iterações para trabalhar simultaneamente com chaves e valores.



```javascript
console.log(Object.entries(produto)); // Saída: [["nome", "Caneca"], ["preco", 2.5]]`
```


### 🌿 Proteção com 'Object.freeze'`

```column-settings
Number of Columns: 2
Largest Column: standard
```


O métodoObject.freeze(objeto) impede qualquer modificação no objeto, tornando-o imutável. Essa abordagem é útil para proteger objetos que não devem ser alterados, especialmente em configurações ou constantes globais.



```javascript
Object.freeze(outraCoisa); // Qualquer tentativa de alterar o objeto será ignorada ou gerará erro em modo estrito.
outraCoisa.material = "vidro";
console.log(outraCoisa.material); // Saída: "porcelana"
```


### 🌿 Visualizando Configurações de Propriedades comObject.getOwnPropertyDescriptor`

```column-settings
Number of Columns: 2
Largest Column: standard
```

O métodoObject.getOwnPropertyDescriptor(objeto, propriedade)retorna as configurações da propriedade especificada, comowritable, enumerable e configurable. Esse método é usado para inspecionar ou debugar propriedades específicas de um objeto.



```javascript
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 
/* Saída: { value: "Caneca", 
		writable: true, 
		enumerable: true, 
		configurable: true }
```















