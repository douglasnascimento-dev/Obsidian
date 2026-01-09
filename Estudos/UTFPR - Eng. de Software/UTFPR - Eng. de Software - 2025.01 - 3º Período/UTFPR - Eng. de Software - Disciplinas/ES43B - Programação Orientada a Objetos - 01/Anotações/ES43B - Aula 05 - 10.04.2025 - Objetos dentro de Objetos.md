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

![[Programação Orientada a Objetos.png|banner]]
> [!banner-icon] 🌿Aula 10.04.25

## 🌳Objetos dentro de Objetos dentro de outros Objetos

Quando se usa um Objeto como tipo de dado em um Objeto que também será utilizado como tipo de dado, é necessário se atentar ao uso de getters e setters. Ex. Endereço > Pessoa > TestePessoa

### 🌿Definindo valores através de getters
--- start-multi-column: ID_rx3p
```column-settings
Number of Columns: 2
Largest Column: standard
```

Para acessar um objeto que está dentro de um segundo objeto, é necessário utilizar um get para obter o objeto e depois utilizar o método próprio do objeto para definir o valor desse segundo objeto

--- column-break ---

```java
public class TstPes {
	public static void main(String[] args){

		Pessoa p1 = new Pessoa();

		p1.setCpf(10);
		p1.setNome("Douglas");
		p1.getEnder().setNum(10);
		p1.getEnder().setRua("A");

		System.out.printf("CPF é %d\n", p1.getCpf());
		System.out.printf("Nome é %s\n", p1.getNome());
		System.out.printf("A Rua é %s\n", p1.getEnder().getRua());
		System.out.printf("O Número é %s\n", p1.getEnder().getNum());
	}
}
```

--- end-multi-column
### 🌿Usando um objeto dentro de um segundo objeto
--- start-multi-column: ID_0oz9
```column-settings
Number of Columns: 2
Largest Column: standard
```

Usar um segundo objeto, dentro de um objeto, é similar a declaração de um tipo de dado abstrato. é necessário inicializar o objeto, e após isso, é so definir o getter e setter, que será único.

--- column-break ---


```java
public class Pessoa {

	private int cpf = 0;
	private String nome = "";
	private Endereco ender = new Endereco(); 

	public int getCpf(){
		return cpf;
	}

	public String getNome(){
		return nome;	
	}

	public Endereco getEnder(){
		return ender;	
	}

	public void setCpf(int cpf){
		this.cpf = cpf;
	}

	public void setNome(String nome){
		this.nome = nome;
	}

	public void setEnder(Endereco ender){
		this.ender = ender;
	}
}
```

--- end-multi-column

