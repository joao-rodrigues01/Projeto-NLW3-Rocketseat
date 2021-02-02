import { Router } from 'express';
import multer from 'multer';


import authMiddleware from './middlewares/authMiddlewares';

import uploadConfig from './config/upload';
import AuthController from './controllers/AuthController';
import OrphanagesController from './controllers/OrphanagesController';
import UserController from './controllers/UsersController';

const routes = Router();
const upload = multer(uploadConfig);

//MVC
// Model
// Views
//Controllers

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages',upload.array('images') , OrphanagesController.create);

routes.post('/users', UserController.createUser);
routes.post('/auth', AuthController.authenticate);
routes.get('/users', authMiddleware, UserController.index);




export default routes;