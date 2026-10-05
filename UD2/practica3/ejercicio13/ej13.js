const num = Number(prompt("Introduce un número"));

for (let i = num; i > 0; i--){
    if (num % i == 0){console.log(i)}
}