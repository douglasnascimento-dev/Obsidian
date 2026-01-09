---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
Nota Final: "0.0"
---

![[Probabilidade e Estatística.png|banner]]
> [!banner-icon] 🌱Aula 04.06.25
## 🌳Testes de Hipóteses - Comparando Médias

Sejam duas populações distintas, a população 1 e a população 2. E Seja X uma variável aleatória (contínua) de interesse

Nesse caso se diz que se quer verificar o efeito de uma variável qualitativa em uma variável quantitativa. O Objetivo é comparar as médias populacionais μ1 e μ2, ou seja:
- H<sub>0</sub> | μ1 = μ2
- H<sub>1</sub> | μ1 ≠ μ2

- (Ambas as variáveis devem seguir distribuição normal) - Partindo de 2 amostras 
	- Se **dependentes** → teste t pareado
	- Se **independentes** 
		- Se **variâncias conhecidas** → teste z
		- Se **variância desconhecidas**
			- Se **variâncias iguais** → teste t | δ <sup>2 | 1</sup> = δ <sup>2 | 2</sup> 
			- Se **variâncias diferentes** → teste t δ <sup>2 | 1</sup> ≠ δ <sup>2 | 2</sup> 

### 🌿Amostra dependentes e independentes

- Dependentes → *os indivíduos são iguais nas amostras, comum em casos de antes e depois.*
- Independentes → *os indivíduos são diferentes nas amostras*

### 🌿Relação das variâncias iguais ou diferentes 

Quando as variâncias populacionais são desconhecidas é necessário realizar um teste de hipótese para comparar as variâncias populacionais. Onde H<sub>0</sub> | δ<sub>1</sub> = δ<sub>2</sub> e H<sub>1</sub> = δ<sub>1</sub> ≠ δ <sub>2</sub>. A Depender do resultado, se utiliza o teste f para a comparação entre variâncias. 

### 🌿Exemplo 01 | Usando o Teste Z

> Um pesquisador deseja comparar o efeito da região de um município no valor do preço do metro quadrado. 

00. Além dos preços por m<sup>2</sup> ele também conhece o desvio populacional de cada região. Central = 71 e Oeste = 82

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →  μ<sub>Central</sub> = μ<sub>Oeste</sub>
	- H<sub>1</sub> →   μ<sub>Central</sub> ≠ μ<sub>Oeste</sub>

02. Se define o teste - **Teste z**
	- Existe dependência? Não 
		- As variâncias populacionais são conhecidas? Sim (se utiliza o teste z para a comparação entre médias)

03. Nível de Significância = Brando, α = 10%

04. O p-valor é 2.2e-16

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, há evidência que há um efeito da região no preço do m<sup>2</sup>.*

Ao realizar o Teste de Hipótese, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores, se o valor a ser verificado não estiver nesse limite, também se pode afirmar que a igualdade é falsa. O Intervalo de Confiança resultante será positivo se o primeiro conjunto de dados for maior que o segundo conjunto de dados. Já se o intervalo de confiança for negativo, o primeiro conjunto de dados será menor que o segundo conjunto de dados.

06. O Intervalo de Confiança resultou em 305.9143 - 388.1968, de forma que a Região Central é mais cara que a Região Oeste.
	- *Com 90% de confiabilidade, podemos dizer que a região central pratica preços de imóveis de R$ 305.91 a R$ 388.19 m<sup>2</sup> a mais que a região Oeste.*

#### 🌱Comandos no RStudio

```R
01. library(EnvStats)
02. z.test(RC, RO, sigma.x=71, sigma.y=82, conf.level=0.90)
```

01. A Biblioteca 'EnvStats' é incluída.
02. O Comando z.test() recebe como parâmetro os primeiros dados referentes, em seguidas os outros dados, o **desvio padrão** do dado 1 e em seguida o **desvio padrão** do dado 2, e o nível de confiabilidade que é 1 - α. 

### 🌿Exemplo 02 | Teste T para variâncias populacionais diferentes

> Se deseja verificar comparar nível sérico de ferro em umol/l sangue em pessoas que sofrem de fibrose cística em em pessoas saudáveis. 

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →  μ<sub>Fibrose</sub> = μ<sub>Saudáveis</sub>
	- H<sub>1</sub> →   μ<sub>Fibrose</sub> ≠ μ<sub>Saudáveis</sub>

02. Se define o teste - **Teste T para variâncias populacionais diferentes**
	- Existe dependência? Não 
		- As variâncias populacionais são conhecidas? Não
			- As variâncias populacionais são iguais? 
			
			1. H<sub>0</sub> →  α<sub>1</sub> = α<sub>2</sub>
			2. H<sub>1</sub> →  α<sub>1</sub> ≠ α<sub>2</sub>  
			
			3.  Nível de Significância = Brando, α = 10%
			
			4. O p-valor é 0.003995031
			
			5. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 

			- As variâncias populacionais são iguais? Não

03. Nível de Significância = Brando, α = 10%

04. O p-valor é 0.02813

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, há um efeito da doença de fibrose cística no nível sérico de ferro*

Ao realizar o Teste de Hipótese, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores, se o valor a ser verificado não estiver nesse limite, também se pode afirmar que a igualdade é falsa. O Intervalo de Confiança resultante será positivo se o primeiro conjunto de dados for maior que o segundo conjunto de dados. Já se o intervalo de confiança for negativo, o primeiro conjunto de dados será menor que o segundo conjunto de dados.

