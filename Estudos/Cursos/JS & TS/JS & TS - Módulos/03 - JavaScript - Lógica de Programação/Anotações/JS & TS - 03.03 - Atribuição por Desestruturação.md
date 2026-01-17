---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Atividades: []
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌿Desestruturação
## 🌳Atribuição por desestruturação em Arrays

Acontece quando extraímos dados de um array e os enviamos para diferentes variáveis. Pode ser usado de diferentes formas e com diferentes objetivos, como no exemplo ao lado:

```javascript
let notas = [10, 7.5, 7.2, 9.4, 8.1, 6.9];

let [notaAluno01, notaAluno02] = notas;
console.log(notaAluno01, notaAluno02); // 10, 7.5
```

### 🌿O Resto da Atribuição

Também é possível obter os valores não atribuídos a nenhuma variável, para isso usamos o operador de resto (...) juntamente com alguma variável, que normalmente leva o nome de resto

```javascript
let notas = [10, 7.5, 7.2, 9.4, 8.1, 6.9];

let [notaAluno01, notaAluno02, ...resto] = notas;
console.log(resto); // [7.2, 9.4, 8.1, 6.9]
```

### 🌿Pular índices 

É possível pular índices no momento da atribuição, por exemplo, em situações aonde apenas valores impares devem ser atribuídos, para isso, se deve apenas deixar sem variável e seguir para a próxima atribuição

```javascript
let notas = [10, 7.5, 7.2, 9.4, 8.1, 6.9];

let [notaAluno01,  , notaAluno03] = notas;
console.log(notaAluno01, notaAluno03); // 10, 7.2
```

### 🌿Definindo um valor padrão

É possível definir um valor padrão, no caso de não existir um campo selecionado, para isso, o nome da variável deve vir acompanhado de um sinal de atribuição e conteúdo do valor padrão

```javascript
let notas = [10, 7.5, 7.2, 9.4, 8.1, 6.9];

let [  ,  ,  ,  ,  ,  ,  ,  ,  notaFim = 0.0] = notas;
console.log(notaFim); // 0
```

### 🌿Arrays dentro de Arrays

Em uma determinada situação em que se há um array dentro de outro array, também é possível utilizar a atribuição por desestruturação, mas se deve ter cuidado em relação aos índices do vetor. Observe que para não acessar os dois primeiros arrays, se deixa o espaço em branco e no último se acessa o array, e também pula o índice em que não se quer acessar

```javascript
let notas = [[10, 7.5],  [7.2, 9.4], [8.1, 6.9]];

let [  ,  , [  , notaUltimo]] = notas;
console.log(notaUltimo); // 6.9
```

## 🌳Atribuição por desestruturação em Objetos

Acontece de forma quase semelhante a atribuição em arrays, mas os nome das variáveis devem ser semelhantes aos nomes dos campos, e os colchetes se tornam chaves.

```javascript
let pessoa = {
	nome: 'Douglas';
	sobrenome: 'Nascimento';
	nascimento: {
		ano: 2006
		mes: 09
		dia: 01
	}
}

let {sobrenome} = pessoa;
console.log(sobrenome); // Nascimento
```

### 🌿Mudando o nome de um campo

Se em determinado ocasião for preciso alterar o nome de um campo durante a atribuição, isso deve ser feito da seguinte maneiro, o nome do campo original seguido de dois pontos e o novo nome, que será a variável criada. **Atenção**: com isso a variável nome não será criada e não poderá ser usada

```javascript
let pessoa = {
	nome: 'Douglas';
	sobrenome: 'Nascimento';
	nascimento: {
		ano: 2006
		mes: 09
		dia: 01
	}
}

let {nome: name} = pessoa;
console.log(name); // Douglas
```

### 🌿Objeto dentro de Objeto

Assim como acontece em arrays, também é possível acessar um objeto dentro de outro objeto, para isso se deve usar o nome do campo seguido de dois pontos e em seguida atribuir as variáveis que estão dentro do campo selecionado anteriormente, como no exemplo ao lado. **Atenção**: Dessa forma, não será criada um variável nascimento, apenas uma com o ano e outra com o mes

```javascript
let pessoa = {
	nome: 'Douglas';
	sobrenome: 'Nascimento';
	nascimento: {
		ano: 2006
		mes: 09
		dia: 01
	}
}

let {nascimento: {ano, mes}} = pessoa;
console.log(ano, mes); // 2006, 09
```





