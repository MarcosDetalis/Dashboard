import { useContext, useState, useEffect } from "react";
import { UsuarioContext } from "../contexts/contextoAplicacion";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditarM from "./Editar_usuario";

const Reserva = ({ reser }) => {//Obtenemos los datos de que nos pasan desde la ListaReservas es basicamente en un json  
  const { Eliminar_Usuario } = useContext(UsuarioContext);

  const [show, setShow] = useState(false);
 
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [reser]);

  console.log("first", reser.id_reserva);
  return (
    <>
      <td>{reser.id_usuarios}</td>
      <td>{reser.usu_nombre}</td>
      <td>{reser.usu_apellido}</td>
      <td>{reser.usu_correo}</td>
      <td>{reser.usu_carrera}</td>
      <td>{reser.usu_telefono}</td>
      <td>{reser.contrasena}</td>
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
            onClick={() => Eliminar_Usuario(reser.id_usuarios)} //LLamamos a una funcion que esta en el contexto de la aplicacion
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
          <Modal.Title>Modificar datos del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Enviamos datos al compontente de EditarM */}
          <EditarM Req_Usuarios={reser} />
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