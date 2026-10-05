const contra = (Math.round((Math.random*10)+1));
let guess = 0;

do {
    guess = prompt("Hola")
    if (guess > contra){
        console.log("El número es menor al introducido")
    } else if(guess < contra){
        console.log("El número es mayor al introducido")
    } else {
        console.log("No")
    }
} while (guess != contra)
alert("Lo has adivinado!")

//Este codigo no funciona por motivos desconocidos