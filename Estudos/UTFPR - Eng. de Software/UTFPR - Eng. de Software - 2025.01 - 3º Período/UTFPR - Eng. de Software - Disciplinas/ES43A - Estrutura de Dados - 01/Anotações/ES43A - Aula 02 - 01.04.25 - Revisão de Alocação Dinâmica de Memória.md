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
> [!banner-icon] 🌿Aula 01.04.25
## 🌳 Alocação Dinâmica de Memória em C

A alocação dinâmica de memória em C permite a reserva de memória em tempo de execução, ao contrário da alocação estática, que ocorre em tempo de compilação. Para isso, a linguagem oferece funções como 'malloc', 'calloc', 'realloc' e 'free'.

### 🌿 Funções para Alocação

#### 🌱 'malloc'

A função 'malloc' aloca um bloco de memória de tamanho especificado e retorna um ponteiro para o primeiro byte desse bloco. A memória alocada não é inicializada, o que pode fazer que contenha resíduos na memória.

```c
int *ptr = (int *)malloc(tamanho * sizeof(int));
float *ptr = (float *)malloc(tamanho * sizeof(float));
```

#### 🌱 'calloc'

A função 'calloc' aloca múltiplos blocos de memória e diferentemente do malloc, ele será inicializado com zero.

```c
int *ptr = (int *)calloc(5, sizeof(int));
float *ptr = (float *)calloc(5, sizeof(float));
```

#### 🌱 'realloc'

A função 'realloc' ajusta o tamanho de um bloco previamente alocado, preservando os dados existentes sempre que possível.

```c
ptr = (int *)realloc(ptr, 10 * sizeof(int));
ptr = (float *)realloc(ptr, 10 * sizeof(float));
```

### 🌿 Liberação de Memória

A função 'free' libera a memória alocada dinamicamente para evitar vazamentos.

```c
free(ptr);
ptr = NULL; // Evita acesso a memória desalocada
```

### 🌿 Aplicações e Boas Práticas

- Eficiência → Uso adequado de memória durante a execução do programa.
- Evitar vazamentos → Sempre liberar memória com 'free' após o uso.
- Verificação de retorno → Checar se 'malloc', 'calloc' ou 'realloc' retornam 'NULL' para evitar falhas.
- Zerar ponteiros → Após 'free', definir ponteiros como 'NULL' para evitar acessos inválidos.
![[Estrutura de Dados - 01.png|banner]]
> [!banner-icon] 🌿Aula 01.04.25

