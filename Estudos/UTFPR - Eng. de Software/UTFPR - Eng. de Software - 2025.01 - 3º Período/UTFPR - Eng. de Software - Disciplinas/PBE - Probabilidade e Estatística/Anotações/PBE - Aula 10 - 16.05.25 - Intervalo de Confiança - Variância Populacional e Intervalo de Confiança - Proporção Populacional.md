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
> [!banner-icon] 🌱Aula 16.05.25

### 🌳Intervalo de Confiança - Variância Populacional

Considerando uma variável aleatória contínua X com distribuição normal de média μ e variância σ<sup>2</sup>, ambos desconhecidos então se busca o Intervalo de Confiança da Variância Populacional.

#### 🌱Código no R

```R
DietaA <- dados[dados$Dieta == "A",]
install.packages("EnvStats")
library(EnvStats)
sqrt(varTest(DietaA$Perda, conf.level = 0.95)$conf.int)
```

1. Se separa a Dieta A do restante
3. Se instala o pacote EnvStats e o carrega na biblioteca.
3. Se utiliza a função varTest(), que recebe com parâmetro a variável que se busca saber os dados, o nível de confiança e então se informa que o apenas o intervalo de confiança é necessária. E ao final é feito a raiz quadrada dos dados requeridos. 

### 🌳Intervalo de Confiança - Proporção Populacional

Se busca verificar a proporção de uma determinada variável qualitativa se busca o Intervalo de Confiança da Proporção Populacional

#### 🌱Código no R

```R
DietaA <- dados[dados$Dieta == "A",]
tabela <- table(DietaA$Hipertensao)
prop.test(tabela[1], sum(tabela), conf.level = 0.95)$conf.int
```

1. Se separa a Dieta A do restante
3. Se cria um vetor com tabelas, onde cada posição, corresponde a um valor de Hipertensão
3. Se utiliza a função prop.test(), que recebe com parâmetro a tabela que se busca saber os dados, **se atente que a tabela é um vetor, com isso é necessário informar para qual posição se quer utilizar**, o número total de valores, o nível de confiança e então se informa que o apenas o intervalo de confiança é necessária. 