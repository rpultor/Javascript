const edad = Number(prompt("¿Cuántos años tienes?"))
const notaMedia = Number(prompt("Escribe tu nota media con 3 decimales:"))

console.log(notaMedia.toFixed(2))

console.log(Number(edad+notaMedia))
console.log(edad - notaMedia)
console.log(edad * notaMedia)

const division = String(edad / notaMedia)
console.log(division)

const booleana = true

console.log(typeof(edad) + " | " + typeof(notaMedia) + " | " + typeof(division) + " | " + typeof(booleana))

console.log(isNaN(edad) + " | " + isNaN(notaMedia))