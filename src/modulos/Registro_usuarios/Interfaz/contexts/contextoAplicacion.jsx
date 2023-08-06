import { createContext, useEffect, useState } from "react";
import {
  Agregar_usuario,
  eliminarusu,
  PutReservas,
} from "../../Infraestrutura/service";
export const UsuarioContext = createContext();

const AplicacionContextProvider = (props) => {
  const [reservas, setReservas] = useState([]);

  // useEffect(() => {
  //   setReservas(JSON.parse(localStorage.getItem("reservas")));
  // }, []);

  //Se hace la peticion a la api (Asi no es la manera de que se debe hacer)
  useEffect(() => {
    fetch("https://apiser.onrender.com/usu/usuarios")
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        if (res === 0) {
          setReservas([{ id_reserva: "sin nada" }]);
        } else {
          setReservas(res);
        }
      });
  }, []);

  console.log("sindate", reservas);

  //Los datos guardamos en la memoria local del navegador

  //    useEffect(() => {
  //     localStorage.setItem("reservas", JSON.stringify(reservas));
  //  });

  //tenemos una longitud de las peticiones
  const lingitudReserva = reservas.sort((a, b) => (a.name < b.name ? -1 : 10));

  //obtenemos los datos del modal AgregarM
  const Guardar_Usuario = (Nombretxt_id,
      Apellidotxt_id,
      Correotxt_id,
      Contrasenatxt_id,
      telefonotxt_id,
      carrera) => {
    //Enviamos los parametros a una funcion que esta en service
    Agregar_usuario(Nombretxt_id,
   Apellidotxt_id,
   Correotxt_id,
   Contrasenatxt_id,
   telefonotxt_id,
   carrera
    );
    
    console.log("contex")

  };

  //Eliminamos los datos solo obteniendo el id del item del boton
  const Eliminar_Usuario = (id) => {
    eliminarusu(id);
  };
  //Obtenemos un objeto json (updateundato) lo cual llamamos sus claves
  const atualizar = (id, updateundato) => {
    PutReservas(
      updateundato.nombre,
      updateundato.fecha,
      updateundato.estado,
      id
    );
  };

  return (
    //Compartimos los datos a los demas  componentes
    <UsuarioContext.Provider
      value={{
        lingitudReserva,
        Guardar_Usuario,
        Eliminar_Usuario,
        atualizar,
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default AplicacionContextProvider;
