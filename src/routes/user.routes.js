import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import { schemaSignin, schemaSignup, schemaUpdate } from '../schemas/user.schemas.js';
import { infoUser, login, register, updateUser } from '../controllers/user.controllers.js';
import { validateAuth } from '../middlewares/validateAuth.js';

const userRouter = Router();

userRouter.post('/signup', validateSchema(schemaSignup), register);
userRouter.post('/signin', validateSchema(schemaSignin), login);
userRouter.get('/user/info', validateAuth, infoUser);
userRouter.put('/user/info', validateAuth, validateSchema(schemaUpdate), updateUser);

export default userRouter;
