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
> [!banner-icon] 🌿Polimorfismo


## 🌳Polimorfismo em JS

O **Polimorfismo** permite especializar as superclasses, ou classes mãe, em classes filhas. Essa especialização permite reutilizar recursos, como atributos e métodos, em busca de melhor otimização e adicionar especialidades para cada derivação da superclasse

### 🌿Superclasse/Classe mãe
--- start-multi-column: ID_v4lx
```column-settings
Number of Columns: 2
Largest Column: standard
```

A Superclasse, também chamada de classe mãe, é a classe que dará origem as demais classes. Nela devem estar contidos os atributos e métodos comuns entre as especializações. Observe que no exemplo ao lado, é simulado a criação de uma conta bancária, que além de seus atributos possuem métodos

--- column-break ---

```javascript
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo Insuficiente para o Saque: Você possui R$${this.saldo} na conta`)
        return;
    }

 this.saldo -= valor;
 this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}
```

--- end-multi-column
### 🌿Classes filhas
--- start-multi-column: ID_rwk1
```column-settings
Number of Columns: 2
Largest Column: standard
```

As Classes filhas são as especializações das superclasses, de modo que podem ou não ter elementos adicionais. É permitido que classes filhas sobrescrevam métodos já declarados em momento anterior da passagem da herança. Observe que no exemplo ao lado, a 'Conta Corrente' adiciona atributos e sobrescreve o método '.sacar' na sua especialização. Já a classe filhas 'Conta Poupança' é uma cópia fiel da classe mãe.

--- column-break ---

```javascript
// Conta Corrente
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo Insuficiente para o Saque: Você possui R$${this.saldo.toFixed(2)}`)
        return;
    }
  
    this.saldo -= valor;
    this.verSaldo()
}

function ContaPoupança(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança
```

--- end-multi-column





