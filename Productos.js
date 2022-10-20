const productos = [];

class Producto{
    constructor (nombre,caracteristicas,codigo,precio,imagen){
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.codigo = codigo;
        this.precio = precio;
        this.imagen = imagen;
    }

    precioConIva(){
        return this.precio*1.25
    }

    imprimir(){
        console.log('--- Producto:')
        console.log(`nombre: ${this.nombre}`)
        console.log(`caracteristicas ${this.caracteristicas}`)
        console.log(`codigo ${this.codigo}`)
        console.log(`precio ${this.precio}`)
        console.log(`precio con Iva ${this.precioConIva()}`)
        
    }
}

productos.push (new Producto ("Jostick ps4 original","Mando",147,10600,"./imagen/jostick.webp"));
productos.push (new Producto("Teclado logitech","Periferico",101,7800, "./imagen/tecladologi.webp"));
productos.push (new Producto ("Consola ps4 original","Consola",151,80000,"./imagen/pla4.webp"));
productos.push (new Producto ("Fifa 2023","Juego",146,8600,"./imagen/fifa23.webp"));
productos.push (new Producto ("Auriculares Sony ps4","Periferico",99,56000,"./imagen/aurisps4.webp"));