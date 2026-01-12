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
> [!banner-icon] Módulo 17
> 
## 🌿Começa com - '^'

Sua utilização no início de uma RegEx indica que necessariamente a ocorrência encontrada necessita de iniciar com o padrão indicado. No caso indicado a baixo, apenas validaria a ocorrência, se caso começasse com o padrão indicado. 

```js
const cpf1 = "254.789.456-45"
const cpf2 = " 254.789.456-45"

const regExCPF = /^(\d{3}\.){2}\d{3}\-\d{2}/g
```

No CPF1 ele retornaria um ocorrência válida, pois não há nada antes do CPF. Já no CPF2 por ter um espaço, a ocorrência seria considerada inválida. 

## 🌿Termina com - '$'

Sua utilização no fim de uma RegEx indica que necessariamente a ocorrência encontrada necessita de encerrar com o padrão indicado. No caso indicado a baixo, apenas validaria a ocorrência, se caso terminasse com o padrão indicado. 

```js
const cpf1 = "254.789.456-45"
const cpf2 = "254.789.456-45 "

const regExCPF = /(\d{3}\.){2}\d{3}\-\d{2}$/g
```

No CPF1 ele retornaria um ocorrência válida, pois não há nada depois do CPF. Já no CPF2 por ter um espaço, a ocorrência seria considerada inválida. 

## 🌿Multiline

É representada pela flag 'm', e indica que o 'Começa com' (^) e o 'Termina com' (\$) são reiniciados linha a linha, isso é, a cada nova linha, haveria um novo  'Começa com' (^) e o 'Termina com' (\$) 

```js
const regExCPF = /(\d{3}\.){2}\d{3}\-\d{2}$/gm;
```