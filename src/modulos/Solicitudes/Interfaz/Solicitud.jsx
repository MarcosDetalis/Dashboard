import "./search.css";
import "./Estilo1.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

export default function Solicitud() {
  const [usuarios, setUsuarios] = useState([]);

  // estado para busqueda e iniciamos con un vacio
  const [buscar, setBuscar] = useState("");

  

  const url = "https://rickandmortyapi.com/api/character";
  const verDatos = async () => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos.results);
    setUsuarios(datos.results);
    //aqui usamos el usestate y rellenamos con los datos
  };
  //esta funcion agarra los valores que se tipean en el buscador con target
  const buscador = (evento) => {
    setBuscar(evento.target.value); //va agarrando y cargando en la funcion varaible lo que tipea
    console.log(evento.target.value);
  };
// variable alternativo para la paginacion


  // ponemos condicionales pa cuando el buscador
  let resultado = []; //primero pasamos un array que contendra las presuestas del buscador
  if (!buscar) {
    resultado = usuarios; //si esta vacio el buscador, entonces trae el array completo
  } else {
    resultado = usuarios.filter((data) =>
      data.name.toLowerCase().includes(buscar.toLowerCase())
    );
  }

  // y luego usamos el useeffect al ultimo le pasamos un array vacio
  //pa que no traiga o repita la peticion a la api

  useEffect(() => {
    verDatos();
  }, []);




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
  const numeroPage = Math.ceil(resultado.length / registroPagina);
  // Obs: volver a ver ya que no entiendo
  const numero = [...Array(numeroPage + 1).keys()].slice(1);
  return (
    <div className="container">
      <div className="table-wrap ">
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
        <table className="table table-borderless  table-responsive pl-2">
          {/* buscador */}

          {/* encabezados de la tabla */}
          <thead>
            <tr>
              <th></th>
              <th className="text-muted fw-600">Usuario</th>
              <th className="text-muted fw-600">Titulo y Autor</th>
              <th className="text-muted fw-600">Carrera/Año</th>
              <th className="text-muted fw-600 ">Cantidad</th>
              <th className="text-muted fw-600">Estado</th>
              <th className="text-muted fw-600">Acciones</th>
            </tr>
          </thead>
          {/* cuerpo */}
          <tbody>
            {/* antes recorremos la variable de estado que contiene el json con map 
                 q es usuario y concantenamos con el array vacio llamado resultado pa q traiga */}
            {/* le asignamos un nuevo nombre al array qu returno con map q es:datos */}
            {registro.map((p) => (//aca afecta al buscador cuando usamos el array registro por resultado
              <tr key={p.id} className="align-middle alert" role="alert">
                <td>
                  <input type="checkbox" id="check" value="hola" />
                </td>
                {/* apartado usuario */}
                <td>
                  <div className="d-flex align-items-center">
                    <div className="img-container">
                      <img src={p.image} alt="" />
                    </div>
                    <div className="ps-1">
                      <div className="fw-600 pb-3">{p.name}</div>
                      <p className="m-0 text-grey fs-09">Agregado: 03/05/2023</p>
                    </div>
                  </div>
                </td>
                {/* titlulo y autor */}
                <td>
                  <div className="fw-600">Las Cronicas De Narnia el leon y el ropero magico</div>
                </td>
                {/* carrera/Año */}
                <td>
                  <div className="fw-600"> 3°-Ing. Informatica Turno Tarde</div>
                </td>
                {/* cantidad */}
                <td>
                  <div className="fw-600 "> 3 </div>
                </td>
                <td>
                <div className="d-flex align-items-center waiting">
                                <div className="circle p-1"></div>
                                <div className="ps-4">Devolver libros</div>
                            </div>
                </td>
                <td>
                  <div className="btn pl-2" data-bs-dismiss="alert">
                    <FontAwesomeIcon
                      className="ps-4"
                      icon={faTrash}
                      style={{ color: "#d70909" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        {/* aqui hacemos front de la paginacion con boostrap */}
        <nav className="d-flex justify-content-center ">
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