06. O Intervalo de Confiança resultou em  -10.384245  -1.717993, de forma que a pessoas com fibrose cística apresentam um nível menor.
	- *Com 90% de confiabilidade, podemos dizer que as pessoas com fibrose cística apresentam de 1.72 a 10.38 umol/l de nível sérico de ferro menor quando comparado a pessoas saudáveis .*

#### 🌱Comandos no RStudio

```R
01. var.test(fibrose.cistica, saudaveis)$p.value
02. t.test(fibrose.cistica, saudaveis, var.equal=FALSE, conf.level=0.90)
```

01. O Comando var.test() compara as variâncias das duas amostras, resultado em falso. Os parâmetro são as duas amostras.
02. Como as variâncias foram diferentes se utiliza o comando t.test() recebe como parâmetro os dados da primeira amostra e da segunda amostra, em seguinda é informada que as variâveis são diferentes e o nível de confiança é de 90%.

### 🌿Exemplo 03 | Teste t pareado

> Se deseja verificar o efeito da Hidroclorotiazida na pressão sistólica em mm/HG

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →   μ<sub>Placebo</sub> ≠ μ<sub>Hidroclorotiazida</sub>
	- H<sub>1</sub> →   μ<sub>Placebo</sub> ≠ μ<sub>Hidroclorotiazida</sub>

02. Se define o teste - **Teste T pareado**
	- Existe dependência? Sim  

03. Nível de Significância = Brando, α = 1%

04. O p-valor é 0.0001188

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, há um efeito do medicamento Hidroclorotiazida na pressão sistólica em mm/HG*

Ao realizar o Teste de Hipótese, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores, se o valor a ser verificado não estiver nesse limite, também se pode afirmar que a igualdade é falsa. O Intervalo de Confiança resultante será positivo se o primeiro conjunto de dados for maior que o segundo conjunto de dados. Já se o intervalo de confiança for negativo, o primeiro conjunto de dados será menor que o segundo conjunto de dados.

06. O Intervalo de Confiança resultou em  11.48967 36.51033, de forma que as pessoas quando recebem placebo possuíam uma quantidade maior de quando receberam a Hidroclorotiazida .
	- *Com 99% de confiabilidade, podemos dizer que a Hidroclorotiazida reduz de 11.49 a 36.51 o nível pressão sistólica em mm/HG.*

#### 🌱Comandos no RStudio

```R
t.test(Placebo, Hidroclorotiazida, paired=TRUE, conf.level=0.99)
```

01. Como as amostras são dependentes se utiliza o comando t.test() recebe como parâmetro os dados da primeira amostra e da segunda amostra, em seguinda é informada que as as amostras são pareadas e o nível de confiança é de 99%.

### 🌿Exemplo 04 | Teste T para variâncias populacionais iguais

> Se deseja verificar o efeito da dieta no proporção de perda de peso das pacientes

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →  μ<sub>Dieta A</sub> = μ<sub>Dieta B</sub>
	- H<sub>1</sub> →   μ<sub>Dieta A</sub> ≠ μ<sub>Dieta B</sub>

02. Se define o teste - **Teste T para variâncias populacionais diferentes**
	- Existe dependência? Não 
		- As variâncias populacionais são conhecidas? Não
			- As variâncias populacionais são iguais? 
			
			1. H<sub>0</sub> →  α<sub>1</sub> = α<sub>2</sub>
			2. H<sub>1</sub> →  α<sub>1</sub> ≠ α<sub>2</sub>  
			
			3.  Nível de Significância = Brando, α = 10%
			
			4. O p-valor é 0.7360251
			
			5. O p-valor é **maior** que α. Então a hipótese H<sub>0</sub> não foi rejeitada. 

			- As variâncias populacionais são iguais? Sim

03. Nível de Significância = Brando, α = 10%

04. O p-valor é 4.079e-16

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, há evidências da proporção média de perda de peso da Dieta A é diferente a proporção média de perda de peso da Dieta b*

Ao realizar o Teste de Hipótese, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores, se o valor a ser verificado não estiver nesse limite, também se pode afirmar que a igualdade é falsa. O Intervalo de Confiança resultante será positivo se o primeiro conjunto de dados for maior que o segundo conjunto de dados. Já se o intervalo de confiança for negativo, o primeiro conjunto de dados será menor que o segundo conjunto de dados.

06. O Intervalo de Confiança resultou em  -11.094829 á -7.867571, de forma que a Dieta B é mais eficiente que a Dieta A.
	- *Com 90% de confiabilidade, podemos dizer que a Dieta B é mais eficiente em proporção de perda de peso, em 7.87% a 11.10% que a Dieta A.*

#### 🌱Comandos no RStudio

```R
01. var.test(dados$Perda~dados$Dieta)$p.value
02. t.test(dados$Perda~dados$Dieta, var.equal=TRUE, conf.level=0.90)
```

01. O Comando var.test() compara as variâncias das duas amostras, resultado em verdadeiro. Os parâmetro são os dados da variável quantitativa ~  dados da variável qualitativa.
02. Como as variâncias foram iguais se utiliza o comando t.test() recebe como parâmetro os dados da variável quantitativa ~  dados da variável qualitativa, em seguinda é informada que as variâveis são iguais e o nível de confiança é de 90%.