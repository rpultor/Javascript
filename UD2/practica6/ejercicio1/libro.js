const libro = {
    constructor(titulo, autor, numPaginas){
        if (titulo != "") {this.titulo = titulo} else {this.titulo = "Lorem Ipsum"};
        if (autor != "") {this.autor = autor} else {this.autor = "Lorem Ipsum"};
        if (numPaginas > 0) {this.numPaginas = numPaginas} else {this.numPaginas = 1};
    },

    describir() {
        document.body.innerHTML += 
            "Titulo: " + titulo + ", Autor: " + autor + ", Nº de páginas: " + numPaginas + "."
    },

    esExtenso() {
        return numPaginas >= 300;
    }
}