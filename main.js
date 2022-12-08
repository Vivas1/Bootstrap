/*var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("Apellido");
var correo = document.getElementById("Correo");
debugger;
//eventListener para detectar cuando hace click en boton resumen
var ticketsResumen = document.getElementById("Resumen");
ticketsResumen.addEventListener("click", precioTicket);

//eventListener para detectar cuando hace click en boton borrar
var ticketsBorrar = document.getElementById("Borrar");
ticketsBorrar.addEventListener("click", borrarFormulario);

//eventListener para detectar cuando hace click en boton borrar
var ticketsQuantity = document.getElementById("pepeCantidad");
ticketsQuantity.addEventListener("click", actualizarCantidad);

//eventListener para detectar cuando hace click en boton borrar
var ticketsCategory = document.getElementById("Categoria");
ticketsQuantity.addEventListener("click", calcularDescuento);

//eventListener para detectar cuando hace click en boton borrar
var descuentoEstudiante = document.getElementById("Estudiante");
descuentoEstudiante.addEventListener("click", actualizarCategoria);
var descuentoTrainee = document.getElementById("Trainee");
descuentoTrainee.addEventListener("click", actualizarCategoria);
var descuentoJunior = document.getElementById("Junior");
descuentoJunior.addEventListener("click", actualizarCategoria);

function precioTicket(event) {
  console.log("precioTicket", event);
}

function borrarFormulario(event) {
  console.log("borrarFormulario", event);
}

function actualizarCantidad(event) {
  console.log("actualizarCantidad", event);
}

function calcularDescuento(event) {
  console.log("calcularDescuento", event);
}

function actualizarCategoria(event) {
  console.log("actualizarCategoria", event);
}
*/

function borrarFormulario() {
  debugger;
  document.getElementById("formularioTickets").reset();
}

function hacerCalculos() {
  debugger;
  var pepeCantidad = document.getElementById("pepeCantidad");
  document.getElementById("montoTotal").innerText =
    pepeCantidad * 500 + " pesos";
  console.log("Entro aca", pepeCantidad * 500);
}
