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
> [!banner-icon] 🌿Aula 22.04.25
## 🌳Impressão Recursiva de Lista Encadeada

A função 'imprimirRec' é uma abordagem recursiva para percorrer e imprimir os elementos de uma lista encadeada. O processo ocorre da seguinte forma:

1. **Base da Recursão**: A função verifica se a lista está vazia (se o ponteiro para o próximo nó é 'NULL'). Se estiver, a função retorna, terminando a recursão.
2. **Impressão**: Se a lista não está vazia, imprime o valor do nó atual com o formato 'valor >', onde o valor é o campo 'info' do nó.
3. **Chamada Recursiva**: Em seguida, a função chama a si mesma para imprimir o próximo nó, movendo-se ao longo da lista até que todos os elementos sejam impressos.

A vantagem dessa abordagem é que ela simplifica o código de iteração ao eliminar a necessidade de uma estrutura de controle explícita como o laço 'while' ou 'for'.

Exemplo de código:

```c
void imprimirRec(Lista *l) {
    if(l == NULL) {
        return;
    }
    
    printf("%i > ", l->info);
    imprimirRec(l->proximo);  // Chamada recursiva para o próximo nó
}
```

### 🌿Remoção de um Elemento da Lista Encadeada

A função 'retirar' tem como objetivo remover um nó da lista encadeada que contém um valor específico. O processo é o seguinte:

1. **Busca pelo Elemento**:
    - A função começa com dois ponteiros: 'aux', que percorre a lista, e 'ant', que armazena o nó anterior ao atual.
    - A busca é feita através de um laço 'while' até que o elemento seja encontrado (quando 'aux->info == val') ou até que o fim da lista seja alcançado (quando 'aux == NULL')
2. **Elemento Não Encontrado**:
    - Se 'aux == NULL', significa que o elemento não foi encontrado na lista. Nesse caso, a função exibe uma mensagem de erro e retorna a lista sem modificações.
3. **Remoção do Nó**:
    - Se o elemento for encontrado, a função verifica se o nó a ser removido é o primeiro da lista (quando 'ant == NULL'). Se for o primeiro, a lista será atualizada para apontar para o próximo nó ('l = aux->proximo').
    - Caso contrário, o ponteiro 'proximo' do nó anterior ('ant->proximo') é atualizado para pular o nó que será removido ('ant->proximo = aux->proximo').
4. **Liberação de Memória**:
    - Após a remoção do nó, a memória alocada para ele é liberada com a função 'free()'.

### Exemplo de código:

```c
Lista* retirar(Lista *l, int val) {
    Lista *aux = l, *ant = NULL;

    // Busca pelo elemento
    while(aux != NULL && aux->info != val) {
        ant = aux;
        aux = aux->proximo;
    }

    // Elemento não encontrado
    if(aux == NULL) {
        printf("\nElemento não encontrado na Lista\n\n");
        return l;
    }

    // Caso o nó a ser removido seja o primeiro
    if(ant == NULL) {
        l = aux->proximo;
    } else {
        // Caso o nó a ser removido não seja o primeiro
        ant->proximo = aux->proximo;
    }

    // Libera a memória do nó removido
    free(aux);
    return l;
}
```


## 🌿Inserção na Terceira Posição de uma Lista Encadeada

A função 'inserirTer' tem como objetivo inserir um novo nó na terceira posição de uma lista encadeada. O processo segue algumas verificações antes de realizar a inserção:

1. **Alocação do Novo Nó**:
    - A função começa alocando memória para o novo nó ('novo = (Lista*)malloc(sizeof(Lista))').
    - Se a alocação falhar, a função retorna a lista original sem modificações.
2. **Contagem de Nós**:
    - A função 'contaNos(lis)' é chamada para obter a quantidade de nós presentes na lista. Essa contagem é usada para determinar o comportamento da inserção, dependendo do número de elementos na lista.
3. **Inserção com Mais de Dois Elementos**:
    - Se a lista tiver mais de dois elementos, a função percorre a lista até a segunda posição (utilizando a variável 'cont' para controle de iteração).
    - Quando o segundo nó é encontrado, o novo nó é inserido após ele, e o ponteiro 'proximo' do novo nó é ajustado para apontar para o nó seguinte ('pn = aux->proximo').
    - O ponteiro 'proximo' do nó anterior ('aux->proximo') é então atualizado para apontar para o novo nó.
4. **Casos de Lista com Menos de Três Elementos**:
    - Se a lista tiver 0, 1 ou 2 nós, a inserção é tratada de maneira especial:
        - **Lista vazia**: O novo nó é o único elemento da lista.
        - **Uma posição**: O novo nó é inserido após o primeiro nó.
        - **Duas posições**: O novo nó é inserido após o segundo nó.


```c
Lista* inserirTer(Lista *lis, int val) {
    Lista *novo, *aux = lis, *pn;
    int cont = 1, nos = contaNos(lis);
    
    novo = (Lista*)malloc(sizeof(Lista));

    if (novo != NULL) {
        novo->info = val;
        novo->proximo = NULL;

        if(nos > 2) {              
            while(aux != NULL && cont < 2) {
                cont++;
                aux = aux->proximo;
            }

            pn = aux->proximo;
            aux->proximo = novo;
            novo->proximo = pn;

        } else {
            if(nos == 0) {
                return novo;
            }
            if(nos == 1) {
                lis->proximo = novo;
                return lis;
            }
            if(nos == 2) {
                lis->proximo->proximo = novo;
                return lis;
            }
        }

        return lis;
    }
    
    return lis;
}
```

