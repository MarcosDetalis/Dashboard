import { Form, Button } from "react-bootstrap";

import { ReservasContext } from "../contexts/contextoAplicacion";
import { useContext, useState } from "react";

const AgregarM = () => {
  const { addReservas } = useContext(ReservasContext);

  const [nuevodato, setNuevodato] = useState({
    nombre: "",
    fecha: "",
    estado: "",
    address: "",
  });

  const onInputChange = (e) => {
    setNuevodato({ ...nuevodato, [e.target.name]: e.target.value });
  };

  const { nombre, fecha, estado, address } = nuevodato;

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservas(nombre, fecha, estado);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="date"
          placeholder="data"
          name="fecha"
          value={fecha}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="numero"
          rows={3}
          name="estado"
          value={estado}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Algo"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          disabled
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Confirmar
      </Button>
    </Form>
  );
};

export default AgregarM;
