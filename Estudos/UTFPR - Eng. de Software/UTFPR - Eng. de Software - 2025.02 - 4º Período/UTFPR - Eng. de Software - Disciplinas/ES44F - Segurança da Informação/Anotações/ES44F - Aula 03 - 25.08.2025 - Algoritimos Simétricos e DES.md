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


## :LiList: Cifras

- **Cifra de Fluxo:** Encripta os dados digitais um bit ou um byte de cada vez. Um exemplo clássico é a cifra de Vernam. Para fins práticos, essas cifras utilizam um gerador de fluxo de bits algorítmico para produzir um fluxo de chaves a partir de uma chave secreta compartilhada.
- **Cifra de Bloco:** Processa um bloco de texto claro de tamanho fixo (geralmente 64 ou 128 bits) como um todo, produzindo um bloco de texto cifrado do mesmo tamanho. A grande maioria das aplicações de criptografia simétrica em rede utiliza cifras de bloco, tornando sua estrutura um foco principal de estudo.

## :LiList: Cifra de Feistel

A maioria dos algoritmos de encriptação de bloco, incluindo o DES, é baseada na estrutura de Cifra de Feistel. A motivação para essa estrutura surge da impraticabilidade da "cifra de bloco ideal". Feistel propôs uma aproximação prática para a cifra de bloco ideal, utilizando o conceito de **cifra de produto**, que executa cifras mais simples em sequência para obter uma cifra final criptograficamente mais forte

## :LiList: Confusão e Difusão

- **Difusão:** Dissipa a estrutura estatística do texto claro sobre o texto cifrado. Isso é alcançado fazendo com que cada dígito do texto claro afete o valor de muitos dígitos do texto cifrado.
- **Confusão:** Busca tornar a relação entre as estatísticas do texto cifrado e o valor da chave de encriptação a mais complexa possível, dificultando a dedução da chave.

## :LiList: Parâmetros de Projeto

A implementação exata de uma cifra de Feistel depende de vários parâmetros e escolhas de projeto, incluindo:
- **Tamanho do bloco:** Blocos maiores geralmente significam mais segurança. 64 bits foi um tamanho tradicional, mas o AES usa 128 bits.
- **Tamanho da chave:** Chaves maiores oferecem maior resistência a ataques de força bruta. 128 bits tornou-se um padrão comum.
- **Número de rodadas:** Uma única rodada oferece segurança inadequada, mas múltiplas rodadas aumentam a segurança. Um valor típico é 16.
- **Algoritmo de geração de subchave:** Uma maior complexidade aqui pode levar a uma maior dificuldade de criptoanálise.
- **Função F:** A complexidade e a não linearidade da função F são críticas para a segurança da cifra.
- **Facilidade de análise:** Um algoritmo que é fácil de ser analisado permite um maior nível de confiança em sua força, pois pode ser examinado em busca de vulnerabilidades.

## :LiList: DES

- Foi adotado em 1977 pelo National Institute of Standards and Technology (NIST). O Algoritimo busca garantir a confidencialidade de um sistema. 

- O DES encripta dados em blocos de 64 bits, utilizando uma chave de 56 bits. O processo transforma a entrada de 64 bits numa saída de 64 bits através de uma série de passos. 

- A desencriptação utiliza os mesmos passos e a mesma chave para reverter o processo. 

- Apesar de o NIST ter recomendado o seu uso apenas para sistemas legados a partir de 1999, e ter indicado o Triple DES (3DES) como substituto, a compreensão do DES continua a ser importante, pois os seus algoritmos básicos são os mesmos do 3DES

## :LiList: Efeito Avalanche

Uma propriedade desejável em qualquer algoritmo de encriptação é o**efeito avalanche**, onde uma pequena alteração na entrada (seja no texto claro ou na chave) produz uma mudança significativa na saída (texto cifrado). Uma alteração de apenas um bit no texto claro ou na chave deve resultar na alteração de muitos bits no texto cifrado. No caso do DES, testes demonstram que após poucas rodadas, cerca de metade dos bits do texto cifrado já são alterados, confirmando que o algoritmo possui um forte efeito avalanche. 

## :LiList: Chave de 56 bits

**Tamanho da Chave de 56 bits**: Com uma chave de 56 bits, existem aproximadamente 7,2×10<sup>16</sup> chaves possíveis. Embora isso representasse um desafio no passado, o avanço tecnológico tornou um ataque de força bruta viável. Supercomputadores atuais podem quebrar uma chave DES em cerca de uma hora, e chaves de 128 bits ou mais são consideradas efetivamente inquebráveis por este método