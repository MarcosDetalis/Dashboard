import { Form, Button, Row, Col } from "react-bootstrap";
import { UsuarioContext } from "../contexts/contextoAplicacion";
import { useContext } from "react";

import validacion from '../../Dominio/Dominio'
import { useState } from "react";

const AgregarM = () => {
const [carrera, setcarrera] = useState("Derechoa");

  
  const [
    inputs,
    handleFieldChange,
    getErrors,
    Autor_error,
    titulo_error,
    cantidad_error,
  ] = validacion({
    Nombretxt_id: "",
    Apellidotxt_id: "",
    Correotxt_id: "",
    Contrasenatxt_id: "",
    telefonotxt_id: ""
    //->Son los paramtros
  });


  console.log("cantidad", cantidad_error.msm_error);
  //valor de un select html
   function cambioDia(e) {
     setcarrera(e.target.value);
   }

  const submit = () => {
    getErrors();
  };

  const { Guardar_Usuario } = useContext(UsuarioContext);

  const handleSubmit = (e) => {

    e.preventDefault();
    Guardar_Usuario(
      inputs.Nombretxt_id,
      inputs.Apellidotxt_id,
      inputs.Correotxt_id,
      inputs.Contrasenatxt_id,
      inputs.telefonotxt_id,
      carrera
    );
    console.log(
      inputs.Nombretxt_id,
      inputs.Apellidotxt_id,
      inputs.Correotxt_id,
      inputs.Contrasenatxt_id,
      inputs.telefonotxt_id,
      carrera
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="Nombre"
          id="Nombretxt_id" //el id identifica el cambio
          value={inputs.Nombretxt_id}
          onChange={handleFieldChange}
          className={
            Autor_error.msm_error == "El nombre es un campo obligatorio"
              ? "border-bottom border-danger"
              : ""
          }
        />
        {Autor_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {Autor_error.msm_error}
          </span>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Apellido"
          name="Apellido"
          id="Apellidotxt_id" //el id identifica el cambio
          value={inputs.Apellidotxt_id}
          onChange={handleFieldChange}
          className={
            Autor_error.msm_error == "El apellido es un campo obligatorio"
              ? "border-bottom border-danger"
              : ""
          }
        />
        {Autor_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {Autor_error.msm_error}
          </span>
        )}
      </Form.Group>
      {/* </Form.Group>  */}
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Correo"
          name="Correo"
          id="Correotxt_id" //el id identifica el cambio
          value={inputs.Correotxt_id}
          onChange={handleFieldChange}
          className={
            titulo_error.msm_error == "El Correo es un campo obligatorio"
              ? "border-bottom border-danger"
              : ""
          }
        />
        {titulo_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {titulo_error.msm_error}
          </span>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="Contrasena"
          id="Contrasenatxt_id" //el id identifica el cambio
          value={inputs.Contrasenatxt_id}
          onChange={handleFieldChange}
          className={
            titulo_error.msm_error == "La Contrasena es un campo obligatorio"
              ? "border-bottom border-danger"
              : ""
          }
        />
        {titulo_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {titulo_error.msm_error}
          </span>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Verificar Contraseña"
          name="verificarContrasena"
          id="verificarContrasenatxt_id" //el id identifica el cambio
          value={inputs.verificarContrasenatxt_id}
          onChange={handleFieldChange}
          className={
            titulo_error.msm_error ==
            "verificar Contrasena es un campo obligatorio"
              ? "border-bottom border-danger"
              : ""
          }
        />
        {titulo_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {titulo_error.msm_error}
          </span>
        )}
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
            <Form.Control size="sm" as="select" onChange={cambioDia}>
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
          value={inputs.telefonotxt_id}
          onChange={handleFieldChange}
          className={
            titulo_error.msm_error == "El telefono es un campo obligatorio"
              ? "border-bottom border-danger"
              : ""
          }
        />
        {titulo_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {titulo_error.msm_error}
          </span>
        )}
      </Form.Group>

      <Button variant="success" type="submit" block onClick={submit}>
        Guardar
      </Button>
    </Form>
  );
};

export default AgregarM;
