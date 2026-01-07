---
Tipo: Módulo
Status: true
Início: 2024-08-25
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
Fim: 2024-09-24
Anotações:
  - "[[JS & TS - 03.01 - Avaliação em Curto-circuito]]"
  - "[[JS & TS - 03.02 - Objeto Date]]"
  - "[[JS & TS - 03.03 - Atribuição por Desestruturação]]"
  - "[[JS & TS - 03.04 - For]]"
  - "[[JS & TS - 03.05 - Tratamento de Erros]]"
Atividades: []
---

## 💙**Atividades** | JS & TS - Lógica de Programação

🔹Durante a realização dessa disciplina não houve 'Atividades'

![[JS & TS.png|banner]]
> [!banner-icon] 🌳
### 🔷**Registro de Aulas** | JS & TS - Lógica de Programação

| Aula                                                   |  Status   | Último Minuto |
| :----------------------------------------------------- | :-------: | :-----------: |
| 🔹35 - Sobre lógica                                    | Concluído |   -- \| --    |
| 🔹36 - Extensões no VSCode                             | Concluído |   -- \| --    |
| 🔹37 - Operadores de Comparação                        | Concluído |   -- \| --    |
| 🔹38 - Operadores Lógicos                              | Concluído |   -- \| --    |
| 🔹39 - Avaliação de Curto-circuíto                     | Concluído |   -- \| --    |
| 🔹40 - 'if', 'else if' e 'else' - (01)                 | Concluído |   -- \| --    |
| 🔹41 - 'if', 'else if' e 'else' - (02)                 | Concluído |   -- \| --    |
| 🔹42 - Modelo HTML e CSS                               | Concluído |   -- \| --    |
| 🔹43 - Nota sobre o próximo exercício                  | Concluído |   -- \| --    |
| 🔹44 - Exercício                                       | Concluído |   -- \| --    |
| 🔹45 - Operação Ternária                               | Concluído |   -- \| --    |
| 🔹46 - Objeto Date                                     | Concluído |   -- \| --    |
| 🔹47 - Switch Case                                     | Concluído |   -- \| --    |
| 🔹48 - Exercício ('switch' e Date())                   | Concluído |   -- \| --    |
| 🔹49 - 'let' VS 'var' - mais diferenças                | Concluído |   -- \| --    |
| 🔹50 - Atribuição via desestruturação - Arrays         | Concluído |   -- \| --    |
| 🔹51 - Atribuição via desestruturação - Objetos        | Concluído |   -- \| --    |
| 🔹Extra: Atribuição via desestruturação                | Concluído |   -- \| --    |
| 🔹52 - For - Clássico - Estrutura de Repetição         | Concluído |   -- \| --    |
| 🔹53 - Exercíco ('for')                                | Concluído |   -- \| --    |
| 🔹54 - DOM e Árvore DOM                                | Concluído |   -- \| --    |
| 🔹55 - For in                                          | Concluído |   -- \| --    |
| 🔹56 - For of                                          | Concluído |   -- \| --    |
| 🔹57 - Exercício ('Nodelist')                          | Concluído |   -- \| --    |
| 🔹58 - While e Do-While                                | Concluído |   -- \| --    |
| 🔹59 - Break e Continue                                | Concluído |   -- \| --    |
| 🔹60 - Exercício (Lógica de Programação - 01)          | Concluído |   -- \| --    |
| 🔹61 - Exercício (Lógica de Programação - 02)          | Concluído |   -- \| --    |
| 🔹62 - Exercício (Lógica de Programação - 03)          | Concluído |   -- \| --    |
| 🔹63 - Tratando e lançando erros (try, catch e throw)  | Concluído |   -- \| --    |
| 🔹64 - Tratando e lançando erros (try, catch e finaly) | Concluído |   -- \| --    |
| 🔹65 - SetInterval e SetTimeOut                        | Concluído |   -- \| --    |
| 🔹66 - Exercício - Criando um Tímer com SetInterval    | Concluído |   -- \| --    |
| 🔹67 - Exercício - Criando uma lista de Tarefas        | Concluído |   -- \| --    |

## 💙**Anotações** | JS & TS - Lógica de Programação

#### 🌱Operadores de Comparação

