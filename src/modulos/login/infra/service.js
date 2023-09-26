import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export async function Postslogin(correo, pass) {
  try {
    let res = await fetch("http://localhost:4005/login/iniciarsesion", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        correo: correo,
        pass: pass,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Acceso Correcto");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Acceso Correcto",
        showConfirmButton: false,
        timer: 1500,
      });
      sessionStorage.setItem("reservas", true);
      sessionStorage.setItem("roles", 'admin');
      location.href = "/Panel";
    } else {
      console.log("Al logearse");

      MySwal.fire({
        icon: "error",
        title: "Accesos Denegado",
        text: "Favor verificar los datos introducidos",
      });
      sessionStorage.removeItem("reservas");
      sessionStorage.removeItem("roles");
        // localStorage.setItem("reservas", " ");
    }
  } catch (err) {
    console.log(err);
  }
}