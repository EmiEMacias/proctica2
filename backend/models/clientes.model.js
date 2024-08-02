import {Schema, model} from 'mongoose'

export const esquema = new Schema({ //modelo
    nombre:{
        type: String
    },
    apellido:{
        type:String
    },
    domicilio:{
        type:String
    },
    credito:{
        type:Number
    }
 })
 

export const ModeloClientes = new model ('Clientes', esquema)