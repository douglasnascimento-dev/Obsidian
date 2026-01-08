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
> [!banner-icon] 🌿Aula 03.04.25

## 🌳O Que são classes e objetos?

Uma classe é um modelo ou um molde para criar objetos. Um objeto é uma instância de uma classe, contendo estados (atributos) e comportamentos (métodos).

### 🌿Declarando e Instanciando um Objeto

```java
		Pessoa p1 = new Pessoa(), p2 = new Pessoa(); 
```

Observe que essa linha representa tanto a declaração de uma variável quanto a instância de uma classe. A declaração é o processo em que o programa informa ao compilador que haverá uma variável do tipo 'Pessoa', o que resulta na alocação de um endereço de memória, mas esse endereço ainda não contém um objeto válido. Já o processo de instanciação, que acontece com a atribuição, determina quanto espaço será necessário reservar para o objeto. Esse processo é essencial para tipos abstratos, pois, ao contrário dos tipos primitivos, o sistema operacional não sabe previamente quanto espaço será necessário alocar.

### 🌿Atributos e Métodos em Objetos

```java
	int cpf = 0;
	String nome = "";

	public static void main(String[] args){
	}

	public void entDados(int a, String b){
		cpf = a;
		nome = b;
	}

	public void impDados(){
		System.out.println("\n CPF é " + cpf);
		System.out.println("\n Nome é " + nome);
	}
}
```

Observe que os atributos são as variáveis que estão no escopo global, enquanto os métodos serão as funções (nome utilizado principalmente em linguagem estruturadas) que estão dentro da respectiva classe.