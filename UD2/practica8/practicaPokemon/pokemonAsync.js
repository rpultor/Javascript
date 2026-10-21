async function obtenerPokemon() {
  document.body.innerHTML = "<h1>Cargando Pokédex...</h1>";

  try {
    const respuesta = await fetch(urlPikachu);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const pokemon = await respuesta.json();
    console.log("Pokemon recibido:", pokemon);
    mostrarPokemon(pokemon);
  } catch (error) {
    console.error("No se pudo obtener el Pokemon:", error.message);
    document.body.innerHTML = `
      <h1>Pokédex</h1>
      <p>No se pudo cargar el pokémon: ${error.message}</p>
    `;
  } finally {
    console.log("Petición terminada");
  }
}

obtenerPokemon();