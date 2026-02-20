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

> [!banner-icon] Tipos Utilitários (Utility Types)

## 🍏 Record

**Conceito:** O utilitário `Record<Keys, Type>` constrói um tipo de objeto cujas chaves e valores são estritamente definidos. É a ferramenta ideal para criar mapeamentos e dicionários, garantindo uma tipagem mais limpa e direta em comparação com as assinaturas de índice comuns.

### 🌿 Implementação

TypeScript

```
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
```

> Utilizando a Tipagem:

TypeScript

```
// TIPO INFERIDO DE 'objeto1': ➝ { [x: string]: string | number; } //
// O TS garante que qualquer nova chave inserida seja string, e seu valor seja string ou number.

console.log(objeto1.nome);
// VALOR: ➝ 'Luiz' //
```

---

## 🍏 Modificadores de Objetos (Required, Partial, Readonly, Pick)

**Conceito:** O TypeScript oferece utilitários que permitem criar novos tipos a partir de tipos de objetos (ou interfaces) já existentes, transformando suas propriedades sem precisar reescrever código:

- **`Required<T>`:** Pega todas as propriedades de `T` e as torna **obrigatórias** (remove a opcionalidade `?`).
    
- **`Partial<T>`:** Pega todas as propriedades de `T` e as torna **opcionais** (adiciona o `?`).
    
- **`Readonly<T>`:** Torna todas as propriedades de `T` **apenas leitura**, impedindo reatribuições.
    
- **`Pick<T, K>`:** Cria um novo tipo **extraindo** apenas um conjunto específico de chaves (`K`) do tipo original (`T`).
    

### 🌿 Implementação

TypeScript

```
type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>;
type PessoaPartial = Partial<PessoaRequired>;
type PessoaReadonly = Readonly<PessoaRequired>;
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;
```

> Utilizando as Tipagens:

TypeScript

```
// Exemplo 1: Required
const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30, // Se removermos 'idade', o TS apontará um erro.
};

// Exemplo 2: Pick
const objeto3: PessoaPick = {
  nome: 'Luiz',
  sobrenome: 'Miranda'
  // TIPO INFERIDO: ➝ { nome: string; sobrenome: string; } //
  // A propriedade 'idade' não existe mais neste tipo.
}
```

---

## 🍏 Exclude e Extract

**Conceito:** Estes utilitários operam em cima de **Union Types** (tipos de união):

- **`Exclude<UnionType, ExcludedMembers>`:** **Exclui** do primeiro tipo de união todas as opções que também estejam presentes no segundo.
    
- **`Extract<Type, Union>`:** **Extrai** (mantém) apenas as opções que se repetem em ambos os tipos (a interseção entre eles).
    

### 🌿 Implementação


```ts
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
```

> Utilizando as Tipagens:


```ts
// Exemplo 1: Exclude (Excluindo o que tem em comum)
type TipoExclude = Exclude<ABC, CDE>;
// TIPO INFERIDO DE 'TipoExclude': ➝ 'A' | 'B' //

// Exemplo 2: Extract (Extraindo apenas o que tem em comum)
type TipoExtract = Extract<ABC, CDE>;
// TIPO INFERIDO DE 'TipoExtract': ➝ 'C' //
```
