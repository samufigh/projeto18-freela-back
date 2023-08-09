import { Router } from "express"
import userRouter from "./user.routes.js"
import modelRouter from "./models.routes.js"

const router = Router()

router.use(userRouter)
router.use(modelRouter)


export default router