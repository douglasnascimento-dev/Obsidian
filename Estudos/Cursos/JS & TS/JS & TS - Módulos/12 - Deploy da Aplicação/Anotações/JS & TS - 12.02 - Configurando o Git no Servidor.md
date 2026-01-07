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
> [!banner-icon] 🌿Chaves SSH
## 🌳Configurando o Git no PC local

01. Abrir a página do projeto e abrir o Git Bash na Pasta
02. Configurar o Usuário e o e-mail
	- Digite | `git config --global user.email "email@email.com"`
	- Digite | `git config --global user.name "usuário"`
03. se caso não existir ainda, Iniciar um repositório do git, 
04. Se caso não houver um .gitignore, criar um. 
05. Se caso não tiver sido realizado, adicionar os arquivos a um commit com ``git add .`
06. Se caso não tiver sido realizado, comitar com `git -am "Iniciado o repositório"`

## 🌳Configurando o Git no Servidor

01. Na pasta repo-agenda criar um repositório com `git int --bare`
02. Na pasta agenda iniciar o repositório com `git int`
03. E adicionar o repositório remoto que está em repo-agenda com o comando `git remote add origin /home/user/repo-agenda
04. No PC local, adicionar o repositório localmente com o comando `git remote add origin ipDoServidor:repo-agenda
05. Enviar os arquivos para o repo-agenda no branch master com `git push origin master
06. Fazer pull apenas no agenda, e após isso fazer o pull dos arquivos com `git pull origin master
07. Fazer commit das alterções com git commit add . e após isso com `git commit -am "MensagemAqui"` e ao fim mandar ao servidor com `git push origin master`