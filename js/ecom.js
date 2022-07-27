console.log('Nike');
let op2 = 1; //esta variable es para saber si el usuario quiere seguir comprando

/* *********************************************************************************** */
/* ************************* Arreglos de los productos ********************* */
/* *********************************************************************************** */
const tenisNike = [
    {id: '1', modelo: 'Air Force', precio: 1500, stockAf: 10}, //Air Force
    {id: '2', modelo: 'Daybreak', precio: 1700, stockDbk: 10}, //Daybreak
    {id: '3', modelo: 'Pegasus', precio: 2000, stockPeg: 10}, //Pegasus
    {id: '4', modelo: 'Waffle Trainer', precio: 2000, stockWt: 10}, //Waffle Trainer
]

const tarifasDestino = {
    'CDMX' : 100,
    'EDOMEX' : 150,
    'TOLUCA' : 160,
    'PACHUCA' : 170,
    'GUERRERO' : 180,
    'TLAXCALA' : 180,
    'VERACRUZ' : 190,
    'YUCATAN' : 200,
}

const carrito = []


/*  ******************************************************* */
/*  ****************** Clases y funciones ************* */
/*  ******************************************************* */
class EnvioTenis{
    constructor (destino, precio) {
        this.destino = destino
        this.precio = precio
    }
    tarifaFinal(){
        const tarifaEnvio = tarifasDestino[this.destino]
        const tarifaTotal = tarifaEnvio + this.precio
        alert(`El costo total de tu pedido con envio a ${this.destino} es de: $ ${tarifaTotal} pesos mx`)
    }
}

function buscarPrecio(id) {
    const tenis = tenisNike.find( p => p.id == id )
    carrito.push( {id: tenis.id, nombre: tenis.modelo, precio: tenis.precio}) 
    return tenis.precio
}

function buscarProducto(id){
    const nombreTenis= tenisNike.find( p => p.id == id)
    return nombreTenis.modelo
}

function modelo(modelo) {
    let search = buscarProducto(parseInt(modelo))
        return  search
}

/*********************************************************************************** */
/* Inicio del programa */
/*********************************************************************************** */

alert('Bienvenido a la tienda Nike \nEscoge tus tenis favoritos')
let modelos = prompt('\n1.-Air Force \n2.-Daybreak \n3.-Pegasus \n4.-Waffle Trainer')
let busq = modelo(modelos)
alert(`Haz seleccionado: ${busq}`)
do {
    switch (modelos) {
        case '1':
            //modelo(modelos)
            let color1 = prompt(`Disponibles solo color: \n1.-Blanco \t2.-Negro \t3.-Ninguno \n¿Cual deseas comprar?`)
            if(color1 == 1 ){
                let precioT = buscarPrecio(parseInt(color1))
                let talla = prompt(`Ingresa la talla de tus ${busq}`)
                if (talla >= 22.5 && talla <= 30) {
                    alert(`Tus tenis Nike ${busq} talla: ${talla} color Blancos se han agregado exitosamente a tu carrito`)
                    let destino = prompt('Ingresa tu destino \nCDMX \nEDOMEX \nTOLUCA \nPACHUCA \nGUERRERO \nTLAXCALA \nVERACRUZ \nYUCATAN').toUpperCase()
                    const nuevosTenis = new EnvioTenis(destino, precioT)
                    nuevosTenis.tarifaFinal()
                    stockAf--;
                } else {
                    alert('Talla solo disponible de 22.5 a 30 ')
                }
            } else if (color1 == 2){
                let talla = prompt('Ingresa la talla de tus Air Force')
                if (talla >= 22.5 && talla <= 30) {
                    alert(`Tus tenis Nike air Force talla: ${talla} color Negro se han agregado exitosamente a tu carrito`)
                    stockAf--;
                } else {
                    alert('Talla solo disponible de 22.5 a 30 ')
                }
            } else{
                alert('Opcion Invalida')
            }
            break;
        
        case '2':
            let color2 = prompt('Talla Mediana Disponible solo color: \n1.-Amarillo \t2.-Azul \n¿Cual deseas comprar?')
            if(color2 == 1){
                stockRemeras--;
                alert('¡La ramera color Amarilla es tuya!')
            }else{
                stockRemeras--;
                alert('¡La ramera color Azul es tuya!')
            }
            break;
        
        case '3':
            let color3 = prompt('Talla Grande Disponible solo color: \n1.-Rojo \t2.-Gris \n¿Cual deseas comprar?')
            if(color3 == 1){
                stockRemeras--;
                alert('¡La ramera color Rojo es tuya!')
            }else{
                stockRemeras--;
                alert('¡La ramera color Gris es tuya!')
            }
            break;
        case '4':
            let color4 = prompt('Talla Grande Disponible solo color: \n1.-Rojo \t2.-Gris \n¿Cual deseas comprar?')
            if(color4 == 1){
                stockRemeras--;
                alert('¡La ramera color Rojo es tuya!')
            }else{
                stockRemeras--;
                alert('¡La ramera color Gris es tuya!')
            }
            break;
        
        default:
            alert('Opcion invalida')
            break;
    }
    op2 = prompt('¿Deseas seguir comprando? \n1.-Si \n2.-No')
} while (op2 == 1);

alert('Gracias por su compra')
console.log(`El stock de Remeras es de: ${stockRemeras}`);