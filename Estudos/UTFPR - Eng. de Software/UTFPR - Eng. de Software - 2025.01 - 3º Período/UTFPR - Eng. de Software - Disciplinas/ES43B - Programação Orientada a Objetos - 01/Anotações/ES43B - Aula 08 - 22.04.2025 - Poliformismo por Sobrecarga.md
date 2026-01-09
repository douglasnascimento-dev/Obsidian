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
> [!banner-icon] 🌿Aula 22.04.25



## 🌳 Polimorfismo por Sobrecarga (Overloading)

O _polimorfismo por sobrecarga_ ocorre quando métodos ou construtores compartilham o mesmo nome, mas diferem em quantidade, tipo ou ordem dos parâmetros. Esse tipo de polimorfismo acontece em tempo de compilação (_compile-time polymorphism_).

Na classe `Pessoa`, temos três versões do construtor com o mesmo nome, mas assinaturas diferentes, caracterizando **sobrecarga de construtores**.

### 🌿 Exemplo na classe `Pessoa`

--- start-multi-column: ID_muw5
```column-settings
Number of Columns: 2
Largest Column: standard
```

- 1º Construtor → *Construtor padrão (sem parâmetros). Inicializa com valores genéricos.*
- 2º Construtor → *Construtor com todos os atributos, na ordem padrão (int, String, Endereco).*
- 3º Construtor → *Construtor com os mesmos tipos, mas ordem diferente dos parâmetros. Ainda é válido, pois a assinatura é única.*

--- column-break ---

```java
	public Pessoa(){
		System.out.println("\n Construtor Default de Pessoa");
		cpf = 0;
		nome = "";
		ender = new Endereco();
	}
	
	public Pessoa(int cpf, String nome, Endereco ender){
		System.out.println("\n Construtor Sobrecarga-1 de Pessoa");
		this.cpf   = cpf;
		this.nome  = nome;
		this.ender = ender;
	}
	
	public Pessoa(int x, Endereco z, String y){
		System.out.println("\n Construtor Sobrecarga-2 de Pessoa");
		this.cpf   = x;
		this.nome  = y;
		this.ender = z;
	}
```

--- end-multi-column
