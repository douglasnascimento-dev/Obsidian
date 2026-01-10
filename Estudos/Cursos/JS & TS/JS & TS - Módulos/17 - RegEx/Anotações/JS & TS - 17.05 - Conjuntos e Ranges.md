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
## 🌳Conjuntos

Os conjuntos servem para indicar que se deve retornar qualquer valor dentro daquele Conjuntos. Se caso vier acompanhado do quantificador '+' irá interpretar ocorrências sequências de valores, como uma única ocorrência. Já se vier acompanhado do quantificador '^' indica uma negação á aquele conjunto. 

## 🌿Exemplos

```js
const alfabeto =   'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡';
```

```js
const regExp05 = /[abc]/g
```

Nesse caso, será retornado qualquer citação a algum elemento desse conjunto. 

A Saída será: \['a', 'b', 'c']

```js
const regExp06 = /[abc]+/g
```

Nesse caso, também será retornado qualquer citação a algum elemento desse conjunto, mas se estiverem em sequência será unificadas. 

```js
const regExp07 = /[^abc]/g
```

Nesse caso, também será retornado qualquer citação a algum elemento desse conjunto, mas se estiverem em sequência será unificadas. 

A Saída será: \[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '®', '¡', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '¡']

## 🌳Ranges

Representam um conjunto de  