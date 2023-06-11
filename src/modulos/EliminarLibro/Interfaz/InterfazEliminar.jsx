
//usaremos usastate y usestef para realizar las peticiones a la api de prueba
import { useEffect,useState } from "react";

// importamo font aweson
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faTrash} from '@fortawesome/free-solid-svg-icons'

// importamos la libreria de la tabla y otro pa crear temas
//observacion siempre importar pa q funcione los estilos
import 'styled-components'

import DataTable from "react-data-table-component";


import 'bootstrap/dist/css/bootstrap.min.css'
// tambien importamos los stylos pa el companente tabla





export default function InterfazEliminar() {
    const [usuarios,setUsuarios]=useState([]);

    // estado para busqueda e iniciamos con un vacio 
    const[buscar,setBuscar]=useState("");

    const url='https://jsonplaceholder.typicode.com/users';
    const verDatos = async ()=>{
        const respuesta= await fetch(url);
        const datos=await respuesta.json();
        setUsuarios(datos);
         //aqui usamos el usestate y rellenamos con los datos
       
  }
  
const [espa]="https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json";
console.log(espa);

                //esta funcion agarra los valores que se tipean en el buscador con target 
        const buscador =(evento)=>{
            setBuscar(evento.target.value);//va agarrando y cargando en la funcion varaible lo que tipea 
            console.log(evento.target.value)
             
        }
        // ponemos condicionales pa cuando el buscador
        let resultado=[];//primero pasamos un array que contendra las presuestas del buscador
        if(!buscar){
            resultado=usuarios//si esta vacio el buscador, entocnes trae el array completo
        }else{
            resultado=usuarios.filter((data)=>data.name.toLowerCase().includes(buscar.toLowerCase()));
        }





        // y luego usamos el useeffect al ultimo le pasamos un array vacio 
        //pa que no traiga o repita la peticion a la api

        useEffect(()=>{
            verDatos()
        },[])

     

        // aqui definimos otravez la columnas con sus respectivas propiedades y valores
        const columnas=[
            {
                name:"Id",
                selector:row=>row.id,
                sortable:true,
               
                

            },
            {
                name:"Titulo",
                selector:row=>row.name,
                center:true,
                sortable:true,
               
               
               
            },
            {
                name:"Email",
                selector:row=>row.email,
                left:true,
                
                
                
               
            },
            {
                name:"Email",
                selector:row=>row.email,
                left:true,
                
                wrap:true,
                
               
            },
            {
                name:"Email",
                selector:row=>row.email,
                left:true,
                
                wrap:true,
                
               
            },
           
            {
                name:'Acciones',
            
              
                button: true,
                cell: (row) => (
                    <button className="btn bg-danger"
                        //onClick={(e) => handleButtonClick(e, row.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                    </button>
                    
                ),
                
            }
            
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
