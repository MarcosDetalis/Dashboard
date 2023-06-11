import { useState } from "react";

export default function Dominio(initialState) {
  //->Esta funcion va a recibir parametros (initialState) puede tener otro nombre a ser necesario
  const [inputs, setValues] = useState(initialState);
  //-> Utilizamos un estado los cual sera de apoyo para los diferente inputs de la interfaz (inputs.clave)
  const [alumnoid, setalumnoid] = useState({}); // Estado para se enviado como mensaje a la interfaz ( el {} es para manejar un tipo de object )
  const [estadoid, setestadoid] = useState({});
    const [fechaid, setfecha] = useState({});
    const getErrors = () => {
      
    //-> Creamos esta funcion la cual sera invocada desde la interfaz. Aqui definimos lo que se desea validar para los inputs
    if (inputs.alumnoid.trim() !== "") {
      //funcion trim() es para quitar el espacio. tener encuenta que el espacio es un valor al final
      //->(inputs.emailid) emailid es la clave que nos viene desde la interfaz se difine para obtener que input deseamos validar
      setalumnoid({ ...alumnoid, emial: " " });
      //setError es el estado que seamos mutar de tal modo se guarda los datos en el.
    } else {
      setalumnoid({
        ...alumnoid,
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
      
if (inputs.fechaid.trim() !== "") {
  setfecha({ ...fechaid, fecha: " " });
} else {
  setfecha({
    ...fechaid,
    fecha: "La contraseña es un campo obligatorio",
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
    alumnoid,
    estadoid,
    fechaid,
   
  ];
}
