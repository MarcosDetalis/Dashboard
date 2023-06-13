import 'bootstrap/dist/css/bootstrap.min.css';
// pa las ventanas modales
import {Modal,ModalBody,ModalFooter} from 'reactstrap'; 
import {useState,useEffect } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash,faEye} from '@fortawesome/free-solid-svg-icons'
// import del services

import {getdatos,DeleteReserva} from '../Infraestructura/Service'

function Solicitud2() {
  
// estado q consume la api
const [usuario,setUsuario]=useState([]);

useEffect(()=>{
  getdatos().then((datos)=>
  setUsuario(datos)
  )
},[])

console.log(usuario);

// estado que controlo cuando abre y cierra inicia en false p q no este abierto
const [modalEliminar,setModalEliminar]=useState(false);

// estado q controla lo tipéado en los inputs y sera un objeto q agarra 
const [userSeleccionado,setUserSeleccionado]=useState({})

// funcion que abrelos modales y el caso el un parametro pa diferenciar
// que tipo de accion se realizara en este caso eliminar
const seleccionadoUser=(caso,idreser)=>{
setUserSeleccionado(idreser);
console.log(idreser);
// condicion pa que abra el modal
(caso==='eliminar') && setModalEliminar(true)
}



// funcion que realiza la eliminacion de reservas
const eliminarReserva=()=>{
// recorremos el estado q tiene las reservas
// setUsuario(usuario.filter(name=>name.idreservas!==userSeleccionado.idreservas));//filtra aqui pa eliminar
DeleteReserva(userSeleccionado);
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
const registro = usuario.slice(primerIndice, ultimoIndice);
// numero de paginas Math.ceil() devuelve
// el numero de pagina mayor o mas proximo al numero
const numeroPage = Math.ceil(usuario.length / registroPagina);
// Obs: volver a ver ya que no entiendo
const numero = [...Array(numeroPage + 1).keys()].slice(1);
  return (
    <div className="ooo">
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>USUARIO</th>
                <th>TITULO Y AUTOR</th>
                <th>CARRERA</th>
                <th>CANTIDAD</th>
                <th>ESTADO</th>
                <th>ACCIONES</th>
                
          </tr>
        </thead>
    <tbody>
        {registro.map(elemento=>(
            <tr key={elemento.idreservas}>
                <td>{elemento.idreservas}</td>
                <td>
                <div className="d-flex align-items-center">
                            <div className="img-container">
                                {/* <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                   /> */}
                            </div>
                            <div className="ps-1">
                                <div className="fw-600 pb-3">{elemento.res_correo}</div>
                                <p className="m-0 text-black fs-09">{elemento.res_fecha}</p>
                            </div>
                        </div>
                        </td>
                <td>{elemento.res_libro}</td>
                <td>{elemento.res_carrera}</td>
                <td>{elemento.res_cantidad}</td>
                <td>
                <div className="d-inline-flex align-items-center active">
                            <div className="ps-1">Activo</div>
                        </div>
                </td>
                <td><button className='btn btn-primary'><FontAwesomeIcon icon={faEye} /></button>{" "}
                <button className='btn btn-danger' onClick={()=>seleccionadoUser('eliminar',elemento.idreservas)}><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
                ))}
    </tbody>
    </table>
  
    {/*creamos el modal de eliminar isOpen pasamos la funcio n */}
        <Modal isOpen={modalEliminar}>
          <ModalBody>
           Seguro que desea eliminar la Reserva hecha por {userSeleccionado && userSeleccionado.res_nombre}
          </ModalBody>
          <ModalFooter>
          <button className='btn btn-danger' onClick={()=>eliminarReserva()}>
            Si
          </button>
          <button className='btn btn-secondary' onClick={()=>setModalEliminar(false)}>
            No
          </button>
          </ModalFooter>
        </Modal>
  
        {/* fronter de paginacion */}
          {/* aqui hacemos front de la paginacion con boostrap */}
    <nav className="d-flex justify-content-end ">
      <ul className="pagination">
        <li className="page-item">
          <a href="#" value="hola2" className="page-link" onClick={anteriorPagina}>
            Anterior
          </a>
        </li>
        {numero.map((n, i) => (
          <li className={`page-item ${paginacion === n ? 'active' : ''}`} key={i}>
            <a href="#" value="hola" className="page-link" onClick={()=>changeCpage(n)} > {n}
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
  //   las funcionaes para el onclick
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