import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function () {

    //Campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");
    const idInput = document.querySelector("#id");


  document.addEventListener("DOMContentLoaded", async () => {
    const parametrosURL = new URLSearchParams(window.location.search); //obtiene los parametros de la url
    const idCliente = parseInt(parametrosURL.get("id")); //obtiene el id del cliente
    const cliente = await obtenerCliente(idCliente); //obtiene el cliente con el id

    mostrarCliente(cliente); //muestra los datos del cliente en el formulario

    //submit al formulario
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);

  });

  function mostrarCliente(cliente){
    const {nombre, email, telefono, empresa, id} = cliente;

    //llenar los campos del formulario con los datos del cliente
    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;


  }

  function validarCliente(e) {
    e.preventDefault();

    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: idInput.value
    };

    console.log(cliente);

    if (validar(cliente)) {
      //mostrar mensaje
      mostrarAlerta("todos los campos son obligatorios");
      return;
    }

    //Reescribe el objeto
    editarCliente(cliente)
  }

})();
