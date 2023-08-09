import { Router } from "express"
import { validateAuth } from "../middlewares/validateAuth.js"
import { infoModel, postModel, showModels, showMyModels } from "../controllers/model.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaModel } from "../schemas/model.schemas.js"

const modelRouter = Router()

//cria um modelo
modelRouter.post("/model", validateAuth, validateSchema(schemaModel), postModel)
//mostra todos os modelos
modelRouter.get("/models", validateAuth, showModels)
//mostra os modelos do usuario logado
modelRouter.get("/models/me", validateAuth, showMyModels)
//mostra o modelo selecionado
modelRouter.get("/models/:id", validateAuth, infoModel)

export default modelRouter