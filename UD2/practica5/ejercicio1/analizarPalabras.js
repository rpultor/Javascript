function cuentaPalabras(palabras){
    const palabrasContadas = palabras.filter((palabra) => palabra == "montaña");
    let cont = palabrasContadas.length;
    console.log(cont);
    return cont;
}

function palabrasCon4(palabras){
    const palabrasGrandes = palabras.filter((palabra) => palabra.length > 4);
    console.log(palabrasGrandes);
    return palabrasGrandes;
}

function encuentraPrimeraVez(palabras, palabra){
    const buscaPalabras = palabras.findIndex((busca) => busca == palabra);
    console.log(buscaPalabras);
    return buscaPalabras;
}

const palabras = ["sol", "montaña", "río", "bosque", "mariposa", "luz", "montaña"];
cuentaPalabras(palabras);
palabrasCon4(palabras);
encuentraPrimeraVez(palabras, "hola");