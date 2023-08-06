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
    let res = await fetch("https://apiser.onrender.com/usu/agregarusu", {
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

export async function DeleteReserva(id) {
  try {
    let res = await fetch("http://localhost:4005/api/ingresar", {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Eliminado con exito");
      location.reload();
    } else {
      console.log("error al al eliminar ");
    }
  } catch (err) {
    console.log(err);
  }
}

///---

export async function PutReservas(alumno, fecha, estado, id) {
  try {
    let res = await fetch("http://localhost:4005/api/update", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        alumno: alumno,
        fecha: fecha,
        estado: estado,
        id: id,
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
