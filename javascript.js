/* DESAFIO numero 5*/

class Productos {
  constructor ( nombre, stock, valor ){
  this.nombre = nombre
  this.stock = stock
  this.valor = valor

 }
  nombreProduc() {
  console.log ("El producto es " + this.nombre)
 }
 hayStock (){
  return this.stock;
 }
 restaDelStock (){
  return this.stock = this.stock - 1
 }
 noHayStock (){
  if (this.stock == 0){
    return true
  }else {
    return false
  }
 }
 }

 let producto1 = new Productos ("fideos", 4, 110);
 let producto2 = new Productos ("arroz", 29, 80);
 producto1.nombreProduc();
 producto2.nombreProduc();
 console.log (producto1.hayStock()) 
 console.log (producto1.restaDelStock()) 
 console.log (producto1.restaDelStock())
 console.log (producto1.restaDelStock())
 console.log (producto1.restaDelStock())
 console.log (producto1.restaDelStock())
 console.log (producto1.restaDelStock())

if (producto1.noHayStock()){
    console.log ("no hay stock")
   }


/*desafio 6*/
class nombreProductos{
  constructor (nombre, productos, precio, efectivo){
   this.nombre = nombre;
   this.productos = productos;
   this.precio = parseInt (precio);
   this.efectivo = efectivo;
  }
}
let arregloProductos = [];

  let productos = parseInt (prompt ("ingrese cantidad de productos"))
  let efectivo = prompt ("pago efectivo")

for( let i = 0; i < productos ; i++){
  let nombre = prompt ("ingrese nombre del articulo")
  let precio = parseInt (prompt ("Ingrese precio del producto"))
  arregloProductos.push(new nombreProductos (nombre, productos, precio, efectivo));
}

arregloProductos.sort(  function (precio3,precio1  ) {

            if (precio3.precio > precio1.precio) { 
              return 1;
            } else if (precio3.precio < precio1.precio) {
              return -1;
            } else {
                return 0;
            }

          }); console.log(arregloProductos); 
              



