---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
---

![[Estrutura de Dados - 02.png|banner]]
> [!banner-icon] :LiBookMarked: Aula 18.08.2025
# :LiAlbum: Revisão de Algoritimos de Ordenação 

## :LiList: Insertion Sort

É um algoritimo de ordenação simples que funciona inserindo iterativamente cada elemento de uma lista não ordenada em sua posição correta em uma parte ordenada da lista. 

1. Começa com o 2º elemento do Array, pois o primeiro elemento é considerado classificado. 
2. Compara o 2º elemento com o primeiro elemento. Se o 2º elemento for menor, troque-os.
3. Mova a comparação para o 3º elemento, compare-o com os dois primeiros elementos e coloque-o na posição correta. 
4. Repita até que que todo o array seja classificado. 

## :LiList: Análise Assintótica

- Complexidade no pior caso: O(n<sup>2</sup>)
- Complexidade no caso médio: O(n<sup>2</sup>)
- Complexidade no melhor caso: O(n)

O Insertion Sort é **estável**, ou seja, não garante a ordem relativa dos elementos iguais. Insertion Sort não requer memória auxiliar - **in-place**. Como a ordenação em um array ordenado é executado N vezes, o custo total é somente O(n).

### :LiList: Merge Sort

É um algoritmo de ordenação eficiente que segue a abordagem de "dividir para conquistar". Ele divide recursivamente a lista em duas metades, ordena cada metade e, em seguida, mescla as duas metades ordenadas para produzir a lista final ordenada.

1. Verifica se a lista possui 0 ou 1 elemento. Se sim, ela já está ordenada e nada é feito.
2. Caso contrário, a lista é dividida ao meio, criando duas sub-listas.
3. O algoritmo Merge Sort é chamado recursivamente para cada uma dessas duas sub-listas.
4. Quando as duas sub-listas retornam ordenadas, elas são combinadas (mescladas) em uma única lista ordenada. A mesclagem funciona comparando o primeiro elemento de cada sub-lista e adicionando o menor à lista final, repetindo o processo até que todos os elementos tenham sido movidos.

#### :LiList: Análise Assintótica

- **Complexidade no pior caso:** O(n log n)
- **Complexidade no caso médio:** O(n log n)
- **Complexidade no melhor caso:** O(n log n)

O Merge Sort é **estável**, ou seja, ele preserva a ordem relativa dos elementos com valores iguais. No entanto, ele **não é in-place**, pois requer memória auxiliar (normalmente um array extra) para realizar a etapa de mesclagem das sub-listas.

### :LiList: Bubble Sort

É um algoritmo de ordenação simples que percorre repetidamente a lista, compara elementos adjacentes e os troca de lugar se estiverem na ordem errada. As passagens pela lista são repetidas até que nenhuma troca seja necessária, indicando que a lista está ordenada.

1. Começa no primeiro elemento e o compara com o segundo. Se o primeiro for maior que o segundo, eles são trocados.
2. Avança para o próximo par de elementos (o segundo e o terceiro) e repete a comparação e a troca, se necessário.
3. Este processo continua até o final da lista. Ao final da primeira passagem, o maior elemento da lista estará "borbulhado" para a última posição.
4. Repete todo o processo para a lista, excluindo o último elemento (que já está em sua posição correta). O processo é repetido até que uma passagem completa seja feita sem nenhuma troca.

#### :LiList: Análise Assintótica

- **Complexidade no pior caso:** O(n<sup>2</sup>)
- **Complexidade no caso médio:** O(n<sup>2</sup>)
- **Complexidade no melhor caso:** O(n)

O Bubble Sort é **estável**, pois elementos de igual valor nunca são trocados, mantendo sua ordem original. O algoritmo também é **in-place**, pois a ordenação é feita no próprio array, sem a necessidade de alocação de memória extra significativa.

### :LiList: Quick Sort

É um algoritmo de ordenação muito eficiente, também baseado na abordagem de "dividir para conquistar". Ele funciona escolhendo um elemento como "pivô" e particionando os outros elementos da lista em dois grupos: os menores que o pivô e os maiores que o pivô. Em seguida, o algoritmo é aplicado recursivamente a cada um desses grupos.

1. Escolhe um elemento do array como pivô (a escolha pode variar: primeiro, último, elemento do meio, ou um aleatório).
2. Particiona o array: reorganiza os elementos de forma que todos os elementos menores que o pivô fiquem à sua esquerda e todos os maiores fiquem à sua direita. O pivô agora está em sua posição final ordenada.
3. Chama recursivamente o Quick Sort para a sub-lista de elementos à esquerda do pivô.
4. Chama recursivamente o Quick Sort para a sub-lista de elementos à direita do pivô.

#### :LiList: Análise Assintótica

- **Complexidade no pior caso:** O(n<sup>2</sup>)
- **Complexidade no caso médio:** O(n log n)
- **Complexidade no melhor caso:** O(n log n)

O Quick Sort **não é estável**. Durante o processo de particionamento, a ordem relativa de elementos com valores iguais pode ser alterada. A implementação padrão do Quick Sort é **in-place**, pois realiza as trocas dentro do próprio array, utilizando uma quantidade de memória auxiliar mínima para a recursão.