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
> [!banner-icon] :LiNotebook: Listas
> 
# 🌳O Que é?

Assim como em demais linguagens, em Java, também há a estrutura de dados - Lista, ele naturalmente é uma interface, não instanciável. Mas há versões optimizadas como o 'ArrayList'.

Em Java listas podem ser apenas de Tipos de Referência, não aceitando Tipos primitivos.

```java

List<Integer> list = new ArrayList<>();

```

## 🌿Métodos

- **add**(valor) | Adiciona elementos na Lista.
- **add**(posição, valor) | Adiciona elementos em determinada posição na Lista.

- **remove**(valor) | Remove elementos na Lista.
- **remove**(posição) | Remove elementos em determinada posição na Lista.
- **removeIf**( função lambida | *ex: x-> x.charAt(0) == M* ) | Remove elementos que atendam a função lambida. 

- **size**() | Tamanho da Lista.
- **indexOf**(valor) | Encontra a posição de um valor.

### 🌿Filtragem

```java
List<String> result = list.stream().filter(x -> x.charAt(0) == 'A').collect(Collectors.toList())
```

Esse comando realiza as seguintes operações: 
1. ```live.stream()``` | Transforma um Lista em Stream;
2. ```.filter(expressão lambda)``` | Executa a expressão lambda junto ao Stream; e
3. ```.collect(Collctors.toList())``` | Transforma o Stream em Lista novamente.

### 🌿Filtragem - Primeiro Elemento

```java
String result = list.stream().filter(x -> x.charAt(0) == 'A').findFirst().orElse(null);
```

Esse comando realiza as seguintes operações: 
1. ```live.stream()``` | Transforma um Lista em Stream;
2. ```.filter(expressão lambda)``` | Executa a expressão lambda junto ao Stream; e
3. ```.findFirst().orElse(null);``` |  Encontrará o primeiro elemento ou então retornará o 'null'. 