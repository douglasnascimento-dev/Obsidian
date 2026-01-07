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
# 🌳Parâmetros

É possível utilizar os parâmetros para a criação de Rotas Dinâmicas (ex: obtendo o ID juntamente com a URL). Para isso, é importante configurar corretamente a especificidade do Caminho.

## 🌿Especificidade

```tsx
<Route path="/posts" element={<Post />};
<Route path="/posts/:id" element={<Post />};
```

Observe que no exemplo acima, a primeira rota é mais generalista, ele irá renderizar todos os posts. Já na Segunda Rota, será rederizado apenas o  