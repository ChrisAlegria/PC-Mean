const mongoose=require('mongoose')
const Schema=mongoose.Schema

let Computadora=new Schema({
    modelo:{
        type:String
    },
    marca:{
        type:String
    },
    grafica:{
        type:String
    },
    ram:{
        type:Number
    },
    procesador:{
        type:String
    }
},{
    collection:'computadoras'
})

module.exports=mongoose.model('Computadora',Computadora)