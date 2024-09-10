//#5
let productos2 = [
    { nombre: "Memoria RAM Kingston DDR4 8GB", precio: 95000, cantidad: 25 },
    { nombre: "Teclado Mecánico Logitech G Pro", precio: 400000, cantidad: 50 },
    { nombre: "Mouse Gamer Razer DeathAdder", precio: 200000, cantidad: 40 },
    { nombre: "Monitor Curvo Samsung 24 pulgadas", precio: 850000, cantidad: 15 },
    { nombre: "Audífonos HyperX Cloud II", precio: 300000, cantidad: 30 },
    { nombre: "Tarjeta Gráfica NVIDIA RTX 3060", precio: 2300000, cantidad: 5 }
];

function filtrarYAgregarImpuesto(productos2) {
    return productos2
        .filter(producto => producto.precio > 80000 && producto.cantidad < 100)
        .map(producto => {
            let tax = producto.precio * 0.19;
            let totalValue = producto.precio + tax;
            return {
                ...producto,
                product_tax_value: tax,
                product_total_value: totalValue
            };
        });
}
let productosFiltrados = filtrarYAgregarImpuesto(productos2);
console.log(productosFiltrados);
