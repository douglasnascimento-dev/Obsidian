---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
Nota Final: "0.0"
---

![[Estrutura de Dados - 01.png|banner]]
> [!banner-icon] 🌿Aula 25.03.25

## 🌳 Ponteiros em C

Os ponteiros em C são variáveis que armazenam o endereço de memória de outras variáveis. Eles permitem manipular diretamente a memória, facilitando a criação de estruturas dinâmicas, otimização de desempenho e passagem eficiente de parâmetros para funções.

### 🌿 Declaração e Inicialização

Para declarar um ponteiro, utiliza-se o operador '\*' antes do nome da variável:

```c
int *ptr;
```

A inicialização pode ser feita atribuindo o endereço de uma variável utilizando o operador '&':

```c
int x = 10;
int *ptr = &x;
```

Aqui, 'ptr' armazena o endereço de 'x', permitindo acesso ao seu valor de forma indireta.

### 🌿 Acesso ao Valor Apontado

O operador '\*' (de referência) é usado para acessar o valor armazenado no endereço apontado:

```c
printf("%d", *ptr); // Imprime 10
```

Modificar '\*ptr' altera o valor de 'x':

```c
*ptr = 20;
printf("%d", x); // Agora x é 20
```

### 🌿 Ponteiros e Arrays

Os arrays são tratados como ponteiros para o primeiro elemento:

```c
int arr[] = {1, 2, 3};
int *p = arr;
printf("%d", *(p + 1)); // Imprime 2
```

### 🌿 Ponteiro para Ponteiro

Um ponteiro pode armazenar o endereço de outro ponteiro:

```c
int x = 10;
int *p = &x;
int **pp = &p;
printf("%d", **pp); // Imprime 10
```

### 🌿 Aplicações e Boas Práticas

- Eficiência → Permitem otimizações em operações sobre grandes estruturas.
- Modularidade → Facilitam a passagem eficiente de variáveis para funções.
- Evitar ponteiros não inicializados → Pode causar acessos inválidos e falhas.



