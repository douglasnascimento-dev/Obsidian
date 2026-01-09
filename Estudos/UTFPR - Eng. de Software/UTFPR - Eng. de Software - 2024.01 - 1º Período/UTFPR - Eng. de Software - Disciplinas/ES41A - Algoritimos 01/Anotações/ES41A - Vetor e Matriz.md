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

![[Algoritimos 01.png|banner]]
> [!banner-icon] 🌿
## 🌳Constante de tamanho
--- start-multi-column: ID_33cv
```column-settings
Number of Columns: 2
Largest Column: standard
```

Para manter se obter melhores práticas de código, é indicado criar uma constante para determinar o valor de um determinado vetor, uma vez que se caso necessário promover alguma mudança, será possível mudar em todo o código de uma única vez. A Constante deve ser declarado em escopo global.

--- column-break ---

```c
#define tam 6 

int main() {
	...
}
```

--- end-multi-column
### 🌿Geração de Números Aleatórios

--- start-multi-column: ID_ck4s
```column-settings
Number of Columns: 2
Column Size: STANDART
```

Em determinadas situações é preciso gerar números aleatórios, para isso é preciso declarar duas bibliotecas: 'time' e 'stdlib', elas fornecerão as funções a serem utilizadas. Para a utilização dos números aleatórios, é preciso atribuir a função 'random' a variável, seja ela sim simples ou vetor, ou para a apresentação, como um 'scanf'. Como no exemplo ao lado:

--- column-break ---

```c
#include <stdlib.h>
#include <time.h>

int main() {
	srand(time(NULL)) //A Cada execução novos números serão gerados

	var num = rand() % (100) //Números Aleatórios de 0 á 100
	}
```

--- end-multi-column
## 🌳 Vetor em C:

###      🌿 Declaração de Vetor
--- start-multi-column: ID_2s0b
```column-settings
Number of Columns: 2
Largest Column: standard
```

Para se declarar um vetor é preciso declarar sua tipagem, seu nome e em seguinte seu tamanho, por convenção se declarar vetores separados de variáveis simples. No exemplo ao lado, o vetor aluno é do tipo 'float', com 50 indíces.

--- column-break ---

```c
int main() {
	float alunos[50];
}
```

--- end-multi-column
### 🌿Inicialização e Apresentação de Vetor
--- start-multi-column: ID_2bnt
```column-settings
Number of Columns: 2
Largest Column: standard
```

Os processos de inicialização (preenchimento) de um vetor e de apresentação de um vetor ao usuário deve ocorrer dentro de uma estrutura de repetição 'for', onde o seu limite deve ser equivalente ao tamanho que possui, e o índice ocupará a função de contador 

--- column-break ---

```c
for( i = 0 ; i < tam ; i++ ) {
// Inicialização ou apresentação de um vetor
}
```

--- end-multi-column
### 🌿Inicialização e Apresentação Inversa de Vetor
--- start-multi-column: ID_dh6q
```column-settings
Number of Columns: 2
Largest Column: standard
```

Além do processo comum para a inicialização e apresentação de um vetor, também pode-se inverter sua ordem durante a inicialização e a apresentação. Por exemplo, pode-se optar por preencher um vetor da última posição até a primeira, ou então, o apresentar ao contrário do que foi inicializado

--- column-break ---

```c
for( i = tam - 1; i < 0 ; i-- ) {
// Inicialização ou apresentação inversa de um vetor
}
```

--- end-multi-column
### 🌿Crítica de Dados em um Vetor

--- start-multi-column: ID_wny1
```column-settings
Number of Columns: 3
Largest Column: standard
```

Em uma determinada situação onde é necessário realizar uma crítica de dados, é indicado a realizar utilizando a estrutura de repetição 'Do - While', podendo acontecer de duas maneiras distintas. Tanto carregando o valor em uma variável auxiliar e ao atender o critério, carregar esse valor diretamente no vetor, quanto, carregar o valor diretamente no vetor e se caso não atender ao critério, substituir esse valor do vetor e reiniciar o looping na mesma posição do vetor, até que a posição seja preenchida.     

--- column-break ---

```c
// Caso 01 - Auxiliar
for( i=0 ; i < tam ; i++ ) {
	do {
		printf("Informe um numero");
		scanf("%i", &num);
	 } while ( num < 0 ); 
	  alunos[i] = num  // So é armazenado no vetor, caso o número seja positivo.
}
```

--- column-break ---

```c
// Caso 02 - Substituição
for( i=0 ; i < tam ; i++ ) {
	do {
		printf("Informe um numero");
		scanf("%i", &alunos[i]);  //O Valor sempre é aramazenda no vetor, mas enquanto ele não atender ao critério ele é substituído.
	 } while ( num < 0 ); 
}
```
--- end-multi-column
### 🌿Vetor sem números Repetidos
--- start-multi-column: ID_g94z
```column-settings
Number of Columns: 2
Largest Column: standard
```

Em códigos que necessitam de vetores preenchidos por valores únicos, ou seja, sem repetição, podemos fazer algo semelhante a crítica de dados, mas dentro do loop 'for' se utiliza outro loop com do 'do while', que inicialmente é executado apenas uma vez por loop, mas se o número for repetido o 'if' acusará e o estado da 'flag', com isso o loop do for continuará até o momento em que o número não for repetido.

--- column-break ---

