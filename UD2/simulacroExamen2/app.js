const url = "https://jsonplaceholder.typicode.com/posts?_limit=20";

fetch (url)
.then (respuesta => {
    if (!respuesta.ok){
        throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    return respuesta.json();
})
.then (resultados => {
    const arrayRes = [];
    resultados.forEach(element => {
        arrayRes.push(element);
    });

    const submit = document.querySelector("#submit");

    if (submit !== null){
        submit.addEventListener("click", evento =>{
            evento.preventDefault();
            const busqueda = document.textContent("#busqueda");
            console.log(busqueda)
    })
    }

    if (arrayRes.length == 0){
        document.body.innerHTML += "No hay elementos";
    } else {
        document.body.innerHTML += `<ul>${arrayRes.map((publicacion) => 
            `<h2 class="titulo">#${publicacion.id} ${publicacion.title}</h2>
            <li class="texto">${publicacion.body}</li>`).join("")}</ul>`;
    }

})
.catch (error => {
    console.log("Algo ha salido mal: ", error.message);
})
.finally (() => {
    console.log("Terminado!");
})