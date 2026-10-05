let salir = false;

do {
    switch (Number(prompt("Indique su nivel:\n1.Usuario principiante\n2.Usuario intermedio\n3.Usuario avanzado\n4.Salir"))){
    case 1:
        alert("Nivel principiante");
        break;
    case 2:
        alert("Nivel intermedio");
        break;
    case 3:
        alert("Nivel avanzado")
        break;
    case 4:
        alert("Muchas gracias")
        salir = true;
        break;
    default:
        alert("No se ha seleccionado ninguna opción")
}
} while (!salir)

//este código tampoco funciona