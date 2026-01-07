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
> [!banner-icon] 🌿Evolução - Express

## 🌳Elementos na Rota de um Site

```javascript
// http://meusite.com/profiles/idOuNomeDoUsuario?campanha=googleads&nome_campanha=pascoa**
								'URL padrão / Paramêtro da URL ? Query Strings & Query Strings'
```

#### 🌱Ativando os Parâmetros de um Corpo
--- start-multi-column: ID_udjj
```column-settings
Number of Columns: 2
Largest Column: standard
```

Esse código permite receber parâmetros no corpo, ou seja, quando se envia um formulário no corpo da página

--- column-break ---


```javascript
app.use(
  express.urlencoded({
    extended: true,
  })
```

--- end-multi-column
## 🌳Obtendo Parâmetros pela URL

Ao receber uma URL de um Site, é possível receber dois tipos de informações, os Parâmetros da URL, as rotas, e as Query Strings, que contém metadados, utilizadas principalmente para marketplace

### 🌿Recebendo Parâmetros de URL
--- start-multi-column: ID_v0qo
```column-settings
Number of Columns: 2
Largest Column: standard
```

Para receber um parâmetro de URL, é necessário avisar ao Express que esse parâmetros vão ser recebidos para isso se usar um barra e dois pontos, se o parâmetro for opcional, se deve utilizar o ponto de interrogação. Para obter o valor enviado se pode utilizar o objeto 'req.params()' 

--- column-break ---

```javascript
app.get("/teste/:idUser?/:outroParametro?", (req, res) => {
  console.log(req.params); 
  res.send(req.params);
});
```

--- end-multi-column
### 🌿Recebendo Parâmetro do tipo Query Strings
--- start-multi-column: ID_yb21
```column-settings
Number of Columns: 2
Largest Column: standard
```

Diferente do Parâmetro da URL, as Query Strings não necessitam de ser avisadas, uma vez que tanto o identificador quanto o valor serão declarados na URL, para passar mais de uma Query String se deve utilizar o &. Exemplo de uma URL com Query String: "http://meusite.com/profiles/idOuNomeDoUsuario?campanha=googleads&nome_campanha=pascoa"
. Aqui é recebido duas Query Strings, uma chamada 'campanha' e outra 'nome_campanha'

--- column-break ---

```javascript
app.get("/teste/:idUser?/:outroParametro?", (req, res) => {
	onsole.log(req.query); 
	res.send(req.query);
});
```

--- end-multi-column
## 🌳Organização dos Arquivos

Para uma melhor disposição do código, os arquivos comumente seguem uma mesma organização, isso permite que cada arquivo possua apenas uma função no código

### 🌿server.js
--- start-multi-column: ID_qf2a
```column-settings
Number of Columns: 2
Largest Column: standard
```

O App 'server.js' ficará responsável apenas por linkar as rotas e ativar o servidos, as demais funções deverão ser executadas por outros arquivos

--- column-break ---

```javascript
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
  
app.use(routes);
app.listen(3000, () => console.log("Disponível em http://localhost:3000."));
```

--- end-multi-column
### 🌿routes.js
--- start-multi-column: ID_6vn6
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Arquivo 'routes.js' terá a função de juntar todas as rotas nos controllers num único arquivo. Ao final, o arquivo deve ser exportado para o 'server.js'

--- column-break ---

```javascript
const express = require("express");
const route = express.Router();

// Controllers
const homeContoller = require("./controllers/homeController");
const infosController = require("./controllers/infosController");

// Rotas  
    // PagInicial
route.get("/", homeContoller.paginaInicial);
route.post("/", homeContoller.postPagInicial);
    // PagInfos
route.get("/telefone", infosController.telefone);
route.get("/email", infosController.email);

module.exports = route;
```

--- end-multi-column
### 🌿Controllers
--- start-multi-column: ID_8agy
```column-settings
Number of Columns: 2
Largest Column: standard
```

Os arquivos de controle, os controllers, tem a função final de ter as rotas, cada controller deve estar responsável por apenas uma parte do código, para manter dentro de limites os tamanhos dos arquivos

--- column-break ---

```javascript
exports.telefone = (req, res) => {
    res.send('+43 99685-7412');
  };
  
  exports.email = (req, res) => {
    res.send("emailhiperverdadeiro@uol.com.br");
  };
```

--- end-multi-column
### 🌿MiddleWare
--- start-multi-column: ID_vzvc
```column-settings
Number of Columns: 2
Largest Column: standard
```

Os middlewares são funções de callback que ficam entre a chamada da rota e sua exibição final. Nos middlewares é necessário o recebimento e a chamada de um terceiro parâmetro, o 'next', esse parâmetro, que é uma função, é responsável pela chamada do próximo destino da rota

--- column-break ---

```javascript
module.exports = (req, res, next) => {
  if (req.body.name) {
	   console.log(`Foi postado por ${req.body.name}`);
  }
  next();
};
```

--- end-multi-column







