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
> [!banner-icon] :LiNotebook: Router Dom v5

> [!FAIL] Atenção | Versão desatualizada
>  Essas notas estão desatualizadas | React Router Dom v6 pode ser encontrada aqui: 'em breve'

# 🌳Criando rotas 

> routes/index.js

```jsx
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound'; 

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login}/> 
				<Route path="/" component={Home}/>
				<Route path="*" component={NotFound}/>  
			</Switch>
		</BrowserRouter>
	);
}
```

No exemplo a cima, é criado um arquivo simplificado de Rotas. O Component 'BrowserRouter' tem a função de ser o roteador para o navegador. O Component 'Switch' é o responsável por definir que apenas um componente será renderizado por Rotas. E por fim o 'Route' tem a responsabilidade de definir as rotas individuais. 

O Path referencia parte da url. No exemplo a cima, referencia a Home do site. O '\*' representa todas as páginas que não estão listadas a cima dele. E o campo component representa a o componente que será exibido quando acessada aquela determinada rota. 

Esse arquivo poderia ser incluído em App.js como um component alinhado aos de estilos globais e demais componentes fixos na tela. 

# 🌳Uso no App.js e History

> App.js

```jsx
import React from 'react';
import { Router } from 'react-router-dom";

import history from './services/history';
import GlobalStyle from './styles/GlobalStyles':
import Header from './components/Header'; 
import Routes from './routes';

function App()
return (
	<Router history={history}>
		<Header/>
		<Routes/>
		<GlobalStyle/>
	</Router>
	);
};

export default App;
```

No exemplo a cima, é utilizado a biblioteca 'history'. Além disso, nesse caso a utilização do 'BrowserRouter' no arquivo de configurações de rotas é suprimida, e nesse arquivo é substituída pela utilização do elemento 'Router'. 

O History permite fazer diversas ações, como o redirecionamento automático de páginas e a criação de um histórico. Ele é configurando em um arquivo, como no exemplo abaixo:

> services/history.js

```js
import {createBrowserHistory} from 'history':

const history createBrowserHistory();

export default history:
```