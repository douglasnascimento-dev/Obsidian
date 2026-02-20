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

## 🍏 Intersecção com Generics

**Conceito:** Uma _Intersecção com Generics_ acontece quando um Retorno, ou em outro Local de Tipagem, demanda o Retorno de Dois Tipos em uma União. No exemplo abaixo, `<O1>` e  `<O2>` representam dois Tipos, que Unidos retornariam `O1 & O2`

### 🌿 Implementação

```ts
export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
	return Object.assign({}, obj1, obj2)
}
```

> Utilizando a Função:

```ts
const obj1 = { chave1: 'valor1' }
const obj2 = { chave2: 'valor2' }
const obj3 = { chave3: 145 }

// Exemplo 1: Unindo Objetos (<O1, O2> torna-se <{ chave1: string; }, { chave2: string; }>) 
const union1 = joinObjects(obj1, obj2)
// TIPO DE RETORNO: ➝  { chave1: string; } & { chave2: string; } //

// Exemplo 1: Unindo Objetos (<O1, O2> torna-se <{ chave1: string; }, { chave2: number; }>) 
const union2 = joinObjects(obj1, obj3)
// TIPO DE RETORNO: ➝  { chave1: string; } & { chave2: number; } //
```

