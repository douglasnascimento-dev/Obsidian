---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
---

![[Estrutura de Dados - 02.png|banner]]
> [!banner-icon] :LiBookMarked: Aula 18.08.2025
# :LiAlbum: Revisão de Algoritimos de Ordenação 

> Técnicas distintas para solucionar um problema que aparece como pré-processamento em muitas aplicações que envolvam o uso de tabelas (isto é, praticamente todas!) – a obtenção de uma tabela ordenada.
> SZWARCFITER, Jayme L.; MARKENZON, Lilian. **Estruturas de Dados e Seus Algoritmos**

- Selection Sort;
- Insertion Sort;
- Bubble Sort;
- Merge Sort;
- Quick Sort;
- Heap Sort;
- Couting Sort;
- Radix Sort;
- Bucket Sort;
- Gnome Sort;
- Couting Sort;
- Cocktail Sort
- TimSort;
- Tree Sort; e
- Shell Sort;

## :LiList: Classificações

É possível classificar algoritimos de ordenação de múltiplas maneiras, sendo as mais comuns: 
- Número de Comparações;
- Número de Trocas ou Inversões;
- Uso ou não de Recursão;
- Estabilidade;
- Necessidade de Espaço Adicional; e
- Complexidade.

## :LiList: Selection Sort

O algoritmo de ordenação por seleção funciona selecionando o menor elemento de uma lista não ordenada e colocando-o na primeira posição.
1. Encontre o menor elemento e mova-o para a primeira posição;
2. Encontre o menor elemento do que sobrou e mova-o para a segunda posição;
3. Encontre o menor elemento do que sobrou e mova-o para a terceira posição; e
4. Encontre o menor elemento do que sobrou e mova-o para a posição N.

## :LiList: Análise Assintótica

É uma ferramenta para avaliar o desempenho de algoritimos em termos de tamanho da entrada N, considerando o número de instruções a serem executados. Ela permite comparar a eficiência de diferentes algoritimos com base no seu comportamento para entradas muito grandes. 

- Número de Comparações: **n<sup style="font-weight: bold">2</sup>**
- Número de Trocas: N - 1

- Complexidade no pior caso: O(n<sup>2</sup>)
- Complexidade no caso médio: O(n<sup>2</sup>)
- Complexidade no melhor caso: O(n<sup>2</sup>)

O Selection Sort é **instável**, ou seja, não garante a ordem relativa dos elementos iguais. Selection Sort não requer memória auxiliar - **in-place**. 

