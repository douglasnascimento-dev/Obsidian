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
### 🌿Organização de Arquivos

- **config**
	- database.js
- **controllers**
	- User.js
- **database**
	- **migrations**
		- dataDeInicialização-user.js
	- **seeders**
	- index.js
- **middlewares**
- **models**
	- User.js
- **routes**
	- user.js

	No **config** ficará os arquivos de configuração. Os **controllers** são responsáveis por conter as funções que serão executadas em cada rota. Em **database** ficará o arquivo responsável por conter os detalhes dos banco de dados, na pasta migrations, estará as migrações, as alterações do banco de dados e o index.js é o responsável por juntar todas as tabelas em único lugar. A Pasta **middlewares** recebem os middlewares. Os **models**, são os moldes para a representação de um objeto na base de dados. Por último, o **routes**, é o responsável pelas rotas daquele objeto, por fazer a relação das urls com os controllers. 

### 🌿01. Criando a migration

```node
npx sequelize migration:create --name=users
```

Isso irá criar um arquivo para a tabela na pasta migrations em database.

### 🌿02. Alterando a migration

```javascript
/* eslint-disable no-undef */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
```

Nesse arquivo deverá ser configurado o arquivo que inicializará a tabela, nele deve ser descrito os atributos que vão compor a tabela, seus respectivos tipos, se são pK, se é permitido valores nulos, ou únicos. Basicamente, são configurações relacionadas ao SQL.  

### 🌿03. Enviando a Tabela para ao Banco de Dados

```node
npx sequelize db:migrate
```

Esse comando irá pegar as migrações e irá envia-las ao banco de dados

### 🌿04. Configurando um modelo

Após isso, é possível construir o modelo de dados que será utilizado no banco de dados.

````javascript
import Sequelize, { Model } from 'sequelize';
import { hash } from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [MIN_NAME_LENGTH, MAX_NAME_LENGTH],
              msg: 'O nome deve ter entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Já existe um usuário cadastrado com este email.',
          },
          validate: {
            isEmail: {
              msg: 'O email informado é inválido.',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.VIRTUAL,
          allowNull: true,
          defaultValue: '',
          validate: {
            len: {
              args: [MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH],
              msg: 'A senha deve ter entre 6 e 50 caracteres.',
           },
          },
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await hash(user.password, SALT_ROUNDS);
      }
    });
  
    return this;
  }
}
````

Observe que assim como a migration, esse arquivo descreve a tabela mas também outros detalhes. Nesse arquivo a senha será recebida no campo password, mas o addHook, em português gancho, irá na hora de salvar aplicar o hash no campo e atribuir esse hash ao campo password_hash. Além disso, aqui também é aplicado regras de negócio, como validação de email e tamanho de senha. Também são especificado erros para essas regras.

### 🌿05. Configurando o Controller

```javascript
import User from '../models/User.js';

class UserController {
  async store(req, res) {
    let novoUser;
    try {
        novoUser = await User.create(req.body);
    } catch (error) {

      // eslint-disable-next-line no-magic-numbers
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }

    return res.json(novoUser);
  }

  async index(req, res){
    let users;
    try {
        users = await User.findAll({
        attributes: ['id', 'name', 'email'],
      });
	  
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return res.json( null);
    }

    return res.json(users);
  }
  
  async show(req, res){
    const { id } = req.params;
    let user;

    try {
      user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email'],
      });

    // eslint-disable-next-line no-unused-vars
    } catch (error) {

      return res.json(null);
    }
  
    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    let user;
  
    if(!id){
      // eslint-disable-next-line no-magic-numbers
      return res.status(400).json({ errors: ['ID do usuário não informado.'] });
    }

    try {
      user = await User.findByPk(id , {
        attributes: ['id', 'name', 'email'],
      });

      if (!user) {
        // eslint-disable-next-line no-magic-numbers
        return res.status(404).json({ errors: ['Usuário não encontrado.'] });
      }

      await user.update(req.body);
    } catch (error) {
      return res.json({ errors: error.errors.map((err) => err.message) });
    }

    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;
    let user;

    if(!id){
      // eslint-disable-next-line no-magic-numbers
      return res.status(400).json({ errors: ['ID do usuário não informado.'] });
    }	

    try {
      user = await User.findByPk(id , {
        attributes: ['id', 'name', 'email'],
      });
 
      if (!user) {
        // eslint-disable-next-line no-magic-numbers
        return res.status(404).json({ errors: ['Usuário não encontrado.'] });
      }

      await user.destroy();
    } catch (error) {
      return res.json({ errors: error.errors.map((err) => err.message) });
    }

    // eslint-disable-next-line no-magic-numbers
    return res.status(200).json({ id: user.id });
  }
}

export default new UserController();
```

Aqui nesse arquivo será configurando as funções efetivas para o objeto. Normalmente isso englobara as seguintes, contendo no máximo 5 métodos:
- index: lista todos os registros - GET
- create/store: cria um novo registro - POST
- delete: deleta um registro - DELETE
- show: exibe um registro específico - GET
- update: atualiza um registro específico - PATCH ou PUT

### 🌿06. Definindo a Rota

```javascript
import { Router } from 'express';
import userController from '../controllers/User.js';

const router = new Router();
  
router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
```

Esse arquivo conterá apenas o Router que receberá as possíveis rotas. 

### 🌿07. Configurando o App.js

O App.js pode ser o arquivo principal do sistema, por isso é necessário que ele também esteja configurado. 

```javascript
import express from 'express';

import homeRoutes from './src/routes/home.js';
import userRoutes from './src/routes/user.js';
import dotenv from 'dotenv';
import './src/database/index.js';

dotenv.config();
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
```

O App irá configurar as principais partes do sistema, importando elas em um único arquivo