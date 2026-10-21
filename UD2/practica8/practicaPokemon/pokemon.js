const urlPokemonList = "https://pokeapi.co/api/v2/pokemon?limit=5";
const urlPikachu = "https://pokeapi.co/api/v2/pokemon/25/";
const noExiste = "noexiste";

document.body.innerHTML = "<h1>Cargando Pokédex...</h1>";

const top5 = fetch(urlPokemonList)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(pokemon => {
        console.log(pokemon.results);
        console.log(typeof pokemon)
        return pokemon.results;
    })
    .then(resultado => {
        document.body.innerHTML = `<ul>${resultado.map((pokemon) => 
            `<li><a href="${pokemon.url}">${pokemon.name}</a></li>`).join("")}</ul>`;
    });
console.log(top5);

function obtenerDatos(url){
    return fetch(url)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return respuesta.json();
    });
}

function mostrarPokemon(pokemon){
    document.body.innerHTML += 
    `<h1>${pokemon.name} #${pokemon.id}</h1>
    <ul>
        <li>${pokemon.types[0].type.name}</li>
        <img src="${pokemon.sprites.front_default}"/>
    </ul>`;
}

function esperar(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Pokédex cargada");
        }, ms);
    })
}
//no sé donde añadir el mensaje que debe aparecer durante la espera forzada

esperar(2000)
.then(() => {
    obtenerDatos(urlPikachu)
    .then(pokemon => {
        mostrarPokemon(pokemon);
    })
    .catch(error => {
        console.error("No se pudo obtener el pokemon:", error.message);
        document.body.innerHTML += `<h1>Error en la Pokédex</h1>
            <p>No se pudo cargar el pokemon: ${error.message}</p>`;
    })
    .finally(() => console.log("Petición terminada"));;
})