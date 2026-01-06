---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
---


![[JSTS.png|banner]]
> [!banner-icon] 🌿Chaves SSH
## 🌳Criando um Servidor na Google Cloud Platform

01. Criar uma VM. 
	- Selecionar uma região, 
	- Selecionar uma máquina a ser utilizado,
	- Selecionar um SO, no caso o Ubuntu
	- Selecionar a permissão de tráfego nas portas HTTP e HTTPS
02. Definir um IP estático para a VM

## 🌳Criando chaves SSH pelo Windows

01. Abrir o Git Bash em qualquer local 
02. Digitar | `ssh-keygen`
	- Ele irá confirmar o nome
	- Ele irá confirma uma senha, espaço não é definido uma senha
03. Digitar | `eval $[ssh-agent) -s`
	- Se for exibido o pid do processo, está conforme o esperado
04. Digite | `SSH add ~/.ssh/nomeDaChave
	- Esse comando irá adicionar a identidade a essa chave SSH
05. Abrir a pasta onde está a chave SSH e copiar o conteúdo referente ao arquivo público dela (.pub)
06. Adicionar a chave SSH aos metadados da VM no GCP

### 🌿Acessando o GCP com chaves SSH

01. Copiar o IP externo do servidor no GCP
02. Digite | ``ssh UsuarioOpcional@IPDoServidor`
	- O Envio do Usuário é opcional
03. Ele irá perguntar se eu confio no servidor, *yes* para confirmas
04. A Partir desse momento, você já estará dentro dos servidores do Google. 
05. Digite | `sudo apt update` e `sudo apt upgrade`
	- Esse comando verificará se existe pacotes desatualizados, se sim, ele atualizará. 