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

É o responsável por intermediar o processo de requisições assíncronas. Ele atuará como um Middleware, que analisará se cada requisições ocorreu com sucesso ou erro.  

## 🌿Mudança no Types

A Partir desse momento, por padrão, as requisições assíncronas terão 03 variações. Uma de 'Request', e outras duas, com 'Sucess' e 'Failure'.

```js
export const BUTTON_CLICKED_SUCESS = 'BUTTON_CLICKED_SUCESS';
export const BUTTON_CLICKED_REQUEST = 'BUTTON_CLICKED_REQUEST';
export const BUTTON_CLICKED_FAILURE = 'BUTTON_CLICKED_FAILURE';
```

## 🌿Mudança no Reducer

A Partir desse momento, por padrão, o Reducer também se adapta as 03 variações das Ações. 

```js
import { createStore } from 'redux';
import { toast } from 'react-toastify';

import * as types from '../types';
import * as actions from '../actions';

const initialState = {
	isClicked: false,
}

const reducer (state = initialState, action) => {
	switch (action.type) {
		case types.BUTTON_CLICKED_SUCESS: {
			const newState = {...state};
			newState.isClicked = !newState.isClicked;
			return newState;
		}
		
		case types.BUTTON_CLICKED_REQUEST: {
			return state;
		}
		
		case types.BUTTON_CLICKED_FAILURE: {
				toast.error('Deu erro');
				return state;
		}
		
		default:
			return state;
	}
} 

const store = createStore(reducer);

export default store;
```

## 🌿Mudança nas Actions

Assim como nos casos anteriores, é preciso que as actions se adaptem as mudanças. A Action de Request será usado no interior dos componentes. Enquanto, as demais Actions serão utilizadas dentro do Saga. 

```js
import * as types from '../types'

export function clickedButtomRequest() {
	return {
		type: types.BUTTON_CLICKED_REQUEST,
	};
}

export function clickedButtomSucess() {
	return {
		type: types.BUTTON_CLICKED_SUCESS,
	};
}

export function clickedButtomFailure() {
	return {
		type: types.BUTTON_CLICKED_FAILURE,
	};
}
```

## 🌿Sagas 


> store/**modules/exemploDeModulo/saga.js**

```js
import {call, put, all, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';

function* exampleRequest() {
	try {
		yield call(request);
		yield put(actions.clickedButtonSucess());
	} catch {
		yield put(actions.clickedButtonFailure());
	}
}

export default all([takeLastest(types.BUTTON_CLICKED_REQUEST, exampleRequest)]
```

Esse arquivo será o responsável por ouvir a Solicitação de Requisição, como definido na última linha. Em seguida, ele irá executar a função definida, que será a responsável de realizar a requisição. Se caso a requisição retornar como sucesso, ele dispara uma ação de sucesso. Se caso retornar com erro, dispara uma ação de erro. 

## 🌿RootSagas

```js
import { all } from 'redux-saga/effects';

import exemple from '../exemploDeModulo/sagas';

export default function rootSaga() {
	return yield all([example]);
}
```

Assim como no caso do Root Actions, esse arquivo será o responsável pela junção das Sagas de todos os Módulos da Aplicação. 

## 🌿Aplicando o Sagas

```js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
```

