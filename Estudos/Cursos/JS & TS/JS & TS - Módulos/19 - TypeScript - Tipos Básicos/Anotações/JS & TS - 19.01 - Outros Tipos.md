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

## 🌿Tuple

Similar a Tupla de uma Tabela. Sua estruturação é similar a de Campos de uma Tabela. Podendo conter dados de diferent

