---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Nota Final: "0.0"
---

![[Probabilidade e Estatística.png|banner]]
> [!banner-icon] 🌱Aula 23.05.25
## 🌳Testes de Hipóteses - Variância Populacional e Proporção Populacional

A Variável precisa seguir a variância normal

### 🌿Exemplo 01 | Teste Qui-Quadrado para uma Variância

> Dado uma possível variância populacional (72.25) para a variável aleatória Proporção de Perda de Peso se deseja confirmar que tal afirmação é correta

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →  δ = 72.25%<sup>2</sup>
	- H<sub>1</sub> →  δ ≠ 72.25%<sup>2</sup>

02. Teste Qui-Quadrado para uma Variância

03. Nível de Significância = Brando, α = 10%

04. O p-valor é 0.003776

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, existem evidência que a variância populacional é diferente de 72.25%<sup>2</sup>.*

Ao realizar o Teste de Hipótese, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores, se o valor a ser verificado não estiver nesse limite, também se pode afirmar que a igualdade é falsa.  

06. O Intervalo de Confiança resultou em 37.01% - 59.20%, de forma que a variância populacional a ser verificado era de 72.25%.
	- *Com 90% de confiabilidade, podemos dizer que a variância populacional, vai de 37.01% á 59.20%

#### 🌱Comandos no RStudio

```R
01. library(EnvStats)
02. varTest(dados$Perda, sigma.sqared=72.25, conf.level=0.95)
```

01. A Biblioteca 'EnvStats' é incluída.
01. O Comando varTest() recebe como parâmetro os dados referentes, o valor da variância populacional que se deve comparar na igualdade, e o nível de confiabilidade que é 1 - α. 

### 🌿Exemplo 02 | Teste Qui-Quadrado para uma Proporção Populacional

A Variável não precisa seguir a variância normal. Pois é uma variável distocômica. 

> Dado as Dieta A e B, se quer estudar a proporção de pessoas que ao Final das Dietas, não possuíam mais hipertensão. Onde a Proporção Média das Dietas para a cura da Hipertensão do mercado é de 35%

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →  p = 35%
	- H<sub>1</sub> →  p ≠ 35%

02. Teste Qui-Quadrado para uma População

03. Nível de Significância = Brando, α = 10%

04. O p-valor é 0.3454

05. O p-valor é **maior** que α. Então a hipótese H<sub>0</sub> foi aceita. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, existem evidência que a proporção populacional dos indivíduos que se curaram da hipertensão é igual a de 35%*

#### 🌱Comandos no RStudio

```R
01. tabela <- table(dados$Hipertensao)
02. prop.test(tabela[1], sum(tabela), p=0.35, conf.level=0.90)
```

01. É criada uma tabela para os dados referentes a Hipertensão
02. O Comando prop.test() recebe como parâmetros os dados a serem verificados, nesse caso \[1] é a posição do vetor onde está os indivíduos que se curaram da hipertensão. Em seguida recebe todos os indivíduos, a proporção que se deseja realizar o teste, entre 0 e 1, e o nível de confiabilidade que é de 1 - α. 
