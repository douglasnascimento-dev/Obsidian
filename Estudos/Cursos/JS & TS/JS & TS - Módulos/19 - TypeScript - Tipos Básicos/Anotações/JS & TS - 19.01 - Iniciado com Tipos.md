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

## 🌿Tipos de Referência

### 🌱Arrays

Existem duas formas de criar Arrays em TS. Usando o Tipo Array com o Genérico e passar o Tipo, como na Primeira Opção. E criar a partir de um Tipo e definir que será um Array.

```ts
let arrayNumbers: Array<number> = [0x275a, 45, 24];
let arrayNumbers2: number[] = [0x275a, 45, 24];
```

### 🌱Objetos

```ts
let person: { 
	nome: string; 
	idade: number; 
	adulto?: boolean
	 } = { 
	 nome: 'Luiz', 
	 idade: 30, 
	 adulto: true 
	 };
```

Observe que nesse caso a Tipagem ocorre junto a declaração do objeto. Então, primeiramente é declarado a Tipagem das Variáveis e em seguida é declarado os Valores Iniciais dessas. 

## 🌿Funções

```ts
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const result = soma(1, 7);
```

Acima, estão apresentados os Dois Métodos de Criação de Funções no TS. O 01º é o Tradicional usando 'Function'. E o 02º utiliza o Método de Declaração de Arrow Functions. Os Parâmetros recebidos pela Função sempre devem ser citados. Já o Retorno da Função, muitas vezes a própria Engine do TS pode descobrir sozinho. 

