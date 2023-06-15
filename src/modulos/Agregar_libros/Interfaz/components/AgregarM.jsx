import { Form, Button } from "react-bootstrap";
import { ReservasContext } from "../contexts/contextoAplicacion";
import { useContext} from "react";

import validacion from '../../Dominio/Dominio'

const AgregarM = () => {

   const [inputs, handleFieldChange, getErrors, nombreiderr, fechaerr] =
     validacion({
       nombreid: "",
       fechaid: "",
       estadoid: "",
       //->Son los paramtros
     });
  
   const submit = () => {
     getErrors();
   };
////-------------
  
  const { addReservas } = useContext(ReservasContext);

/*
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
*/

  const handleSubmit = (e) => {
    console.log("add", inputs.nombreid, inputs.fechaid, inputs.estadoid);
    
    e.preventDefault();
    addReservas(inputs.nombreid, inputs.fechaid, inputs.estadoid);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="nombre"
          id="nombreid" //el id identifica el cambio
          value={inputs.nombreid}
          onChange={handleFieldChange}
        />
        {nombreiderr?.emial && (
          <span className="text-danger center  font-weight-bold">
            {nombreiderr.emial}
          </span>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="date"
          placeholder="data"
          name="fechaid"
          value={inputs.fechaid}
          id="fechaid"
          onChange={handleFieldChange}
        />
        {fechaerr?.op && (
          <span className="text-danger center  font-weight-bold">
            {fechaerr.op}
          </span>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="numero"
          rows={3}
          name="estado"
          id="estadoid"
          value={inputs.estadoid}
          onChange={handleFieldChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Algo"
          name="address"
          id="address"
          value={inputs.address}
          onChange={handleFieldChange}
          disabled
        />
      </Form.Group>
      <Button variant="success" type="submit" block onClick={submit}>
        Confirmar
      </Button>
    </Form>
  );
};

export default AgregarM;
