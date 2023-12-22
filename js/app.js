//Trabajando en el index.html para insertar los clientes en el html

import { obtenerClientes, eliminarCliente } from "./API.js";

(function () {
 
  const listadoClientes = document.querySelector("#listado-clientes");
  document.addEventListener("DOMContentLoaded", mostrarClientes);

  listadoClientes.addEventListener("click", confirmarEliminar);

  async function mostrarClientes() {
    const clientes = await obtenerClientes();
    clientes.forEach((cliente) => {

      const { id, nombre, email, telefono, empresa } = cliente;
      
      //insertar en el html
      const row = document.createElement("tr");
      row.classList.add("hover:bg-gray-100", "border-gray-200", "border-t");
      row.innerHTML = `
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
        <p class="text-gray-700">${telefono}</p>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
        <p class="text-gray-600">${empresa}</p>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
    </td>
    `;
      listadoClientes.appendChild(row);
    });
  }

  //ELIMINAR CLIENTE
  function confirmarEliminar(e) {
    if (e.target.classList.contains("eliminar")) { //si el elemento contiene la clase eliminar
      const clienteId = parseInt(e.target.dataset.cliente); //obtiene el id del cliente
      const confirmar = confirm("Deseas eliminar este cliente?");

      if (confirmar) {
        //llamado a la funcion de eliminar
        eliminarCliente(clienteId)
      }
    }
  }
})();
