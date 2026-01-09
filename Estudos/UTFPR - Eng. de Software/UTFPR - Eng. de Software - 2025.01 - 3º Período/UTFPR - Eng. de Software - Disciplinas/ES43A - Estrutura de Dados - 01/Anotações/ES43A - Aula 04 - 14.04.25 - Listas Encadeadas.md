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
> [!banner-icon] 🌿Aula 14.04.25
## 🌳Listas encadeadas

As listas encadeadas são basicamente uma versão melhorada de um vetor, porque ela permite a alocação de memória em um espaço não contiguo. Elas são um tipo de dado que contém dois campos, um campo para guardar as informações, e um segundo campo que apontará para um o item seguinte, este campo será um ponteiro do tipo lista

```c
typedef struct lista {
	int info;
    struct lista *proximo;
} Lista;
```

### 🌿Inserir Informações no Início

Para inserir informações no início, é necessário passar como parâmetro a lista e o valor que deve ser inserido. É criada uma nova lista com um malloc e após isso é definido que o 'info' do novo é igual o valor recebido e o 'próximo' é atribuído a lista e após isso é retornado

```c
Lista* inserirIni(Lista *lis, int val){
	Lista *novo = (Lista*)malloc(sizeof(Lista));
	novo->info = val;
	novo->proximo = lis;
	return novo;
};
```

### 🌿Imprimindo uma Lista

A Função de imprimir basicamente passa por toda a lista até que o próximo elemento for null, quando for null a função para de imprimir

```c
void imprime(Lista *l){
  Lista *p = l;

	while(p!= NULL){
		printf("%i > ", p->info);
		p = p->proximo;
	  }	
}
```
