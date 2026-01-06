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
> [!banner-icon] 🌱Aula 30.04.25

## 🌳Probabilidade

- **Experimento** → ensaio científico objetivando a verificação de um fenômeno
	- **Experimentos determinístico** → as condições sob as quais um experimento é executado determinam o resultado do experimento | EX: antes mesmo de colocar um copo de águas a baixas temperaturas, se sabe que isso resultará em um processo de congelamento.
	- **Experimentos não determinísticos ou probabilísticos** → o resultado do experimento é aleatório, ou seja, existe a incerteza do resultado | EX: um ensaio de bioequivalência.

- **Fenômeno Aleatório** → situação ou acontecimento cujos resultados não podem ser determinados com certeza. | EX: resultado do lançamento de um dado.

## 🌳**Variáveis Aleatórias Discretas**

==É uma variável que assume valores num conjunto enumerável (apenas valores inteiros)==, com certa probabilidade de acontecer.

- **Função Discreta de Probabilidade (f.p.)** → é a função que atribui a probabilidade de ocorrência de cada valor da variável aleatório. 

### 🌿Modelo Uniforme Discreto

Seja X uma variável aleatório discreta cujos possíveis valores são representados por x1, x2, x3, ..., xk. A Variável aleatória X vai seguir distribuição Uniforme Discreta se atribui a mesma probabilidade 1/k a cada k desses k valores, isto é, sua função de probabilidade é sempre a mesmo. |*EX: o lançamento de um dado, não viciado, ou seja, X ~ Ud(6).*

### 🌿Modelo Uniforme Bernoulli

Uma variável aleatória X segue distribuição Bernoulli se seus valores são dicotômicos (0 ou 1) e representam a ocorrência de fracasso ou sucesso. Com p representando a probabilidade de sucesso. | *EX: supor interesse em estudar o comportamento de peças defeituosas e não defeituosas de um lote em uma linha de produção, logo 1 - peça defeituosa, 2 - peça não defeituosa, se a probabilidade da peça ser defeituosa desse lote é de 12%, portanto, X ~ Br(0,12). *

### 🌿Modelo Poisson

Seja λ a ==frequência média== ou esperada de ocorrências de um evento de interesse num determinado intervalo de tempo, uma variável aleatória X tem distribuição de Poisson com parâmetro λ > 0, X ~ P(λ). | *EX: supor o interesse em estudar o comportamento de postura de ovos em uma granja, pode-se assumir que a variável aleatória X: número de ovos postados por ave diariamente* ==(*contagem*)== *segue distribuição distribuição de Poisson. Supor, ainda, que o número médio de ovos postos por ave seja de 3.2 ovos por dia, portanto, X ~ P(3.2)*

## 🌳Variáveis Aleatórias Contínuas

==É uma variável que assume valores num conjunto não enumerável (valores reais)==, com certa probabilidade de acontecer.

 - **Função Densidade de Probabilidade (f.d.p.)** → é a função contínuas de probabilidade ou função densidade de probabilidade. 

### 🌿Modelos Uniforme Contínuo

Uma variável aleatória contínua X segue distribuição uniforme contínua no intervalo [a, b], a < b, se sua função densidade de probabilidade é dada por, X ~ U [a, b]. É uma reta constante.

### 🌿Modelo Exponencial 

Uma variável aleatória contínua X, assumindo valores não negativas, segue distribuição exponencial com parâmetro a > 0 se sua fdp é dada por X ~ Exp(a). É uma curva decrescente.

### 🌿Modelo Normal

Uma variável aleatória contínua X segue distribuição normal com parâmetros com parâmetros -∞ < μ < ∞ e σ<sup>2</sup> > 0, se sua probabilidade é dada por X ~ N (μ , σ<sup>2</sup>). É uma curva em formato, seu centro é definido por μ, e ela é simétrica a μ. μ é a média, σ<sup>2</sup> é variância. Quanto menor mais afunilada, pontuda será a curva.  

### 🌿Determinado um Modelo Contínuo

É utilizado um Histograma, que basicamente são barras que estão dentro de intervalos de classes com valores da variável contínua e altura é a frequência relativa ou absoluta observada. 

**Valores Uniforme** → Modelo Uniforme Contínuo
**Valores em Curva Decrescente** → Modelo Exponencial
**Valores com um Pico** → Modelo Normal

## 🌳Utilizando o RStudio

### 🌿Histograma

O 1º Parâmetro é o vetor que contém os valores. 0 2º Parâmetro é um booleano que determina a frequência relativa (true → absoluta | false → relativa). 0s 3º e 4º são as legenda, e o 5º é o título, que será vazio.

```R
hist(tempo,freq=F,xlab="Tempo (em dias)",ylab="Frequência Relativa",main="")
```

### 🌿Comparando com uma Função Exponencial

O Código abaixo cria uma linha vermelha que pode ser comparado com um histograma. Ele irá pegar a média dos valores, valores de 0 até 12.000, em seguida ele cria a linha e exibe ela sobreposta no gráfico.

```R
media <- mean(tempo)
x <- seq(0,12000,by=1)
fteorico <- dexp(x,rate=1/media)

lines(x,fteorico,col="red")
```

### 🌿Comparando com uma Função Normal

O Código abaixo cria uma linha vermelha que pode ser comparado com um histograma. Ele irá pegar os dados da variável aleatória, calcular a média e o desvio padrão, valores entre o mínimo e o máximo. E tração a função f(x), e abaixo é criado a linha da função normal.

```R
SBP <- dados$SBP
media <- mean(SBP)
desvio <- sd(SBP)
x <- seq(min(SBP),max(SBP),by=1)
fteorico <- dnorm(x,mean=media,sd=desvio)

lines(x,fteorico,col="red")
```

### 🌿Comparando Quantis

É útil comparar os quantis para se determinar se determinada variável segue a modelo de distribuição normal. Os primeiros parâmetros da duas funções sempre serão as variáveis aleatórias, os demais parâmetros são fixos.

```R
qqnorm(peso,ylab="Quantis Observados da Amostra",xlab="Quantis Teóricos da Distribuição Normal")
qqline(peso,col="red")
```

