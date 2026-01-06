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

![[JS - Assíncrono.png|banner]]
> [!banner-icon] 🌿Async e Await
## 🌳Funções Assíncronas em JS

As Funções Assíncronas são funções especiais que suportam esperar um determinado tempo para execução do código que necessite de execução assíncrona
--- start-multi-column: ID_n2ww
```column-settings
Number of Columns: 2
Largest Column: standard
```

A Declaração de uma Função assíncrona acontece acompanhada da palavra **async**, isso dá poderes a esse função de paralisar a sua função em determinados pontos. A Declaração da Promisse acontece de forma quase similar a de uma função síncrona, com a única exceção que vem acompanha da palavra **await**. Para receber os erros é possível tanto criar métodos '.catch()' para cada promessa ou utilizar um único bloco de de 'try catch'

--- column-break ---

```javascript
async function executar() {
    try {
        let fase = await esperaAi('Frase 01', rand(0,3));
        console.log(fase);
        fase = await esperaAi('Frase 02', rand(0,3));
        console.log(fase);
        fase = await esperaAi('Frase 02', rand(0,3));
        console.log(fase);
        console.log('O Programa terminou na ' + fase);
    } catch(e) {
        console.log(e)
    }
}

  
executar()
```

--- end-multi-column
