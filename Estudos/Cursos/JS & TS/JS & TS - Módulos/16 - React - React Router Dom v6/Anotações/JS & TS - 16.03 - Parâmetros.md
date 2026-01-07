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
# 🌳Parâmetros

É possível utilizar os parâmetros para a criação de Rotas Dinâmicas (ex: obtendo o ID juntamente com a URL). Para isso, é importante configurar corretamente a especificidade do Caminho.

## 🌿Especificidade

```tsx
<Route path="/posts" element={<Post />};
<Route path="/posts/:id" element={<Post />};
```

Observe que no exemplo acima, a Primeira Rota é mais generalista, ele irá renderizar todos os posts. Já na Segunda Rota, será renderizado apenas o Post que for compatível com o ID enviado na URL.

```http
https://localhost:3000/posts/127
```

Nesse caso, apenas a Postagem de ID 127 será renderizada para o Usuário. 

## 🌿Usando o Parâmetro no Componente

```tsx
import { useParams } from 'react-router-dom'

export const Post = () => {
	const { id } = useParams();
}
```

## 🌳QueryStrings

Assim como os Parâmetros as QueryStrings podem ser obtidas através da URL de acesso. A Formatação das QueryStrings é a de Perguntas e Respostas. 

## 🌿Usando QueryString no Componente

```tsx
import { useSearchParams } from 'react-router-dom'

export const Post = () => {
	const [ qs, setQs ] = useSearchParams ();
	
	return (
		<h1> {`QS: ${qs.get('exemplo')}`} </h1>
	)
}
```

O Funcionamento das QueryStrings são similares aos dos Estados em React. Sendo disponibilizada duas variáveis para trabalhar a do Valor das QueryStrings e outra para definir o Valor delas. Sua utilização pode vir junto de um '.get' quando se procura uma única chave, uma vez que quando não há essa declaração, todos os valores são obtidos. 