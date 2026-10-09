class Libro {
    constructor(titulo, autor, numPaginas){
        if (titulo != "") {this.titulo = titulo} else {this.titulo = "Lorem Ipsum"};
        if (autor != "") {this.autor = autor} else {this.autor = "Lorem Ipsum"};
        if (numPaginas > 0) {this.numPaginas = numPaginas} else {this.numPaginas = 1};
    }

    describir() {
        document.body.innerHTML += 
            "<h1>" + this.titulo + "</h1> <p> " + this.autor + 
            "</p> <p> " + this.numPaginas + "</p>"
    }

    esExtenso() {
        return numPaginas >= 300;
    }
}
