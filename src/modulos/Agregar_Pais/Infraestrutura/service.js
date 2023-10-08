import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import  PaisContext from "../Interfaz/contexts/contextoAplicacion";
const MySwal = withReactContent(Swal);

 

export async function PostsPais(pais) {
  try {
    let res = await fetch("http://localhost:4005/pais/agregarpais", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        pais: pais,
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

export  function DeleteReserva(id) {

 
  console.log("op",  PaisContext());
  
 Swal.fire({
   title: "Desea eliminar?",
   text: "Se eliminar el registro seleccionado!",
   icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Si",
 }).then((result) => {
   if (result.isConfirmed) {
     let res = fetch("http://localhost:4005/pais/eliminarpais", {
       headers: { "Content-Type": "application/json" },
       method: "DELETE",
       body: JSON.stringify({
         id: id,
       }),
     });
       let op  = res;
     console.log("res", op);
     if (res.status === 201) {
       console.log("Eliminado con exito");
       Swal.fire("Se elimino con Exito!");
       //location.reload(); //refresca la pagina pa borrar de la taal el registro es temporal
     } else {
       console.log("error al al eliminar ");
     }
   }
 }); 
}

///---

export async function PutPais(nombre,id) {
  try {
    let res = await fetch("http://localhost:4005/pais/actualizarpais", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        nombre: nombre,
        id: id,
      }),
    });
    await res.json();

    if (res.status === 201) {
      console.log("Enviadoo con exito");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Dato Modificado",
        showConfirmButton: false,
        timer: 1500,
      });
      //location.reload();
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
