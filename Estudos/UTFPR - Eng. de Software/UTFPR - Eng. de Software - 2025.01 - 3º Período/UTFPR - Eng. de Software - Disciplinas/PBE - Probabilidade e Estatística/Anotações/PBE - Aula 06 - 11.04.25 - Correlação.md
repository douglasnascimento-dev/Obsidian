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
> [!banner-icon] 🌿Aula 11.04.25

O Gráfico consegue transmitir uma ideia com muita rapidez e de forma simples e atraentes, levando o leitor a poupar o tempo e a despender menor esforço na compreensão de uma série de dados, os quais são muitas vezes de difícil percepção na forma tabulas

No entanto, se a relação entre os dados apresentados no gráfico não está clara, este deve ser descartado, pois não contribuirá na compreensão destes dados

- 🌿Qualitativa x Quantitativa → *Efeito* por meio de *Medidas Resumas*
- 🌿Qualitativa x Qualitativa → *Associação* por meio *Tabelas de Frequência*
- 🌿Quantitativa x Quantitativa → *Correlação*

### 🌿Gráfico de Dispersão

É utilizado para verificar a correlação entre duas variáveis. Se plota, em formato de pontos, os pares ordenados de duas variáveis.

Se há uma tendência linear positiva entre os pontos, há uma correlação positiva | Ex: *quanto maior a idade, maior o IMC*

Se há uma tendência linear negativa entre os pontos, há uma correlação negativa | Ex: *quanto menor a idade, maior o IMC*

Se não há, nem uma tendência linear negativa, nem uma tendência linear positiva, entre os pontos, há uma correlação nula | Ex: *não existe uma correlação entre a idade e o IMC*

### 🌿Coeficientes de Correlação

| Correlação Positiva | \|\| | Correlação Negativa | Correlação  |
| :-----------------: | :--: | :-----------------: | :---------- |
|    0.9 < p < 1.0    |  ou  |   -1.0 < p < -0.9   | Muito Forte |
|    0.7 < p < 0.9    |  ou  |   -0.9 < p < -0.7   | Forte       |
|    0.5 < p < 0.7    |  ou  |   -0.7 < p < -0.5   | Moderada    |
|    0.3 < p < 0.5    |  ou  |   -0.5 < p < -0.3   | Fraca       |
|    0.0 < p < 0.3    |  ou  |   -0.3 < p < -0.0   | Nula        |

### 🌿Aplicando ao RStudio

#### 🌱Gráficos de Dispersão

O Comando 'plot()' recebe como os dois primeiros parâmetros as variáveis de x e y, e pode receber em seguida descrições para esse variáveis, isso porque naturalmente esse valor será considerado como 'Tabela$Coluna'. Para exportar um gráfico, é necessário colocar o tipo de arquivo, como 'pdf()', e enviar como parâmetro o nome que se deseja. Ao final, é necessário usar o comando 'graphics.off()' para retirar o gráfico da memória e passar ele para o arquivo, isso retirará o gráfico do RStudio

```R
pdf("figura01.pdf")
plot(dados$Idade, dados$Perda, xlab = "Idade (em anos)", ylab = "Proporção de Perda de Peso (em %)")
graphics.off()
```

#### 🌱Coeficientes de Correlação

O Comando 'cor()' recebe três parâmetros, o x e o y, e também o método que se deseja utilizar, se nada for declarado será utilizado o metódo de Pearson. O Método de Pearson tende a ser mais afetado por valores discrepantes, o Método de Spearman é mais baseado na mediana e o Método de Keandall é mais rigoroso, e tende a estar mais próximo de 0 (nulo)

```R
cor(dados$Idade, dados$Perda, method = "pearson")
cor(dados$Idade, dados$Perda, method = "spearman")
cor(dados$Idade, dados$Perda, method = "kendall")
```