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
# 🌳Redirecionando o Usuário

```tsx
import useNavigate() from 'react-router-dom';

export const Post = () => {
	const navigate = useNavigate();
	
	useEffect(() => {
		navigate("/");
	})
}
```

No exemplo simplificado a cima, o Hook do React é importado e alocado na constante 'navigate'. E Posteriormente, utilizado dentro de uma lógica condicional. 

# 🌳Rota Generalista - 404

```tsx
<Route path="*" element={<Rota404 />};
```

A Rota acima será carregado em toda ocasião, onde nenhuma outra rota atender aos padrões requeridos na URL. 