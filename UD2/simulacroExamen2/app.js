const url = "https://jsonplaceholder.typicode.com/posts?_limit=20";

let mensajes = [];

const estado = document.getElementById("estado");
const resultados = document.getElementById("resultados");
const formulario = document.getElementById("formulario-busqueda");
const busqueda = document.getElementById("busqueda");

async function cargarMensaje() {
    document.body.innerHTML += "<h1>Cargando...</h1>";
    try {
        const respuesta = await fetch(url);

        if(!respuesta.ok) throw new Error("Error al recibir la información: ", respuesta.status)
        
        mensajes = await respuesta.json();

        mostrarMensajes(mensajes);
    } catch (error) {
        console.error("No se ha podido obtener la información: ", error.message)
    }
}

function mostrarMensajes(mensajes){
    estado.textContent = "";

    mensajes.forEach(mensaje => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        const titulo = mensaje.title;
        const cuerpo = mensaje.body;

        h1.append(titulo);
        p.append(cuerpo);
        li.append(h1);
        li.append(p);

        resultados.appendChild(li);
    });
}


function buscarPorTitulo(evento){
    console.log("hola")
    const buscar = busqueda.value.toLowerCase();
    const elementos = [];
    for(p of mensajes){
        if(p.title.toLowerCase().includes(buscar)){
            elementos.push(p);
        }
    }
    mostrarMensajes(elementos);
}

formulario.addEventListener("submit", buscarPorTitulo);

cargarMensaje();