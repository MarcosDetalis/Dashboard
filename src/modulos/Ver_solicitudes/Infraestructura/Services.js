export async function getdatos() {
    const url = "http://localhost:4005/ping";
    const respuesta = await fetch(url);
      const datos = await respuesta.json();
    return datos;
  }
