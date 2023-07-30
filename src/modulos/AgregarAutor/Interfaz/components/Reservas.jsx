import { useContext, useState, useEffect } from "react";
import { ReservasContext } from "../contexts/contextoAplicacion";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditarM from "./EditarM";

const Reserva = ({ reser }) => {//Obtenemos los datos de que nos pasan desde la ListaReservas es basicamente en un json  
  const { EliminarReservas } = useContext(ReservasContext);

  const [show, setShow] = useState(false);
 
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [reser]);

  console.log("first", reser.id_reserva);
  return (
    <>
      <td>{reser.id_reserva}</td>
      <td>{reser.Alumno}</td>
      <td>{reser.Fecha}</td>
      <td>{reser.Estado}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Editar</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons " id="edit">
              &#xE254;
            </i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Borrar</Tooltip>}>
          <button
            onClick={() => EliminarReservas(reser.id_reserva)} //LLamamos a una funcion que esta en el contexto de la aplicacion
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons" id="delete">
              &#xE872;
            </i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Libros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Enviamos datos al compontente de EditarM */}
          <EditarM Req_Reservas={reser} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Salir
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Reserva;
