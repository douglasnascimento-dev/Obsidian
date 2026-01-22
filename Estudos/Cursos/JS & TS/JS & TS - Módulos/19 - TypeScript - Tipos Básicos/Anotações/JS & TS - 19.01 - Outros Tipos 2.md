---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
---


![[JS & TS.png|banner]]
> [!banner-icon] Módulo 19

## 🌿Enum

```ts
enum Cores {
  VERMELHO = 204, // A CONTAGEM INICIA DO 204
  AZUL,
  AMARELO,
  ROXO = 'ROXO',
}

enum Cores {
  PRETO,
  BRANCO,
}
```

O Tipo Enum é como um Seletor de Escolhas. Ele permite utilizar Valores Predefinidos. Os Enum's possuem um índice e um valor, que podem ser o mesmo como no Exemplo do Roxo. Eles também podem ter Índices Numéricos, que por padrão iniciam no 0, ou pode ser definido manualmente.  

Os Enum podem se juntar automaticamente, se caso possuírem o mesmo nome. A Utilização de Enum's possuem um pequeno maleficio, uma vez, que as sugestões automáticas de IDE's não possuem total rigorosidade, e irão apresentar sugestões inválidas, ou não apresentar nenhuma sugestão, mesmo havendo possibilidades válidas. 

##  🌿Unknown

Esse tipo representa um tipo 'Desconhecido'. Ele é uma possibilidade de uso em relação ao `Any`. Já que a Engine do TS tem maior controle sobre seu uso, e realiza alertas se caso for utilizado antes de uma checagem válida. 

## 🌿Union Types

Representa a União de Tipos, ou seja, em determinados casos pode ser lido como 'Ou'. É representado pelo caractere `|`.

```ts
string | number | boolean
```

## 🌿Tipos Literais

Os Tipos Literais representam tipos que podem ter apenas um valor. Seu tipo é literalmente seu valor. 

```ts
let x = 10; // tipo number
const y = 100; // tipo 100 (literal) -- subtipo de number
let a: 100 = 100; // tipo 100 (literal) | NÃO RECOMENDADO
```

## 🌿as const

```ts
const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Murando',
};
```

Para evitar que um atributo de um Objeto seja manipulado, é possível utilizar o `as const`, que definirá que a partir daquele momento o tipo deixa de ser o definido e se torna um Tipo Literal. 

## 🌿 Opcional

Quando um atributo, ou em demais utilizações cabíveis, for opcional, é possível declarar essa característica utilizando o caractere `?`.  

```ts
  nome: string;
  Idade: Idade;
  cor?: cores;
```
