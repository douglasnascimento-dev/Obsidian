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

## 🌳O Uso do FetchAPI
![[JS - Assíncrono.png|banner]]
> [!banner-icon] 🌿FetchAPI

O FetchAPI facilita a utilização de requisições quando comparado com o XMLHTTRequest, ele já devolve automaticamente uma promisse facilitando sua utilização, entretanto é necessário transforma sua resposta em texto.

### 🌿Utilizando o FetchAPI
--- start-multi-column: ID_bfc8
```column-settings
Number of Columns: 2
Largest Column: standard
```

Para usar o fetch aliado com o async é necessário declarar o fetch em uma variável e passar como parâmetro a url, que pode ser de um arquivo local, url de API ou outro. Após isso, transformar a resposta em texto, como isso retorna uma nova promisse, também é necessário declarar utilizando o await 

--- column-break ---

```javascript
async function carregaPagina(el) {
  const href = el.getAttribute("href");
  
  try {
    let response = await fetch(href);
    let text = await response.text();
    carregaResultado(text);
  } catch (e) {
    console.error(e);
  }
}
```

--- end-multi-column

