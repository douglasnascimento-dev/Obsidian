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
![[Capa - JS - Objetos e Prototypes.png|banner]]

> [!banner-icon] 🌹

## 🌹Operações com Objetos 

--- start-multi-column: ID_opf1
```column-settings
Number of Columns: 2   
Largest Column: standard
```

Com JavaScript, é possível realizar diversas operações com objetos. Abaixo estão as principais, aplicadas ao contexto da Fórmula 1:

1. **Copiar um objeto**:
    - Usando o _spread operator_  ("...") ou `Object.assign()`.
2. **Mostrar as chaves**:
    - Usando `Object.keys()` para obter uma lista das propriedades.
3. **Mostrar os valores**:
    - Usando `Object.values()` para listar os valores associados às chaves.
4. **Mostrar chaves e valores como arrays**:
    - Usando `Object.entries()` para obter pares de chave-valor em arrays.
5. **Congelar um objeto**:
    - Usando `Object.freeze()` para impedir alterações.
6. **Obter as propriedades de um atributo**:
    - Usando `Object.getOwnPropertyDescriptor()`.

--- column-break ---

```javascript

const piloto = {  
    nome: "Lewis Hamilton",  
    equipe: "Mercedes",  
    vitorias: 103  
};  

// Copiar o objeto  
const copiaPiloto = { ...piloto };  
const copiaPiloto2 = Object.assign({}, piloto);  

// Mostrar as chaves  
console.log(Object.keys(piloto)); // ["nome", "equipe", "vitorias"]  

// Mostrar os valores  
console.log(Object.values(piloto)); // ["Lewis Hamilton", "Mercedes", 103]  

// Mostrar chaves e valores em arrays  
console.log(Object.entries(piloto));  
// [["nome", "Lewis Hamilton"], ["equipe", "Mercedes"], ["vitorias", 103]]  

// Congelar o objeto  
Object.freeze(piloto);  
piloto.equipe = "Ferrari"; // Não será alterado  

// Obter propriedades de um atributo  
console.log(Object.getOwnPropertyDescriptor(piloto, "nome"));  
/*  
{  
  value: "Lewis Hamilton",  
  writable: true,  
  enumerable: true,  
  configurable: true  
}  
*/  
```
--- end-multi-column