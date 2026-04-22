---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
Anotações: []
Nota Final: "0.0"
Avaliações: []
---

> [!banner-icon] :LiBookMarked: Aula 18.03.2026


## 🌿 Gestão de Configuração de Software 

É um conjunto de práticas que tem como objetivo controlar, organizar e rastrear todas as mudanças realizadas nos artefatos de um sistema ao longo de tempo. É o processo que garante que sabemos exatamente o que foi alterado, quando, por quem e por quê.

## 🌿Processo de GC

1. Itens de Configuração
	1. Quais itens serão Controlados;
	2. Como serão Organizados; e
	3. Convenções de Nomenclatura.
	
2. Controle de Configuração
	1. Gerencia as Mudanças nos Itens;
	2. Solicitação de Mudança;
	3. Avaliação de Impacto; e
	4. Implementação.
	
3. Controle de Versão
	1. Responsável por Armazenar o Histórico de Alterações
	2. Em ferramentas como: Git, SVN, Mercurial, etc..
	
4. Auditoria de Configuração
	1. O Sistema está consistente?
	2. As Mudanças foram aplicadas corretamente?
	3. Não há divergências entre a Documentação e Código?
	4. Pode ser Funcional ou Física.
	
5. Status de Configuração
	1. Se registra e acompanha o Estado atual dos itens, o Histórico de Mudanças e as Versões Disponíveis.

## 🌿Gestão de Processo

Compreende o contexto organizacional e as relações entre os elementos organizacionais. Define as Restrições do Sistema de GC. Realiza o Planejamento das Responsabilidades, Cronogramas, Recursos e Ferramentas e Elabora um Plano de Gestão de Processo. 

## 🌿Identificação de Configuração

Tem como Missão: Identificar os Itens de Configuração, Identificar a Relação entre os Itens de Configuração, Montar a biblioteca do Software (com os recursos utilizados) e devem possuir Versão (de modo semântico), baselines, bibliotecas, etc...

## 🌿Controle de Configuração

Desenvolve processos para: 
- Requisição de Mudança;
- Avaliação de Mudança;
- Aprovação de Mudança;
- Desvios no Projeto;
- Gerenciamento de Branches; e
- Renúncias.

## 🌿Contabilidade de Status de Configuração

Informa o Status de Configuração de Software e o Relatório de Status.

## 🌿Auditoria de Configuração

Busca a Consistência do Software, inclusive das Documentações. Pode ser *in-process* ou em uma Baseline.

## 🌿Lançamento e Entrega

Responsável pelo Release e o Delivery, assim como pelas Buildings e o Gerenciamento de Entrega. 

## 🌿Itens de Configuração 

São todos os elementos que precisam ser controlados, como Códigos, Documentação, Diagramas, Scripts de BD, Arquivos de Configuração e Builds e Executáveis. Ou seja, se algo impacta no sistema, ele deve ser versionado. 

## 🌿Características de Baseline

É o alicerce do Software, já que toda evolução do software é implantado sobre ele. E pode incorporar: Bibliotecas de Software, Frameworks e Middlewares. 

A Baseline precisa ser estável. Mas:
- Nem sempre é possível estabilizar totalmente a baseline para um mesmo produto de software; 
- Novos requisitos arquitetônicos são frequentes, atualmente; e
- Se todo requisito arquitetônico ingressa na baseline, criamos um 'Frankenstein'.

A Baseline é um padrão básico para trabalhos subsequentes. Para um produto que foi revisado e aceito. Como um Conjunto Completo que serve como Base para a Continuação do Projeto, assim como para a Criação de Novos Projetos. O Controle das Versões da Baseline deve ser formal.

## 🌿Semântica de Versionamento

Definir como serão os Incrementos das Versões de Software. Delineadas de acordo com as Entregas Internas/Externas. Podem ser definidas pela Organização e pode ser associada a Rótulos com Informações Adicionais. 

