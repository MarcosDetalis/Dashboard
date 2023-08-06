import { Form, Button, Row,Col } from "react-bootstrap";

import { UsuarioContext } from "../contexts/contextoAplicacion";
import { useContext, useState } from "react";

const EditarM = ({ Req_Reservas }) => {
  const id = Req_Reservas.id_reserva;

  const [id_reserva, setId_reserva] = useState(Req_Reservas.id_reserva);
  const [nombre, setNombre] = useState(Req_Reservas.Alumno);
  const [fecha, setFecha] = useState(Req_Reservas.Fecha);
  const [estado, setEstado] = useState(Req_Reservas.Estado);

  const { atualizar } = useContext(UsuarioContext); //llamamos al contexto de la aplicacion y usamos su funcion de actualizar

  const actualizar = { id, id_reserva, nombre, fecha, estado }; //Creamos un objeto

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
          placeholder="Name *"
          name="name"
          value={id_reserva}
          onChange={(e) => setId_reserva(e.target.value)}
          required
          disabled
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Autor"
          name="email"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Email *"
          name="email"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          name="address"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </Form.Group>
      {/* <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
      </Form.Group> */}

      <Form.Group>
        <Row>
          <Col>
            <Form.Control size="sm" as="select">
              <option>Nuevo</option>
              <option>Donado</option>
              <option>Usado</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control size="sm" as="select">
              <option>Libro</option>
              <option>Tesis</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Cantidad" />
          </Col>
        </Row>
      </Form.Group>

      <Button variant="success" type="submit" block>
        Confirmar
      </Button>
    </Form>
  );
};

export default EditarM;
