import passport from "passport"
import { Strategy } from "passport-local"
import { Strategy as JwtStrategy } from "passport-jwt"
import { UserManager } from "../dao/managers/userManager.js"
import { validarIgualdad } from "../utils/criptografia.js"
import { cookieExtractor } from "../utils/cookieExtractor.js"
import { JWT_SECRET } from "../server.config/auth.config.js"


passport.use('local', new Strategy({ usernameField:'email' }, async (email,password,done) => {
    try {
        const user = await UserManager.getUsersByEmail(email)
        if(!user){
            return done(null, false, {message: 'Email no registrado'})
        }

        if(validarIgualdad(password, user.password) === false){
            return done(null, false, {message: 'Contraseña incorrecta'})
        }

        return done(null, user)
    } catch (error) {
        return done(error)
    }
}))

passport.use('jwt', new JwtStrategy({ jwtFromRequest:cookieExtractor, secretOrKey:JWT_SECRET }, (jwt_payload,done) => {
    try {
        done(null,jwt_payload)
    } catch (error) {
        done(error)
    }
}))

export const loginUserPass = passport.authenticate('local', {failWithError:true, session:false})

export function autenticacionJwt(req,res,next){
    passport.authenticate('jwt', (error,jwt_payload) => {
        if(error) throw new Error(`${error}`)
        if(!jwt_payload) throw new Error('JWT payload is null')
        req.user = jwt_payload
        next()
    })(req,res,next)
}