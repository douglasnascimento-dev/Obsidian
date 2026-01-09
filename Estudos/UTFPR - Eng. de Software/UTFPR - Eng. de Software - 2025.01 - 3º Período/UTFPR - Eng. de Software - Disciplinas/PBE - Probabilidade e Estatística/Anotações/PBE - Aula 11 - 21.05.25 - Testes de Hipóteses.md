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
> [!banner-icon] 🌱Aula 21.05.25
## 🌳Inferência Estatística


Se busca obter conclusões sobre algumas características de um conjunto de interesse, denominado população, com base na informação oriunda de um conjunto de dados disponíveis, denominado amostra.

- **Intervalos de Confiança** → quando o objetivo é estimar um parâmetro
- **Testes de Hipóteses** → quando há hipóteses sobre as características da população (parâmetros)

Exemplo:

> Em um país, é conhecido que a média do nível sérico de colesterol para a população para a população geral de todos os homens de 20 a 74 anos é 211mg/100ml.

- Considerando este mesmo país, a média do nível sérico de colesterol para a população dos homens 20 a 74 anos **fumantes e hipertensos** é também de 211mg/100ml?

- **Hipótese Alternativa - H<sub>1</sub>** → é a hipótese do pesquisador, aquilo que ele deseja verificar.
- **Hipótese Nula - H<sub>0</sub>** → é o oposto da alternativa.

Com base nos resultados de uma amostra aleatória de tamanho n, tomamos a decisão de rejeitar ou não rejeitar a **hipótese nula** formulado sobre um parâmetro.

**Notação:**
- H<sub>0</sub> → μ = 211mg/100ml
- H<sub>1</sub> → μ ≠ 211mg/100ml
### 🌿Erros 

**Existem dois tipos de erros:**
- Erro Tipo I → rejeito H<sub>0</sub>, mas H<sub>0</sub> é verdadeira
- Erro Tipo II → não rejeito H<sub>0</sub>, mas H<sub>0</sub> é falsa

 A Probabilidade de cometer um erro do tipo I é chamada nível de significância do teste e é denotada por α. A Probabilidade de cometer um erro do tipo II é denotada por β. A Probabilidade 1 - β é chamada de poder do teste. α e β são geralmente utilizadas para o cálculo do tamanho amostral. O Nível de significância do teste α é fixado antes da coleta de dados. 

Exemplo:

> Certa droga 1 vem sendo utilizada no tratamento de uma doença. Um pesquisador desenvolve uma nova droga 2 que, se mais eficiente, substituirá a droga 1 

- **Hipótese do Pesquisador** → A Droga 2 é mais eficiente.

- H<sub>0</sub> → A Droga 1 é mais eficiente
- H<sub>1</sub> → A Droga 2 é mais eficiente

#### 🌱Níveis de Significância

- α ≈ 1% | Quando a probabilidade em se cometer o erro do Tipo I é grave.
- α ≈ 5% | Quando a probabilidade em se cometer o erro do Tipo I é mediana.
- α ≈ 10% | Quando a probabilidade em se cometer o erro do Tipo I é branda.

O Maior valor de α que nos levaria a não rejeitar a hipótese nula H<sub>0</sub> é chamado de p-valor. 
- Se o p-valor for menor que o nível de significância eu rejeito a hipótese nula H<sub>0</sub>. 
- Se o p-valor for maior que o nível de significância eu não rejeito a hipótese nula H<sub>0</sub>. 

### 🌿Passos para o Teste de Hipóteses

01. Identificar H<sub>0</sub> e H<sub>1</sub>
02. Baseado no item 01, escolher o teste estatístico
03. Fixar o nível de significância α
04. A partir das observações amostrais, calcular o valor da quantidade amostral | p-valor
05. Verificar se rejeita ou não a hipótese nula H<sub>0</sub> 
	- p-valor < α → rejeitar a hipótese nula 
	- p-valor >= α → não rejeitar a hipótese nula