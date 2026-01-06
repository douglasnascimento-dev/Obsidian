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

![[JSTS.png|banner]]
> [!banner-icon] 🌿Date( )
## 🌳Declaração do objeto Date()
--- start-multi-column: ID_tvvb
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Objeto Date() permite obter a data atual, em suas diversas tipagens. Sua declaração deve ocorrer em uma constante ou variável, acompanhada da palavra 'new'

--- column-break ---

```javascript
const data = new Date()
```

--- end-multi-column
### 🌿Declaração de informação específica
--- start-multi-column: ID_prhp
```column-settings
Number of Columns: 2
Largest Column: standard
```

Quando se quer obter uma informação específica da data, se deve declarar normalmente a função em uma 'const' ou 'let' e após isso requer a informação. Como no exemplo ao lado:

--- column-break ---

```javascript
const data = new Date() // 01/09/2024 10:30:300
console.log(data.getDate) // EX: 01
```

--- end-multi-column
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