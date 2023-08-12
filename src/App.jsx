import Login from "./modulos/login/Interfaz/Login";
import Registro from "./modulos/Agregar_libros/Interfaz/Registro";
import Ver_infromes from "./modulos/Ver_Infromes/Interfaz/Ver_infromes";
import AgregarUser from "./modulos/Registro_usuarios/Interfaz/Registrar_usuarios";
import Hook from "./modulos/Dardebaja/Interfaz/Inter";
import { Routes, Route } from "react-router-dom";
import Frament from "./Frament";
import Solicitud2 from "./modulos/Solicitud/interfaz/Solicitud2";
import Panel from "./modulos/PanelPrincipal/interfaz/Interfaz";
import AgregarAutor from "./modulos/AgregarAutor/Interfaz/Registro";
import AgregarCategoria from './modulos/AgregarCategoria/Interfaz/Registro'
import AgregarBibliografia from './modulos/AgregarTipoBibliografia/Interfaz/Registro'
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
                      <h6>Nombre usuario</h6>
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
            <div id="content">
              <div className="topbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="full">
                    <button
                      type="button"
                      id="sidebarCollapse"
                      className="sidebar_toggle"
                    >
                      <i className="fa fa-bars"></i>
                    </button>
                    <div className="logo_section">
                      <a href="/">
                        <img
                          className="img-responsive"
                          src="images/logo/logo.png"
                          alt="#"
                        />
                      </a>
                    </div>
                    <div className="right_topbar">
                      <div className="icon_info">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-bell-o"></i>
                              <span className="badge">2</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-envelope-o"></i>
                              <span className="badge">3</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="user_profile_dd">
                          <li>
                            <a
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              <img
                                className="img-responsive rounded-circle"
                                src="images/layout_img/user_img.jpg"
                                alt="#"
                              />
                              <span className="name_user">Nombre usuario</span>
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="profile.html">
                                My Profile
                              </a>
                              <a className="dropdown-item" href="settings.html">
                                Settings
                              </a>
                              <a className="dropdown-item" href="help.html">
                                Help
                              </a>
                              <a className="dropdown-item" href="#">
                                <span>Log Out</span>{" "}
                                <i className="fa fa-sign-out"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="midde_cont">
                <div className="container-fluid">
                  <Routes>
                    AgregarBibliografia
                    <Route path="/" element={<Panel />} />
                    <Route path="/AgregarAutor" element={<AgregarAutor />} />
                    <Route
                      path="/AgregarCategoria"
                      element={<AgregarCategoria />}
                    />
                    <Route
                      path="/AgregarBibliografia"
                      element={<AgregarBibliografia />}
                    />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Registro" element={<Registro />} />
                    <Route path="/Ver_infrom" element={<Ver_infromes />} />
                    <Route path="/hook" element={<Hook />} />
                    <Route path="/Registrar_user" element={<AgregarUser />} />
                    <Route path="/Solicitud" element={<Solicitud2 />}></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
