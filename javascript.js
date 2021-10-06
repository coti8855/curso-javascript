
function convertirSegundos (minutos) {
	 let segundos = minutos * 60
	 console.log ("el resultado en segundos es" + segundos)
}
 let minutos = parseInt (prompt ("ingrese cantidad de minutos"))
 convertirSegundos (minutos)




 let animalesGallinas = parseInt (prompt ("ingrese cuantas gallinas hay"))
 let patasGallinas = animalesGallinas *2
 let animalesVacas = parseInt (prompt ("ingrese cuantas vacas hay"))
 let animalesCerdos = parseInt (prompt ("ingrese cuantos cerdos hay"))
 let patasVacas = animalesVacas *4
 let patasCerdos = animalesCerdos *4
 console.log ("hay un total de" + (patasVacas + patasGallinas + patasCerdos) )

let edadPelicula = parseInt (prompt ("Ingrese su edad")) 
let acompañadoTutor = prompt ("Va acompañado de un tutor")

if (edadPelicula >= 13||edadPelicula < 13 && acompañadoTutor == "si"||acompañadoTutor == "Si" ){
	console.log ("puede ver pelicula")
}
else if (edadPelicula < 13 && acompañadoTutor == "No"||acompañadoTutor == "no" ){
  console.log ("no puede ver pelicula")
}


let costoProducto = parseInt (prompt ("Ingrese el costo del producto"))
console.log ("costo producto " + costoProducto)
if (costoProducto >= 2000){
	let cantidadCuotas = parseInt (prompt ("Realizar en 12 o 6 cuotas?"))
	if (cantidadCuotas == 12 || cantidadCuotas == 6) {
		console.log ("Se paga en cuotas de " + costoProducto / cantidadCuotas)
	}
	else{
		console.log ("No es valido")
	}
}
else if (costoProducto < 2000){
	 let conSinCuotas = prompt ("Desea realizar el pago en 6 cuotas?")
	 if (conSinCuotas == "no" || conSinCuotas == "No"){
	 	console.log ("pago sin cuotas")
	 }
	 else if (conSinCuotas == "si"||conSinCuotas == "Si"){
	 	console.log ("Se paga en cuotas de " + costoProducto/6)
	 }
	 else{
	  console.log ("No es valido")
	 }
}

let totalCompra = parseInt (prompt ("Ingrese el valor total de la compra"));
let costoEnvio = 500;
const descuentoEfectivo = a => a-a* 0.2 ;
const suma = (a,b) => a+b;
let envioSiNo = prompt ("Envio si/no");
let efectivoSiNo = prompt ("Realizar pago en efectivo si/no")
 
if (efectivoSiNo == "si"|| efectivoSiNo == "Si" && envioSiNo == "si" || envioSiNo == "Si"){
	let sumaTotal = suma (costoEnvio, descuentoEfectivo (totalCompra))
	console.log ("Precio final " + sumaTotal)
}
else if (efectivoSiNo == "si"|| efectivoSiNo == "Si" && envioSiNo == "no" || envioSiNo == "No"){
	let sumaTotal2 = suma (descuentoEfectivo (totalCompra),0)
	console.log ("Precio final " + sumaTotal2)
}
 else if (efectivoSiNo == "No"|| efectivoSiNo == "no" && envioSiNo == "no" || envioSiNo == "No"){
 	let sumaTotal3 = suma (0, totalCompra)
 	console.log ("Precio final " + sumaTotal3)
 }
 else if (efectivoSiNo == "no"|| efectivoSiNo == "No" && envioSiNo == "si" || envioSiNo == "Si"){
	let sumaTotal4 = suma (costoEnvio, totalCompra)
	console.log ("Precio final " + sumaTotal4)
}

let cantidadProductos = parseInt (prompt ("Ingrese cantidad de productos del carrito"))
console.log (cantidadProductos)
for (var i = 0; i < cantidadProductos; i++) {
	 let precioProductos = parseInt (prompt ("ingrese precio de los productos"))
	 console.log (precioProductos + precioProductos)
	 
}

let precioProduc = parseInt (prompt ("ingrese un numero"))
let elEnvio = prompt ("Desea realizar envio? Si/No")
let plataEnvio = 500;
function sumatoria (envio){
if (envio == "Si" || "si"){
	return true
}
else{
	return false

}
}

if (sumatoria (elEnvio)){
	let resultado = precioProduc + plataEnvio;
	console.log (resultado)
}
else {
		console.log (precioProduc)
}





let numero = parseInt (prompt ("ingresar codigo"))
let usuario = prompt ("ingrese usuario")

function validarUsuario (usuario){
  let usuarioRegistrado = "Pepe"
  if (usuario == usuarioRegistrado){
  	return true;
  }else{
  	return false;
  }
}
function validarCodigo (usuario){
  let codigoRegistrado = "123"
  if (numero == codigoRegistrado){
  	return true;
  }else{
  	return false;
  }
}
function login (usuario, contra){
	if(usuario== true && contra ==true){
		return true
	}
}

if (login(validarUsuario (usuario)), validarCodigo(numero)){
	console.log ("Bienvenido al sistema")
}



