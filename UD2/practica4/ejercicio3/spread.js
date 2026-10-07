function usarSpread(...valores){
    for (const valor of valores){
        console.log(valor)
    }
}

const lista = [1, "hola", 3, 5.5]
usarSpread(lista);