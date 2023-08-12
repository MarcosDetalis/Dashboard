import { Form, Button } from "react-bootstrap";

import { ReservasContext } from "../contexts/contextoAplicacion";
import { useContext, useState } from "react";

const EditarM = ({ Req_Carrera }) => {
  const id = Req_Carrera.idCarreras;

  // const [idCarrera, setIdCarrera] = useState(Req_Carrera.idCarrera);
  const [nombrecarrera, setNombrecarrera] = useState(Req_Carrera.car_nombre);


  const { atualizar } = useContext(ReservasContext); //llamamos al contexto de la aplicacion y usamos su funcion de actualizar

  // const actualizar = { id,nombrecarrera}; //Creamos un objeto

  const handleSubmit = (e) => {
    e.preventDefault();
    atualizar(id,nombrecarrera); //pasamos el id mas el objeto
  };
  //https://react-bootstrap.github.io/docs/forms/layout para ver la documentacion 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Autor"
          name="email"
          value={nombrecarrera}
          onChange={(e) => setNombrecarrera(e.target.value)}
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
