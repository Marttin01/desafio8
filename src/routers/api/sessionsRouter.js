import { Router } from "express";
import { autenticacionJwt, loginUserPass } from "../../middlewares/passport.js";
import { currentController, loginControllerApi, logoutControllerApi } from "../../controllers/api/sessionsController.js";

export const sessionsRouter = Router()

sessionsRouter.post('/login', loginUserPass, loginControllerApi)

sessionsRouter.delete('/logout', logoutControllerApi)

sessionsRouter.get('/current', autenticacionJwt ,currentController)