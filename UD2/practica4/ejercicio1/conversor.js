const dolares = 1.01;
const euro = parseInt(prompt("Introduce la cantidad a convertir en dólares"));
alert(euro + "€ son " + conversor(euro) + "$")

function conversor (euro) {
    return euro * dolares
}