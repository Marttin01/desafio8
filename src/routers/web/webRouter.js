import { Router } from "express";
import { usersAuth } from "../../middlewares/userAuth.js";
import { loginController, profileController, registerController, usersController } from "../../controllers/web/webController.js";

export const webRouter = Router()

webRouter.get('/users', usersAuth, usersController)

webRouter.get('/register', registerController)

webRouter.get('/login', loginController)

webRouter.get('/profile', profileController)