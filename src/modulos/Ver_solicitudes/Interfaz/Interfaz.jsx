
import { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import 'styled-components'
import DataTable from "react-data-table-component";

import 'bootstrap/dist/css/bootstrap.min.css'

import { getdatos } from "../Infraestructura/Services";
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
  
        const columnas = [
          {
            name: "Id",
            selector: (row) => row.id,
            sortable: true,
          },
          {
            name: "Titulo",
            selector: (row) => row.name,
            center: true,
            sortable: true,
          },
          {
            name: "Alumno",
            selector: (row) => row.email,
            center: true,
          },
          {
            name: "Carrera",
            selector: (row) => row.email,
            center: true,
          },
          {
            name: "Email",
            selector: (row) => row.email,
            center: true,
          },

          {
            name: "Acciones",

            button: true,
            cell: (row) => (
              <button
                className="btn btn-success"
                //onClick={(e) => handleButtonClick(e, row.id)}
              >
                <i className="fa fa-eye gtext-light"></i>
              </button>
            ),
          },
        ];

    // //creamos el custom personalizado css
    const estilos = {
      headCells: {
        style: {
          paddingLeft: "2px", // override the cell padding for head cells
          color: "white",

          backgroundColor: "#214162",
          boxshadow: "0 0 3px 0px rgba(0, 0, 0, 0.4)",
        },
      },
      cells: {
        style: {
          // override the cell padding for data cells
        },
      },
      
    };
  return (
    <div className="contenedor">
      <div className="table-resposive   ">
        <div className="logo_login">
          {/* buscador */}
          <div className="barraBusqueda">
            <input
              value={buscar}
              onChange={buscador}
              type="text"
              placeholder="Buscar Libro"
              className="textField"
              name="busqueda"
              //onChange={handleFilter}
            />
            <button type="button" className="btnBuscar">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        {/* hasta aca es buscador */}

        <DataTable
          columns={columnas}
          //aqui le pasamos la variable del usestate q contiene el array que cargamos de la peticion
          data={resultado}
          customStyles={estilos}
          highlightOnHover
          pointerOnHover
          pagination
          selectableRows
          responsive
        />
      </div>
    </div>
  );
}
