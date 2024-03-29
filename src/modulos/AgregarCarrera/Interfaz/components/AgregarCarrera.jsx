import { Form, Button, } from "react-bootstrap";
import { ReservasContext } from "../contexts/contextoAplicacion";
import { useContext} from "react";

import validacion from '../../Dominio/Dominio'

const AgregarCarrera = () => {

   const [
     inputs,
     handleFieldChange,
     getErrors,
     carrera_error,
  
  
   ] = validacion({

     nombrecarreratxt_id: ""
  
     //->Son los paramtros
   });
  
 
  
   const submit = () => {
     getErrors();
   };

  const { addCarrera } = useContext(ReservasContext);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    addCarrera(inputs.nombrecarreratxt_id);
  };
   console.log("conta", carrera_error.msm_error);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nombre de Autor"
          name="autor"
          id="nombrecarreratxt_id" //el id identifica el cambio
          value={inputs.nombrecarreratxt_id}
          onChange={handleFieldChange}
          className={
            carrera_error.msm_error == undefined ||
            carrera_error.msm_error == " "
              ? " "
              : "border-bottom border-danger"
          }
        />
        {carrera_error?.msm_error && (
          <span className="text-danger center  font-weight-bold">
            {carrera_error.msm_error}
          </span>
        )}
      </Form.Group>

      <Button variant="success" type="submit" block onClick={submit}>
        Confirmar
      </Button>
    </Form>
  );
};

export default AgregarCarrera;
