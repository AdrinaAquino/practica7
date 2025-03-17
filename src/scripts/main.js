const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
];

// 1 Recorrer y mostrar productos
productos.forEach(function (elemento) {
    console.log("----------------------")
    return console.log("Nombre:" + elemento.nombre + " Precio: " + elemento.precio)
})

// 2 Crear un array de nombres de productos y verificar disponibilidad (map + includes)
// parte 1
const productosDisponibles = productos.map(function (elemento) {
    return elemento.nombre
})
console.log(productosDisponibles)

// parte 2
const hay = productosDisponibles.includes("Webcam")
console.log(hay)

// 3 Aplicar un descuento a los productos de 10%
const descuentoProductos = productos.map(function (elemento) {
    const descuento = elemento.precio * 0.90
    return "Nombre: " + elemento.nombre + ", Precio: " + descuento
})
console.log(descuentoProductos)

// 4 Filtrar productos por precio (filter)
const precioMenor = productos.filter(function (elemento) {
    return elemento.precio < 100
})
console.log(precioMenor)
// 5 Obtener los primeros productos (slice)
const primerosDos = productos.slice(0, 2)
console.log(primerosDos)

// 6 Ordenar productos por precio (sort)
const ordenDescendente = productos.sort(function (a, b) {
    return a.precio - b.precio
})
console.log(ordenDescendente)
// 7 Invertir el orden de los productos (reverse)
const ordenInverso = productos.reverse(function (elemento) {
    return elemento
})
console.log(ordenInverso)