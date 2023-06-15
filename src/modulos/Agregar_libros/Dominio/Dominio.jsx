import { useState } from "react";
import moment from "moment";
export default function Dominio(initialState) {
  //->Esta funcion va a recibir parametros (initialState) puede tener otro nombre a ser necesario
  const [inputs, setValues] = useState(initialState);
  //-> Utilizamos un estado los cual sera de apoyo para los diferente inputs de la interfaz (inputs.clave)
  const [nombreiderr, setalumnoid] = useState({}); // Estado para se enviado como mensaje a la interfaz ( el {} es para manejar un tipo de object )
  const [estadoid, setestadoid] = useState({});
  const [fechaerr, setfecha] = useState({});
  const getErrors = () => {
    console.log("Dominionn", inputs.fechaid, fechaerr);

    //-> Creamos esta funcion la cual sera invocada desde la interfaz. Aqui definimos lo que se desea validar para los inputs
    if (inputs.nombreid.trim() !== "") {
      //funcion trim() es para quitar el espacio. tener encuenta que el espacio es un valor al final
      //->(inputs.emailid) emailid es la clave que nos viene desde la interfaz se difine para obtener que input deseamos validar
      setalumnoid({ ...nombreiderr, emial: " " });
      //setError es el estado que seamos mutar de tal modo se guarda los datos en el.
    } else {
      setalumnoid({
        ...nombreiderr,
        emial: "El correo es un campo obligatorio",
      });
    }

    if (inputs.estadoid.trim() !== "") {
      setestadoid({ ...estadoid, passw: " " });
    } else {
      setestadoid({
        ...estadoid,
        passw: "La contraseña es un campo obligatorio",
      });
    }

    let result = moment(inputs.fechaid, "YYYY-MM-DD", true).isValid();

    if (result == true) {
      setfecha({ ...fechaerr, op: " " });
    } else {
      setfecha({ ...fechaerr, op: "Error en el formato" });
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
    estadoid,
    fechaerr,
  ];
}
