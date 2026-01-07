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
> [!banner-icon] 🌿Funções
## 🌳Declarações de Função

Atualmente, se pode declarar uma função de três diferentes maneiras em JS:

### 🌿Declaração típica
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

A Declaração típica, é a padrão do JS, onde se declarar o 'function' e o seu respectivo nome, recebe os parâmetros através dos parênteses e abre colchetes para a declaração do conteúdo da função. 

--- column-break ---

```javascript
function soma (x, y) {
	let resultado
	resultado = x + y
	
	return resultado
}
```
--- end-multi-column
### 🌿Declaração Anônima
--- start-multi-column: ID_amc4
```column-settings
Number of Columns: 2
Largest Column: standard
```

Acontece quando uma função é declarada dentro de uma variável ou constante. A Sua estrutura é semelhante a função de declaração típica, mudando apenas que seu nome é definido pela variável na pela estrutura 'function'

--- column-break ---

```javascript
const soma = function (x, y) {
	let resultado
	resultado = x + y

	return resultado
}
```

--- end-multi-column
### 🌿Arrow Function
--- start-multi-column: ID_l4j0
```column-settings
Number of Columns: 3
Largest Column: standard
```

Leva esse nome, pelo símbolo usado em sua declaração ( => ), que se assemelha ao de uma flecha. Para essa declaração não é necessário a declaração de 'function'. Quando a função houver apenas uma linha, sua declaração pode ser simplificada, suprimindo os parênteses do parâmetros, as chaves e a linha de 'return'

--- column-break ---

```javascript
// Mais de uma linha
const soma =  (x, y) => {
	let resultado
	resultado = x + y

	return resultado
}
```

--- column-break ---


```javascript
// Apenas uma linha
const raiz = () =>  x ** 0.5 
```

--- end-multi-column




