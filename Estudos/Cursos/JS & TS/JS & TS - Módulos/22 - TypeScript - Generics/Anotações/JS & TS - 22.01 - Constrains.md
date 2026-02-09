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

## 🍏 Generic Constraints & keyof

**Conceito:** As _Constraints_ (restrições) limitam os tipos que podem ser passados para um Generic. A combinação `<K extends keyof O>` é um padrão poderoso que garante que o segundo argumento (`K`) seja estritamente uma das chaves existentes no objeto (`O`). Isso cria uma ligação direta entre o objeto e a chave, habilitando o _autocomplete_ e prevenindo erros de digitação, além de garantir que o retorno `O[K]` tenha o tipo exato da propriedade acessada.

### 🌿 Implementação

TypeScript

```ts
// O = O tipo do Objeto
// K = O tipo da Chave (Deve existir dentro de O)
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => {
    return objeto[chave];
};
```

> Utilizando a Função:

```ts
const animal = {
  cor: 'Rosa',                     // string
  vacinas: ['Vacina 1', 'Vacina 2'], // string[]
  idade: 10,                       // number
};

// TS infere automaticamente o retorno baseada na chave:
const vacinas = obterChave(animal, 'vacinas');
// ➝ Retorna string[] ('Vacina 1', 'Vacina 2')

const cor = obterChave(animal, 'cor');
// ➝ Retorna string ('Rosa')

const idade = obterChave(animal, 'idade');
// ➝ Retorna number (10)

// ❌ ERRO DE COMPILAÇÃO:
obterChave(animal, 'peso'); 

```
