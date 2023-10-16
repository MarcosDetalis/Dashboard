import { useState } from "react";
 import { PaisContext } from "../Interfaz/contexts/contextoAplicacion";
import { useContext } from "react";
 
export default function Dominio(initialState) {
  const [inputs, setValues] = useState(initialState);

  const [Autor_error, setalumnoid] = useState({}); // Estado para se enviado como mensaje a la interfaz ( el {} es para manejar un tipo de object )
  const [titulo_error, settitulo_error] = useState({}); 

  const { AgregarPais } = useContext(PaisContext);
  
  console.log(inputs,"osi")

  const getErrors = () => {

    let aux = 0;

    console.log("oo", isNaN(inputs.paistxt_id));

    if ( isNaN(inputs.paistxt_id) == true ) {
      setalumnoid({ ...Autor_error, msm_error: " " });
      aux = 0;
      //AgregarPais(inputs.paistxt_id);
    } else {
      setalumnoid({
        ...Autor_error,
        msm_error: "Favor agregar un dato que corresponda",
      });
      aux = 1;
    }
    if (aux === 0) {
      AgregarPais(inputs.paistxt_id);
    }
  
 
 
  };
  function elei() {
     return 0
  }


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
      elei,
    Autor_error,
    titulo_error,
  
  ];
}
