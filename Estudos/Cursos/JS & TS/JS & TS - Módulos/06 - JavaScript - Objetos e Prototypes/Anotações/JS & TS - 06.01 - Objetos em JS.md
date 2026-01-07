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
> [!banner-icon] 🌿Objetos
## 🌳**Objetos e Métodos**
--- start-multi-column: ID_i78k
```column-settings
Number of Columns: 2
Largest Column: standard
```

Objetos são uma forma de agrupar dados e funcionalidades em uma única estrutura. No exemplo abaixo, temos um objeto chamado pessoa com algumas propriedades e métodos. 

#### **Propriedades e Métodos**

- **Propriedades**: `nome`, `sobrenome` e `idade` armazenam informações sobre o objeto.
- **Métodos**: `falarNome` e `getDataNascimento` são funções que realizam ações ou cálculos relacionados ao objeto.
    - **`falarNome`**: Retorna uma string dinâmica utilizando o valor da propriedade `nome`.
    - **`getDataNascimento`**: Calcula o ano de nascimento da pessoa com base no ano atual (`new Date().getFullYear()`) subtraindo a idade.
- **`this`**: Uma palavra-chave que referencia o objeto atual. No contexto dos métodos, ela é usada para acessar outras propriedades ou métodos dentro do mesmo objeto.

--- column-break ---


```javascript
const pessoa = {   
nome: "Douglas",   
sobrenome: "Nascimento",   
idade: 18,   
falarNome() { return `${this.nome} está falando`},   
getDataNascimento() { return (new Date()).getFullYear() - this.idade} };  /* console.log(pessoa.getDataNascimento()); */``
```


--- end-multi-column
## 🌳**Factory Functions**
--- start-multi-column: ID_9eze
```column-settings
Number of Columns: 2
Largest Column: standard
```

**Factory Functions** são funções que retornam um novo objeto. Elas são úteis quando você deseja criar várias instâncias de objetos semelhantes de forma simplificada. 
1. **Parâmetros Dinâmicos**: A função `criaPessoa` recebe os valores de `nome` e `sobrenome` e os atribui ao objeto retornado.
2. **Encapsulamento de Lógica**: A lógica do método `nomeCompleto` é encapsulada dentro do objeto e acessada como uma propriedade.
    - O uso de `get` transforma a função em um _getter_, permitindo que ela seja acessada como uma propriedade (`p1.nomeCompleto`) em vez de uma chamada de método (`p1.nomeCompleto()`).
3. **Flexibilidade**: Essa abordagem facilita a criação de vários objetos sem a necessidade de repetir a estrutura do objeto manualmente.

--- column-break ---

```javascript
function criaPessoa(nome, sobrenome) {   
	return {     
		nome,     
		sobrenome,     
		get nomeCompleto() { return `${this.nome} ${this.sobrenome}`}   
	}; 
}  

let p1 = criaPessoa("Douglas", "Nascimento"); 
console.log(p1.nomeCompleto); // Douglas Nascimento``

```

--- end-multi-column
## 🌳**Constructor Functions**
--- start-multi-column: ID_p6n4
```column-settings
Number of Columns: 2
Largest Column: standard
```

**Constructor Functions** são outra forma de criar objetos, mas utilizam a palavra-chave `new`. Elas se diferenciam das Factory Functions pelo estilo de escrita e pela utilização de `this` para definir propriedades no objeto criado.

1. O que é new ?
	 - Quando usamos `new`, o JavaScript cria um novo objeto vazio, associa o `this` a esse objeto e retorna o objeto ao final da execução da função.
2. .this no Contexto:
    - Dentro de uma Constructor Function, `this` representa o objeto sendo criado. As propriedades e métodos atribuídos a `this` serão adicionados ao objeto.
3. Imutabilidade com Object.freeze:
    - O método `Object.freeze` impede alterações no objeto após sua criação. Isso é útil para proteger dados ou evitar erros.
4.  Por que usar Constructor Functions?
	- É uma forma mais tradicional e explícita de criar objetos, especialmente em projetos que usam orientações à Programação Orientada a Objetos (POO).
	
--- column-break ---

```javascript
function Pessoa(nome, sobrenome) {   
	this.nome = nome;  
	this.sobrenome = sobrenome;   
	Object.freeze(this); // Bloqueia mudanças no objeto 
}  

const p2 = new Pessoa("Douglas", "Nascimento"); 
console.log(p2); // { nome: "Douglas", sobrenome: "Nascimento" }`
```

--- end-multi-column
### 🌿 Diferenças entre Factory e Constructor Functions

| Característica       | Factory Functions                 | Constructor Functions            |
| -------------------- | --------------------------------- | -------------------------------- |
| Criação de Objetos   | Retorna diretamente um objeto     | Utiliza `new` para criar objetos |
| Estilo de Escrita    | Função simples                    | Nome da função em maiúscula      |
| Flexibilidade        | Maior personalização              | Mais estruturado                 |
| Propriedades/Métodos | Atribuídos diretamente no retorno | Atribuídos ao `this`             |
| Uso de new           | Não necessário                    | Necessário                       |

Quando usar cada um?

- Use Factory Functions para simplicidade e flexibilidade, especialmente em scripts menores ou quando precisar de lógica personalizada na criação.
- Use Constructor Functions quando trabalhar com padrões de POO ou precisar garantir consistência na criação de objetos.



