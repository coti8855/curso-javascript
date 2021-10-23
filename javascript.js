


function validar2 (){
  let password = document.getElementById ("pass")
  if ( password.value == "123"){
    let parrafo = document.createElement ("p")
    parrafo.innerHTML = "bienvenido al sistema"
    parrafo.style.color = "red"
    parrafo.style.textAlign = "center"
    console.log (parrafo)
    let mensaje = document.getElementById ("mensaje")
    mensaje.appendChild ( parrafo )
  }
} 

function agregarLista(){


    let lista = document.getElementById("lista");
    let producto = document.getElementById("producto").value;

    let li = document.createElement("li");
    li.innerHTML = producto;

    lista.appendChild(li);


}


function eliminarLista(){

    let lista = document.getElementById("lista");
    lista.removeChild( lista.LastChild);


}

function carrito(){
  let lista2 = document.getElementById ("lista2")
  let producto2 = document.getElementById ("producto2").value;
  let li2 = document.createElement ("li")
  li2.innerHTML = ("has agregado " + producto2 + " al carrito")
  lista2.appendChild(li2)
}

function stock (){
  let parrafo2 = document.getElementById("parrafo2")
  let cantidad = document.getElementById ("cantidad").value
  if (cantidad == "10" ){
    let parrafoNuevo = document.createElement ("p")
    parrafoNuevo.innerHTML = ("no hay suficiente stock")
    parrafo2.appendChild (parrafoNuevo)

  } else{
    let parrafoNuevo2 = document.createElement ("p")
    parrafoNuevo2.innerHTML = ("hay suficiente stock")
    parrafo2.appendChild (parrafoNuevo2)

  }

}