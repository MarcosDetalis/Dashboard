import React from "react";
import Validacion from "../Dominio/Ver_informeValidacio";
export default function Ver_infromes() {
  const [inputs, handleFieldChange, getErrors, errors, pass] = Validacion({
    fechadesde: "",
  });
  const submit = () => {
    getErrors();
    
  };
  console.log("kkk",errors.op)

  
  function col() {
     
    if (errors.op == "Error en el formato") {
      return " border-bottom border-danger ";
    } else {
      return "ss ";
    }
  }
 


  return (
    <div className="inner_page login ">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login"></div>
              <div className="login_form">
                <form>
                  <fieldset>
                    <div class="form-row">
                      <div class="col-md-6 form-group">
                        <label className="label_field font-weight-bold">
                          Fecha Desde:
                        </label>
                        <input
                          type="date"
                          name="fechadesde"
                          id="fechadesde"
                          value={inputs.fechadesde}
                          onChange={handleFieldChange}
                          className={
                            errors.op == "Error en el formato"
                              ? "border-bottom border-danger"
                              : ""
                          }
                           
                          required
                        />
                        {errors?.op && (
                          <span className="text-danger center  font-weight-bold">
                            {errors.op}
                          </span>
                        )}
                      </div>

                      <div class="col-md-6 form-group">
                        <label className="label_field font-weight-bold">
                          Fecha Hasta:
                        </label>
                        <input type="date" name="fechahasta" required />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label_field font-weight-bold">
                        Carreras:
                      </label>
                      <br />
                      <select className="form-control">
                        <option value="">Ing.Informatica</option>
                        <option value="">Derecho</option>
                        <option value="">Contabilidad</option>
                      </select>
                    </div>

                    <div className="field">
                      <ul className="nav nav-pills nav-stacked labels-category inbox-divider">
                        <li>
                          <h4>Estado:</h4>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-circle"></i> Devueltos
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-circle"></i> Aprovado
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-circle"></i> En Reservas
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="field ">
                      <button className="main_bt  " onClick={submit}>
                        <i className="fa fa-file-pdf-o">
                          <span className="m-1">Imprimir Informe</span>
                        </i>
                      </button>
                      <button className="main_bt m-3 btn-primary">
                        <i className="fa fa-trash">
                          <span className="m-1">Limpiar</span>
                        </i>
                      </button>
                      <button className="main_bt btn-danger ">
                        <i className="fa fa-mail-reply">
                          <span className="m-1">Salir</span>
                        </i>
                      </button>
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
