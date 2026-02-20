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
> [!banner-icon] Módulo 22

## 🍏 Generics & Callbacks

**Conceito:** Os _Generics_ permitem criar componentes reutilizáveis que funcionam com vários tipos de dados, mantendo a segurança de tipagem. No exemplo abaixo, `<T>` captura o tipo dos elementos do array (seja `number`, `string`, ou objeto), garantindo que o _callback_ receba esse mesmo tipo e que a função retorne um array do mesmo tipo.

### 🌿 Implementação

```ts
// Define a assinatura da função de teste (predicado)
// U representa o tipo do valor que está sendo testado
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const novoArray: T[] = []; // O array retornado terá o mesmo tipo T

    for (let i = 0; i < array.length; i++) {
        const valorAtual = array[i];

        // Executa o callback. Se retornar true, mantém o elemento.
        if (callbackfn(valorAtual)) {
            novoArray.push(valorAtual);
        }
    }

    return novoArray;
}
```

> Utilizando a Função:

```ts
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exemplo 1: Filtrando Números (T torna-se number)
const filtradoCustomizado = meuFilter(array, (value) => value < 5);
console.log(filtradoCustomizado); 
// ➝ [1, 2, 3, 4]

// Exemplo 2: Generics em ação (T torna-se string)
const nomes = ["Ana", "Bruno", "Amanda"];
const nomesComA = meuFilter(nomes, (nome) => nome.startsWith("A"));
// ➝ Retorna string[]: ["Ana", "Amanda"]
```

