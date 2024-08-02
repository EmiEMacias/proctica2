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
    },
    descuento:{
        type:Number
    }
 })
 

export const ModeloClientes = new model ('Clientes', esquema)