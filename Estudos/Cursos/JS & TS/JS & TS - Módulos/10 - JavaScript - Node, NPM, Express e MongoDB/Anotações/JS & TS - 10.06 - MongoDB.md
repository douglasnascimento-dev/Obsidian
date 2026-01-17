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
> [!banner-icon] 🌿MongoDB

### 🌿Módulos com o MongoDB


```column-settings
Number of Columns: 2
Largest Column: standard
```

Para melhorar a utilização com o MongoDB, se utiliza outros módulos, como:
- 'dotenv' - para proteger dados, como a url para o banco de dados
- 'express-session' - para garantir que dados dos usuários, vão ficar guardados na sessão
- 'connect-mongo' - para estabelecer contanto com o banco de dados
- 'connect-flash' - para utilizar mensagens que são apagadas após a sua utilização



```javascript
require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
// ... Importação de Outros módulos 

```


## 🌳Conectando com o Banco de Dados

```column-settings
Number of Columns: 2
Largest Column: standard
```

Para se conectar com o banco de dados, se utiliza o mongoose.connect(process.env.URL), que recebe como parâmetro a url do banco de dados. Isso irá retornar um promessa, que irá ser resolvida ou rejeitada



```javascript
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => console.log(e));
```


### 🌿Configurações de Sessão

```column-settings
Number of Columns: 2
Largest Column: standard
```

Isso definirá as configurações para sessão, ou seja, quando o usuário loga na aplicação e deseja manter salvo aqueles dados. Construção do objeto
- 'secret' - uma chave secreta usada para assinar os cookies
- 'store' - utiliza o MoongoStore e cria um novo objeto que recebe o mongoUrl que é a url do banco de dados
- 'resave': define que a sessão não será salva novamente no armazenamento a menos que tenha sido modificada
- 'saveUninitialized' - define que sessões vazias não serão salvas automaticamente no armazenamento
- 'cookie' - define uma objeto que recebe:
	- 'maxAge' - define o tempo que um cookie ficara salvo em milisegundos
	- 'httpOnly' - define que os cookies só ficarão salvo em http




```javascript
const sessionOptions = {
  secret: "dfghgdgsadfghjgutyrtytbyertybn ",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 24 * 30,
    httpOnly: true,
  },
};
```


### 🌿Models

```column-settings
Number of Columns: 2
Largest Column: standard
```

Nos models, será criada os Schema, que são as Bases de Dados, que vai receber como parâmetro os atributos, o 'titulo', por exemplo, será do tipo String e tem a obrigatoriedade de ser declarado, já a 'descricao' recebe só o tipo String. Após isso, se declara o Model que é igual ao mongoose.model(), que recebe o nome do Model e o Schema e ao fim pode ser exportado para uso externo



```javascript
const mongoose = require("mongoose");
const HomeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: String,
});

const HomeModel = mongoose.model("Nome", HomeSchema);
 module.exports = HomeModel; 
```



### 🌿Utilizando 'flash' e mongoDB nos Controllers

```column-settings
Number of Columns: 2
Largest Column: standard
```

No primeiro passo, o Model é importado pelo NPM, e então os dados podem ser passados utilizando o '.create({})' que vai receber um objeto como a mesma estrutura do Schema, e então será passado o id e o valor. Isso irá retornar uma promessa. O 'req.flash()' irá criar uma informação na sessão do usuário, que só fica disponível para ser usada uma vez, isso é util para avisar informações ao usuário. Sua estrutura é a seguinte, primeiro é passado o nome da mensagem e em seguida o valor da mensagem. A declaração para exibição acontece chamando o nome da mensagem



```javascript
 const HomeModel = require("../models/homeModel");
HomeModel.create({
  titulo: "Qualquer Titulo",
  descricao: "Qualquer Descricao",
}).then((dados) => console.log(dados)); */

exports.paginaInicial = (req, res) => {
  req.flash("info", "Olá imundo");
  console.log(req.flash("info"))
  console.log(req.session.usuario);
  res.render("index");
};
```



