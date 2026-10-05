const num1 = prompt("Introduce el primer número")
const num2 = prompt("Introduce el segundo número")

if (!(isNaN(num1) && isNaN(num2)) && (num1 != 0 && num2 != 0)){
    if (num1 === num2){
        alert("Ambos números son iguales")
    } else if(num1 > num2){
        alert("El primer número es mayor que el segundo")
    } else {
        alert("El primer número es menor que el segundo")
    }
}