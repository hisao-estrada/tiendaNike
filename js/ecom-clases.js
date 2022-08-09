class Modelo{
    constructor(modelo, imagen, precio){
    this.modelo = modelo,
    this.imagen = imagen,
    this.precio = precio
    }
}

const tenis1 = new Modelo("Air Force", "./imagenes/whites.jpg", "1500")
const tenis2 = new Modelo("Daybreak", "./imagenes/whites.jpg", "1700")
const tenis3 = new Modelo("Pegasus", "./imagenes/whites.jpg", "2500")
const tenis4 = new Modelo("Waffle Trainer", "./imagenes/whites.jpg", "3500")

const mostrador = []
const carrito = []

mostrador.push(tenis1)
mostrador.push(tenis2)
mostrador.push(tenis3)
mostrador.push(tenis4)

function mostrarCarrito(tenis) {
    const contenedorCarrito = document.getElementById("carrito")
    contenedorCarrito.innerHTML = ""

    tenis.forEach(tenis => {
        const divCarrito = document.createElement("div")
        divCarrito.innerHTML=`
            <h2> Agregado al carrito </h2>
            <img src="${tenis.imagen}" alt="${tenis.modelo}">
            <h3> ${tenis.modelo} </h3>
            <p> ${tenis.precio} </p>
    `
    contenedorCarrito.appendChild(divCarrito)
    crearBotonEliminar()
    })
}

function mostrarTenis(mostrador) {

    const contenedorTenis = document.getElementById("contenedor")
    contenedorTenis.innerHTML = ""

    mostrador.forEach(tenis => {
        const divTenis = document.createElement("div")
        divTenis.classList.add("modelos") 
        divTenis.innerHTML = `
            <img src="${tenis.imagen}" alt="${tenis.modelo}">
            <h3> ${tenis.modelo} </h3>
            <p> ${tenis.precio} </p>
           `
           const botonAgregarCarrito = document.createElement("button")
           botonAgregarCarrito.innerText = "Agregar al carrito"

           botonAgregarCarrito.addEventListener("click", ()=>{
            mostrarCarrito(mostrador)
            carrito.push(tenis)
           })
            contenedorTenis.appendChild(divTenis)
            contenedorTenis.appendChild(botonAgregarCarrito)
    });  
}

function crearBotonEliminar() {
    const botonEliminar = document.createElement("button")
    botonEliminar.innerText = "Eliminar"
    botonEliminar.addEventListener("click", () =>{
        mostrarTenis(mostrador)
    })    
}

mostrarTenis(mostrador)