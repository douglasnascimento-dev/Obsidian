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
> [!banner-icon] 🌿Aula 15.04.25
## 🌳Inserindo ao final de uma Lista encadeada

A Inserção ao final é mais complexa do que a inserção ao início. Ao início é necessário verificar se a nova lista foi alocada corretamente e então atribuir o valor ao 'info' e null ao 'próximo'. Em seguida se verifica se a lista existe, se não existir se retorna apenas o novo. Se existir, copia a lista para um auxiliar que será percorrida até chegar ao fim da lista e a sim se aloca o vetor

```c
Lista* inserirFin(Lista *lis, int val){
	Lista *novo, *aux;
	novo = (Lista*)malloc(sizeof(Lista));

	if(novo != NULL){
		novo->info = val;
		novo->proximo = NULL;
		
		if(lis == NULL){
			return novo;
		} else {
			aux = lis;
			
			while(aux->proximo != NULL){
				aux = aux->proximo;
			}
			
			aux->proximo = novo;
			return lis;
			
		}
	} else {
		printf("\n !!! Erro na Alocação !!!");
		return lis;
	}
	
}
```
