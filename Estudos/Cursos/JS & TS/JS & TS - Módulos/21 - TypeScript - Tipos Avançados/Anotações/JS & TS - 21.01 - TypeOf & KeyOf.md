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
> [!banner-icon] Módulo 21

## 🌿TypeOf

A Expressão `typeof` permite Verificar Tipos e Criar Tipos a partir de Valores Literais. Permitindo a Sincronização Automática de Tipagem, uma vez que quando o Objeto for atualizado, o Tipo também será atualizado. Como no exemplo abaixo:

```ts
type CoresObj = typeof coresObjEng

const coresObjEng = {
	vermelho: 'red',
	verde: 'green',
	azul: 'blue',
}
```

## 🌿KeyOf

A Expressão `keyof`obtém todas as chaves de um determinado Objeto/Tipo. Assim como o `keyof` sincronizando automaticamente os valores. Como no exemplo abaixo:

```ts
type CoresChaves = keyof coresObjEng

function traduzir(cor: CoresChaves, cores: CoresObj): void {
	console.log(cores[cor])
}
```

## 🌿Chaves como Tipo

Chaves também pode ser utilizados em Tipagem de outros Valores. Isso permite sincronizar automaticamente os tipos em cada uma das declarações, como no exemplo abaixo:

```ts
type Veiculo = {
	marca: string;
	ano: number;
}

type Car = {
	brand: Veiculo['marca'];
	year: Veiculo['ano'];
	name: string;
}

const carro: Car = {
	brand: 'Ford',
	year: 2020,
	name: 'Taurus'
}
```

