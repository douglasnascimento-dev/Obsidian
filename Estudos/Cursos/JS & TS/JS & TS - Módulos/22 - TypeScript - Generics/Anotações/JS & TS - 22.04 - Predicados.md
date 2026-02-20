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
isNumber(12)

// Exemplo 1: Unindo Objetos (<O1, O2> torna-se <{ chave1: string; }, { chave2: string; }>) 
isNumber(12)
// TIPO DE RETORNO: ➝  { chave1: string; } & { chave2: string; } //

// Exemplo 1: Unindo Objetos (<O1, O2> torna-se <{ chave1: string; }, { chave2: number; }>) 
isNumber(12)
// TIPO DE RETORNO: ➝  { chave1: string; } & { chave2: number; } //
```

