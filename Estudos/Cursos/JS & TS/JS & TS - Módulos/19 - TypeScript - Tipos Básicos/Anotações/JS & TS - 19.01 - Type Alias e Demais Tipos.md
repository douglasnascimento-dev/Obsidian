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

## 🌿Type Alias

O Type Alias permite a definição de Tipo de modo não atrelado a sua utilização. Isso permite a reutilização de Tipos em múltiplos locais. 

```ts
type Idade = number;
type cores = 'VERMELHO' | 'AMARELO' | 'AZUL';

type Pessoa = {
  nome: string;
  Idade: Idade;
  cor?: cores;
};
```

## 🌿Intersection Types. 

Enquanto o Union Types, representa um Conjunto de União. O Intersection Types representam um Conjunto de Intersecção, ou seja apenas o que for comum entre todos os conjuntos é válido. 

```ts
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa2 = TemNome & TemSobrenome & TemIdade;

const pessoa2: Pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
```

## 🌿Funções como Tipo

Assim como com as Variáveis, é possível criar Funções como um Tipo

```ts
type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callback: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
};

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
```

## 🌿Funcionamento de Tipos em TS

Diferentemente de outras Linguagens mais rígidas como Java, o TS não analisa a assinatura do Tipo para verificar uma validação, mas se esse tipo cumpre as restrições impostas. 

```ts
type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentUser) => {
  return user.username === sentUser.username && user.password === sentUser.password;
};

const dbUser: User = { username: 'joao', password: '123456' };
const sendUser = { username: 'joao', password: '123456', permisions: '78' };
```

No caso acima, mesmo a Constante `sendUser` não possuir o Tipo `User` e possuir um atributo não declarado no