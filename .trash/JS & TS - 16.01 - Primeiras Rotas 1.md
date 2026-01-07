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


![[JSTS.png|banner]]
> [!banner-icon] Módulo 16
# 🌳O Que é?

O React Router Dom é o responsável por todo o Sistema de Paginação do React. Ele também provê diversas ferramentas para serem trabalhadas juntamente as URL's. 

## 🌿Elementos

- **BrowserRouter** > É o Roteador da Aplicação. Além do Browser, há outros tipos de Routers. 
- **Routes** > É basicamente um Switch para a Escolha de Rotas, onde cada Rota representa um Caso do Switch.
- **Route** > É a Rota em si. 

## 🌿Aplicando no Código

```tsx
// ... Demais Imports
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
```


## 🌿Elementos de uma Rota

```tsx
<Route path="/" element={<Home />} />
```

- **path** > É o caminho que deve conter na URL.
- **element** > É o componente que deve ser carregado quando aquela rota for acessada. 