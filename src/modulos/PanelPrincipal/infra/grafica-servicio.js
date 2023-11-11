export async function getSolicitudes() {
    const url = "https://apiser.onrender.com/soli/Solicitudes";
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  }
  
  // servcio pendiente
  export async function cantidadPendiente() {
      const url = "http://localhost:4005/cantidad/cantipendiente";
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos;
    }
    