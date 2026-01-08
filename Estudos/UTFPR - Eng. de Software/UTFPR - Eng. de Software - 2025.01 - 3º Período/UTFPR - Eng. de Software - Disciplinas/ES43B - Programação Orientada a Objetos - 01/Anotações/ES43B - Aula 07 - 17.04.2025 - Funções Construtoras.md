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

![[Programação Orientada a Objetos.png|banner]]
> [!banner-icon] 🌿Aula 17.04.25

## 🌳 Métodos Construtores em Java

Em Java, métodos construtores são especiais responsáveis por inicializar objetos de uma classe. Eles têm o mesmo nome da classe, não possuem tipo de retorno e podem ser sobrecarregados para permitir diferentes formas de criar um objeto.

### 🌿 Características dos Construtores

- O nome do construtor é _sempre igual_ ao nome da classe.

- Construtores _não possuem tipo de retorno_, nem mesmo 'void'.

- Se nenhuma forma de construtor for fornecida, o compilador Java cria um _construtor padrão_ vazio automaticamente.

- Construtores podem ser sobrecarregados (_overloading_), permitindo criar objetos com diferentes conjuntos de parâmetros.


### 🌿 Exemplo de Construtor Padrão

--- start-multi-column: ID_2xqr
```column-settings
Number of Columns: 2
Largest Column: standard
```

Inicializa os atributos com valores padrão e imprime uma mensagem

--- column-break ---

```java
java public class Pessoa { 
	private int cpf; 
	private String nome; 
	private Endereco ender; 
	
	public Pessoa() { 
		System.out.println("\nConstrutor Default de Pessoa"); 
		cpf = 0; 
		nome = ""; 
		ender = new Endereco;
	}
}
```

--- end-multi-column
### 🌿 Exemplo de Construtor com Parâmetros


--- start-multi-column: ID_bnqn
```column-settings
Number of Columns: 2
Largest Column: standard
```

Permite criar o objeto já atribuindo valores aos atributos.

--- column-break ---

```java
java public Pessoa(int cpf, String nome, Endereco ender) {
	this.cpf = cpf; 
	this.nome = nome; 
	this.ender = ender;
}
```

--- end-multi-column
### 🌿 Uso de _this_

- A palavra-chave _this_ é usada para diferenciar o atributo da classe do parâmetro do construtor.

- Exemplo: 'this.nome = nome;' significa que o atributo 'nome' do objeto recebe o valor do parâmetro 'nome' passado.

