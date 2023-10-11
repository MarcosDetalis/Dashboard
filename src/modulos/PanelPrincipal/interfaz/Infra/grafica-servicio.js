export async function getSolicitudes() {
  const url = "https://apiser.onrender.com/soli/Solicitudes";
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}

export async function cantidadpendiente() {
    const url = "https://apiser.onrender.com/soli/Solicitudes";
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  }