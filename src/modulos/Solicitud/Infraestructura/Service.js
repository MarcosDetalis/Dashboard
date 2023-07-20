export async function getSolicitudes() {
    const url = "http://localhost:4005/soli/solicitudes";
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  }

// no necesariamente tiene q llamarse como en la DB. ejemplo:id
  export async function updateReservas(id) {
    try {
      let res = await fetch("http://localhost:4005/soli/update", {
        headers: { "Content-Type": "application/json" },
        method: "UPDATE",
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


  export async function anularReservas(id) {
    try {
      let res = await fetch("http://localhost:4005/soli/anular", {
        headers: { "Content-Type": "application/json" },
        method: "UPDATE",
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

  export async function pendienteReservas(id) {
    try {
      let res = await fetch("http://localhost:4005/soli/pendiente", {
        headers: { "Content-Type": "application/json" },
        method: "UPDATE",
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

  export async function eliminarReserva(id) {
    try {
      let res = await fetch("http://localhost:4005/soli/eliminar", {
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




  