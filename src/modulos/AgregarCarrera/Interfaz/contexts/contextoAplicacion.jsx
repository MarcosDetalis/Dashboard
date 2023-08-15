import { createContext, useEffect, useState } from "react";
import {
  PostsCarrera ,
  PutReservas
} from '../../infraestructura/servicios.js';
export const ReservasContext = createContext();

const AplicacionContextProvider = (props) => {
  const [reservas, setReservas] = useState([]);
   const [reloadUsers, setReloadUsers] = useState(false);
  // useEffect(() => {
  //   setReservas(JSON.parse(localStorage.getItem("reservas")));
  // }, []);

  //Se hace la peticion a la api (Asi no es la manera de que se debe hacer)
  useEffect(() => {
    fetch("http://localhost:4005/car/carreras")
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        if (res === 0) {
          setReservas([{ id_reserva: "sin nada" }]);
        } else {
          setReservas(res);
        }
      });
    setReloadUsers(false);
  }, [reloadUsers]);

  console.log("sindate", reservas);

  //tenemos una longitud de las peticiones
  const lingitudReserva = reservas.sort((a, b) => (a.name < b.name ? -1 : 10));

  //obtenemos los datos del modal AgregarM
  const addCarrera = (nombre) => {
    //Enviamos los parametros a una funcion que esta en service
    PostsCarrera(nombre);
  };

  //Eliminamos los datos solo obteniendo el id del item del boton
  const EliminarReservas = (id) => {
    DeleteReserva(id);
  };
  //Obtenemos un objeto json (updateundato) lo cual llamamos sus claves
  const atualizar = (id, updateundato) => {
    PutReservas(
      id, updateundato
    );
     setReloadUsers(true);
  };

  return (
    //Compartimos los datos a los demas  componentes
    <ReservasContext.Provider
      value={{
        lingitudReserva,
        addCarrera,
        EliminarReservas,
        atualizar,
      }}
    >
      {props.children}
    </ReservasContext.Provider>
  );
};

export default AplicacionContextProvider;
