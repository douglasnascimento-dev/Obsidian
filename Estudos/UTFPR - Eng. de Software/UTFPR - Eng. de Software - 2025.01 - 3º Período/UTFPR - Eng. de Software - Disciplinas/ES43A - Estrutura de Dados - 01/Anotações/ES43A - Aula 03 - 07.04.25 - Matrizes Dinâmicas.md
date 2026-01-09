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
> [!banner-icon] 🌿Aula 07.04.25
## 🌳Matrizes Dinâmicas

As Matrizes criadas dinamicamente, terão um funcionamento diferenciado das matrizes estáticas, ela serão basicamente um array de ponteiros que apontarão para um array estático. Onde basicamente o número de linhas será o tamanho do arrays de ponteiros e o tamanho da coluna será o tamanho dos arrays estáticos

### 🌿Exemplo de Criação de Matriz Dinâmica

```c
	int **mat1 = (int**)malloc(sizeof(int*) * tam_l);
	for(i = 0; i < tam_l; i++){
		mat1[i] = (int*)malloc(sizeof(int) * tam_c);
	}
```

Observe que a 'mat1' é um ponteiro de ponteiro, e que primeiro é criado o array dinâmico e após é criado, por meio de um for, os arrays estáticos, que cada um terá um ponteiro no array dinâmico 