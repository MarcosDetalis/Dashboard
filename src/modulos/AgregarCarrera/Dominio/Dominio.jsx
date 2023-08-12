import { useState } from "react";
 
 
export default function Dominio(initialState) {
  const [inputs, setValues] = useState(initialState);

  const [carrera_error, setcarreraid] = useState({}); // Estado para se enviado como mensaje a la interfaz ( el {} es para manejar un tipo de object )
  const [nombrecarrera_error, setnombrecarrera_error] = useState({}); 

  const getErrors = () => {

    let aux = 0;

    if (inputs.carreratxt_id.trim() !== "") {
      setcarreraid({ ...carrera_error, msm_error: " " });
      aux = 0;
    } else {
      setcarreraid({
        ...carrera_error,
        msm_error: "El autor es un campo obligatorio",
      });
      aux =1;
    }

 

 
 
  

   
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
    carrera_error,
    nombrecarrera_error,
    
  ];
}
