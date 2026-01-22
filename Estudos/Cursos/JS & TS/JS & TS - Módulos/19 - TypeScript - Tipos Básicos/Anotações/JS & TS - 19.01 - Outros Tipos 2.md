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
> [!banner-icon] Módulo 19

## 🌿Enum

```ts
enum Cores {
  VERMELHO = 204, // A CONTAGEM INICIA DO 204
  AZUL,
  AMARELO,
  ROXO = 'ROXO',
}

enum Cores {
  PRETO,
  BRANCO,
}
```

O Tipo Enum é como um Seletor de Escolhas. Ele permite utilizar Valores Predefinidos. Os Enum's possuem um índice e um valor, que podem ser o mesmo como no Exemplo do Roxo. Eles também podem ter Índices Numéricos, que por padrão iniciam no 0, ou pode ser definido manualmente.  

Os Enum podem se juntar automaticamente, 