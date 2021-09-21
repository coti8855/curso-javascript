
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

