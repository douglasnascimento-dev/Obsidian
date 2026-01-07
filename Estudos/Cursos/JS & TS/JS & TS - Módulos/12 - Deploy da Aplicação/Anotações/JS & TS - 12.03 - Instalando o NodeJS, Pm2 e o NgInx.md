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


![[JS & TS.png|banner]]
> [!banner-icon] 🌿Chaves SSH
## 🌳Instalando o NodeJS e o Pm2

01. Digitar os seguintes comandos:

```bash
sudo apt install curl -y
curl -sL https:\\deb.nodesource.com/setup.VERSÃO.x | sudo bash -
sudo apt install nodejs -y
```

02. Instalar os módulos com o `npm i`
03. Instalar o pacote pm2 do node com `sudo npm i -g pm2`
04. Criar um processo no pm2 com `pm2 start /home/dougl/agenda/serve.js --name Agenda`
05. Para listar os processos com `pm2 ls`
06. Iniciar com o processo com `pm2 start Agenda`
07. Permitir o reinício automático com o `pm2 startup`
08. Ele exibirá um comando, copie e cole, e então execute ele
09. Usar o comando `curl:http:\\localhost:3000` para acessar o projeto

## 🌳Instalando o Nginx

01. Instalar o Nginx com `sudo apt install nginx`
02. Copiar o arquivo de configuração do nginx
03. Ir até `/etc/nginx/sites-enabled`
04. Criar um arquivo com o nome do dominio, e colar as configurações lá
05. O Comando `nginx -t` verifica a funcionalidade

### 🌿Validando com uma Certificação

01. Digitar os seguinte comando;

```bash
sudo openssl dhpram -out /etc/ssl/certs/dhparam.pem 2048
sudo apt-get install certbot
sudo service nginx certbot
sudo certbot certonly --standalone -d curso.otavio.miranda.com.br
sudo service nginx start
```


