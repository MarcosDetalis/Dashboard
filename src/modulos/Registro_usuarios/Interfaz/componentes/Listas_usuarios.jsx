import { Modal, Button, Alert ,Form} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../contexts/contextoAplicacion";
import Reserva from "./Usuarios";
import AgregarM from "./Agregar_usuario";
import Pagination from "./Paginacion";
//import styles from "./ListaReserva.module.css";

const ListaReserva = () => {
  const { lingitudReserva } = useContext(UsuarioContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [PaginaReserva] = useState(5);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert();
    };
  }, [lingitudReserva]);

  //buscador fragmento del codigo del pablo
  const [buscar, setBuscar] = useState("");

  const buscador = (evento) => {
    setBuscar(evento.target.value); //va agarrando y cargando en la funcion varaible lo que tipea
    console.log(evento.target.value);
  };
  // ponemos condicionales pa cuando el buscador
  let resultado = []; //primero pasamos un array que contendra las presuestas del buscador
  if (!buscar) {
    resultado = lingitudReserva;//si esta vacio el buscador, entocnes trae el array completo
  } else {
    resultado = lingitudReserva.filter((data) =>
      data.Alumno.toLowerCase().includes(buscar.toLowerCase())
    );
  }
 //Realizamos la paginacion 

  const UtimaPagina = currentPage * PaginaReserva;
  const PrimeraPagina = UtimaPagina - PaginaReserva;
  const ActualReserva = resultado.slice(PrimeraPagina, UtimaPagina);
  const totalPagesNum = Math.ceil(resultado.length / PaginaReserva);

  console.log("esta", lingitudReserva);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Listado de <b>Usuario</b>
            </h2>
          </div>

          <div className="col-sm-">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              value={buscar}
              onChange={buscador}
            />
          </div>
          <Button
            onClick={handleShow}
            className="btn btn-success"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE147;</i> <span>Agregar Usuarios</span>
          </Button>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Datos actualizados
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id_usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Carrera</th>
            <th>Telefono</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          {/*Enviamos datos al componente Reserva, que tendra solo cada item. Como el map vamos a volver a mostrar hasta la longitd*/}
          {ActualReserva.map((reser) => (
            <tr key={reser.id_usuarios}>
              <Reserva reser={reser} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        ActualReserva={ActualReserva}
        lingitudReserva={lingitudReserva}
      />
      {/* ize="xs || sm || md || lg || full" */}

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Añadir Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AgregarM />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Limpiar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListaReserva;
