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
> [!banner-icon] 🌿Aula 26.05.25
## 🌳Pilhas

As pilhas são estruturas de dados implementas de forma lógica, de forma que segue um algoritimo LIFO - Last in, First out. Os elementos sempre serão introduzidos na última posição e sempre serão retirados dessa última posição. Jamais um elemento poderá ser inserido no meio, ou no começo, assim como retirados desse locais. 

```c
#define MAX 50

struct typedef pilha {
	int topo;
	int vet[MAX];
} PIlha;

```

A Estrutura de um pilhas simples com vetor é dessa maneira, na estrutura de dados é armazenado o topo atual e o vetor que conterá os valores da pilha. O Tamanho do vetor pode ser definido com uma constante. 

```c
Pilha* cria(){
	Pilha* novo;
	novo = (Pilha*)malloc(sizeof(Pilha));
	novo->topo = 0;
}
```

A Função cria() é responsável por inicializar a estrutura. Nela é feita o malloc para a alocação de memória da estrutura de dados, além de definir a atual posição do topo como vazio.

```c
void push(Pilha *p, int val) { 
	if (p->topo == MAX) { 
		printf("Erro: Pilha cheia!\n"); 
		return; 
	} 
	
	p->vet[p->topo] = elemento; 
	p->topo++; 
	return; 
} 
```

A Função .push() é a responsável por inserir elementos na pilhas, ela sempre inserirá no topo, de forma que ela recebe como parâmetro a pilha e o valor a ser inserido. É realizada a verificação de stackoverflow, se não, é inserido na posição de topo atual e incrementando a posição de topo. 

```c

void pop(Pilha *p) { 
	if (p->topo == 0) { 
	printf("Erro: Pilha vazia!\n"); 
	return; } 
	
	p->topo--;
	}
```

A Função .pop() é a responsável por retirar elementos da pilhas, ele sempre retirará do topo, de forma que ela recebe apenas a pilha como parâmetro, verifica se vazio, se não, decrementa o topo. Nessa situação, não é necessário apagar valores ou outros métodos para exclusão, pois isso seria preenchido com lixo de memória. 