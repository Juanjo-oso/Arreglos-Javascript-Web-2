//#2
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
];

function calcularTotales(productos) {

    let sumaPrecios = productos.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
    let cantidadTotal = productos.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);

    let productoMasCaro = productos.sort((a, b) => b.precio - a.precio)[0].nombre;

    return {
        sumaPrecios,
        cantidadTotal,
        productoMasCaro
    };
}

let { sumaPrecios, cantidadTotal, productoMasCaro } = calcularTotales(productos);

console.log("La suma total del valor del stock de la tienda es:", sumaPrecios);
console.log("La cantidad total de productos es:", cantidadTotal);
console.log("El producto mas caro es:", productoMasCaro);
