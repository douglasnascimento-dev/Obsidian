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
> [!banner-icon] :LiNotebook: Styled Components
# 🌳O Que é?

Uma maneira de utilizar CSS dentro de arquivos .js. 

## 🌿Exemplos de Uso

> styled.js

```js
import styled from 'styled-components';

export const Title = styled.h1`
	background: ${props => props.isRed ? 'red' : 'blue' };
	
	small {
		font-size: 12px;
		margin-left: 15px;
	}
`;
```

> Login.jsx

```jsx
import { Title } from './styled'

export default function Login() {
	return <Title isRed={false}>
		Oi, esse é o Titulo. <small>Olá, como vai?</small>
	</Title>
}
```

Exemplo de Utilização dos Styled Components. No arquivo 'styled.js' será configurando os estilo, que devem ser exportados por meio de constantes. Esse estilos podem receber propriedades oriundas dos componentes. No exemplo é verificado se a propriedade 'isRed' é falsa ou verdadeira, e a forma como isso altera o estilo do elemento 'Title'. 

Observe que também é possível criar estilos aninhados, ou seja, estilo para outros elementos que estão dentro do componente. No caso acima, com a tag 'small'. 

## 🌿Estilos Globais

> globalStyles.js

```js
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
* {
	font-family: 'Outfit';
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
`;
```

No caso acima o 'createGlobalStyle' é utilizado para criar um estilo global, que poderá ser aplicado em toda a aplicação. Conforme exemplo abaixo:

> Login.jsx

```jsx
import { Title } from './styled'
import { GlobalStyles } from './globalStyles';

export default function Login() {
	return <>
		<GlobalStyles/>
		<Title isRed={false}>
			Oi, esse é o Titulo. <small>Olá, como vai?</small>
		</Title>
	</>
}
```
