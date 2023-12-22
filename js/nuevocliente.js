import { nuevoCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";


(function () {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value; //value toma el valor que uno scribe en el  input
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa
    };
    //validar los campos
    if (validar(cliente)) {
      //mostrar mensaje
      mostrarAlerta("todos los campos son obligatorios");
      return;
    }

    //agregar un cliente
    nuevoCliente(cliente)
  }


})();
