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
> [!banner-icon] Módulo 16
# 🌳Link vs A

- **Link** > É o Link especial do React Router Dom. Diferentemente do \<a> ele não recarrega o estado da página ao ser acionado.
- **a** > É o Link típico do HTML. Ele recarrega o estado da página toda vez que for acionado. 

## 🌿Na Prática

```tsx
<Link to='/'> Home </Link>
```

```html
<a href='/'> Home </a>
```

Observe que embora os parâmentros 'to' e 'href' tenham nomes distintos, cumprem a mesma função nos dois casos. 