
// otra importacion pero desde el json usuario usando libreria XLSX Excel
// utiliza npm install xlsx
// import {XLSX} from "xlsx";
import * as XLSX from 'xlsx';

import '../interfaz/avatar.css';

import '../interfaz/search.css'

import 'bootstrap/dist/css/bootstrap.min.css';

// pa las ventanas modales
import {Modal,ModalBody,ModalFooter} from 'reactstrap'; 
import {useState,useEffect } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash,faEye,faTable,faSearch} from '@fortawesome/free-solid-svg-icons'


import {getSolicitudes,ElimiReserva,updateReservas,anularReservas,pendienteReservas} from '../Infraestructura/Service'

function Solicitud2() {
  //const navigate = useNavigate();
  
// estado q consume la api Observacion este seria data y set data
const [usuario,setUsuario]=useState([]);

// comentariooooo





useEffect(()=>{
  getSolicitudes().then((datos)=>
  setUsuario(datos)
  
  )
},[])
// APARTADO BUSCADOR
 // busqueda y setbesqueda == estado para busqueda e iniciamos con un vacio seria query y setquery
 const[buscar,setBuscar]=useState("");

//  //esta funcion agarra los valores que se tipean en el buscador con target 
 const buscador =(evento)=>{
  setBuscar(evento.target.value);//va agarrando y cargando en la funcion varaible lo que tipea 
  console.log(evento.target.value)
}

// funcion para filtrar
let resultado=[];
if(buscar){
resultado=usuario
}else{
  resultado=usuario.filter((reserva)=>reserva.res_nombre.toLowerCase().includes(buscar.toLocaleLowerCase()));
}





 const [reloadUsers, setReloadUsers] = useState(false);
 
  
 useEffect(() => {
   getSolicitudes().then((datos) => setUsuario(datos));
   setReloadUsers(false);
 }, [reloadUsers]);
    


  console.log(usuario)


// estados que controla cuando abre y cierra inicia en false p q no este abierto
const [modalOpciones,setModalOpciones]=useState(false);
const [modalEliminar,setModalEliminar]=useState(false);

// estado q controla lo tipéado en los inputs y sera un objeto q agarra 
const [userSeleccionado,setUserSeleccionado]=useState({
  id:'',
  nombre:''
});
// pasamos los parametros a rellenar
const [seleConfirmar,setseleConfirmar]=useState({
  id:'',
  estado:'',
  estadoo:''
});
// estado pa anular
const [seleAnulado,setSeleAnulado]=useState({
  id:"",
  estado:"",
  estadoo:""
});

// estado pa pendientes
const [selePendiente,setSelePendiente]=useState({
  id:"",
  estado:"",
  estadoo:""
})



// funcion que abrelos modales y el caso el un parametro pa diferenciar
// que tipo de accion se realizara en este caso eliminar
const seleccionadoUser=(caso,idreser,res_nombre)=>{
setUserSeleccionado(idreser,res_nombre);
console.log(idreser);
// condicion pa que abra el modal
(caso==='eliminar')&&setModalEliminar(true)
}
// funcion donde seleccionamos y cargamos los estados con sus parametros 
const seleccionadoOpe=(casoo,idreser,res_estado,res_estadoo)=>{
  // dentro del set rellena los parametros con valor-clave
setseleConfirmar({...seleConfirmar,id:idreser,estado:res_estado,estadoo:res_estadoo});
// rellenamos el estado de anulado tambien
setSeleAnulado({...seleAnulado, id:idreser,estado:res_estado,estadoo:res_estadoo});
setSelePendiente({...selePendiente,id:idreser,estado:res_estado,estadoo:res_estadoo});

console.log(idreser,res_estado,res_estadoo);
// condicion pa que abra el modal
(casoo==='opciones')&&setModalOpciones(true)}


// funcion donde pa actualizar el estado a confirmado
  const confirmarEstado = () => {
     
    updateReservas(seleConfirmar.id, seleConfirmar.estado, seleConfirmar.estadoo);
     setReloadUsers(true);
    setModalOpciones(false);
    
      
}

// funcion pa pendientes
const pendienteEstado=()=>{
  pendienteReservas(selePendiente.id, selePendiente.estado, selePendiente.estadoo);
   setReloadUsers(true);
  setModalOpciones(false);
}

// funcion pa actualizar el estado anular reserva
const anularEstado=()=>{
  anularReservas(seleAnulado.id,seleAnulado.estado,seleAnulado.estadoo);
  setModalOpciones(false)
}

// funcion que realiza la eliminacion de reservas
const eliminarReserva=()=>{
ElimiReserva(userSeleccionado);
setModalEliminar(false);
}









// APARTADO DE PAGINACION
// estado para paginacion qu recibe q comienza con uno
const [paginacion, setPaginacion] = useState(1);
// constante que muestra la cantidad en elementos a traer
const registroPagina = 5;

// const q sirve pa mostrar la paginacion final
const ultimoIndice = paginacion * registroPagina;
// este pa el indice o pagina inicial
const primerIndice = ultimoIndice - registroPagina;
// registro q traera una parte nomas del json con las limitaciones que pusimos
const registro = resultado.slice(primerIndice, ultimoIndice);
// numero de paginas Math.ceil() devuelve
// el numero de pagina mayor o mas proximo al numero
const numeroPage = Math.ceil(usuario.length / registroPagina);
// Obs: volver a ver ya que no entiendo
const numero = [...Array(numeroPage + 1).keys()].slice(1);


// funcion de exportacion excel con  xlsx
const ExportExcel=()=>{
  console.log(usuario);
  var wb=XLSX.utils.book_new(),
  ws=XLSX.utils.json_to_sheet(usuario);
  XLSX.utils.book_append_sheet(wb,ws,"tablareservas");
XLSX.writeFile(wb,"Reservas.xlsx");
}




  return (
    <div className="contenedor">
     <div className="contenedor-opciones">
          <button className='btn btn-success btnexcel'title='Exportar a Excel' onClick={ExportExcel}><FontAwesomeIcon icon={faTable} /></button> 
          <div className='btnbuscar'>  
        <input
          className=" inputBuscar"
          value={buscar}
          placeholder="Busque reserva"
          onChange={buscador}
          
        />
         <button type="button" className="btn btnBuscar">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            </div>
      </div>
        

      
     
    {/* referenciamos la tabla pa exportar */}
    <table  className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Fecha de reserva</th>
            <th>TITULO Y AUTOR</th>
            <th>CARRERA</th>
            <th>CANTIDAD</th>
            <th>ESTADO</th>
            <th>ACCIONES </th>
          </tr>
        </thead>
        <tbody>
          {registro.map((elemento) => (
            <tr key={elemento.idreservas}>
              <td>{elemento.idreservas}</td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="img-container">
                    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  </div>
                  <div className="ps-2">
                    <div className="fw-600 pb-3">{elemento.res_correo}</div>
                    <p className="m-0 text-black fs-09">
                      {elemento.res_nombre}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="m-0 text-black fs-09">{elemento.res_fecha}</p>
              </td>
              <td>{elemento.res_libro}</td>
              <td>{elemento.res_carrera}</td>
              <td>{elemento.res_cantidad}</td>
              <td>
                <div className="d-inline-flex align-items-center active">
                  <div className="ps-1">{elemento.res_estadoo}</div>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    seleccionadoOpe(
                      "opciones",
                      elemento.idreservas,
                      elemento.res_estado,
                      elemento.res_estadoo
                    )
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    seleccionadoUser("eliminar", elemento.idreservas)
                  }
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal de opciones */}
      <Modal
        isOpen={modalOpciones}
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <ModalBody>Opciones de Solicitud de Rerseva</ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={confirmarEstado}>
            Confirmar
          </button>
          <button className="btn btn-danger" onClick={() => anularEstado()}>
            Anular
          </button>
          <button className="btn btn-warning" onClick={() => pendienteEstado()}>
            Pendiente
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalOpciones(false)}
          >
            Salir
          </button>
        </ModalFooter>
      </Modal>

      {/*creamos el modal de eliminar isOpen pasamos la funcion */}
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Esta seguro que desea eliminar la Reserva?
          {/* hecha por {userSeleccionado && userSeleccionado.nombre} */}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminarReserva()}>
            Si
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      

      {/* fronter de paginacion */}
      {/* aqui hacemos front de la paginacion con boostrap */}
      <nav className="d-flex justify-content-end ">
        <ul className="pagination">
          <li className="page-item">
            <a
              href="#"
              value="hola2"
              className="page-link"
              onClick={anteriorPagina}
            >
              Anterior
            </a>
          </li>
          {numero.map((n, i) => (
            <li
              className={`page-item ${paginacion === n ? "active" : ""}`}
              key={i}
            >
              <a
                href="#"
                value="hola"
                className="page-link"
                onClick={() => changeCpage(n)}
              >
                {" "}
                {n}
              </a>
            </li>
          ))}
          {/* paginacion siguiente */}
          <li className="pagina-item">
            <a href="#" className="page-link" onClick={nextPagina}>
              Siguiente
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
  //las funcionaes para el onclick
  function anteriorPagina() {
    if (paginacion !== 1) {
      setPaginacion(paginacion - 1);
    }
  }
  function changeCpage(l) {
    setPaginacion(l);
  }
  function nextPagina() {
    if (paginacion !== numeroPage) {
      setPaginacion(paginacion + 1);
    }
  }
}

export default Solicitud2;