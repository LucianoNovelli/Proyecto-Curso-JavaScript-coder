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

productos.push (new Producto ("Jostick ps4 original","Mandos",147,10600,"./imagen/jostick.webp"));
productos.push (new Producto("Teclado logitech","Perifericos",101,7800, "./imagen/tecladologi.webp"));
productos.push (new Producto ("Sony PlayStation 4","Consolas",151,80000,"./imagen/pla4.webp"));
productos.push (new Producto ("Fifa 2023","Juegos",146,8600,"./imagen/fifa23.webp"));
productos.push (new Producto ("Auriculares Sony ps4","Perifericos",99,56000,"./imagen/aurisps4.webp"));
productos.push (new Producto ("The Last of Us Part II","Juegos",45,8100,"./imagen/thelast.webp"));
productos.push (new Producto ("Sony PlayStation 5","Consolas",69,310000,"./imagen/ps5.webp"));
productos.push (new Producto("Resident Evil 4","Juegos",47,5500,"./imagen/resident.webp"));
productos.push (new Producto ("God of War","Juegos",79,4990,"./imagen/godofwar.webp"));
productos.push (new Producto ("Mortal Kombat 11","Juegos",111,8410,"./imagen/mortalkombat.webp"));
productos.push (new Producto ("X-box Series S","Consolas",2,110000,"./imagen/xboxserie.webp"));
productos.push (new Producto ("Sony PlayStation 2","Consolas",44,30000, "./imagen/ps2.webp"));
productos.push (new Producto ("X-box One X","Consolas",11,200000,"./imagen/xboxone.webp"));
productos.push (new Producto ("Jostick ps5 Original","Mandos",2,21000,"./imagen/mandops5.webp"));
productos.push (new Producto ("Jostick X-box","Mandos",3,28000,"./imagen/mandoxbox.webp"));
productos.push (new Producto ("Jostick Ps3","Mandos",4,2700,"./imagen/mandops3.webp"));
productos.push (new Producto ("Jostick X-box 360","Mandos",5,2700,"./imagen/mandoxbox360.webp"));
productos.push (new Producto ("Teclado HyperX","Perifericos",6,13100,"./imagen/tecladogamin.webp"));
productos.push (new Producto ("Auriculares Logitech G","Perifericos",7,19100,"./imagen/aurislogi.webp"));
productos.push (new Producto ("Mouse Inalambrico Logitech","Perifericos",8,6100,"./imagen/mouselogi.webp"));