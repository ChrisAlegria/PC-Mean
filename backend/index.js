const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//Coneccion a la BD
mongoose
    //.connect('mongodb://127.0.0.1:27017/empleados')
    .connect('mongodb+srv://christianarti21:12345@cluster0.5zqrtub.mongodb.net/computadoras?retryWrites=true&w=majority&appName=Cluster0')
    .then((x)=>{
        console.log(`Conectado exitosamente a la base de datos ${x.connections[0].name} `)
    })
    .catch((error)=>{
        console.log('Error de conexión: ',error.reason)
    })

    //Configuracion del servidor web
    const computadoraRouter = require('./routes/computadora.routes')
    const app = express()

    app.use(bodyParser.json())
    app.use(
        bodyParser.urlencoded({
            extended: false,
        })
    )

    app.use(cors())
    app.use('/api',computadoraRouter)

    //Habilitar el puerto para las peticiones
    const port = process.env.PORT || 4000
    const server = app.listen(port,()=>{
        console.log('Escuchando en el puerto '+port)
    })

    //Manejador de error 404
    app.use((req,res,next)=>{
        next(createError(404))
    })

    //Manejador de errores

    app.use(function(err,req,res,next){
        console.log(err,message)
        if(!err.statusCode)err.statusCode=500
        res.status(err.statusCode).send(err.message)
    })