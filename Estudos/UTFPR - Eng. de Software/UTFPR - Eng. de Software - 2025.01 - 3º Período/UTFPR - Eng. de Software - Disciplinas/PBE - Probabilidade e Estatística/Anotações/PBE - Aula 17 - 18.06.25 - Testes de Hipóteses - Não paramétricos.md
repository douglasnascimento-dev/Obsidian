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
> [!banner-icon] 🌱Aula 13.06.25
## 🌳Testes de Hipóteses - Não Paramétricos

O Testes Não Paramétricos não possuem suposições. Diferentemente dos testes anteriores. 

### 🌿Teste | Wilcoxon Pareado

> Dados 10 indivíduos com baixo peso, foi realizada uma intervenção alimentar, de modo, que se deseja verificar a existência de um efeito da intervenção alimentar no peso desses indivíduos. 

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> → Peso antes da Intervenção = Peso depois da Intervenção
	- H<sub>1</sub> →  Peso antes da Intervenção ≠ Peso depois da Intervenção

02. Teste - **Wilcoxon Pareado** 
	- Peso - antes: A H<sub>0</sub> foi aceita, e segue a distribuição normal
	- Peso - depois:  A H<sub>0</sub> foi rejeitada, e não segue a distribuição normal
	- De forma, que será necessário utilizar um teste não paramétrico

03. Nível de Significância = Brando, α = 10%

04. O p-valor é 0.001953

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, existem evidência que existe efeito da intervenção alimentar no peso dos indivíduos 

#### 🌱Comandos no RStudio

```R
antes  <- dados1[dados1$Intervencao=="Antes",]
depois <- dados1[dados1$Intervencao=="Depois",]

shapiro.test(antes$Peso)
shapiro.test(depois$Peso)

wilcox.test(antes$Peso, depois$Peso, paired = TRUE)
```

01. É separado os dados relacionados a antes da intervenção
02. É separado os dados relacionados a depois da intervenção

03. É realizado o teste de Shapiro Wilk
03. É realizado o teste de Shapiro Wilk

05. É realizado o teste de Wilcoxon. Ele recebe como parâmetro os dados\$colunaDeInteresse e dados\$colunaDeInteresse, e recebe o atributo pareado como true (verdadeiro)

### 🌿Teste | Wilcoxon-Mann-Whitney para Amostras Independentes

> Dado duas dietas distintas, se deseja verificar se há o mesmo efeito das duas dietas na variável perda de peso do indivíduo em quilogramas

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> → Perda de Peso - Dieta A = Perda de Peso - Dieta B
	- H<sub>1</sub> →  Perda de Peso - Dieta A ≠ Perda de Peso - Dieta B

02. Teste - **Wilcoxon Pareado** 
	- Perda de Peso - Dieta A: A H<sub>0</sub> foi rejeitada, e não segue a distribuição normal
	- Perda de Peso - Dieta B:  A H<sub>0</sub> foi aceitada, e segue a distribuição normal
	- De forma, que será necessário utilizar um teste não paramétrico

03. Nível de Significância = Brando, α = 5%

04. O p-valor é 0.7052

05. O p-valor é **maior** que α. Então a hipótese H<sub>0</sub> foi aceita. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, a a proporção de perda de peso para indivíduos para a Dieta A e para a Dieta B é igual

#### 🌱Comandos no RStudio

```R
DietaA <- dados2[dados2$Dieta=="A",]
DietaB <- dados2[dados2$Dieta=="B",]

shapiro.test(DietaA$Perda)
shapiro.test(DietaB$Perda)

wilcox.test(DietaA$Perda, DietaB$Perda)
```

01. É separado os dados relacionados a Dieta A
02. É separado os dados relacionados a Dieta B

03. É realizado o teste de Shapiro Wilk
03. É realizado o teste de Shapiro Wilk

05. É realizado o teste de Wilcoxon. Ele recebe como parâmetro os dados\$colunaDeInteresse e dados\$colunaDeInteresse.

### 🌿Teste | Correlação - Spearman e Correlação - Kendall

> Dados 4 tipos distintos de adubos, se deseja verificar o efeito desses adubos na altura em cm de determinadas plantas

01.  Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> → A Altura das plantas com os diferentes tipos de adubos são semelhantes entre si
	- H<sub>1</sub> →  A Altura das plantas com os diferentes tipos de adubos possuem ao menos uma diferentes dos demais

02. Teste - **Kruskal Wallis**
	- Resíduos da ANOVA oneWay: A H<sub>0</sub> foi aceita, e segue a distribuição normal - *Shapiro Wilk*
	- ANOVA oneWay: A H<sub>0</sub> foi rejeitada, e não possui a homocedásticos  - *Breusch Pagan e Teste de Goldfeld Quandt*
	- De forma, que será necessário utilizar um teste não paramétrico

