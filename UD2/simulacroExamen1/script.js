class Pedido {
    linea = [];

    agrearProducto(producto, cantidad){
        this.linea.push(producto, cantidad);
    }
}

class Producto{
    constructor(id, nombre, precio, disponible){
        this.id = id;
        if(nombre == null) throw new RangeError("El nombre no puede estar vacío");
        this.nombre = nombre;
        if(precio < 0 || !isFinite(precio)) throw new RangeError("El precio no puede ser menor a 0");
        this.precio = precio;
        this.disponible = disponible;
    }

    
}

const prod1 = new Producto(1, "Café", 1.50, true);
const prod2 = new Producto(2, "Té", 1.80, true);
const prod3 = new Producto(3, "Zumo", 2.50, true);
const prod4 = new Producto(4, "Tostada", 2.20, true);

let catalogo = new Map();
catalogo.set(prod1.id, prod1);
catalogo.set(prod2.id, prod2);
catalogo.set(prod3.id, prod3);
catalogo.set(prod4.id, prod4);