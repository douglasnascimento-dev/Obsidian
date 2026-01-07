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
> [!banner-icon] Módulo 16
# 🌳Rotas Aninhadas

As Rotas Aninhadas são as Rotas que renderizam Componentes dentro de outros Componentes. 

## 🌿Aplicando em Routes

```tsx
<Route path="/posts" element={<Posts />}> 
	<Route path=":id" element={<Post />}> 
</Route>
```

Observe que nesse caso a Segunda Rota está sendo declarado no Interior da Primeira Rota.

## 🌿Aplicando no Componente

```tsx
import { useSearchParams, Outlet } from 'react-router-dom'

export const Post = () => {
	return (
		<>
			<h1> {`QS: ${qs.get('exemplo')}`} </h1>
			<Outlet />
		</>
	)
}
```

Também é necessário que se declare o local onde a Rota Interior deve ser carregada, para isso é utilizado o Componente '<Outlet />'