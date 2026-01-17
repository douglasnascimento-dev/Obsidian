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

> [!banner-icon] 🌿For( )
## 🌳For - Clássico

Acontece de modo semelhante a linguagem C. Necessita-se de três indicadores. É indicado usar a propriedade '.lenght' para determinar o tamanho de um array a ser iterado

```javascript
for (let i; i > array.lenght; i++){
	console.log( array[i] )
}
```

### 🌿For In

É usado exclusivamente para iterar algum array ou objeto. Não necessita da declaração do tamanho nem do incremento/decremento, apenas o índice e o array a ser explorado

```javascript
for(let i in array){
	console.log( array[i] )
}
```

```javascript
for(let i in objeto){
	console.log(`${i}: ${objeto[i]}`)
}
```


### 🌿For Of

É usado exclusivamente para iterar algum array, **não funciona com objetos**. Não necessita da declaração do tamanho nem do incremento/decremento, apenas o índice e o array a ser explorado. **Recebe diretamente o valor**, o índice não é obtido

```javascript
for(let value of array){
	console.log(value)
}
```



