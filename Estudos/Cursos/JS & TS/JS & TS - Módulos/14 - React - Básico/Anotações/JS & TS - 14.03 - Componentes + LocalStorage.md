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
> [!banner-icon] :LiNotebook: Componentes + LocalStorage

# 🌳Adicionando e Carregando estado através do localStorage

```jsx
ComponentDidMount(){
	const tarefas = JSON.parse(localStorage.getItem('tarefas'));

	if(!tarefas) return;

	this.setState({tarefas});
}

ComponentDidUpdate(prevProps, prevState){
	const {tarefas} = this.state;
	localStorage.setItem('tarefas', JSON.stringfy(tarefas))
}
```

No caso acima, quando o componente é montado, ou seja, é inicialmente carregado. É consultado o localStorage, obtido o conteúdo da chave 'tarefas' e transformado de string > objetoJS. Se houver conteúdo, ele é definido no estado. 

Já quando o componente é atualizado, é obtido as tarefas. Essas tarefas são transformas em strings e enviadas para a chave 'tarefas' do localStorage. 