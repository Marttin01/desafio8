import { Router } from "express";
import { rolAuth } from "../../middlewares/rolAuth.js";
import { usersRegisterController } from "../../controllers/api/usersController.js";

export const usersRouter = Router()

usersRouter.post('/register', rolAuth, usersRegisterController)
