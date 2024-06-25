const express=require('express')
const empleadoRouter=express.Router()

//declaramos un objeto de nuestro modelo 
let empleado=require('../models/empleado')

//Agregar empleados nuevos
empleadoRouter.route('/agregar').post((req,res)=>{
    empleado.create(req.body)
    .then((data)=>{
        console.log('Se inserto un empleado')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtenemos todos los empleados
empleadoRouter.route('/empleados').get((req,res)=>{
    empleado.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtenemos un solo empleado por su ID
empleadoRouter.route('/empleado/:id').get((req,res)=>{
    empleado.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//actualizar a los empleados
empleadoRouter.route('/actualizar/:id').put((req,res)=>{
    empleado.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    .then((data)=>{
        console.log('Se actualizo correctamente el empleado')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//eliminar empleados
empleadoRouter.route('/delete/:id').delete((req,res)=>{
    empleado.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log('Se elimino correctamente al empleado')
        res.send(data)
    })
    .catch((error)=>{
    console.error(error)
    })
})  

module.exports=empleadoRouter;