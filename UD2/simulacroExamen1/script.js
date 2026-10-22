class Producto{
    constructor(id, nombre, precio, disponible){
        this.id = id;
        if(nombre == null) throw new Error("El nombre no puede estar vacío");
        this.nombre = nombre;
        if(precio < 0 || !isFinite(precio)) throw new Error("El precio no puede ser menor a 0");
        this.precio = precio;
        this.disponible = disponible;
    }

    
}

class Pedido {
    constructor(){
        this.lineas = [];
    }

    agrearProducto(producto, cantidad){
        if (!producto.disponible) throw new Error ("El producto no está disponible");
        if (cantidad <= 0 || !isInteger(cantidad)) throw new Error ("El precio debe ser un entero positivo");
        
        //Bucle que accede a todos los elementos actuales de "lineas" y comprueba si un producto está o no en la lista.
        const existe = this.lineas.find(linea => linea.producto.id === producto.id)
        if (existe) {
            cantidad.cantidad += cantidad;
        } else {
            this.lineas.push({producto, cantidad});
        }
        
    }

    calcularSubtotal(){
        subtotal = 0;
        lineas.forEach(element => {
            subtotal += element.cantidad * element.producto.precio;
            console.log(subtotal)
        });
    }

    calcularTotal(){
        let subtotal = this.calcularSubtotal;
        if (subtotal > 20){
            subtotal *= 0.90;
        }
        return subtotal.toFixed(2);
    }

    convertirJSON(pedido){
        return JSON.stringify(pedido);
    }
}

let catalogo = [];
catalogo = [
    new Producto(1, "Café", 1.50, true),
    new Producto(2, "Té", 1.80, true),
    new Producto(3, "Zumo", 2.50, true),
    new Producto(4, "Tostada", 2.20, true)
]