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



### 🌳Tokens

Os tokens irão funcionar como a validação de um usuário. O Usuário utilizará em rotas que é necessário validação/identificação. O Token só pode ser obtido por um usuário com o email e senha correta.

![[JS & TS.png|banner]]
> [!banner-icon] 🌿Tokens
### 🌿Controllers

```javascript
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

import { HTTP_STATUS } from '../constants/constants.js';

import User from '../models/User.js';

dotenv.config();

class Token {
  async store(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ errors: 'O Email e a senha são necessários' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({ errors: 'Usuário não encontrado' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({ errors: 'Senha inválida' });
    }

    const token = sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

   return res.json({token});
  }
}

export default new Token ();
```

O Arquivo de controller será o pai de todo o sistema de validação dos tokens. O Sistema será baseado no pacote npm json web token . Ele possui um único metódo, o store, para a criação de tokens. É verificado se o email e senha foram enviado, se não, é retornado um erro. Após isso, é verificado se existe usuário com o email, caso não, é retornado um erro. É verificado também a senha, se incorreta, é retornado um erro. Após é criado um token com o jsonwebtoken e retornado para o usuário. 

### 🌿Rota

```javascript
import { Router } from 'express';
import tokenController from '../controllers/Token.js';

const router = new Router();

router.post('/', tokenController.store);

export default router;
```

Será criado uma rota única para a criação de tokens. 