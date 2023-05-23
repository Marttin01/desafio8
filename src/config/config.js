import dotenv from 'dotenv'
import { definedProgram } from './program/program.js'

const environment = definedProgram.opts().mode
console.log(definedProgram.opts())

dotenv.config({
    path:environment ==='desarrollo'?'./src/config/env/.env.desarrollo':'./src/config/env/.env.produccion'
})
console.log(process.env.PORT)

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
}