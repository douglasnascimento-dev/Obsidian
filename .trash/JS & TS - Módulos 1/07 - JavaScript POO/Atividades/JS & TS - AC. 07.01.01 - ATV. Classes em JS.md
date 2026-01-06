---
Tipo: Atividade
Início: 2025-02-05
Final: 2025-02-05
Conclusão: 2025-02-05
Conteúdo: " JS & TS - JS POO"
Status: true
Disciplina:
  - JS & TS - Módulo 07
---
## 🌳 Exercício: Criando e Manipulando Classes em JavaScript

#### 🌱 Descrição

Este exercício tem como objetivo praticar a criação e manipulação de classes em JavaScript, abordando o uso de construtores, métodos, getters e setters.

### 🌿 Requisitos

1. **Criação da classe 'Carro':**
    
    - A classe deve ter um construtor que recebe os parâmetros 'marca', 'modelo' e 'ano'.
    - Adicione um método 'detalhes()' que retorna uma string com as informações do carro no formato: "Marca: [marca], Modelo: [modelo], Ano: [ano]".
    - Adicione um método 'idade()' que calcula e retorna a idade do carro com base no ano atual.
	
2. **Adicione Getters e Setters:**
    - Crie um getter 'descricao' que retorna a mesma string que o método 'detalhes()'.
    - Crie um setter 'novoModelo' que permite alterar o modelo do carro.
	
3. **Teste a classe:**
    - Crie uma instância da classe 'Carro' com os valores: 'marca = "Toyota"', 'modelo = "Corolla"', 'ano = 2015'.
    - Chame o método 'detalhes()' e exiba o resultado no console.
    - Chame o método 'idade()' e exiba a idade do carro no console.
    - Use o setter 'novoModelo' para alterar o modelo para '"Camry"'.
    - Use o getter 'descricao' para exibir as novas informações do carro no console.
	
4. **Adicionar um atributo 'quilometragem':**
    - A classe 'Carro' deve ter um atributo 'quilometragem' que começa com '0' quando o carro é criado.
    - Adicione um método 'rodar(km)' que aumenta a quilometragem do carro com base no valor passado como parâmetro.

### 🌿 Exemplo de Código

```javascript
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.quilometragem = 0; // Inicializa a quilometragem com 0
  }

  detalhes() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }

  idade() {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.ano;
  }

  get descricao() {
    return this.detalhes();
  }

  set novoModelo(novoModelo) {
    this.modelo = novoModelo;
  }

  rodar(km) {
    this.quilometragem += km;
  }
}

// Testando a classe
let carro1 = new Carro("Toyota", "Corolla", 2015);

console.log(carro1.detalhes()); // Saída esperada: "Marca: Toyota, Modelo: Corolla, Ano: 2015"
console.log(carro1.idade()); // Saída esperada: a idade do carro

carro1.novoModelo = "Camry";
console.log(carro1.descricao); // Saída esperada: "Marca: Toyota, Modelo: Camry, Ano: 2015"

carro1.rodar(150);
console.log(carro1.quilometragem); // Saída esperada: 150
```

### 🌿 Resultado Esperado

- **Método 'detalhes'** exibe corretamente as informações do carro.
- **Método 'idade'** calcula a idade do carro com base no ano atual.
- **Setter 'novoModelo'** permite alterar o modelo do carro.
- **Getter 'descricao'** retorna a string com as informações atualizadas do carro.
- **Método 'rodar(km)'** aumenta a quilometragem do carro de acordo com o valor passado.
