import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import fotoController from '../controllers/FotoController'

const router = new Router();

//o parametro do single tem que estar de acordo com o insomnia
router.post('/', loginRequired, fotoController.store);

export default router;