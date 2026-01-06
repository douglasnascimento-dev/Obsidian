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


![[Java.png|banner]]
> [!banner-icon] :LiNotebook: For Each
# 🌳O Que é?

Assim como em demais linguagens, em Java também é possível utilizar a estrutura de For Each, ele ira percorrer todo o vetor e desmembra a cada posição, um objeto filho.

```java
for(Tipo nome : array){
	comandos
}
```

> **Exemplo de For Each:**
> Extraindo nomes dos alunos no vetor de String nomeAlunos

```java
for(String nome : nomeAlunos){
	System.out.printf("O Nome do Aluno é %c", nome)
}
```
