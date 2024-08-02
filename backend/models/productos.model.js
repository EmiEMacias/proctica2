import {Schema, model} from 'mongoose'

export const esquema = new Schema({ //modelo
    nombre:{
        type: String
    },
    tipo:{
        type:String
    },
    departamento:{
        type:String
    },
    precio:{
        type:Number
    }
 })
 

export const ModeloProductos = new model ('Productos', esquema)