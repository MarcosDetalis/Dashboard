import 'bootstrap/dist/css/bootstrap.min.css';
// pa las ventanas modales
import {Modal,ModalBody,ModalFooter} from 'reactstrap'; 
import {useEffect, useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash,faEye} from '@fortawesome/free-solid-svg-icons'
// import del services
import './maqui.css';

import {getdatos} from '../Infraestructura/Services'



function Interfaz() {
  // datos
  // const usu = [
  //   { id: 1, name: 'Pablo Maidana Martinez', libro:"Narnia", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 2, name: 'George', libro:"lobo y caperusita", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 3, name: 'George', libro:"Avengers y la piedra filosofal", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 4, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 5, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 6, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 7, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 8, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 9, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 10, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 11, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 12, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 13, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 14, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 15, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 16, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  //   { id: 17, name: 'George', libro:"Martinez", carrera: '3°-Ing. Informatica', cantidad:1  },
  // ];

// estado q consume la api
const [usuario,setUsuario]=useState([]);

useEffect(()=>{
  getdatos().then((datos)=>
  setUsuario(datos)
  )
},[])


// estado que controlo cuando abre y cierra inicia en false p q no este abierto
const [modalEliminar,setModalEliminar]=useState(false);

// estado q controla lo tipéado en los inputs y sera un objeto q agarra 
const [userSeleccionado,setUserSeleccionado]=useState({
id:'',
name:'',
libro:'',
})

// funcion que abrelos modales y el caso el un parametro pa diferenciar
// que tipo de accion se realizara en este caso eliminar
const seleccionadoUser=(elemento,caso)=>{
setUserSeleccionado(elemento);
// condicion pa que abra el modal
(caso==='eliminar') && setModalEliminar(true)
}

// funcion que realiza la eliminacion de reservas
const eliminarReserva=()=>{
// recorremo el estado q tiene las reservas
setUsuario(usuario.filter(name=>name.id!==userSeleccionado.id));//filtra aqui pa eliminar
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

console.log(usuario);
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
          <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>
              <div className="d-flex align-items-center">
                          <div className="img-container">
                              {/* <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                  alt=""/> */}
                          </div>
                          <div className="ps-1">
                              <div className="fw-600 pb-3">mark@gmail.com</div>
                              <p className="m-0 text-black fs-09">Fecha: 03/02/2023</p>
                          </div>
                      </div>
                      </td>
              <td>{elemento.libro}</td>
              <td>{elemento.carrera}</td>
              <td>{elemento.cantidad}</td>
              <td>
              <div className="d-inline-flex align-items-center active">
                          <div className="ps-1">Activo</div>
                      </div>
              </td>
              <td><button className='btn btn-primary'><FontAwesomeIcon icon={faEye} /></button>{" "}
              <button className='btn btn-danger' onClick={()=>seleccionadoUser(elemento,'eliminar')}><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
              ))}
  </tbody>
  </table>

  {/*creamos el modal de eliminar isOpen pasamos la funcio n */}
      <Modal isOpen={modalEliminar}>
        <ModalBody>
         Seguro que desea eliminar la Reserva hecha por {userSeleccionado && userSeleccionado.name}
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
  )
  //   las funcionaes para el onclick
function anteriorPagina(){
  if(paginacion !== 1){
      setPaginacion(paginacion - 1);
  }
  }
function changeCpage(l){
  setPaginacion(l);

}
function nextPagina(){
  if(paginacion !== numeroPage){
      setPaginacion(paginacion + 1);
  }
}
}

export default Interfaz