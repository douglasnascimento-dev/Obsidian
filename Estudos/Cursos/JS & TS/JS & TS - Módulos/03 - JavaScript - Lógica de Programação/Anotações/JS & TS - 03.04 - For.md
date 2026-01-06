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

![[JSTS.png|banner]]

> [!banner-icon] 🌿For( )
## 🌳For - Clássico
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

Acontece de modo semelhante a linguagem C. Necessita-se de três indicadores. É indicado usar a propriedade '.lenght' para determinar o tamanho de um array a ser iterado

--- column-break ---

```javascript
for (let i; i > array.lenght; i++){
	console.log( array[i] )
}
```

--- end-multi-column
### 🌿For In
--- start-multi-column: ID_j43h
```column-settings
Number of Columns: 3
Largest Column: standard
```

É usado exclusivamente para iterar algum array ou objeto. Não necessita da declaração do tamanho nem do incremento/decremento, apenas o índice e o array a ser explorado

--- column-break ---

```javascript
for(let i in array){
	console.log( array[i] )
}
```

--- column-break ---

```javascript
for(let i in objeto){
	console.log(`${i}: ${objeto[i]}`)
}
```

--- end-multi-column
### 🌿For Of
--- start-multi-column: ID_sazg
```column-settings
Number of Columns: 2
Largest Column: standard
```

É usado exclusivamente para iterar algum array, **não funciona com objetos**. Não necessita da declaração do tamanho nem do incremento/decremento, apenas o índice e o array a ser explorado. **Recebe diretamente o valor**, o índice não é obtido

--- column-break ---

```javascript
for(let value of array){
	console.log(value)
}
```

--- end-multi-column

