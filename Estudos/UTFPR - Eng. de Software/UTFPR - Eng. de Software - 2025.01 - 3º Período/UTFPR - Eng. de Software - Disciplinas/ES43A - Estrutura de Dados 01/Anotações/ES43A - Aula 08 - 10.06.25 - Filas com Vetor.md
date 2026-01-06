---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Nota Final: "0.0"
---

![[Estrutura de Dados - 01.png|banner]]
> [!banner-icon] 🌿Aula 10.06.25

## 🌳Filas

As filas são estruturas de dados implementas de forma lógica, de forma que segue um algoritimo FIFO - First in, First out. Os elementos sempre serão introduzidos na última posição e sempre serão retirados da primeira posição. Jamais um elemento poderá ser inserido no meio, ou no início, assim como retirados do meio ou do fim. 

```c
#define N 50

typedef struct fila {
	int ini;
	int fim;
	int cont;
	int vet[N];
}Fila;
```

A Estrutura de um pilhas simples com vetor é dessa maneira, na estrutura de dados é armazenado o início e o fim da fila, além de um contador de posições. E o vetor com tamanho definido por uma constante.

```c
Fila* cria() {
 	 Fila* f = (Fila*) malloc(sizeof(Fila));
 	 f->ini = f->fim = f->cont = 0; 
 	 return f;
}
```

A Função cria() é responsável por inicializar a estrutura. Nela é feita o malloc para a alocação de memória da estrutura de dados, além de definir a atual posição do início, fim e do contador como 0.

```c
int incr(int i) {
	if (i == N-1) {
		return 0;
	}
	
	return i+1;
}
```

A Função incr() é a responsável pelo incremento em todo o código, ela substitui o incremento básico em que se utiliza o ++, isso porque as filas com vetor apresentam o conceito de circularidade, isso é, após o fim chegar a última posição, ele irá retornar ao início se houver espaço, sempre utilizando o máximo de índices do vetor. Aqui se o valor for igual ao fim do vetor, isso é, a constante - 1, ele irá voltar para 0. Caso não, ele apenas incrementa em 1.

```c
void inserir(Fila *f, int val) {
	if (f->cont == N) {
		printf("Fila cheia. Não foi possível inserir");
		return;
	}
	
	f->vet[f->fim] = val;
	f->fim = incr(f->fim);
	
	f->cont++;
}
```

A Função .inserir() é a responsável por inserir elementos na pilhas, ela sempre inserirá no fim, de forma que ela recebe como parâmetro a fila e o valor a ser inserido. Ele verifica se o contador está no máximo, caso sim, retorna e não realização a inserção. Se caso houver espaço na lista, ela define que o próximo índice vazio do vetor será igual ao valor passado, ela incrementa a posição do fim e aumenta uma posição no contador

```c
void retirar(Fila *f){
	if(f->cont == 0){
		printf("Fila Vazia");
		return;
	}
	
	f->ini = incr(f->ini);
	f->cont--;
}
```

A Função .retirar() é a responsável pelo exclusão de um elemento da fila. Ela recebe apenas a lista como parâmetro, é verificado se o vetor possui ao menos um índice, caso não, ela retorna sem realizar qualquer retirada. Caso houver índices válidos, ela incrementa o início, isso é avança uma posição no vetor e retira um elemento no contador. 

```c
void imprimir(Fila *f){
	int i, j = f->ini;
	
	for(i = 0; i < f->cont; i++){
		printf("[%d] - ", f->vet[j]);
		j = incr(j);
	}
}
```

A Função imprimir() é a responsável pela impressão de uma lista. Ela recebe apenas a lista como parâmetro. É alocado um nó auxiliar igual ao inicio, se caso o auxiliar for vazio, é impresso que a lista é vazia. Se caso não, a lista entre no loop, e será impressa o valor até que chegue ao fim. Observe que é utilizado duas variáveis para o controle, i fará o controle do loop for, enquanto j será incrementada para percorrer a fila. 

