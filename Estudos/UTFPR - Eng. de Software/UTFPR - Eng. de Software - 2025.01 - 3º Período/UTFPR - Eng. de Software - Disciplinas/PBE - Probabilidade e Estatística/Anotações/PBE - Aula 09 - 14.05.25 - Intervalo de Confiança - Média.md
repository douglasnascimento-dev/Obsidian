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
> [!banner-icon] 🌱Aula 14.05.25

## 🌳Inferência Estatística

Busca obter conclusões sobre algumas características de um conjunto de interesse, denominado população, com base na informação oriunda de um conjunto de dados disponível, denominada amostra. 

- **População** → é o conjunto constituído por todos os indivíduos que apresentam pelo menos uma características comum. 
- **Amostra** → é a parte selecionada da totalidade de observações abrangidas pela população, através da qual se faz inferência sobre um ou mais parâmetros da população. Dados coletados de forma imprecisa ou descuidada podem ser totalmente destituídos de valor, mesmo que amostra seja suficientemente grande, 
- **Parâmetro** → é a característica numérica de uma população, em que, geralmente, não se conhece seu valor.
	- A Média populacional da Variável aleatória X.
	- A Variância populacional da Variável aleatória X.
- **Estimativas** → são as quantidades calculadas da amostra com a finalidade de representar um parâmetro de interesse da população.  
- Mais de uma função da amostra pode ser proposta para estimar o parâmetro de interesse.
	- **Vício** → um estimador é não viciado se seu valor esperado coincide com o parâmetro de interesse. 
	- **Consistência** → um estimador é consistente, se à medida que o tamanho da amostra aumenta, seu valor esperado converge para o parâmetro de interesse e sua variância converge para zero.

### 🌿Intervalo de Confiança

Seja uma variável aleatória contínua X de interesse. Na população, X tem média μ e a variância σ<sup>2</sup>. E que se busca estimar a média populacional μ através de uma amostra. A diferença entre x (estimativa da média) - μ é o erro de estimação. 

Outro método de estimação, conhecido como estimação por intervalo, fornece um intervalo de valores razoáveis no qual se presume que esteja o parâmetro de interesse com certo grau de confiança. Este intervalo de valores é conhecido como intervalo de confiança.  

### 🌿Intervalo de Confiança para a Média populacional | Estatística Z

Considerando uma variável contínua X que segue a distribuição normal com a média μ e variância **conhecida** σ<sup>2</sup>. 

Exemplo, a distribuição dos níveis séricos de colesterol para todos os homens hipertensos e fumantes de um país segue distribuição aproximadamente normal com média μ (desconhecida). Supor o interesse em estimar μ. ==Se baseia na estatística Z==. 

Então se pode dizer, que, com 95% de confiabilidade que os limites de 191 e 243 contém a verdadeira média populacional dos níveis séricos de colesterol dos homens hipertensos e fumantes do país em questão. Não se pode dizer que há uma probabilidade de 95% de μ se encontrar entre esse valores. O μ é fixo e poder estar entre 191 e 243 ou não. **Confiabilidade é a probabilidade de ao selecionar uma amostra e gerar um intervalo de confiança, este ser correto e conter o parâmetro**

#### 🌱Código no R

```R
DietaA <- dados[dados$Dieta == "A",]
qqnorm(DietaA$Perda)
qqline(DietaA$Perda)
install.packages("BSDA")
library(BSDA)
z.test(DietaA$Perda, sigma.x = 8.5, conf.level = 0.95)$conf.int
```

1. Se separa a Dieta A do restante
2. Se gera um Q-Q Plot, para verificar qual a distribuição a variável segue. 
3. Se instala o pacote BSDA e o carrega na biblioteca.
3. Se utiliza a função z.test(), que recebe com parâmetro a variável que se busca saber os dados, a variância populacional, o nível de confiança e então se informa que o apenas o intervalo de confiança é necessária. 

### 🌿Intervalo de Confiança para a Média populacional | Estatística T

Quando a variância σ<sup>2</sup> é desconhecida se utiliza o Intervalo de Confiança para a Média populacional com a Estatística T. onde no lugar da σ<sup>2</sup> (variância populacional) se utilizar a s<sup>2</sup> (variância amostral).

#### 🌱Código no R

```R
DietaA <- dados[dados$Dieta == "A",]
qqnorm(DietaA$Perda)
qqline(DietaA$Perda)
t.test(DietaA$Perda, conf.level = 0.95)$conf.int
```

1. Se separa a Dieta A do restante
2. Se gera um Q-Q Plot, para verificar qual a distribuição a variável segue. 
3. Se utiliza a função t.test(), que recebe com parâmetro a variável que se busca saber os dados, o nível de confiança e então se informa que o apenas o intervalo de confiança é necessária. 