let pasillo = ["S" , "." , "#" , "." , "." , "."]
let inst;
do {
    let posicion = pasillo.indexOf("S");
    inst = String(prompt(pasillo + "\nIntroduce 'derecha' o 'izquierda' para mover al robot, introduce 'salir' para terminar"));
    document.body.innerHTML = typeof(inst);
    //no detecta nada como ninguna de las opciones del switch y salta directamente al default
    switch(inst.toLowerCase()){
        case "derecha":
            if (pasillo[posicion+1] != "#" && posicion+1 < pasillo.length){
                pasillo[posicion] = "."
                pasillo[posicion+1] = "S"
                console.log("Derecha: aceptado; posición " + pasillo.indexOf("S"));
            } else if (pasillo[posicion+1] == "#"){
                console.log("Derecha: denegado; hay un obstáculo en la posición " + pasillo.indexOf("#"));
            } else if (posicion+1 >= pasillo.length){
                console.log("Derecha: denegado; el destino queda fuera del pasillo")
            }
            break;
        case "izquierda":
            if (pasillo[posicion-1] != "#" && posicion-1 >= 0){
                pasillo[posicion] = "."
                pasillo[posicion-1] = "S"
                console.log("Izquierda: aceptado; posición " + pasillo.indexOf("S"));
            } else if (pasillo[posicion-1] == "#"){
                console.log("Izquierda: denegado; hay un obstáculo en la posición " + pasillo.indexOf("#"));
            } else if (posicion-1 < 0){
                console.log("Izquierda: denegado; el destino queda fuera del pasillo")
            }
            break;
        case "salir":
            console.log("Gracias por mover al robot");
            break;
        default:
            alert("Eso no es una instrucción válida");
    }

} while (inst != "salir");