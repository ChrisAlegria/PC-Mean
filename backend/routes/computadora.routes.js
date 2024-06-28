const express=require('express')
const computadoraRouter=express.Router()

//declaramos un objeto de nuestro modelo 
let computadora=require('../models/computadora')

//Agregar computadoras
computadoraRouter.route('/agregar').post((req,res)=>{
    computadora.create(req.body)
    .then((data)=>{
        console.log('Se inserto la computadora correctamente')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtenemos todas las computadoras
computadoraRouter.route('/computadoras').get((req,res)=>{
    computadora.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtenemos una sola computadora por su ID
computadoraRouter.route('/computadora/:id').get((req,res)=>{
    computadora.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//actualizar la computadoras
computadoraRouter.route('/actualizar/:id').put((req,res)=>{
    computadora.findByIdAndUpdate(req.params.id,{
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

//eliminar computadoras
computadoraRouter.route('/delete/:id').delete((req,res)=>{
    computadora.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log('Se elimino correctamente la computadora')
        res.send(data)
    })
    .catch((error)=>{
    console.error(error)
    })
})  

module.exports=computadoraRouter;