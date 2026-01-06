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

![[JS - Arrays.png|banner]]
> [!banner-icon] 🌿Tratamento de Arrays
## 🌳Comandos para a Utilização em Arrays

```javascript
let nomes = ['Eduardo', 'João', 'Maria']
```

#### 🌱Alteração:

```javascript
nomes[2] = "Pedro" // Eduardo, João, Pedro
```

#### 🌱Deletar sem remover o índice:

```javascript
delete nomes[1]; // Eduardo, <1 empty item>, Maria
```

#### 🌱Remover do final:

```javascript
nomes.pop(); // Eduardo, João
```
#### 🌱Remover do início:

```javascript
nomes.shift(); // João, Maria
```

Isso alterará os índices do Array, já que todos os elementos de um array são afetados a partir da mudança da primeira posição

#### 🌱Adicionar ao final:

```javascript
nomes.push("Kara"); // Eduardo, João, Maria, Kara
```
#### 🌱Adicionar ao inicio:

```javascript
nomes.unshift("Kara"); // Kara, Eduardo, João, Maria
```

Isso alterará os índices do Array, já que todos os elementos de um array são afetados a partir da mudança da primeira posição

#### 🌱Copiar o Array

```javascript
let novoArray = [...nomes] // Antes do nome é declarado três pontos
```

Lembrando, que a atribuição padrão do Array, ocasionará por uma passagem por referência, onde os dois array, estarão conectados ao mesmo local de memória. Já nessa utilização isso copiará o conteúdo do array antigo e passará para o novo array, sem compartilhamento de espaço de memória

#### 🌱Definir o tamanho do Array 

```javascript
console.log(nomes.length) // 03
```

#### 🌱Fatiar um Array 

```javascript
let novoArray = nomes.slice(1, 2) // João, 
let novoArray = nomes.slice(1, -1) // João
```

Lembrando, o último índice do slice não é considerado no corte, então se deve declarar um índice a mais do que se deseja fatiar. Também se é possível utilizar números negativos, então se contará do fim para o começo.

#### 🌱Conversão de String para Array 

```javascript
let nome = 'Douglas Nasciemnto Matos'
let nomes = nome.split(" "); // ["Douglas", "Nascimento", "Matos"]
```

No caso a cima, o elemento usado para o split é o espaço, mas esse elemento também podem ser outros, como hifens, barras ou outros caracteres que estejam unindo a string.

#### 🌱Conversão de Array para String

```javascript
let nome = ['Douglas', 'Nasciemnto' , 'Matos]'
let nome = nomes.join(' ') // Douglas Nasciemnto Matos
```

No caso a cima, o elemento usado para join é o espaço, esse elemento terá como função unir os elementos do array na string, e também pode ser outros caracteres como hifens ou barras.
