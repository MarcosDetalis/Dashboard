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
  
  
   ] = validacion({
     autortxt_id: "",
     titulotxt_id: ""
  
     //->Son los paramtros
   });
  
 
  
   const submit = () => {
     getErrors();
   };

  const { addReservas } = useContext(ReservasContext);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    addReservas(inputs.nombreid, inputs.fechaid, inputs.estadoid);
  };
   console.log("conta", Autor_error.msm_error);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nombre de Autor"
          name="autor"
          id="autortxt_id" //el id identifica el cambio
          value={inputs.autortxt_id}
          onChange={handleFieldChange}
          className={
            Autor_error.msm_error == undefined ||
            Autor_error.msm_error == " "
              ? " "
              : "border-bottom border-danger"
          }
        />
        {Autor_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {Autor_error.msm_error}
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
