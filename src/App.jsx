import Login from "./modulos/login/Interfaz/Login";
import Registro from "./modulos/Agregar_libros/Interfaz/Registro"
import Ver_infromes from "./modulos/Ver_Infromes/Interfaz/Ver_infromes"
import AgregarUser from "./modulos/Registro/Interfaz/Registrar_alumno"
import Hook from "./modulos/Dardebaja/Interfaz/Inter"
import EliminarLibros from "./modulos/EliminarLibro/Interfaz/InterfazEliminar"
import { Routes, Route, Link } from "react-router-dom";
import Frament from "./Frament";
import Solicitud from "./modulos/Ver_solicitudes/Interfaz/Interfaz"
import Solicitud2 from "./modulos/Solicitudes/Solicitud2"
function App() {
  return (
    <div className="App">
      <div className="dashboard dashboard_1">
        <div className="full_container">
          <div className="inner_container">
            <nav id="sidebar">
              <div className="sidebar_blog_1">
                <div className="sidebar-header">
                  <div className="logo_section">
                    <a href="index.html"></a>
                  </div>
                </div>
                <div className="sidebar_user_info">
                  <div className="icon_setting"></div>
                  <div className="user_profle_side">
                    <div className="user_img"></div>
                    <div className="user_info">
                      <h6>John David</h6>
                      <p>
                        <span className="online_animation"></span> Online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar_blog_2">
                <h4>General</h4>

                <Frament> </Frament>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="topbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="full">
              <button type="button" id="sidebarCollapse" class="sidebar_toggle">
                <i class="fa fa-bars"></i>
              </button>
              <div class="logo_section">
                <a href="index.html">
                  <img
                    class="img-responsive"
                    src="images/logo/logo.png"
                    alt="#"
                  />
                </a>
              </div>
              <div class="right_topbar">
                <div class="icon_info">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-bell-o"></i>
                        <span class="badge">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-question-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-envelope-o"></i>
                        <span class="badge">3</span>
                      </a>
                    </li>
                  </ul>
                  <ul class="user_profile_dd">
                    <li>
                      <a class="dropdown-toggle" data-toggle="dropdown">
                        <img
                          class="img-responsive rounded-circle"
                          src="images/layout_img/user_img.jpg"
                          alt="#"
                        />
                        <span class="name_user">John David</span>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="profile.html">
                          My Profile
                        </a>
                        <a class="dropdown-item" href="settings.html">
                          Settings
                        </a>
                        <a class="dropdown-item" href="help.html">
                          Help
                        </a>
                        <a class="dropdown-item" href="#">
                          <span>Log Out</span> <i class="fa fa-sign-out"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="midde_cont">
          <div class="container-fluid">
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/Registro" element={<Registro />} />
              <Route path="/Ver_infrom" element={<Ver_infromes />} />
              <Route path="/hook" element={<Hook />} />
              <Route path="/Registrar_user" element={<AgregarUser />} />
              <Route path="/Eliminar" element={<EliminarLibros />} />
              <Route path="/Solicitud" element={<Solicitud />}></Route>

              <Route path="/Solicitud2" element={<Solicitud2 />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
