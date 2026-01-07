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
> [!banner-icon] 🌿Object.defineProperty
## 🌳Trabalhando com Object.defineProperty e Object.defineProperties em JavaScript

O JavaScript oferece métodos como `Object.defineProperty` e `Object.defineProperties` para criar e gerenciar propriedades de objetos com maior controle sobre aspectos como visibilidade, capacidade de alteração e reconfiguração. Esses métodos são úteis para criar objetos robustos e protegidos contra modificações indesejadas.

```javascript
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // A propriedade será visível em laços como for...in e Object.keys.
        value: estoque, // Define o valor inicial da propriedade.
        writable: false, // Impede alterações no valor da propriedade.
        configurable: false // Proíbe a exclusão ou reconfiguração da propriedade.
    });

    Object.defineProperty(this, 'preco', {
        enumerable: true, 
        get: function() {
            return preco; // Retorna o valor da propriedade.
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Tipo inválido'); // Gera erro se o tipo for inválido.
            }
        },
        configurable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // A propriedade estará visível em laços ou métodos de iteração.
            value: nome, // Define o valor inicial da propriedade.
            writable: true, // Permite que o valor da propriedade seja alterado.
            configurable: true // Permite que a propriedade seja redefinida ou deletada.
        }
    });
}

let camisetaF1 = new Produto("Camiseta da F1", 20, 3);
camisetaF1.preco = 'Esse preço aq'; // Lança um erro, pois o valor não é numérico.

```

### 🌿 Entendendo Object.defineProperty
--- start-multi-column: ID_o2ze
```column-settings
Number of Columns: 2
Largest Column: standard
```

O método `Object.defineProperty` define uma única propriedade de um objeto, com as seguintes opções principais:

- _enumerable_: Determina se a propriedade será visível em laços como `for...in` e em métodos como `Object.keys`.
- _value_: Define o valor inicial da propriedade. Pode ser uma função ou um valor literal.
- _writable_: Controla se o valor da propriedade pode ser modificado. Quando falso, tentativas de alteração serão ignoradas.
- _configurable_: Indica se a propriedade pode ser deletada ou se suas características (como `writable` e `enumerable`) podem ser modificadas.


--- column-break ---

```javascript
Object.defineProperty(objeto, 'propriedade', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: 'valor inicial'
});

```

--- end-multi-column
### 🌿 Getters e Setters
--- start-multi-column: ID_6p4d
```column-settings
Number of Columns: 2
Largest Column: standard
```

No exemplo da propriedade `preco`, observamos o uso de um _getter_ e um _setter_ para controle mais preciso:

- O _getter_ é uma função que retorna o valor atual de `preco`.
- O _setter_ verifica o tipo do valor atribuído e lança um erro caso seja inválido.

Os _getters_ e _setters_ são úteis para validar ou processar dados antes que sejam acessados ou atribuídos.  

--- column-break ---

```javascript
Object.defineProperty(objeto, 'propriedade', {
    get() {
        return this._valor;
    },
    set(valor) {
        if (typeof valor !== 'string') {
            throw new TypeError('Valor deve ser uma string');
        }
        this._valor = valor;
    }
});

```

--- end-multi-column

### 🌿Observações Sobre configurable e writable

As opções configurable e writable são críticas para proteger a integridade do objeto:

- _configurable: false_ impede a remoção ou redefinição da propriedade.
- _writable: false_ protege o valor da propriedade contra alterações.

Por exemplo, no caso da propriedade estoque:

- Seu valor não pode ser alterado devido a writable: false.
- A chave também não pode ser removida ou reconfigurada devido a configurable: false.
