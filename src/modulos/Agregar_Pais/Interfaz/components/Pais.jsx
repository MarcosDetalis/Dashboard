import { useContext, useState, useEffect } from "react";
import { PaisContext } from "../contexts/contextoAplicacion";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditarM from "./Editar_Pais";
 
const Reserva = ({ reser }) => {//Obtenemos los datos de que nos pasan desde la ListaReservas es basicamente en un json  
  const { EliminarReservas } = useContext(PaisContext);

  const [show, setShow] = useState(false);
 
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
   

  const [eliminar, seteliminar] = useState(false);

  const eliminarShow = () => seteliminar(true);
   const Close = () => seteliminar(false);
    

  const eliminarClose = () => {
    EliminarReservas(reser.idPais);
    seteliminar(false);
  } 
    
  useEffect(() => {
    handleClose();
  }, [reser]);
 
  return (
    <>
      <td>{reser.nombre}</td>

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
            onClick={eliminarShow} //LLamamos a una funcion que esta en el contexto de la aplicacion
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons" id="delete">
              &#xE872;
            </i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Libros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditarM Req_Reservas={reser} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={eliminar} onHide={eliminarClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar</Modal.Title>
        </Modal.Header>
        <Modal.Body> ¿Desea eliminar {reser.nombre}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={eliminarClose}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Reserva;
