---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌿Métodos Úteis

## 🌳Operador Spread para Objetos
--- start-multi-column: ID_18nb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O operador spread (...) permite copiar as propriedades de um objeto para outro de maneira rápida e eficiente, criando um novo objeto com as propriedades do original e adicionando ou sobrescrevendo propriedades conforme necessário.

--- column-break ---


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

--- end-multi-column
### 🌿 Object.keys()
--- start-multi-column: ID_6gdq
```column-settings
Number of Columns: 2
Largest Column: standard
```


O método Object.keys(objeto) retorna um array com as chaves (propriedades) do objeto especificado. Esse método é útil para iterar sobre as propriedades do objeto ou para verificar quais chaves ele possui.

--- column-break ---

```javascript
console.log(Object.keys(produto)); // Saída: ["nome", "preco"]`
```

--- end-multi-column

### 🌿Object.values()
--- start-multi-column: ID_u3jc
```column-settings
Number of Columns: 2
Largest Column: standard
```

O método Object.values(objeto) retorna um array com os valores das propriedades de um objeto. Esse método é útil para acessar rapidamente os valores sem se preocupar com as chaves.

--- column-break ---

```javascript
console.log(Object.values(produto)); // Saída: ["Caneca", 2.5]
```

--- end-multi-column
### 🌿Object.entries()
--- start-multi-column: ID_ziyu
```column-settings
Number of Columns: 2
Largest Column: standard
```

O método Object.entries(objeto) retorna um array de arrays, onde cada sub-array contém uma chave e o valor correspondente.  Esse método é muito usado em iterações para trabalhar simultaneamente com chaves e valores.

--- column-break ---

```javascript
console.log(Object.entries(produto)); // Saída: [["nome", "Caneca"], ["preco", 2.5]]`
```

--- end-multi-column
### 🌿 Proteção com 'Object.freeze'`
--- start-multi-column: ID_f7u6
```column-settings
Number of Columns: 2
Largest Column: standard
```


O métodoObject.freeze(objeto) impede qualquer modificação no objeto, tornando-o imutável. Essa abordagem é útil para proteger objetos que não devem ser alterados, especialmente em configurações ou constantes globais.

--- column-break ---

```javascript
Object.freeze(outraCoisa); // Qualquer tentativa de alterar o objeto será ignorada ou gerará erro em modo estrito.
outraCoisa.material = "vidro";
console.log(outraCoisa.material); // Saída: "porcelana"
```

--- end-multi-column
### 🌿 Visualizando Configurações de Propriedades comObject.getOwnPropertyDescriptor`
--- start-multi-column: ID_hi13
```column-settings
Number of Columns: 2
Largest Column: standard
```

O métodoObject.getOwnPropertyDescriptor(objeto, propriedade)retorna as configurações da propriedade especificada, comowritable, enumerable e configurable. Esse método é usado para inspecionar ou debugar propriedades específicas de um objeto.

--- column-break ---

```javascript
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 
/* Saída: { value: "Caneca", 
		writable: true, 
		enumerable: true, 
		configurable: true }
```

--- end-multi-column













