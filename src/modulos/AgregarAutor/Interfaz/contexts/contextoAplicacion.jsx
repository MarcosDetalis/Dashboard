import { createContext, useEffect, useState } from "react";
import {
  agregarAutor,
  eliminarAtour,
  actualizarAutor,
} from "../../Infraestrutura/service";
export const ReservasContext = createContext();

const AplicacionContextProvider = (props) => {
  const [reservas, setReservas] = useState([]);
  const [reloadUsers,setReloadUsers] = useState(false);
 

  //Se hace la peticion a la api (Asi no es la manera de que se debe hacer)
  useEffect(() => {
    fetch("http://localhost:4005/aut/autor")
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

  //Los datos guardamos en la memoria local del navegador

  //    useEffect(() => {
  //     localStorage.setItem("reservas", JSON.stringify(reservas));
  //  });

  //tenemos una longitud de las peticiones
  const lingitudReserva = reservas.sort((a, b) => (a.name < b.name ? -1 : 10));

  //obtenemos los datos del modal AgregarM
  const Guardar_Autor = (Autor_nombretxt_id,
    Autor_paistxt_id,
      carrera) => {
    //Enviamos los parametros a una funcion que esta en service
    agregarAutor(Autor_nombretxt_id,
      Autor_paistxt_id,
   carrera
    );
    
    console.log("contex")

  };

  //Eliminamos los datos solo obteniendo el id del item del boton
  const Eliminar_Autor = (id) => {
    eliminarAtour(id);
  };
  //Obtenemos un objeto json (actualusu) lo cual llamamos sus claves
  const atualizar = (id, actualaut) => {
  
  console.log('actualizar',actualaut)


  actualizarAutor(
      id,
      actualaut.aut_nombre,
      actualaut.pais_idPais
    );
    setReloadUsers(true);
  };

  return (
    //Compartimos los datos a los demas  componentes
    <UsuarioContext.Provider
      value={{
        lingitudReserva,
        Guardar_Autor,
        Eliminar_Autor,
        atualizar,
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default AplicacionContextProvider;
