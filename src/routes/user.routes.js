import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaSignin, schemaSignup } from "../schemas/user.schemas.js"
import { infoUser, login, register, updateUser } from "../controllers/user.controllers.js"
import { validateAuth } from "../middlewares/validateAuth.js"

const userRouter = Router()

//faz o cadastro
userRouter.post("/signup",validateSchema(schemaSignup), register)
//faz o login
userRouter.post("/signin", validateSchema(schemaSignin), login)
//exibe as informações do usuário
userRouter.get("/user/info", validateAuth, infoUser)
//atualiza informações do usuário
userRouter.put("/user/info", validateAuth, updateUser)

export default userRouter