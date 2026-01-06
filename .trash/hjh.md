---
Tipo: Módulo
Descrição: Nesse módulo será apresentado o conceito de programação orientada a objetos em JS, utilizando como base o conhecimento adquirido durante o módulo de funções
Conteúdo: "'Class' | 'Constructor' | 'Super'"
Status: true
Início: 2025-02-01
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Fim: 2025-02-12
Anotações:
  - "[[JS & TS - 07.01 - Classes em JS]]"
  - "[[JS & TS - 07.02 - Herança e Métodos Estáticos com Classes]]"
Atividades:
  - "[[JS & TS - AC. 07.01.01 - ATV. Classes em JS]]"
  - "[[JS & TS - AC. 07.02.01 - ATV. Herança e Métodos Estáticos]]"
---

![[Capa - JS - Classes (POO).png|banner]]
> [!banner-icon] 🥥
## 🌴 Anotações | JavaScript POO

``` page-gallery
title: ""
fields: [file.name, file.frontmatter.Conteúdo]
columns: 3
filter: false
count: false
views:
  - name: 
    from: '("Estudos/Cursos/JS & TS/Módulos/07 - JavaScript POO")'
    orientation: landscape
    where: 'file.frontmatter.Tipo = "Anotação"'
```


## 🌴 Aulas Concluídas:

| <p style="text-align: center">Título - Aula</p> | <p style="text-align: center">Conclusão - Aula</p> |
| :---------------------------------------------- | :------------------------------------------------: |
| 🌿102 - Criando Classes                         |                     01/02/2025                     |
| 🌿103 - Getters e Setters                       |                     01/02/2025                     |
| 🌿104 - Herança com Classes                     |                     10/02/2025                     |
| 🌿105 - Metódos de Instância e Estáticos        |                     10/02/2025                     |

## 🌴Notas Adicionais | JavaScript POO


### 🍃Tipo primitivo 'Symbol'
--- start-multi-column: ID_oq15
```column-settings
Number of Columns: 2
Largest Column: standard
```

O Tipo primitivo 'Symbol' permite criar variáveis mais seguras e difíceis de serem alteradas. Isso porque sua declaração acontece de maneira diferente do comum. Observe que no exemplo ao lado, no momento da sua declaração ele recebe uma parâmetro, esse parâmetro é apenas uma descrição do Symbol e não é obrigado a sua declaração

--- column-break ---

```javascript
const _pontuacaoVestibular = Symbol('pontuacaoVestibular')

[_pontuacaoVestibular] = 785.12

```

--- end-multi-column

