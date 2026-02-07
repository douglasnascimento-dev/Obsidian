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

Enquanto o Union Types, representa um Conjunto de União. Ao contrário da teoria dos conjuntos básica onde a interseção reduz os itens, em Objetos TypeScript a Intersection (`&`) **soma** as propriedades. O objeto final deve possuir **todas** as características de todos os tipos combinados."

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

## 🌿### Funcionamento de Tipos em TS (Structural Typing)

Também chamado de **Duck Typing** ("Se anda como pato e grasna como pato, é um pato"). Diferentemente de outras Linguagens mais rígidas como Java, o TS não analisa a Assinatura do Tipo para Validar algo, mas verifica se esse Tipo cumpre as Restrições Impostas. 

```ts
type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentUser) => {
  return user.username === sentUser.username && user.password === sentUser.password;
};

const dbUser: User = { username: 'joao', password: '123456' };
const sendUser = { username: 'joao', password: '123456', permisions: '78' };
```

No Caso Acima, mesmo a Constante `sendUser` não possuindo o Tipo `User` e possuindo um Atributo não Declarado no Tipo `User`, a Variável é considerada Válida, pois cumpre as Restrições impostas pelo TS. Entretanto, se ela fosse declarada na chamada da Função, ela seria considerada Inválida, pois o TS faz uma checagem extra chamada **Excess Property Check** (Checagem de Propriedade Excessiva) quando passamos o objeto literalmente dentro da função.

## 🌿Non-Null Assertion

Indica que um Valor que poderia ter como Tipo `null` não será `null`. Esse mecanismo é representado pelo caractere `!`. **Atenção: esse Mecanismo retira a Necessidade de Verificação imposta pelo TS.**

```TS
const body = document.querySelector('body')!;
body.style.background = 'red';
```

