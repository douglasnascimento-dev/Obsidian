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
> [!banner-icon] Módulo 20

## 🌿Funcionamento

Além dos Métodos Tradicionais de Declaração de Métodos Getters e Setters, também é possível declarar esses métodos de uma maneira simplificada em TS.

```typescript
class Pessoa {
	constructor(
	...
	private _cpf: string,
	){ }
	
	set cpf(cpf: string) {
		this._cpf = cpf
	}
	
	get cpf(): string {
		return this._cpf.replace(/\D/g/, '');
	}

}
```

Observe que no Exemplo Acima é utilizado Recursos Próprios da Linguagem. A Declaração Inicial do Atributo ocorre com o '\_' que diferencia das declarações subsequentes no `get` e `set`. Também observe que é utilizado a declaração com o `underscore` dentro da Classe.

## 🌿Utilização

```ts
pessoa.cpf = '123.456.789-12';
console.log(pessoa.cpf);
```

Nesse caso, o uso do `igual (=)` representa o `set`. Já quando não há a declaração, é inferido que trata-se do `get`
  