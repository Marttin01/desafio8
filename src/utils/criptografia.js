import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../server.config/auth.config.js'

export function hashear(palabra) {
    return bcrypt.hashSync(palabra, bcrypt.genSaltSync(10))
}

export function validarIgualdad(recibida, almacenada) {
    return bcrypt.compareSync(recibida, almacenada)
}

export function generarToken (data) {
    return jwt.sign(data, JWT_SECRET, { expiresIn:'1h' })
}

export function decodificarToken (token) {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        throw new Error(`Error de autenticacion: ${error}`)
    }
}