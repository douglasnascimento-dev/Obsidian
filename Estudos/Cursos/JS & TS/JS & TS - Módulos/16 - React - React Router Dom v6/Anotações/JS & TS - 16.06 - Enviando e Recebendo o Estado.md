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
# 🌳Enviando e Recebendo o Estado

É possível utilizar Componentes do React Router Dom para Enviar e Receber o Estado. Utilizando o '<Link />' e o 'navigate()'

## 🌿Enviado com o 'navigate()'

```tsx
navigate("/", {
	state: 'O Estado pode ser enviado aqui.'
})
```

## 🌿Enviando com o '<Link />'

```tsx
<Link to="/" state={"O Estado também pode ser enviado aqui"};
```

## 🌿Recebendo o Estado

```tsx
import { useLocation } from 'react-router-dom';

export const Home = () => {
	const { state } = useLocation();
}
```