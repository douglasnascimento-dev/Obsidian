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
> [!banner-icon] 🌿Parâmetros
## 🌳Argumentos sem Parâmetros
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

Ao passar argumentos para uma função, mesma que ela não esteja esperando parâmetros, ele ficarão salvas em uma variável *arguments*, ela só funciona em funções com a declaração da palavra *function* com a declaração normal e anônima, mas não funciona na arrow function 

--- column-break ---

```javascript
function soma() {
	soma = arguments[0] + arguments[1] // 3
}

soma(1, 2) //Observe que não há parâmetros esperados
```

--- end-multi-column
### 🌿Argumentos vazios
--- start-multi-column: ID_gugl
```column-settings
Number of Columns: 2
Largest Column: standard
```

Em ocasiões em que se é necessário o envio de algum parâmetro vazio, para posteriormente assumir o valor padrão, isso pode ser feito utilizando o valor *undefined* . No caso ao lado, o total será 13, já que ele recebe 10 da var b e o valor padrão de 3 da var a

--- column-break ---

```javascript
function soma(a = 3, b = 5){
	total = a + b // 13
}

soma(undefined, 10)
```

--- end-multi-column
### 🌿Parâmetro de resto
--- start-multi-column: ID_v01v
```column-settings
Number of Columns: 2
Largest Column: standard
```

Assim como nas atribuições por desestruturação, também é possível atribuir o resto para uma variável, nesse caso o resto dos parâmetro, para isso se deve utilizar o operador de resto *...var*

--- column-break ---

```javascript
function soma (a, ...resto){
	console.log(a, resto) // 10, [20, 30, 40]
} 

soma(10, 20, 30, 40)
```

--- end-multi-column



