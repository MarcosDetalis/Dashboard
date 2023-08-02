import  { Fragment } from 'react'
import { Link } from "react-router-dom";
export default function Frament() {
  return (
    <Fragment>
      <ul className="list-unstyled components">
        <li>
          <a
            href="#apps"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            <i className="fa fa-object-group blue2_color"></i>{" "}
            <span>Mantenimiento</span>
          </a>
          <ul className="collapse list-unstyled" id="apps">
            <li>
              <Link to={"AgregarAutor"}>
                <span>Angregar Autor</span>
              </Link>
            </li>
            <li>
              
                <Link to={"AgregarCategoria"}>
                  <span>Agregar Categoria</span>
                </Link>
               
            </li>
            <li>
               <Link to={"AgregarBibliografia"}> 
                <span>Agragar Tipo de Bibliografia</span>
               </Link>
            </li>
          </ul>
        </li>

      {/*   <li>
          <Link to={"Login"}>
            <i className="fa fa-table purple_color2"></i>
            Login
          </Link>
        </li>
 */}
        <li>
          <Link to={"Registro"}>
            <i className="fa fa-edit yellow_color"></i>
            <span>Agregar Libros</span>
          </Link>
        </li>
        <li>
          <Link to={"Solicitud"}>
            <i className="fa fa-eye green_color"></i>
            <span>Ver solicitudes</span>
          </Link>
        </li>
        <li>
          <Link to={"Ver_infrom"}>
            <i className="fa fa-bar-chart-o red_color"></i>
            <span>Ver reportes</span>
          </Link>
        </li>
      
        <li>
          <Link to={"Registrar_user"}>
            <i className="fa fa-group blue1_color"></i>
            <span>Registrar Usuarios</span>
          </Link>
        </li>
      {/*   <li>
          <Link to={"Eliminar"}>
            <i className="fa fa-table purple_color2"></i>
            <span>Eliminar Libros</span>
          </Link>
        </li>

        <li>
          <Link to={"hook"}>
            <i className="fa fa-table purple_color2"></i>
            <span>hook</span>
          </Link>
        </li>


        <li>
          <Link to={"Solicitud2"}>
            <i className="fa fa-table purple_color2"></i>
            <span>Solicitud2</span>
          </Link>
        </li> */}

      </ul>
    </Fragment>
  );
}
