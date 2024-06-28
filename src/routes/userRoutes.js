import { Router } from 'express';
import userController from '../controllers/UserController'

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Em um sistema real, essas requisições não deveriam existir por motivos de segurança.
//Foram criadas só para esse projeto ser um crud completo
router.get('/', loginRequired, userController.index);
// router.get('/', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;