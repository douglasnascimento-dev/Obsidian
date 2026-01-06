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

![[JS - Lógica de Programação.png|banner]]
> [!banner-icon] 🌿Tratamento de Erros
## 🌳Try, Catch, Throw
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Bloco '**try**' deve ser utilizado em caso de manipulações/atitudes que pode gerar erros, o bloco '**catch**' é executado quando for detectado algum erro no bloco anterior, a var 'error' vai ter o valor do erro, isso é toda a documentação do erro que aconteceu.  

--- column-break ---

```javascript
try {
	console.log(var)  // A Variável não existe
} catch (error) {
	console.log(`Esse valor não existe`)
}
```

--- end-multi-column
### 🌿**Throw** - Lançando erros próprios
--- start-multi-column: ID_4g3n
```column-settings
Number of Columns: 2
Largest Column: standard
```

É possível lançar erros próprios. Por exemplo, em uma função só números podem ser aceitos, ao enviar um não número, é definido um erro próprio usando a expressão 'throw new ReferenceError('Nome do Erro')' isso devolvera um erro semelhante ao do JS nativo

--- column-break ---

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

--- end-multi-column
## 🌳Try, Catch e Finally
--- start-multi-column: ID_nxd8
```column-settings
Number of Columns: 2
Largest Column: standard
```

Além dos blocos 'try' e 'catch', também existe o bloco '**finally**' esse bloco final sempre será executado mesmo se não ocorrer algum erro. No exemplo ao lado, o 'finally' sempre permitira ao usuario fechar a aba.

--- column-break ---

```javascript
try {
	console.log(var)  // A Variável não existe
} catch (error) {
	console.log(`Esse valor não existe`)
} finally {
	consele.log('Fechar aba')
}
```

--- end-multi-column
