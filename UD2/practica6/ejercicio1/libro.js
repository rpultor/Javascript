class Libro {
    constructor(titulo, autor, numPaginas){
        if (titulo != "") {this.titulo = titulo} else {this.titulo = "Lorem Ipsum"};
        if (autor != "") {this.autor = autor} else {this.autor = "Lorem Ipsum"};
        if (numPaginas > 0) {this.numPaginas = numPaginas} else {this.numPaginas = 1};
    }

    esExtenso() {
        return this.numPaginas >= 300;
    }

    describir() {
        let largo;
        if (this.esExtenso()){
            largo = "es un libro largo"
        } else{
            largo = "es un libro corto"
        }
        document.body.innerHTML += 
            "<h1>" + this.titulo + "</h1> <p> " + this.autor + 
            "</p> <p> " + this.numPaginas + " páginas, " + largo + "</p>"
    }
}
