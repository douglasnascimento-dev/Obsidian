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

![[Algoritimos - 01.png|banner]]


## 🌳Definição de Registro

O Registro, também conhecido como vetor heterogêneo, basicamente é um vetor que permite diversos tipos de variáveis em seu interior, inclusive novos registros.

### 🌿Definindo um novo tipo de variável

O Registro deve ser declarado em escopo global, ou seja for do 'int main', iniciado pelo tipo 'struct' e o nome do tipo, **não da variável**, e dentro dessa estrutura deve ser declarado os campos, junto com seus respectivos tipos. Sua Declaração deve conter o tipo 'struct', o tipo criado e o nome da variável, como no exemplo ao lado:

```c
 struct cadastro {
	int codigo;
	char nome[50], enderenco[100];
};

int main(){
	struct cadastro pessoas;
}
```

### 🌿Apelidos para Tipos 

Também é possível adicionar apelidos para tipos de variáveis, o que permite suprimir partes na declaração, além de permitir a utilização de códigos mais claros. Para essa função, se deve utilizar a estrutura 'typedef' antes da declaração da estrutura e na declaração se substitui o 'struct' e o nome do tipo, pelo apelido, como exemplificado ao lado:

```c
 tupedef struct cadastro {
	int codigo;
	char nome[50], enderenco[100];
}, tp_cadastro;

int main(){
	tp_cadastro pessoas;
}
```

### 🌿Inicialização e Apresentação de Variáveis Heterogêneas

Tanto a inicialização quanto a apresentação de variáveis heterogêneas se assemelham a de variáveis comuns, com uma única exceção, nesses casos além da variável, se deve declarar qual campo do código se deseja alcançar. No exemplo ao lado, está exemplificado a leitura do campo código que está dentro da variável pessoas.

```C
tupedef struct cadastro {
	int codigo;
	char nome[50], enderenco[100];
}, tp_cadastro;

int main(){
	tp_cadastro pessoas;
	printf("%i", &cadastro.codigo)
}
```




