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
> [!banner-icon] 🌿Objetos
## 🌳Objeto Literal
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Objeto pode ser entendido como uma variável de múltiplos campos distintos, ou então um vetor não homogêneo, é declarado através de um 'const' e pode possuir diversos campos, que obrigatoriamente devem estar separados por virgulas.

--- column-break ---

```javascript
const alunos2024 = {
	nome: 'Léo',
	sobrenome: 'Rodriguez',
	anoNascimento: 2004,
}
```

--- end-multi-column
### 🌿Usando uma função construtora
--- start-multi-column: ID_uwvk
```column-settings
Number of Columns: 2
Largest Column: standard
```

É comum observar a construção de objetos através de funções, que levam o nome de 'constructor', ela terão que possuir os mesmos parâmetros que o objeto. Atualmente, possuem uma declaração facilitada, é possível criar a função e já retornar os campos apenas com a redeclaração.

--- column-break ---

```javascript
function criarObjeto (nome, sobrenome, anoNascimento){
	return {nome, sobrenome, anoNascimento}
}

const alunos2024 = criarObjeto("Léo", "Rodriguez", 2004)
```

--- end-multi-column
### 🌿Métodos em JS
--- start-multi-column: ID_jddn
```column-settings
Number of Columns: 2
Largest Column: standard
```

Métodos, podem ser entendidos como funções dentro de objetos, e são comumente utilizados para alterações no próprio objeto que estão presentes. São declaradas sem o uso da palavra 'function', normalmente durante a declaração de algum variável em seu interior é utilizado o pré-fixo 'this', que apontará para a variável presente naquele contexto, e não as variáveis em demais escopos.

--- column-break ---

```javascript
const alunos2024 = {
	nome: 'Léo',
	anoNascimento: 2004,
	
	apresentacao(){
		console.log(`O Meu nome é ${this.nome} e eu nasci em ${this.anoNascimento}`)
	}}

alunos2024.apresentacao()
```

--- end-multi-column

























































































































































































































































