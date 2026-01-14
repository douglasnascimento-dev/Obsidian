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

![[Programação Orientada a Objetos - 01.png|banner]]
> [!banner-icon] 🌿Aula 02.04.25

## 🌳 Mudanças de Tipo em Java: Wrappers e Casting

Java é uma linguagem fortemente tipada, o que significa que é necessário converter tipos de dados em diversas situações. As mudanças de tipo podem ser feitas de duas formas principais: usando _wrappers_ ou _casting_.

### 🌿Utilizando Casting

O Casting é um metódo nativo para mudar o tipo de uma variável. ==O Casting só pode ser utilizando com tipos primitivos==. Exemplo de uso do Casting:

```java
double num = 10.5752
int num2 = (int) num
```

Observe que é necessário avisar a Linguagem Java que a mudança do tipo é realmente proposital, uma vez que o aviso '(tipo)' não ocorrer a Linguagem Java entenderá como um erro

### 🌿As Classes Wrappers

As classes wrappers, em português as classes envelopes, são métodos externos que permite mudar a tipagem mesmo com elementos abstratos, como a String

- 🌱Integer.parseInt( *int ou String* )
- 🌱Double.parseDouble( *double ou String* )
- 🌱Float.parseFloat( *float, double ou String* )
- 🌱Long.parseLong( *long ou String* )
- 🌱Short.parseShort( *short ou String* )
- 🌱Byte.parseByte( *byte ou String* )
- 🌱Boolean.parseBoolean( *boolean ou String* )
- 🌱Char.parseChar( *char* )

Essas classes permitem alterar o tipo, principalmente de String, de forma que com exceção do char, todos os outros tipos podem se derivar de uma String