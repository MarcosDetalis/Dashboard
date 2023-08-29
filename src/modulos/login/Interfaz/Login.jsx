
import { useState } from "react";
import validacion from "../Dominio/Validacion";
//-> hacemos un import de nuestra funcion 
export default function Login() {
  //-> Creamos la intructura que deamos utilizar(estado , funciones,  dentro del hooks), enviamos parametros a nuesta
  //funcion de validacion con una estructura json de tal forma para manejar por clave y valor.
  const [inputs, handleFieldChange, getErrors, emialerror, passerror] =
    validacion({
      emailid: "",
      passwordid: "", //->Son los paramtros
    });

  //-> Creamos una funcion la cual llama a una funcion dentro de nuestro hooks de validacion.
  const submit = () => {
    getErrors();
  };

// estado pa obtener el usuario y pass del login
const [login,setLogin]=useState({username:'',password:''});

// funcion que agarra el valor de los inputsd
const inputChange({target})=>{
  const {name,value}=target
  setLogin({
    ...login,
    [name]:value
  })
  
}


  return (
    <div className="inner_page login">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login"></div>
              <div className="login_form">
                <form>
                  <fieldset>
                    <div className="field">
                      <label className="label_field font-weight-bold">
                        E-mail
                      </label>
                      {/* campo correo */}
                      <input
                        type="email"
                        name="username"
                        placeholder="E-mail"
                        id="emailid"
                        //  value={inputs.emailid}
                        value={login.username} //-> obtenemos el valor
                        onChange={handleFieldChange,inputChange} //-> cada cambio que pase en input llamara a nuestra funcion de return del hooks validar
                        className={
                          emialerror.emial ==
                          "El correo es un campo obligatorio"
                            ? "border-bottom border-danger"
                            : " "
                        } //->Es para poner en rojo los bordes usamos una ternaria la cual ya se lee lo que hace
                        required
                      />

                      {emialerror?.emial && (
                        <span className="text-danger center  font-weight-bold">
                          {emialerror.emial}
                        </span>
                      )}
                      {/* -> Es para mostrar los mensajes que viene del nuetro hooks emialerror es el estado y emial es la clave del json. */}
                    </div>
                    <div className="field">
                      <label className="label_field font-weight-bold">
                        Password
                      </label>
                      {/* campo password */}
                      <input
                        type="password"
                        name="password"
                        id="passwordid"
                        placeholder="Password"
                        // value={inputs.passwordid}
                        value={login.password}
                        onChange={handleFieldChange,inputChange}
                        className={
                          passerror.passw ==
                          "La contraseña es un campo obligatorio"
                            ? "border-bottom border-danger"
                            : " "
                        }
                        required
                      />

                      {passerror?.passw && (
                        <span className="text-danger center  font-weight-bold ">
                          {passerror.passw}
                        </span>
                      )}
                      {/*Tener encuenta que cada estado tiene un mensaje diferente y solo de tal forma se llama cada uno */}
                    </div>
                    <div className="field">
                      <label className="label_field hidden">hidden label</label>
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Recordar Contraseña
                      </label>
                      <a className="forgot" href="">
                        Recuperar Contraseña
                      </a>
                    </div>
                    <div className="field margin_0">
                      <label className="label_field hidden">hidden label</label>
                      <button className="main_bt" onClick={submit}>
                        Ingresar
                      </button>
                      {/* onclick es para llamar nuestra funcion la cual nos retornara datos osea los mensajes. */}
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
