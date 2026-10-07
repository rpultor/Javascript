
function cuantosLitros(distancia, consumo){
    return consumo * distancia;
}

function costeViaje(distancia, consumo, precio){
    return cuantosLitros(distancia, consumo) * precio;
}

//Incompleto, valor por defecto no funciona
function costePorViajero (distancia, consumo, numViajeros, precio = 1.5){
    return cuantosLitros(distancia, consumo, precio) / numViajeros;
}



let distancia, consumo, precio, numViajeros;

do{
    distancia = Number(prompt("Introduce la distancia en kilómetros"));
} while(distancia <= 0);

do{
    consumo = Number(prompt("Introduce el consumo en litros cada 100km") / 100);
} while(consumo <= 0);

do{
    precio = Number(prompt("Introduce el precio por litro de combustible"));
} while(isNaN(precio));

do{
    numViajeros = Number(prompt("Introduce la cantidad de viajeros"));
} while(isNaN(numViajeros));

console.log(cuantosLitros(distancia, consumo).toFixed(2));
console.log(costeViaje(distancia, consumo, precio).toFixed(2));
console.log(costePorViajero(distancia, consumo, precio, numViajeros).toFixed(2));