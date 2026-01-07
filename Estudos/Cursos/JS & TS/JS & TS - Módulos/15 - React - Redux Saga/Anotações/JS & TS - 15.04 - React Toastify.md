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
> [!banner-icon] :LiNotebook: Router Dom v5

> [!FAIL] Atenção | Versão desatualizada
>  Essas notas estão desatualizadas | React Router Dom v6 pode ser encontrada aqui: 'em breve'

# 🌳Configurando o React Toastify


```jsx
import { ToastContainer } from 'react-toastify';

function App() {
	return(
		<ToastContainer autoClose={1000} className='toast-container'/>
	)
}
```

No caso acima, o ToastContianer é importado. Ele deve ser retornado junto dos demais componentes no App.js. Ele recebe um autoClose (O Tempo até ele fechar, em milissegundos) e pode receber um classe. 

## 🌿Importando o CSS

```js
import 'react-toastify/dist/ReactToastify.css';
```

Apenas essa linha já garante a importação do .css do Toastify. Outras configurações do estilo podem ser configuradas nesse arquivo. 

## 🌿DIsparando uma mensagem

```jsx
toastify.sucess("Mensagem de Sucesso")
```

Normalmente essa declaração estará dentro de uma lógica condicional. 
Normalmente essa declaração estará dentro de uma lógica condicional. 
