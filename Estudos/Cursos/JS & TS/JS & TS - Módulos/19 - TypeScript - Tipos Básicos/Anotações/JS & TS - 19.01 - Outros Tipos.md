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

## 🌿Any

Representa que Qualquer Tipo é valido. A Utilização desse Tipo não é Recomendada por Linters e Indica uma Flexibilização na Tipagem, indo em sentindo contrário dos Paradigmas do TS. 

```ts
function showMessage(msg: any) {
  return msg;
}
```

## 🌿Void

Quando utilizado em Funções representa que não haverá Retorno. É uma Boa Prática utilizar para Representar que Funções não irão retornar valores.

```ts
function semRetorno(msg: string): void {
  console.log('Esta função não retorna nada' + msg);
}
```

## 🌿Object

```ts
const data2: {
  dia: string;
  mes: string;
  ano: string;
  [key: string]: unknown; // permite a criação de chaves extras
} = {
  dia: '1',
  mes: '1',
  ano: '1',
};
```

É o Tipo que define um Objeto. Observe que há uma Declaração Especial aqui. É Declarado uma Chave Extra que irá permitir a Criação de novas Chaves.

## 🌿Function 

```ts
export function createPerson(
  first: string,
  last: string,
): {
  first: string;
  last: string;
} {
  return {
    first,
    last,
  };
}
```

Observe que a cada Retorno, é necessário indicar a Tipagem deste. No caso acima, isso provavelmente ocorreria por dedução do TS, mas em demais casos, é importante essa declaração. 

## 🌿Tuple

Similar a Tupla de uma Tabela. Sua estruturação é similar a de Campos de uma Tabela. Podendo conter dados de diferentes tipos em uma mesmo "linha".

```ts
const dadosCliente: [number, string] = [1, 'Luiz'];
```


## 🌿Undefined vs Null

Seguindo as Boas Práticas é comum se evitar utilizar o Tipo Undefined. Para isso, é utilizado o Tipo Null, que por convenção é assimilado a uma utilização consciente do Desenvolvedor, diferentemente do Undefined que também pode ser uma produção da Própria Linguagem. 

```ts
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
```

## 🌿Never 

Indica que não há retorno nunca. Esse tipo é comumente utilizado em casos onde há a geração de erros, 