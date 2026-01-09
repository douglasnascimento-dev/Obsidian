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
## 🌳Quantificadores

- **\*** - Opcional | 0 ou n vezes
- **?** - Opcional | 0 ou 1 vez
- **+** - Obrigatório | 1 ou n vezes

## 🌿Usando os Quantificadores

```js
const regExp01 = /(Jo+ão)/gi;
```

Baseado na Expressão Regular apresentada a cima, é possível dizer que em uma busca na função '.match()' a expressão 'Joooooooooooooooooão' seria encontrada, pois o quantificador '+' representa um caso de 1 a n repetições do caractere, que no caso a cima é a letra 'o'.

```js
const regExp02 = /\.jpe?g/gi;

const arquivos = [
  'Atenção.jpg',
  'FOTO.jpeg',
  'Meu gatinho.jpg',
  "planilha.csv",
  'Meu gatinho.JPG',
  'Meu gatinho.JPEG',
  'Marido.png',
  'lista de compras.txt',
];
```

Nessa expressão regular, a RegExp está sendo usada para filtrar tipos de arquivos '.jpg' e '.jpeg', observe que o quantificador '?' está sendo utilizado para permitir que em tipos em que a letra 'e' não aparece, ou apareça apenas uma vez, sejam considerados válidos. O quantificador '\*' também poderia ser utilizado, entretanto, isso significar que tipos de arquivo como '.jpeeeeeg' fosse considerados válidos, o que não atende ao objetivo. 

Observe também que é utilizado um caractere de '\\' logo antes do '.', isso porque, o ponto dentro das RegEx's tem função especifica, e para ser utilizado apenas para comparação, precisa ser declarado após um caractere de escape, cuja função é cumprida pela contra barra.

## 🌿Mínimo e Máximo

```js
const regExp02 = /\.jpe{0,1}g/gi;
```

- **{0,10}** | De 0 á 10
- **{10, }** | De 10 á infinito
- **{ 10 }** | 10 vezes
- **{0, }** | De 0 á infinito

