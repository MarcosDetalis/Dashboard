import { React } from "react";
import Service from "../Infraestrutura/Service"
import { getAxios } from "../Dominio/Dominio";

export default function Registro() {
  const [inputs, handleFieldChange, PostsReservas] =
    Service({
      alumnoid:"",
      estadoid:"", //->Son los paramtros
      fechaid:""
    });
  
  
  let handleSubmit = (e) => {
    e.preventDefault();
    PostsReservas()
    getAxios(inputs.alumnoid);
    console.log(getAxios())
  
  };



  return (
    <div className="inner_page login ">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login"></div>
              <div className="login_form">
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="field">
                      <label className="label_field font-weight-bold">
                        Autor:
                      </label>
                      <input
                        type="text"
                        name="alumno"
                        id="alumnoid"
                        placeholder="alumno"
                        value={inputs.alumnoid}
                        onChange={handleFieldChange}
                      />
                     
                    </div>
                    <div className="field">
                      <label className="label_field font-weight-bold">
                        estado:
                      </label>
                      <input
                        type="text"
                        name="estado"
                        id="estadoid"
                        placeholder="Titulo"
                        value={inputs.estadoid}
                        onChange={handleFieldChange}
                      />
                    </div>

                    <div className="field">
                      <label className="label_field font-weight-bold">
                        fecha:
                      </label>
                      <input
                        type="date"
                        name="fecha"
                        id="fechaid"
                        placeholder="Titulo"
                        value={inputs.fechaid}
                        onChange={handleFieldChange}
                      />
                    </div>

                    <div className="field ">
                      <button className="main_bt  " type="submit">
                        <i className="fa fa-file-pdf-o">
                          <span className="m-1">Guardar</span>
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