03. Nível de Significância = Grave, α = 1%

04. O p-valor é 8.720269e-05

05. O p-valor é **maior** que α. Então a hipótese H<sub>0</sub> foi aceita. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, ao menos uma das médias de altura das plantas em cm com um tipo de adubo se diferencia das demais

	06. Após isso é possível realizado o pós teste, onde os resultados forem iguais, as médias serão iguais, se caso não, as médias serão diferentes. 

#### 🌱Comandos no RStudio

```R
ANOVA <- aov(dados3$Altura~dados3$Adubo)

residos <- ANOVA$res

shapiro.test(residos)

library(lmtest)
bptest(ANOVA)
gqtest(ANOVA)

dwtest(ANOVA) 

install.packages("agricolae")
library(agricolae)

K.teste <- kruskal(dados3$Altura,dados3$Adubo)
K.teste$statistics
K.teste$groups

```

01. É realizada a ANOVA

02. É obtido os resíduos da ANOVA

03. É realizado o teste de Shapiro Wilk para verificar a distribuição normal

04. É carregada a biblioteca imtest
05. É realizado o Teste de Breusch Pagan para verificar a homoscedasticidade
06. É realizado o Teste de Goldfeld Quandt para verificar a homoscedasticidade

07. É realizado o Teste de Durbln Watson para verificar a independência

08. É instalada a biblioteca agricolae
09. É carregada a biblioteca agricolae

10. O Teste de Kruskal é realizado e retornado para um objeto. Ele recebe como parâmetro a variável quantitativa e em seguida, a variável qualitativa.
11. É obtida as estatísticas do Teste do Kruskal
12. É realizado um pós teste para obter as diferenças dois a dois

### 🌿Teste | Kruskal Wallis

> Considerando uma situação em que se deseja verificar a possibilidade de correlação entre o índice glicêmico e o peso do individuo em quilogramas

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →  Correlação = 0
	- H<sub>1</sub> →  Correlação ≠ 0
	
02. Teste - **Correlação - Spearman e Correlação - Kendall**
	- Peso:  A H<sub>0</sub> foi aceitada, e segue a distribuição normal
	- Glicemia:  A H<sub>0</sub> foi rejeitada, e não segue a distribuição normal

03. Nível de Significância = Brando, α = 5%

04. O p-valor é 3.698e-10 - Spearman e 7.772e-05 - Kendall

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, existe uma correlação entre a glicemia e o peso do individuo em quilogramas

	06. Após isso é possível realizado o pós teste, onde os resultados forem iguais, as médias serão iguais, se caso não, as médias serão diferentes. 

#### 🌱Comandos no RStudio

```R
peso     <- c(56,58,70,72,81,92,95,100,104,112)
glicemia <- c(71,78,79,85,85,102,110,176,181,318)
   

shapiro.test(peso)
shapiro.test(glicemia)

cor.test(peso,glicemia,method="spearman")
cor.test(peso,glicemia,method="kendall")

```

01. É criado o vetor peso
02. É criado o vetor de glicemia

03. É realizado o teste de Shapiro Wilk para o peso
04. É realizado o teste de Shapiro Wilk para a glicemia

05. É realizado o teste de correlação. Ele recebe como parâmetros, os dados e em seguida o metódo 'Spearman' 
06. É realizado o teste de correlação. Ele recebe como parâmetros, os dados e em seguida o metódo 'Kendall' 

### 🌿Associação entre duas variáveis qualitativas | Teste qui-quadrado para a regressão


> Considerando uma situação em que existem duas dietas. Se deseja verificar a associação entre o tipo de dieta e a cura da hipertensão ao final do tratamento

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →   = Há associação
	- H<sub>1</sub> →  Não há associação
	
02. Teste - **Teste qui-quadrado para a regressão**

03. Nível de Significância = Brando, α = 5%

04. O p-valor é  0.004556

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, existe uma associação entre o tipo de dieta e o cura da condição de hipertensão ao final do tratamento

	06. Após isso é possível realizado o pós teste, onde os resultados forem iguais, as médias serão iguais, se caso não, as médias serão diferentes. 

#### 🌱Comandos no RStudio

```R

dados  <- read.csv("dieta.csv",sep=";",dec=",") 
chisq.test(table(dados$Dieta,dados$Hipertensao))

```

01. Os dados são lidos
02. O Comando chiq.test() recebe como parâmetro uma tabela. É criado a tabela com os dados da dieta e com os dados da hipertensão. 