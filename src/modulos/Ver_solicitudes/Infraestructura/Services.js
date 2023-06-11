export async function getdatos() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const respuesta = await fetch(url);
    const datos = await respuesta.json();
  return datos;
}
