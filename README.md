# desafio8
El servidor se inicia en src/server/server.js donde esta el listen
Estan separados los controllers y los routers en diferentes carpetas ./src/routers y ./src/controllers
Hice un manager el cual guarda a los usuarios en la base de datos de mongo y otras funciones como obtener al usuario por id o por email
tengo 4 middlwares; el de ./auth tiene la funcion principal de extraer las credenciales del usuario en cada request que haga y otras 2 que son mas que nada de autorizacion
El unico model que tengo hecho es el de users
En la ruta ./routers/api tengo el de sessions ( el cual contiene el login con passport y el current con passport tambien y el logout de cada "session" o mejor dicho la eliminacion del cookie con el token de cada usuario)
El webRouter  con las diferentes vistas, profile, login, users y register
En los utils tengo lo que es el cookieExtractor utilizado en passport y la el archivo criptografia el cual contiene todo lo referido a bcrypt y a jwt
El ./src/app.js donde estan todos los middlewares del servidor y handlebars
Cree un middleware que a la hora de que registre una persona dependiendo la terminacion de su mail tenga rol:user o rol:admin, en la vista de profile si es admin tiene el acceso a la vista de todos los usuarios registrados y si es user ese acceso tanto en el profile como en la ruta no lo tiene.
Agregue una carpeta ./config la cual tiene la carpeta ./env adentro la cual contiene los distintos enviroments
Agregue dentro de ./config la carpeta ./program que contiene las opciones del programa y por ultimo dentro de ./config el archivo config.js donde se ejecutan las configs
A diferencia del desafio anterior separe un poco mas las carpetas con las diferentes responsabilidades.
