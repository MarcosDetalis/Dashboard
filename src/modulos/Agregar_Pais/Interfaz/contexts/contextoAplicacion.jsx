import { createContext, useEffect, useState } from "react";
import {
  PostsPais,
  DeleteReserva,
  PutPais,
 
} from "../../Infraestrutura/service";
export const PaisContext = createContext();

const AplicacionContextProvider = (props) => {
  
  const [reservas, setReservas] = useState([]);
const [reloadDatos, setReloadDatos] = useState(false);
  // useEffect(() => {
  //   setReservas(JSON.parse(localStorage.getItem("reservas")));
  // }, []);

  //Se hace la peticion a la api (Asi no es la manera de que se debe hacer)
  useEffect(() => {
    fetch("http://localhost:4005/pais/paises")
      .then((response) => response.json())
      .then((res) => {
       
        if (res === 0) {
          setReservas([{ id_reserva: "sin nada" }]);
        } else {
          setReservas(res);
        }
        setReloadDatos(false);
      });
  }, [reloadDatos]);

 

 

  //Los datos guardamos en la memoria local del navegador

  //    useEffect(() => {
  //     localStorage.setItem("reservas", JSON.stringify(reservas));
  //  });

  //tenemos una longitud de las peticiones
  const lingitudReserva = reservas.sort((a, b) => (a.name < b.name ? -1 : 10));

  //obtenemos los datos del modal AgregarM
  const AgregarPais = (nombre) => {
    //Enviamos los parametros a una funcion que esta en service
    PostsPais(nombre);
     setReloadDatos(true);
  };

  //Eliminamos los datos solo obteniendo el id del item del boton
  const EliminarReservas =  (id) => {
    DeleteReserva(id);
    setReloadDatos(true);
   
  };
      
     
     
     //Obtenemos un objeto json (updateundato) lo cual llamamos sus claves
     const atualizar = (id, updateundato) => {
       PutPais(updateundato.nombre, id);
       setReloadDatos(true);
     };

  return (
    //Compartimos los datos a los demas  componentes
    <PaisContext.Provider
      value={{
        lingitudReserva,
        AgregarPais,
        EliminarReservas,
        atualizar,
         
      }}
    >
      {props.children}
    </PaisContext.Provider>
  );
};

export default AplicacionContextProvider;
