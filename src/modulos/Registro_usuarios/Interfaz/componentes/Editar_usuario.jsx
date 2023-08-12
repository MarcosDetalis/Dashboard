import { Form, Button, Row,Col } from "react-bootstrap";

import { UsuarioContext } from "../contexts/contextoAplicacion";
import { useContext, useState } from "react";

const EditarM = ({ Req_Usuarios }) => {
  const id = Req_Usuarios.id_usuarios;

 // const [id_usuarios, setId_usuario] = useState(Req_Usuarios.id_usuarios);
  const [usu_nombre, setNombre] = useState(Req_Usuarios.usu_nombre);
  const [usu_apellido, setusu_apellido] = useState(Req_Usuarios.usu_apellido);
  const [usu_correo, setusu_correo] = useState(Req_Usuarios.usu_correo);
  const [usu_carrera, setuusu_carrera] = useState(Req_Usuarios.usu_carrera);
  const [usu_telefono, setusu_telefono] = useState(Req_Usuarios.usu_telefono);
  const [contrasena, setcontrasena] = useState(Req_Usuarios.contrasena);

  const { atualizar } = useContext(UsuarioContext); //llamamos al contexto de la aplicacion y usamos su funcion de actualizar

  const actualizar = { id, usu_nombre, usu_apellido, usu_correo,contrasena,usu_telefono }; //Creamos un objeto

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
          placeholder="Nombre"
          name="Nombre"
          id="Nombretxt_id" //el id identifica el cambio
          value={usu_nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Apellido"
          name="Apellido"
          id="Apellidotxt_id" //el id identifica el cambio
          value={usu_apellido}
          onChange={(e) => setusu_apellido(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
       
        <Form.Control
          type="email"
          placeholder="Correo"
          name="Correo"
          id="Correotxt_id" //el id identifica el cambio
          value={usu_correo}
          onChange={(e) => setusu_correo(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="Contrasena"
          id="Contrasenatxt_id" //el id identifica el cambio
          value={contrasena}
          onChange={(e) => setcontrasena (e.target.value)}
        />
      </Form.Group>
      <Form.Group>
      <Row>
          <Col>
            <Form.Control size="sm" as="select" onChange={(e) => setuusu_carrera (e.target.value)}
            value={usu_carrera} disabled>
              <option> </option>
              <option>Ing. Informatica</option>
              <option>Contabilidad</option>
              <option>Ing. Comercial</option>
              
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="tel"
          placeholder="telefono"
          name="telefono"
          id="telefonotxt_id" //el id identifica el cambio
          value={usu_telefono}
          onChange={(e) => setusu_telefono (e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Confirmar
      </Button>
    </Form>
  );
};

export default EditarM;
