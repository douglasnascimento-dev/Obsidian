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
> [!banner-icon] 🌱Aula 11.06.25
## 🌳Testes de Hipóteses - Análise de Variância em uma Via - ANOVA oneWay

Sejam mais de duas populações distintas,. E Seja X uma variável aleatória (contínua) de interesse

Nesse caso se diz que se quer verificar o efeito de uma variável qualitativa em uma variável quantitativa. O Objetivo é comparar as médias populacionais μ1 e μ2, ou seja:

- H<sub>0</sub> | todas as μ são iguais
- H<sub>1</sub> | pelo menos uma μ é diferente

### 🌿Exemplo 01 | Usando o Teste Z

> Se deseja verificar o efeito de 3 tipos diferentes de rolamento em tempo de durabilidade em semanas. O Tipo 1, Tipo 2 e o Baseline

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> →  μ<sub>1</sub> = μ<sub>2</sub> = μ<sub>Baseline</sub>
	- H<sub>1</sub> →   pelo menos uma das médias é diferente das demais

02. Se define o teste - **Teste ANOVA oneWay**
	- Tem como pressuposto para a validação, é necessário realizar a análise de resíduos. O Resíduos precisam ser independentes, identicamente distribuídos e seguirem distribuição normal e precisam tem uma variância constante (homocedásticos). 
	01. Distribuição Normal | Teste de Shapiro Wilk
		- O p-valor é 0.8625
		- A Hipótese 0 não é rejeitado, então os resíduos seguem a distribuição normal
	02. Homocedásticos | Teste de Breusch Pagan e Teste de Goldfeld Quandt
		- Teste de Breusch Pagan
			- O p-valor é 0.1072
		- Teste de Goldfeld Quandt
			- O p-valor é 0.5262
		- A Hipótese O não é rejeitada, então os resíduos são  homocedásticos
	03. Independentes | Teste de Durbln Watson
		- O p-valor é 0.7817
		- A Hipótese O não é rejeitada, então os resíduos são independentes
	- **Todos os requisitos foram validados, então o p-valor é válido**

03. Nível de Significância = Brando, α = 10%

04. O p-valor é 0.001464939

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, há evidência que há um efeito  do tipo de rolamento no tempo de durabilidade em semanas. Isto é as médias se diferem entre si.*

Na ANOVA para obter os intervalos de confiança, é necessário um pós teste. No caso, será utilizado o pós teste de Tukey HSD. Ele testará dois a dois cada diferença. 

```r
			                     diff         lwr       upr     p adj
Type 1-Baseline  2.530000  1.16781191 3.8921881 0.0009730
Type 2-Baseline  1.423571  0.06138333 2.7857595 0.0820676
Type 2-Type 1   -1.106429 -2.46861667 0.2557595 0.2116114
```

O Comando retornará as diferenças, o maior e o menor e o p-valor ajustado para verificar a média da comparação. 

- Nesse caso, a igualdade entre o Tipo 1 e o Baseline, é rejeitado, pois o p-valor é menor que o nível de significância. O Tipo 1 dura entre 1.16781191 e 3.8921881 semanas a mais que o Baseline.
- Nesse caso, a igualdade entre o Tipo 2 e o Baseline, é rejeitado, pois o p-valor é menor que o nível de significância. O Tipo 1 dura entre 0.06138333 2.7857595 semanas a mais que o Baseline.
- Nesse caso, a igualdade entre o Tipo 2 e o Tipo 1, é aceita, pois o p-valor é maior que o nível de significância. 

#### 🌱Comandos no RStudio

```R
01. ANOVA <- aov(dados$Durabilidade~dados$Tipo) 

02. shapiro.test(ANOVA$res) 

03. install.packages('lmtest')
04. library(lmtest) 

05. bptest(ANOVA) 
06. gqtest(ANOVA)

07. dwtest(ANOVA) 

08. TukeyHSD(ANOVA, conf.level=0.90) 
```

01. É realizado os cálculos relacionados com a ANOVA, isso retornará os resíduos que serem utilizados para a validação.
02. O Comando shapiro.test() verifica se os resíduos seguem distribuição normal. Recebe apenas os resíduos da ANOVA
03. A Biblioteca lmtest é instalada
04. A Biblioteca lmtest é carregada
05. O Teste de Breusch Pagan verifica se os resíduos são Homocedásticos. Recebe apenas os cálculos com a ANOVA
06. O Teste de Goldfeld Quandt verifica se os resíduos são Homocedásticos. Recebe apenas os cálculos com a ANOVA
07. o Teste de Durbln Watson verifica se os resíduos são independentes. Recebe apenas os cálculos com a ANOVA
08. Se a hipótese nula, se é utilizado o pós teste de Tukey HSD. Ele recebe como parâmetro a ANOVA e o nível de confiança. 
 