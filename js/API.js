const url = "http://localhost:4000/clientes";

//PARA CREAR UN NUEVO REGISTRO EN LA API UTILIZAMOS EL METODO POST
export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "content-type": "application/json",
      },
    });
   
    window.location.href = "index.html";
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

//OBTIENE TODOS LOS CLIENTES DE LA API CON EL METODO GET

export const obtenerClientes = async () => {   

    try {
      
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
       
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

//ELIMINA UN CLIENTE POR SU ID

export function eliminarCliente(id) {
  try {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    console.log("eliminando", clienteId);
  } catch (error) {
    console.log(error);
  }
}

//EDITAR CLIENTE  

//OBTIENE UN CLIENTE POR SU ID

export const obtenerCliente = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`);
    const resultado = await respuesta.json();
    
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

//ACTUALIZA UN REGISTRO CON UN ID ESPECIFICO

export const editarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "content-type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};