export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
productos.create({
    nombre:'Gary',
    tipo:"gelatina",
    departamento:"alimenotos",
    precio:"$15"
})
.then((mvc)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()