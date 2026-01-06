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
## 🌳Definição de Registro

O Registro, também conhecido como vetor heterogêneo, basicamente é um vetor que permite diversos tipos de variáveis em seu interior, inclusive novos registros.

### 🌿Definindo um novo tipo de variável
--- start-multi-column: ID_slea
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Registro deve ser declarado em escopo global, ou seja for do 'int main', iniciado pelo tipo 'struct' e o nome do tipo, **não da variável**, e dentro dessa estrutura deve ser declarado os campos, junto com seus respectivos tipos. Sua Declaração deve conter o tipo 'struct', o tipo criado e o nome da variável, como no exemplo ao lado:

--- column-break ---

```c
 struct cadastro {
	int codigo;
	char nome[50], enderenco[100];
};

int main(){
	struct cadastro pessoas;
}
```

--- end-multi-column
### 🌿Apelidos para Tipos 
--- start-multi-column: ID_wtx6
```column-settings
Number of Columns: 2
Largest Column: standard
```

Também é possível adicionar apelidos para tipos de variáveis, o que permite suprimir partes na declaração, além de permitir a utilização de códigos mais claros. Para essa função, se deve utilizar a estrutura 'typedef' antes da declaração da estrutura e na declaração se substitui o 'struct' e o nome do tipo, pelo apelido, como exemplificado ao lado:

--- column-break ---

```c
 tupedef struct cadastro {
	int codigo;
	char nome[50], enderenco[100];
}, tp_cadastro;

int main(){
	tp_cadastro pessoas;
}
```

--- end-multi-column
### 🌿Inicialização e Apresentação de Variáveis Heterogêneas
--- start-multi-column: ID_ud8f
```column-settings
Number of Columns: 2
Largest Column: standard
```

Tanto a inicialização quanto a apresentação de variáveis heterogêneas se assemelham a de variáveis comuns, com uma única exceção, nesses casos além da variável, se deve declarar qual campo do código se deseja alcançar. No exemplo ao lado, está exemplificado a leitura do campo código que está dentro da variável pessoas.

--- column-break ---

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

--- end-multi-column



![[Algoritimos 01.png|banner]]
> [!banner-icon] 🌿

