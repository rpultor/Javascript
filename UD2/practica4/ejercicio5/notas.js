//Incompleto, se ignoran partes del código sin motivo aparente


function comprobar(num) {
    return !isNaN(num);
}


function clasificarNota(nota){
    switch (nota) {
        case 0, 1, 2, 3, 4:
            console.log("Suspenso");
            break;
        case 5, 6:
            console.log("Aprobado");
            break;
        case 7, 8:
            console.log("Notable");
            break;
        case 9, 10:
            console.log("Sobresaliente");
            break;
    }
}

function calcularMedia(notas){
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    return (suma / notas.length);
}

function pedirDatos(){
    let notas = [];
    let num = 0;
    do {
        num = prompt("Introduce un número para hacer operaciones, introduce '-1' para detener el programa");
        if (comprobar(num) && num >= 0 && num <= 10) {
            notas.push(Number(num));
            clasificarNota(num);
        }
    } while (num != -1 && comprobar(num));
    return notas;
}

function calificar(notas) {
    console.log(notas.length)
    console.log(calcularMedia(notas).toFixed(2));
    console.log(Math.max(...notas));
    console.log(Math.min(...notas));
}

let notas = pedirDatos();

calificar(notas);



