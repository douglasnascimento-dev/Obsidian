---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Conteúdo: Anotações sobre Ponteiros e Passagem por Referência, tanto por código quanto utilizando o Terminal de Comando (CMD)
---

![[Algoritimos 02.png|banner]]
> [!banner-icon] 🌿Ponteiros
## 🌳Ponteiro e Passagem por Referência
--- start-multi-column: ID_qjzt
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Ponteiro apontará o local da variável na memória, em vez do valor da variável, como é comumente feito. Para isso, se utiliza o '&' ao passar o parâmetro e o '\*' ao receber o parâmetro. Um alteração no local de memória  de uma variável alterará definitivamente o valor de uma variável. No exemplo ao lado, a mudança só ocorre definitivamente ao usar a passagem por referência.

--- column-break ---



```c
//função que soma 10 ao valor recebido
void soma10(int x) {
  x = x + 10;  
  printf("Valor de x apos a soma = %d \n",x);
  return; }

void soma10p(int *x) {
  *x = *x + 10;  
  printf("Valor de x apos a soma = %d \n",*x);
  return; }

int main(void) {
  int numero = 10
  
  soma10(numero);  //chamada da função
  printf("Agora o numero vale: %d \n",numero);    // 10
  
  soma10p(&numero);  //chamada da função com ponteiro como parâmetro
  printf("Agora o numero vale: %d \n",numero);  // 20
  return 0; }
```

--- end-multi-column
## 🌳Passagem de parâmetros por Linha de Comando
--- start-multi-column: ID_pvet
```column-settings
Number of Columns: 2
Largest Column: standard
```

Além da passagem de parâmetros interno (por função) e pelo usuário (utilizando o *scanf*), também é possível utilizar a passagem de parâmetros por linha de comando. Para isso, é necessário utilizar o CMD (Terminal de Comando). A Função irá receber dois parâmetros, independentemente da quantidade de argumentos passados. O *argv* é um vetor que contém todos os parâmetros passados. Observe que o **primeiro parâmetro sempre será o nome do arquivo** e que **se não houver espaço entre os parâmetros eles serão considerados únicos**. Já o *argc* contém o número de argumentos passados a função. **Ele sempre terá no mínimo um de tamanho**. Já que o nome do arquivo sempre será passado ao *argv*

--- column-break ---

```c
int main(int argc, char *argv[]){
	return 0;
}
```

--- end-multi-column





