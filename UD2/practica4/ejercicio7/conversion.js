let select;
do{
    select = Number(prompt("Elije una opción:\n1. Celsius a Farenheit\n2.Farenheit a Celsius\n3.Kilómetros a millas\n4.Millas a kilómetros\n5.Euros a dólares\n6.Dólares a euros\n0.Salir"));
    switch(select){
        case 1:
            CelAFar(Number(prompt("Introduce la temperatura en Celsius")));
            break;
        case 2:
            FarACel(Number(prompt("Introduce la temperatura en Farenheit")));
            break;
        case 3:
            KilAMil(Number(prompt("Introduce la distancia en kilómetros")));
            break;
        case 4:
            MilAKil(Number(prompt("Introduce la distancia en millas")));
            break;
        case 5:
            EurADol(Number(prompt("Introduce el cambio en euros")));
            break;
        case 6:
            DolAEur(Number(prompt("Introduce el cambio en dólares")));
            break;
        default:
            alert("La opción seleccionada no es válida");
    }

} while (select != 0);

function CelAFar (temp){
    const res = (temp* 9 / 5) + 32;
    console.log(res);
    return res;
}

function FarACel (temp){
    const res = (temp - 32) * 5 / 9;
    console.log(res);
    return res;
}

function KilAMil (dist){
    const res =  dist * 0.621;
    console.log(res);
    return res;
}

function MilAKil (dist){
    const res = dist * 1.609;
    console.log(res);
    return res;
}

function EurADol (mone){
    const res =  mone * 1.12;
    console.log(res);
    return res;
}

function DolAEur (mone){
    const res = mone * 0.89;
    console.log(res);
    return res;
}