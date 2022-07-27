const tenisNike = [
    {id: '1', modelo: 'Air Force', precio: 1500, stockAf: 10}, //Air Force
    {id: '2', modelo: 'Daybreak', precio: 1700, stockDbk: 10}, //Daybreak
    {id: '3', modelo: 'Pegasus', precio: 2000, stockPeg: 10}, //Pegasus
    {id: '4', modelo: 'Waffle Trainer', precio: 2000, stockWt: 10}, //Waffle Trainer
]


function buscarProducto(id){
    const nombreTenis= tenisNike.find( p => p.id == id)
    return nombreTenis.modelo
}

let modelo = prompt(`Dame el modelo`)
switch (modelo) {
    case '1':
        let search = buscarProducto(parseInt(modelo))
        alert(search)
        break;

    default:
        break;
}
