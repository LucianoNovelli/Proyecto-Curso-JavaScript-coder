const carro = [];

let totalPrecio;


let Caja = document.getElementById ("caja");
console.log(Caja.innerHTML);


let contendor = document.getElementsByTagName("h1");
console.log(contendor[0].innerText);
contendor[0].innerHTML = "Tienda Gamming";

// Funcion que retorna una lista con los html de cada carta
function getHtmlCardsOfProductos(productos) {
    let htmlProductos = []
    

    for (const producto of productos){
        let carta = document.createElement ("div");
        carta.className = "card col-xl-2 col-10 col-l-5"
    
        cuerpoCarta = document.createElement ("div");
        cuerpoCarta.className = "card-body "
        cuerpoCarta.innerHTML += `
            <img src=${producto.imagen} class="card-img-top" alt="...">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precioConIva()}</p>
            <p class="card-text">${producto.caracteristicas}</p>
            <button id = 
        `;
        boton = document.createElement("button")
        boton.setAttribute("id", `btn${producto.codigo}`)
        boton.setAttribute("class", "btn btn-primary")
        
        boton.innerHTML = "Comprar"
        boton.addEventListener("click",function(){
            agregarAlCarrito(producto)
        })
        cuerpoCarta.append(boton)
        carta.append(cuerpoCarta)

        htmlProductos.push(carta);
    }

    return htmlProductos
}


// Inicio Barrido categorias
let categorias = ["Juegos", "Consolas", "Perifericos", "Mandos"]

for (const categoria of categorias){
    let articulos = document.getElementById("cartas")

    let cartas = document.createElement("div")
    cartas.className = "cart row justify-content-center"
    cartas.innerHTML = `<h3>Nuestros ${categoria} </h3>`
    
    let productosFiltrados = productos.filter(p => p.caracteristicas == categoria)
    getHtmlCardsOfProductos(productosFiltrados).forEach( p => cartas.append(p))
    
    articulos.append(cartas)
}


function agregarAlCarrito (productoComprado){
    carro.push (productoComprado);
    //console.table(carro);
    alert("Agregaste "+productoComprado.nombre+" Al carrito");
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoComprado.codigo}</td>
        <td>${productoComprado.nombre}</td>
        <td>${productoComprado.precio}</td>
    </tr>
    `;
    totalPrecio = carro.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $ "+totalPrecio;


 //Se agrega el carro al Storage

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

    guardarLocal("listaProductos", JSON.stringify(carro));

    const almacenados = JSON.parse (localStorage.getItem ("listaProductos"));

}

