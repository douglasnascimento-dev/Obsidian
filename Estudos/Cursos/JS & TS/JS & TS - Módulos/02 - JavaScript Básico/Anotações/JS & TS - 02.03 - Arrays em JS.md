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
> [!banner-icon] 🌿Arrays
## 🌳Arrays em JS

As 'Arrays', também conhecidas como lista ou vetores em outras linguagens, são basicamente variáveis que comportam mais de um valor. Em seu interior os itens estão indexados em valores que iniciam em 0 e prossegue até o final, como no exemplo ao lado:



```javascript
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe']
							//         0           1             2          3          4
```


### 🌿Definindo o tamanho de um Array

Pode-se definir o tamanho de um Array em JS, através da função '.length()', **observe que será retornado o tamanho do Array e não a ultima posição, que será um número menor**, já que a contagem de casas inicia-se em 0.

```javascript
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.lenght() == 5
```

### 🌿Alterando o último elemento de um Array

#### 🌱 Inserindo um último elemento


Quando é preciso inserir um novo elemento na última posição de um Array, podemos utilizar a função '.push()'. Note que o item que será inserido deve estar como parâmetro para a função

```javascript
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.push('André') 

let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe', 'André'] 
```

#### 🌱 Removendo o último elemento

Já quando é necessário remover o último elemento de uma lista, utilizamos o a função '.pop'. Note que para remover o elemento não é necessário enviar nenhum paramento a função

```javascript
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.pop() 

let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor'] 
```
### 🌿Alterando o primeiro elemento de um Array

#### 🌱 Inserindo um elemento no inicio

Quando se quer inserir um elemento no inicio de um vetor, podemos usar a função '.unshift()'. Note que isso alterará todos os índices do vetor, uma vez que o novo elemento ocupará a posição 0 e as demais ocuparão a próxima posição, o que aumentará em 1 todos os antigos índices

```javascript
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.unshift('André') 

let nomeAlunos = ['André', 'João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
```

#### 🌱 Removendo o primeiro elemento

Já para remover o elemento inicial podemos utilizar a função '.shift'. Note que diferente da função anterior ela não recebe paramentos, mas também alterará os índices do vetor, uma vez que todos os índices irão decrescer uma posição, já que o antigo índice 0 foi removido

```javascript
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.shift() 

let nomeAlunos = ['Maria', 'Lucas', 'Igor', 'Felipe', 'André'] 
```

### 🌿Deletar um elemento em qualquer índice


Além de remover os elementos nos índices inicias e finais, também é possível deletar um elemento em qualquer índice, **note que remover e deletar são diferentes**, remover irá excluir o valor do índice e outro valor o ocupará, se possível, já quando o índice é deletado, ele passar a ter um valor 'undefined'

```javascript
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
delete nomeAlunos[1]

let nomeAlunos = ['João', undefined, 'Lucas', 'Igor', 'Felipe'] 
```

### 🌿Fatiar um Array

Também é possível fatiar um Array, isso é cortar elementos indesejados entre determinadas posições. Para isso, usamos a função '.slice()'. A Função pode ser usada de duas formas: 
- (0, 2) - Nesse caso, continuará no Array, os elementos de índice 0 e 1, uma vez que o último elemento não entra no fatiamento. Pode ser entendido como: *De 0 até 3, sendo o 3 não incluso*
- (0, -3) - Assim como no caso anterior, ficarão os elementos de índice 0 e 1. Pode ser entendido como: *De 0 ao fim, menos três posições*

```javascript
// Caso 01
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.slice(0, 2)

let nomeAlunos = ['João', 'Maria'] 
```

```javascript
// Caso 02
let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.slice(0, -3)

let nomeAlunos = ['João', 'Maria'] 
```


### 🌿'const' com um Array

Ao definir uma 'const' com um Array é possível alterar os elementos desse vetor, mas não o substituir por completo, isso vai criar uma espécie de constante mutável

```javascript
// Isso é Permitido
const nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos.pop()

let nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor'] 
```

```javascript
// Mas isso não é Permitido
const nomeAlunos = ['João', 'Maria', 'Lucas', 'Igor', 'Felipe'] 
nomeAlunos = 'Luana'

```







