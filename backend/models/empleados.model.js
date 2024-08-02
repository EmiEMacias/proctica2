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
    ID:{
        type:String
    },
    puesto:{
        type:String
    }
 })
 

export const ModeloEmpleados = new model ('Empleados', esquema)