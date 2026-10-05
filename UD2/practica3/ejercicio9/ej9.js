const contra = "hola"
let guess = "";

do {
    guess = prompt("Adivina la contraseña (hola):")
} while (guess != contra)
alert("Lo has adivinado!")