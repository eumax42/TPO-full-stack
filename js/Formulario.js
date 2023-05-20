
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var fechaIngreso = document.getElementById("fechaIngreso");
var fechaSalida = document.getElementById("fechaSalida");
var comentarios = document.getElementById("comentarios");
var error = document.getElementById("error");
error.style.color = "red";


function enviarFormulario(){
    console.log("Enviando formulario...");

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }

    if(email.value === null || email.value === ""){
        mensajesError.push("Ingresa tu email");
    }

    if(fechaIngreso.value === null || fechaIngreso.value === ""){
        mensajesError.push("Fecha de ingreso");
    }

    if(fechaSalida.value === null || fechaSalida.value === ""){
        mensajesError.push("Fecha de Salida");
    }

    error.innerHTML = mensajesError.join(", ");

    return false;

}   