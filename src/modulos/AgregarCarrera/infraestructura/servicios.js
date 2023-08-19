import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export async function Agregar_carrera(inputcarrera) {
 try {
   let res = await fetch("http://localhost:4005/car/agregacarrera", {  //https://apiser.onrender.com
     headers: { "Content-Type": "application/json" },
     method: "POST",
     body: JSON.stringify({
      car_nombre:inputcarrera
      
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






export async function PostsCarrera(car_nombre) {
  try {
    let res = await fetch("http://localhost:4005/car/agregarCarrera", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        car_nombre: car_nombre
       
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


export async function DeleteCarrera(idCarrera) {
  
  try {
    let res = await fetch("http://localhost:4005/car/eliminarcarrera", {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify({
        idCarrera: idCarrera,
      }),
    });
    await res.json();
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

///---

export async function PutReservas(idcarrare,nombrecarrera) {
  try {
    let res = await fetch("http://localhost:4005/car/updatecarrera", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        nombrecarrera: nombrecarrera,
        idcarrera: idcarrare,
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
