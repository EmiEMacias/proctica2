export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
clientes.create({
    nombre:'Emily',
    apellido:"Macias",
    domicilio:"loma bonita",
    credito:"300"
})
.then((mvc)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()