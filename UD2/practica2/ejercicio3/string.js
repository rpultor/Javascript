const nom = "Raúl";
const ap = "Pulido Torres"

const nombreCompleto = nom + " " + ap;
console.log(nombreCompleto)

console.log(nombreCompleto.length)

const nombreRecortado = nombreCompleto.slice(6, 10)
console.log(nombreRecortado)

const apCambiado = ap.replace("Torres", "Castillo")
console.log(apCambiado)

const nombreMayus = nombreCompleto.toUpperCase()
console.log(nombreMayus)

const ultimoChar = nombreCompleto.charAt(nombreCompleto.length-1)
console.log(ultimoChar)

const arrayNombre = nombreCompleto.split(" ");
console.log(arrayNombre)

const mensaje = `Bienvenido/a ${nombreCompleto}`
console.log(mensaje)

const iniciales = arrayNombre[0].charAt(0) + arrayNombre[1].charAt(0) + arrayNombre[2].charAt(0);
console.log(iniciales)