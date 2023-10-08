import { Form, Button } from "react-bootstrap";

import { PaisContext } from "../contexts/contextoAplicacion";
import { useContext, useState } from "react";

const EditarM = ({ Req_Reservas }) => {
  const id = Req_Reservas.idPais;

 
  const [nombre, setNombre] = useState(Req_Reservas.nombre);
 

  const { atualizar } = useContext(PaisContext); //llamamos al contexto de la aplicacion y usamos su funcion de actualizar

  const actualizar = {nombre}; //Creamos un objeto

  const handleSubmit = (e) => {
    e.preventDefault();
    atualizar(id, actualizar); //pasamos el id mas el objeto
  };
  //https://react-bootstrap.github.io/docs/forms/layout para ver la documentacion 
  return (
    <Form onSubmit={handleSubmit}>
    
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Pais"
          name="email"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>
      
      <Button variant="success" type="submit" block>
        Confirmar
      </Button>
    </Form>
  );
};

export default EditarM;
