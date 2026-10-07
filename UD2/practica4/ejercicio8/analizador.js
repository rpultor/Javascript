//Incompleto, el código no detecta los números como tal y al mismo tiempo no devuelve el resultado designado para cuando no detecta un número
function analizador (...numeros){
    let sumador;
    for (let i = 0; i < numeros.length; i++){
        if(!isFinite.numeros[i] || isNaN(numeros[i])){
            return "Se ha introducido un valor no válido";
        }
        sumador += numeros[i];
    }
    const max = Math.max(numeros);
    const min = Math.min(numeros);
    
    const res = [sumador, max, min];
    return res;
}

function mostrarAnalizador(...res){
    return "La suma total es de " + res[0] + ", el número más alto es " + res[1] + " y el número más bajo es " + res[2];
}

const numeros = Number([1,2,3,4,5]);
console.log(mostrarAnalizador(numeros))