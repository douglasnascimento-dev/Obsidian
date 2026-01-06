---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
---

![[Probabilidade e Estatística.png|banner]]
> [!banner-icon] 🌿Aula 09.04.25

### 🌿Exemplo de Tabela de Frequência 

- *Suponha que em um certo lote, com 50 peças, observou-se a variável 'Peça Defeituosa'*

| Peça Defeituosa | F      | Fr   |
| --------------- | ------ | ---- |
| Não             | 37     | 0,74 |
| Sim             | 13     | 0,26 |
| **Total**       | n = 50 | 1    |
- F → Frequência Absoluta
- Fr → Frequência Relativa | *em porcentagem*

### 🌿Associação entre duas Variáveis Qualitativas

| Tipo de Dieta | Hipertensão → *Sim* | Hipertensão → *Não* |
| :-----------: | :-----------------: | :-----------------: |
|       A       |      8 \| 16%       |      42 \| 84%      |
|       B       |      22 \| 44%      |      28 \| 56%      |
*Por convenção, a Variável que representa o grupo fica na primeira coluna*

### 🌿Comandos no RStudio

Para criar um tabela simples, onde se verifica a frequência de uma valor em determinada variável.

```R
f <- table(dados$Hipertensao)
fr <- prop.table(f)
```

Já esse comando, verifica o cruzamento de duas variáveis, por padrão o R irá colocar o primeiro parâmetro da tabela, como a primeira coluna

```R
f2 <- table(dados$Dieta, dados$Hipertensao)
fr2 <- prop.table(f2, 1)
```

O 'prop.table' recebe dois parâmetros aqui, a tabela e a configuração do calculo da porcentagem. Onde:
- 1 → Calcula o total da Linha
- 2 → Calcula o total da Coluna
Observe que normalmente, se utilizará o valor 1, pois os grupos estarão na primeira linhas, ou seja estão divididos em linhas