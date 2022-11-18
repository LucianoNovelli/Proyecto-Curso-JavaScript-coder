let = productosJSON = [];
let carro = JSON.parse(localStorage.getItem("carrito")) || [];

let totalPrecio;
let contenedor = document.getElementById("cartas");
let butonFinalizarCompra = document.getElementById("Botonfinalizar");


function renderizarProds(){
    for(const producto of productosJSON){
        contenedor.innerHTML += `
            <div class="card col-sm-2 col-11">
                <img src=${producto.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">💲${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-success">Comprar</button>
                </div>
            </div>
        `;
    }

    productosJSON.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })
};


//Funcion para agregar lista y productos al carro
function agregarAlCarrito (productoComprado){
    carro.push (productoComprado);
    Swal.fire({
        title: productoComprado.nombre,
        text: 'Agregado al carrito',
        imageUrl: productoComprado.imagen,
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Custom image',
    })
    
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoComprado.id}</td>
        <td>${productoComprado.nombre}</td>
        <td>${productoComprado.precio}</td>
        <td><button class="btn" onclick="eliminar(event)">❌​</button></td>
    </tr>
    `;
    totalPrecio = carro.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="​Total a pagar $ "+totalPrecio;

    localStorage.setItem("carrito",JSON.stringify(carro));
}


//obtengo los datos del JSON
async function obtenerJSON() {
    const URLJSON="productos.json";
    const resp = await fetch(URLJSON);
    const data = await resp.json();
    productosJSON = data;
    renderizarProds();
}

//Funcion para elimiar productos de la lista.
function eliminar(ev){
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carro.findIndex(producto => producto.id == id);
    console.log(indice)
    carro.splice(indice,1);
    console.table(carro);
    fila.remove();
    let preciosAcumulados = carro.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    total.innerText="🛒​Total a pagar $: "+preciosAcumulados;
    
    localStorage.setItem("carrito",JSON.stringify(carro));
}



butonFinalizarCompra.onclick = () => {
    if(carro.length==0){
        Swal.fire({
            title: 'El carro no contiene productos',
            text: 'Por favor seleccione productos',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
        })
    }else{
        carro = [];
        document.getElementById("tablabody").innerHTML="";
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: ";

        Swal.fire({
            title: 'Datos para el envio',
            html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre Completo">
            <input type="text" id="email" class="swal2-input" placeholder="Email">
            <input type="text" id="celular" class="swal2-input" placeholder="Celular">`,
            confirmButtonText: 'Ok',
            focusConfirm: false,
            preConfirm: () => {
                const nombre = Swal.getPopup().querySelector('#nombre').value
                const domicilio = Swal.getPopup().querySelector('#email').value
                const celular = Swal.getPopup().querySelector('#celular').value
            if (!domicilio || !celular || !nombre) {
                Swal.showValidationMessage(`Por favor ingresa tus datos`)
            }
                return {nombre:nombre, domicilio: domicilio, celular: celular}
            }
            }).then((result) => {
            Swal.fire(`
                En los próximos minutos estarás recibiendo el correo de confirmación y seguimiento para la entrega.<br>
                ¡Gracias por la compra!
            `.trim())
            })
        }
};

obtenerJSON();