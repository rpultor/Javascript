const catalogo = {
    constructor(libro){
        this.libro.push(libro);
    },

    addLibro(libro){
        this.libro.push(libro);
    },

    deleteLibro(titulo){
        libro.array.forEach(select => {
            if (select.titulo === titulo) this.splice(select)
        });
    },

    checkLibro(titulo){
        libro.array.forEach(select => {
            if (select.titulo === titulo) {this.describir()} else {document.body.innerHTML += "Ese libro no existe"}
        });
    },

    listLibro(){
        libro.array.forEach(select => {
            this.checkLibro
        });
    }
}