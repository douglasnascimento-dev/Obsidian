---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌿Classes
## 🌳Classes em JS
--- start-multi-column: ID_33n1
```column-settings
Number of Columns: 2
Largest Column: standard
```

As classes em JS funcionam de maneira semelhante as de funções construtoras, lembrando que a adição de classes é recente e provém do ECMAScritp 6. Seguem o mesmo padrão de nomenclatura das funções construtoras, tanto na declaração como no momento de sua chamada. Para utilizar e receber parâmetros é necessária a declaração do método 'constructor', que recebe os parâmetros e em seu interior define os valores nas respectivas variáveis, qualquer declaração de métodos em uma classe já é automaticamente definhada no prototype, como exemplificado ao lado

--- column-break ---

```javascript
class Pessoa { 
    constructor (nome, sobrenome) { 
        this.nome = nome
        this.sobrenome = sobrenome
    }
   
    falar() { console.log(`${this.nome} está falando.`)}

}
```

--- end-multi-column
### 🌿 Uso de Getters e Setter em Classes
--- start-multi-column: ID_nmpq
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Uso de Getters e Setter acontece de modo semelhante a declaração de um método mas acompanhada do pré-fixo 'get' ou 'set'. O Restante do uso dos métodos não difere do padrão já apresentado.

--- column-break ---

```javascript
class Pessoa {
    constructor (nome, sobrenome) { 
        this.nome = nome
        this.sobrenome = sobrenome
    }

      set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}
```

--- end-multi-column

