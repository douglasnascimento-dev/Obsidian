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

É o Tipo que define um Objeto. Observe que há uma Index Signature (Assinatura de Índice) aqui. Essa é uma Declaração de uma Chave Extra que irá permitir a Criação de novas Chaves.

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

Similar a Tupla de uma Tabela. Sua estruturação é similar a de Campos de uma Tabela. Podendo conter dados de diferentes tipos em uma mesmo "linha". Diferentemente de Arrays, as Tupla tem tamanho fixo e a ordem dos tipos importa rigorosamente.

```ts
const dadosCliente: [number, string] = [1, 'Luiz'];
```


## 🌿Undefined vs Null

Embora existente, seu uso não é muito comum, devido que isso causa uma dupla checagem, para `null` e `undefined`, e muitos desenvolvedores preferem utilizar apenas `undefined` para padronizar os tipos de vazio. 

```ts
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
```

## 🌿Never 

O tipo 'never' indica que a função jamais retornará um valor para quem a chamou. Isso acontece em dois casos principais:
1. A função lança um erro (o script é interrompido ou o erro sobe a pilha).
2. A função entra em um loop infinito ('while(true)').

```ts
function criaErro(): never {
  throw new Error('Erro');
}
```
