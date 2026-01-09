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
> [!banner-icon] 🌿Aula 04.04.25

### 🌿Medidas de Dispersão

São medidas que buscam sumarizar as informações sobre o comportamento de uma variável. O interesse é caracterizar o conjunto de dados através de uma algumas medidas

- 🌵*Amplitude* → É a distância entre o maior e menor valor, é distância máxima entre dois pontos. 

- 🌵*Distância Média* → A média de todas as distâncias entre todos os pontos, entretanto, é inviável calcular em grandes proporções

- 🌵*Desvio Médio Absoluto* → A média da distância entre a tendência central, normalmente a média, e todos os outros pontos em módulo, isso porque se não os valores negativos e positivos se anulariam

- 🌵*Desvio Quadrático Médio* ou *Variância Populacional* → A média da distância entre a tendência central, normalmente a média, e todos os outros pontos elevados ao quadrado, isso porque se não os valores negativos e positivos se anulariam. Similar ao DMA, contudo, em vez do uso de módulos é utilizado o quadrado. ==Resultará em um valor ao quadrado==. 

- 🌵*Desvio Padrão Populacional* → É a Raiz Quadrada do Desvio Quadrático Médio. Isso resolve a problema de ter os valores ao quadrado.

- 🌵*Variância* → É utilizada quando se há apenas uma amostra, não o todo da população. É o Variância Populacional, divido por n - 1, o que resultará em uma variável não viciada e consistente. ==Resultará em um valor ao quadrado==. 

- 🌵*Desvio Padrão Amostral* →  É a Raiz Quadrada da Variância Padrão. Isso resolve a problema de ter os valores ao quadrado 

- 🌵*Quartis* → Divide as observações em quatro partes iguais. O Que resulta em três quartis. É a distância entre o 1º e 3º quartil.
	- 🌲*Primeiro Quartil* → 25% menor que Q1 - 75% maior que Q1
	- 🌲*Segundo Quartil* → 50% menor que Q2 - 50% maior que Q2 | *semelhante a mediana*
	- 🌲*Terceiro Quartil* → 75% menor que Q3 - 25% maior que Q3
	
#### 🌱Amplitude | 'diff(range())'

```R
diff(range(nomeDaTabela$NomeDaColunaQuantitativa))
```

Nesse caso, 'range()' retornará o menor valor da coluna e maior valor, após isso o 'diff()' retorna a diferença entre esse valores

##### 🌵'tapply()' 

Para utilizar o 'tapply()' nesse caso será necessário jogar esses dados para um objeto. Isso porque, ele irá retorna um objeto, com dias instâncias com o valor máximo e mínimo de cada um, mas sem o calculo da diferença, que será feito posteriormente

```R
maxmin <- tapply(nomeDaTabela$NomeDaColunaQuantitativa, nomeDaTabela$NomeDaColunaQualitativa, range)

diff(maxmin$ValorQualitativo01)
diff(maxmin$ValorQualitativo02)
```

#### 🌱Desvio Padrão | 'sd()'

```R
sd(nomeDaTabela$nomeDaColunaQuantitativa)
```

##### 🌵'toapply()'

```R
toapply(nomeDaTabela$nomeDaColunaQuantitativa, nomeDaTabela$nomeDaColunaQualitativa, sd)
```

##### 🌱Quartil | 'IQR()'

```R
IQR(nomeDaTabela$nomeDaColunaQuantitativa)
```

##### 🌵'toapply()'

```R
toapply(nomeDaTabela$nomeDaColunaQuantitativa, nomeDaTabela$nomeDaColunaQualitativa, IQR)
```
