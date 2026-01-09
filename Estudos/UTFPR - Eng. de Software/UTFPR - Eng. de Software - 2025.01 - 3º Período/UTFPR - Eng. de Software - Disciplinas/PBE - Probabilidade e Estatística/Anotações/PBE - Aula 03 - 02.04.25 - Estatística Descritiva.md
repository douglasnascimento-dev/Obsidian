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
> [!banner-icon] 🌿Aula 02.04.25

## 🌳Estatística Descritiva

É a parte da Estatística que abrange os métodos para resumir as informações contidas em dados, destacando os aspectos mais marcantes

### 🌿Medida Resumo

São medidas que buscam sumarizar as informações sobre o comportamento de uma variável. O interesse é caracterizar o conjunto de dados através de uma algumas medidas

- Posição ou de Tendência Central → São medidas ao redor das quais as observações tendem a se agrupar | *média e mediana*
- Dispersão → São medidas a dispersão dos dados | *variância e desvio padrão*

#### 🌱Média Amostral | 'mean'

```R
mean(nomeDaTabela$NomeDaColuna)
```

#### 🌱'tapply' 

Sendo que o primeiro conjunto, representa a variável quantitativa e a segunda representa a variável é a qualitativa e o último parâmetro é a operação desejada 

```R
tapply(nomeDaTabela$NomeDaColuna, nomeDaTabela$NomeDaColuna, mean)
```

#### 🌱Mediana

A mediana é o 50º percentil, ou seja, o valor abaixo do qual recaem 50% dos valores da amostra, ou seja, é o valor que ocupa a posição central da amostra

```R
median(nomeDaTabela$NomeDaColuna)
```