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
> [!banner-icon] 🌿Promisses
## 🌳Promisses em JS

As Promisses são um metódo de executar um determinado bloco de código que pode demorar a retornar seu valor, como requisições em banco de dados e a API's, 

```column-settings
Number of Columns: 2
Largest Column: standard
```

As Promises podem ser retornadas em funções, como no exemplo ao lado, que emula uma requisição a um banco de dados utilizando o setTimeOut(), e sua declaração acontece de modo semelhante a de criação de objeto ou array. Observe que a Promisse recebe dois parâmetros, esse parâmetros são os dois tipos de resposta que uma Promisses pode retornar, o **resolve** quando o código é bem executado e o **reject** quando acontece algum erro. No exemplo ao lado, se caso a mensagem não for do tipo 'string' a Promisse é rejeitada, e passado como parâmetro do reject o erro, já quando a mensagem é aceita, é passado o valor que se quer retornar como parâmetro do resolve 



```javascript
function esperaAi (msg, tempo) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') reject("A Mensagem deve ser do tipo String");
        setTimeout (() => {
            resolve(msg);
        }, tempo);
    });
}
```


### 🌿Retorno de Valores

```column-settings
Number of Columns: 2
Largest Column: standard
```

Uma Promisse pode retornar dois tipo de valores, o valor real, quando ela é bem executado, e um erro, quando a execução é rejeitada. Para receber o valor real se utiliza o '.then()' que recebe como **parâmetro único**, o valor retornado, já para receber o erro se utiliza o '.catch()' que recebe o erro como parâmetro. Comumente, se utiliza das arrow functions para a utilização nesses casos



```javascript
esperaAi ('Frase 01' , rand(1, 3))
    .then (resposta => {
        console.log (resposta);
        return esperaAi ('Frase 02', rand(1, 3));
    })
    .catch (e => {
        console.log ('ERRO', e);
    })
```



