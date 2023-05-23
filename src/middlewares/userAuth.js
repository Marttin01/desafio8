export function usersAuth (req,res,next) {
    if(req.credentials.rol === 'admin'){
        next()
    }else {
        res.redirect('/profile')
    }
} 