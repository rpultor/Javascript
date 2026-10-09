class Catalogo {
    constructor(...libros){
        this.libros = libros;
    }

    addLibro(libro){
        this.libros.push(libro);
    }

    deleteLibro(titulo){
        this.libros.splice(this.libros.indexOf(titulo))
    }

    checkLibro(titulo){
        this.libros.forEach(select => {
            if (select.titulo === titulo) select.describir()
        });
    }

    listLibro(){
        this.libros.forEach(select => {
            this.checkLibro(select.titulo);
        });
    }
}

let libro = new Libro("Hola", "Homero", 5);
libro.describir();

let libros = new Libro ("Hola 2", "Homero" , 6);
let otroLibro = new Libro ("Hola 3", "Homero" , 7);

let catalogo = new Catalogo(libros);
catalogo.addLibro(otroLibro);
catalogo.checkLibro("Hola 3");
catalogo.listLibro();

catalogo.deleteLibro("Hola 2");
catalogo.listLibro();