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
> [!banner-icon] 🌿File System

## 🌳 Manipulando Arquivos com FS no Node.js

O Node.js fornece o módulo 'fs' (_File System_) para manipulação de arquivos e diretórios. Para utilizar promessas em operações assíncronas, usamos 'fs.promises'. Além disso, o módulo 'path' ajuda a manipular caminhos de arquivos e diretórios.

### 🌿 Lendo Diretórios Recursivamente
--- start-multi-column: ID_fs1

```column-settings
Number of Columns: 2
Largest Column: standard
```

Podemos listar arquivos de um diretório e seus subdiretórios recursivamente utilizando 'fs.readdir()', que lê pastas, e 'fs.stat()', que retorna estatística sobre determinado diretório/arquivo. O Método 'isDirectory()' retorna true/false para o teste se determinado caminho resulta ou não em uma pasta. No exemplo abaixo, listamos apenas arquivos '.json' ignorando o diretório '.git'. Podemos utilizar o 'path' como suporte para organizar os caminhos dos arquivos

--- column-break ---

```javascript
const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir = path.resolve(__dirname)) {
  let files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (const file of files) {
    const fullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fullPath);

    if (/\.git/g.test(fullPath)) continue;
    if (stats.isDirectory()) {
      readdir(fullPath);
      continue;
    }
    if (!/\.json/g.test(fullPath)) continue;

    console.log(file);
  }
}

readdir("../");
```

--- end-multi-column

