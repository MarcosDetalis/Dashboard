import  { Fragment } from 'react'
import { Link } from "react-router-dom";
export default function Frament() {
  return (
    <Fragment>
      <ul className="list-unstyled components">
        <li>
          <Link to={"Login"}>
            <i className="fa fa-table purple_color2"></i>
            Login
          </Link>
        </li>

        <li>
          <Link to={"Registro"}>
            <i className="fa fa-edit yellow_color"></i>
            <span>Agregar</span>
          </Link>
        </li>
        <li>
          <Link to={"Ver_infrom"}>
            <i className="fa fa-bar-chart-o red_color"></i>
            <span>Ver reportes</span>
          </Link>
        </li>
        <li>
          <Link to={"Solicitud"}>
            <i className="fa fa-eye green_color"></i>
            <span>Ver solicitudes</span>
          </Link>
        </li>
        <li>
          <Link to={"Registrar_user"}>
            <i className="fa fa-group blue1_color"></i>
            <span>Registrar Usuarios</span>
          </Link>
        </li>
        <li>
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
        </li>

      </ul>
    </Fragment>
  );
}
