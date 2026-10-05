let salir = false;
let num = 0;
let cont = 0;

while(!salir){
    num = prompt("Introduce un número para sumarlo, introduce un negativo para detener el programa")
    if (num >= 0){
        cont += num
    } else {
        console.log(cont)
    }
}