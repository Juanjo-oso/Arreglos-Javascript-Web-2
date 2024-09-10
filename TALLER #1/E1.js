//#1
let productos = [
    {
        id: 1, nombre: "Camisa",
        precio: 80000,
        cantidad: 5,
    },
    {
        id: 2, nombre: "Pantalón",
        precio: 150000,
        cantidad: 8,
    },
    {
        id: 3, nombre: "Tenis",
        precio: 200000,
        cantidad: 8,
    }
]

function calcularTotales(productos) {
    let sumaPrecios = productos.reduce((acumulador, producto) => acumulador
        + producto.precio, 0);
    let sumaStock = productos.reduce((acumulador, producto) => acumulador
        + producto.cantidad * producto.precio, 0);
    return [sumaPrecios, sumaStock];
}

let [sumaPrecios, sumaStock] = calcularTotales(productos);
console.log("La suma de los precios de los productos es:", sumaPrecios)
console.log("La suma total del valor del stock de la tienda es:", sumaStock)