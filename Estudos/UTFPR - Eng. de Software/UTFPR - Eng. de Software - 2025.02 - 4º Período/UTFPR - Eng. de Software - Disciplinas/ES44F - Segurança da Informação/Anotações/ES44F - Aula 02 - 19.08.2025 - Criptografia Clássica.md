---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
Nota Final: "0.0"
---

![[Segurança da Informação.png|banner]]
> [!banner-icon] :LiBookMarked: Aula 18.08.2025
# :LiBookCopy: Anotações 

> por STALLINGS, William. Criptografia e segurança de redes: princípios e práticas - #Livro

Uma mensagem original é conhecida como **texto claro** (ou plaintext), enquanto a mensagem codificada é chamada de **texto cifrado** (ou ciphertext). O processo de converter um texto claro em um texto cifrado é conhecido como **cifração** ou **encriptação**; restaurar o texto claro a partir do texto cifrado é **decifração** ou **decriptação**. Os muitos esquemas utilizados para a encriptação constituem a área de estudo conhecida como **criptografia**. Esse esquema é designado sistema **criptográfico** ou **cifra**. As técnicas empregadas para decifrar uma mensagem sem qualquer conhecimento dos detalhes de encriptação estão na área da **criptoanálise**, que é o que os leigos chamam de “quebrar o código”. As áreas da criptografia e criptoanálise, juntas, são chamadas de **criptologia**.

Existem dois requisitos para o uso seguro da encriptação simétrica:
1. Precisamos de um algoritmo de encriptação forte. No mínimo, gostaríamos que o algoritmo fosse tal que
um oponente que conheça o algoritmo e tenha acesso a um ou mais textos cifrados seja incapaz de decifrar o texto cifrado ou descobrir a chave. Esse requisito normalmente é indicado de maneira mais forte:
o oponente deverá ser incapaz de decriptar o texto cifrado ou descobrir a chave, mesmo que possua
diversos textos cifrados com seus respectivos textos claros.
2. Emissor e receptor precisam ter obtido cópias da chave secreta de uma forma segura e mantê-la protegida. Se alguém conseguir descobrir a chave e o algoritmo, toda a comunicação usando essa chave
poderá ser lida.

### :LiList: Classificações

- Os Algoritimos podem ser classificados de 3 formas:
	1. O tipo das operações usadas para transformar texto claro em texto cifrado.
	2. O número de chaves usadas. (Simétrico ou Assimétrico)
	3. O modo em que o texto claro é processado (em Bloco ou em Fluxo)

## :LiList: Cifra de César

O uso mais antigo que conhecemos de uma cifra de substituição, e o mais simples, foi feito por Júlio César. A cifra de César envolve substituir cada letra do alfabeto por aquela que fica três posições adiante.

- Texto claro: *meet me after the toga party*
- Texto cifrado: *PHHW PH DIWHU WKH WRJD SDUWB*
## :LiList: Maquina de Rotor

A máquina consiste em um conjunto de cilindros rotativos independentes, através dos quais pulsos elétricos podem fluir. Cada cilindro tem 26 pinos de entrada e 26 pinos de saída, com fiação interna que conecta cada pino de entrada a um único pino de saída.

![[ExemploRotor.png]]

> Exemplo da Máquina de Rotor - Utilizado por exemplo na Máquina Enigma durante a Segunda Guerra Mundial 