let libro = new Libro("Hola", "Homero", 5);
console.log(libro);
libro.describir();

let otroLibro = new Libro ("Hola 2", "Homero" , 299);
let otroLibroMas = new Libro ("Hola 3", "Homero" , 300);

let catalogo = new Catalogo(otroLibro);
catalogo.addLibro(otroLibroMas);
catalogo.checkLibro("Hola 3");
catalogo.listLibro();

catalogo.deleteLibro("Hola 2");
catalogo.listLibro();

catalogo.addLibro(otroLibroMas);
catalogo.listLibro();