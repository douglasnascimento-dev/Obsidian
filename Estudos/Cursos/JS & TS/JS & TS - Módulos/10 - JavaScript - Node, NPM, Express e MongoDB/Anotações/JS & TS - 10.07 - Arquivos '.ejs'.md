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
> [!banner-icon] 🌿Arquivos '.ejs'

## 🌳Arquivos '.ejs'

Os arquivos são similares ao '.html' básico, mas com a diferença que podem receber informações '.js' em sem interior, com o auxílio de uma declaração diferenciada

### 🌿Includes
--- start-multi-column: ID_hmdb
```column-settings
Number of Columns: 2
Largest Column: standard
```

É muito comum no '.ejs' a inclusão de outros arquivos, normalmente essa partes incluidas são fixas para diversas páginas e não necessitam ser reescritas em todas as vezes. Observe que na página ao lado, foram feitos dois includes um na header outro no footer

--- column-break ---

```ejs
	<%- include('./includes/header') %>
		/* Conteúdo .ejs aqui */
	<%- include('./includes/footer') %>
```

--- end-multi-column
### 🌿Inserindo váriaveis e códigos
--- start-multi-column: ID_8ms4
```column-settings
Number of Columns: 2
Largest Column: standard
```

Para cada linha do '.esj' é necessário colocar o aviso "<% %>" um na abertura outro no fechamento. Para inclusão de conteúdo tem de haver a inclusão de '-' ou '='. A diferença é que '-' apenas inclui o conteúdo, mas não o executa, isso se haver alguma configuração '.css' ou mesmo '.html' ele exibirá como texto, já se for '=' ele executará o conteúdo 

--- column-break ---

```ejs
<div class="container">
  <h1>
    <% dia.forEach(num=> { %>
    <span> <%= num %> </span>
    <% }); %>
  </h1>
  <h1><%- variavelLocal %></h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, neque.
  </p>
  <p>Lorem itaque harum officia? Itaque, aliquid nobis.</p>
</div>
```

--- end-multi-column
### 🌿Definindo o valor de variáveis 
--- start-multi-column: ID_qqoh
```column-settings
Number of Columns: 2
Largest Column: standard
```

Para passar o valor de uma variável é preciso passar um objeto junto ao 'res.render("nomeDoEjs", {})', nesse objeto cada elemento deve estar com o id e seu respectivo valor. Também é possível passar sem um '.ejs' fixo, por exemplo, em middleware globais

--- column-break ---

```javascript
exports.paginaInicial = (req, res) => {
  res.render("index", {
    titulo: "O Título da Pag.",
    dia: [10, 8, 9, 5],
  });
};
```

--- end-multi-column




