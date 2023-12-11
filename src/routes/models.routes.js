import { Router } from 'express';
import { validateAuth } from '../middlewares/validateAuth.js';
import { infoModel, postModel, setAvailable, showModels, showMyModels } from '../controllers/model.controllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { schemaModel } from '../schemas/model.schemas.js';

const modelRouter = Router();

modelRouter.post('/model', validateAuth, validateSchema(schemaModel), postModel);
modelRouter.get('/models', showModels);
modelRouter.get('/models/me', validateAuth, showMyModels);
modelRouter.get('/models/:id', infoModel);
modelRouter.put('/models/:id', validateAuth, setAvailable);

export default modelRouter;
