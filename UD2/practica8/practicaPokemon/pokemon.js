const urlPokemonList = "https://pokeapi.co/api/v2/pokemon?limit=5";
const urlPikachu = "https://pokeapi.co/api/v2/pokemon/25/";

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
        document.body.innerHTML += `<ul>${resultado.map((pokemon) => 
            `<li>${pokemon.name} | ${pokemon.url}</li>`).join("")}</ul>`;
    });
console.log(top5);

fetch(urlPikachu)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(datos => {
        console.log(datos.name + " | " + datos.id + " | " +
            datos.types[0].type.name + " | " + datos.sprites.front_default);
    });