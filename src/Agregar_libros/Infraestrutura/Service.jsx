import { useState } from "react";
export default function Service(initialState) {
  const [inputs, setValues] = useState(initialState);

  const PostsReservas = async () => {
    console.log("cliente", inputs.alumnoid, inputs.estadoid, inputs.fechaid);
    try {
      let res = await fetch("http://localhost:4005/api/ingresar", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          alumno: inputs.alumnoid,
          fecha: inputs.fechaid,
          estado: inputs.estadoid,
        }),
      });
      await res.json();
      if (res.status === 201) {
        console.log("Enviadoo con exito");
      } else {
        console.log("error al enviar ");
      }
    } catch (err) {
      console.log(err);
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
    PostsReservas,
  ];
}