| Função             | Símbolo | \|  | Função                 | Símbolo |
| :----------------- | :-----: | :-: | :--------------------- | :-----: |
| Maior que          |    >    | \|  | ~~Igual~~              |   ==    |
| Menor que          |    <    | \|  | Estritamente igual     |   ===   |
| Maior ou igual que |   >=    | \|  | ~~Diferente~~          |   !=    |
| Menor ou igual que |   <=    | \|  | Estritamente diferente |  !===   |

Não é recomendável o uso dos comparadores simples de igualdade ( == ) e de diferença ( != ), pois não comparam o tipo da variável ou do valor, para esses usos devem ser utilizadas os comparados estritos de igualdade e de diferença 

### [[JS & TS - 03.01 - Avaliação em Curto-circuito]]

Essa notas exemplificam e exemplificam o funcionamento do sistema de avaliação do motor do JS, que se utiliza do sistema curto-circuito (se ele achar algo que viola as condições, dá as buscas como encerradas)

#### 🌱Operação Ternária

Substitui a utilização de um 'if' e 'else if' únicos. É formatada da seguinte maneira: 'condição ? *verdadeira* : *falsa* '. Exemplo:

```javascript
const liga = xpUser > 100 ? 'liga 1' : 'liga 0'
```

Nesse caso se o xp do usuário for maior que 100, ele pertence a liga 1, se caso não, ele pertence a liga 0

### [[JS & TS - 03.02 - Objeto Date]]

Essas notas se tratam da objeto Date, usada para a obtenção de datas, suas atribuições em códigos e de que forma deve ocorrer sua aplicação.

#### 🌱Switch Case

A Aplicação do Switch Case (escolha-caso) em JavaScript é semelhante da aplicação em linguagem C. O break pode ser substituído por 'return'. Já que 'return' é semelhante a um encerramento.

#### 🌱'let' VS 'var'

O tipo de variável 'let' possui escopo de bloco (qualquer momento em que haja { . . . }, como um 'if' e 'else' ), já o tipo de 'var' só possui espoco de função (function nome() { . . . })

### [[JS & TS - 03.03 - Atribuição por Desestruturação]]

Essas notas tratam da técnica de atribuição por desestruturação, em arrays e em objetos, além de trazer suas aplicações junto a linguagem JS

#### 🌱Continue e Break
##### 🌵 Continue
--- start-multi-column: ID_9b2n
```column-settings
Number of Columns: 2
Largest Column: standard
```

- 'Continue': Pula a execução de determinada parte do código durante um bloco. No caso ao lado em vetor de 0 á 15, é verificado se o valor é 10, e se caso for, ele não é exibido:

--- column-break ---

```javascript
for (let v of vetor){
	if (v === 10){
		continue;
	}
	console.log(v) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15
}
```

--- end-multi-column
##### 🌵Break
--- start-multi-column: ID_0zcr
```column-settings
Number of Columns: 2
Largest Column: standard
```

- 'Break': Para a execução do código durante um bloco. No caso ao lado em vetor de 0 á 15, é verificado se o valor é 10, e se caso for, ele não executa mas nenhuma parte do código, nem mesmo o console.log, se acaso ele tive abaixo do verificador

--- column-break ---

```javascript
for (let v of vetor){
	if (v === 10){
		break;
	}
	console.log(v) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
```

--- end-multi-column
#### 🌱SetInterval, ClearInterval e SetTimeout 
--- start-multi-column: ID_w0sx
```column-settings
Number of Columns: 2
Largest Column: standard
```

Os três métodos se referem a manipulações de intervalos de tempos. o 'setInterval' permite a criação de intervalos de tempo, o 'clearInterval' é utilizado para a limpeza/exclusão de um intervalo e o 'setTimeout' cria um timer que disparará uma única vez após o tempo definido. No exemplo ao lado, pode-se observar a criação de um loop que a cada 1s (1.000ms) atualiza a hora loca e em seguida um timer que após 60s (60.000ms) excluíra o intervalo. **Observe que todos os valores estão em milissegundos**

--- column-break ---

```javascript
let timer = setInterval(function() {
	console.log(//Função para mostrar as horas atualizadas)
}, 1000)

setTimeout(function() {
	clearInterval(timer)
}, 60000)
```

--- end-multi-column




