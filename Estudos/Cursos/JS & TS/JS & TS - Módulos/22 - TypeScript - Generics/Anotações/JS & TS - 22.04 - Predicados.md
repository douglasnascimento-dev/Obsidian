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

## 🍏 Predicados

**Conceito:** Uma Predicado indica que o retorno de uma Função possui o poder de "Filtragem", ou seja, se caso o Valor Retornado pela Função seja  `true` o TS irá entender que o Predicado no Retorno, nesse padrão: `vales is TYPE` , é Verdadeiro. No exemplo abaixo, a Função `isNumber` verifica se os Valores enviados são do Tipo `number`
### 🌿 Implementação

```ts
export function isNumber(value: unkown): value is number {
	return type of value === 'number'		
}
```

> Utilizando a Função:

```ts
const valores: (number | string)[] = [12, "texto", 45, "olá"];

// Exemplo 1: Utilizando o predicado para filtrar Arrays
const apenasNumeros = valores.filter(isNumber);
// TIPO INFERIDO DE 'apenasNumeros': ➝ number[] //
// VALOR: ➝ [12, 45] //

// Exemplo 2: Utilizando em condicionais para refinamento de tipo (Type Narrowing)
function processar(valor: number | string) {
    if (isNumber(valor)) {
        return valor.toFixed(2);
        // TIPO INFERIDO DE 'valor' AQUI DENTRO: ➝ number //
    }
    
    return valor.toUpperCase();
    // TIPO INFERIDO DE 'valor' AQUI FORA: ➝ string //
}
```

