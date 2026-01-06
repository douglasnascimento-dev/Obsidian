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
> [!banner-icon] 🌿Ler e escrever Arqvs.
## 🌳Utilizando o fyleSystem para Ler e Escrever Arquivos

Além de listar arquivos, também é possível ler e escrever arquivos utilizando o módulo do NPM 'FileSystem', para a realização desses atos, vários formatos de arquivos são suportados

### 🌿Ler Arquivos
--- start-multi-column: ID_u3ft
```column-settings
Number of Columns: 2
Largest Column: standard
```

Antes de iniciar os procedimentos para a leitura do Arquivos é necessário, iniciar o módulo 'fs', de preferência, utilizando o método assíncrono com promisses. Após isso é só chama o método 'readFile' do módulo 'fs' e passar como parâmetros, o caminho do arquivo e padrão de símbolos a ser utilizado. 

--- column-break ---

```javascript
const fs = require("fs").promises;

module.exports = (caminho, dados) => {
    return fs.readFile(caminho, 'utf8');
}
```

--- end-multi-column
#### 🌱Exemplo de Leitura de um Arquivo .JSON

```javascript
async function lerArq(caminho) {
  let leitura = await ler(caminho);
  leitura = JSON.parse(leitura)
  leitura.forEach(val => console.log(val.nome));
}
```

Observe a seguinte estrutura, é utilizada uma função assíncrona, é chama com 'await' a função que retornará o arquivo, após isso ele é transferido de .JSON  para .JS e somente assim, é feita sua impressão

### 🌿Escrevendo Arquivos
--- start-multi-column: ID_ql3m
```column-settings
Number of Columns: 2
Largest Column: standard
```

Assim como na leitura é necessário declarar o módulo 'fs', após isso, é necessário chamar o método 'writeFile', e passar como parâmetros, o caminho do arquivo que deve ser lido, o que deve ser inserido no arquivo e um objeto de configuração, entre as as configurações tá uma flag que pode ser **a** (adicionar ao arquivo, mantém o que já existe) e a flag **w** (remove o que já existe no arquivo e sobrescreve o novo conteúdo).

--- column-break ---

```javascript
const fs = require("fs").promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: "w"})
}
```

--- end-multi-column










