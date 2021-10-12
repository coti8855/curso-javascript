
/*desafio 6*/
class nombreProductos{
  constructor (nombre, productos, precio, efectivo){
   this.nombre = nombre;
   this.productos = productos;
   this.precio = precio;
   this.efectivo = efectivo;
  }
}
let arregloProductos = [];
let sumaProductos = []

  let productos = parseInt (prompt ("ingrese cantidad de productos"))
  let efectivo = prompt ("pago efectivo")

for( let i = 0; i < productos ; i++){
  let nombre = prompt ("ingrese nombre del articulo")
  let precio = parseInt (prompt ("Ingrese precio del producto"))
  let suma = precio
  sumaProductos.push (precio)
  arregloProductos.push(new nombreProductos (nombre, productos, precio, efectivo));
}


console.log (arregloProductos)
console.log (sumaProductos)
