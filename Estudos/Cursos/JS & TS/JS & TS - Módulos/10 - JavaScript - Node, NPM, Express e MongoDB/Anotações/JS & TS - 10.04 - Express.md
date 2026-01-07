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
> [!banner-icon] 🌿Express
## 🌳Utilizando o Express para Criar um Servidor

O Express é um framework para Node.js que facilita a criação de servidores web, permitindo definir rotas e manipular requisições HTTP de maneira simples e eficiente.

### 🌿Criando um Servidor com Express

Para iniciar um servidor básico com Express, primeiro é necessário importar o módulo e criar uma instância da aplicação. Em seguida, podemos definir rotas e configurar o servidor para ouvir requisições em uma porta específica.
--- start-multi-column: ID_express01

```column-settings
Number of Columns: 2  
Largest Column: standard  
```

O código ao lado cria um servidor que responde a diferentes requisições GET, retornando mensagens específicas para cada rota. A função 'app.get()' recebe dois parâmetros: o caminho da rota e uma função callback que manipula a requisição ('req') e a resposta ('res'). O 'app.listen()' tem a função de manter o servidor no ar, é preferível utlizar portas pouco utilizadas, a fim de evitar conflitos com outros processos, como a porta 3000

--- column-break ---

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site!');
});

app.get('/contato', (req, res) => {
    res.send('Entre em contato pelo telefone: +55 43 996529598');
});

app.listen(3000, () => 
    console.log('Servidor disponível em http://localhost:3000')
);
```

--- end-multi-column

### 🌿Rotas no Express

As rotas no Express permitem definir qual resposta será enviada ao cliente com base no caminho da URL e no método HTTP utilizado. Abaixo estão exemplos de rotas comuns:

- 'GET /' → Retorna a página inicial
- 'GET / contato' → Retorna a página de contato
- 'POST /' → Processa um formulário enviado pelo usuário

#### 🌱Definindo uma Rota POST

Além de rotas 'GET', é possível criar rotas 'POST', utilizadas para envio de dados de formulários. O exemplo abaixo adiciona uma rota 'POST' na aplicação.

```javascript
app.post('/', (req, res) => {
    res.send('Dados recebidos com sucesso!');
});
```

Ao utilizar 'POST', os dados do formulário enviados pelo cliente podem ser acessados por meio de 'req.body'. Para isso, é necessário utilizar o middleware 'express.urlencoded()' ou 'express.json()' para processar os dados corretamente.






