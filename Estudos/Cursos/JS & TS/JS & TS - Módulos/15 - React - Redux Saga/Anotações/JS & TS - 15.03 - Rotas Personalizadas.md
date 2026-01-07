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
> [!banner-icon] :LiNotebook: Rotas personalizadas

> [!FAIL] Atenção | Versão desatualizada
>  Essas notas estão desatualizadas | React Router Dom v6 pode ser encontrada aqui: 'em breve'

# 🌳Criado Rotas privadas

```jsx
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoutes({ component: Component, isClosed, ...rest} {
	const isLoggedIn = false; // Irá receber a logica para o React Redux

	if (isClosed && !isLoggedIn) {
		return(
			<Redirect 
				to={{pathname: '/login', state: {prevPath: rest.location.pathname}}}
			/>
		)
	}

	return <Route {...rest} component={Component} />
}
```

No exemplo acima está sendo criada uma rota personalizada. Essa rota recebe como parâmetros: Component - (Componente do React), isClosed - (Valor booleano que indica se está aberta ou fechada a rota) e ...rest - (O Resto das propriedades). 

Se a rota for fechada e o usuário não estiver logado, o usuario será redirecionado para o '/login' e o estado passado junto, onde estará contido o histórico do usuário. 

Se caso o usuário tiver acesso a Rota, será retornada uma 'Route' com o resto das propriedades e o Component do React. 

## 🌿Validando os Protótipos.

Nesses casos onde um componente recebe protótipos, esses devem ser validados. Como no exemplo abaixo:

```js
PrivateRoutes.defaultProps = {
	isClosed: false
}

PrivateRoutes.propTypes = {
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
	isClosed: PropTypes.bool,
}
```

Nesse caso é definido o seguinte, a propriedade 'component' será um dos seguintes tipos: um elemento ou uma função, e a propriedade é requerida. Já 'isClosed' é um booleano, e não é requerida. 

Por não ser requerida o 'isClosed' precisa ter um valor padrão, que foi definido como 'false'. 

> routes/index.js

```jsx
import { Switch } from 'react-router-dom';
import MyRoute from './PrivateRoutes'; 

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />

      <MyRoute exact path="/dashboard" component={Dashboard} isClosed />
    </Switch>
  );
}
```

No exemplo acima, o MyRoutes substitui as Rotas padrão e o no caso de '/dashboard' o usuário só poderá acessar se caso estiver logado, uma vez que se trata de uma rota fechada. 
