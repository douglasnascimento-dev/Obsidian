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

# 🌳Configurando o Axios

```js
import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.douglasnascimento.dev.br'
})
```

No caso acima, o Axios está sendo configurado. Ele é exportado com um objeto de configuração, onde consta a URL base. 

## 🌿Usando o Axios

``` jsx
React.useEffect(() => {
	async function getData() {
			const response = await axios.get('/alunos');
			const { data } = response;
			// Lógica para trabalhar o objeto data. 
		}
		
	getData();
}, [ ])
```

No caso acima, está sendo utilizado o React Hooks - 'useEffect'. Nele está sendo criada uma função assíncrona que tem como responsabilidade fazer a requisição e trabalhar os dados. 

Sempre o Axios necessitará de uma função async, isso porque ele também necessita de uma await. O Axios utilizará como método o tipo de requisição requerida. E como parâmetro, a url da requisição. 