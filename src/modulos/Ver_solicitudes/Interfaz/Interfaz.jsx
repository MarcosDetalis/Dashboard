
import { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import 'styled-components'
import DataTable from "react-data-table-component";
import 'bootstrap/dist/css/bootstrap.min.css'
import { getdatos } from "../Infraestructura/Services";
import { Modal, Button, Form } from "react-bootstrap";


export default function Interfaz() {
  const [usuarios,setUsuarios]=useState([]);
  const [buscar, setBuscar] = useState("");
  
   useEffect(() => {
     getdatos().then((datos) => setUsuarios(datos));
   }, []);
 
  
        const buscador =(evento)=>{
            setBuscar(evento.target.value);           
  }
  
  let resultado = [];
        if(!buscar){
            resultado=usuarios
        }else{
            resultado=usuarios.filter((data)=>data.name.toLowerCase().includes(buscar.toLowerCase()));
  }
  
  const [showEdit, setShowEdit] = useState(false);

  //boy}ton editar
  const Edit = () => setShowEdit(true);
  //cerrar modal editar
  const handleCloseEdit = () => setShowEdit(false);





        const columnas = [
          {
            name: "Id",
            selector: (row) => row.id,
          },
          {
            name: "Titulo",
            selector: (row) => row.name,
          },
          {
            name: "Alumno",
            selector: (row) => row.email,
          },

          {
            name: "Email",
            selector: (row) => row.email,
          },

          {
            name: "Acciones",

            button: true,
            cell: () => (
              <div>
                <button
                  className="btn btn-success m-1"
                  //onClick={(e) => handleButtonClick(e, row.id)}
                  onClick={Edit}
                >
                  <i className="fa fa-eye gtext-light"></i>
                </button>

                <button
                  className="btn btn-danger"
                  //onClick={(e) => handleButtonClick(e, row.id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            ),
          },
        ];

  
  



  return (
    < >
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Listado de <b>Algo</b>
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
          <Button className="btn btn-success" data-toggle="modal">
            <i className="material-icons">&#xE147;</i> <span>Añadir algo</span>
          </Button>
        </div>
      </div>

      <DataTable
        columns={columnas}
        //aqui le pasamos la variable del usestate q contiene el array que cargamos de la peticion
        data={resultado}

       
        
        highlightOnHover
        pointerOnHover
        pagination
        selectableRows
        responsive

        
      />

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Reservas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Enviamos datos al compontente de EditarM */}
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                required
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Email *"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                placeholder="Address"
                rows={3}
                name="address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Phone" name="phone" />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Confirmar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
