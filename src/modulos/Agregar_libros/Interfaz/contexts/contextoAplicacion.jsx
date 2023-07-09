import { createContext, useEffect, useState } from "react";
import { PostsReservas, DeleteReserva, PutReservas } from "../../Infraestrutura/service";
export const ReservasContext = createContext();

const AplicacionContextProvider = (props) => {
  const [reservas, setReservas] = useState([]);
 

  
  // useEffect(() => {
  //   setReservas(JSON.parse(localStorage.getItem("reservas")));
  // }, []);

  //Se hace la peticion a la api (Asi no es la manera de que se debe hacer)
  useEffect(() => {
    fetch("http://localhost:4005/ping")
      .then((response) => response.json())
      .then((res) => {
        console.log("res",res)
        if (res ===0) {
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
  const addReservas = (nombre, fecha, estado) => {
    //Enviamos los parametros a una funcion que esta en service
    PostsReservas(nombre, fecha, estado);
  };

  //Eliminamos los datos solo obteniendo el id del item del boton
  const EliminarReservas = (id) => {
 
      
    DeleteReserva(id);
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
    <ReservasContext.Provider
      value={{
        lingitudReserva,
        addReservas,
        EliminarReservas,
        atualizar,
      }}
    >
      {props.children}
    </ReservasContext.Provider>
  );
};

export default AplicacionContextProvider;
