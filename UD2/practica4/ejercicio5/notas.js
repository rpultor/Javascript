//Incompleto, se ignoran partes del código sin motivo aparente


function comprobar(num) {
    return isNaN(num);
}

function calificar(...notas) {
    let cont = 0;
    for (let i = 0; i < notas.length; i++) {
        console.log(i)
        switch (notas[i]) {
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
        cont = cont + notas[i];
    }

    const media = cont / notas.length;
    console.log(notas.length)
    console.log(media.toFixed(2));
    console.log(Math.max(...notas));
    console.log(Math.min(...notas));
    return media;
}

let notas = [];
var num = 0;
do {
    num = prompt("Introduce un número para hacer operaciones, introduce '-1' para detener el programa");
    if (comprobar(num) && num >= 0 && num <= 10) {
        let nota = Number(num)
        notas = notas.push(nota);
    }
} while (num != -1 && !comprobar(num));
calificar(notas);



