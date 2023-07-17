import { useState } from "react";
 
 
export default function Dominio(initialState) {
  const [inputs, setValues] = useState(initialState);

  const [Autor_error, setalumnoid] = useState({}); // Estado para se enviado como mensaje a la interfaz ( el {} es para manejar un tipo de object )
  const [titulo_error, settitulo_error] = useState({}); 
  const [descripcion_error, setdescripcion_error] = useState({});
  const [cantidad_error, setcantidad_error] = useState({}); 
  const getErrors = () => {

    let aux = 0;

    if (inputs.autortxt_id.trim() !== "") {
      setalumnoid({ ...Autor_error, msm_error: " " });
      aux = 0;
    } else {
      setalumnoid({
        ...Autor_error,
        msm_error: "El autor es un campo obligatorio",
      });
      aux =1;
    }

  if (inputs.titulotxt_id.trim() !== "") {
    settitulo_error({ ...titulo_error, msm_error: " " });
    aux = 0;
  } else {
    settitulo_error({
      ...titulo_error,
      msm_error: "El titulo es un campo obligatorio",
    });
    aux = 1;
  }
 
 if (inputs.descripciontxt_id.trim() !== "") {
   setdescripcion_error({ ...descripcion_error, msm_error: " " });
   aux = 0;
 } else {
   setdescripcion_error({
     ...descripcion_error,
     msm_error: "La descripcion es un campo obligatorio",
   });
   aux = 1;
 }
 
     if (inputs.cantidadtxt_id.trim() !== "") {
       setcantidad_error({ ...cantidad_error, msm_error: " " });
       aux = 0;
     } else {
       setcantidad_error({
         ...cantidad_error,
         msm_error: "La cantidad es un campo obligatorio",
       });
       aux = 1;
     }
 

    console.log("valor",aux);

 
  };

  return [
    //-> Se obtiene un evento lo cual identificamos los datos que se ingresan de la interfaz (inputs)
    inputs,
    function (event) {
      setValues({
        ...inputs,
        [event.target.id]: event.target.value,
      });
    },
    //-> Mandamos funciones y estados a la interfaz tener en cuenta que cada vez que se crea un estado que tendra
    //que interactuar con la interfaz se tendra que incluir en este apartado para ser utlizado en la interfaz
    getErrors,
    Autor_error,
    titulo_error,
    descripcion_error,
    cantidad_error,
  ];
}
