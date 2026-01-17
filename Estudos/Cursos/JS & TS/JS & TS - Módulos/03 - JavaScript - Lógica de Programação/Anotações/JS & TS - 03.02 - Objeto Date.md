---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
---

![[JS & TS.png|banner]]
> [!banner-icon] 🌿Date( )
## 🌳Declaração do objeto Date()

O Objeto Date() permite obter a data atual, em suas diversas tipagens. Sua declaração deve ocorrer em uma constante ou variável, acompanhada da palavra 'new'

```javascript
const data = new Date()
```

### 🌿Declaração de informação específica

Quando se quer obter uma informação específica da data, se deve declarar normalmente a função em uma 'const' ou 'let' e após isso requer a informação. Como no exemplo ao lado:

```javascript
const data = new Date() // 01/09/2024 10:30:300
console.log(data.getDate) // EX: 01
```

#### 🌱Tabela de informações principais 

| Informação    | Requerimento       |
| ------------- | ------------------ |
| Dia do Mês    | .getDate()         |
| Dia da Semana | .getDay()          |
| Mês           | .getMonth()        |
| Ano           | .getFullYear()     |
| Hora          | .getHours()        |
| Min           | .getMinutes()      |
| Segundo       | .getSeconds()      |
| Milisegundo   | .getMilliseconds() |

 #### 🌱Dia do Mês VS Dia da Semana

O Dia do Mês retornará um valor entre 0 e 30 (ou 31 ou 28 em Fev.). Já o Dia da Semana retornará um valor entre 0 e 6 (em que 0 é Domingo e 6 é Sábado)

#### 🌱Mês

O Mês retornará um valor abaixo do esperado. Isso é Janeiro será 0 em vez de 1, e Dezembro será 11 em vez de 12 como esperado normalmente