const productos = [];

class Producto{
    constructor (nombre,caracteristicas,codigo,precio){
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.codigo = codigo;
        this.precio = precio;
    }

    precioConIva(){
        return this.precio*1.25
    }

    imprimir(){
        console.log(this)
        /*console.log('--- Producto:')
        console.log(`nombre: ${this.nombre}`)
        console.log(`caracteristicas ${this.caracteristicas}`)
        console.log(`codigo ${this.codigo}`)
        console.log(`precio ${this.precio}`)
        console.log(`precio con Iva ${this.precioConIva()}`)*/
        
    }
}
productos.push (new Producto ("Jostick ps4 original","Mando",147,10600));
productos.push (new Producto("Teclado logitech","Periferico",101,7800));
productos.push (new Producto ("Consola ps4 original","Consola",151,80000));
productos.push (new Producto ("Fifa 2023","Juego",146,8600));
//productos.push({nombre: "pepe", precio: 1234})


// const precioEnCuotas = productos.map ((m) => {
//     return m.obtenerProductoConIva()
// })

//console.log("ingrese 1 para ver los productos, con su valor al contado, ingrese 2 para ver su valor en cuotas, ingrese 3 para ver ambos");

//let n = parseInt(prompt());

console.log('*** Todos los Productos')
productos.forEach(n => n.imprimir());

console.log('*** Primer Producto con precio > 10000')
//productos.find(n => n.precio > 10000).forEach(element => element.imprimir());
productos.find(n => n.precio > 10000).imprimir()

console.log('*** Todos los Productos con precio > 10000')
productos.filter(n => n.precio > 10000).forEach(n => n.imprimir());

console.log('*** Todos los Productos ordenados por precio ascendente')
productos.sort((a,b) => (a.precio - b.precio)).forEach(n => n.imprimir());

console.log('*** Todos los Productos ordenados por precio descendente')
productos.sort((a,b) => b.precio - a.precio).forEach(n => n.imprimir());

// if (n == 1){
//     console.log(productos);
// }
// else if (n == 2){
//     console.log(precioEnCuotas);
// }
// else{
//     console.log(productos);
//     console.log(precioEnCuotas);
// };

