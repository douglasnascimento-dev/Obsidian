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

![[Programação Orientada a Objetos.png|banner]]
> [!banner-icon] 🌿Aula 08.04.25

## 🌳Organização de Objetos
--- start-multi-column: ID_euq6
```column-settings
Number of Columns: 2
Largest Column: standard
```

Por convenção, objetos que provém de de abstrações, isso é representam objetos do mundo real, devem possuir apenas getters e setters, já objetos gerais podem ter outros métodos e atributos


--- column-break ---

```java
public class Pessoa {

	private int cpf = 0;
	private String nome = "";

	public int getCpf(){
		return cpf;
	}

	public String getNome(){
		return nome;	
	}

	public void setCpf(int cpf){
		this.cpf = cpf;
	}

	public void setNome(String nome){
		this.nome = nome;
	}

}
```

--- end-multi-column
### 🌿Objetos não abstratos
--- start-multi-column: ID_jgex
```column-settings
Number of Columns: 2
Largest Column: standard
```

Diferentemente dos objetos que provém de abstrações, os demais objetos não necessitam seguir as normas de utilização de getters e setters, isso permite que esse objetos manipulem os objetos abstratos, como se fossem tipos abstratos de dados

--- column-break ---

```java
public class TstPes {

	public static void main(String[] args){

		Pessoa p1 = new Pessoa();
		Pessoa p2 = new Pessoa(); 

		p1.setCpf(10);
		p1.setNome("Douglas");
		
		p2.setCpf(20);
		p2.setNome("Dgas");

		System.out.printf("CPF é %d\n", p1.getCpf());
		System.out.printf("Nome é %s\n", p1.getNome());
		System.out.printf("CPF é %d\n", p2.getCpf());
		System.out.printf("Nome é %s\n", p2.getNome());

	}
}
```

--- end-multi-column




