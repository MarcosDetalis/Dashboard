import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { ReservasContext } from "../contexts/contextoAplicacion";
import { useContext} from "react";
import Inter from '../../../Dardebaja/Interfaz/Inter'

import validacion from '../../Dominio/Dominio'

const AgregarM = () => {

   const [
     inputs,
     handleFieldChange,
     getErrors,
     Autor_error,
     titulo_error,
     descripcion_error,
     cantidad_error,
   ] = validacion({
     autortxt_id: "",
     titulotxt_id: "",
     descripciontxt_id: "",
     cantidadtxt_id: "",
     //->Son los paramtros
   });
  
  
  console.log("cantidad", cantidad_error.msm_error);
  
   const submit = () => {
     getErrors();
   };

  const { addReservas } = useContext(ReservasContext);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    addReservas(inputs.nombreid, inputs.fechaid, inputs.estadoid);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
       

        <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="button-addon1">
            Añadir
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="Autor"
          />
        </InputGroup>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Titulo"
          name="titulo"
          id="titulotxt_id" //el id identifica el cambio
          value={inputs.titulotxt_id}
          onChange={handleFieldChange}
          className={
            titulo_error.msm_error == "El titulo es un campo obligatorio"
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
          as="textarea"
          placeholder="Descripcion del libro"
          rows={3}
          name="descrip"
          id="descripciontxt_id"
          value={inputs.descripciontxt_id}
          onChange={handleFieldChange}
          className={
            descripcion_error.msm_error ==
            "La descripcion es un campo obligatorio"
              ? "border-bottom border-danger"
              : ""
          }
        />
        {descripcion_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {descripcion_error.msm_error}
          </span>
        )}
      </Form.Group>
      <Form.Group>

      <Inter></Inter>
 
      </Form.Group>

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
            <Form.Control
              type="number"
              placeholder="Cantidad"
              id="cantidadtxt_id"
              value={inputs.cantidadtxt_id}
              onChange={handleFieldChange}
              className={
                cantidad_error.msm_error ==
                "La cantidad es un campo obligatorio"
                  ? "border-bottom border-danger"
                  : ""
              }
            />
            {cantidad_error?.msm_error && (
              <span className="text-danger center  font-weight-bold">
                {cantidad_error.msm_error}
              </span>
            )}
          </Col>
        </Row>
      </Form.Group>

      <Button variant="success" type="submit" block onClick={submit}>
        Confirmar
      </Button>
    </Form>
  );
};

export default AgregarM;
