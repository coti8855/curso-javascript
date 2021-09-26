
var variableuno = prompt ("Ingresar numero");
var variabledos = prompt ("Ingresar otro numero");
var suma = 120 + parseInt ( variableuno) + parseInt ( variabledos );
console.log ( suma );
var variabletres = prompt ("Ingrese su nombre");
console.log (variabletres);

var edad = prompt ("Ingrese su edad");
edad= parseInt (edad);

if (edad >= 18) {
  console.log ("Mayor de edad " + edad);
}
 else {
 	console.log ("Menor de edad " + edad );
 }

 var codigo = prompt ("ingrese el codigo");
 codigo= parseInt (codigo);

if (codigo == 555 || codigo == 444) {
	console.log ("codigo correcto");
}
else if (codigo <=99 ){
	console.log ("falta un digito");
}
else if (codigo > 999){
	console.log ("hay un digito de mas");
}
else{
	console.log ("codigo incorrecto");
}
	var i=0;

for (var i = 0 ; i < 5; i++) {
	let nombreUsuario = prompt ("Ingrese su nombre completo");
	let voto = prompt ("ingrese su voto");
	console.log (nombreUsuario)
	console.log (voto)
  }

	let nombreUsuario3 = prompt ("ingrse su nombre de nuevo");
do{
  var codigoDeEntrada = prompt ("ingrese su codigo");
  var nombreUsuario2 = prompt ("ingrse su nombre de nuevo");

  console.log (nombreUsuario2);
  console.log (codigoDeEntrada);
} while (nombreUsuario2 != "Salir")