```c
for(i = 0; i < tam; i++){
	do {
		flag = 1;
		for (j = 0 ; j < i; j++){
			if(num[ i ] == num[ j ]) {
				flag = 0;
	}}} while (flag == 0);
}
```

--- end-multi-column
### 🌿Operações com Vetores
 
#### 🌱  Quantidade de elementos que atendem a determinado critério em um Vetor
--- start-multi-column: ID_885j
```column-settings
Number of Columns: 2
Largest Column: standard
```

Em situações em que se precise determinar a quantidade de elementos que atendem a uma especificidade, deve-se utilizar a estrutura de repetição 'if' dentro do 'for', desse modo é possível determinar um contador para a contagem de elementos. Ao lado, por exemplo, se determina a quantidade de elementos pares.

--- column-break ---

```c
for ( i = 0 ; i < tam ; i++ ){
	if (numeros[i] % 2 == 0)	{
		   cont++;	
		}}
```

--- end-multi-column
#### 🌱  Menor/Maior elemento em um Vetor
--- start-multi-column: ID_bxej
```column-settings
Number of Columns: 2
Largest Column: standard
```

Quando se precisa determinar um valor expoente ao todo, ou seja, qual é o maior valor ou qual é o menor valor, deve-se utilizar a estrutura de repetição 'for' com um 'if' dentro, ainda pode ser necessário utilizar uma segunda condicional para a primeira execução. O 'if' deve conter a comparação com o maior/menor valor já registrado. Ao lado, por exemplo, se determina o maior valor do vetor

--- column-break ---

```c
for ( i = 0 ; i < tam ; i++ ){
	if (maiornum < num[i])	{
		   maiornum[i];
		}}
```

--- end-multi-column
#### 🌱Posição de determinado elemento de um vetor
--- start-multi-column: ID_0092
```column-settings
Number of Columns: 2
Largest Column: standard
```

Em ocasiões em que se é preciso determinar em qual posição do vetor um determinado valor aparece, deve-se utilizar a estrutura de repetição 'for' acompanhado de um 'if', de forma semelhante as anteriores, mas nesta ocasião, se salva o índice do em que o elemento aparece, como exemplificado ao lado:

--- column-break ---

```c
for ( i = 0 ; i < tam ; i++ ){ 
	if (num[i] == '10') { // Ele enconta em quais indíces o número 10 está localizado e grava em um novo vetor
		indice[j] = i; 
}}
```

--- end-multi-column
## 🌳Matriz em C:

Várias das propriedades dos vetores se repetem para as matrizes, com a adição de um segundo 'for' que permite a execução para mais de um linha, o que não acontece nos vetores.

### 🌿Inicialização e Apresentação de uma Matriz:
--- start-multi-column: ID_ww3n
```column-settings
Number of Columns: 2
Largest Column: standard
```

Os processos de inicialização (preenchimento) de uma matriz e de apresentação de uma matriz ao usuário deve ocorrer dentro de uma estrutura de repetição 'for', onde o seu limite deve ser equivalente ao tamanho que possui, e o índice ocupará a função de contador.

--- column-break ---

```c
for( i = 0 ; i < tam ; i++ ) {
	for( j = 0 ; j < tam ; j++ ) {
// Inicialização ou apresentação de uma matriz
}}
```

--- end-multi-column
### 🌿Matriz Transposta
--- start-multi-column: ID_hclr
```column-settings
Number of Columns: 2
Largest Column: standard
```

Uma matriz transposta é quando o tamanho de suas colunas e linhas são invertidos. Exemplo quando uma matriz 2 X 3  se torna uma matriz 3 X 2, ou vice-versa. Para isso a ordem de apresentação, referente aos tamanhos, dos elementos deve ser alterada com no exemplo ao lado:
 
--- column-break ---

```c
for( i = 0 ; i < tamColuna ; i++ ) { // Normalmente se refere ao tamanho da Linha
	for( j = 0 ; j < tamLinha ; j++ ) { // Normalmente se refere ao tamanho da Coluna
}}
```

--- end-multi-column
### 🌿Diagonais de Uma Matriz

#### 🌱Diagonal Principal
--- start-multi-column: ID_2h6u
```column-settings
Number of Columns: 2
Largest Column: standard
```

A Diagonal Principal de uma Matriz é quando o índice da coluna e linha são os mesmos. Dessa forma, a execução será a mesma, mas dentro do segundo 'for' deve ter um verificador para determinar quando os índice serão iguais, como no exemplo ao lado:

--- column-break ---

```c
for ( i = 0; i < tam; i++){
	for ( j = 0; j < tam; j++){
		if( i == j ){
		// Código
		}}}
```

--- end-multi-column
#### 🌱Matriz Secundária
--- start-multi-column: ID_rypp
```column-settings
Number of Columns: 2
Largest Column: standard
```

Já a Diagonal Secundária se refere a diagonal oposta da principal, ela tem seu inicio no fim da matriz e cresce até chegar ao topo, ao contrário do que acontece na matriz principal. Para chegar a matriz secundária é preciso igual o índice 'i' ao 'tam - 1' (já que os índices são contados a partir do zero, e não do um) menos o índice 'j', como representado no exemplo ao lado:

--- column-break ---

```c
for ( i = 0; i < tam; i++){
	for ( j = 0; j < tam; j++){
		if( i == ( tam - 1 ) - j ){
		// Código
		}}}
```

--- end-multi-column














> [!banner-icon] 🌾

