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
## 🌳Testes de Hipóteses - Pearson

O Teste verifica a correlação entre duas variáveis. Quanto mais próximo de 1 está a coeficiente mais forte a correlação, enquanto mais próximo de 0 está o coeficiente mais fraca é a correlação. 

> Dados o conjunto de Dados Dieta, um pesquisador deseja testar a correlação da proporção de perda de peso em % e a idade do indivíduo em anos

01. Definir H<sub>0</sub> e H<sub>1</sub>
	- H<sub>0</sub> → O Coeficiente de correlação entre a Proporção de perda de peso e a Idade = 0 | Não há correlação
	- H<sub>1</sub> →  O Coeficiente de correlação entre a Proporção de perda de peso e a Idade ≠ 0 | Há correlação

02. Teste de Correlação - Pearson
	- Ambas as variáveis devem seguir a distribuição normal:
		- Proporção de Perda de Peso: 0.1717 - A H<sub>0</sub> foi aceita, e aceita a distribuição normal
		- Idade: 0.3137 - A H<sub>0</sub> foi aceita, e aceita a distribuição normal

03. Nível de Significância = Mediano, α = 10%

04. O p-valor é 3.323e-07

05. O p-valor é **menor** que α. Então a hipótese H<sub>0</sub> foi rejeitada. 
	- *Com 10% de significância, ou seja de cometer o erro do tipo I, existem indício que há correlação entre a proporção de perda de peso (em %) e a idade (em anos)

Ao realizar o Teste de Correlação de Pearson, também é apresentado o resultado do Intervalo de Confiança. Eles apresentam os limites superiores e inferiores.

06. O Intervalo de Confiança resultou em -0.6014859 á -0.3464932, de forma que como maior a proporção de perda de peso menor é a idade do indivíduo
	- *Com 95% de confiabilidade, considerando as dietas A e B, pode-se afirmar que quanto maior a proporção de perda de peso (em %) menor é a idade do indivíduo (em anos)

#### 🌱Comandos no RStudio

```R
01.shapiro.test(dados$Perda)
02.shapiro.test(dados$Idade)
03.cor.test(dados$Perda,dados$Idade,method="pearson",conf.level=0.90)
```

01. É realizado o teste de Shapiro Wilk para a primeira variável
02. É realizado o teste de Shapiro Wilk para a segunda variável
03. O Comando cor.test() recebe as duas variáveis quantitativas, o método é declarado como Pearson e o nível de confiança. 
