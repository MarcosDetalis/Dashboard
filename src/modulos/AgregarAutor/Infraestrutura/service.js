import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export async function agregarAutor(Autor_paistxt_id, // falta cambiar
Autor_nombretxt_id,) {
  try {
    let res = await fetch("http://localhost:4005/aut/agregarAutor", {  //https://apiser.onrender.com
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        pais_idPais: Autor_paistxt_id,
        aut_nombre: Autor_nombretxt_id,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Enviadoo con exito");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos Guardados",
        showConfirmButton: false,
        timer: 1500,
      });
      location.reload();
    } else {
      console.log("error al Agregar ");

      MySwal.fire({
        icon: "error",
        title: "Ocurrio un error",
        text: "Favor verificar los datos introducidos",
      });
    }
  } catch (err) {
    console.log(err);
  }
}

// para eliminar los datos del autor
export async function eliminarAtour(id) {

  Swal.fire({
    title: 'Desea eliminar?',
    text: "Se eliminar el registro seleccionado!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Se elimino con Exito!'
      )
      try {
        let res =  fetch("http://localhost:4005/aut/eliminarAtour", {
          headers: { "Content-Type": "application/json" },
          method: "DELETE",
          body: JSON.stringify({
            id: id,
          }),
        });
        res.json();
        if (res.status === 201) {
          console.log("Eliminado con exito");
          location.reload(); //refresca la pagina pa borrar de la taal el registro es temporal
        } else {
          console.log("error al al eliminar ");
        }
      } catch (err) {
        console.log(err);
      }



    }
  }) 
}

// para actualizar los datos del autor
export async function actualizarAutor(id,pais_idPais,aut_nombre) {
  try {
    let res = await fetch("http://localhost:4005/aut/actualizarAutor", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
      id:id,
      pais_idPais: pais_idPais,
      aut_nombre: aut_nombre,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Enviadoo con exito");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos Guardados",
        showConfirmButton: false,
        timer: 1500,
      });
      //location.reload();
    } else {
      console.log("error al enviar ");
      MySwal.fire({
        icon: "error",
        title: "Ocurrio un error",
        text: "Favor verificar los datos introducidos",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
