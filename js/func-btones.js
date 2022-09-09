//----------------CONEXION CON EL HTML----------------------
//debugger
const titulo = document.querySelector("#titulo")
const titulo2 = document.querySelector("#titulo2")
const cards = document.getElementById("cards")
const ingresoDatos = document.querySelector(".ingresoDatos")
const camposInput = document.querySelectorAll(".form")
//--------------------------------------------------------------

//me conecto con los botones con querySelector mediante el id
const botonMostrarTodo = document.querySelector("#mostrarTodo")
const botonComprar = document.querySelector("#comprar")
const botonAlquilar = document.querySelector("#alquilar")

const botonSubirPublicacion = document.querySelector("#subirPublicacion")
const botonQuitarPublicacion = document.querySelector("#quitarPublicacion")
const btnReserva = document.queryCommandValue("#reserva")
//---------------------------------------------------------------

//me conecto con los input de ingreso de datos
const id = document.querySelector("#id")
const m2 = document.querySelector("#m2")
const ambientes = document.querySelector("#ambientes")
const precio = document.querySelector("#precio")
const para = document.querySelector("#para")
const estado = document.querySelector("#estado")




const btncargar = document.querySelector("#cargar")
const btnquitar = document.querySelector("#quitar")


//-----------------------FUNCIONES BOTONES---------------------------------

botonMostrarTodo.addEventListener("click", mostrarTodo)
botonComprar.addEventListener("click", mostrarComprar)
botonAlquilar.addEventListener("click", mostrarAlquilar)
botonSubirPublicacion.addEventListener("click", subirPublicacion)
botonQuitarPublicacion.addEventListener("click", quitarPublicacion)
btncargar.addEventListener("click", cargar)
btnquitar.addEventListener("click", quitar)


