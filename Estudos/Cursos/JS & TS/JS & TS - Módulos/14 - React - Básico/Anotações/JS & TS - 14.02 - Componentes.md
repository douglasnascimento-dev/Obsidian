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
> [!banner-icon] :LiNotebook: Componentes

# 🌳Componentes

```jsx
export default function App() {
	return (
		<>
			<h1>Título</h1>
			<p>Esse é o paragráfo</p>
		</>
	)
}
```

Esse é padrão de um função de um componente. Ela irá retornar o componente a ser utilizado. Para retornar componentes maiores que uma linha, é *recomendado* o uso de parênteses. E para componentes, que possuam duas ou mais tags distintas, sem estarem encapsuladas, é *obrigatório* o uso de '<>' e '<\/>' (*fragmentos*) para encapsular o conteúdo. 

# 🌳Componentes com Estado

```jsx
import {Component} from 'react';

export default class Main extends Component {
	state = {			
		novaTarefa: '';
	};
	
	handleChange = (e) => {
		this.setState({
			novaTarefa: e.target.value,
		})
	}
	
	render() {
		return (
			<> 
				<h1> Componente com estado </h1>
				<input onChange={this.handleChange}/> 
			</>
		)
	}
}
```

Componentes em React podem ter estado interno. Historicamente, isso era feito exclusivamente com **Classes**. Hoje, a forma **moderna e recomendada** é usar **Funções com Hooks**, mas o uso de Classes continua sendo uma opção válida e funcional. No caso das Classes, o Estado será criado à partir do objeto 'state', que terá como suas chaves, as variáveis de estado. Por convenção, os métodos em React sempre terão a palavra 'handle' ou 'on' prefixadas no início de seus nomes. 

O Método render() é responsável pela renderização do código, ele segue as mesmas normas de funções, para componentes sem estado. Uma observação, em .jsx, quando é necessário escrever em .js dentro do arquivo, se pode fazer isso, utilizando '{}' (*chaves*). 

## 🌿Atualizando Estados

A Atualização direta de Estados é vedada no React, para atualizar um estado se deve utilizar o método 'this.state()', como no exemplo a abaixo:

```jsx
handleSubmit = (e) => {
	const {tarefas} = this.state;
	let {novaTarefa} = this.state;
	
	const novasTarefas = [... tarefas];
	this.setState({
		tarefas: [... novasTarefas, novaTarefa]
	})
}
```