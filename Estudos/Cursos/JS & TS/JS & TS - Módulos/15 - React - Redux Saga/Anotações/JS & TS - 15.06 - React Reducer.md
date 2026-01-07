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
# 🌳O Que é?

O React Reducer é uma biblioteca que permite a configuração de um estado global para toda a aplicação. Muito utilizado em casos como o de Login. 

## 🌿Diagrama de Uso do Reducer

```js
Estado Inicial > {
	user: {},
	isLoggedin: false
}

> Ação > Reducer > newState = state > newState + Dados > newState se torna o estado.
```

## 🌿Arquivo de configuração

> Store/index.js

```js
import { createStore } from 'redux';

const reducer (state, action) => {
	return state;
} 

const store = createStore(reducer);

export default store;
```

O Reducer vai ser o responsável por escutar as ações, e quando escutar, irá retornar o estado. Agora, é necessário importar esse arquivo no App.js, e então, passar o store dentro de um \<Provider>

```jsx
// Demais importações...
import { Provider } from 'redux';
import store from './store';

function App(){
	<Provider store={store}>
		// Demais Itens....
	</Provider>
}
```

## 🌿Disparando uma ação

```jsx
import { useDispatch } from 'react-redux'
// ...

export default function Login(){
	const dispatch = useDispatch();
	
	handleClick = (e) => {
		e.preventDefault();
		
		dispatch({
			type: 'BUTTON_CLICKED';
		});
		
	};
};
```

Uma ação dispara é a descrição do que o Reducer deve realizar. Por convenção as ações disparadas devem ter o nome com Letras Maiúsculas.  

## 🌿Reducer


> Store/index.js

```js
import { createStore } from 'redux';

const reducer (state, action) => {
	switch (action.type) {
		case 'BUTTON_CLICKED': {
			console.log('OK');
			return state;
		}
		
		default:
			return state;
	}
} 

const store = createStore(reducer);

export default store;
```

No caso acima, o Reducer analise através de um Switch Case todas as ações aquelas que possuírem um Case especifico irão passam por um tratamento, já as demais cairão no Default e o Estado retornará sem alteração. 

```js
import { createStore } from 'redux';

const initialState = {
	isClicked: false,
}

const reducer (state = initialState, action) => {
	switch (action.type) {
		case 'BUTTON_CLICKED': {
			const newState = {...state};
			newState.isClicked = !newState.isClicked;
			return newState;
		}
		
		default:
			return state;
	}
} 

const store = createStore(reducer);

export default store;
```

No caso a cima, o Estado Inicial é composto por uma variável que define se o botão foi clicado. Após isso, caso o Reducer capturar um ação do tipo 'BUTTON_CLICKED', ele irá inverter o valor já definido na variável. 

## 🌿Recuperando o Estado

```jsx
import {useSelector} from 'react-redux';

export defaul function Header() {
	const isClicked = useSelector(state -> state.isClicked)
	
	return {
		<>
		{isClicked ? 'Clicado' ; 'Não Clicado' }
		</>
	}
}
```

No caso a cima, é realizado a importação do Hook a ser utilizado. Em seguido é definido qual a variável irá receber o valor do Estado Global, e utilizado o 'useSelector' o valor passar a ser compartilhados pelas variáveis. E no interior do Retorno, ele é utilizado dentro do JSX. 

# 🌳Separação do Reducer

A Separação deve acontecer dentro da Pasta 'Store' usando 'Modules', onde estarão também os tipos de ações em 'types.js' e o arquivo de combinação de todos os Reducers em 'rootReducer.js'. Dentro da Pasta 'Modules' estarão os Módulos. Dentro da Pasta de cada Módulo estarão 3 arquivos: 'actions.js' - 'reducer.js' - 'sagas.js'. 

- store >
	- modules > 
		- types.js
		- rootReducer.js
		- exemploDeMódulo>
			- actions.js
			- reducer.js
			- sagas.js

## 🌿Types

> store/**modules/types.js**

```js
export const BUTTON_CLICKED = 'BUTTON_CLICKED';
```

É nesse arquivo em que os tipos das ações devem ser declarados e exportados.

## 🌿RootReducer

> store/**modules/rootReducer.js**

```js
import { combineReducers } from 'redux'

import exampleReducer from '../example/reducer'

export default combineReducers ({
	example: xampleReducer,
})
```

Esse arquivo é o responsável pela junção de todos os reducers da aplicação. 

## 🌿Actions

> store/**modules/exemploDeModulo/actions.js**

```js
import * as types from '../types';

export function buttonClicked() {
	return {
		type: types.BUTTON_CLICKED,
	}
 }
```

Esse é arquivo é o responsável pelas funções que armazenam as ações possíveis para um determinado módulo. 

## 🌿Reducer

> store/**modules/exemploDeModulo/reducer.js**
> 
```js
const initialState = {
	isClicked: false,
}

export default function (state = initialState, action)  {
	switch (action.type) {
		case 'BUTTON_CLICKED': {
			const newState = {...state};
			newState.isClicked = !newState.isClicked;
			return newState;
		}
		
		default:
			return state;
	}
} 
```

Esse é o arquivo responsável pelo Reducer em si. É aqui onde o 'initialState' é definido. Também é aqui onde fica o responsável pela escuta e tratamento de cada ação. 

## 🌿Index

```js
import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
```

