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
## 🌿Retrovisores no Match

Enquanto no '.replace()' a quebra de linha é definida por '$1', no '.match()' isso acontecerá usando o '\1'.

```js
console.log(html.match(</(\w+)>.+?<\/\1>/g))
```

A RegEx acima indica que ele deve iniciar e terminar com o mesmo padrão, devido ao grupo no inicio e a referenciação no final em '\1'

## 🌿Resolvendo problemas com o '.'

Embora o '.' seja um seletor universal, ele apresenta uma característica de não selecionar quebras de linhas, para resolver isso é possível utilizar o seguinte conjunto '\[\s\S]', ou seja, tudo que for uma quebra de linha e tudo que não for uma quebra de linha. 

```js
console.log(html.match(</(\w+)>[\s\S]*?<\/\1>/g))
```

## 🌿Não salvando o Grupo

Se caso algum grupo criado, for ser utilizado unicamente internamente, é possível ignorar esse grupo na contagem externa, utilizando o '?:'

```js
console.log(html.match(</(?:\w+)>[\s\S]*?<\/\1>/g))
```
