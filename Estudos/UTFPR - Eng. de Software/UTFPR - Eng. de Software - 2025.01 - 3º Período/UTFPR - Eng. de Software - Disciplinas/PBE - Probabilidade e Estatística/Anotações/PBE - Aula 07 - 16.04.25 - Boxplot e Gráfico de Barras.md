---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
---

![[Probabilidade e Estatística.png|banner]]
> [!banner-icon] 🌿Aula 16.04.25

## 🌳Boxplot

O Boxplot é útil para estudar o comportamento de uma variável quantitativa. No seu centro há uma caixa, que possui 3 linhas, que representam de baixo para cima:

-  A Primeira linha representa o 1º quartil
-  A Linha central representa mediana
-  A Terceira linha representa o 3º quartil

Ainda há linhas que irão até valor mínimo e máximo. ==Ele também destaca os outliers, que são os pontos que fogem do padrão==

## 🌳Gráfico de Barras

O Gráfico de Barras é um gráfico em que a altura é definido pela frequência absoluta ou relativa de uma variável qualitativa.





### 🌿Aplicando ao RStudio

#### 🌱Boxplot de uma única variável

O Comando 'boxplot()' irá recebe de qual variável e de qual banco de dados ele irá ser gerado. Ele também pode receber um descrição no eixo y.

```R
boxplot(dados$Perda,ylab="Proporção de Perda de Peso (%)")
```

#### 🌱Boxplot de várias variáveis

Verifica o efeito da variável qualitativa na quantitativa. Recebe o dados de y, que será a variável quantitativa, após isso recebe o til (~)
e a variável x, que será a qualitativa. Podem receber legendas para o y, x e para os dois bloxplots.

```R
boxplot(dados$Perda~dados$Dieta,ylab="Proporção de Perda de Peso (%)",xlab="Tipo de Dieta",names=c("Dieta A","Dieta B"))
```

#### 🌱Um gráfico de Barras

Antes de gerar o gráfico, é necessário criar um objeto, como a tabela a baixo, após isso é necessário passar a tabela para a função 'barplot()' e as legendas e se quiser é possível utilizar cores.

```R
tabela <- table(dados$Hipertensao)

barplot(tabela,ylab="Frequência Absoluta",xlab="Hipertensão", col=c("cornflowerblue","darkolivegreen"))
```

Também é possível criar um gráfico de barras utilizando a frequência relativa. Para isso, é apenas utilizar o prop.table()

```R
barplot(prop.table(tabela),ylab="Frequência Relativa",xlab="Hipertensão",col=c("cornflowerblue","darkolivegreen"))
```

#### 🌱Cruzando gráfico de Barra

É criada uma tabela absoluta e outra relativa. Em seguida é criado o gráfico de barras, de maneira similar as anteriores, ==mas sempre utilizando a frequência relativa==. O parâmetro 'beside' define se uma barra ficará ao lado da outra ou em cima. Também é possível criar uma legenda externa

```R
f.absolutas <- table(dados$Dieta,dados$Hipertensao)
f.relativas <- prop.table(f.absolutas,1)

barplot(f.relativas,beside=T,col=c("cornflowerblue","darkolivegreen"),xlab="Hipertensão",ylab="Frequência Relativa")
legend("topleft",fill=c("cornflowerblue","darkolivegreen"),legend=c("Dieta A","Dieta B"),bty="y")
```