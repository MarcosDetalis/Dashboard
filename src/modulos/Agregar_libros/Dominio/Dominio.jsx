import { useState } from "react";
import moment from "moment";
export default function Dominio(initialState) {
  const [inputs, setValues] = useState(initialState);

  const [nombreiderr, setalumnoid] = useState({}); // Estado para se enviado como mensaje a la interfaz ( el {} es para manejar un tipo de object )
  const [estadoid, setestadoid] = useState({});
  const [fechaerr, setfecha] = useState({});
  const getErrors = () => {
    console.log("Dominionn", inputs.fechaid, fechaerr);

    if (inputs.nombreid.trim() !== "") {
      setalumnoid({ ...nombreiderr, emial: " " });
    } else {
      setalumnoid({
        ...nombreiderr,
        emial: "El correo es un campo obligatorio",
      });
    }

    let result = moment(inputs.fechaid, "YYYY-MM-DD", true).isValid();

    if (result == true) {
      setfecha({ ...fechaerr, op: " " });
    } else {
      setfecha({ ...fechaerr, op: "Error en el formato" });
    }

    if (inputs.estadoid.trim() !== "") {
      setestadoid({ ...estadoid, passw: " " });
    } else {
      setestadoid({
        ...estadoid,
        passw: "La contraseña es un campo obligatorio",
      });
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
    nombreiderr,
    fechaerr,
     
  ];
}
