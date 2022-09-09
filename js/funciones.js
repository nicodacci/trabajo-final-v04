function mostrarTodo(){

    titulo.innerHTML = "Casas disponibles"
    
    cards.innerHTML = `<section></section>` 
    
    casas.forEach(casa => { 
        cards.innerHTML += `<div  class="card estilo-a">
                                <div class="img-container">
                                     <img src="${casa.imagen}" alt="">
                                </div>
                                <p>id: ${casa.id}</p>
                                <p>Metros cuadrados: ${casa.m2}</p>
                                <p>Ambientes: ${casa.ambientes}</p>
                                <p>Precio:u$ ${casa.precio}</p>
                                <p>Para: ${casa.para}</p>
                                <p id="estado" >Estado: ${casa.estado}</p>
                                <button id="btnReserva${casa.id}">RESERVAR</button>
                            </div>`
    })
    
}  

function mostrarComprar(){

    titulo.innerHTML = "Casas para COMPRAR"
    cards.innerHTML = `<section></section>`
    
    casas.forEach(casa => {
        if (casa.para === 'COMPRAR' ){
        cards.innerHTML += `<div  class="card estilo-a">
                                <div class="img-container">
                                    <img src="${casa.imagen}" alt="">
                                </div>
                                <p>id: ${casa.id}</p>
                                <p>Metros cuadrados: ${casa.m2}</p>
                                <p>Ambientes: ${casa.ambientes}</p>
                                <p>Precio:u$ ${casa.precio}</p>
                                <p>Para: ${casa.para}</p>
                                <p id="estado" >Estado: ${casa.estado}</p>
                                <button id="btnReserva${casa.id}">RESERVAR</button>
                            </div>`
        }
    })
    
}

function mostrarAlquilar(){

    titulo.innerHTML = "Casas para ALQUILAR"
    
    cards.innerHTML = `<section></section>`

    casas.forEach(casa => {
        if (casa.para === 'ALQUILAR' ){
        cards.innerHTML += `<div  class="card estilo-a">
                                <div class="img-container">
                                    <img src="${casa.imagen}" alt="">
                                </div>
                                <p>id: ${casa.id}</p>
                                <p>Metros cuadrados: ${casa.m2}</p>
                                <p>Ambientes: ${casa.ambientes}</p>
                                <p>Precio:u$ ${casa.precio}</p>
                                <p>Para: ${casa.para}</p>
                                <p id="estado" >Estado: ${casa.estado}</p>
                                <button id="btnReserva${casa.id}">RESERVAR</button>
                            </div>`
        }
    })
    
}

//funcion para habilitar y setear la subida de informacion
function subirPublicacion(){
    
    camposInput.forEach(campo =>{
        campo.addEventListener("focus", ()=>{campo.className = "fondo-verde"})
        campo.addEventListener("blur", ()=>{campo.className = ""})   
    })

    id.value = generaId()   
    m2.focus()              
}

const formularioCompleto = ()=>{
    return (m2.value > 0 && ambientes.value > 0 && precio.value > 0 && para.value !== "") ? true : false
}

function cargar(){
    
    if( formularioCompleto() === true ){

        cards.innerHTML = loading()

        setTimeout(() => {
        
            casas.push(new Casa("", id.value, m2.value, ambientes.value, precio.value, para.value))

            toastSwal("Su publicación se subió con éxito", "info", "linear-gradient(#391E46, #84BE68)")
    
            id.value = ""       
            m2.value = ""           
            ambientes.value = "" 
            precio.value = ""
            para.value = ""
    
            subirLS()
            
            mostrarTodo()
        }, 1500);
    
    } else{                             
        m2.value === "" && m2.focus()   
        ambientes.value === "" && ambientes.focus() 
        precio.value === "" && precio.focus()
        para.value === "" && para.focus()

        toastSwal("Completa todos los valores solicitados.", "warning", "linear-gradient(#391E46, #A62434)")
        } 
}

function quitarPublicacion(){

    mostrarTodo()
    titulo2.innerHTML = "Ingrese el id de la publicación a quitar"
    id.value = ""
    id.className = "fondo-verde"
    id.focus()

}

function quitar(){

    let idIngresado = id.value
    
    cards.innerHTML = loading()

    setTimeout(() => {
        casas.forEach(casa => {     

            let indice = casas.indexOf(casa)    
    
            if (casa.id == idIngresado){
    
                casas.splice(indice,1)   
    
                toastSwal("La publicacion se quitó con éxito", "info", "linear-gradient(#391E46, #84BE68)")
            }
            })
    
            subirLS()
        
        mostrarTodo()   
        
    }, 1500);
}

const cargarContenido = async ()=>{
    let casasBBDD
   await fetch('js/propiedades.json') //await es para q js espere la resp
    .then((response) => response.json())
    .then((data) => {
        casasBBDD = data

        casasBBDD.forEach(casaBBDD =>{ //mantengo el array principal casas
            casas.push(casaBBDD)        //como const x eso lo pusheo
        })
        subirLS()   //subo a localStorage lo q estaba en la bbdd para poder modificarla
        mostrarTodo()
    })
    .catch((error) => toastSwal("Ha ocurrido un error", "warning", "linear-gradient(#391E46, #A62434)"))
}

cargarContenido()

const subirLS = ()=>localStorage.setItem("casas", JSON.stringify(casas))

const toastSwal = (mensaje, icono, bgcolor) => {
    Swal.fire({ 
        text: mensaje,
        toast: false,
        icon: icono,
        showConfirmButton: false,
        timer: 1500,
        background: bgcolor,
        color:"white"
      })
}

const loading = ()=>{
    return'<img id="gif-loading" src="images/loading-loading-forever.gif">'
}

/*
const reservarPropiedad = () =>{
    
    casas.forEach(casa=>{
        document
            .querySelector(`#btnReserva${casa.id}`)
            .addEventListener("click", ()=>{ 
                console.log(casa.id)
                casa.estado = "RESERVADA"
                console.log(casa.estado)         
        })
    })
    
}
*/