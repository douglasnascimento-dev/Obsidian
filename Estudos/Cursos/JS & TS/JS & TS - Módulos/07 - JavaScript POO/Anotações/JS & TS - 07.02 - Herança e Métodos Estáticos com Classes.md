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
> [!banner-icon] 🌿Herança
## 🌳Herança com Classes

```column-settings
Number of Columns: 2
Largest Column: standard
```

Assim como nas Funções Construtoras, também é possível trabalhar com Herança/Especialização com Classes. Para isso deve ser criada uma nova classe que irá estender a SuperClasse/Classe Mãe. A Sua declaração deve acontecer normalmente, mas após o nome da nova classe deve ser empregada a palavra 'extends' e o nome da SuperClasse. Já no construtor, é necessário chamar 'super()' e passar o(s) parâmetro(s) que pertence(m) a Classe Mãe.



```javascript
class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() 
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
    }

}

class SmarthPhone extends Dispositivo{
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}
```


## 🌳Métodos Estáticos em Classes

```column-settings
Number of Columns: 2
Largest Column: standard
```

Os Métodos Estáticos em Classes, são funções que ficam acopladas diretamente no construtor em vez do objeto instanciado, como normalmente acontece. Para isso, é necessário declarar a palavra 'static' junto ao método dentro da classe, além disso, a sua declaração deve ocorrer chamando o construtor e não o instanciado.



```javascript
 class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }
  
    // Metódos de Instância
    aumentarVolume() {
        this.volume += 2
    }
  
    // Método Estatico
    static trocarPilha() {
        console.log('As pilhas foram trocadas.');
    }
 }

    const controle = new ControleRemoto('Samsung');
    controle.diminuirVolume(); // Chamando um Método de Instância
    ControleRemoto.trocarPilha() // Chamado um Método Estático
```




