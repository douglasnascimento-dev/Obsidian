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
# 🌳Rotas Aninhadas

```tsx
<Route path="/posts" element={<Posts />}> 
	<Route path=":id" element={<Post />}> 
</Route>
```