export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
empleados.create({
    nombre:'Juan',
    apellido:"Perez",
    domicilio:"loma bonita",
    ID:"co1234",
    puesto:"cajero"
})
.then((mvc)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()