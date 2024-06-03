import { Router } from "express"
import { addUser } from "../controllers/UserController.js"

const router = Router()

router.post('/users', addUser)

export default router