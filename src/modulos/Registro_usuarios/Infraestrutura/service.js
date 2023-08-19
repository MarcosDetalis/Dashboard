import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export async function Agregar_usuario(Nombretxt_id,
   Apellidotxt_id,
   Correotxt_id,
   Contrasenatxt_id,
   telefonotxt_id,
   carrera) {
  try {
    let res = await fetch("http://localhost:4005/usu/agregarusu", {  //https://apiser.onrender.com
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        usu_nombre: Nombretxt_id,
        usu_apellido: Apellidotxt_id,
        usu_correo: Correotxt_id,
        usu_carrera: carrera,
        usu_telefono: telefonotxt_id,
        contrasena: Contrasenatxt_id,
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
      console.log("error al AgregAR ");

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


export async function eliminarusu(id) {

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
        let res =  fetch("http://localhost:4005/usu/eliminarusu", {
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


export async function actualizarusu(id,usu_nombre,usu_apellido,usu_telefono,contrasena) {
  try {
    let res = await fetch("http://localhost:4005/usu/actualizarusu", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
      id:id,
      usu_nombre: usu_nombre,
      usu_apellido: usu_apellido,
      usu_telefono: usu_telefono ,
      contrasena: contrasena,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Enviadoo con exito");
    } else {
      console.log("error al enviar ");
    }
  } catch (err) {
    console.log(err);
  }
}
