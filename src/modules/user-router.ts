import { Router } from "express";
import { userController } from "./user-controller.js";

const router = Router()
const controller = new userController()

router.get('/', controller.getUsers)

export {router}