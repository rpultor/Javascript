const palabra = prompt("Introduce una palabra");
let cont = 0;

for(const i of palabra){
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
        cont ++;
    }
}

console.log(cont)