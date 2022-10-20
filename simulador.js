const carro = [];

let totalPrecio;

console.log('*** Todos los Productos')
productos.forEach(n => n.imprimir());

console.log('*** Primer Producto con precio > 10000')
productos.find(n => n.precio > 10000).imprimir()


console.log('*** Todos los Productos con precio > 10000')
productos.filter(n => n.precio > 10000).forEach(n => n.imprimir());


console.log('*** Todos los Productos ordenados por precio ascendente')
productos.sort((a,b) => (a.precio - b.precio)).forEach(n => n.imprimir());


console.log('*** Todos los Productos ordenados por precio descendente')
productos.sort((a,b) => b.precio - a.precio).forEach(n => n.imprimir());


//Clases de DOM

let Caja = document.getElementById ("caja");
console.log(Caja.innerHTML);


let contendor = document.getElementsByTagName("h1");
console.log(contendor[0].innerText);
contendor[0].innerHTML = "Tienda Gamming";

//tabla dinamica
/*
let tabla = document.createElement("tabla");

tabla.className = "table table-striped"

let tablaBody = document.createElement("tbody");

for (const producto of productos){
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>$ ${producto.precio}</td>
            <td>${producto.caracteristicas}</td>
            <td>${producto.codigo}</td>
        </tr>
`;
}

tabla.append (tablaBody);
let CrearTabla =  document.getElementById("tablas");
CrearTabla.append (tabla);
*/

//Ingreso de Cars

let articulosCartas = document.getElementById ("cartas");

for (const producto of productos){
    let carta = document.createElement ("div");
    carta.className = "card col-xl-2"
    carta.innerHTML += `

    <div class="card-body">
        <img src=${producto.imagen} class="card-img-top" alt="...">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$ ${producto.precioConIva()}</p>
        <p class="card-text">${producto.caracteristicas}</p>
        <button id = "btn${producto.codigo}" class="btn btn-primary">Comprar</button>
    </div>
    `;
    articulosCartas.append(carta);
}

productos.forEach (producto =>{
    document.getElementById(`btn${producto.codigo}`).addEventListener("click",function(){
        agregarAlCarrito(producto)
    })
})


function agregarAlCarrito (productoComprado){
    carro.push (productoComprado);
    console.table(carro);
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
infoTotal.innerText="Total a pagar $: "+totalPrecio;
}
