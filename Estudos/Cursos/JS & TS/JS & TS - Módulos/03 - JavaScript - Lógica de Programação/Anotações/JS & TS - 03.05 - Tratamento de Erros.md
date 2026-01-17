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
> [!banner-icon] 🌿Tratamento de Erros
## 🌳Try, Catch, Throw

O Bloco '**try**' deve ser utilizado em caso de manipulações/atitudes que pode gerar erros, o bloco '**catch**' é executado quando for detectado algum erro no bloco anterior, a var 'error' vai ter o valor do erro, isso é toda a documentação do erro que aconteceu.  

```javascript
try {
	console.log(var)  // A Variável não existe
} catch (error) {
	console.log(`Esse valor não existe`)
}
```


### 🌿**Throw** - Lançando erros próprios

```column-settings
Number of Columns: 2
Largest Column: standard
```

É possível lançar erros próprios. Por exemplo, em uma função só números podem ser aceitos, ao enviar um não número, é definido um erro próprio usando a expressão 'throw new ReferenceError('Nome do Erro')' isso devolvera um erro semelhante ao do JS nativo



```javascript
function soma(x, y){
	if (typeof x !== 'number' || typeof x !== 'number){
		throw new RefereneError('x e y precisam ser números')
	}
	return x + y
}

try {
	console.log(soma('a' + 1))
}
```


## 🌳Try, Catch e Finally

```column-settings
Number of Columns: 2
Largest Column: standard
```

Além dos blocos 'try' e 'catch', também existe o bloco '**finally**' esse bloco final sempre será executado mesmo se não ocorrer algum erro. No exemplo ao lado, o 'finally' sempre permitira ao usuario fechar a aba.



```javascript
try {
	console.log(var)  // A Variável não existe
} catch (error) {
	console.log(`Esse valor não existe`)
} finally {
	consele.log('Fechar aba')
}
```


