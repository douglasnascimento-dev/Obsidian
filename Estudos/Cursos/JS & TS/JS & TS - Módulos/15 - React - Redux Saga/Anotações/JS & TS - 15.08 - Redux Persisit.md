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

É o responsável pela persistências dos dados da aplicação. É o método onde determinados dados do usuário estarão presentes no Local Storage..

## 🌿Redux Persist

```js;
import storage from 'redux-persisit/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
	const persistReducers = persistReducer({
		key: 'NOME_APLICAÇÃO',
		storage,
		whitelist: ['example'],
	}, reducers);
	
	return persistReducers;
}
```

## 🌿Aplicando o Persist

```js
import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist'
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
export const persistor = persistStore(store);
```


## 🌿Aplicando no App
```jsx
...
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

function App() {
	return {
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				/ ... Demais Itens do React
			</PersistGate>
		</Provider>
	}
}

```
