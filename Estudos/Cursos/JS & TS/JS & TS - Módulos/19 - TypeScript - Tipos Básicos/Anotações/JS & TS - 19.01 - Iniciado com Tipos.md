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

# 🌳O Que é?

O TypeScript diferentemente do JavaScript Puro é muito mais aderente a Tipagem, que aqui necessita de ocorrer de acontecer de modo manual em determinados, embora ainda mantenha características da Tipagem Dinâmica. 

## 🌿Tipos Primitivos

### 🌱Number > Número
### 🌱 String > Escrita
### 🌱 Boolean > Booleano
### 🌱 BigInt > Número com Suporte a Números Arbitrariamente Grandes

Observe que é necessário declarar o 'n' após o numeral

```ts
const largeIntLiteral: bigint = 9007199254740991n;
```

### 🌱 Symbol > São valores únicos e imutáveis

A Declaração abaixo é Falso, pois os Symbols são únicos

```ts
let sym2 = Symbol("key");
let sym3 = Symbol("key");
sym2 === sym3; 
```
