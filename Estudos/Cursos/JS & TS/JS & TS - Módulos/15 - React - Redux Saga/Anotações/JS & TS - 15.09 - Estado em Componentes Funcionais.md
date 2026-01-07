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
> [!banner-icon] :LiNotebook: Router Dom v5
# 🌳O Que é?

Para utilizar estado dentro de componentes funcionais é necessário utilizar um Hook especial do React que permite trabalhar com essa mecânica dentro de Funções. Esse Hook é o 'useState'.

## 🌿 Criando o Estado

```js
import { useState } from 'react';

export default example() {
	const [login, setLogin] = useState('abcd102030');
}
```

Nesse exemplo, está sendo criado um Componente Funcional, e sendo utilizado o 'useState' para manipulação de Estado. Observe que o 'useState' sempre retornará duas variáveis: a variável de valor do estado e uma função para a manipulação daquela variável de estado. A Função 'useState' deverá receber como parâmetro o valor inicial da variável a ser setada. 

## 🌿Atualizando o Estado

```js
// ....
setLogin(response.data);
// ...
```

É possível atualizar o estado rapidamente utilizando a Função de Atualização, como demostrado no código a cima. Isso pode ocorrer em qualquer parte do código de um componente, especialmente dentro de funções de 'useEffect' que fazem requisições.