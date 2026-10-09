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