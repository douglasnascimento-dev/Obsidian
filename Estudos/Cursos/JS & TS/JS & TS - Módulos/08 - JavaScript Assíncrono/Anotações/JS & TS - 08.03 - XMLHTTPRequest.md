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
> [!banner-icon] 🌿XMLHTTPRequest
## 🌳O Uso do XMLHTTPRequest

O Método XMLHTTPRequest permite inserir dados de diversos tipos, mesmo que o nome cite apenas .xml, também é possível inseri dados como .html, .txt ou .json, isso permite criar dinamicidade em páginas web. Devido ao seu extenso código, a sua utilização é limitada atualmente.

### 🌿Request
--- start-multi-column: ID_gq79
```column-settings
Number of Columns: 2
Largest Column: standard
```

No exemplo ao lado, a função request retorna uma _Promise_. Dentro dela, é criado um novo objeto XMLHttpRequest, que será responsável por realizar a requisição. Em seguida, o método .open() é chamado, onde o primeiro argumento representa o método HTTP (neste caso, GET), o segundo argumento é a URL de destino, e o terceiro define se a requisição será assíncrona (por padrão, true). O método .send() é chamado logo depois, sem a necessidade de parâmetros, já que não há envio de dados no corpo da requisição. Quando a requisição for concluída, o evento load será acionado. O código verifica o status da resposta (xhr.status), considerando como sucesso os códigos entre 200 e 299. Se for bem-sucedida, a resposta da requisição (xhr.responseText) é passada para a função resolve(), completando a _Promise_ com sucesso. Caso contrário, a função reject() é chamada, passando a mensagem de erro (xhr.statusText).

--- column-break ---

```javascript
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    //verbo http get = buscar
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};
```

--- end-multi-column

