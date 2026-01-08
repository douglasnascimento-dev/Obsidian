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
> [!banner-icon] 🌿Aula 27.04.25


## 🌳 Herança

A herança é um dos pilares da programação orientada a objetos e permite que uma classe (chamada _subclasse_ ou _classe derivada_) herde atributos e métodos de outra classe (chamada _superclasse_ ou _classe base_). Através dela, podemos reutilizar código e especializar comportamentos.

No exemplo, a classe 'Aluno' herda da classe 'Pessoa', o que significa que 'Aluno' possui todos os atributos ('cpf', 'nome', 'ender') e métodos ('getCpf', 'setCpf', etc.) de 'Pessoa', além dos seus próprios.

### 🌿 Estrutura da herança

A declaração 'public class Aluno extends Pessoa' indica que 'Aluno' é uma subclasse de 'Pessoa'. Com isso:

- 'Aluno' possui acesso direto aos métodos públicos da classe 'Pessoa', como 'getNome()', 'getCpf()', 'setNome()', etc.

- Atributos privados da superclasse ('cpf', 'nome', 'ender') continuam encapsulados, mas podem ser manipulados por meio dos métodos públicos herdados.

- Métodos podem ser sobrescritos (override) para comportamentos específicos da subclasse, se necessário.

### 🌿 Exemplo de uso da herança (sem tabelas)

```java
Endereco end = new Endereco();
Aluno aluno1 = new Aluno();
aluno1.setNome("Lucas");
aluno1.setCpf(123456789);
aluno1.setCurso("Engenharia");

System.out.println(aluno1.getNome()); // método herdado de Pessoa
System.out.println(aluno1.getCurso()); // método da própria classe Aluno
```
