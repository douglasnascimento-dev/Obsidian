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
> [!banner-icon] 🌿Helmet e CSRF

## 🌳Utilizando o CSRF

O CSRF é um módulo NPM que permite gerar e verificar se um post foi feito pelo site, ou utilizando um site externo, que normalmente será interpretado como uma tentativa de ataque externo. 

### 🌿CSRF no 'server.js'
--- start-multi-column: ID_xm53
```column-settings
Number of Columns: 2
Largest Column: standard
```

Após a importação dos módulos, helmet e csrf, se deve passar dois middleware globais, um para adicionar o token as formulários e um outro para verificar se a página possui esse token

--- column-break ---

```javascript
const helmet = require("helmet");
const csrf = require("csurf");

// Restanto do Código ....

app.use(csrfMiddleware); // Middleware para adicionar token CSRF às respostas
app.use(checkCsrfError); // Middleware para tratar erros de CSRF
```

--- end-multi-column
### 🌿CSRF no 'middleware'
--- start-multi-column: ID_ygtu
```column-settings
Number of Columns: 2
Largest Column: standard
```

Após a declaração do CSRF no server, é necessário adicionar os middlewares, o primeiro ira definir uma variável local que irá configurar uma variável que será usada nos views, enquanto a outra irá verificar a existência dessa variável nos views

--- column-break ---

```javascript
exports.checkCsrfError = (err, req, res, next) => {
    if (err && "EBADCSRFTOKEN" === err.code)  {
        return res.render("404");
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
```

--- end-multi-column
### 🌿Inserindo o CSRF token no view
--- start-multi-column: ID_gqhk
```column-settings
Number of Columns: 2
Largest Column: standard
```

Após esses passos, é necessário inserir um input do tipo 'hidden' com a variável declarada anteriormente, de modo que essa variável será verificada pela view

--- column-break ---

```html
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
```

--- end-multi-column




