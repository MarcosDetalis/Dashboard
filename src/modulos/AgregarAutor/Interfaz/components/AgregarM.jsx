import { Form, Button, } from "react-bootstrap";
import { ReservasContext } from "../contexts/contextoAplicacion";
import { useContext} from "react";

import validacion from '../../Dominio/Dominio'

const AgregarM = () => {

   const [
     inputs,
     handleFieldChange,
     getErrors,
     Autor_error,
     titulo_error,
   //  descripcion_error,
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
        <Form.Control
          type="text"
          placeholder="Autor"
          name="autor"
          id="autortxt_id" //el id identifica el cambio
          value={inputs.autortxt_id}
          onChange={handleFieldChange}
          className={
            Autor_error.msm_error == "El autor es un campo obligatorio"
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

      


      <Button variant="success" type="submit" block onClick={submit}>
        Confirmar
      </Button>
    </Form>
  );
};

export default AgregarM;
