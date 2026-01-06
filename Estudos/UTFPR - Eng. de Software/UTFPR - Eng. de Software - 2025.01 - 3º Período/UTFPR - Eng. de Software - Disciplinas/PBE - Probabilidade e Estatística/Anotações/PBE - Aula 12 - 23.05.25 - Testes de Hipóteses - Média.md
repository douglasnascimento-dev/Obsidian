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
## 🌳Testes de Hipóteses - Média

### 🌿Exemplo 01 | Estatística T 

> Dados o conjunto de Dados Dieta, um pesquisador supor que a proporção de perda de peso média das Dietas A e B sejam maior que de 20%, que é a proporção média de perda de peso da Dietas padrões do mercado. 

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> → A Proporção de perda de peso média = 20%
	- H<sub>1</sub> →  A Proporção de perda de peso média ≠ 20%

02. Teste T, pois a variância populacional é desconhecida

03. Nível de Significância = Mediano, α = 5%

04. O p-valor é 1.211e-08

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 5% de significância, ou seja de cometer o erro do tipo I, existem evidência que a proporção de peso média é diferente de 20%.*

Ao realizar o Teste de Hipótese, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores, se o valor a ser verificado não estiver nesse limite, também se pode afirmar que a igualdade é falsa.  

06. O Intervalo de Confiança resultou em 14.43% - 17.12%, de forma que a proporção de peso médio a ser verificado era de 20%.
	- *Com 95% de confiabilidade, as dietas A e B, perdem entre 5% e 7% proporção de peso média menos que as dietas padrões do mercado, com 20%*

#### 🌱Comandos no RStudio

```R
01. t.test(dados$Perda, mu = 20, conf.leve = 0.95)
```

01. O Comando t.test() recebe como parâmetro os dados referentes, o valor que se deve comparar na igualdade, e o nível de confiabilidade que é 1 - α. 

### 🌿Exemplo 02 | Estatística Z

> Dados o conjunto de Dados Dieta, um pesquisador supor que a proporção de perda de peso média das Dietas A e B sejam maior que de 20%, que é a proporção média de perda de peso da Dietas padrões do mercado. 

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> → A Proporção de perda de peso média = 20%
	- H<sub>1</sub> →  A Proporção de perda de peso média ≠ 20%

02. Teste Z, pois a variância populacional é conhecida, e seja σ<sup>2</sup> é de 72.25%<sup>2</sup>

03. Nível de Significância = Mediano, α = 5%

04. O p-valor para o teste de Shapiro Wilk é de 0.1717

05. O p-valor para o teste de Shapiro Wilk é **maior** que α. Então a hipótese H<sub>0</sub> não foi rejeitada. 
	- *Com 5% de significância, ou seja de cometer o erro do tipo I, existem evidências que a variável aleatória seguira a distribuição normal*

06. O p-valor é de 6.897e-07

07. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 5% de significância, ou seja de cometer o erro do tipo I, existem evidência que a proporção de peso média é diferente de 20%.*

Ao realizar o Teste de Hipótese, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores, se o valor a ser verificado não estiver nesse limite, também se pode afirmar que a igualdade é falsa.  

06. O Intervalo de Confiança resultou em 14.11% - 17.44%, de forma que a proporção de peso médio a ser verificado era de 20%.
	- *Com 95% de confiabilidade, as dietas A e B, perdem entre 3% e 6% proporção de peso média menos que as dietas padrões do mercado, com 20%*


#### 🌱Comandos no RStudio

```R
01. shapiro.test(dados$Perda)
02. library(BDSA)
03. z.test(dados$Perda, sigma.x = sqrt(72.25), mu = 20, conf.leve = 0.95)
```

01. O Comando shapiro.test() testa se H<sub>0</sub> segue distribuição normal segue e se H<sub>1</sub> não segue distribuição normal 
	- Se p-valor for menor que σ → H<sub>0</sub> é rejeitada
	- Se p-valor for maior que σ → H<sub>0</sub> não é rejeitada
02. Se liga a biblioteca BDSA
03. O Comando z.test() recebe como parâmetro os 
	- Os dados referentes
	- O Desvio padrão (que é a raiz quadrada da variância populacional)
	- O Valor que se deve comparar na igualdade, 
	- E o nível de confiabilidade que é 1 - α. 

