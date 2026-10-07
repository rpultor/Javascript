const nom = "Raúl";
const ap = "Pulido Torres"

//A
const nombreCompleto = nom + " " + ap;
console.log(nombreCompleto)

//B
console.log(nombreCompleto.length)

//C
const nombreRecortado = nombreCompleto.slice(6, 10)
console.log(nombreRecortado)

//D
const apCambiado = ap.replace("Torres", "Castillo")
console.log(apCambiado)

//E
const nombreMayus = nombreCompleto.toUpperCase()
console.log(nombreMayus)

//F
const ultimoChar = nombreCompleto.charAt(nombreCompleto.length-1)
console.log(ultimoChar)

//G
const arrayNombre = nombreCompleto.split(" ");
console.log(arrayNombre)

//H
const posApellido = nombreCompleto.indexOf("Pulido Torres");
console.log(posApellido)

//I
const mensaje = `Bienvenido/a ${nombreCompleto}`
console.log(mensaje)

//J
const iniciales = arrayNombre[0].charAt(0) + arrayNombre[1].charAt(0) + arrayNombre[2].charAt(0);
console.log(iniciales)