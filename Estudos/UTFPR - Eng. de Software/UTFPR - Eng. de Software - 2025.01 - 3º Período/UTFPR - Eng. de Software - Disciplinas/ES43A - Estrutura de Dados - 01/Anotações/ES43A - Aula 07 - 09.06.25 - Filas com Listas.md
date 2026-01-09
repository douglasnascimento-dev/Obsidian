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
> [!banner-icon] 🌿Aula 09.06.25

## 🌳Filas

As filas são estruturas de dados implementas de forma lógica, de forma que segue um algoritimo FIFO - First in, First out. Os elementos sempre serão introduzidos na última posição e sempre serão retirados da primeira posição. Jamais um elemento poderá ser inserido no meio, ou no início, assim como retirados do meio ou do fim. 

```c
#define MAX 50

struct typedef fila {
	No *ini;
	No *fim;
} fila;
```

```c
#define MAX 50

struct typedef no {
	No int info;
	struct no *prox;
} No;
```

A Estrutura de um filas simples com listas é dessa maneira, na estrutura de dados é armazenado o início e o fim da fila. O Nó conterá um campo para as informações e um ponteiro que apontará para o próximo nó. 

```c
Fila* cria(){
	Fila* novo;
	novo = (Fila*)malloc(sizeof(Fila));
	novo->ini = NULL;
	novo->fim = NULL;
	return novo
}
```

A Função cria() é responsável por inicializar a estrutura. Nela é feita o malloc para a alocação de memória da estrutura de dados, além de definir a atual posição do início e fim como NULL.

```c
void inserir(Fila *f, int val){
	No *novo;
	novo = (No*)malloc(sizeof(No));
	
	novo->info = val;
	novo->prox = NULL;
	
	if (f->fim == NULL) {
		f->fim = novo;
		f->ini = novo;
		return;
	}
	
	f->fim->prox = novo;
	f->fim = novo;
}
```

A Função .inserir() é a responsável por inserir elementos na fila, ela sempre inserirá no fim, de forma que ela recebe como parâmetro a fila e o valor a ser inserido. É alocado a memória para um novo nó. É definido que info receberá o valor e que o próximo será vazio, já que é o último. Se a fila não tiver elementos, o fim e o início apontará para o novo e será retornado. Se caso houver elementos, o ponteiro do próximo do último será apontado para o novo e o fim da fila também será apontado para o novo.

```c
void retirar(Fila *f){
	if (vazia(f)) {
		printf("Fila Vazia");
		return;
	} 
	
	No *aux;
	aux = f->ini;
	f->ini = f->ini->prox;
	
	if (f->ini == NULL) {
		f->fim = NULL;
	}
	
	free(aux);
}
```

A Função .retirar() é a responsável pelo exclusão de um elemento da fila. Ela recebe apenas a fila como parâmetro, é verificado se a fila possui elementos, se caso não, ela será retornada. Se caso houver elementos, é alocado um nó auxiliar igual ao primeiro nó da fila, o ponteiro de início passa a pontar para o segundo da fila. Em seguida o nó é liberado. Se caso caso houver apenas um elemento, o nó além de apagado e o fim da fila é definido como vazio. 

```c
void imprimir(Fila *f){
	No *aux = f->ini;
	
	if(aux == NULL){
		printf("Fila vazia");
	}
	
	while(aux != NULL){
		printf("%i > ", aux->info);
		aux = aux->prox;
	}
}
```

A Função imprimir() é a responsável pela impressão de uma fila. Ela recebe apenas a fila como parâmetro. É alocado um nó auxiliar igual ao inicio, se caso o auxiliar for vazio, é impresso que a fila é vazia. Se caso não, a fila entre no loop, e será impressa o valor até que chegue ao fim. 