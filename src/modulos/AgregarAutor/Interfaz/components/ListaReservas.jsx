import { Modal, Button, Alert ,Form} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ReservasContext } from "../contexts/contextoAplicacion";
import Reserva from "./Reservas";
import AgregarM from "./AgregarM";
import Pagination from "./Paginacion";
import ScaleLoader from "react-spinners/ScaleLoader";
//import styles from "./ListaReserva.module.css";

const ListaReserva = () => {
  const { lingitudReserva } = useContext(ReservasContext);

  const [showAlert, setShowAlert] = useState(true);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [PaginaReserva] = useState(5);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 10);
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
              Listado de <b>Autores</b>
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
            <i className="material-icons">&#xE147;</i> <span>Añadir Autor</span>
          </Button>
        </div>
      </div>

     
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/*Enviamos datos al componente Reserva, que tendra solo cada item. Como el map vamos a volver a mostrar hasta la longitd*/}
          {ActualReserva.map((reser) => (
            <tr key={reser.id_reserva}>
              <Reserva reser={reser} />
            </tr>
          ))}
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              <div>
                <ScaleLoader
                  color="#214162"
                  cssOverride={{}}
                  loading={showAlert}
                  margin={6}
                  radius={4}
                  speedMultiplier={1}
                  width={10}
                />
              </div>
            </td>
          </tr>
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
          <Modal.Title>Añadir Autor</Modal.Title>
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
