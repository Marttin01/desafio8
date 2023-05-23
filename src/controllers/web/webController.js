import { UserManager } from "../../dao/managers/userManager.js";

export async function usersController (req,res,next){

    const users = await UserManager.getUsers()

    res.render('users', {
        pageTitle:'Users',
        hayUsers: users.length > 0,
        users
    })
}

export  function registerController (req,res,next){
    res.render('register', {
        pageTitle:'Register'
    })
}

export function loginController (req,res,next) {
    res.render('login', {
        pageTitle: 'Login'
    })
}

export function profileController (req,res,next){

    const user = req.credentials

    res.render('profile', {
        pageTitle: 'Perfil',
        welcome: `Bienvenido a tu perfil ${user.first_name} `,
        name:user.first_name,
        lastName:user.last_name,
        email:user.email,
        age:user.age,
        rol:`Su rol es: ${user.rol}`,
        ifAdmin: user.rol === 'admin' 
    })
}
