import cookieParser from 'cookie-parser'
import express from 'express'
import { COOKIE_SECRET } from './server.config/auth.config.js'
import passport from 'passport'
import { apiRouter } from './routers/api/apiRouter.js'
import { webRouter } from './routers/web/webRouter.js'
import { engine } from 'express-handlebars'
import { extraerCredenciales } from './middlewares/auth.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(express.static("./public"))

app.use(cookieParser(COOKIE_SECRET))
app.use(extraerCredenciales) 
app.use(passport.initialize())

app.use('/api', apiRouter)
app.use('/', webRouter)


app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')