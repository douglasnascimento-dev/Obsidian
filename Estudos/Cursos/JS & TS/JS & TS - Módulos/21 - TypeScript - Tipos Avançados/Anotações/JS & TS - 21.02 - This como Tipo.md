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

## 🌿.this

No TS é possível utilizar o `.this` como um Tipo. Isso permitirá fazer chamadas em Cadeia/Corrente de Execução. Como no exemplo abaixo:

```ts
export class Calculadora {
	constructor(public numero: number) {};
	
	add(n: number): this  {
		this.numero += n;
		return this;
	}
}

const calculadoraMinha = new Calculadora(10);

calculadoraMinha.add(10).add(78).add(45);
```

Em caso de Heranças, o .this sempre apontará para o Objeto, ou seja, ele apontará para a Instância Herdada.