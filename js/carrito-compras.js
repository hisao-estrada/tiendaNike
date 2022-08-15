class Modelo{
    constructor(modelo, imagen, precio){
    this.modelo = modelo,
    this.imagen = imagen,
    this.precio = precio
    }
}

const tenis1 = new Modelo(modelo = "Air Force", imagen = "./imagenes/whites.jpg", precio = 1500)
const tenis2 = new Modelo(modelo = "Daybreak", imagen = "./imagenes/whites.jpg", precio = 1700)
const tenis3 = new Modelo(modelo = "Pegasus", imagen = "./imagenes/whites.jpg", precio = 2500)
const tenis4 = new Modelo(modelo = "Waffle Trainer", imagen = "./imagenes/whites.jpg",precio = 3500)


let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
  document.getElementById("agregarAlCarrito").addEventListener("submit", agregarTenis);

  function agregarTenis(e) {
    e.preventDefault();
  
    const formulario = new FormData(e.target);
    const modelo = formulario.get("name");
    const precio = formulario.get("precio");
    const imagen = formulario.get("imagen");
  
    const tenis = new Modelo(modelo, precio,);
    
      carrito.push(tenis)
      localStorage.setItem("tenis", JSON.stringify(carrito));
      mostrarTenis();
      e.target.reset();
  }

  function mostrarTenis() {
    let listadodeTenis = document.getElementById("listadodeTenis");
    listadodeTenis.innerHTML = "";
  
    carrito.forEach(({name, precio}) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <hr> 
      ${name} - 
      ${precio && precio + " -"}
      `;
      //${imagen && imagen + " "}
      
      const botonBorrar = document.createElement("button");
      botonBorrar.innerText = "Eliminar del Carrito";
      botonBorrar.classList.add("btn", "btn-danger");
  
      botonBorrar.addEventListener("click", () => {
        eliminarTenis(name);
      })
      li.appendChild(botonBorrar);
      
      listadodeTenis.appendChild(li);
    });
  }

  function eliminarTenis(name) {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Ya casi con tuyos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter(item => item.name != name);
        localStorage.setItem("tenis", JSON.stringify(carrito));
        mostrarPeliculas();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  mostrarTenis();