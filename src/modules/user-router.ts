import { Router } from "express";
import { userController } from "./user-controller.js";

const router = Router()
const controller = new userController()

router.get('/', controller.getUsers)
router.post('/login', controller.login)
router.post('/logup', controller.logup)

export {router}