class Catalogo {
    constructor(...libros){
        this.libros = libros;
    }

    addLibro(libro){
        if(this.comprobarRepetidos(libro.titulo)){
            this.libros.push(libro);
        } else {
            console.log("El libro está repetido, por lo que no se añadirá al catálogo");
        };
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

    comprobarRepetidos(titulo){
        let comprobar = true;
        this.libros.forEach(select => {
            if (select.titulo != titulo) {return false}
        });
        return comprobar;
    }
}