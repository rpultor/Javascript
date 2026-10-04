const fecha = new Date();
console.log(fecha);

console.log(fecha.getDate());

console.log(fecha.getMonth()+1);

console.log(fecha.getFullYear());

console.log(new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(fecha));