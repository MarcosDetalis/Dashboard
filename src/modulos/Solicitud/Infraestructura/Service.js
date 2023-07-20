export async function getdatos() {
    const url = "http://localhost:4005/ping";
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  }

// no necesariamente tiene q llarse como en la DB. ejemplo:id
  export async function DeleteReserva(id) {
    try {
      let res = await fetch("http://localhost:4005/api/eliminar", {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
      });
      await res.json();
      if (res.status === 201) {
        console.log("Eliminado con exito");
        location.reload();//refresca la pagina pa borrar de la taal el registro es temporal
      } else {
        console.log("error al al eliminar ");
      }
    } catch (err) {
      console.log(err);
    }
  }