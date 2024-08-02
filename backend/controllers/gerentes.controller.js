export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
gerentes.create({
    nombre:'Penelope',
    apellido:"Juarez",
    domicilio:"zona centro",
    ID:"co13468",
    puesto:"Gerente"
})
.then((mvc)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()