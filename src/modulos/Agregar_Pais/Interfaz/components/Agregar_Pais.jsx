import { Form, Button, Row, Col} from "react-bootstrap";
import validacion from '../../Dominio/Dominio'
const AgregarM = ( ) => {

   const [inputs, handleFieldChange, getErrors, Autor_error,LimiarForm] =
     validacion({
       paistxt_id: "",

       //->Son los paramtros
     });
  
 
   const submit = () => {
     getErrors();
   };
 

  //const { AgregarPais } = useContext(PaisContext);
   
  const handleSubmit = (e) => {
    
    e.preventDefault();
   // AgregarPais(inputs.paistxt_id);
  };

 
   
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nombre del Pais"
          name="pais"
          id="paistxt_id" //el id identifica el cambio
          value={inputs.paistxt_id}
          onChange={handleFieldChange}
          className={
            Autor_error.msm_error == undefined || Autor_error.msm_error == " "
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


 

  <Row>
        <Col xs="auto">
        <Button variant="success" type="submit"  onClick={submit}  >
          Confirmar
          </Button>
          
        </Col>
        <Col xs="auto"  >
        <Button variant="danger" onClick={LimiarForm}  >
            Limpiar
          </Button>
        </Col>
      </Row>
    


    </Form>
  );
};

export default AgregarM;
