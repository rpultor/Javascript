function mostrarTodos(num1, num2, num3, ...numeros) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
    for (const num of numeros) {
    console.log(num);
  }
}

mostrarTodos(1, 2, 3, 4, 5);